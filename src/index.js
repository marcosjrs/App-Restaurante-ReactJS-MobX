import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import {BrowserRouter, Route} from 'react-router-dom';

const enrutador =  (
        <BrowserRouter>
          <Route path="" component={App} />
        </BrowserRouter>
);

ReactDOM.render(
  enrutador,
  document.getElementById('root')
);
