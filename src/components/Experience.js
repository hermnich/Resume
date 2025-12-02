import React from 'react';

function Experience() {

    return (
        <div className='experience'>
            <h2 className='title'>Work Experience</h2>
            <h3 className='jobtitle'>Project Electrical/Software Engineer</h3>
            <div className='flex-row'>
                <h4 className='company'>Parker Hannifin</h4>
                <span>
                    <span className='location'>Mentor, OH</span>
                    <span className='date'>2024-Current</span>
                </span>
            </div>
            <ul>
                <li>
                    Set up, run, and monitor electrical and mechanical test setups in accordance with customer specifications, internal procedures, and relevant standards to validate product performance, reliability, and safety.
                </li>
                <li>
                    Configure instruments, fixtures, and data acquisition systems for each test, verify proper operation, and make real-time adjustments to ensure accurate and repeatable results.
                </li>
                <li>
                    Identify opportunities for automation and process improvements in the lab, implementing changes that shorten setup times, enhance data quality, and improve test stand safety.
                </li>
                <li>
                    Perform hands-on electrical work including wiring, panel builds, and test fixture assembly while strictly adhering to electrical codes, lockout/tagout procedures, and lab safety protocols.
                </li>
                <li>
                    Prepare concise test reports and documentation that summarize procedures, conditions, and results, supporting customer requirements, certifications, and internal decision-making.
                </li>
            </ul>
            <h3 className='jobtitle'>Project Electrical/Software Engineer</h3>
            <div className='flex-row'>
                <h4 className='company'>rpGatta, Inc.</h4>
                <span>
                    <span className='location'>Aurora, OH</span>
                    <span className='date'>2020-2022</span>
                </span>
            </div>
            <ul>
                <li>
                    Designed, built, and programmed custom assembly robotics for auto industry customers including Rivian, Toyota, and Nissan.
                </li>
                <li>
                    Developed and tested control software programs in a variety of programming languages, often interfacing with new, custom Application Programming Interfaces.
                </li>
                <li>
                    Designed custom user interfaces to allow machine operators and owners to quickly and efficiently control and troubleshoot processes, and conducted site-specific training for owners/operators on automation control systems and equipment.
                </li>
                <li>
                    Configured complex automation systems based on contract specifications, including creating detailed flow diagrams, sequence of operations, bill of materials, network layouts, and electrical schematics.
                </li>
                {/* <li>
                    Worked directly with customers to deliver cost-effective solutions while ensuring customer
                    satisfaction.
                </li> */}
                <li>
                    Assisted in loading and commissioning system and network-level controllers, validated complete system functionality, and resolved issues in collaboration with subcontractors and other trades.
                </li>
                {/* <li>
                    Collaborated on large, interdisciplinary teams to create complex assembly systems,
                    contributing to integrated solutions and enhancing project outcomes.
                </li> */}
                {/* <li>
                    Commissioned equipment in the field to ensure correct, bug-free operation
                    from the very start of production.
                </li> */}
                {/* <li>
                    Coordinated the preparation of drawings and equipment schedules to facilitate
                    smooth installation.
                </li> */}
                {/* <li>
                    Managed the selection, ordering, and delivery tracking of materials for assigned
                    projects, and oversaw factory-mounting processes to adhere to project
                    timelines.
                </li> */}
                {/* <li>
                    Adhered to safety standards, with a strong focus on employee and
                    subcontractor safety.
                </li> */}
            </ul>
            {/* <h3 className='jobtitle'>Electrical Engineering Intern</h3>
            <div className='flex-row'>
                <h4 className='company'>Otter Tail Power Company</h4>
                <span>
                    <span className='location'>Fergus Falls, MN</span>
                    <span className='date'>2019</span>
                </span>
            </div>
            <ul>
                <li>
                    Created automation scripts in Pascal, Basic, and Perl for quickly and efficiently running hundreds of grid simulations,
                    greatly reducing the engineering time needed to audit grid loads and blackout potential.
                </li>
                <li>
                    Automated the transfer of legacy data into modern database systems.
                </li>
                <li>
                    Designed and commissioned new power substations, helping the company expand its service area.
                </li>
            </ul> */}
        </div>
    )
}

export default Experience;