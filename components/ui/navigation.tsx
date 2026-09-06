import React from "react";
import { ChevronRight } from "./icons";

export const VertexLogo: React.FC<{ size?: number; className?: string }> = ({
  size = 28,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div
        className="flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
          <path
            d="M5 6L16 26L27 6H20.5L16 15L11.5 6H5Z"
            fill="#F97316"
          />
        </svg>
      </div>
      <span className="text-[20px] font-bold text-[#0F172A] tracking-tight font-sans">
        Vertex
      </span>
    </div>
  );
};

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

export const Breadcrumbs: React.FC<{ items?: BreadcrumbItem[]; className?: string }> = ({
  items = [
    { label: "All Courses", href: "#" },
    { label: "Next.js for Production", href: "#" },
    { label: "Data Fetching & Caching", active: true },
  ],
  className = "",
}) => {
  return (
    <nav className={`flex items-center gap-2 text-[14px] text-[#64748B] ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight size={16} className="text-[#CBD5E1] shrink-0" />}
          {item.active ? (
            <span className="font-semibold text-[#0F172A]">{item.label}</span>
          ) : (
            <a
              href={item.href || "#"}
              className="hover:text-[#F97316] transition-colors"
            >
              {item.label}
            </a>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  onPageChange,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-1.5 text-[14px] font-medium text-[#334155] ${className}`}>
      <button
        onClick={() => onPageChange?.(currentPage - 1)}
        className="w-9 h-9 flex items-center justify-center rounded-[8px] border border-[#E2E8F0] bg-white hover:bg-[#F1F5F9] text-[#64748B] transition-colors disabled:opacity-50"
      >
        &lt;
      </button>
      
      <button
        className={`w-9 h-9 flex items-center justify-center rounded-[8px] ${
          currentPage === 1
            ? "bg-white border-2 border-[#F97316] text-[#F97316] font-bold shadow-sm"
            : "bg-white border border-[#E2E8F0] hover:bg-[#F1F5F9]"
        }`}
      >
        1
      </button>

      <button className="w-9 h-9 flex items-center justify-center rounded-[8px] bg-white border border-[#E2E8F0] hover:bg-[#F1F5F9]">
        2
      </button>

      <button className="w-9 h-9 flex items-center justify-center rounded-[8px] bg-white border border-[#E2E8F0] hover:bg-[#F1F5F9]">
        3
      </button>

      <span className="w-8 text-center text-[#64748B]">...</span>

      <button className="w-9 h-9 flex items-center justify-center rounded-[8px] bg-white border border-[#E2E8F0] hover:bg-[#F1F5F9]">
        8
      </button>

      <button
        onClick={() => onPageChange?.(currentPage + 1)}
        className="w-9 h-9 flex items-center justify-center rounded-[8px] border border-[#E2E8F0] bg-white hover:bg-[#F1F5F9] text-[#64748B] transition-colors"
      >
        &gt;
      </button>
    </div>
  );
};
