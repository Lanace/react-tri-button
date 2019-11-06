import {createRef} from 'react';
import FormValidationOptions from './FormValidationOptions';

class FormValidation {

  refList = [];

  onSubmit = (onSuccessFunc) => {
    return (event) => {
      event.preventDefault();
      onSuccessFunc(this.refList.map((refObj) => refObj.options.validate(refObj.ref)));
    }
  }

  createValidRef = (options) => {
    const ref = createRef();
    this.refList.push({
      ref, 
      options: new FormValidationOptions(options)
    });

    return ref;
  }
}

export default FormValidation