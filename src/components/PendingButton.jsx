import React from 'react';
import PropTypes from 'prop-types';

class PendingButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isPending: false,
      text: ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isPending !== this.state.isPending) {
      if (this.props.onStateChanged) {
        this.props.onStateChanged(this.state.isPending);
      }
    }
  }

  handleClicked = () => {
    console.log('clicked!');

    if (this.state.isPending) {
      console.log('clicked already');
    } else {
      this.setState({
        isPending: true,
        text: this.props.fetchingText
      });

      this.fetchProcess();
    }
  }

  fetchProcess = () => {
    if (!this.props.onFetching) {
      // NOTE: fetch가 없는 경우
      console.warn('onFetching is undefind. please set fetching props. you must return promise by array or function');
      return;
    }

    let fetchingList = [];

    if (this.props.onFetching instanceof Function) {
      fetchingList = [this.props.onFetching()];
    } else {
      fetchingList = fetchingList.concat(this.props.onFetching.map(fetch => fetch()));
    }

    let result;
    if (this.props.fetchMode === 'inconsecutive') {
      result = Promise.all(fetchingList)
    } else {
      // result = sequence(fetchingList);
      result = fetchingList.reduce((prev, next) => {
        console.log(prev, next);
        return prev.then(() => {
          console.log('inner', next);
          return next;
        })
      }, Promise.resolve());
    }

    result.then(data => {
      console.log('fetching success', data);
      this.setState({
        isPending: false,
        text: this.props.successText
      });

      if (this.props.onSuccess) {
        this.props.onSuccess(data);
      }
    }).catch(error => {
      console.error('fetching fail', error);
      this.setState({
        isPending: false,
        text: this.props.failText
      });

      if (this.props.onFail) {
        this.props.onFail(error);
      }
    });
  }

  render() {
    console.log('render()', this.props);

    return (
      <button onClick={this.handleClicked}>
        {this.state.text}
        {this.props.children}
      </button>
    )
  }
}

PendingButton.propTypes = {
  timeout: PropTypes.number,
  fetchingText: PropTypes.string,
  successText: PropTypes.string,
  failText: PropTypes.string,
  fetchMode: PropTypes.oneOf([
    'sequence', 'inconsecutive'
  ]),

  onStateChanged: PropTypes.func,
  onFetching: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func
  ]),
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
  onFail: PropTypes.func,
  onProcess: PropTypes.func
}

PendingButton.defaultProps = {
  fetchMode: 'sequence'
}

export default PendingButton;
