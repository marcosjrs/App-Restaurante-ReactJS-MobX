import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <App counter={new Counter()} />,
  document.getElementById('root')
);
