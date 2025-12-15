import Base from "./Base";

import TechnologiesUsed from "./TechnologiesUsed";
import WinHelp from "./windowsEffect";


const Recruiters = () => {
  return (
    <Base>
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">


        <WinHelp title="C:\\Users\\Prateek\\experience.txt" width="100%">
          <div className="p-6 text-left space-y-3">
            <h1 className="text-2xl font-bold font-kindly text-[#0c148c]">
              Experience
            </h1>

            <p className="text-base max-w-2xl ">
              Software-focused roles building internal applications, automation pipelines, and production tools used by real teams in live environments.
            </p>

            <p className="text-base ">
              Full-stack development · Internal tooling · Automation · Enterprise systems
            </p>
          </div>
        </WinHelp>

        <TechnologiesUsed />



        <WinHelp title="OpenDoorGroup.exe" width="100%">
          <div className="p-6 space-y-4 text-left">
            <div>
              <h2 className="text-lg font-semibold text-[#0c148c]">
                Software Developer - Internal Tools & Automation
              </h2>
              <p className="text-base text-gray-600">
                Open Door Group · Sep 2025 - Present · Vancouver, BC · Hybrid
              </p>
            </div>

            <ul className="list-disc list-inside space-y-2 text-base font-semibold  ">
              <li>
                Build and maintain internal full-stack applications using <span className="underline">C#, .NET, and React</span> to support operational and partner-facing workflows.
              </li>
              <li>
                Design and automate business processes with <span className="underline">Power Apps, Power Automate, SharePoint, and Microsoft 365</span>, reducing manual approvals and form-driven overhead.
              </li>
              <li>
                Develop internal systems for expense reimbursements, partner change requests, and access workflows, converting recurring pain points into scalable tools.
              </li>
              <li>
                Leverage <span className="underline">Zendesk</span> ticket trends and internal documentation to identify automation opportunities and inform software improvements.
              </li>
            </ul>
          </div>
        </WinHelp>


        <WinHelp title="BenjaminConsulting.exe" width="100%">
          <div className="p-6 space-y-4 text-left">
            <div>
              <h2 className="text-lg font-semibold text-[#0c148c]">
                IT Consultant (Contract)
              </h2>
              <p className="text-base text-gray-600">
                Benjamin Consulting · Jun 2025 - Present · Remote
              </p>
            </div>

            <ul className="list-disc list-inside space-y-2 text-base font-semibold  ">
              <li>
                Built Python and SQL automation to pull daily aging data from <span className="underline">FreshBooks</span> and trigger automated reminders, cutting collection time by <span className="underline">15 days</span>.
              </li>
              <li>
                Developed a lightweight <span className="underline">React</span> dashboard using the FreshBooks API to provide real-time invoice visibility for finance and sales teams.
              </li>
              <li>
                Reduced payment disputes by <span className="underline">20%</span> and saved ~<span className="underline">30 hours/week</span> through improved transparency and automation.
              </li>
            </ul>
          </div>
        </WinHelp>


        <WinHelp title="SaturnTech.exe" width="100%">
          <div className="p-6 space-y-4 text-left">
            <div>
              <h2 className="text-lg font-semibold text-[#0c148c]">
                Frontend Web Developer (Freelance)
              </h2>
              <p className="text-base text-gray-600">
                SaturnTech Ltd. · Jun 2025 - Oct 2025 · Remote
              </p>
            </div>

            <ul className="list-disc list-inside space-y-2 text-base font-semibold  ">
              <li>
                Designed and built a fully responsive community platform for a <span className="underline">6,000-member</span> group using <span className="underline">React, Vite, and Tailwind CSS</span>.
              </li>
              <li>
                Centralized events, FAQs, and resources, reducing repetitive admin questions by ~<span className="underline">70%</span>.
              </li>
              <li>
                Drove <span className="underline">1,200+ unique visitors</span>, <span className="underline">260 WhatsApp sign-ups</span>, and a <span className="underline">3x</span> increase in RSVPs within 30 days.
              </li>
            </ul>
          </div>
        </WinHelp>


        <WinHelp title="SystemsPlus.exe" width="100%">
          <div className="p-6 space-y-4 text-left">
            <div>
              <h2 className="text-lg font-semibold text-[#0c148c]">
                Software Developer Intern
              </h2>
              <p className="text-base text-gray-600">
                Systems Plus · Jul 2024 - Sep 2024 · Mumbai · Hybrid
              </p>
            </div>

            <ul className="list-disc list-inside space-y-2 text-base font-semibold  ">
              <li>
                Built a full-stack internal invoicing system using <span className="underline">Django, MySQL, and HTML/CSS</span>, replacing a manual Excel-based workflow.
              </li>
              <li>
                Migrated legacy invoice data into a structured database after analyzing multiple historical formats.
              </li>
              <li>
                Reduced manual data entry by <span className="underline">70%</span>, improved processing speed by <span className="underline">60%</span>, and increased reporting accuracy by <span className="underline">30%</span>.
              </li>
            </ul>
          </div>
        </WinHelp>

      </div>
    </Base>
  );
};

export default Recruiters;

