import React from 'react'
import { Component } from './ui/typing-animation-demo-2'
import Image from 'next/image'
import { Instagram , GitHubDark , LinkedIn } from "developer-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const Header = () => {
  return (
    <div className="mx-auto max-w-5xl p-4 sm:p-6 font-sans">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white  dark:border-gray-800 dark:bg-[#0d1117]">
        
        {/* Editor Toolbar */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-800 dark:bg-[#161b22]">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
          </div>
        
          <div className="w-12"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:p-8">
          
          {/* Avatar */}
          <div className="shrink-0 self-center sm:self-start">
            <Image
              src="/h5.jpg"
              alt="Muhammad Hamees Sheikh"
              width={160}
              height={160}
              className="h-32 w-32 rounded-2xl border border-gray-200 object-cover shadow-sm dark:border-gray-700 sm:h-40 sm:w-40"
              priority
            />
          </div>

          {/* Text Content Block */}
          <div className="flex flex-col flex-1">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl text-center sm:text-left">
              Muhammad Hamees Sheikh
            </h1>
            
            {/* Tagline / Subtitle */}
            <div className="mt-1.5 flex flex-wrap items-center justify-center gap-1.5 font-mono text-sm text-cyan-600 dark:text-cyan-400 font-semibold sm:justify-start">
              <span>Software Engineer | Full-Stack Developer</span>
              {/* <span className="text-gray-300 dark:text-gray-700">|</span> */}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              </span>
            </div>
            
            {/* Bio Description */}
            <p className="mt-4 text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 sm:text-[16px] text-center sm:text-left">
              I am a passionate software engineer with expertise in full-stack development. I specialize in creating dynamic and responsive web applications using modern technologies, bringing a strong foundation in both front-end and back-end architectures.
            </p>

            {/* Social Links Section */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              
              {/* GitHub Button */}
                 

                   <Tooltip>
                 
                           <TooltipTrigger>
                            <a 
                href="https://github.com/Hamees123" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GitHubDark size={25} />
              </a>
                             </TooltipTrigger>
                 
                   <TooltipContent>
                     <p>Github</p>
                   </TooltipContent>
                 </Tooltip>


              

              {/* LinkedIn Button */}

                <Tooltip>
              
                        <TooltipTrigger>
 <a 
                href="https://www.linkedin.com/in/muhammad-hamees-sheikh-6047132a6/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <LinkedIn size={25} />
              </a>                          </TooltipTrigger>
              
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>
             

              


  <Tooltip>

          <TooltipTrigger>
<a  href="https://www.instagram.com/hamees_sheikh/" 
                target="_blank" 
                rel="noopener noreferrer"
                >

              <Instagram size={25}/>

              </a>            </TooltipTrigger>

  <TooltipContent>
    <p>Instagram</p>
  </TooltipContent>
</Tooltip>
              


              {/* Resume Download Button */}
              {/* <a 
                href="/resume.pdf" 
                download
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:shadow"
              >
                <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <span>Resume</span>
              </a> */}

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header