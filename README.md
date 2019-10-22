# react-tri-button

Component with triple state

## Demo

preparing...

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

#### development

if you develop this project, you can use it by webpack-dev-server.

```bash
npm run dev
```

## Usage

``` javascript
import React from 'react'
import {PendingButton} from 'react-tri-button'

class App extends React.Component {

  render () {
    return (
      <PendingButton>
        Pending Button
      </PendingButton>
    )
  }
}

```


## Components

- Pending Button
- Tri Checkbox
- [WIP] Tri Button

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


#### Children


### Tri-Checkbox

you can use three state checkbox using `TriCheckBox`.

#### Props

state: props로 상태를 나타내는 값을 지정할 수 있음
disable: 
checked: 

checkedIcon
value

#### Events

onChanged

#### ETC...


### Tri-Checkbox Group

#### Props

state: props로 상태를 나타내는 값을 지정할 수 있음
disable: 
checked: 

checkedIcon
value

#### Events

onChanged

### Tri-Button





## License

react-tri-button is [MIT licensed](./LICENSE).