import React, { Component } from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultado extends Component {
    render() {
        const resultado = this.props.resultado;
        const mensaje = (!resultado) ? 'Elije Marca, año y Tipo de Seguro' : 'El total es $'
        return (
            <div className="gran-total">
                {mensaje}
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition className="resultado" timeout={{start:500, exit: 500}}>
                        <span>{resultado}</span>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

export default Resultado;