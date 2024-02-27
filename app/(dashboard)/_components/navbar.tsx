"use client";

import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex items-center bg-green-400 gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">{/* TODO: Add Search */}</div>
      <UserButton />
    </div>
  );
};

export default Navbar;
