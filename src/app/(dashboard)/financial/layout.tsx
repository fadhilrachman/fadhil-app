import FinancialLayout from "@/layouts/financial-layout";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <FinancialLayout>{children}</FinancialLayout>;
};

export default layout;
