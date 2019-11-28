import React from 'react';
import ReactDOM from 'react-dom';
import PendingButtonExample from './PendingButtonExample';
import TriCheckBoxExample from './TriCheckBoxExample';
import ValidationFormExample from './ValidationFormExample';
import TreeViewExample from './TreeViewExample';
import FlatTreeViewExample from './FlatTreeViewExample';

ReactDOM.render(
  <div>
    <section>
      {/* <PendingButtonExample /> */}
    </section>
    
    <section>
      {/* <TriCheckBoxExample /> */}
    </section>
    <section>
      {/* <ValidationFormExample /> */}
    </section>
    <section>
      {/* <TreeViewExample /> */}
    </section>
    <section>
      <FlatTreeViewExample />
    </section>
  </div>, 
  document.getElementById('root')
);
