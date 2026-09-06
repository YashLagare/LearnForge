"use client";

import React, { useState } from "react";
import {
  VertexLogo,
  Breadcrumbs,
  Pagination,
} from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Input, Select } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { ProgressBar } from "@/components/ui/progress-bar";
import {
  CourseCard,
  VideoLessonCard,
  TextLessonCard,
  ResourceCard,
} from "@/components/ui/cards";
import {
  BellOutline,
  BellFilled,
  SearchOutline,
  SearchFilled,
  PlayOutline,
  PlayFilled,
  DocumentOutline,
  DocumentFilled,
  BookmarkOutline,
  BookmarkFilled,
  ChartOutline,
  ChartFilled,
  ClockOutline,
  ClockFilled,
  UserOutline,
  UserFilled,
  ChevronRight,
  ExternalLink,
  EyeIcon,
  GridIcon,
  TargetIcon,
  PersonIcon,
} from "@/components/ui/icons";

export default function VertexDesignSystemPage() {
  const [activeNav, setActiveNav] = useState("Courses");

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#0F172A] p-6 md:p-12 font-sans selection:bg-[#FED7AA] selection:text-[#0F172A]">
      <div className="max-w-[1440px] mx-auto space-y-12">

        {/* Header Hero Section */}
        <header className="bg-white rounded-[24px] p-8 md:p-12 border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <VertexLogo size={36} />
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#0F172A] tracking-tight pt-2">
              Design System
            </h1>
            <p className="text-lg text-[#64748B] leading-relaxed">
              A unified design language for Vertex learning platform. Clean, modern and focused on clarity, consistency and intuitive learning experiences.
            </p>
          </div>
          <div className="text-xs font-semibold tracking-wider text-[#64748B] uppercase bg-[#F1F5F9] px-3.5 py-1.5 rounded-full border border-[#CBD5E1] self-start md:self-auto">
            VERSION 1.0 &bull; MAY 2025
          </div>
        </header>

        {/* 01 COLORS */}
        <section className="bg-white rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest bg-[#FFEEE5] px-2.5 py-1 rounded-[6px]">
              01
            </span>
            <h2 className="text-xl font-semibold text-[#0F172A]">COLORS</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-[#64748B] mb-3">Primary</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  { name: "Primary 500", hex: "#F97316", bg: "bg-[#F97316]" },
                  { name: "Primary 400", hex: "#FB923C", bg: "bg-[#FB923C]" },
                  { name: "Primary 300", hex: "#FDBA74", bg: "bg-[#FDBA74]" },
                  { name: "Primary 200", hex: "#FED7AA", bg: "bg-[#FED7AA]" },
                  { name: "Primary 100", hex: "#FFEEE5", bg: "bg-[#FFEEE5]" },
                ].map((color) => (
                  <div key={color.name} className="space-y-2">
                    <div className={`h-20 rounded-[12px] ${color.bg} shadow-inner border border-black/5`} />
                    <div>
                      <div className="text-xs font-semibold text-[#0F172A]">{color.name}</div>
                      <div className="text-[11px] font-mono text-[#64748B]">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-[#64748B] mb-3">Neutral</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
                {[
                  { name: "Neutral 900", hex: "#0F172A", bg: "bg-[#0F172A]" },
                  { name: "Neutral 700", hex: "#334155", bg: "bg-[#334155]" },
                  { name: "Neutral 500", hex: "#64748B", bg: "bg-[#64748B]" },
                  { name: "Neutral 300", hex: "#CBD5E1", bg: "bg-[#CBD5E1]" },
                  { name: "Neutral 200", hex: "#E2E8F0", bg: "bg-[#E2E8F0]" },
                  { name: "Neutral 100", hex: "#F1F5F9", bg: "bg-[#F1F5F9]" },
                  { name: "Neutral 50", hex: "#FAFAFC", bg: "bg-[#FAFAFC]" },
                  { name: "White", hex: "#FFFFFF", bg: "bg-white" },
                ].map((color) => (
                  <div key={color.name} className="space-y-2">
                    <div className={`h-16 rounded-[12px] ${color.bg} border border-[#CBD5E1]/50 shadow-inner`} />
                    <div>
                      <div className="text-xs font-semibold text-[#0F172A] truncate">{color.name}</div>
                      <div className="text-[11px] font-mono text-[#64748B]">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 02 TYPOGRAPHY & 03 TYPE SCALE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section className="lg:col-span-4 bg-white rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest bg-[#FFEEE5] px-2.5 py-1 rounded-[6px]">
                  02
                </span>
                <h2 className="text-xl font-semibold text-[#0F172A]">TYPOGRAPHY</h2>
              </div>

              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-serif font-bold text-[#0F172A]">Ag</span>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-[#0F172A]">Playfair Display</h3>
                    <p className="text-xs text-[#64748B]">Elegant &bull; Readable &bull; Timeless</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-[#F1F5F9]">
                  <span className="text-5xl font-sans font-bold text-[#0F172A]">Ag</span>
                  <div>
                    <h3 className="text-lg font-bold font-sans text-[#0F172A]">Inter</h3>
                    <p className="text-xs text-[#64748B]">Clean &bull; Modern &bull; Highly legible</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="lg:col-span-8 bg-white rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest bg-[#FFEEE5] px-2.5 py-1 rounded-[6px]">
                03
              </span>
              <h2 className="text-xl font-semibold text-[#0F172A]">TYPE SCALE</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#E2E8F0] text-[#64748B] font-semibold">
                    <th className="py-2.5 px-3">Style</th>
                    <th className="py-2.5 px-3">Font</th>
                    <th className="py-2.5 px-3">Size / Line Height</th>
                    <th className="py-2.5 px-3">Weight</th>
                    <th className="py-2.5 px-3">Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9] text-[#0F172A]">
                  {[
                    { style: "Display 1", font: "Playfair Display", size: "48 / 56", weight: "Bold", use: "Page titles", class: "font-serif text-2xl font-bold" },
                    { style: "Display 2", font: "Playfair Display", size: "36 / 44", weight: "Bold", use: "Section titles", class: "font-serif text-xl font-bold" },
                    { style: "Heading 1", font: "Inter", size: "28 / 36", weight: "Semi Bold", class: "font-semibold text-lg" },
                    { style: "Heading 2", font: "Inter", size: "22 / 30", weight: "Semi Bold", class: "font-semibold text-base" },
                    { style: "Heading 3", font: "Inter", size: "18 / 26", weight: "Medium", class: "font-medium text-sm" },
                    { style: "Body Large", font: "Inter", size: "16 / 24", weight: "Regular", class: "font-normal text-xs" },
                    { style: "Body", font: "Inter", size: "14 / 20", weight: "Regular", class: "font-normal text-xs text-[#64748B]" },
                    { style: "Small", font: "Inter", size: "12 / 16", weight: "Regular", class: "font-normal text-[11px] text-[#64748B]" },
                  ].map((row) => (
                    <tr key={row.style} className="hover:bg-[#FAFAFC]">
                      <td className={`py-3 px-3 ${row.class}`}>{row.style}</td>
                      <td className="py-3 px-3 text-[#64748B]">{row.font}</td>
                      <td className="py-3 px-3 font-mono">{row.size}</td>
                      <td className="py-3 px-3">{row.weight}</td>
                      <td className="py-3 px-3 text-[#64748B]">{row.use || "General text"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* 04 SPACING & 05 RADIUS & SHADOWS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section className="lg:col-span-5 bg-white rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest bg-[#FFEEE5] px-2.5 py-1 rounded-[6px]">
                04
              </span>
              <h2 className="text-xl font-semibold text-[#0F172A]">SPACING SYSTEM</h2>
            </div>
            <p className="text-xs text-[#64748B]">Base unit: 4px</p>

            <div className="flex flex-wrap items-end gap-3 pt-2">
              {[
                { val: "4", rem: "0.25rem", h: "h-4" },
                { val: "8", rem: "0.5rem", h: "h-6" },
                { val: "12", rem: "0.75rem", h: "h-8" },
                { val: "16", rem: "1rem", h: "h-10" },
                { val: "24", rem: "1.5rem", h: "h-12" },
                { val: "32", rem: "2rem", h: "h-14" },
                { val: "40", rem: "2.5rem", h: "h-16" },
                { val: "48", rem: "3rem", h: "h-20" },
                { val: "64", rem: "4rem", h: "h-24" },
              ].map((item) => (
                <div key={item.val} className="flex flex-col items-center gap-1.5">
                  <div className={`w-8 ${item.h} bg-[#FFEEE5] border border-[#FDBA74] rounded-[4px]`} />
                  <span className="text-xs font-bold text-[#0F172A]">{item.val}</span>
                  <span className="text-[10px] text-[#64748B]">({item.rem})</span>
                </div>
              ))}
            </div>
          </section>

          <section className="lg:col-span-7 bg-white rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest bg-[#FFEEE5] px-2.5 py-1 rounded-[6px]">
                05
              </span>
              <h2 className="text-xl font-semibold text-[#0F172A]">RADIUS & SHADOWS</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold text-[#64748B] mb-3">Radius</h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {[
                    { label: "4px", name: "(xs)", radius: "rounded-[4px]" },
                    { label: "8px", name: "(sm)", radius: "rounded-[8px]" },
                    { label: "12px", name: "(md)", radius: "rounded-[12px]" },
                    { label: "16px", name: "(lg)", radius: "rounded-[16px]" },
                    { label: "24px", name: "(xl)", radius: "rounded-[24px]" },
                    { label: "Full", name: "(circle)", radius: "rounded-full" },
                  ].map((r) => (
                    <div key={r.label} className="flex flex-col items-center gap-1.5">
                      <div className={`w-14 h-14 bg-[#FAFAFC] border border-[#CBD5E1] ${r.radius}`} />
                      <span className="text-xs font-medium text-[#0F172A]">{r.label}</span>
                      <span className="text-[10px] text-[#64748B]">{r.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-[#64748B] mb-3">Shadows</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { name: "Sm", spec: "0 1px 2px 0 rgba(15,23,42,0.05)", shadow: "shadow-sm" },
                    { name: "Md", spec: "0 4px 12px -2px rgba(15,23,42,0.08)", shadow: "shadow-md" },
                    { name: "Lg", spec: "0 12px 24px -4px rgba(15,23,42,0.10)", shadow: "shadow-lg" },
                    { name: "Xl", spec: "0 20px 40px -8px rgba(15,23,42,0.12)", shadow: "shadow-xl" },
                  ].map((s) => (
                    <div key={s.name} className={`bg-white border border-[#E2E8F0] p-4 rounded-[12px] ${s.shadow} space-y-1`}>
                      <div className="text-sm font-semibold text-[#0F172A]">{s.name}</div>
                      <div className="text-[10px] text-[#64748B] font-mono leading-tight">{s.spec}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 06 ICONS */}
        <section className="bg-white rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest bg-[#FFEEE5] px-2.5 py-1 rounded-[6px]">
              06
            </span>
            <h2 className="text-xl font-semibold text-[#0F172A]">ICONS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Outline Style</h3>
              <div className="flex flex-wrap gap-4 text-[#334155] bg-[#FAFAFC] p-4 rounded-[12px] border border-[#E2E8F0]">
                <BellOutline size={24} />
                <SearchOutline size={24} />
                <PlayOutline size={24} />
                <DocumentOutline size={24} />
                <BookmarkOutline size={24} />
                <ChartOutline size={24} />
                <ClockOutline size={24} />
                <UserOutline size={24} />
                <ChevronRight size={24} />
              </div>

              <h3 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider pt-2">Filled Style</h3>
              <div className="flex flex-wrap gap-4 text-[#334155] bg-[#FAFAFC] p-4 rounded-[12px] border border-[#E2E8F0]">
                <BellFilled size={24} />
                <SearchFilled size={24} />
                <PlayFilled size={24} />
                <DocumentFilled size={24} />
                <BookmarkFilled size={24} />
                <ChartFilled size={24} />
                <ClockFilled size={24} />
                <UserFilled size={24} />
                <ChevronRight size={24} />
              </div>
            </div>

            <div className="bg-[#FAFAFC] p-6 rounded-[16px] border border-[#E2E8F0] space-y-3">
              <h3 className="text-sm font-semibold text-[#0F172A]">Icon Specs</h3>
              <ul className="text-xs text-[#64748B] space-y-2 list-disc list-inside">
                <li>24x24px grid standard</li>
                <li>2px stroke width (outline variants)</li>
                <li>Rounded line caps and corners</li>
                <li>Consistent optical balance and spacing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 07 BUTTONS & 08 INPUTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section className="lg:col-span-7 bg-white rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest bg-[#FFEEE5] px-2.5 py-1 rounded-[6px]">
                07
              </span>
              <h2 className="text-xl font-semibold text-[#0F172A]">BUTTONS</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#E2E8F0] text-[#64748B] font-semibold">
                    <th className="py-2.5 px-3">State</th>
                    <th className="py-2.5 px-3">Primary</th>
                    <th className="py-2.5 px-3">Secondary</th>
                    <th className="py-2.5 px-3">Tertiary</th>
                    <th className="py-2.5 px-3">Text</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9]">
                  <tr>
                    <td className="py-3 px-3 font-medium text-[#64748B]">Default</td>
                    <td className="py-3 px-3">
                      <Button variant="primary">Get Started</Button>
                    </td>
                    <td className="py-3 px-3">
                      <Button variant="secondary">Explore Courses</Button>
                    </td>
                    <td className="py-3 px-3">
                      <Button variant="tertiary" iconRight={<ExternalLink size={16} />}>
                        View Lesson
                      </Button>
                    </td>
                    <td className="py-3 px-3">
                      <Button variant="text" iconRight={<PlayFilled size={16} />}>
                        Watch Video
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-medium text-[#64748B]">Hover</td>
                    <td className="py-3 px-3">
                      <Button variant="primary" className="bg-[#EA580C]">Get Started</Button>
                    </td>
                    <td className="py-3 px-3">
                      <Button variant="secondary" className="border-[#F97316] text-[#F97316]">Explore Courses</Button>
                    </td>
                    <td className="py-3 px-3">
                      <Button variant="tertiary" className="border-[#CBD5E1] bg-[#FAFAFC]" iconRight={<ExternalLink size={16} />}>
                        View Lesson
                      </Button>
                    </td>
                    <td className="py-3 px-3">
                      <Button variant="text" className="text-[#EA580C]" iconRight={<PlayFilled size={16} />}>
                        Watch Video
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-medium text-[#64748B]">Disabled</td>
                    <td className="py-3 px-3">
                      <Button variant="primary" disabled>Get Started</Button>
                    </td>
                    <td className="py-3 px-3">
                      <Button variant="secondary" disabled>Explore Courses</Button>
                    </td>
                    <td className="py-3 px-3">
                      <Button variant="tertiary" disabled iconRight={<ExternalLink size={16} />}>
                        View Lesson
                      </Button>
                    </td>
                    <td className="py-3 px-3">
                      <Button variant="text" disabled iconRight={<PlayFilled size={16} />}>
                        Watch Video
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#FAFAFC] p-4 rounded-[12px] border border-[#E2E8F0] text-xs text-[#64748B]">
              <strong className="text-[#0F172A]">Button Specs:</strong> Height: 44px (default) &bull; Padding: 0 16px (lg), 0 12px (md) &bull; Radius: 12px &bull; Font: Inter Medium (14–16px)
            </div>
          </section>

          <section className="lg:col-span-5 bg-white rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest bg-[#FFEEE5] px-2.5 py-1 rounded-[6px]">
                08
              </span>
              <h2 className="text-xl font-semibold text-[#0F172A]">INPUTS</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-[#64748B] block mb-1.5">Search / Text Input</label>
                <Input placeholder="Search anything..." />
              </div>

              <div>
                <label className="text-xs font-medium text-[#64748B] block mb-1.5">Select Input</label>
                <Select />
              </div>

              <div className="bg-[#FAFAFC] p-4 rounded-[12px] border border-[#E2E8F0] text-xs text-[#64748B] space-y-1">
                <strong className="text-[#0F172A] block">Field Specs:</strong>
                <p>&bull; Height: 44px | Radius: 12px</p>
                <p>&bull; Border: 1px solid #E2E8F0 | Focus: #FB923C</p>
              </div>
            </div>
          </section>
        </div>

        {/* 09 BADGES, 10 STATUS, 11 PROGRESS BAR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="bg-white rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest bg-[#FFEEE5] px-2.5 py-1 rounded-[6px]">
                09
              </span>
              <h2 className="text-lg font-semibold text-[#0F172A]">BADGES / TAGS</h2>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="space-y-1">
                <div className="text-[10px] text-[#64748B]">Video</div>
                <Badge variant="video" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] text-[#64748B]">Lesson</div>
                <Badge variant="lesson" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] text-[#64748B]">Popular</div>
                <Badge variant="popular" />
              </div>
            </div>
          </section>

          <section className="bg-white rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest bg-[#FFEEE5] px-2.5 py-1 rounded-[6px]">
                10
              </span>
              <h2 className="text-lg font-semibold text-[#0F172A]">STATUS / INDICATORS</h2>
            </div>
            <div className="flex flex-col gap-3">
              <StatusIndicator status="in_progress" />
              <StatusIndicator status="completed" />
              <StatusIndicator status="now_playing" />
              <StatusIndicator status="locked" />
            </div>
          </section>

          <section className="bg-white rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest bg-[#FFEEE5] px-2.5 py-1 rounded-[6px]">
                11
              </span>
              <h2 className="text-lg font-semibold text-[#0F172A]">PROGRESS BAR</h2>
            </div>
            <div className="pt-2">
              <ProgressBar progress={35} />
            </div>
          </section>
        </div>

        {/* 12 CARDS */}
        <section className="bg-white rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest bg-[#FFEEE5] px-2.5 py-1 rounded-[6px]">
              12
            </span>
            <h2 className="text-xl font-semibold text-[#0F172A]">CARDS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-xs font-semibold text-[#64748B] mb-2">Course Card</div>
              <CourseCard />
            </div>

            <div>
              <div className="text-xs font-semibold text-[#64748B] mb-2">Lesson Card (Video)</div>
              <VideoLessonCard />
            </div>

            <div>
              <div className="text-xs font-semibold text-[#64748B] mb-2">Lesson Card (Lesson)</div>
              <TextLessonCard />
            </div>

            <div>
              <div className="text-xs font-semibold text-[#64748B] mb-2">Resource Card</div>
              <ResourceCard />
            </div>
          </div>
        </section>

        {/* 13 NAVIGATION */}
        <section className="bg-white rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest bg-[#FFEEE5] px-2.5 py-1 rounded-[6px]">
              13
            </span>
            <h2 className="text-xl font-semibold text-[#0F172A]">NAVIGATION</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Header Brand & Links */}
            <div className="md:col-span-5 bg-[#FAFAFC] p-4 rounded-[16px] border border-[#E2E8F0] flex items-center justify-between">
              <VertexLogo />
              <div className="flex items-center gap-6 text-sm font-medium">
                <button
                  onClick={() => setActiveNav("Courses")}
                  className={activeNav === "Courses" ? "text-[#F97316] font-semibold" : "text-[#64748B] hover:text-[#0F172A]"}
                >
                  Courses
                </button>
                <button
                  onClick={() => setActiveNav("My Learning")}
                  className={activeNav === "My Learning" ? "text-[#F97316] font-semibold" : "text-[#64748B] hover:text-[#0F172A]"}
                >
                  My Learning
                </button>
              </div>
            </div>

            {/* Breadcrumbs */}
            <div className="md:col-span-4 bg-[#FAFAFC] p-4 rounded-[16px] border border-[#E2E8F0]">
              <Breadcrumbs />
            </div>

            {/* Pagination */}
            <div className="md:col-span-3 bg-[#FAFAFC] p-4 rounded-[16px] border border-[#E2E8F0] flex justify-center">
              <Pagination currentPage={1} />
            </div>
          </div>
        </section>

        {/* 14 PRINCIPLES */}
        <section className="bg-white rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest bg-[#FFEEE5] px-2.5 py-1 rounded-[6px]">
              14
            </span>
            <h2 className="text-xl font-semibold text-[#0F172A]">PRINCIPLES</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <EyeIcon size={24} className="text-[#F97316]" />,
                title: "Clarity First",
                desc: "Every element should communicate clearly.",
              },
              {
                icon: <GridIcon size={24} className="text-[#F97316]" />,
                title: "Consistency",
                desc: "Use components and patterns consistently across the platform.",
              },
              {
                icon: <TargetIcon size={24} className="text-[#F97316]" />,
                title: "Focus & Calm",
                desc: "Remove noise and help learners focus on what matters.",
              },
              {
                icon: <PersonIcon size={24} className="text-[#F97316]" />,
                title: "Accessible",
                desc: "Design with accessibility and inclusivity in mind.",
              },
            ].map((p) => (
              <div key={p.title} className="bg-[#FAFAFC] p-6 rounded-[16px] border border-[#E2E8F0] space-y-3">
                <div className="w-12 h-12 rounded-[12px] bg-white border border-[#E2E8F0] flex items-center justify-center shadow-sm">
                  {p.icon}
                </div>
                <h3 className="text-base font-semibold text-[#0F172A]">{p.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
