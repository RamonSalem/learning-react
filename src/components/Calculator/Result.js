import React from 'react';

const Result = props =>{
    return (
        <div className="card-footer text-muted">
            {props.result}
        </div>
    )
}

export default Result;