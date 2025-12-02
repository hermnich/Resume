import React from 'react';
import { MdSmartphone, MdMail } from 'react-icons/md';

function Reference() {

    return (
        <div className='reference'>
            <h2 className='title'>References</h2>

            <div className='subsection'>
                <h3>Andrew Work</h3>

                <div className='phone'>
                    <span className='icon'><MdSmartphone /></span>
                    <span>+1 (502) 648-8186</span>
                </div>

                <div className='email'>
                    <span className='icon'><MdMail /></span>
                    <span>awork@parker.com</span>
                </div>
            </div>

            <div className='subsection'>
                <h3>Matt Myers</h3>

                <div className='phone'>
                    <span className='icon'><MdSmartphone /></span>
                    <span>+1 (330) 562-2288</span>
                </div>

                <div className='email'>
                    <span className='icon'><MdMail /></span>
                    <span>info@rpgatta.com</span>
                </div>
            </div>
        </div>
    )
}

export default Reference;