import React from 'react';
import ReactDOM from 'react-dom';
import PendingButton from '../src/PendingButton';

class PendingButtonExample extends React.Component {

  onFetching = () => {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        reject(1);
      }, 3000);
    }).then(res => {
      console.log(`result is ${res}`)
    });
  }

  onFetchingList = () => {
    const promise1 = new Promise((resolve, reject) => {
      console.log('promise1');
      setTimeout(function() {
        console.log('promise1 - resolve');
        resolve(1);
      }, 3000);
    }).then(res => {
      console.log(`result1 is ${res}`)
    });

    const promise2 = new Promise((resolve, reject) => {
      console.log('promise2');
      setTimeout(function() {
        console.log('promise2 - resolve');
        resolve(2);
      }, 5000);
    }).then(res => {
      console.log(`result2 is ${res}`)
    });

    const promise3 = new Promise((resolve, reject) => {
      console.log('promise3');
      setTimeout(function() {
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

  render () {
    return (
      <div className="App">
        <h1>react-state-button example!</h1>
  
        <h2>Basic </h2>

        <PendingButton 
          timeout={5000}
          fetchingText='Please wait...'
          successText='Success fetching'
          failText='Fail fetching'
          fetchMode='sequence'
          onStateChanged={onStateChanged}
          onFetching={onFetching}
          onError={onError}
          onSuccess={onSuccess}
          onFail={onFail}
          onProcess={onProcess}>
            <div>
              <p>
                Pending Button Test
              </p>
            </div>
        </PendingButton>
  
        <h2>Multi Fetching</h2>
  
        <PendingButton 
          timeout={5000}
          fetchingText='Please wait...'
          successText='Success fetching'
          failText='Fail fetching'
          fetchMode='sequence'
          onStateChanged={onStateChanged}
          onFetching={onFetchingList}
          onError={onError}
          onSuccess={onSuccess}
          onFail={onFail}
          onProcess={onProcess}>
            <div>
              <p>
                Multi fetching Pending Button
              </p>
            </div>
        </PendingButton>
  
  
        <h2>inconsecutive Button</h2>
        <PendingButton 
          timeout={5000}
          fetchingText='Please wait...'
          successText='Success fetching'
          failText='Fail fetching'
          fetchMode='inconsecutive'
          onStateChanged={onStateChanged}
          onFetching={onFetchingList}
          onError={onError}
          onSuccess={onSuccess}
          onFail={onFail}
          onProcess={onProcess}>
            <div>
              <p>Inconsecutive Pending Button</p>
            </div>
        </PendingButton>
      </div>
    );
  }
}

ReactDOM.render(<PendingButtonExample />, document.getElementById('root'));
