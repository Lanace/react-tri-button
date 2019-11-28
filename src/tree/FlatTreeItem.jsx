import React from 'react';
import isMuiElement from '../utiles';

class FlatTreeItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: this.props.isOpen || false
    }
  }

  onOpen = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen
      }
    });
  }

  render () {
    let childrenNodeList;
    if (this.props.node) {
      childrenNodeList = <ul>{
        this.props.node.map(node => {
          console.log(node.items, node.props.items);
          return React.cloneElement(node, {node: node.items, key: node.props.id});
        })
        }</ul>
    }

    return (
      <li>
        <div draggable={this.props.draggable} onDragEnter={this.props.onDragEnter} onDragStart={this.props.onDragStart} onDragEnd={this.props.onDragEnd} onDragLeave={this.props.onDragLeave} onDrop={this.props.onDrop} onDragOver={this.props.onDragOver}>
          <button onClick={this.onOpen}>{this.state.isOpen ? '닫기' : '열기'}</button>
          <span>{this.props.label} / {this.state.isOpen}</span>
        </div>
        {
          this.state.isOpen &&
          <div>
            {this.props.children}
            {childrenNodeList}
          </div>
        }
      </li>
    );
  }
}

export default FlatTreeItem;
