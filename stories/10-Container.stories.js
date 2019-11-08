import React from 'react';
import { action } from '@storybook/addon-actions';
import { LnFlexContainer, LnFlexPannel } from '../src/index'

export default {
  title: 'Container'
}

export const LnFlexContainerSample = () => {

  return (
    <LnFlexContainer>
      <LnFlexPannel>
        <h1>Pannel Number 1</h1>
      </LnFlexPannel>

      <LnFlexPannel>
        <h1>Pannel Number 2</h1>
        <div>
          <p>I am a boy!</p>
          <p>this is flex pannel number 2</p>
        </div>
      </LnFlexPannel>

      <LnFlexPannel>
        <h1>Pannel Number 3</h1>
        <input type="text"/>
      </LnFlexPannel>

      <LnFlexPannel>
        <h1>Pannel Number 4</h1>
        <button>Submit!!</button>
      </LnFlexPannel>
    </LnFlexContainer>
  )
}