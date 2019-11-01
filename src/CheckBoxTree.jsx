import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {isMuiElement} from './utiles';

const getChildrenProps = (children) => {
  const childrenNodes = [];
  React.Children.forEach(children, (child, index) => {
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

  return childrenNodes;
}

const CheckBoxTree = (props) => {

  const [value, setValue] = useState(props.indeterminate ? 2 : props.checked ? 1 : 0);
  const [childrenNodes, setChildrenNodes] = useState(getChildrenProps(props.children));
  const [textArray, _] = useState([props.uncheckingText, props.checkingText, props.intermediatingText]);

  useEffect(() => {
    props.onChange(value);

    setChildrenNodes(childrenNodes.map(props => {
      const temp = Object.assign({}, props);
      temp.checked = changedValue === 1;
      temp.indeterminate = changedValue === 2;
      return temp;
    }));
  }, [value]);

  useEffect(() => {

  }, [childrenNodes])

  const onChangeCheckBox = () => {
    setValue((value + 1) % 3);
  }

  const onChildChangeCheckBox = (index, value) => {
    setChildrenNodes(
      childrenNodes.map((child, i) => {
        if (i === index) {
          child.checked = value === 1;
          child.indeterminate = value === 2;
        }
        return child;
      })
    );
  }

  return (
    <div>
        <label>
          <input type="checkbox" ref="checkbox" onChange={this.onChangeCheckBox} checked={this.state.value === 1}></input>
          <span>{textArray[value]}</span>
        </label>
        <div>
          <ul>
            {childrenNodes.map((props, index) => <li key={index}><CheckBoxTree {...props}/></li>)}
          </ul>
        </div>
    </div>
  )
}

export default CheckBoxTree;
