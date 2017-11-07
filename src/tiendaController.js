import { extendObservable } from 'mobx';

class TiendaController{
    constructor(){
        extendObservable(
            this,
            {
             platos:[
                 {nombre:"Plato A",descripcion:"El plato n1",precio:2, cantidad:1},
                 {nombre:"Plato B",descripcion:"El plato n2",precio:3, cantidad:1},
                 {nombre:"Plato C",descripcion:"El plato n3",precio:4, cantidad:1}
             ]
            }
        );
    }
}

var tiendaController = new TiendaController();
export default tiendaController;