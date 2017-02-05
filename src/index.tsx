import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore } from 'redux';
import reducers from './components/shared/platform/reducers';

import Page from './components/page';

const store = createStore(reducers);
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Page}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)