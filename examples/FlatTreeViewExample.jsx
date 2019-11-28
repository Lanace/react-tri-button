import React from 'react';
import { FlatTreeView, FlatTreeItem } from '../src/index';

class FlatTreeViewExample extends React.Component {
  
  render () {
    return (
      <FlatTreeView label="View" logging={true}>
        <FlatTreeItem label="Item1" logging={false} isOpen={true}>
          <FlatTreeItem label="Item1-1" logging={false}>
            <FlatTreeItem label="Item1-2" logging={false}>Content1-2</FlatTreeItem>
            <FlatTreeItem label="Item1-3" logging={false}>Content1-3</FlatTreeItem>
          </FlatTreeItem>
          
          <FlatTreeItem label="Item1-4" logging={false}>Content1-4</FlatTreeItem>
          <FlatTreeItem label="Item1-5" logging={false}>Content1-5</FlatTreeItem>
        </FlatTreeItem>
        <FlatTreeItem label="Item2" logging={false}>Content 2</FlatTreeItem>
        <FlatTreeItem label="Item3" logging={false}>Content 3</FlatTreeItem>
        <FlatTreeItem label="Item4" logging={false}>Content 4</FlatTreeItem>
      </FlatTreeView>
    );
  }
}

export default FlatTreeViewExample;
