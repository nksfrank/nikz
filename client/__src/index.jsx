import React from 'react';
import ReactDOM from 'react-dom';
import {RxStateProvider, createState} from 'app/state/RxState';
import reducer$ from 'app/reducers';

import App from './components/app/app';

ReactDOM.render(
  <RxStateProvider state$={createState(reducer$)}>
    <App />
  </RxStateProvider>
  , document.getElementById('root'));
