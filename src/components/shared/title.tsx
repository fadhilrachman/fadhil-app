"use client";
import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface Types {
  children: React.ReactNode;
  className?: string;
  withButtonBack?: boolean;
  subtitle?: string;
}
const Tittle = ({ withButtonBack, children, className, subtitle }: Types) => {
  const router = useRouter();
  return (
    <div className="w-full">
      <h3
        className={`${className} w-full  flex items-center text-2xl font-semibold`}
      >
        {withButtonBack && (
          <Button
            className="px-2 mr-3"
            onClick={() => {
              router.back();
            }}
          >
            <ChevronLeft className="h-4" />
          </Button>
        )}

        {children}
      </h3>
      <p className="text-sm text-neutral-500 font-medium">
        {subtitle}
        {/* */}
      </p>
    </div>
  );
};

export default Tittle;
