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

  const handleSignUp = (val: z.infer<typeof formSchema>) => {
    // IF SIGN UP SUCCES NAVIGATE TO VERIFY OTP
    postSignUp(val).then(() => {
      router.push(`/verify-otp?email=${val.email}`);
    });
  };

  const dataForm: FormDataType[] = [
    {
      id: "user_name",
      label: "Username",
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
    <div className=" space-y-5">
      <Tittle subtitle="Pantau Pengeluaran dan Pemasukan Anda dengan Daftar ke Aplikasi">
        Selamat Datang
      </Tittle>

      <div className=" ">
        <FormGenerator<z.infer<typeof formSchema>>
          form={form}
          id="form"
          data={dataForm}
          onSubmit={handleSignUp}
        />

        <Button
          className="mt-5 w-full "
          form="form"
          type="submit"
          isLoading={isLoading}
          variant={"main"}
        >
          Daftar
        </Button>
        <div className="text-sm mt-2 text-gray-700">
          Belum Punya Akun?
          <Link href={"/sign-in"}>
            <span className="font-semibold text-black text-sm underline">
              Masuk
            </span>
          </Link>
        </div>
        {/* </FormControl> */}
      </div>
    </div>
  );
};

export default SignUpForm;
