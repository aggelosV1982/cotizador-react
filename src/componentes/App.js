import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';

import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resultado: '',
      datos: {}
    }
  }

  cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos;
    
    // Agregar una base de 2000.
    let resultado = 2000;

    // Obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(year);
    // console.log('La diferencia es ' + diferencia);
    
    // Por cada año restar el 3% al valor del seguro
    resultado -= ((diferencia *3) * resultado) / 100;
    // console.log(resultado);
    
    // Americano 15%, Asiatico 5% y Europe 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;
    // console.log(resultado);

    // El plan del coche, el basico incrementa el valor 20% y el completo un 50%
    let incrementoPlan = obtenerPlan(plan);
    // console.log(incrementoPlan);

    // Dependiendo del plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    // console.log(resultado);

    // Crear objeto para el resumen
    const datoAuto = {
      marca: marca,
      year: year,
      plan: plan
    }

    // Ya tenemos los datos
    this.setState({
      resultado: resultado,
      datos: datoAuto
    })
  }

  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador Seguro de Coches"/>

        <div className="contenedor-formulario">
          <Formulario 
            cotizarSeguro={this.cotizarSeguro}
          />
        </div>
      </div>
    );
  }
}

export default App;
