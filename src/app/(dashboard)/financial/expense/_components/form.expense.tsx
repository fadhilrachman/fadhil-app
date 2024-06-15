import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormGenerator, {
  FormDataType,
} from "@/components/shared/form-generator";
import { Button } from "@/components/ui/button";
import { format } from "path";
interface Props {
  open: boolean;
  onOpen: () => void;
}
const formSchema = z.object({
  category_id: z.string().min(1, "Field ini harus diisi"),
  date: z.string().min(1, "Field ini harus diisi"),
  count: z.string().min(1, "Field ini harus diisi"),
  description: z.string().min(1, "Field ini harus diisi"),
});
const FormExpense = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const dataForm: FormDataType[] = [
    {
      id: "date",
      type: "date",
      label: "Tanggal",
    },
    {
      id: "count",
      type: "number",
      label: "Total Pengeluaran",
      placeholder: "RP.000",
    },
    {
      id: "description",
      type: "textarea",
      label: "Deskripsi",
      placeholder: "deskripsi",
    },
  ];

  console.log({ value: form.watch("count") });

  return (
    <AlertDialog open={props.open} onOpenChange={props.onOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tambahkan Pengeluaran</AlertDialogTitle>
          {/* <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription> */}
        </AlertDialogHeader>
        {/* <AlertDialogB */}
        <FormGenerator<z.infer<typeof formSchema>>
          id="form"
          form={form}
          data={dataForm}
          onSubmit={(val) => {
            console.log({ val });
          }}
        />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {/* <AlertDialogAction>Continue</AlertDialogAction> */}
          <Button variant={"main"} form="form" type="submit">
            Submit
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default FormExpense;
