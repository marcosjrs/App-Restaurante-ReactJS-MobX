import React, {Component} from 'react';
import './Platos.css'
import logo from './logo.svg'
import tiendaController from './tiendaController';

class Platos extends Component{
    render(){
        let elPlatos = [];
        tiendaController.platos.forEach(function(element,index) {
            elPlatos.push(
                <div key={index} className="list-group-item">
                    <div className="panel-body">
                        <img role="presentation" src={logo} className="ImagenPlato"/>
                        <h2 className="TitlePlato">{element.nombre}</h2>
                        <div className="DescripcionPlato">{element.descripcion}</div>
                    </div>
                </div>
            );
        });
        return (
            <div className="container col-xs-6">
                <div>
                    <div className="panel panel-primary">
                        <div className="list-group Plato-Menu">
                            {elPlatos}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Platos;