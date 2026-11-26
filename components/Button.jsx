"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  icon = true,
  onClick,
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans tracking-widest text-xs uppercase transition-all duration-400 ease-out relative overflow-hidden group select-none";

  const variants = {
    primary:
      "bg-[#B89C76] text-white hover:bg-[#9C805D] shadow-sm hover:shadow-md",
    secondary:
      "bg-[#1A252C] text-[#FAF9F5] hover:bg-[#B89C76] hover:text-white shadow-sm hover:shadow-md",
    outline:
      "border border-[#1A252C] text-[#1A252C] hover:bg-[#1A252C] hover:text-[#FAF9F5]",
    outlineGold:
      "border border-[#B89C76] text-[#B89C76] hover:bg-[#B89C76] hover:text-white",
    outlineLight:
      "border border-[#E8E3DA] bg-white/90 backdrop-blur-sm text-[#1A252C] hover:bg-[#FAF9F5] hover:border-[#B89C76]",
    ghost:
      "text-[#1A252C] hover:text-[#B89C76] p-0 underline-offset-8 hover:underline",
  };

  const sizes = {
    sm: "px-5 py-2.5",
    md: "px-8 py-3.5",
    lg: "px-10 py-4 text-sm",
  };

  const content = (
    <>
      <span className="relative z-10 font-medium tracking-[0.2em]">{children}</span>
      {icon && (
        <ArrowUpRight className="ml-2.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {content}
    </button>
  );
}
