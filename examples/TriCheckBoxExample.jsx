import React from 'react';
import TriCheckBox from '../src/TriCheckBox';

import {} from '@material-ui/core';

class TriCheckBoxExample extends React.Component {

  onChange = (value) => {
    console.log(value);
  }
  render () {
    return (
      <div>
        <TriCheckBox 
          checkingText="Checked"
          uncheckingText=" Non-Checked"
          intermediatingText="Intermediate"
          onChange={this.onChange}/>
      </div>
    )
  }
}

export default TriCheckBoxExample;
