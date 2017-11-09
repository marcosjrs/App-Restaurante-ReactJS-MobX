import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const enrutador = (<Router history={browserHistory}>
  <Route path="/" component={App} />
</Router>);

ReactDOM.render(
  enrutador,
  document.getElementById('root')
);
