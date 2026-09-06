import React from "react";
import { Badge } from "./badge";
import { ChartOutline, ClockOutline, GridIcon, PlayFilled, ExternalLink, DocumentOutline } from "./icons";

export interface CourseCardProps {
  title?: string;
  description?: string;
  level?: string;
  duration?: string;
  modulesCount?: string;
  logoLetter?: string;
  onClick?: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title = "Next.js for Production",
  description = "Build scalable, high-performance web applications with Next.js.",
  level = "Intermediate",
  duration = "18h 24m",
  modulesCount = "12 modules",
  logoLetter = "N",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-sm hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 flex flex-col justify-between cursor-pointer group"
    >
      <div>
        <div className="w-10 h-10 rounded-[10px] bg-[#0F172A] text-white font-bold text-lg flex items-center justify-center mb-4 shadow-sm">
          {logoLetter}
        </div>
        <h3 className="text-[18px] font-semibold text-[#0F172A] group-hover:text-[#F97316] transition-colors leading-snug mb-2">
          {title}
        </h3>
        <p className="text-[14px] text-[#64748B] leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-4 text-[12px] font-medium text-[#64748B] pt-4 border-t border-[#F1F5F9]">
        <div className="flex items-center gap-1.5">
          <ChartOutline size={16} className="text-[#64748B]" />
          <span>{level}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ClockOutline size={16} className="text-[#64748B]" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <GridIcon size={16} className="text-[#64748B]" />
          <span>{modulesCount}</span>
        </div>
      </div>
    </div>
  );
};

export interface VideoLessonCardProps {
  title?: string;
  description?: string;
  lessonMeta?: string;
  timestamp?: string;
  onWatch?: () => void;
}

export const VideoLessonCard: React.FC<VideoLessonCardProps> = ({
  title = "Data Fetching in Server Components",
  description = "Learn how to fetch data on the server using async/await and Next.js best practices.",
  lessonMeta = "Lesson 5.1",
  timestamp = "12:45",
  onWatch,
}) => {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-sm hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="mb-3">
          <Badge variant="video" />
        </div>
        <h3 className="text-[18px] font-semibold text-[#0F172A] leading-snug mb-2">
          {title}
        </h3>
        <p className="text-[14px] text-[#64748B] leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between text-[13px] pt-4 border-t border-[#F1F5F9]">
        <span className="text-[#64748B] font-medium">
          {lessonMeta} · {timestamp}
        </span>
        <button
          onClick={onWatch}
          className="inline-flex items-center gap-1.5 font-semibold text-[#F97316] hover:text-[#EA580C] transition-colors cursor-pointer"
        >
          <PlayFilled size={16} />
          <span>Watch from {timestamp}</span>
        </button>
      </div>
    </div>
  );
};

export interface TextLessonCardProps {
  title?: string;
  description?: string;
  moduleMeta?: string;
  onView?: () => void;
}

export const TextLessonCard: React.FC<TextLessonCardProps> = ({
  title = "Data Fetching & Caching",
  description = "Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance.",
  moduleMeta = "Module 5",
  onView,
}) => {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-sm hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="mb-3">
          <Badge variant="lesson" />
        </div>
        <h3 className="text-[18px] font-semibold text-[#0F172A] leading-snug mb-2">
          {title}
        </h3>
        <p className="text-[14px] text-[#64748B] leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between text-[13px] pt-4 border-t border-[#F1F5F9]">
        <span className="text-[#64748B] font-medium">{moduleMeta}</span>
        <button
          onClick={onView}
          className="inline-flex items-center gap-1.5 font-semibold text-[#F97316] hover:text-[#EA580C] transition-colors cursor-pointer"
        >
          <span>View lesson</span>
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
};

export interface ResourceCardProps {
  title?: string;
  description?: string;
  fileMeta?: string;
  onDownload?: () => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title = "Caching and Revalidation Guide",
  description = "Deep dive into Next.js caching strategies.",
  fileMeta = "PDF · 1.2 MB",
  onDownload,
}) => {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-sm hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="w-10 h-10 rounded-[10px] bg-[#F1F5F9] text-[#334155] flex items-center justify-center mb-4">
          <DocumentOutline size={20} />
        </div>
        <h3 className="text-[18px] font-semibold text-[#0F172A] leading-snug mb-2">
          {title}
        </h3>
        <p className="text-[14px] text-[#64748B] leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between text-[13px] pt-4 border-t border-[#F1F5F9]">
        <span className="text-[#64748B] font-medium">{fileMeta}</span>
        <button
          onClick={onDownload}
          className="text-[#F97316] hover:text-[#EA580C] transition-colors cursor-pointer"
        >
          <ExternalLink size={18} />
        </button>
      </div>
    </div>
  );
};
