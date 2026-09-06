import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "text";
  size?: "default" | "md";
  children: React.ReactNode;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "default",
  children,
  iconRight,
  iconLeft,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-150 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 disabled:cursor-not-allowed whitespace-nowrap";

  const sizeStyles = size === "default" 
    ? "h-[44px] px-4 text-[15px] gap-2" 
    : "h-[40px] px-3 text-[14px] gap-1.5";

  const variantStyles = {
    primary: "bg-[#F97316] text-white hover:bg-[#EA580C] active:bg-[#C2410C] disabled:bg-[#FFEEE5] disabled:text-[#FDBA74]",
    secondary: "bg-white border border-[#E2E8F0] text-[#334155] hover:border-[#F97316] hover:text-[#F97316] disabled:border-[#E2E8F0] disabled:text-[#CBD5E1]",
    tertiary: "bg-white border border-[#E2E8F0] text-[#0F172A] hover:border-[#CBD5E1] hover:bg-[#FAFAFC] disabled:border-[#E2E8F0] disabled:text-[#CBD5E1]",
    text: "bg-transparent text-[#F97316] hover:text-[#EA580C] p-0 h-auto disabled:text-[#FDBA74]",
  };

  return (
    <button
      className={`${baseStyles} ${variant === "text" ? "" : sizeStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {iconLeft && <span className="shrink-0 inline-flex items-center">{iconLeft}</span>}
      <span className="inline-flex items-center gap-2 shrink-0">{children}</span>
      {iconRight && <span className="shrink-0 inline-flex items-center">{iconRight}</span>}
    </button>
  );
};

