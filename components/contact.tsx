"use client";

import { Gmail, Upwork } from "developer-icons";
import React, { useState } from "react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";



export default function ContactSection() {

  

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 sm:px-6 font-sans">
      <div className="rounded-2xl border border-gray-200 bg-gray-100 p-8 text-center shadow-sm dark:border-gray-800 dark:bg-[#0d1117] sm:p-12">
        
        {/* Section Header */}
        
        <h2 className="mt-2 text-start text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Let's Connect
        </h2>
        <p className=" mt-4 max-w-md text-sm text-gray-500 dark:text-gray-400 sm:text-base text-start">
          I am currently available for full-time roles, contracts, and freelance consulting projects. Feel free to reach out via email or find me on Upwork.
        </p>

        {/* Interaction Grid / Row */}
        <div className="mt-10 flex flex-col items-center  gap-4 sm:flex-row">
          
          {/* Email Button Options Group */}
          <div className="flex items-center overflow-hidden rounded-xl border border-gray-200  dark:border-gray-800 dark:bg-zinc-900/50 w-full sm:w-auto">
            <a
              className="flex items-center justify-start gap-2 px-5 py-3 text-sm font-semibold text-gray-700 transition-all bg-white hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-zinc-800/80 grow sm:grow-0"
            >
              <Gmail size={25} />
              <span>hameessheikh10@gmail.com</span>
            </a>
            
           
          </div>

          {/* Official Upwork Button Anchor */}
          <a
            href="https://www.upwork.com/freelancers/~01921953411b7f0b3e" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start gap-2 w-full sm:w-auto rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-xs transition-all hover:bg-gray-50 dark:border-gray-800 dark:bg-zinc-900 dark:text-gray-300 dark:hover:bg-zinc-800/80"
          >
            {/* Official Upwork Logo Icon Glyph */}
            <Upwork size={25}/>
            <span>Hire Me on Upwork</span>
          </a>

        </div>

      </div>
    </div>
  );
}