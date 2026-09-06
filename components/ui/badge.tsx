import React from "react";

export interface BadgeProps {
  variant?: "video" | "lesson" | "popular";
  children?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "video",
  children,
  className = "",
}) => {
  const variantStyles = {
    video: "bg-[#FFEEE5] text-[#F97316]",
    lesson: "bg-[#EFF6FF] text-[#2563EB]",
    popular: "bg-[#FFEEE5] text-[#C2410C]",
  };

  const defaultText = {
    video: "VIDEO",
    lesson: "LESSON",
    popular: "POPULAR",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-[4px] text-[11px] font-bold tracking-wider uppercase ${variantStyles[variant]} ${className}`}
    >
      {children || defaultText[variant]}
    </span>
  );
};
