import React from 'react';
import { action } from '@storybook/addon-actions';
import TriCheckBox from '../src/TriCheckBox';

export default {
  title: 'TriCheckBox',
};

export const TriCheckBoxSample = () => {
  const onChange = (name, value) => {
    action()(`${name} - changed to ${value}`);
  }

  return (
    <div>
    <TriCheckBox 
      checkingText="Checked"
      uncheckingText=" Non-Checked"
      intermediatingText="Intermediate"
      onChange={onChange.bind(undefined, 'checkbox1')}>

        <TriCheckBox
          checkingText="Checked2"
          uncheckingText=" Non-Checked2"
          intermediatingText="Intermediate2"
          onChange={onChange.bind(undefined, 'checkbox1-1')} />

        <TriCheckBox
          checkingText="Checked2"
          uncheckingText=" Non-Checked2"
          intermediatingText="Intermediate2"
          onChange={onChange.bind(undefined, 'checkbox1-2')} />

        <TriCheckBox
          checkingText="Checked2"
          uncheckingText=" Non-Checked2"
          intermediatingText="Intermediate2"
          onChange={onChange.bind(undefined, 'checkbox1-3')} >

          <TriCheckBox
            checkingText="Checked3"
            uncheckingText=" Non-Checked3"
            intermediatingText="Intermediate3"
            onChange={onChange.bind(undefined, 'checkbox1-3-1')} />

        </TriCheckBox>
    </TriCheckBox>
  </div>
  )
};
