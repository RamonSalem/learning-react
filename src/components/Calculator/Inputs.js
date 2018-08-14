import React from 'react';

const Inputs = props =>{
    return (
        
        <form onSubmit={props.onSubmit}>
            <div className="container-fluid">
                <div className="row">
                    <div className="App-default-size">
                        <label htmlFor="inputEmail4">Objetivo</label>
                        <input
                             type="number" className="form-control" id="goalInput" placeholder="Ex: 1000000">
                        </input>
                    </div>  
                </div>

                <div className="row">
                    <div className="App-default-size">
                        <label htmlFor="inputPassword4">Aplicação mensal</label>
                        <input
                            type="number" className="form-control" id="applicationInput" placeholder="Ex: 300">
                        </input>
                    </div>
                </div>

                 <div className="row">
                    <div className="App-default-size">
                        <label htmlFor="inputPassword4">Rentabilidade(anual %)</label>
                        <input
                             type="number" className="form-control" id="anualGainRate" placeholder="Ex: 8">
                        </input>
                    </div>
                </div>
                <button type="submit" className="btn btn-success button-margin" >Calcular</button>
            </div>
        </form>
        
        
    )
}

export default Inputs;