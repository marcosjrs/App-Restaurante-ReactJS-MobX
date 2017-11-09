import React, {Component} from "react";
import tiendaController from './tiendaController';
import { observer } from 'mobx-react';

class Pedidos extends Component{
    render(){
        var elPedidos = [];
        var showPedidos = false;
        //Platos
        tiendaController.platos.forEach(function(element,index) {
            if(element.cantidad > 0){
                elPedidos.push(
                    <div key={element.identificador} className="list-group-item">
                        <div className="panel-body">
                            <h4 className="TitlePlato">{element.nombre}</h4>
                            <div className="APrecioCantidad">
                                <span>{element.cantidad}</span>
                                <span className="PrecioPlato">Precio: {element.cantidad * element.precio}</span>                        
                            </div>
                        </div>
                    </div>
                );
                showPedidos = true;
            }
        });
        //Bebidas
        tiendaController.bebidas.forEach(function(element,index) {
            if(element.cantidad > 0){
                elPedidos.push(
                    <div key={element.identificador} className="list-group-item">
                        <div className="panel-body">
                            <h4 className="TitlePlato">{element.nombre}</h4>
                            <div className="APrecioCantidad">
                                <span>{element.cantidad}</span>
                                <span className="PrecioPlato">Precio: {element.cantidad * element.precio}</span>                        
                            </div>
                        </div>
                    </div>
                );
                showPedidos = true;
            }
        });
        if(showPedidos){
            return(
                <div className="container col-xs-6 contenedor-compo-principal">
                <div>
                    <div className="panel panel-primary">
                        <div className="list-group Pedidos-Menu">
                            {elPedidos}
                        </div>
                    </div>
                </div>
            </div>
            );
        }else{
            return(<div></div>);
        }
    }
}

export default observer(Pedidos);