import React from 'react';

import Title from '../components/Title'
import Signature from '../components/Signature'
import Letter from '../components/Letter'



function Cover() {

    return (
        <div className='cover'>
            <div className='toppane'><Title /></div>
            <hr></hr>
            <div className='midpane'>
                <Letter />
            </div>
            <div className='bottompane'>
                <Signature />
            </div>
        </div>
    )
}

export default Cover;