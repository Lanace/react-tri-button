import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { TriCheckBox, PendingButton, LnFlexContainer, LnResizableContainer, LnFlexPannel } from '../src/index';
import FormValidation from '../src/helpers/FormValidation'

export default {
  title: 'Form Example'
}

const loginFormSample = () => {
  const formController = new FormValidation()

  const [options1, setOptions1] = React.useState({
    name: 'name3',
    required: true
  });

  const onSubmit = (result) => {
    action('onSubmit')(result)
  }

  const login = () => {
    return new Promise((resolve, reject) => {
      formController.onSubmit((data) => {
        action()(data);
        // Data Validation

        resolve();

        reject();
      })();
    });
  }

  return (
    <div>
      <form>
        <input type="email" name="email" defaultValue="" ref={formController.createValidRef(options1)}/>
        <input type="password" name="password" defaultValue="1" ref={formController.createValidRef(options1)}/>

        <label>
          <TriCheckBox checkingText="Remember me!" uncheckingText="Forget me!" intermediatingText="Well...?"/>
          Auto Login
        </label>

        <PendingButton fetchingText="Wait..." successText="Success Login" failText="Fail Login" onFetching={login}>Login</PendingButton>
      </form>
    </div>
  );
};

export const LnResizableContainerSample = () => {

  const [width, setWidht] = useState(100);
  const [height, setHeight] = useState(100);

  const onResize = (width, height) => {
    setWidht(width);
    setHeight(height);
  }

  return (
    <LnFlexContainer width={width} height={height} onResize={onResize}>
      <LnFlexPannel>
        {loginFormSample()}
      </LnFlexPannel>
    </LnFlexContainer>
  )
}
