"use client";

import React, { useState } from "react";
import { Header } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/ui/cards";
import { SearchOutline, StarOutline, DockerIcon } from "@/components/ui/icons";

export default function VertexHomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#0F172A] flex flex-col font-sans selection:bg-[#FED7AA] selection:text-[#0F172A] relative overflow-hidden">
      {/* Top Navigation Bar */}
      <Header activeTab="courses" />

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-32 flex flex-col items-center gap-16 md:gap-24 relative z-10">

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center max-w-3xl space-y-6 md:space-y-8">
          {/* Intelligent Learning Pill */}
          <div className="inline-flex items-center gap-2 bg-[#FFEEE5] border border-[#FED7AA] px-4 py-1.5 rounded-full shadow-xs">
            <span className="text-[11px] font-bold tracking-widest text-[#C2410C] uppercase">
              INTELLIGENT LEARNING
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-[#0F172A] tracking-tight leading-[1.12]">
            Search your learning <br className="hidden sm:inline" />
            in plain English.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl font-normal">
            Vertex understands what you want to learn and finds the exact lessons across all your courses.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <Button
              variant="primary"
              className="h-12 px-7 rounded-[12px] text-[15px] font-semibold bg-[#F97316] hover:bg-[#EA580C] shadow-sm transition-all duration-150 cursor-pointer"
              iconRight={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              }
            >
              Explore Courses
            </Button>
          </div>


          {/* Search Bar Input */}
          <div className="w-full max-w-2xl pt-4">
            <div className="relative flex items-center w-full bg-white border border-[#E2E8F0] rounded-[18px] shadow-sm hover:border-[#CBD5E1] focus-within:border-[#F97316] focus-within:ring-4 focus-within:ring-[#F97316]/10 transition-all duration-200">
              <SearchOutline size={20} className="absolute left-5 text-[#64748B] pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ask anything about your learning..."
                className="w-full h-14 pl-13 pr-14 bg-transparent text-[15px] text-[#0F172A] placeholder-[#64748B] focus:outline-none"
              />
              <div className="absolute right-4 pointer-events-none">
                <kbd className="inline-flex items-center rounded-[6px] bg-[#F1F5F9] px-2.5 py-1 text-[12px] font-medium text-[#64748B] border border-[#E2E8F0]">
                  ⌘ K
                </kbd>
              </div>
            </div>
          </div>
        </section>

        {/* All Courses Catalog Grid */}
        <section className="w-full space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#0F172A] tracking-tight">
              All Courses
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#F97316] hover:text-[#EA580C] transition-colors cursor-pointer group"
            >
              <span>View all courses</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CourseCard
              title="Next.js for Production"
              description="Build scalable, high-performance web applications with Next.js."
              level="Intermediate"
              duration="18h 24m"
              modulesCount="12 modules"
              logoLetter="N"
              logoBg="bg-[#0F172A]"
              logoColor="text-white"
            />

            <CourseCard
              title="Docker Essentials"
              description="Containerize applications and streamline your development workflow."
              level="Beginner"
              duration="10h 12m"
              modulesCount="8 modules"
              icon={<DockerIcon size={44} />}
            />

            <CourseCard
              title="TypeScript Deep Dive"
              description="Go beyond the basics and write safer, more expressive code."
              level="Intermediate"
              duration="14h 36m"
              modulesCount="10 modules"
              logoLetter="TS"
              logoBg="bg-[#2563EB]"
              logoColor="text-white"
            />
          </div>
        </section>

        {/* Bottom Banner Divider */}
        <section className="w-full flex items-center justify-center pt-8">
          <div className="flex items-center gap-3 text-xs md:text-sm text-[#64748B] bg-[#FAFAFC] px-6 py-2 rounded-full border border-[#E2E8F0]/80 shadow-2xs">
            <StarOutline size={18} className="text-[#F97316] shrink-0" />
            <span>New courses and lessons added every week.</span>
          </div>
        </section>
      </main>

      {/* Decorative Bottom Orange Gradient Bars */}
      <div className="w-full h-48 absolute bottom-0 left-0 right-0 pointer-events-none z-0 flex items-end justify-between opacity-35 blur-[2px] overflow-hidden">
        <div className="w-[12%] h-[60%] bg-gradient-to-t from-[#F97316] to-transparent rounded-t-2xl transform translate-y-4" />
        <div className="w-[15%] h-[85%] bg-gradient-to-t from-[#F97316] to-transparent rounded-t-2xl transform translate-y-2" />
        <div className="w-[18%] h-[100%] bg-gradient-to-t from-[#FB923C] to-transparent rounded-t-2xl" />
        <div className="w-[14%] h-[75%] bg-gradient-to-t from-[#F97316] to-transparent rounded-t-2xl transform translate-y-3" />
        <div className="w-[16%] h-[90%] bg-gradient-to-t from-[#FDBA74] to-transparent rounded-t-2xl" />
        <div className="w-[12%] h-[50%] bg-gradient-to-t from-[#F97316] to-transparent rounded-t-2xl transform translate-y-5" />
      </div>
    </div>
  );
}
