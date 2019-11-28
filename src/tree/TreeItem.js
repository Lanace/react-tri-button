import React from 'react';
import PropTypes from 'prop-types';

class TreeItem extends React.Component {
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

  onDragEnter = (index, e) => {
    this.showLog([this.props.label, 'enter', index])
  }

  onDragStart = (index, e) => {
    this.showLog([this.props.label, 'start', index])
  }

  onDragLeave = (index, e) => {
    this.showLog([this.props.label, 'leave', index])
  }

  onDrop = (index, e) => {
    this.showLog([this.props.label, 'drop', index])
  }

  onDragOver = (index, e) => {
    e.preventDefault();
    this.showLog([this.props.label, 'dragover', index])
  }

  showLog = (message) => {
    if (this.props.logging) {
      console.log(...message);
    }
  }

  render () {
    return (
      <li draggable={true} onDragEnter={this.onDragEnter} onDragStart={this.onDragStart} onDragLeave={this.onDragLeave} onDrop={this.onDrop} onDragOver={this.onDragOver}>
        <button onClick={this.onOpen}>{this.state.isOpen ? '닫기' : '열기'}</button>
        <span>{this.props.label} / {this.state.isOpen}</span>
        {
          this.state.isOpen &&
          <ul>
            {this.props.children}
          </ul>
        }
      </li>
    )
  }
}

TreeItem.PropTypes = {
  itemId: PropTypes.number,
  label: PropTypes.string
}

export default TreeItem;
