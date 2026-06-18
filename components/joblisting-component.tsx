"use client"

import { useEffect, useRef, useState, type JSX } from "react"
import type { SVGProps } from "react"
import { AnimatePresence, motion } from "motion/react"
import { useOnClickOutside } from "usehooks-ts"

export interface Job {
  company: string
  title: string
  logo: React.ReactNode
  job_description: string
  salary: string
  location: string
  remote: string
  job_time: string
  duration: string // Added duration field
}

export interface JobListingComponentProps {
  jobs: Job[]
  className?: string
  onJobClick?: (job: Job) => void
}

export const Resend = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M186 447.471V154H318.062C336.788 154 353.697 158.053 368.79 166.158C384.163 174.263 396.181 185.443 404.845 199.698C413.51 213.672 417.842 229.604 417.842 247.491C417.842 265.938 413.51 282.568 404.845 297.381C396.181 311.915 384.302 323.375 369.209 331.759C354.117 340.144 337.067 344.337 318.062 344.337H253.917V447.471H186ZM253.917 289.835H311.773C319.04 289.835 325.329 288.298 330.639 285.223C336.229 281.869 340.421 277.258 343.216 271.388C346.291 265.519 347.828 258.811 347.828 251.265C347.828 243.718 346.151 237.15 342.797 231.56C339.443 225.691 334.552 221.219 328.124 218.144C321.975 215.07 314.428 213.533 305.484 213.533H253.917V289.835Z"
      fill="currentColor"
    />
  </svg>
)

export const Turso = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height="1em"
    viewBox="0 0 201 170"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m100.055 170c-2.1901 0-18.2001-12.8-21.3001-16.45-2.44 3.73-6.44 7.96-6.44 7.96-11.05-5.57-25.17-20.06-27.83-25.13-2.62-5-12.13-62.58-12.39-79.3-.34-9.41 5.85-28.49 67.9601-28.49 62.11 0 68.29 19.08 67.96 28.49-.25 16.72-9.76 74.3-12.39 79.3-2.66 5.07-16.78 19.56-27.83 25.13 0 0-4-4.23-6.44-7.96-3.1 3.65-19.11 16.45-21.3 16.45z"
      fill="#1ebca1"
    />
    <path
      d="m100.055 132.92c-20.7301 0-33.9601-10.95-33.9601-10.95l1.91-26.67-21.75-1.94-3.91-31.55h115.4301l-3.91 31.55-21.75 1.94 1.91 26.67s-13.23 10.95-33.96 10.95z"
      fill="#183134"
    />
    <path
      d="m121.535 75.79 78.52-27.18c-4.67-27.94-29.16-48.61-29.16-48.61v30.78l-14.54 3.75-9.11-10.97-7.8 15.34-39.38 10.16-39.3801-10.16-7.8-15.34-9.11 10.97-14.54-3.75v-30.78s-24.50997 20.67-29.1799684 48.61l78.5199684 27.18-2.8 37.39c6.7 1.7 13.75 3.39 24.2801 3.39 10.53 0 17.57-1.69 24.27-3.39l-2.8-37.39z"
      fill="#4ff8d2"
    />
  </svg>
)

export const Supabase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 109 113"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
      fill="url(#paint0_linear)"
    />
    <path
      d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
      fill="url(#paint1_linear)"
      fillOpacity={0.2}
    />
    <path
      d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
      fill="#3ECF8E"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1={53.9738}
        y1={54.974}
        x2={94.1635}
        y2={71.8295}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#249361" />
        <stop offset={1} stopColor="#3ECF8E" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1={36.1558}
        y1={30.578}
        x2={54.4844}
        y2={65.0806}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

export default function JobListingComponent({
  jobs,
  className,
  onJobClick,
}: JobListingComponentProps) {
  const [activeItem, setActiveItem] = useState<Job | null>(null)
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>
  useOnClickOutside(ref, () => setActiveItem(null))

  useEffect(() => {
    function onKeyDown(event: { key: string }) {
      if (event.key === "Escape") {
        setActiveItem(null)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      {/* Blurred Backdrop */}
      <AnimatePresence>
        {activeItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md"
          />
        ) : null}
      </AnimatePresence>

      {/* Expanded Modal View */}
      <AnimatePresence>
        {activeItem ? (
          <div className="fixed inset-0 z-50 grid place-items-center p-4">
            <motion.div
              className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 flex h-fit w-full max-w-xl cursor-default flex-col items-start gap-5 p-6 shadow-2xl relative"
              ref={ref}
              layoutId={`workItem-${activeItem.company}`}
              style={{ borderRadius: 16 }}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-500 dark:text-gray-400 transition-colors cursor-pointer"
              >
                ✕
              </button>

              <div className="flex w-full items-start gap-4">
                <motion.div 
                  layoutId={`workItemLogo-${activeItem.company}`}
                  className="text-4xl p-2 bg-gray-50 dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800"
                >
                  {activeItem.logo}
                </motion.div>
                
                <div className="flex grow flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <motion.div
                      className="text-gray-900 dark:text-gray-100 text-lg font-bold"
                      layoutId={`workItemCompany-${activeItem.company}`}
                    >
                      {activeItem.company}
                    </motion.div>
                    <motion.span 
                      layoutId={`workItemDuration-${activeItem.company}`}
                      className="text-xs font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/30 px-2 py-0.5 rounded-md mr-6"
                    >
                      {activeItem.duration}
                    </motion.span>
                  </div>
                  
                  <motion.p
                    layoutId={`workItemTitle-${activeItem.company}`}
                    className="text-gray-700 dark:text-gray-300 font-semibold text-sm"
                  >
                    {activeItem.title} <span className="text-gray-400 dark:text-zinc-600 font-normal">|</span> <span className="text-emerald-600 dark:text-emerald-400 font-medium">{activeItem.salary}</span>
                  </motion.p>
                  
                  <motion.div
                    className="text-gray-500 dark:text-gray-400 flex flex-wrap gap-x-2 gap-y-1 text-xs"
                    layoutId={`workItemExtras-${activeItem.company}`}
                  >
                    <span>
                      {activeItem.remote === "Hybrid" ? `Hybrid / ${activeItem.location}` : activeItem.location}
                    </span>
                    <span>•</span>
                    <span className="capitalize">{activeItem.job_time}</span>
                  </motion.div>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100 dark:bg-gray-800 my-1" />

              <motion.p
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
              >
                {activeItem.job_description}
              </motion.p>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Main List Layout */}
      <div className={`w-full max-w-5xl px-4 py-6 ${className || ""}`}>
        <div className="flex w-full flex-col gap-3">
          {jobs.map((role) => (
            <motion.div
              layoutId={`workItem-${role.company}`}
              key={role.company}
              className="group bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 flex w-full cursor-pointer flex-row items-center gap-4 p-4 shadow-xs transition-all hover:shadow-md"
              onClick={() => {
                setActiveItem(role)
                if (onJobClick) onJobClick(role)
              }}
              style={{ borderRadius: 12 }}
            >
              {/* Logo Box */}
              <motion.div 
                layoutId={`workItemLogo-${role.company}`}
                className="text-3xl p-3 bg-gray-50 dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800 group-hover:scale-105 transition-transform shrink-0"
              >
                {role.logo}
              </motion.div>

              {/* Information Columns */}
              <div className="flex w-full flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex flex-col gap-0.5">
                  <motion.div
                    className="text-gray-900 dark:text-gray-100 font-bold text-base group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors"
                    layoutId={`workItemCompany-${role.company}`}
                  >
                    {role.company}
                  </motion.div>
                  
                  <motion.div
                    className="text-gray-700 dark:text-gray-300 text-sm font-medium"
                    layoutId={`workItemTitle-${role.company}`}
                  >
                    {role.title} <span className="text-gray-300 dark:text-zinc-700 mx-1">|</span> <span className="text-emerald-600 dark:text-emerald-400 font-normal">{role.salary}</span>
                  </motion.div>

                  <motion.div
                    className="text-gray-500 dark:text-gray-400 flex flex-row items-center gap-2 text-xs mt-1"
                    layoutId={`workItemExtras-${role.company}`}
                  >
                    <span>
                      {role.remote === "Hybrid" ? `Hybrid / ${role.location}` : role.location}
                    </span>
                    <span className="text-gray-300 dark:text-zinc-700">•</span>
                    <span className="capitalize">{role.job_time}</span>
                  </motion.div>
                </div>

                {/* Duration Date Badge Alignment */}
                <div className="sm:text-right shrink-0">
                  <motion.span
                    layoutId={`workItemDuration-${role.company}`}
                    className="font-mono text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800/60 px-2.5 py-1 rounded-md inline-block"
                  >
                    {role.duration}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}