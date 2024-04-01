import * as React from "react";

import { cn } from "@/lib/utils";
import { LucideIcon, Search, StarIcon } from "lucide-react";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  StartIcon?: LucideIcon;
  EndIcon?: LucideIcon;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, StartIcon, EndIcon, ...props }, ref) => {
    // const StartIcon=StartIcon
    return (
      <div className="relative">
        {/* <div className="h-4 text-xs absolute left-1.5 top-1/2 transform -translate-y-1/2">
          {leftAddon}
        </div> */}
        {StartIcon && (
          <StartIcon className="h-4 absolute left-1.5 top-1/2 transform -translate-y-1/2" />
        )}
        <input
          type={type}
          className={cn(
            `flex ${
              StartIcon ? "pl-8" : "pl-3"
            } h-9 w-full border !border-gray-100 rounded-md  bg-white    py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300`,
            className
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <EndIcon className="h-4 absolute right-1.5 top-1/2 transform -translate-y-1/2" />
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
