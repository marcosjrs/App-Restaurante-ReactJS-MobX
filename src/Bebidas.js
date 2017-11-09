import React, {Component} from 'react';
import logo from './logo.svg'
import tiendaController from './tiendaController';
import Pedir from './Pedir.js';

class Bebidas extends Component{
    constructor(){
        super();
        this.fHacerPedido = this.hacerPedido.bind(this);
    }
    hacerPedido(identificador, cantidad){
        tiendaController.addBebidaAlPedido(identificador,cantidad)
    }
    render(){
        let elBebidas = [];
        tiendaController.bebidas.forEach((element,index) => {
            elBebidas.push(
                <div key={element.identificador} className="list-group-item">
                    <div className="panel-body">
                        <img role="presentation" src={logo} className="ImagenPlato"/>
                        <h2 className="TitlePlato">{element.nombre}</h2>
                        <div className="DescripcionPlato">{element.descripcion}</div>
                        <Pedir precio={element.precio} 
                        identificador={element.identificador}
                        hacerPedido={this.fHacerPedido}/>
                        {/* hacerPedido={(identificador_d,evento_d)=>{tiendaController.addBebidaAlPedido(identificador_d,evento_d)}} */}
                    </div>
                </div>
            );
        });
        return (
            <div className="container col-xs-6 contenedor-compo-principal">
                <div>
                    <div className="panel panel-primary">
                        <div className="list-group Plato-Menu">
                            {elBebidas}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bebidas;