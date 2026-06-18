import Image from "next/image";

import { Home, Search, Settings } from "lucide-react"

import { Dock, DockIcon } from "@/components/ui/dock"
import { DockDemo } from "@/components/ui/dock-demo-2";
import Header from "@/components/Header";
import { CardContainer } from "@/components/ui/3d-card";
import ThreeDCardDemo from "@/components/3d-card-demo";
import WorkExperience from "@/components/Work_experience";
import DemoOne from "@/components/Work_experience";
import WorkExperienceDemo from "@/components/Work_experience";
import PointerHighlightDemo from "@/components/pointer-highlight-demo-2";
import ContactSection from "@/components/contact";
import {projectinfo} from "@/data/projectinfo";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function My_Home() {
  
  return (



    <div className="">
      



       <Header />
       <WorkExperienceDemo/>





<div className="w-full max-w-5xl mx-auto text-left px-4 sm:px-6 mb-10">
        {/* The Heading with your Highlight Component */}
        <h1 className="text-4xl font-extrabold tracking-tighter text-slate-900 dark:text-white sm:text-5xl">
          <PointerHighlight
            rectangleClassName="bg-[#A5E9DD] dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
            pointerClassName="text-black-500"
          >
            <span className="relative z-10">My Projects</span>
          </PointerHighlight>
        </h1>

        {/* The Aligned Description */}
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-500 dark:text-zinc-400 sm:text-lg">
          A curated collection of web applications, and digital solutions 
          built with modern web technologies and robust architectures.
        </p>
      </div>

<ThreeDCardDemo projects={projectinfo}/>
            <DockDemo />

            <ContactSection/>


    </div>
  );
}
