import React from 'react';
import { MdSmartphone, MdMail, MdLocationOn } from 'react-icons/md';

function Reference() {

    return (
        <div className='reference'>
            <h2 className='title'>Reference</h2>
            <div className='subsection'>
                <h3>Matt Myers</h3>
                <div className='phone'>
                    <span className='icon'>
                        <MdSmartphone />
                    </span>
                    <span>
                    330-562-2288
                    </span>
                </div>
                <div className='email'>
                    <span className='icon'>
                        <MdMail />
                    </span>
                    <span>info@rpgatta.com</span>
                </div>
            </div>
        </div>
    )
}

export default Reference;