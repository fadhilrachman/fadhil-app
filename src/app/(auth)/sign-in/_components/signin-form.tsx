"use client";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { FormControl, FormLabel } from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Switch } from "../../../../components/ui/switch";
import Link from "next/link";
import Tittle from "../../../../components/shared/title";
import FormGenerator, {
  FormDataType,
} from "../../../../components/shared/form-generator";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().min(1, "Field Required").email(),
  password: z.string().min(1, "Field Required"),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dataForm: FormDataType[] = [
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
  ];

  return (
    <div className=" space-y-10">
      <Tittle>Sign In</Tittle>
      <div className="space-y-4 opaco flex flex-col">
        <Button className="">Sign in with Google</Button>
        <Button className="">Sign in with Facebook</Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div>
      <div className=" ">
        <div className="space-y-4">
          <FormGenerator
            id="form"
            form={form}
            data={dataForm}
            onSubmit={(val) => {
              console.log({ val });
            }}
          />

          <div className=" text-sm flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Remember Me</Label>
            </div>
            <Link href={"/forgot-password"}>
              <span className="text-base text-sm">Forgot Password?</span>
            </Link>
          </div>
        </div>
        <Button
          className="mt-5 w-full "
          variant={"main"}
          type="submit"
          form="form"
        >
          Sign In
        </Button>
        <div className="text-sm mt-2 text-gray-700">
          Don't have an account?{" "}
          <Link href={"/sign-up"}>
            <span className="text-base text-sm underline">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
