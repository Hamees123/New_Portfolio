import { CodeXmlIcon } from "lucide-react"

import type { ExperienceItemType } from "@/components/work-experience"
import { WorkExperience } from "@/components/work-experience"
import { PointerHighlight } from "@/components/ui/pointer-highlight";



export default function WorkExperienceDemo() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24 border-t border-slate-50">
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-4xl font-bold tracking-tighter text-slate-900">
             <PointerHighlight
                    rectangleClassName="bg-[#A5E9DD]  dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
                    pointerClassName="text-black-500"
                  >
                    <h2 className="relative z-10">Work Experience</h2>
                  </PointerHighlight>
          </h2>
          
        </div>
      </div>

      <WorkExperience className="w-full" experiences={WORK_EXPERIENCE} />
    </section>
  )
}

const WORK_EXPERIENCE: ExperienceItemType[] = [
  
  
{
    id: "Digitano",
    companyName: "Digitano",
    companyLogo: "https://media.licdn.com/dms/image/v2/D4D0BAQFAmo8xZDNvXg/company-logo_200_200/B4DZzl0IXYIoAI-/0/1773382174645/digitano_logo?e=1782950400&v=beta&t=O4MJaDrGx7fxnjB7EvxW7fMfg7JlW7vCU58xGPnnVNk",
    companyWebsite: "https://digitanollc.com/",
    positions: [
      {
        id: "3",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "Jan 2026",
          end: "Mar 2026",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description: `- Made web designs.
- Implemented responsive layouts.`,
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React.js",
          "Next.js",
          "Git",
          "GitHub"
        ],
        isExpanded: true,
      }
    ],
    isCurrentEmployer: false,
  } ,

  {
    id: "10Pearls",
    companyName: "10Pearls",
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-FgJ2MN3PgIBGyMp_VNwNXA0455UqSKM3DA&s",
    companyWebsite: "https://10pearls.com/",
    positions: [
      {
        id: "2",
        title: "MERN Stack",
        employmentPeriod: {
          start: "Sep 2025",
          end : "Nov 2025",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description: `- Built a Notes App.
- Implement CRUD operations.
- Done testing of the application.
- Used SonarQube for code quality analysis.`,
        skills: [
          "HTML",
          "CSS",
          "JavaScript",  
          "React.js",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Git",
          "GitHub",
          "Jest",
          "Mocha/Chai",
          "SonarQube"
        ],
        isExpanded: true,
      }
    ],
    isCurrentEmployer: false,

    
  },

  
  
]