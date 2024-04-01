import React from "react";

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" grid grid-cols-1 h-[100vh] sm:grid-cols-5   ">
      <div className="border h-full col-span-2 px-20 py-24">{children}</div>
      <div className="border  col-span-3">page2</div>
    </div>
  );
};

export default LayoutAuth;
