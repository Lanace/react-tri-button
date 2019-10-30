import React from 'react';

export function isMuiElement(element, muiNames) {
  return React.isValidElement(element) && muiNames.indexOf(element.type.name) !== -1;
}
