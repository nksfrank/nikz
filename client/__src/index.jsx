import React from 'react';
import ReactDOM from 'react-dom';
import {RxStateProvider} from 'app/rx-state/connect';
import createState from 'app/rx-state/createState';
import reducer$ from 'app/reducers';

import Chat from './components/chat/chat';

ReactDOM.render(
    <RxStateProvider state$={createState(reducer$)}>
      <Chat />
    </RxStateProvider>
    , document.getElementById('root'));
