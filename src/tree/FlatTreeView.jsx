import React from 'react';
import isMuiElement from '../utiles';

class FlatTreeView extends React.Component {

  constructor(props) {
    super(props);

    const treeItemArray = [];
    let currentId = 0
    const makeFlatTree = (parentKey, children) => {
      React.Children.forEach(children, child => {
        if (isMuiElement(child, ['FlatTreeItem'])) {
          currentId += 1;
          let c = child.props.children;
          if (child.props.children && Array.isArray(child.props.children)) {
            c = child.props.children.filter(c => !isMuiElement(c, ['FlatTreeItem']));
          }

          treeItemArray.push(React.cloneElement(child, {
            id: currentId,
            parent: parentKey,
            draggable: true,
            onDragEnter: this.onDragEnter.bind(this, currentId),
            onDragStart: this.onDragStart.bind(this, currentId),
            onDragEnd: this.onDragEnd.bind(this, currentId),
            onDragLeave: this.onDragLeave.bind(this, currentId),
            onDrop: this.onDrop.bind(this, currentId),
            onDragOver: this.onDragOver.bind(this, currentId),
          }, c));
          
          if (child.props && child.props.children && child.props.children.length > 0) {
            makeFlatTree(currentId, child.props.children);
          }
        }
      });
    }

    makeFlatTree(currentId, props.children);

    this.state = {
      flatChildren: treeItemArray,

      dragInfo: {
        startIndex: -1,
        enterIndex: -1,
        isIn: false
      }
    }
  }

  // Drag 관련 Event
  onDragEnter = (index, e) => {
    if (this.props.logging) {
      console.log(this.props.label, 'enter', index);
    }

    this.setState({
      dragInfo: Object.assign(this.state.dragInfo, {enterIndex: index, isIn: true})
    });
  }

  onDragStart = (index, e) => {
    if (this.props.logging) {
      console.log(this.props.label, 'start', index);
    }

    this.setState({
      dragInfo: Object.assign(this.state.dragInfo, {startIndex: index})
    });
  }

  onDragEnd = (index, e) => {
    if (this.props.logging) {
      console.log(this.props.label, 'end', index);
      console.log(this.state.dragInfo);
    }

    this.swapChildren(this.state.dragInfo.startIndex, this.state.dragInfo.enterIndex, this.state.dragInfo.isIn);
  }

  onDragLeave = (index, e) => {
    if (this.props.logging) {
      console.log(this.props.label, 'leave', index);
    }

    this.setState({
      dragInfo: Object.assign(this.state.dragInfo, {enterIndex: index, isIn: false})
    });
  }

  onDrop = (index, e) => {
    if (this.props.logging) {
      console.log(this.props.label, 'drop', index);
      console.log(this.state.dragInfo);
    }
  }

  onDragOver = (index, e) => {
    e.preventDefault();
    if (this.props.logging) {
      console.log(this.props.label, 'dragover', index);
    }
  }

  getChildrenByParentId = (parentKey) => {
    return this.state.flatChildren
      .filter(child => child.props.parent === parentKey)
      .map(child => {
        const items = this.getChildrenByParentId(child.props.id);
        return Object.assign({}, {...child, items});
      });
  }

  swapChildren = (a, b, isIn) => {
    console.log(a, b, isIn);

    const targetA = this.state.flatChildren.filter(child => child.props.id === a)[0];
    const targetB = this.state.flatChildren.filter(child => child.props.id === b)[0];

    this.setState({
      flatChildren: this.state.flatChildren.map(child => {
        if (child.props.id === a) {
          return React.cloneElement(child, {parent: isIn ? targetB.props.id : targetB.props.parent}, child.props.children);
        }

        return child;
      })
    })
  }

  render () {
    const root = this.getChildrenByParentId(0);
    return (
      <ul>
        {root.map(item => {
          return React.cloneElement(item, {
            node: item.items,
            key: item.props.id
          });
        })}
      </ul>
    );
  }
}

export default FlatTreeView;
