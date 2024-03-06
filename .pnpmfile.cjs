function getVersionFromString (versionStr) {
  return versionStr.includes('(') ? versionStr.substring(0, versionStr.indexOf('(')) : versionStr.substring(0);
}

// Use this script if for some reason you aren't getting peer dependencies mismatch warnings (or similar warnings) when running `pnpm install` (possibly if you aren't using dependenciesMeta > injected)
// This script analyzes package install data before it is serialized to pnpm-lock.yaml. It warns about basic mismatches in peer dependency major versions between local shared workspace packages (in `packages` folder) and local consuming workspace packages (in `apps` folder).
// This script also updates the pnpm-lock.yaml (which automatically moves workspace package peerDependencies into dependencies) by moving them into devDependencies instead.
// NB it does not seem currently possible to require packages in `.pnpmfile.cjs` (see: https://github.com/pnpm/pnpm/issues/6731), so unable to use the semver package when comparing package versions.
function warnForSharedPackageDependencyPeers (lockfile) {
  // from the 'importers' object, get a list of shared packages (names start with 'packages/'), and consumer packages (names start with 'apps/')
  const { importers } = lockfile;
  const sharedWSPkgNames = Object.keys(importers).filter(pkgName => pkgName.startsWith('packages/'));
  const consumerWSPkgNames = Object.keys(importers).filter(pkgName => pkgName.startsWith('apps/'));
  // for each shared package, check which 'peerDependencies' have been moved by pnpm into 'dependencies'.
  for (const sharedWSPkgName of sharedWSPkgNames){
    const sharedWSPkg = importers[sharedWSPkgName];
    const sharedWSPkgDependencies = sharedWSPkg.dependencies;
    const sharedWSPkgDependencyNames = Object.keys(sharedWSPkgDependencies);
    let sharedWSPkgPeerDependencies = new Map();
    let updatedSharedWSPkgDependencies = new Map();
    for (const consumerWSPkgName of consumerWSPkgNames){
      const consumerWSPkg = importers[consumerWSPkgName];
      const consumerWSPkgDependencies = consumerWSPkg.dependencies;
      const consumerWSPkgDependencyNames = Object.keys(consumerWSPkgDependencies);
      const consumerWSPkgDependencyValues = Object.values(consumerWSPkgDependencies);
      // if a consumer package links to the shared package (NB need to check the value which is a local link path)
      if (consumerWSPkgDependencyValues.find(val => val.endsWith(sharedWSPkgName))){
        // check each of the shared package deps and see if they are also in the consumer package deps
        for (const sharedWSPkgDependencyName of sharedWSPkgDependencyNames) {
          // if they are, then they are peer deps for the shared package
          if (consumerWSPkgDependencyNames.includes(sharedWSPkgDependencyName)){
            // check the version of the peer dep in the consumer matches the shared package
            let sharedWSPkgDependencyVersion = getVersionFromString(sharedWSPkgDependencies[sharedWSPkgDependencyName]);
            let consumerWSPkgDependencyVersion = getVersionFromString(consumerWSPkgDependencies[sharedWSPkgDependencyName]);
            if (sharedWSPkgDependencyVersion !== consumerWSPkgDependencyVersion){
              console.warn(`WARNING: Peer dependency mismatch for ${sharedWSPkgName} in ${consumerWSPkgName}. Expected ${sharedWSPkgDependencyName} version ${sharedWSPkgDependencyVersion} but got ${consumerWSPkgDependencyVersion}`);
            }
            console.log('---') // needed fsr to stop warnings being truncated
            // add to shared package peer deps
            sharedWSPkgPeerDependencies.set(sharedWSPkgDependencyName, sharedWSPkgDependencies[sharedWSPkgDependencyName]);
          } else {
            // otherwise they should still be in the shared package deps
            updatedSharedWSPkgDependencies.set(sharedWSPkgDependencyName, sharedWSPkgDependencies[sharedWSPkgDependencyName])
          }
        }
      }
    }
    sharedWSPkgPeerDependencies = Object.fromEntries(sharedWSPkgPeerDependencies.entries());
    updatedSharedWSPkgDependencies = Object.fromEntries(updatedSharedWSPkgDependencies.entries());

    // move any identified peer deps into 'devDependencies' and recreate the 'peerDependencies' property as well
    const updatedSharedWSPkg = {
      ...sharedWSPkg,
      dependencies: updatedSharedWSPkgDependencies,
      devDependencies: {
        ...sharedWSPkg.devDependencies,
        ...sharedWSPkgPeerDependencies // add the peer deps to dev deps, so they are still installed with the package
      },
      peerDependencies: sharedWSPkgPeerDependencies
    }
    lockfile.importers[sharedWSPkgName] = updatedSharedWSPkg;
  };
  return lockfile;
}

function afterAllResolved(lockfile) {
  // - uncomment the next two lines for viewing/debugging package install data before it is serialized to pnpm-lock.yaml
  // const { importers } = lockfile;
  // console.log(importers);

  // - Uncomment this line to use the hacky script above to check versions of peer dependencies
  // - NB this only works for packages that don't use dependenciesMeta > injected. 
  // - It is recommended to just use dependenciesMeta > injected instead as it gives correct warnings using semver
  // return warnForSharedPackageDependencyPeers(lockfile);

  return lockfile;
}

module.exports = {
  hooks: {
    afterAllResolved
  }
}