import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './components/shared/platform/reducers';

import Page from './components/page';

let store = createStore(
  reducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Page}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)