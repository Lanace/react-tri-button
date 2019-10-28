import React from 'react';
import PropTypes from 'prop-types';

class TriCheckBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: props.indeterminate ? 3 : props.checked ? 1 : 0,
      checkedIcon: props.checkedIcon
    }
  }

  onChangeCheckBox = () => {
    this.setState((prevState) => {
      return {value: (prevState.value + 1) % 3};
    }, (state) => {
      this.props.onChange(this.state.value);
    });
  }

  componentDidUpdate () {
    this.refs.checkbox.indeterminate = this.state.value === 2;
  }

  render() {

    let text = '';

    switch(this.state.value) {
      case 0: 
        text = this.props.uncheckingText
        break;
      case 1: 
        text = this.props.checkingText
        break;
      default: 
        text = this.props.intermediatingText
        break;
    }

    return (
      <label>
        <input type="checkbox" ref="checkbox" onChange={this.onChangeCheckBox} checked={this.state.value === 1}></input>
        <span>{text}</span>
      </label>
    )
  }
}

TriCheckBox.propTypes = {
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  checkingText: PropTypes.string,
  uncheckingText: PropTypes.string,
  intermediatingText: PropTypes.string,
  checkedIcon: PropTypes.string,

  onChange: PropTypes.func
}

TriCheckBox.defaultProps = {
  checked: false,
  indeterminate: false,
  checkingText: '',
  uncheckingText: '',
  intermediatingText: '',
  checkedIcon: '',

  onChange: () => {}
}

export default TriCheckBox;
