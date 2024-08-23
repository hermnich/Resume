import React from 'react';
import Contact from '../components/Contact'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Profile from '../components/Profile'
import Reference from '../components/Reference'
import Skills from '../components/Skills'
import Title from '../components/Title'


function Resume() {

    return (
        <div className='resume'>
            <div className='toppane'><Title /></div>
            <hr></hr>
            <div className='flex-row'>
                <div className='leftpane flex-col'>
                    <Contact />
                    <hr></hr>
                    <Education />
                    <hr></hr>
                    <Reference />
                </div>
                <div className='rightpane flex-col'>
                    <Profile />
                    <hr></hr>
                    <Experience />
                </div>
            </div>
            <hr></hr>
            <div className='bottompane'>
                <Skills />
            </div>
        </div>
    )
}

export default Resume;