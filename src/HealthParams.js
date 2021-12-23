import React from 'react';


const HealthParams = (params) => {

    return(
        <div className = "tc br3 pa3 grow shadow-5 custombg">
            <div>
                <img className='dib' src={params.img} />
                <h1 className='dib'> {params.name} : {params.value} {params.units}</h1>
            </div>
        </div>
    );
}

export default HealthParams;