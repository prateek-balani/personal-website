import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const WorkExperience = () => {

    return (
        <>
            <div className='outer-work-container'>
                <h1> Work Experience</h1>
                <div className='work-container'>

                    <div className='work-head'>
                        <h2><b>Software Developer Intern - <a href='https://systems-plus.com' target="_blank">Systems Plus Pvt Ltd</a></b></h2>
                    </div>
                    <div className='work-text'>
                        <ul>
                            <li>
                                <h3><b>Developed an Internal Automation Tool</b> </h3>
                             
                                <p>I spearheaded the development of an internal tool to
                                automate the invoicing process for the captive team at Systems Plus. This tool significantly
                                reduced manual data entry, leading to a 60% increase in processing speed and a marked decrease in errors.</p>
                            </li>
                            <br />
                            <li>
                                <h3><b>Technology Stack </b></h3>
                                 <p>The project was built using the Django framework, leveraging a Python backend to handle data
                                processing and business logic. For the frontend, I utilized HTML/CSS to create a user-friendly interface, ensuring
                                seamless interaction for non-technical users. The project was securely hosted on the company's internal server,
                                complying with all internal data protection protocols.</p>
                            </li>
                            <br />
                            <li>
                                <h3><b>Excel Automation with 'openpyxl' </b></h3>
                                <p>The tool integrated with 'openpyxl' to automatically generate and populate
                                Excel sheets with invoice data. This automation streamlined the generation of invoices, reducing the time taken
                                from hours to minutes and allowing the team to handle a higher volume of invoices efficiently.</p>
                            </li>
                            <br />
                            <li>
                                <h3><b>Impact</b></h3>
                                <p>By automating the invoicing process, the tool enhanced the team's productivity, improved accuracy in
                                financial reporting, and allowed the company to reallocate resources to more strategic tasks. The successful
                                deployment of this tool demonstrated the value of automation in routine processes and laid the groundwork for
                                future automation projects within the company.</p>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>









        </>
    );



}



export default WorkExperience;