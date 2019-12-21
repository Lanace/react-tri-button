import React from 'react';
import isMuiElement from '../utiles';
import {Icon} from '@material-ui/core';

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
          return React.cloneElement(node, {node: node.items, key: node.props.id});
        }).sort((a, b ) => {
          if (a.props.order < b.props.order) {

          } else {
            
          }
          return 
        })
        }</ul>
    }

    return (
      <li>
        <div draggable={this.props.draggable} onDragEnter={this.props.onDragEnter} onDragStart={this.props.onDragStart} onDragEnd={this.props.onDragEnd} onDragLeave={this.props.onDragLeave} onDrop={this.props.onDrop} onDragOver={this.props.onDragOver}>
        <Icon onClick={this.onOpen}>{this.state.isOpen ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}</Icon>
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
