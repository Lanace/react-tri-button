import React from 'react';
import PendingButton from '../src/PendingButton';
import FetchingItemEditor from './FetchingItemEditor';
import FetchingItemList from './FetchingItemList';

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

      fetchingItems: []
    }
  }

  onFieldChanged = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onCreatedFetchingItem = (fetchingItem) => {
    this.setState({
      fetchingItems: this.state.fetchingItems.concat(fetchingItem)
    });
  }

  onSelectedItems = (selectedItems) => {
    this.setState({
      fetchingItems: selectedItems
    });
  }

  onFetching = () => {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        reject(1);
      }, 3000);
    }).then(res => {
      console.log(`result is ${res}`)
    });
  }

  onFetchingList = () => {
    const promise1 = new Promise((resolve, reject) => {
      console.log('promise1');
      setTimeout(function () {
        console.log('promise1 - resolve');
        resolve(1);
      }, 3000);
    }).then(res => {
      console.log(`result1 is ${res}`)
    });

    const promise2 = new Promise((resolve, reject) => {
      console.log('promise2');
      setTimeout(function () {
        console.log('promise2 - resolve');
        resolve(2);
      }, 5000);
    }).then(res => {
      console.log(`result2 is ${res}`)
    });

    const promise3 = new Promise((resolve, reject) => {
      console.log('promise3');
      setTimeout(function () {
        console.log('promise3 - resolve');
        resolve(3);
      }, 1000);
    }).then(res => {
      console.log(`result3 is ${res}`)
    });

    return [promise1, promise2, promise3];
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
      <div className="App">
        <h1>Pending-button example</h1>

        <PendingButton
          timeout={this.state.timeout}
          fetchingText={this.state.fetchingText}
          successText={this.state.successText}
          failText={this.state.failText}
          fetchMode={this.state.fetchMode}

          onFetching={this.onFetching}
          onStateChanged={this.onStateChanged}
          onError={this.onError}
          onSuccess={this.onSuccess}
          onFail={this.onFail}
          onProcess={this.onProcess}>
          {this.state.childrenHtml}
        </PendingButton>

        <section>
          <div>
            <label htmlFor="timeout">Timeout</label>
            <input id="timeout" name="timeout" type="number" value={this.state.timeout} onChange={this.onFieldChanged} />
          </div>

          <div>
            <label htmlFor="childrenHtml">Children html</label>
            <input id="childrenHtml" name="childrenHtml" type="text" value={this.state.childrenHtml} onChange={this.onFieldChanged} />
          </div>

          <div>
            <label htmlFor="fetchingText">Fetching Text</label>
            <input id="fetchingText" name="fetchingText" type="text" value={this.state.fetchingText} onChange={this.onFieldChanged} />
          </div>

          <div>
            <label htmlFor="successText">Success Text</label>
            <input id="successText" name="successText" type="text" value={this.state.successText} onChange={this.onFieldChanged} />
          </div>

          <div>
            <label htmlFor="failText">Fail Text</label>
            <input id="failText" name="failText" type="text" value={this.state.failText} onChange={this.onFieldChanged} />
          </div>

          <div>
            <label htmlFor="mode1">Fetch Mode</label>
            <input id="mode1" name="sequence" type="radio" value="sequence" checked={this.state.fetchMode === 'sequence'} onChange={this.onFieldChanged} />sequence
          <input id="mode1" name="inconsecutive" type="radio" value="inconsecutive" checked={this.state.fetchMode === 'inconsecutive'} onChange={this.onFieldChanged} />inconsecutive
          </div>

          <div>
            <label htmlFor="logging">Logging</label>
            <input id="logging" name="logging" type="checkbox" checked={this.state.logging} onChange={this.onFieldChanged} />
          </div>
        </section>
        <section>
          <FetchingItemList fetchingItems={this.state.fetchingItems} onSelectedItems={this.onSelectedItems}/>
          <FetchingItemEditor onCreatedFetchingItem={this.onCreatedFetchingItem}/>
        </section>
      </div>
    );
  }
}

export default PendingButtonExample;
