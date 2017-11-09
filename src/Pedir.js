import React,{Component} from 'react';

class Pedir extends Component{
    actualizarCantidad(evento){
        this.props.hacerPedido(this.props.identificador, evento.target.value);
    }
    render(){
        return (
            <div>
                <br />
                <label>Cantidad: </label>
                <input type="number" min="0" max="20" onChange={this.actualizarCantidad.bind(this)}/>
                <label className="EspacioPlato">Precio: {this.props.precio} </label>
            </div>
        );
    }
}

export default Pedir;