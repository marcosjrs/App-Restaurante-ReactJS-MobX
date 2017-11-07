import { extendObservable } from 'mobx';

class TiendaController{
    constructor(){
        extendObservable(
            this,
            {
             platos:[
                 {nombre:"Plato A",descripcion:"El plato A", precio:2},
                 {nombre:"Plato B",descripcion:"El plato B", precio:3},
                 {nombre:"Plato C",descripcion:"El plato C", precio:4}
             ]
            }
        );
    }
}

var tiendaController = new TiendaController();
export default tiendaController;