import React,{Component} from 'react';

class Pedir extends Component{
    actualizarCantidad(evento){
        this.props.hacerPedido(this.props.identificador, evento.target.value);
    }
    render(){
        return (
            <div className="component-pedir">
                <div className="container-cantidad">
                    <label>Cantidad: </label>
                    <input type="number" min="0" max="20" onChange={this.actualizarCantidad.bind(this)}/>
                </div>
                <div className="container-precio">Precio: {this.props.precio} </div>
            </div>
        );
    }
}

export default Pedir;