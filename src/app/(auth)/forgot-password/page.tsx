import Tittle from "@/components/shared/title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="space-y-20">
      <Tittle withButtonBack>Forgot Your Password?</Tittle>
      <div>
        <div className="space-y-3">
          <Label>We'll send you a One Time Password on this email</Label>
          <Input placeholder="email" type="email" StartIcon={Mail} />
        </div>
        <Button variant={"main"} className="w-full mt-5">
          Send Email
        </Button>
      </div>
    </div>
  );
};

export default page;
