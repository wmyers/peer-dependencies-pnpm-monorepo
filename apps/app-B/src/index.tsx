'use client';

import { AlertButton as AlertButtonTailwind } from '@recipeez/ui-components';
import ReactDOM from 'react-dom';
import { AlertButton as AlertButtonDemo } from 'ui-components-demo';
import './tailwind.css';

const HelloWithButton = () => {
  return <>
    <h1 className='mb-4 text-4xl font-extrabold '>Hello there with React {import.meta.env.VITE_REACT_VERSION}!</h1>
    <AlertButtonDemo alertMessage='Now why did you do that?!'>Go on click me</AlertButtonDemo>
    <AlertButtonTailwind alertMessage='Now why did you do that with Tailwind?!'>Go on click me</AlertButtonTailwind>
  </>
}

const App = () => <HelloWithButton />;
ReactDOM.render(<App />, document.getElementById('root'));
