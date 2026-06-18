"use client"

import React from "react"

import { Dock, DockIcon } from "@/components/ui/dock"
import next from "next"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { ExpressJsDark, JavaScript, MongoDB, MySQL, NextJs, NodeJs, PostgreSQL, Python, ShadcnUI, TailwindCSS, TypeScript, VercelDark } from "developer-icons"




export type IconProps = React.HTMLAttributes<SVGElement>

export function DockDemo() {
  return (
<div className="relative overflow-x-scroll">    
    <h2 className="w-full max-w-5xl mx-auto text-left  px-4 sm:px-6 text-4xl font-bold tracking-tighter text-slate-900">
    <PointerHighlight
          rectangleClassName="bg-[#A5E9DD]  dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
          pointerClassName="text-black-500"
        >
          <span className="relative z-10">Technology Stack</span>
        </PointerHighlight>
  
      </h2>     




      
       <Dock direction="middle">
        
        <DockIcon>
                    <Tooltip>

          <TooltipTrigger>
          <Icons.typescript className="size-6 cursor-pointer" />
            </TooltipTrigger>

  <TooltipContent>
    <p>TypeScript</p>
  </TooltipContent>
</Tooltip>
        </DockIcon>
        <DockIcon>
 <Tooltip>

          <TooltipTrigger>
          <Icons.javascript className="size-6 cursor-pointer" />
            </TooltipTrigger>

  <TooltipContent>
    <p>JavaScript</p>
  </TooltipContent>
</Tooltip>      
  </DockIcon>


        <DockIcon>
 <Tooltip>

          <TooltipTrigger>
          <Icons.react className="size-8 cursor-pointer" />
            </TooltipTrigger>

  <TooltipContent>
    <p>React</p>
  </TooltipContent>
</Tooltip>       
 </DockIcon>
         <DockIcon>
 <Tooltip>

          <TooltipTrigger>
          <Icons.next className="size-6 cursor-pointer" />
            </TooltipTrigger>

  <TooltipContent>
    <p>Next.js</p>
  </TooltipContent>
</Tooltip>    
    </DockIcon>


        <DockIcon>
 <Tooltip>

          <TooltipTrigger>
          <Icons.tailwind className="size-6 cursor-pointer" />
            </TooltipTrigger>

  <TooltipContent>
    <p>Tailwind CSS</p>
  </TooltipContent>
</Tooltip>    
    </DockIcon>

        <DockIcon>
 <Tooltip>

          <TooltipTrigger>
          <Icons.nodeJS className="size-6 cursor-pointer" />
            </TooltipTrigger>

  <TooltipContent>
    <p>Node.js</p>
  </TooltipContent>
</Tooltip>    
    </DockIcon>
        <DockIcon>
 <Tooltip>

          <TooltipTrigger>
          <Icons.express className="size-6 cursor-pointer" />
            </TooltipTrigger>

  <TooltipContent>
    <p>Express.js</p>
  </TooltipContent>
</Tooltip>      
  </DockIcon>
        <DockIcon>
 <Tooltip>

          <TooltipTrigger>
          <Icons.mongoDB className="size-6 cursor-pointer" />
            </TooltipTrigger>

  <TooltipContent>
    <p>MongoDB</p>
  </TooltipContent>
</Tooltip>    
    </DockIcon>
        <DockIcon>
 <Tooltip>

          <TooltipTrigger>
          <Icons.mySQL className="size-6 cursor-pointer" />
            </TooltipTrigger>

  <TooltipContent>
    <p>MySQL</p>
  </TooltipContent>
</Tooltip>     

   </DockIcon>
        <DockIcon>
 <Tooltip>

          <TooltipTrigger>
          <Icons.python className="size-6 cursor-pointer" />
            </TooltipTrigger>

  <TooltipContent>
    <p>Python</p>
  </TooltipContent>
</Tooltip>   
     </DockIcon>
        <DockIcon>
 <Tooltip>

          <TooltipTrigger>
          <Icons.vercel className="size-6 cursor-pointer" />
            </TooltipTrigger>

  <TooltipContent>
    <p>Vercel</p>
  </TooltipContent>
</Tooltip>
        </DockIcon>


<DockIcon>
 <Tooltip>

          <TooltipTrigger>
          <Icons.postgreSQL className="size-6 cursor-pointer" />
            </TooltipTrigger>

  <TooltipContent>
    <p>PostgreSQL</p>
  </TooltipContent>
</Tooltip>
        </DockIcon>

<DockIcon>
 <Tooltip>
          <TooltipTrigger>
          <Icons.shadcn className="size-8 cursor-pointer" />
            </TooltipTrigger>
  <TooltipContent>
    <p>Shadcn UI</p>
  </TooltipContent>
</Tooltip>
        </DockIcon>


      </Dock>
    </div>
  )
}

const Icons = {

  postgreSQL: (props: IconProps) => (
    <PostgreSQL className="size-8" />
  ),

  mySQL: (props: IconProps) => (
    <MySQL className="size-8" />
  ),

  typescript: (props: IconProps) => (
<TypeScript className="size-8" />
  ),

  vercel : (props: IconProps) => (
<VercelDark className="size-8" />
  ),

  tailwind: (props: IconProps) => (
<TailwindCSS className="size-8" />
  ),

 next: (props: IconProps) => (
<NextJs className="size-8" />
),


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
  nodeJS: (props: IconProps) => (
  <NodeJs className="size-8" />
  ),
  express: (props: IconProps) => (
  <ExpressJsDark className="size-8" />
  ),
  mongoDB: (props: IconProps) => (
<MongoDB className="size-8" />
  ),
  python: (props: IconProps) => (
    <Python className="size-8" />
  ),

  javascript : (props: IconProps) => (
<JavaScript className="size-8" />
  ),

shadcn : (props: IconProps) => (
  <ShadcnUI className="size-8" />
)

}
