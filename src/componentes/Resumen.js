import React, { Component } from 'react'
import { primeraMayuscula } from '../helper';

class Resumen extends Component {
    render() {
        return (
            <React.Fragment>
                {this.mostrarResumen()}
            </React.Fragment>
        )
    }

    mostrarResumen = () => {
        const {marca, year, plan} = this.props.datos;

        console.log(this.props.resultado);
        

        if(!marca || !year || !plan) return null;
        return (
            <div className="resumen">
                <h2>Resumen de Cotización</h2>
                <ul>
                    <li>Marca: {primeraMayuscula(marca)}</li>
                    <li>Plan: {primeraMayuscula(plan)}</li>
                    <li>Año del coche: {year}</li>
                </ul>
            </div>
        )
    }
}

export default Resumen;