import React from 'react';
import './LnFlexContainer.css';

class LnFlexContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      children: React.Children.map(props.children, this.injectChildrenProps)
    }
  }

  injectChildrenProps = (child, index) => {
    const cloneElement = React.cloneElement(child, {
      index: index,
      close: this.close.bind(this, index),
      order: child.props.order || 0
    });

    return cloneElement;
  };

  close = (index) => {
    console.log(index);
    const unTargetChild = this.state.children.filter((c) => c.props.index !== index);
    this.setState({
      children: unTargetChild
    });
  };

  render () {
    const filterdChildren = this.state.children.sort((a, b) => {
      const priority = a.order - b.order;
      if (priority > 0) {
        return 1;
      } else if (priority < 0) {
        return -1;
      } else {
        return 0;
      }
    })
    return (
      <div className="ln-flex-container">
        {filterdChildren}
      </div>
    )
  }
}

export default LnFlexContainer;
