import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';

import { store, history, initializeStyle, BaseConstants } from './core';
import { Game } from './pages';
import {  } from './core/constants';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

initializeStyle();

const app = () => (
  <Provider store={store}>
     <ConnectedRouter history={history}>
      <Route exact={true} path="/" component={Game}/>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app(), document.querySelector(BaseConstants.containerSelector));
