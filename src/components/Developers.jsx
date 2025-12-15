import Base from "./Base";
import WinHelp from "./windowsEffect";

const Developers = () => {
    return (
        <Base>
            <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">


                <WinHelp title="C:\\Users\\Prateek\\projects.txt" width="100%">
                    <div className="p-6 text-left space-y-3">
                        <h1 className="text-2xl font-bold font-kindly text-[#0c148c]">
                            Projects
                        </h1>

                        <p className="text-base max-w-2xl">
                            Selected software projects demonstrating full-stack development, system design, testing, and deployment practices.
                        </p>

                        <p className="text-base">
                            Full-stack applications · Authentication · Testing · Deployment
                        </p>
                    </div>
                </WinHelp>


                <WinHelp title="AppointmentBooking.exe" width="100%">
                    <div className="p-6 space-y-4 text-left">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-lg font-semibold text-[#0c148c]">
                                    Appointment Booking App
                                </h2>
                                <p className="text-base text-gray-600 italic">
                                    React, Node.js, SQLite, Docker, Git
                                </p>
                            </div>


                        </div>

                        <ul className="list-disc list-inside space-y-2 text-base font-semibold">
                            <li>
                                Built a scheduling platform with editable bookings, daily calendar views, and role-based access control.
                            </li>
                            <li>
                                Deployed the application using <span className="underline">Docker and Nginx</span> for consistent, repeatable environments.
                            </li>
                            <li>
                                Added automated end-to-end testing with <span className="underline">Cypress</span> to improve reliability during updates.
                            </li>
                        </ul>
                    </div>
                </WinHelp>

                {/* Project 2 */}
                <WinHelp title="AestheticsSurvey.exe" width="100%">
                    <div className="p-6 space-y-4 text-left">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-lg font-semibold text-[#0c148c]">
                                    Aesthetics Survey Website
                                </h2>
                                <p className="text-base text-gray-600 italic">
                                    React, Node.js, SQLite, Docker, JWT, RBAC
                                </p>
                            </div>


                        </div>

                        <ul className="list-disc list-inside space-y-2 text-base font-semibold">
                            <li>
                                Led a 4-person team to build a web-based survey tool, helping researchers at ETS Montreal evaluate image
                                aesthetics based on user input.
                            </li>
                            <li>
                                Implemented secure authentication with <span className="underline">JWT</span> and role-based access for admins and researchers.
                            </li>
                            <li>
                                Reduced researcher manual work by <span className="underline">40%</span> and passed a university security review with no issues.
                            </li>
                        </ul>
                    </div>
                </WinHelp>


                <WinHelp title="Pondr.exe" width="100%">
                    <div className="p-6 space-y-4 text-left">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-lg font-semibold text-[#0c148c]">
                                    Pondr - Reddit Clone
                                </h2>
                                <p className="text-base text-gray-600 italic">
                                    PHP, MySQL, HTML, JavaScript
                                </p>
                            </div>


                        </div>

                        <ul className="list-disc list-inside space-y-2 text-base font-semibold">
                            <li>
                                Developed Pondr, a discussion forum inspired by Reddit, with PHP, HTML, and JavaScript, achieving a 95%
                                project score.
                            </li>
                            <li>
                                Increased engagement by <span className="underline">40%</span> during demo testing through feature iteration.
                            </li>
                            <li>
                                Used <span className="underline">Git</span> and Agile workflows in a team of three to deliver on schedule.
                            </li>
                        </ul>
                    </div>
                </WinHelp>


                <WinHelp title="Tixx.exe" width="100%">
                    <div className="p-6 space-y-4 text-left">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-lg font-semibold text-[#0c148c]">
                                    Tixx - Ticketmaster Clone
                                </h2>
                                <p className="text-base text-gray-600 italic">
                                    Django, Stripe API, Role-Based Access
                                </p>
                            </div>


                        </div>

                        <ul className="list-disc list-inside space-y-2 text-base font-semibold">
                            <li>
                                Built an event management platform with secure role-based permissions.
                            </li>
                            <li>
                                Integrated <span className="underline">Stripe</span> for payments with a 100% transaction success rate in testing.
                            </li>
                            <li>
                                Collaborated in a team of five, managing user roles and permissions for security and UX.
                            </li>
                        </ul>
                    </div>
                </WinHelp>

            </div>
        </Base>
    );
};

export default Developers;
