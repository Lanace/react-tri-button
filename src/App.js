import React from 'react';

import PendingButton from './components/PendingButton';
import TriButton from './components/TriButton';
import TriCheckbox from './components/TriCheckbox';

import './App.css';

function App() {

  const onFetching = () => {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(1)
      }, 3000);
    })
  }

  return (
    <div className="App">
      <h1>react-state-button example!</h1>

      <PendingButton onFetching={onFetching} timeout={5000}>test</PendingButton>
      <TriButton>test</TriButton>
      <TriCheckbox>test</TriCheckbox>
    </div>
  );
}

export default App;
