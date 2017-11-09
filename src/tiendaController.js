import { extendObservable } from 'mobx';

class TiendaController{
    constructor(){
        extendObservable(
            this,
            {
             platos:[
                 {identificador:"1p", nombre:"Plato A",descripcion:"El plato n1",precio:2, cantidad:0},
                 {identificador:"2p", nombre:"Plato B",descripcion:"El plato n2",precio:3, cantidad:0},
                 {identificador:"3p", nombre:"Plato C",descripcion:"El plato n3",precio:4, cantidad:0}
             ],
             bebidas:[
                {identificador:"1b", nombre:"Bebida A",descripcion:"El bebida n1",precio:2, cantidad:0},
                {identificador:"2b", nombre:"Bebida B",descripcion:"El bebida n2",precio:3, cantidad:0},
                {identificador:"3b", nombre:"Bebida C",descripcion:"El bebida n3",precio:4, cantidad:0}
            ]
            }
        );
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