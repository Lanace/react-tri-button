import React from 'react';
import { TreeView, TreeItem } from '../src/index';

class TreeViewExample extends React.Component {
  
  render () {
    console.log(TreeItem);
    return (
      <TreeView label="View" logging={true}>
        <TreeItem label="Item1" logging={false}>
          Content 1
          <TreeItem label="Item1-1" logging={false}>Content1-1</TreeItem>
          <TreeItem label="Item1-2" logging={false}>Content1-2</TreeItem>
          <TreeItem label="Item1-3" logging={false}>Content1-3</TreeItem>
          <TreeItem label="Item1-4" logging={false}>Content1-4</TreeItem>
          <TreeItem label="Item1-5" logging={false}>Content1-5</TreeItem>
        </TreeItem>
        <TreeItem label="Item2" logging={false}>Content 2</TreeItem>
        <TreeItem label="Item3" logging={false}>Content 3</TreeItem>
        <TreeItem label="Item4" logging={false}>Content 4</TreeItem>
      </TreeView>
    );
  }
}

export default TreeViewExample
