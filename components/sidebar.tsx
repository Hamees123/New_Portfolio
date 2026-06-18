"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Home, Package, Settings, Users } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";


export default function Sidenavbar() {
  return (
    <div className="fixed left-4 top-1/2 z-50 -translate-y-1/2 font-sans text-gray-900 dark:text-white">
      <aside className="flex w-16 flex-col rounded-2xl border border-gray-200 bg-white/90 shadow-lg shadow-black/5 backdrop-blur dark:border-gray-800 dark:bg-black/80">
        <div className="flex flex-col items-center justify-center py-4">
          <nav className="flex flex-col items-center gap-4 px-2">
           
           
           
           


 <Tooltip>
             <TooltipTrigger asChild>
                <Button asChild variant="ghost" size="icon" className="h-10 w-10 shrink-0 cursor-pointer rounded-xl">
                  <Link href="/">
                    <Home className="h-5 w-5" />
                  </Link>
                </Button>
             </TooltipTrigger>
             <TooltipContent>
               <p className="cursor-pointer">Home </p>
             </TooltipContent>
           </Tooltip>

           

           
           
           
           <Tooltip>
                       <TooltipTrigger asChild>
                         <Button asChild variant="ghost" size="icon" className="h-10 w-10 shrink-0 cursor-pointer rounded-xl">
                           <Link href="/projects">
                             <Package className="h-5 w-5" />
                           </Link>
                         </Button>
                       </TooltipTrigger>
                       <TooltipContent>
                         <p className="cursor-pointer">Projects </p>
                       </TooltipContent>
                     </Tooltip>
           
            

           
           
           
            
            
          </nav>
        </div>
      </aside>
    </div>
  );
}