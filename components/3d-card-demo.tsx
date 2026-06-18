// "use client";

// import React from "react";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { PointerHighlight } from "@/components/ui/pointer-highlight";
// import { Globe, WebcamIcon } from "lucide-react";
// import { Java, JavaScript, NodeJs, TailwindCSS } from "developer-icons";
// import Link from "next/link";
// import { Project } from "@/data/projectinfo";



// export default function ThreeDCardDemo({ projects }: { projects: Project[] }) {
//   return (
//     <>
//      <div className="w-full max-w-5xl mx-auto text-left px-4 sm:px-6 mb-10">
//   {/* The Heading with your Highlight Component */}
//   <h1 className="text-4xl font-extrabold tracking-tighter text-slate-900 dark:text-white sm:text-5xl">
//     <PointerHighlight
//       rectangleClassName="bg-[#9AD872] dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
//       pointerClassName="text-black-500"
//     >
//       <span className="relative z-10">My Projects</span>
//     </PointerHighlight>
//   </h1>

//   {/* The Aligned Description */}
//   <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-500 dark:text-zinc-400 sm:text-lg">
//     A curated collection of web applications, and digital solutions 
//     built with modern web technologies and robust architectures.
//   </p>
// </div>

//       <div className="flex flex-wrap gap-8 justify-center items-center mt-2">
//         {projects.map((project, index) => (
//           <CardContainer className="inter-var" key={index}>
//             <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
//              <div>
//               <CardItem
//                 translateZ="50"
//                 className="text-xl font-bold text-neutral-600 dark:text-white"
//               >
//                 {project.name}
//               </CardItem>
              
//               <CardItem
//                 as="p"
//                 translateZ="60"
//                 className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//               >
//                 {project.description}
//               </CardItem>
              
//              <CardItem translateZ="100" className="w-full mt-4">
//   <div className="w-full h-80 sm:h-80 overflow-hidden rounded-xl bg-gray-100 dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-800/50 shadow-sm">
//     <img
//       src={project.image}
//       className="h-full w-full object-cover object-top transition-all duration-500 ease-out group-hover/card:scale-[1.03]"
//       alt={`${project.name} thumbnail`}
//     />
//   </div>
// </CardItem>
//           </div>    
//               {/* FIXED ALIGNMENT FOOTER CONTAINER */}
//              <div className="flex flex-row items-center justify-between mt-auto pt-6 w-full gap-4">
    
//     {/* Left Side: Skills Mapping Block */}
//     <CardItem 
//       translateZ={20} 
//       className="flex flex-wrap gap-2 justify-start items-center max-w-[60%]"
//     >
//       {project.skills.map((skill, sIndex) => (
//         <span
//           key={sIndex}
//           className="rounded-md bg-gray-200 dark:bg-zinc-800 px-2 py-1 text-[10px] font-medium text-gray-700 dark:text-gray-300 sm:text-xs"
//         >
//           {skill}
//         </span>
//       ))}
//     </CardItem>

//     {/* Right Side: Details and Live Actions Block */}
//     <CardItem 
//       translateZ={20} 
//       className="flex flex-row items-center gap-2 justify-end shrink-0"
//     >
//       <Link href={`/projects/${project.slug}`}>
//         <span className="rounded-md bg-gray-800 dark:bg-zinc-800 px-3 py-1 text-[10px] font-bold text-white dark:text-gray-300 sm:text-xs hover:bg-gray-500 dark:hover:bg-zinc-700 transition-colors block">
//           Details
//         </span>
//       </Link>

//       {project.github && (
//         <Tooltip>
//           <TooltipTrigger asChild>
//             <span className="rounded-md bg-gray-200 dark:bg-zinc-800 px-2 py-1 text-[10px] font-medium text-gray-700 dark:text-gray-300 sm:text-xs flex items-center justify-center cursor-pointer">
//               <Link href={project.github} target="_blank" rel="noopener noreferrer">
//                 <svg className="h-[15px] w-[15px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
//                 </svg>
//               </Link>
//             </span>
//           </TooltipTrigger>
//           <TooltipContent><p>Source Code</p></TooltipContent>
//         </Tooltip>
//       )}

//       {project.link && (
//         <Tooltip>
//           <TooltipTrigger asChild>
//             <span className="rounded-md bg-gray-200 dark:bg-zinc-800 px-2 py-1 text-[10px] font-medium text-gray-700 dark:text-gray-300 sm:text-xs flex items-center justify-center cursor-pointer">
//               <Link href={project.link} target="_blank" rel="noopener noreferrer">
//                 <Globe size={15}/>
//               </Link>
//             </span>
//           </TooltipTrigger>
//           <TooltipContent><p>Live Demo</p></TooltipContent>
//         </Tooltip>
//       )}
//     </CardItem>

//   </div>
//             </CardBody>
//           </CardContainer>
//         ))}
//       </div>
//     </>
//   );
// }




"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Globe } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projectinfo";

export default function ThreeDCardDemo({ projects }: { projects: Project[] }) {
  return (
    <>
      

      <div className="flex flex-wrap gap-8 justify-center items-center mt-2">
        {projects.map((project, index) => (
          <CardContainer className="inter-var" key={index}>
            {/* FIXED: Added 'min-h-[36rem]' and explicit 'flex flex-col' structure to CardBody */}
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] min-h-[36rem] rounded-xl p-6 border flex flex-col justify-between">
              
              {/* FIXED: Changed this wrapper into a flex column that takes up all remaining available space (flex-1) */}
              <div className="flex flex-col flex-1">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.name}
                </CardItem>
                
                {/* FIXED: Added 'flex-grow' so this item takes up space dynamically regardless of character count length */}
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 flex-grow"
                >
                  {project.smalldescription}
                </CardItem>
                
                <CardItem translateZ="100" className="w-full mt-4 mb-6">
                  <div className="w-full h-80 sm:h-80 overflow-hidden rounded-xl bg-gray-100 dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-800/50 shadow-sm">
                    <img
                      src={project.image}
                      className="h-full w-full object-cover object-top transition-all duration-500 ease-out group-hover/card:scale-[1.03]"
                      alt={`${project.name} thumbnail`}
                    />
                  </div>
                </CardItem>
              </div>    

              {/* FIXED ALIGNMENT FOOTER CONTAINER - 'mt-auto' now anchors beautifully to the CardBody floor */}
              <div className="flex flex-row items-center justify-between mt-auto pt-4 w-full gap-4 border-t border-gray-100 dark:border-zinc-900">
                
                {/* Left Side: Skills Mapping Block */}
               

                {/* Right Side: Details and Live Actions Block */}
                <CardItem 
                  translateZ={20} 
                  className="flex flex-row items-center gap-2 justify-end shrink-0"
                >
                  <Link href={`/projects/${project.slug}`}>
                    <span className="rounded-md bg-gray-800 dark:bg-zinc-800 px-3 py-1 text-[10px] font-bold text-white dark:text-gray-300 sm:text-xs hover:bg-gray-500 dark:hover:bg-zinc-700 transition-colors block">
                      Details
                    </span>
                  </Link>

                  {project.github && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="rounded-md bg-gray-200 dark:bg-zinc-800 px-2 py-1 text-[10px] font-medium text-gray-700 dark:text-gray-300 sm:text-xs flex items-center justify-center cursor-pointer">
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <svg className="h-[15px] w-[15px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                          </Link>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent><p>Source Code</p></TooltipContent>
                    </Tooltip>
                  )}

                  {project.link && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="rounded-md bg-gray-200 dark:bg-zinc-800 px-2 py-1 text-[10px] font-medium text-gray-700 dark:text-gray-300 sm:text-xs flex items-center justify-center cursor-pointer">
                          <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            <Globe size={15}/>
                          </Link>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent><p>Live Demo</p></TooltipContent>
                    </Tooltip>
                  )}
                </CardItem>

              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}