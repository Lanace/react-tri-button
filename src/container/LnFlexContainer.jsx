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

  injectChildrenDragEventProps = (child) => {
    const cloneElement = React.cloneElement(child, {
      draggable: true,
      onDragEnd: this.dragEnd.bind(this, child.props.index),
      onDragStart: this.dragStart.bind(this, child.props.index)
    });

    return cloneElement;
  }

  sortChildrenOrdering = (a, b) => {
    const priority = a.order - b.order;
    if (priority > 0) {
      return 1;
    } else if (priority < 0) {
      return -1;
    } else {
      return 0;
    }
  };

  close = (index) => {
    console.log(index);
    const unTargetChild = this.state.children.filter((c) => c.props.index !== index);
    this.setState({
      children: unTargetChild
    });
  };

  dragStart = (index, e) => {
    console.log(`[dragStart] ${index}: `, e);
  }

  dragEnd = (index, e) => {
    console.log(`[dragEnd] ${index}: `, e);
  }

  render () {
    const injectedDragEventChildrens = React.Children.map(this.state.children, this.injectChildrenDragEventProps)
    const filterdChildren = injectedDragEventChildrens.sort(this.sortChildrenOrdering);

    return (
      <div className="ln-flex-container">
        {filterdChildren}
      </div>
    )
  }
}

export default LnFlexContainer;
