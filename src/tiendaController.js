import datos from './fireBaseController';
import { extendObservable } from 'mobx';

class TiendaController{
    constructor(){
        var self = this;

        datos.bebidas.once("value").then(function(bebidas){
            bebidas.forEach(function (bebida) { 
                    const bebidaJSON = bebida.val();
                    bebidaJSON.identificador = bebida.key;
                    self.bebidas.push(bebidaJSON);
            });
        });
        datos.platos.once("value").then(function(platos){
            platos.forEach(function (plato) { 
                    const platoJSON = plato.val();
                    platoJSON.identificador = plato.key;
                    self.platos.push(platoJSON);
            });
        });

        extendObservable( this, { platos:[ ], bebidas:[ ]} );
    }
    addPlatoAlPedido(idPlato, cantidad){
        this.platos.forEach(function(element, identificador) {
            if(element.identificador === idPlato){
                element.cantidad = cantidad;
            }
        });
    }
    addBebidaAlPedido(idPlato, cantidad){
        this.bebidas.forEach(function(element, identificador) {
            console.log(identificador,idPlato)
            if(element.identificador === idPlato){
                element.cantidad = cantidad;
            }
        });
    }
}

var tiendaController = new TiendaController();
export default tiendaController;