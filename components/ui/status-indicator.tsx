import React from "react";
import { CheckCircleIcon, LockIcon } from "./icons";

export interface StatusIndicatorProps {
  status: "in_progress" | "completed" | "now_playing" | "locked";
  label?: string;
  className?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  label,
  className = "",
}) => {
  const renderIconAndDefaultLabel = () => {
    switch (status) {
      case "in_progress":
        return {
          icon: (
            <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#F97316]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="9" strokeDasharray="56" strokeDashoffset="18" />
              </svg>
            </div>
          ),
          text: label || "In Progress",
        };
      case "completed":
        return {
          icon: <CheckCircleIcon size={20} className="text-[#16A34A] shrink-0" />,
          text: label || "Completed",
        };
      case "now_playing":
        return {
          icon: (
            <div className="w-5 h-5 rounded-full bg-[#F97316] flex items-center justify-center shrink-0">
              <svg className="w-2.5 h-2.5 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          ),
          text: label || "Now Playing",
        };
      case "locked":
        return {
          icon: <LockIcon size={18} className="text-[#64748B] shrink-0" />,
          text: label || "Locked",
        };
    }
  };

  const item = renderIconAndDefaultLabel();

  return (
    <div className={`inline-flex items-center gap-2 text-[14px] font-medium text-[#334155] ${className}`}>
      {item.icon}
      <span>{item.text}</span>
    </div>
  );
};
