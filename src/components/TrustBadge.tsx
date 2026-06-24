import React from "react";
import { US } from "country-flag-icons/react/3x2";

export function TrustBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 pt-6 border-t border-gray-200">
      <div className="flex items-center gap-2">
        <US title="United States" className="w-5 h-auto rounded-sm shadow-sm" />
        <span className="text-xs font-semibold text-text-slate">VA Vouchers Welcome</span>
      </div>

      <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300"></div>

      <div className="flex items-center gap-2">
        <span className="text-lg" aria-hidden="true">🏥</span>
        <span className="text-xs font-semibold text-text-slate">Most PPOs Accepted</span>
      </div>
    </div>
  );
}
