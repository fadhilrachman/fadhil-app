"use client";
import React from "react";
import { Button } from "../../../../components/ui/button";

import Link from "next/link";
import Tittle from "../../../../components/shared/title";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormGenerator, {
  FormDataType,
} from "@/components/shared/form-generator";
import { useAuth } from "@/stores/auth.stores";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    user_name: z.string().min(1, "Field Required"),
    email: z.string().min(1, "Field Required").email(),
    password: z.string().min(1, "Field Required"),
    confirm_password: z.string().min(1, "Field Required"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

const SignUpForm = () => {
  const router = useRouter();
  const { isLoading, postSignUp } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleSignUp = (val: any) => {
    // IF SIGN UP SUCCES NAVIGATE TO VERIFY OTP
    postSignUp(val).then(() => {
      router.push(`/verify-otp?email=${val.email}`);
    });
  };

  const dataForm: FormDataType[] = [
    {
      id: "user_name",
      label: "User Name",
      type: "text",
      placeholder: "user name",
    },
    {
      id: "email",
      label: "Email",
      type: "text",
      placeholder: "email",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "password",
    },
    {
      id: "confirm_password",
      label: "Confirm Password",
      type: "password",
      placeholder: "confirm password",
    },
  ];
  return (
    <div className=" space-y-10">
      <Tittle>Sign Up</Tittle>

      <div className=" ">
        <FormGenerator
          form={form}
          id="form"
          data={dataForm}
          onSubmit={(val) => {
            // console.log({ val });
            handleSignUp(val);
          }}
        />

        <Button
          className="mt-5 w-full "
          form="form"
          type="submit"
          isLoading={isLoading}
          variant={"main"}
        >
          Sign Up
        </Button>
        <div className="text-sm mt-2 text-gray-700">
          Belum Punya Akun?
          <Link href={"/signin"}>
            <span className="text-base text-sm underline">Sign In</span>
          </Link>
        </div>
        {/* </FormControl> */}
      </div>
    </div>
  );
};

export default SignUpForm;
