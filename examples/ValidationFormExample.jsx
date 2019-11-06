import React from 'react';
import FormValidation from '../src/helpers/FormValidation'

class ValidationFormExample extends React.Component {

  constructor (props) {
    super(props);

    this.formController = new FormValidation()

    this.state = {
      options1: {
        minLength: 1,
        maxLength: 10,
        required: true
      },
      options2: {
        required: true,
        rules: [
          (value) => value > 10,
          (value) => value > 20
        ]
      },
      options3: {
        required: true
      }
    }
  }

  onSubmit = (result) => {
    console.log('submit!', result);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.formController.onSubmit(this.onSubmit)}>
          <input type="text" defaultValue="default" ref={this.formController.createValidRef(this.state.options1)}/>
          <input type="number" defaultValue="1" ref={this.formController.createValidRef(this.state.options2)}/>

          <input type="submit"/>
        </form>
        <input type="checkbox" checked ref={this.formController.createValidRef(this.state.options3)}/>
      </div>
    )
  }
}

export default ValidationFormExample;
