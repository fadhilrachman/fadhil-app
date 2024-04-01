import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="p-10 space-y-4">
        <Input placeholder="example" />
        <Button isLoading>cuyy</Button>
      </div>
    </div>
  );
};

export default page;
