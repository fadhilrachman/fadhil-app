"use client";
import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";
import { Button } from "../ui/button";
import { useParams, useSearchParams } from "next/navigation";
import { useAuth } from "@/stores/auth.stores";

const OtpInput = () => {
  const { isLoading, postVerifyOTP } = useAuth();
  const searchParams = useSearchParams();
  const [otp, setOtp] = useState<string>("");
  const handleSubmitOTP = () => {
    postVerifyOTP({ otp: Number(otp), email: searchParams.get("email") || "" });
  };
  return (
    <div className=" flex flex-col items-center space-y-4 justify-center">
      <>
        <InputOTP
          maxLength={6}
          className="mt-4"
          onChange={(e) => {
            setOtp(e);
            console.log({ cuy: e });
          }}
          render={({ slots }) => (
            <>
              <InputOTPGroup>
                {slots.slice(0, 6).map((slot, index) => (
                  <InputOTPSlot
                    className="h-[60px] w-[60px]"
                    key={index}
                    {...slot}
                  />
                ))}{" "}
              </InputOTPGroup>
            </>
          )}
        />
        <span className="text-sm text-gray-700">
          Didn’t get verification code?{" "}
          <span className="text-base text-sm underline">Resend</span>
        </span>
      </>
      <Button
        variant={"main"}
        isLoading={isLoading}
        disabled={otp.length < 6}
        onClick={() => {
          handleSubmitOTP();
        }}
      >
        Verification OTP
      </Button>
    </div>
  );
};

export default OtpInput;
