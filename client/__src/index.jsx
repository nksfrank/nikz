import React from 'react';
import ReactDOM from 'react-dom';
import {RxStateProvider} from 'app/rx-state/connect';
import createState from 'app/rx-state/createState';
import reducer$ from 'app/reducers';

import App from './components/app/app';

ReactDOM.render(
    <RxStateProvider state$={createState(reducer$)}>
      <App />
    </RxStateProvider>
    , document.getElementById('root'));
