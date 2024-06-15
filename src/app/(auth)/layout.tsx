import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (token) {
    redirect("/dashboard");
  }
  return (
    <div className="  min-h-[100vh] flex items-center justify-center    ">
      <div className="  grid-cols-5 md:col-span-2 px-5 md:px-16 pt-12">
        {children}
      </div>
    </div>
  );
};

export default LayoutAuth;
