import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import TriCheckBox from '../src/TriCheckBox';

export default {
  title: 'Components'
};

export const TriCheckBoxSample = () => {
  return (
    <div>
        <TriCheckBox 
          checkingText="Checked"
          uncheckingText=" Non-Checked"
          intermediatingText="Intermediate">

            <TriCheckBox
              checkingText="Checked2"
              uncheckingText=" Non-Checked2"
              intermediatingText="Intermediate2"/>

              <TriCheckBox
                checkingText="Checked2"
                uncheckingText=" Non-Checked2"
                intermediatingText="Intermediate2">

                <TriCheckBox
                  checkingText="Checked3"
                  uncheckingText=" Non-Checked3"
                  intermediatingText="Intermediate3"/>

                <TriCheckBox
                  checkingText="Checked3"
                  uncheckingText=" Non-Checked3"
                  intermediatingText="Intermediate3"/>

              </TriCheckBox>

            <TriCheckBox
              checkingText="Checked2"
              uncheckingText=" Non-Checked2"
              intermediatingText="Intermediate2"/>
        </TriCheckBox>
      </div>
  )
}
