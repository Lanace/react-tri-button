import React from 'react';
import PropTypes from 'prop-types';

class LnResizableContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      width: props.width,
      height: props.height
    }
  }

  componentDidMount () {
    if (this.props.width) {
      this.setState({
        width: this.resizableRef.clientWidth
      });
    }

    if (this.props.height) {
      this.setState({
        height: this.resizableRef.clientHeight
      });
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.width !== this.props.width) {
      this.setState({
        width: this.props.width
      });
    }
    
    if (prevProps.height !== this.props.height) {
      this.setState({
        height: this.props.height
      });
    }
  }

  onDrag = (e) => {
    this.onResize(e.clientX, e.clientY);
  }

  onDragEnd = (e) => {
    e.preventDefault();
    console.log('Drag end - resizable');
  }

  onResize  = (width, height) => {
    if (this.props.onResize && width > 0 && height > 0) {
      this.props.onResize(width, height);
    }
  }

  getStyle = () => {
    const style = {
      overflow: 'scroll'
    };

    const customStyleList = ['width', 'height']
    customStyleList.map((item) => {
      if (this.state[item]) {
        style[item] = this.state[item];
      }
    });

    return style;
  }

  getHandleStyle = () => {
    const style = {
      position: 'absolute',
      top: this.state.height,
      left: this.state.width
    };

    return style;
  }

  render () {
    const dragProps = {
      draggable: true,
      onDragEnd: this.onDragEnd,
      onDrag: this.onDrag
    };

    const handle = React.cloneElement(this.props.handle, {
      ...dragProps,
      style: this.getHandleStyle()
    });

    return (
      <div ref={(resizableRef) => this.resizableRef = resizableRef} style={this.getStyle()}>
        {this.props.children}
        {handle}
      </div>
    );
  }
}

LnResizableContainer.propTypes = {
  onResize: PropTypes.func,
  handle: PropTypes.element
};

LnResizableContainer.defaultProps = {
  handle: <button></button>
};

export default LnResizableContainer;
