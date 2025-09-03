import WinHelp from "./windowsEffect";
import { Link } from 'react-router-dom';


const options = [
    {
        title: 'Recruiters',
        label: 'For Recruiters',
        to: '/recruiters',
        desc: 'Resume, experience & highlighted projects'
    },
    {
        title: 'Developers',
        label: 'For Developers',
        to: '/developers',
        desc: 'Stack, code samples & side projects'
    },
    {
        title: 'Contact',
        label: 'Contact Me',
        to: '/contact',
        desc: 'Email, LinkedIn & other links'
    }
];

const SelectionSection = () => {
    return (
        <div className="p-8">
           
                <ul className="grid gap-8 md:grid-cols-3">
                    {options.map(opt => (
                        <li key={opt.to} className="h-full">
                            <WinHelp title={opt.title} width={'100%'}>
                            
                                <Link
                                    to={opt.to}
                                    className="group relative block rounded-md focus:outline-none focus-visible:ring-5 focus-visible:ring-indigo-400/60"
                                >
                                    <div className="overflow-hidden rounded-md border border-transparent transition-all duration-300 ease-out bg-white/70 dark:bg-white/10 backdrop-blur-sm px-6 py-10 md:py-12 shadow-sm hover:shadow-xl group-hover:-translate-y-1 group-hover:border-indigo-400 group-active:translate-y-0">
                                        <h2  >
                                            {opt.label}
                                            <span
                                                className="ml-2 inline-block translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300"
                                          
                                            >→</span>
                                        </h2>
                                        <p className="text-sm md:text-base">
                                            {opt.desc}
                                        </p>
                                       
                                    </div>

                                </Link>
                            </WinHelp>
                        </li>
                    ))}
                </ul>
         
        </div>
    );
};

export default SelectionSection;