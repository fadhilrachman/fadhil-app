"use client";
import OtpInput from "@/components/auth/otp-input";
import Tittle from "@/components/shared/title";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useSearchParams();

  return (
    <div className="space-y-20">
      <Tittle withButtonBack>Verify Otp</Tittle>
      <div>
        <p>
          Please enter the OTP to verify your account A OTP has beent send to
          <span className="ml-1 underline"> {params.get("email")}</span>
        </p>
        <OtpInput />
      </div>
    </div>
  );
};

export default page;
