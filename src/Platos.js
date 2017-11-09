import React, {Component} from 'react';
import './Platos.css'
import logo from './logo.svg'
import tiendaController from './tiendaController';
import Pedir from './Pedir.js';

class Platos extends Component{
    constructor(){
        super();
        this.fHacerPedido = this.hacerPedido.bind(this);
    }
    hacerPedido(identificador, cantidad){
        tiendaController.addPlatoAlPedido(identificador,cantidad)
    }
    render(){
        let elPlatos = [];
        tiendaController.platos.forEach((element,index) => {
            elPlatos.push(
                <div key={element.identificador} className="list-group-item">
                    <div className="panel-body">
                        <img role="presentation" src={logo} className="ImagenPlato"/>
                        <h2 className="TitlePlato">{element.nombre}</h2>
                        <div className="DescripcionPlato">{element.descripcion}</div>
                        <Pedir precio={element.precio} 
                        identificador={element.identificador}
                        hacerPedido={this.fHacerPedido}/>
                        {/* hacerPedido={(identificador_d,evento_d)=>{tiendaController.addPlatoAlPedido(identificador_d,evento_d)}} */}
                    </div>
                </div>
            );
        });
        return (
            <div className="container col-xs-6 contenedor-compo-principal">
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