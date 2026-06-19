"use client"

import React from "react"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import { 
  ExpressJsDark, 
  JavaScript, 
  MongoDB, 
  MySQL, 
  NextJs, 
  NodeJs, 
  PostgreSQL, 
  Python, 
  ShadcnUI, 
  TailwindCSS, 
  TypeScript, 
  VercelDark 
} from "developer-icons"

export type IconProps = React.HTMLAttributes<SVGElement>

// Clean custom SVG wrappers that match your layout styles
const Icons = {
  typescript: (props: IconProps) => <TypeScript {...props} />,
  javascript: (props: IconProps) => <JavaScript {...props} />,
  react: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  next: (props: IconProps) => <NextJs {...props} />,
  tailwind: (props: IconProps) => <TailwindCSS {...props} />,
  nodeJS: (props: IconProps) => <NodeJs {...props} />,
  express: (props: IconProps) => <ExpressJsDark {...props} />,
  mongoDB: (props: IconProps) => <MongoDB {...props} />,
  mySQL: (props: IconProps) => <MySQL {...props} />,
  python: (props: IconProps) => <Python {...props} />,
  vercel: (props: IconProps) => <VercelDark {...props} />,
  postgreSQL: (props: IconProps) => <PostgreSQL {...props} />,
  shadcn: (props: IconProps) => <ShadcnUI {...props} />,
}

// Grouped Technical Stack Map for multi-row alignment
const TECH_CATEGORIES = [
  {
    index: "01",
    title: "Languages",
    skills: [
      { name: "TypeScript", url: "https://www.typescriptlang.org", Icon: Icons.typescript },
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", Icon: Icons.javascript },
      { name: "Python", url: "https://www.python.org", Icon: Icons.python },
    ],
  },
  {
    index: "02",
    title: "Frontend",
    skills: [
      { name: "React", url: "https://react.dev", Icon: Icons.react },
      { name: "Next.js", url: "https://nextjs.org", Icon: Icons.next },
      { name: "Tailwind CSS", url: "https://tailwindcss.com", Icon: Icons.tailwind },
      { name: "Shadcn UI", url: "https://ui.shadcn.com", Icon: Icons.shadcn },
    ],
  },
  {
    index: "03",
    title: "Backend & Systems",
    skills: [
      { name: "Node.js", url: "https://nodejs.org", Icon: Icons.nodeJS },
      { name: "Express.js", url: "https://expressjs.com", Icon: Icons.express },
      { name: "MongoDB", url: "https://www.mongodb.com", Icon: Icons.mongoDB },
      { name: "MySQL", url: "https://www.mysql.com", Icon: Icons.mySQL },
      { name: "PostgreSQL", url: "https://www.postgresql.org", Icon: Icons.postgreSQL },
      { name: "Vercel", url: "https://vercel.com", Icon: Icons.vercel },
    ],
  },
]

export function DockDemo() {
  return (
    // Max width locked cleanly to 5xl bounding canvas alignment parameters
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold tracking-tighter text-slate-900 dark:text-white mb-10 text-left">
        <PointerHighlight
          rectangleClassName="bg-[#A5E9DD] dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
          pointerClassName="text-black-500"
        >
          <span className="relative z-10">Technology Stack</span>
        </PointerHighlight>
      </h2>

      {/* Main Structural Container */}
      <div className="w-full border-t border-gray-100 dark:border-zinc-800/80">
        {TECH_CATEGORIES.map((category) => (
          <div
            key={category.index}
            className="grid items-start gap-y-2 border-b border-gray-100 dark:border-zinc-800/80 py-5 last:border-none grid-cols-1 sm:grid-cols-[160px_1fr]"
          >
            {/* Left Side Section Categorization Label Block */}
            <div className="pl-2 text-sm font-medium text-gray-800 dark:text-zinc-500 flex items-center h-7">
              <span className="mr-2 font-mono text-xs text-gray-500 dark:text-zinc-700 select-none" aria-hidden="true">
                {category.index}
              </span>
              {category.title}
            </div>

            {/* Right Side Wrapping Inline Skills Badges List */}
            <ul className="flex flex-wrap gap-2 px-2 sm:px-4">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex">
                  <a
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 items-center justify-center gap-2 rounded-md bg-[#F5F5F5] px-2.5 font-mono text-xs text-slate-800 border border-gray-200/60 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0"
                  >
                    <skill.Icon />
                    {skill.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}