import React from 'react';
import PendingButton from '../src/PendingButton';
import TransferList from './TransferList';

import {Box, Checkbox, Container, TextField, RadioGroup, FormControlLabel, Radio} from '@material-ui/core'

import './pendingButtonExample.css';

class PendingButtonExample extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      timeout: 5000,
      childrenHtml: 'Pending Button',
      fetchingText: '',
      successText: '',
      failText: '',
      fetchMode: 'sequence',
      logging: true,

      totalFetchingItems: [
        {
          timeout: 2000,
          data: 1,
          isResolve: true
        },
        {
          timeout: 6000,
          data: 2,
          isResolve: true
        },
        {
          timeout: 3000,
          data: 3,
          isResolve: true
        },
        {
          timeout: 5000,
          data: 4,
          isResolve: false
        },
        {
          timeout: 7000,
          data: 5,
          isResolve: true
        }
      ],
      fetchingItems: []
    }
  }

  onFieldChanged = (e) => {
    if (e.target.name === 'logging') {
      this.setState({
        logging: !this.state.logging
      });
      return;
    }

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSelectedItems = (selectedItems) => {
    this.setState({
      fetchingItems: selectedItems
    });
  }

  makePromise = (fetching) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetching.isResolve ? resolve(fetching.data) : reject(fetching.data);
      }, fetching.timeout);
    });
  }

  onFetchingList = () => {
    return this.state.fetchingItems.map(fetching => this.makePromise(fetching));
  }

  onStateChanged = (state) => {
    console.log('onStateChanged', state)
  }

  onError = (error) => {
    console.error('onError', error);
  }

  onSuccess = (response) => {
    console.log('onSuccess', response);
  }

  onFail = (response) => {
    console.warn('onFail', response);
  }

  onProcess = (process) => {
    console.log('onProcess', process);
  }

  render() {
    return (
      <Container>
        <h1>Pending-button example</h1>

        <Box>
          <PendingButton
            timeout={this.state.timeout}
            fetchingText={this.state.fetchingText}
            successText={this.state.successText}
            failText={this.state.failText}
            fetchMode={this.state.fetchMode}

            onFetching={this.onFetchingList}
            onStateChanged={this.onStateChanged}
            onError={this.onError}
            onSuccess={this.onSuccess}
            onFail={this.onFail}
            onProcess={this.onProcess}>
            {this.state.childrenHtml}
          </PendingButton>
        </Box>

        <Box display="flex" flexDirection="colums" flexWrap="wrap">
          <TextField id="timeout" className="input" label="Timeout" name="timeout" value={this.state.timeout} onChange={this.onFieldChanged} margin="normal"/>
          <TextField id="childrenHtml" className="input" label="Children html" name="childrenHtml" value={this.state.childrenHtml} onChange={this.onFieldChanged} margin="normal"/>
          <TextField id="fetchingText" className="input" label="Fetching Text" name="fetchingText" value={this.state.fetchingText} onChange={this.onFieldChanged} margin="normal"/>
          <TextField id="successText" className="input" label="Success Text" name="successText" value={this.state.successText} onChange={this.onFieldChanged} margin="normal"/>
          <TextField id="failText" className="input" label="Fail Text" name="failText" value={this.state.failText} onChange={this.onFieldChanged} margin="normal"/>

          <RadioGroup aria-label="fetchMode" name="fetchMode" value={this.state.fetchMode} onChange={this.onFieldChanged}>
            <FormControlLabel value="sequence" control={<Radio />} label="Sequence" />
            <FormControlLabel value="inconsecutive" control={<Radio />} label="inconsecutive" />
          </RadioGroup>

          <FormControlLabel
            control={<Checkbox name="logging" checked={this.state.logging} onChange={this.onFieldChanged} color="primary"/>}
            label="Logging"
          />
        </Box>
        <section>
          <h4>Fetching List</h4>
          <TransferList left={this.state.totalFetchingItems} onSelectedItems={this.onSelectedItems}/>
        </section>
      </Container>
    );
  }
}

export default PendingButtonExample;
