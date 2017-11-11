import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Platos from './Platos';
import Pedidos from './Pedidos';
import Bebidas from './Bebidas';

import {Route, Link} from 'react-router-dom';

import './App.css';

class App extends Component {

  render() {    
    console.log(this.props.location, this.props.match, this.props.history);
    return (
     <div className="container">
        <div className="jumbotron">
          <h2>APP ReactJS y MobX</h2>
        </div>                

          <div>
            <div className="btn-group btn-group-justified">
            <Link className="btn btn-primary" to="/platos">Platos</Link> <Link className="btn btn-primary" to="/bebidas">Bebidas</Link>
            </div>
            <Route path="/platos" component={Platos} />
            <Route path="/bebidas" component={Bebidas} />
            {/* El BrowserRouter contenedor está en index, que embebe este component App, através de un Route y por eso dispone de las props correspondientes location, match,history */}
          </div>

        <Pedidos />
     </div>
    );
  }
}

export default observer(App);
