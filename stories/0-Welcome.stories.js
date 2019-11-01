import React from 'react';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'About Components',
};

export const Intro = () => (
  <div>
    <h1>Component with triple state</h1>
    <h2>Pending Button</h2>
    <p>If you fetching whne you clicked button, clicked button is going to unclickable and come back finishing fetching.</p>

    <h3>Props</h3>
    <div>
    <table>
<thead>
<tr>
<th>props</th>
<th>description</th>
<th align="center">type</th>
<th align="center">isRequired / default</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>fetching 과정중, timeout에서 지정한 시간이 지난 후에도 fetching이 되지 않은경우 fetching을 종료하고, 실패로 처리한다.</td>
<td align="center">number (milisecond)</td>
<td align="center">false / 0</td>
</tr>
<tr>
<td>fetchingText</td>
<td>fetch 중에 있을때 표시되는 text</td>
<td align="center">string</td>
<td align="center">false / ''</td>
</tr>
<tr>
<td>successText</td>
<td>fetch가 성공했을때 표시되는 text</td>
<td align="center">string</td>
<td align="center">false / ''</td>
</tr>
<tr>
<td>failText</td>
<td>fetch가 성공했을때 표시되는 text</td>
<td align="center">string</td>
<td align="center">false / ''</td>
</tr>
<tr>
<td>fetchMode</td>
<td>fetch를 순차적으로 할지, 비동기로 할지 결정</td>
<td align="center">enum ('sequence', 'inconsecutive')</td>
<td align="center">false / 'sequence'</td>
</tr>
<tr>
<td>logging</td>
<td>logging 한다.</td>
<td align="center">boolean</td>
<td align="center">false / false</td>
</tr>
</tbody>
</table>
    </div>
  </div>
);
