"use client";
import Tittle from "@/components/shared/title";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, ChevronDown, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const examples = [
    {
      name: "Dashboard",
      href: "/dashboard",
      code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/mail",
    },
    {
      name: "Manage Keuangan",
      href: "/financial/expense",
      code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/dashboard",
    },

    {
      name: "Schedule",
      href: "/inventory",
      code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/tasks",
    },
    {
      name: "Todo List",
      href: "/schedule",
      code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/playground",
    },
  ];

  return (
    <div className="px-6 space-y-5">
      <div className=" pt-5 flex items-center border-b  justify-between">
        <div className="">
          <Tittle>Subtitle</Tittle>
          {/* {children} */}
          <div className="relative mt-3">
            {/* <ScrollArea className="max-w-[600px] lg:max-w-none"> */}
            <div className={cn(" flex items-center  ")}>
              {examples.map((example, index) => (
                <Link
                  href={example.href}
                  key={example.href}
                  className={cn(
                    "flex h-9  items-center justify-center hover:bg-neutral-200  transition-all duration-300 ease-in-out  px-4 text-center text-sm  hover:text-primary",
                    pathname == example.href
                      ? "border-b   border-base  "
                      : "text-muted-foreground"
                  )}
                >
                  {example.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className=" flex items-center space-x-8">
          {/* <Input
            placeholder="Search"
            className="h-[45px]"
            size={40}
            StartIcon={Search}
          /> */}
          <div className="relative">
            <Bell className="h-6" />
            <div className="text-white bg-red-500 text-xs w-4 h-4 absolute -top-2 -right-1 rounded-full flex items-center justify-center">
              1
            </div>
          </div>
          <div className="">
            {/* AVATAR AND SETTING & LOGOUT */}
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="flex items-center space-x-1 cursor-pointer"
              >
                <div>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-5" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="bottom" align="start">
                <DropdownMenuLabel>Setting</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Logout</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="text-[15px]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
