import React from 'react';
import PropTypes from 'prop-types';

class PendingButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPending: false,
      text: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isPending !== this.state.isPending) {
      if (this.props.onStateChanged) {
        this.props.onStateChanged(this.state.isPending);
      }
    }
  }

  handleClicked = () => {
    if (this.state.isPending) {
      if (this.props.onAlreadyClciked) {
        this.props.onAlreadyClciked();
      }
      return;
    }

    this.setState({
      isPending: true,
      text: this.props.fetchingText
    });

    try {
      this.fetchProcess();
    } catch (e) {
      console.error(e);

      if (this.props.onError) {
        this.props.onError(e);
        this.onFinish(Promise.reject(e));
      }
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
      fetchingList = this.props.onFetching();
    } else {
      fetchingList = this.props.onFetching;
    }

    if (fetchingList instanceof Array === false) {
      fetchingList = [fetchingList];
    }

    if (this.props.fetchMode === 'inconsecutive') {
      fetchingList.map((fetching) => fetching
        .then((data) => Promise.resolve(data))
        .catch((error) => Promise.reject(error))
      );
    } else {
      let processCount = 0;
      fetchingList.reduce((prev, next, index, array) => {
        const resultPromise = prev.then(() => {
          processCount += 1;
          if (this.props.onProcess) {
            this.props.onProcess(processCount / fetchingList.length);
          }

          return next;
        }).catch(() => {
          processCount += 1;
          if (this.props.onProcess) {
            this.props.onProcess(processCount / fetchingList.length);
          }
          return array[index + 1];
        });

        return resultPromise;
      });
    }

    this.onFinish(fetchingList);
  }

  onFinish = (fetchingList) => {
    Promise.all(fetchingList).then((data) => {
      this.setState({
        isPending: false,
        text: this.props.successText
      });

      if (this.props.onSuccess) {
        this.props.onSuccess(data);
      }
    }).catch((error) => {
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
    return (
      <button onClick={this.handleClicked}>
        {this.state.text}
        {this.props.children}
      </button>
    );
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
  logging: PropTypes.bool,

  onStateChanged: PropTypes.func,
  onFetching: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func
  ]),
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
  onFail: PropTypes.func,
  onProcess: PropTypes.func,
  onAlreadyClciked: PropTypes.func
};

PendingButton.defaultProps = {
  fetchMode: 'sequence',
  logging: false
};

export default PendingButton;
