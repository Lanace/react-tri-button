import React from 'react';
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

  render () {
    const minButton = <button onClick={this.minimize}>{this.state.open ? "-" : "+"}</button>;
    const closeButton = <button onClick={this.close}>x</button>

    return (
      <div className="pannel ln-flex-pannel">
        <div className="header">
          {minButton}
          {closeButton}
        </div>
        {this.state.open ? <div className="pannel-content">{this.props.children}</div> : ""}
      </div>
    )
  }
}

export default LnFlexPannel;
