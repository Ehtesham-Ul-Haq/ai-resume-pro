 
"use client";

import { ReactNode } from "react";

type ActionButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function ActionButton({
  onClick,
  disabled,
  loading = false,
  loadingText = "Processing...",
  icon,
  children,
  className = "",
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-full md:w-1/2 py-2 rounded-xl transition cursor-pointer flex justify-center items-center gap-2 text-white ${className} ${
        disabled || loading ? "opacity-70 pointer-events-none" : ""
      }`}
    >
      {loading ? (
        <>
          <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
          {loadingText}
        </>
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </button>
  );
}
