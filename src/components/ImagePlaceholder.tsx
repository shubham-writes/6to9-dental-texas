import React from "react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed border-gray-300 bg-gray-100 rounded-lg p-6 text-center ${className}`}
    >
      <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
