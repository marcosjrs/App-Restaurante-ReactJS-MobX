import { extendObservable } from 'mobx';

class TiendaController{
    constructor(){
        extendObservable(
            this,
            {
             platos:[
                 {nombre:"Plato A",descripcion:"El plato n1",precio:2, cantidad:0},
                 {nombre:"Plato B",descripcion:"El plato n2",precio:3, cantidad:0},
                 {nombre:"Plato C",descripcion:"El plato n3",precio:4, cantidad:0}
             ]
            }
        );
    }
    addAlPedido(idPlato, cantidad){
        this.platos.forEach(function(element, indice) {
            if(indice === idPlato){
                element.cantidad = cantidad;
            }
        });
    }
}

var tiendaController = new TiendaController();
export default tiendaController;