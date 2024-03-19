'use client';

import { createRoot } from 'react-dom/client';
import { LabelledInput } from 'ui-components-demo';

import { AlertButton as AlertButtonTailwind, Button as ButtonTailwind } from '@recipeez/ui-components';
import '@recipeez/ui-components/dist/style.css';


const HelloWithLabelledInput = () => {
  return <>
    <h1>Hello there with React {import.meta.env.VITE_REACT_VERSION}!</h1>
    <fieldset style={{width: '400px'}}>
    <legend>Find out what&#39;s going on</legend>
      <LabelledInput inputType="radio">Choose the red pill</LabelledInput>
      <LabelledInput inputType="radio">Choose the blue pill</LabelledInput>
    </fieldset>
    <AlertButtonTailwind alertMessage='Now why did you do that with Tailwind?!'>Go on click me</AlertButtonTailwind>
    <ButtonTailwind color='secondary'>Click me</ButtonTailwind>
  </>
}

const App = () => <HelloWithLabelledInput />;

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);

