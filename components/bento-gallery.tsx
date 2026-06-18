"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { X, Maximize2 } from "lucide-react"
import { Project } from "@/data/projectinfo"

interface ProjectGalleryBentoProps {
  project: Project
  className?: string
}

// Lightbox Overlay Modal Component for Zooming
const ImageModal = ({ url, alt, onClose }: { url: string; alt: string; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 15 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 15 }}
        className="relative max-w-5xl max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={url} alt={alt} className="w-full h-auto max-h-[85vh] rounded-2xl object-contain" />
      </motion.div>
      <button
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full bg-zinc-900/80 p-2.5 text-white/80 transition-colors hover:text-white border border-zinc-800 cursor-pointer"
      >
        <X size={20} />
      </button>
    </motion.div>
  )
}

const ProjectGalleryBento: React.FC<ProjectGalleryBentoProps> = ({ project, className }) => {
  const [activeImg, setActiveImg] = useState<string | null>(null)

  // Standardize the source images: use the gallery array or fallback to primary card image
  const displayImages = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.image]

  // Your exact requested sample span configurations mapped to matching pixel-perfect heights
  const getBentoLayout = (index: number) => {
    switch (index) {
      case 0:
        return {
          span: "md:col-span-2 md:row-span-2",
          height: "h-[26rem]" // Large Main Showcase (Interlocks row height perfectly)
        }
      case 1:
        return {
          span: "md:col-span-1 md:row-span-1",
          height: "h-[12.5rem]" // Small Top-Right Square
        }
      case 2:
        return {
          span: "md:col-span-1 md:row-span-2",
          height: "h-[26rem]" // Tall Sidebar Canvas
        }
      case 3:
        return {
          span: "md:col-span-2 md:row-span-1",
          height: "h-[12.5rem]" // Wide Landscape Footer
        }
      default:
        return {
          span: "md:col-span-1 md:row-span-1",
          height: "h-[12.5rem]"
        }
    }
  }

  return (
    <section className={cn("w-full max-w-5xl mx-auto px-4 py-12 sm:px-6", className)}>
      {/* Structural Headers */}
      <div className="mb-8 text-left">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
          Project Images
        </h3>
        <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">
          A visual exploration and walkthrough of screen features built for {project.name}.
        </p>
      </div>

      {/* Grid Canvas System */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-max">
        {displayImages.slice(0, 4).map((imgUrl, index) => {
          const layout = getBentoLayout(index)
          
          return (
            <motion.div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-2xl border-1  border-gray-600 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] cursor-pointer",
                layout.span,
                layout.height
              )}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setActiveImg(imgUrl)}
            >
              {/* Image Engine */}
              <img
                src={imgUrl}
                alt={`${project.name} preview slot ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              {/* Dynamic Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Action Hover HUD Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="flex items-center gap-2 bg-white/95 dark:bg-zinc-900/95 border border-gray-200/50 dark:border-zinc-800 px-4 py-2.5 rounded-xl text-xs font-semibold shadow-md text-gray-900 dark:text-white backdrop-blur-xs">
                  <Maximize2 size={13} />
                  Expand Preview
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Lightbox Rendering System */}
      <AnimatePresence>
        {activeImg && (
          <ImageModal 
            url={activeImg} 
            alt="Expanded project screenshot view" 
            onClose={() => setActiveImg(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectGalleryBento