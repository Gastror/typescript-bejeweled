import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';

import { store, history } from './core';

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact={true} path="/" component={Game}/>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
