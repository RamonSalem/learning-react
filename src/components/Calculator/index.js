import React, { Component } from 'react';
import Result from './Result';
import Inputs from './Inputs';
import '../../App.css';

class Calculator extends Component {
    //<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
  render() {
    return (
        <div className="card text-center">
            <div className="card-header">
                Simule quanto tempo tomará para alcançar sua meta de investimento
            </div>
            <div className="card-body">
                <h5 className="card-title">Simulador</h5>
                <Inputs  />
                <button className="btn btn-success button-margin" >Calcular</button>
                
            </div>
            <Result result="The result will appear here"/>
      </div>
    );
  }
}

export default Calculator;