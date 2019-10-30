# react-tri-button

[![npm version](https://badge.fury.io/js/react-tri-button.svg)](https://badge.fury.io/js/react-tri-button)

Component with triple state

## Demo

준비중...

## Install

```
$ npm install react-tri-button --save

or 

$ yarn install react-tri-button
```

### Scripts

#### build

```bash
npm run build
```

## Components

- Pending Button
- [WIP] Tri Button
- [WIP] Tri Checkbox

### Pending Button

If you fetching whne you clicked button, clicked button is going to unclickable and come back finishing fetching.

#### Props

- timeout
- fetchingText
- successText
- failText
- fetchMode
- logging

| props | description | type | isRequired / default |
|-------|-------|:------:|:------:|
|   timeout    |   fetching 과정중, timeout에서 지정한 시간이 지난 후에도 fetching이 되지 않은경우 fetching을 종료하고, 실패로 처리한다.    |   number (milisecond)    |    false / 0 |
|   fetchingText    |   fetch 중에 있을때 표시되는 text    |   string    |   false / ''  |
|   successText    | fetch가 성공했을때 표시되는 text |   string    |  false / ''   |
|   failText    | fetch가 성공했을때 표시되는 text | string |  false / ''   |
| fetchMode | fetch를 순차적으로 할지, 비동기로 할지 결정 | enum ('sequence', 'inconsecutive') | false / 'sequence' |
| logging | logging 한다. | boolean | false / false |

#### Event

- onStateChanged
- onFetching
- onError
- onSuccess
- onFail
- onProcess


### Tri-Button


### Tri-Checkbox

`Tri-Checkbox` has 3-state. `unchecked`, `checked` and `intermediate`.

#### Props

- checked
- indeterminate
- checkingText
- uncheckingText
- intermediatingText
- propagation
- (WIP) checkedIcon

| props | description | type | isRequired / default |
|-------|-------|:------:|:------:|
|checked|체크박스 체크여부|boolean|false / false|
|indeterminate|제 3의 상태|boolean|''|
|checkingText||   string    |''|
|uncheckingText|| string |''|
| intermediatingText|| enum ('sequence', 'inconsecutive') | false / 'sequence' |
|propagation|상위나 하위의 체크박으로 인해 자신이 전파를 받는지 여부|boolean|false / true|
| checkedIcon || boolean | false / false |

#### Event

- onChange


## Usage

``` javascript
import React from 'react'
import {PendingButton} from 'react-tri-button'

class App extends React.Component {

  render () {
    return (
      <PendingButton onFetching={this.onFetchingList} onError={this.onError} onSuccess={this.onSuccess}>
        Pending Button
      </PendingButton>
    )
  }
}

```



## License

react-tri-button is [MIT licensed](./LICENSE).