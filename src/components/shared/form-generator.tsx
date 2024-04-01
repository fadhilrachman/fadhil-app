"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { FieldValues, UseFormReturn, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Eye, EyeOff, ListEndIcon } from "lucide-react";

interface FormDataType {
  id: string;
  label: string;
  type: "text" | "select" | "password";
  description?: string;
  placeholder?: string;
}

interface FormGeneratorType {
  form: UseFormReturn<any, any, any>;
  data: FormDataType[];
  id: string;
  onSubmit: (val: any) => void;
}

const FormGenerator = ({ data, form, id, onSubmit }: FormGeneratorType) => {
  //   const form = useForm();
  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3"
      >
        {data.map((res) => {
          if (res.type == "text") {
            return (
              <FormField
                control={form.control}
                name={res.id}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{res.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={res.placeholder} {...field} />
                    </FormControl>
                    {res.description && (
                      <FormDescription>{res.description}</FormDescription>
                    )}
                    <FormMessage className="text-[12px]" />
                  </FormItem>
                )}
              />
            );
          }
          if (res.type == "password") {
            const [showPassword, setShowPassword] = useState(false);
            const changeShowPassword = () => {
              setShowPassword(!showPassword);
            };
            return (
              <FormField
                control={form.control}
                name={res.id}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{res.label}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder={res.placeholder}
                          {...field}
                        />
                        {showPassword ? (
                          <EyeOff
                            onClick={changeShowPassword}
                            className="h-4 cursor-pointer absolute right-1.5 top-1/2 transform -translate-y-1/2"
                          />
                        ) : (
                          <Eye
                            onClick={changeShowPassword}
                            className="h-4 cursor-pointer absolute right-1.5 top-1/2 transform -translate-y-1/2"
                          />
                        )}
                      </div>
                    </FormControl>
                    {res.description && (
                      <FormDescription>{res.description}</FormDescription>
                    )}
                    <FormMessage className="text-[12px]" />
                  </FormItem>
                )}
              />
            );
          }
        })}
      </form>
    </Form>
  );
};

export default FormGenerator;
export type { FormDataType };
