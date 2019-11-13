import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { LnFlexContainer, LnResizableContainer, LnFlexPannel } from '../src/index'

export default {
  title: 'Container'
}

export const LnResizableContainerSample = () => {

  const [width, setWidht] = useState(100);
  const [height, setHeight] = useState(100);

  const onResize = (width, height) => {
    setWidht(width);
    setHeight(height);
    console.log(width, height);
  }

  return (
    <LnResizableContainer width={width} height={height} onResize={onResize}>
      <h1>Let's Resize!!!</h1>
      <p>OH~~~~~~</p>
      <button>recommend!</button>
    </LnResizableContainer>
  )
}

export const LnFlexContainerSample = () => {
  const pannelProps1 = {
    width: 320,
    height: 320
  }

  const pannelProps2 = {
    width: 100,
    height: 200
  }

  const pannelProps3 = {
    width: 620,
    height: 320
  }

  const pannelProps4 = {
    width: 420,
    height: 120
  }

  return (
    <LnFlexContainer>
      <LnFlexPannel {...pannelProps1}>
        <h1>Pannel Number 1</h1>
      </LnFlexPannel>

      <LnFlexPannel {...pannelProps2}>
        <h1>Pannel Number 2</h1>
        <div>
          <p>I am a boy!</p>
          <p>this is flex pannel number 2</p>
        </div>
      </LnFlexPannel>

      <LnFlexPannel {...pannelProps3}>
        <h1>Pannel Number 3</h1>
        <input type="text"/>
      </LnFlexPannel>

      <LnFlexPannel {...pannelProps4}>
        <h1>Pannel Number 4</h1>
        <button>Submit!!</button>
      </LnFlexPannel>
    </LnFlexContainer>
  )
}
