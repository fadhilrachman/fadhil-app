"use client";
import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface Types {
  children: React.ReactNode;
  className?: string;
  withButtonBack?: boolean;
}
const Tittle = ({ withButtonBack, children, className }: Types) => {
  const router = useRouter();
  return (
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
  );
};

export default Tittle;
