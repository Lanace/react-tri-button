class FormValidationOptions {
  defaultOptions = {
    name: '',
    minLength: -1,
    maxLength: Number.MAX_VALUE,

    required: false,
    rules: []
  }
  
  options = {}

  constructor(options) {
    if (!options || !options.name) {
      console.warn('name is required in validation options');
    }

    this.options = Object.assign(this.defaultOptions, options);
  }

  validate = (ref) => {
    const value = ref.current.value;
    let validation = true;
    const errors = [];

    if (!value && this.options.required) {
      validation = false;
      errors.push({
        type: 'required',
        message: ''
      });
    }

    if (value.length > this.options.maxLength) {
      validation = false;
      errors.push({
        type: 'maxLength',
        message: ''
      });
    }

    if (value.length < this.options.minLength) {
      validation = false;
      errors.push({
        type: 'minLength',
        message: ''
      });
    }

    const ruleResults = this.options.rules.map(rule => {
      return rule(value)
    }).filter(result => !result);

    if (ruleResults.length > 0) {
      validation = false;
      errors.push({
        type: 'rules',
        message: ''
      });
    }

    return {
      name: this.options.name,
      validation,
      errors
    }
  }
}

export default FormValidationOptions;
