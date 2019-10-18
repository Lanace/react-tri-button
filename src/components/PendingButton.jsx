import React from 'react';

class PendingButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isPending: false
    }
  }

  handleClicked = () => {
    if (this.state.isPending) {
      console.log('clicked already');
    } else {
      this.setState({isPending: true});

      this.props.onFetching().then(data => {
        console.log(data);
        this.setState({isPending: false});
      }).catch(error => {
        console.error('error on fetching', error);
        this.setState({isPending: false});
      })
    }
  }

  render() {
    console.log('render()', this.props);

    let pendingText = '';

    if (this.state.isPending) {
      pendingText = 'pending';
    }

    return (
      <button onClick={this.handleClicked}>
        {pendingText}
        {this.props.children}
      </button>
    )
  }
}

export default PendingButton;
