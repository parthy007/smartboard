"use client";
import { useEffect, useState, ChangeEvent } from "react";
import qs from "query-string";
import { Search } from "lucide-react";
import { useDebounceCallback } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debounced = useDebounceCallback((newValue) => {
    setValue(newValue);
    const urll = {
      url: "/",
      query: { search: newValue },
    };
    const urlString = qs.stringifyUrl(urll);
    router.push(urlString);
  }, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    debounced(newValue);
  };

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 w-4 h-4 left-3 transform -translate-y-1/2 text-muted-foreground" />
      <Input
        className="max-w-[516px] pl-9 w-full"
        placeholder="Search Board"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default SearchInput;
