import React from 'react';

class TreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      children: this.props.children,

      dragInfo: {
        startIndex: -1,
        enterIndex: -1
      }
    }
  }

  onDragEnter = (index, e) => {
    if (this.props.logging) {
      console.log(this.props.label, 'enter', index);
    }

    this.setState({
      dragInfo: Object.assign(this.state.dragInfo, {enterIndex: index})
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

  onDragLeave = (index, e) => {
    if (this.props.logging) {
      console.log(this.props.label, 'leave', index);
    }

    if (index === -1) {
      // TODO:  
    }
  }

  onDrop = (index, e) => {
    if (this.props.logging) {
      console.log(this.props.label, 'drop', index);
      console.log(this.state.dragInfo);
    }

    this.swapChildren(this.state.dragInfo.startIndex, this.state.dragInfo.enterIndex);
  }

  onDragOver = (index, e) => {
    e.preventDefault();
    if (this.props.logging) {
      console.log(this.props.label, 'dragover', index);
    }
  }

  swapChildren = (a, b) => {
    const copyChildren = this.state.children.slice()
    const targetSection = this.state.children[a];
    copyChildren.splice(a, 1);
    copyChildren.splice(b, 0, targetSection);
      
    this.setState({
      children: copyChildren
    });
  }

  render () {
    const divStyle = {
      height: '1px'
    };

    return (
      <div onDragOver={this.onDragOver.bind(this, -1)} onDrop={this.onDrop.bind(this, -1)} onDragLeave={this.onDragLeave.bind(this, -1)}>
        {
          React.Children.map(this.state.children, (child, index) => {
            return (
              <ul key={index} onDragEnter={this.onDragEnter.bind(this, index)} onDragStart={this.onDragStart.bind(this, index)} onDragLeave={this.onDragLeave.bind(this, index)}>
                {/* <div onDragEnter={this.onDragEnter} onDragStart={this.onDragStart} onDragLeave={this.onDragLeave} style={divStyle}/> */}
                {child}
                {/* <div onDragEnter={this.onDragEnter} onDragStart={this.onDragStart} onDragLeave={this.onDragLeave} style={divStyle}/> */}
              </ul>
            )
          })
        }
      </div>
    );
  }
}

export default TreeView;
