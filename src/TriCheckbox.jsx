import React from 'react';
import PropTypes from 'prop-types';

import isMuiElement from './utiles';

class TriCheckBox extends React.Component {
  constructor(props) {
    super(props);

    const childrenNodes = [];
    React.Children.forEach(props.children, (child, index) => {
      if (isMuiElement(child, ['TriCheckBox'])) {
        const childProps = { ...child.props };
        childProps.onMonkyChange = childProps.onChange;
        childProps.onChange = (value) => {
          if (this.props.propagation) {
            this.onChildChangeCheckBox(index, value);
          }

          if (childProps.onMonkyChange) {
            childProps.onMonkyChange(value);
          }
        };
        childrenNodes.push(childProps);
      }
    });

    let value = 0;
    if (props.indeterminate) {
      value = 2;
    } else if (props.checked) {
      value = 1;
    }

    this.state = { value, childrenNodes };
  }

  onChangeCheckBox = () => {
    this.setState((prevState) => {
      const value = (prevState.value + 1) % 3;
      const childrenNodes = prevState.childrenNodes.map((props) => {
        const temp = { ...props };
        temp.checked = value === 1;
        temp.indeterminate = false;
        return temp;
      });

      return { value, childrenNodes };
    }, () => {
      this.props.onChange(this.state.value);
    });
  }

  onChildChangeCheckBox = (index, value) => {
    this.setState({
      childrenNodes: this.state.childrenNodes.map((child, i) => {
        const additionalChild = { ...child };
        if (i === index) {
          additionalChild.checked = value === 1;
          additionalChild.indeterminate = value === 2;
        }
        return additionalChild;
      })
    }, () => {
      const checkedCount = this.state.childrenNodes.filter((child) => child.checked).length;
      if (checkedCount === 0) {
        this.onValueChange(0);
      } else if (checkedCount === this.state.childrenNodes.length) {
        this.onValueChange(1);
      } else {
        this.onValueChange(2);
      }
    });
  }

  onValueChange = (value) => {
    if (value === this.state.value) {
      return;
    }

    this.setState({ value }, () => {
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    });
  }

  getInitValue = (indeterminate, checked) => {
    let result = 0;
    if (indeterminate) {
      result = 2;
    } else if (checked) {
      result = 1;
    }

    return result;
  }

  componentDidUpdate(prevProps) {
    this.refs.checkbox.indeterminate = this.state.value === 2;

    if (prevProps.checked !== this.props.checked
      || prevProps.indeterminate !== this.props.indeterminate) {
      this.setState({
        value: this.getInitValue(this.props.indeterminate, this.props.checked)
      }, () => {
        // this.props.onChange(this.state.value);
      });
    }
  }

  render() {
    let text = '';

    switch (this.state.value) {
      case 0:
        text = this.props.uncheckingText;
        break;
      case 1:
        text = this.props.checkingText;
        break;
      default:
        text = this.props.intermediatingText;
        break;
    }

    const childrenNode = (
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
    );
  }
}

TriCheckBox.propTypes = {
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  checkingText: PropTypes.string,
  uncheckingText: PropTypes.string,
  intermediatingText: PropTypes.string,
  propagation: PropTypes.bool,
  children: PropTypes.node,

  onChange: PropTypes.func
};

TriCheckBox.defaultProps = {
  checked: false,
  indeterminate: false,
  checkingText: '',
  uncheckingText: '',
  intermediatingText: '',
  propagation: true,

  onChange: () => {}
};

export default TriCheckBox;
