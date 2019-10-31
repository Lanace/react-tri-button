import React from 'react';
import { action } from '@storybook/addon-actions';

import TriCheckBox from '../src/TriCheckBox';

export default {
  title: 'TriCheckBox',
};

export const TriCheckBoxSample = () => {
  const onChange = (value) => {
    action(`changed ${value}`);
  }

  return (
    <div>
    <TriCheckBox 
      checkingText="Checked"
      uncheckingText=" Non-Checked"
      intermediatingText="Intermediate"
      onChange={onChange}>

        <TriCheckBox
          checkingText="Checked2"
          uncheckingText=" Non-Checked2"
          intermediatingText="Intermediate2"
          onChange={onChange} />

        <TriCheckBox
          checkingText="Checked2"
          uncheckingText=" Non-Checked2"
          intermediatingText="Intermediate2"
          onChange={onChange} />

        <TriCheckBox
          checkingText="Checked2"
          uncheckingText=" Non-Checked2"
          intermediatingText="Intermediate2"
          onChange={onChange} >

          <TriCheckBox
            checkingText="Checked3"
            uncheckingText=" Non-Checked3"
            intermediatingText="Intermediate3"
            onChange={onChange} />

        </TriCheckBox>
    </TriCheckBox>
  </div>
  )
};
