import  React from 'react';
import { action } from '@storybook/addon-actions';

import {TreeView, TreeItem} from '../src/index';

export default {
  title: 'TreeView'
};

export const SimpleTreeView = () => {
  return (
    <TreeItem label="Item0">
      <TreeItem label="Item1">Item 1</TreeItem>
      <TreeItem label="Item2">Item 2</TreeItem>
      <TreeItem label="Item3">Item 3</TreeItem>
      <TreeItem label="Item4">Item 4</TreeItem>
    </TreeItem>
  );
};
