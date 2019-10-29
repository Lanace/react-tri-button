import React from 'react';
import TriCheckBox from '../src/TriCheckBox';

import {} from '@material-ui/core';

class TriCheckBoxExample extends React.Component {

  onChange = (value) => {
    console.log(value);
  }

  onChange2 = (value) => {
    console.log(value);
  }

  render () {
    return (
      <div>
        <TriCheckBox 
          checkingText="Checked"
          uncheckingText=" Non-Checked"
          intermediatingText="Intermediate"
          onChange={this.onChange}>

            <TriCheckBox
              checkingText="Checked2"
              uncheckingText=" Non-Checked2"
              intermediatingText="Intermediate2"
              onChange={this.onChange2} />

            <TriCheckBox
              checkingText="Checked2"
              uncheckingText=" Non-Checked2"
              intermediatingText="Intermediate2"
              onChange={this.onChange2} />

            <TriCheckBox
              checkingText="Checked2"
              uncheckingText=" Non-Checked2"
              intermediatingText="Intermediate2"
              onChange={this.onChange2} />
        </TriCheckBox>
      </div>
    )
  }
}

export default TriCheckBoxExample;
