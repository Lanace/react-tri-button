import React from 'react';
import PropTypes from 'prop-types';

import {Box, Button, Checkbox, Container, FormControlLabel, FormLabel, List, ListItem, ListItemIcon, Paper, Radio, RadioGroup, TextField} from '@material-ui/core'

class FetchingItemList extends React.Component {

  onSelectedItems = () => {

  }

  customList = items => (
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {items.map(value => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  render () {
    return (
      <Container>
        <h3>Created Fetching List</h3>
        <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
        <Grid item>{this.customList(left)}</Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleAllRight}
              disabled={left.length === 0}
              aria-label="move all right">
                >>
            </Button>
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right">
              &gt;
            </Button>
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left">
              &lt;
            </Button>
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleAllLeft}
              disabled={right.length === 0}
              aria-label="move all left">
              ≪
            </Button>
          </Grid>
        </Grid>
        <Grid item>{this.customList(right)}</Grid>
      </Grid>
      </Container>
    )
  }
}

FetchingItemList.propTypes = {
  fetchingItems: PropTypes.array,
  onSelectedItems: onSelectedItems.func
}

export default FetchingItemList;
