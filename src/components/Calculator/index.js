import React, { Component } from 'react';
import Result from './Result';
import Inputs from './Inputs';
import '../../App.css';

class Calculator extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            goalInput : 0,//The final goal
            applicationInput : 0,//Value applied monthly
            anualGainRateInput : 0,//Anual % of gain rate
            resultYears : 0
        }
    }

    calculate(goalInput, applicationInput, anualGainRateInput ){
        let total = 0;
        let yearsCount = 0;

        for( total ; total <= goalInput ; total += applicationInput + (total * anualGainRateInput/12), yearsCount++){
            //console.log('Total: '+ (total).toFixed(2));
            //if(yearsCount%12 === 0) console.log('Year: '+(yearsCount/12).toFixed(2));
        }
        return (yearsCount/12);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            goalInput: parseInt(e.target.goalInput.value,10),
            applicationInput:  parseInt(e.target.applicationInput.value,10),
            anualGainRateInput: parseInt(e.target.anualGainRate.value, 10),
            resultYears : this.calculate(parseInt(e.target.goalInput.value,10),parseInt( e.target.applicationInput.value,10), parseInt(e.target.anualGainRate.value,10)/100 )
        })
    }
  
  
    render() {
        return (
            <div className="card text-center">
                <div className="card-header">
                    Simule quanto tempo tomará para alcançar sua meta de investimento
                </div>
                <div className="card-body">
                    <h5 className="card-title">Simulador</h5>
                    <Inputs 
                        onSubmit={this.handleSubmit}
                    />
                    
                </div>
                <Result result={this.state.resultYears}/>
        </div>
        );
    }
}

export default Calculator;