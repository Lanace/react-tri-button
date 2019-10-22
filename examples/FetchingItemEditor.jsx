import React from 'react';
import PropTypes from 'prop-types';

import {Box, Button, Container, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from '@material-ui/core'

class FetchingItemEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeout: 5000,
      data: undefined,
      isResolve: true
    }
  }
  
  handleIsResolveChange = (e) => {
    this.setState({
      isResolve: e.target.value === 'resolve'
    });
  }

  handleTimeoutChanged = (e) => {
    this.setState({
      timeout: e.target.value
    })
  }

  handleDataChanged = (e) => {
    this.setState({
      data: e.target.value
    })
  }

  onCreateButtonClicked = () => {
    if (this.props.onCreatedFetchingItem) {
      this.props.onCreatedFetchingItem(this.state);
      this.setState({
        timeout: 5000,
        data: undefined,
        isResolve: true
      });
    } else {
      console.warn('Fetching Item Editor must have onCreatedFetchingItem props.');
    }
  }

  render() {
    return (
      <Container maxWidth="sm">
        <Box>
          <TextField
            id="timeout"
            label="Timeout"
            value={this.state.timeout}
            onChange={this.handleTimeoutChanged}
            margin="normal" />
            ms
        </Box>

        <Box>
        <TextField
            id="fetching-data"
            label="Fetching data"
            value={this.state.data}
            onChange={this.handleDataChanged}
            margin="normal" />
        </Box>

        <Box>
          <FormLabel component="legend">Resolve / Reject</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={this.state.isResolve ? 'resolve' : 'reject'} onChange={this.handleIsResolveChange}>
            <FormControlLabel value="resolve" control={<Radio />} label="resolve" />
            <FormControlLabel value="reject" control={<Radio />} label="reject" />
          </RadioGroup>
        </Box>

        <Button>Create</Button>
      </Container>
    )
  }
}

FetchingItemEditor.propTypes = {
  onCreatedFetchingItem: PropTypes.func
}

export default FetchingItemEditor;
