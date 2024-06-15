"use client";
import React from "react";
import { Button } from "../../../../components/ui/button";
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
import { useAuth } from "@/stores/auth.stores";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().min(1, "Field Required").email(),
  password: z.string().min(1, "Field Required"),
});

const LoginForm = () => {
  const router = useRouter();
  const { isLoading, postSignIn } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleSignUp = (val: z.infer<typeof formSchema>) => {
    postSignIn(val).then(() => {
      router.push(`/dashboard`);
    });
  };

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
    <div className=" space-y-5">
      <Tittle subtitle="Pantau Pengeluaran dan Pemasukan Anda dengan Login ke Aplikasi">
        Selamat Datang
      </Tittle>
      <div className=" ">
        <div className="space-y-4">
          <FormGenerator<z.infer<typeof formSchema>>
            id="form"
            form={form}
            data={dataForm}
            onSubmit={handleSignUp}
          />

          <div className=" text-sm flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Remember Me</Label>
            </div>
            <Link href={"/forgot-password"}>
              <span className=" text-sm font-semibold">Lupa password?</span>
            </Link>
          </div>
        </div>
        <div className="mt-5 space-y-3">
          <Button
            className=" w-full "
            variant={"main"}
            isLoading={isLoading}
            type="submit"
            form="form"
          >
            Masuk
          </Button>
          <p className="text-sm text-neutral-500 text-center">-Or-</p>
          <Button
            className=" w-full "
            variant={"default"}
            // isLoading
            type="submit"
            form="form"
          >
            Masuk Dengan Google
          </Button>
        </div>
        <div className="text-sm mt-2 text-gray-700">
          Tidak punya akun?
          <Link href={"/sign-up"}>
            <span className="ml-1 text-sm font-semibold text-black underline">
              Daftar
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
