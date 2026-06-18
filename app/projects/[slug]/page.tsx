import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Globe, ArrowLeft, Layers } from "lucide-react";
import InteractiveImageBentoGallery from "@/components/bento-gallery"

// 1. Import the array directly from your file path
import { projectinfo } from "@/data/projectinfo"; 

// 2. Updated data matcher to read from the imported array
async function getProjectBySlug(slug: string) {
  return projectinfo.find((p) => p.slug === slug) || null;
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params Promise object first!
  const resolvedParams = await params; 
  
  // Now pass the resolved string string safely
  const project = await getProjectBySlug(resolvedParams.slug);

  
  if (!project) {
    notFound(); 
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-zinc-100 font-sans">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
        
        {/* Navigation Breadcrumb */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Info Header Area */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-gray-100 dark:border-zinc-800">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              {project.largerdescription}
            </p>
          </div>
          
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 dark:bg-zinc-800 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-90 transition-opacity shrink-0"
          >
            <Globe size={16} />
            Visit Live Site
          </a>
        </div>

        {/* Tech Stack Breakdown Section */}
        <div className="py-6 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400 uppercase tracking-wider mr-2">
            <Layers size={14} />
            Stack:
          </div>
          {project.skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-lg bg-gray-100 dark:bg-zinc-900 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-zinc-300 border border-gray-200/50 dark:border-zinc-800"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Bento Box Image Grid */}
        <InteractiveImageBentoGallery project={project} />

      </div>
    </div>
  );
}