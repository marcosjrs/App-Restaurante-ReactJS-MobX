import React, { Component } from 'react';
import { observer } from 'mobx-react'
import tiendaController from './tiendaController';
import Platos from './Platos';
import Pedidos from './Pedidos';
import Bebidas from './Bebidas';
import './App.css';

class App extends Component {

  render() {    
    return (
     <div className="container">
        <div className="jumbotron">
          <h2>APP ReactJS y MobX</h2>
        </div>
        <div className="btn-group btn-group-justified">
          <a href="#" className="btn btn-primary">Platos</a>
          <a href="#" className="btn btn-primary">Pedidos</a>
        </div>
        <div className="contenedor-componentes-principales">
        <Platos />
        <Bebidas />
        <Pedidos />
        </div>
     </div>
    );
  }
}

export default observer(App);
