import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const WorkExperience = () => {

    return(
        <>
        <h1> Work Experience</h1>
        <div className='work-container'>
            
            <div className='work-head'> 
                <h3>Software Developer Intern - <a href='https://systems-plus.com' target="_blank">Systems Plus Pvt Ltd</a></h3>
            </div>
            <div className='work-text'> 
                <ul>
                    <li>
                        <u>Developed an Internal Automation Tool</u> : I spearheaded the development of an internal tool to 
                        automate the invoicing process for the captive team at Systems Plus. This tool significantly 
                        reduced manual data entry, leading to a 60% increase in processing speed and a marked decrease in errors. 
                    </li>
                    <br/>
                    <li>
                        <u>Technology Stack</u>: The project was built using the Django framework, leveraging a Python backend to handle data 
                        processing and business logic. For the frontend, I utilized HTML/CSS to create a user-friendly interface, ensuring 
                        seamless interaction for non-technical users. The project was securely hosted on the company's internal server,
                        complying with all internal data protection protocols.
                    </li>
                    <br/>
                    <li>
                       <u>Excel Automation with 'openpyxl'</u>: The tool integrated with 'openpyxl' to automatically generate and populate 
                       Excel sheets with invoice data. This automation streamlined the generation of invoices, reducing the time taken 
                       from hours to minutes and allowing the team to handle a higher volume of invoices efficiently.
                    </li>
                    <br/>
                    <li>
                        <u>Impact</u>: By automating the invoicing process, the tool enhanced the team's productivity, improved accuracy in 
                        financial reporting, and allowed the company to reallocate resources to more strategic tasks. The successful 
                        deployment of this tool demonstrated the value of automation in routine processes and laid the groundwork for 
                        future automation projects within the company.
                    </li>

                </ul>
            </div>
        </div>




        
        
        
        
        
        </>
    ) ;


    
}



export default WorkExperience;