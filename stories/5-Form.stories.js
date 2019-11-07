import React from 'react';
import { action } from '@storybook/addon-actions';
import FormValidation from '../src/helpers/FormValidation'

export default {
  title: 'Form',
};

export const FormValidationSample = () => {
  
  const formController = new FormValidation()

  const [options1, setOptions1] = React.useState({
    name: 'name1',
    minLength: 1,
    maxLength: 10,
    required: true
  });

  const [options2, setOptions2] = React.useState({
    name: 'name2',
    required: true,
    rules: [
      (value) => value > 10,
      (value) => value > 20
    ]
  });

  const [options3, setOptions3] = React.useState({
    name: 'name3',
    required: true
  });

  const onSubmit = (result) => {
    action('onSubmit')(result)
  }

  return (
    <div>
      <form onSubmit={formController.onSubmit(onSubmit)}>
        <input type="text" name="name" defaultValue="default" ref={formController.createValidRef(options1)}/>
        <input type="number" name="number" defaultValue="1" ref={formController.createValidRef(options2)}/>

        <input type="submit"/>
      </form>
      <input type="checkbox" name="checkbox" checked ref={formController.createValidRef(options3)}/>
    </div>
  )
}
