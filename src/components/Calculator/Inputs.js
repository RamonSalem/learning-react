import React from 'react';

const Inputs = props =>{
    return (
        
        <form>
            <div className="container-fluid">
                <div className="row">
                    <div className="App-default-size">
                        <label htmlFor="inputEmail4">Objetivo</label>
                        <input type="number" className="form-control" id="inputEmail4" placeholder="Ex: 10000000">
                        </input>
                    </div>  
                </div>

                <div className="row">
                    <div className="App-default-size">
                        <label htmlFor="inputPassword4">Aplicação mensal</label>
                        <input type="number" className="form-control" id="inputPassword4" placeholder="Ex: 300">
                        </input>
                    </div>
                </div>

                 <div className="row">
                    <div className="App-default-size">
                        <label htmlFor="inputPassword4">Rentabilidade(anual %)</label>
                        <input type="number" className="form-control" id="inputPassword4" placeholder="Ex: 8">
                        </input>
                    </div>
                </div>

            </div>
        </form>
        
        
    )
}

export default Inputs;