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
import { Textarea } from "../ui/textarea";
import { NumericFormat } from "react-number-format";
interface FormDataType {
  id: string;
  label: string;
  type: "text" | "select" | "password" | "textarea" | "date" | "number";
  description?: string;
  placeholder?: string;
}

interface FormGeneratorType<T> {
  form: UseFormReturn<any, any, any>;
  data: FormDataType[];
  withFormatRupiah?: boolean;
  id: string;
  onSubmit: (val: T) => void;
}
const formatRupiah = (number: number) => {
  return number.toLocaleString("id-ID", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const parseRupiah = (value: string) => {
  // Remove any non-numeric characters (except for the decimal point)
  const cleanedValue = value.replace(/[^0-9,]/g, "").replace(/,/g, ".");
  return parseFloat(cleanedValue);
};
const FormGenerator = <T,>({
  data,
  form,
  id,
  onSubmit,
}: FormGeneratorType<T>) => {
  //   const form = useForm();
  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3"
      >
        {data.map((res, key) => {
          if (res.type == "text") {
            return (
              <FormField
                control={form.control}
                name={res.id}
                key={key}
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
          if (res.type == "number") {
            return (
              <FormField
                control={form.control}
                name={res.id}
                key={key}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>{res.label}</FormLabel>
                    <FormControl>
                      <NumericFormat
                        // StartIcon={}
                        // value={12323}
                        placeholder={res.placeholder}
                        {...field}
                        customInput={Input}
                        thousandSeparator
                      />
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
          if (res.type == "date") {
            return (
              <FormField
                control={form.control}
                name={res.id}
                key={key}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{res.label}</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
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
          if (res.type == "textarea") {
            return (
              <FormField
                control={form.control}
                name={res.id}
                key={key}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{res.label}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={res.placeholder} {...field} />
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
                key={key}
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
