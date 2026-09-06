import React from "react";

export interface ProgressBarProps {
  progress: number; // 0 to 100
  showLabel?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  showLabel = true,
  className = "",
}) => {
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <div className={`flex items-center gap-4 w-full ${className}`}>
      <div className="flex-1 h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#F97316] rounded-full transition-all duration-300 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-[14px] font-medium text-[#334155] whitespace-nowrap shrink-0">
          <strong className="font-semibold text-[#0F172A]">{clamped}%</strong> complete
        </span>
      )}
    </div>
  );
};
