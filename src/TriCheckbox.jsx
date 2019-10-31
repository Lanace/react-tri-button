import React from 'react';
import PropTypes from 'prop-types';

import {isMuiElement} from './utiles';

class TriCheckBox extends React.Component {

  constructor(props) {
    super(props);

    const childrenNodes = [];
    React.Children.forEach(props.children, (child, index) => {
      if (isMuiElement(child, ['TriCheckBox'])) {
        const childProps = Object.assign({}, child.props);
        childProps.onChange = (value) => {
          if (this.props.propagation) {
            this.onChildChangeCheckBox(index, value);
          }

          return props.onChange(value);
        }
        childrenNodes.push(childProps);
      }
    });

    this.state = {
      value: props.indeterminate ? 2 : props.checked ? 1 : 0,
      checkedIcon: props.checkedIcon,

      childrenNodes
    }
  }

  onChangeCheckBox = () => {
    this.setState((prevState) => {
      const value = (prevState.value + 1) % 3;
      const childrenNodes = prevState.childrenNodes.map(props => {
        const temp = Object.assign({}, props);
        temp.checked = value === 1;
        temp.indeterminate = false;
        return temp
      });

      return {value, childrenNodes};
    }, () => {
      this.props.onChange(this.state.value);
    });
  }

  onChildChangeCheckBox = (index, value) => {
    this.setState({
      childrenNodes: this.state.childrenNodes.map((child, i) => {
        if (i === index) {
          child.checked = value === 1;
          child.indeterminate = value === 2;
        }
        return child;
      })
    }, () => {
      const checkedCount = this.state.childrenNodes.filter(child => child.checked).length;
      if (checkedCount === 0) {
        this.setState({value: 0});
      } else if (checkedCount === this.state.childrenNodes.length) {
        this.setState({value: 1});
      } else {
        this.setState({value: 2});
      }
    });
  }

  componentDidUpdate (prevProps) {
    this.refs.checkbox.indeterminate = this.state.value === 2;

    if (prevProps.checked !== this.props.checked || prevProps.indeterminate !== this.props.indeterminate) {
      this.setState({
        value: this.props.indeterminate ? 2 : this.props.checked ? 1 : 0
      }, () => {
        // this.props.onChange(this.state.value);
      });
    }
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

    let childrenNode = (
      <ul>
        {
          this.state.childrenNodes.map(
            (props, index) => <li key={index}>
              <TriCheckBox {...props} />
            </li>
          )
        }
      </ul>
    );

    return (
      <div>
        <label>
          <input type="checkbox" ref="checkbox" onChange={this.onChangeCheckBox} checked={this.state.value === 1}></input>
          <span>{text}</span>
        </label>
        {childrenNode}
      </div>
    )
  }
}

TriCheckBox.propTypes = {
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  checkingText: PropTypes.string,
  uncheckingText: PropTypes.string,
  intermediatingText: PropTypes.string,
  propagation: PropTypes.bool,
  checkedIcon: PropTypes.string,
  children: PropTypes.node,

  onChange: PropTypes.func
}

TriCheckBox.defaultProps = {
  checked: false,
  indeterminate: false,
  checkingText: '',
  uncheckingText: '',
  intermediatingText: '',
  propagation: true,
  checkedIcon: '',

  onChange: () => {}
}

export default TriCheckBox;
