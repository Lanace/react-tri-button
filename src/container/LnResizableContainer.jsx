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
    if (!this.props.width) {
      this.setState({
        width: this.resizableRef.clientWidth
      });
    }

    if (!this.props.height) {
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
    if (width > 0 && height > 0) {
      if (this.props.onResize) {
        this.props.onResize(width, height);
      } else {
        this.setState({ width, height });
      }
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
      position: 'relative',
      top: this.state.height,
      left: this.state.width
    };

    if (this.contentRef) {
      style.top -= this.handleRef.clientHeight;
      style.left -= this.handleRef.clientWidth;

      console.log(this.state.height, this.contentRef.clientHeight);
    }

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
      style: this.getHandleStyle(),
      ref: (handleRef) => {this.handleRef = handleRef}
    });

    return (
      <div ref={(resizableRef) => this.resizableRef = resizableRef} style={this.getStyle()}>
        {handle}
        <div ref={(contentRef) => this.contentRef = contentRef}>
          {this.props.children}
        </div>
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
