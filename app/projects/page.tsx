import ThreeDCardDemo from '@/components/3d-card-demo'
import { projectinfo } from '@/data/projectinfo'
import React from 'react'

const page = () => {
  return (
    <div className='mt-2'>
        
         <div className="w-full max-w-5xl mx-auto text-left px-4 sm:px-6 mb-10 mt-10">
                 {/* The Heading with your Highlight Component */}
                 <h1 className="text-4xl font-extrabold tracking-tighter text-slate-900 dark:text-white sm:text-5xl">
                   
                     <span className="relative z-10">My Projects</span>
                 </h1>
         
                 {/* The Aligned Description */}
                 <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-500 dark:text-zinc-400 sm:text-lg">
                   A curated collection of web applications, and digital solutions 
                   built with modern web technologies and robust architectures.
                 </p>
               </div>
        <ThreeDCardDemo projects={projectinfo} />
    </div>
  )
}

export default page