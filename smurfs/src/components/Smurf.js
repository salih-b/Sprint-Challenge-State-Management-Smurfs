import React from 'react';

const Smurf = ({smurf})=>{
    return (
        
    <div>
{
    !smurf.name && 
    <div>
        <h2> {smurf.name}</h2>
        <p>{smurf.age}</p>
        <p>{smurf.height}</p>
    </div>
}
    </div>
    )
}

export default Smurf;