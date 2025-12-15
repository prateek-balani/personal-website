import WinHelp from "./windowsEffect";
import Base from "./Base";

const options = [
    {
        title: "Email",
        label: "Email",
        href: "mailto:prateekbalnai03@gmail.com",
        desc: "My Email ID",
    },
    {
        title: "LinkedIn",
        label: "My LinkedIn",
        href: "https://www.linkedin.com/in/prateek-balani/",
        desc: "Connect With Me On LinkedIn",
    },
    {
        title: "GitHub",
        label: "GitHub",
        href: "https://github.com/prateek-balani",
        desc: "Check Out My Other Work On Github",
    },
];

const Contact = () => {
    return (
        <Base>
            <div className="min-h-screen p-8 md:p-16 flex flex-col">

                {/* Intro section */}

                <div className="mb-40  text-center ">
                    <WinHelp title={"Thank You"}>
                        <h1 className="text-2xl text-start font-bold font-kindly text-[#0c148c] mb-4 p-5">
                            Thanks for stopping by!
                        </h1>
                        <p className="text-lg text-start p-5">
                            I'm always happy to connect. You can reach me here through any of the options below.
                        </p>
                    </WinHelp>
                </div>


                {/* Contact cards */}
                <ul className="grid gap-12 md:grid-cols-3">
                    {options.map((opt, idx) => (
                        <li key={opt.href} className="h-full">
                            <WinHelp title={opt.title} width="100%">
                                <a
                                    href={opt.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block rounded-md focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400/60"
                                >
                                    <div className={`overflow-hidden rounded-md border border-transparent bg-white/70 dark:bg-white/10 backdrop-blur-sm px-6 py-12 shadow-sm transition-all duration-300 ease-out hover:shadow-xl group-hover:-translate-y-1 group-hover:border-indigo-400 animate-fadeIn delay-${idx * 200}`}>
                                        <h2 className="text-lg md:text-xl font-medium flex items-center justify-between">
                                            {opt.label}
                                            <span className="ml-2 transform opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                                                →
                                            </span>
                                        </h2>
                                        <p className="text-base text-start ">
                                            {opt.desc}
                                        </p>
                                    </div>
                                </a>
                            </WinHelp>
                        </li>
                    ))}
                </ul>
            </div>
        </Base>
    );
};

export default Contact;
