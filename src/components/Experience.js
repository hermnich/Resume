import React from 'react';

function Experience() {

    return (
        <div className='experience flex-col'>
            <h2 className='title'>Work Experience</h2>
            <h3 className='jobtitle'>Project Electrical/Software Engineer</h3>
            <div className='flex-row'>
                <h4 className='company'>R.P. Gatta</h4>
                <span>
                    <span className='location'>Aurora, OH</span>
                    <span className='date'>2020-2022</span>
                </span>
            </div>
            <ul>
                <li>
                    Designed, built, and programmed custom assembly robotics for auto industry customers
                    including Rivian, Toyota, and Nissan.
                </li>
                <li>
                    Developed and tested control software programs in a variety of programming languages,
                    often interfacing with new, custom Application Programming Interfaces.
                </li>
                <li>
                    Designed custom user interfaces to allow machine operators and owners to quickly
                    and efficiently control and troubleshoot processes, and conducted site-specific training
                    for owners/operators on automation control systems and equipment.
                </li>
                <li>
                    Configured complex automation systems based on contract specifications, including
                    creating detailed flow diagrams, sequence of operations, bill of materials,
                    network layouts, and electrical schematics.
                </li>
                <li>
                    Worked directly with customers to deliver cost-effective solutions while ensuring customer
                    satisfaction.
                </li>
                <li>
                    Assisted in loading and commissioning system and network-level controllers,
                    validated complete system functionality, and resolved issues in collaboration
                    with subcontractors and other trades.
                </li>
                <li>
                    Collaborated on large, interdisciplinary teams to create complex assembly systems,
                    contributing to integrated solutions and enhancing project outcomes.
                </li>
                <li>
                    Commissioned equipment in the field to ensure correct, bug-free operation
                    from the very start of production.
                </li>
                {/* <li>
                    Coordinated the preparation of drawings and equipment schedules to facilitate
                    smooth installation.
                </li>
                <li>
                    Managed the selection, ordering, and delivery tracking of materials for assigned
                    projects, and oversaw factory-mounting processes to adhere to project
                    timelines.
                </li>
                <li>
                    Adhered to safety standards, with a strong focus on employee and
                    subcontractor safety.
                </li> */}
            </ul>
            <h3 className='jobtitle'>Electrical Engineering Intern</h3>
            <div className='flex-row'>
                <h4 className='company'>OtterTail Power Company</h4>
                <span>
                    <span className='location'>Fergus Falls, MN</span>
                    <span className='date'>2019</span>
                </span>
            </div>
            <ul>
                <li>
                    Created automation scripts in Pascal, Basic, and Perl for quickly and efficiently runnning hundreds of grid simulations,
                    greatly reducing the engineering time needed to audit grid loads and blackout potential.
                </li>
                <li>
                    Automated the transfer of legacy data into modern database systems.
                </li>
                <li>
                    Designed and commissioned new power substations, helping the company expand its service area.
                </li>
            </ul>
        </div>
    )
}

export default Experience;