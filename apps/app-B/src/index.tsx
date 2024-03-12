'use client';

import ReactDOM from 'react-dom';
import { AlertButton } from 'ui-components-demo';

const HelloWithButton = () => {
  return <>
    <h1>Hello there with React {import.meta.env.VITE_REACT_VERSION}!</h1>
    <AlertButton alertMessage='Now why did you do that?!'>Go on click me</AlertButton>
  </>
}

const App = () => <HelloWithButton />;
ReactDOM.render(<App />, document.getElementById('root'));
