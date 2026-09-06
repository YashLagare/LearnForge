import React from "react";
import { SearchOutline, ChevronDown } from "./icons";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  shortcut?: string;
  showSearchIcon?: boolean;
}

export const Input: React.FC<InputProps> = ({
  shortcut = "⌘ K",
  showSearchIcon = true,
  className = "",
  placeholder = "Search anything...",
  ...props
}) => {
  return (
    <div className="relative flex items-center w-full">
      {showSearchIcon && (
        <SearchOutline size={18} className="absolute left-3.5 text-[#64748B] pointer-events-none" />
      )}
      <input
        type="text"
        placeholder={placeholder}
        className={`h-[44px] w-full bg-white border border-[#E2E8F0] rounded-[12px] text-[14px] text-[#0F172A] placeholder-[#64748B] transition-all duration-150 ${
          showSearchIcon ? "pl-10" : "pl-4"
        } ${shortcut ? "pr-12" : "pr-4"} focus:outline-none focus:border-[#FB923C] focus:ring-2 focus:ring-[#FB923C]/20 ${className}`}
        {...props}
      />
      {shortcut && (
        <kbd className="absolute right-3 inline-flex items-center gap-0.5 rounded-[6px] bg-[#F1F5F9] px-1.5 py-0.5 text-[11px] font-medium text-[#64748B] border border-[#CBD5E1]">
          {shortcut}
        </kbd>
      )}
    </div>
  );
};

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({
  options = [
    { value: "most_relevant", label: "Most Relevant" },
    { value: "newest", label: "Newest First" },
    { value: "popular", label: "Most Popular" },
  ],
  className = "",
  ...props
}) => {
  return (
    <div className="relative flex items-center w-full">
      <select
        className={`h-[44px] w-full appearance-none bg-white border border-[#E2E8F0] rounded-[12px] px-4 pr-10 text-[14px] font-medium text-[#0F172A] transition-all duration-150 focus:outline-none focus:border-[#FB923C] focus:ring-2 focus:ring-[#FB923C]/20 ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown size={18} className="absolute right-3.5 text-[#64748B] pointer-events-none" />
    </div>
  );
};
