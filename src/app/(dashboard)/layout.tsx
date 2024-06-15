import DashboardLayout from "@/layouts/dashboard-layout";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    redirect("/sign-in");
  }
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default layout;
