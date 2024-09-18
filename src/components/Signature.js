import React from 'react';

import signature from '../images/signature.png'


function Signature() {

    return (
        <div className='signature'>
            <h3>Sincerely,</h3>
            <img src={signature} alt="Nicholas Herman" height="95" />
            <h3>Nicholas Herman</h3>
        </div>
    )
}

export default Signature;