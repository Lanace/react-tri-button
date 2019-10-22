import React from 'react';
import PropTypes from 'prop-types';

class TriCheckBoxGroup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      stateIndex: 0
    }
  }
  
  render() {
    return (
      <input type="checkbox"/>
    )
  }
}


export default TriCheckBoxGroup;
