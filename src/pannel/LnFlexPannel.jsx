import React from 'react';
import { LnResizableContainer } from '../index';
import './LnFlexPannel.css';

class LnFlexPannel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: props.open
    }
  }

  minimize = () => {
    // TODO: 최소화
    this.setState((prevState) => {
      return {
        open: !prevState.open
      }
    })
  }

  close = () => {
    if (this.props.close) {
      this.props.close();
    } else {
      console.warn('LnFlexPannel need parent that has close props.')
    }
  }

  getPannelStyle = () => {
    const style = {};

    const customStyleList = []
    customStyleList.map((item) => {
      if (this.props[item]) {
        style[item] = this.props[item];
      }
    });

    return style;
  }

  getContentStyle = () => {
    const style = {
      overflow: 'scroll'
    };

    const customStyleList = ['width', 'height']
    customStyleList.map((item) => {
      if (this.props[item]) {
        style[item] = this.props[item];
      }
    });

    return style;
  }

  render () {
    const minButton = <button onClick={this.minimize}>{this.state.open ? "-" : "+"}</button>;
    const closeButton = <button onClick={this.close}>x</button>

    const dragProps = {
      draggable: this.props.draggable,
      onDragEnd: this.props.onDragEnd,
      onDragStart: this.props.onDragStart
    }

    return (
      <div className="pannel ln-flex-pannel" ref={this.props.ref} {...dragProps} style={this.getPannelStyle()}>
        <div className="header">
          {minButton}
          {closeButton}
        </div>
        {this.state.open ? <LnResizableContainer className="pannel-content" style={this.getContentStyle()}>{this.props.children}</LnResizableContainer> : ""}
      </div>
    )
  }
}

export default LnFlexPannel;
