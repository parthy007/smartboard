import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const EmptyOrg = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image src="/elements.svg" alt="emptyboard" width={200} height={200} />
      <h1 className="text-2xl font-semibold mt-6">Welcome to Smartboard</h1>
      <p className="text-muted-foreground text-sm mt-2">
        Create an organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrg;
