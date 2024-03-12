'use client';

import { createRoot } from 'react-dom/client';
import { LabelledInput } from 'ui-components-demo';


const HelloWithLabelledInput = () => {
  return <>
    <h1>Hello there with React {import.meta.env.VITE_REACT_VERSION}!</h1>
    <fieldset style={{width: '400px'}}>
    <legend>Find out what&#39;s going on</legend>
      <LabelledInput inputType="radio">Choose the red pill</LabelledInput>
      <LabelledInput inputType="radio">Choose the blue pill</LabelledInput>
    </fieldset>
  </>
}

const App = () => <HelloWithLabelledInput />;

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);

