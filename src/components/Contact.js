import React from 'react';
import { MdSmartphone, MdMail, MdLocationOn } from 'react-icons/md';
import linkedin_icon from '../images/linkedin_icon.png'
import github_icon from '../images/github_icon.png'


function Contact() {

    return (
        <div className='contact'>
            <h2 className='title'>Contact</h2>
            <div className='subsection'>
                <div className='phone'>
                    <span className='icon'>
                        <MdSmartphone />
                    </span>
                    <span>
                        701-516-7145
                    </span>
                </div>
                <div className='email'>
                    <span className='icon'>
                        <MdMail />
                    </span>
                    <span>nicholas.herman1@outlook.com</span>
                </div>
                <div className='address'>
                    <span className='icon'>
                        <MdLocationOn />
                    </span>
                    <span>1110 Plainfield Rd., Cleveland, OH</span>
                </div>
                <div className='linkedin'>
                    <span className='icon'>
                        <img src={linkedin_icon} alt="linkedin logo" height="15" />
                    </span>
                    <span>www.linkedin.com/in/nicholas-s-herman</span>
                </div>
                <div className='github'>
                    <span className='icon'>
                        <img src={github_icon} alt="github logo" height="15" />
                    </span>
                    <span>https://github.com/hermnich/Welcome</span>
                </div>
            </div>
        </div>
    )
}

export default Contact;