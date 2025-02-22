import { cn } from "@/lib/utils"; // Optional utility function for class merging
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary"; // Add more as needed
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative text-white bg-[#afe6d8] bg-gradient-to-r from-[#afe6d8] to-[#f93a97] rounded-3xl tracking-wide transition-all duration-300 ease-in-out";

  const variants = {
    primary:
      "hover:shadow-md hover:shadow-[#fdc4e0] hover:before:absolute hover:before:inset-0 hover:before:-z-10 hover:before:bg-[#fdc4e0] hover:before:blur-md",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
