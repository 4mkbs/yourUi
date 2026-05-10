"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search as SearchIcon, X } from "lucide-react";
import { useEffect, useState, useTransition } from "react";

interface SearchProps {
  placeholder?: string;
  category?: string;
}

import { Suspense } from "react";

function SearchInput({ placeholder, category }: SearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") || "");
  const [, startTransition] = useTransition();

  useEffect(() => {
    setValue(searchParams.get("q") || "");
  }, [searchParams]);

  const handleSearch = (term: string) => {
    setValue(term);
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set("q", term);
      } else {
        params.delete("q");
      }
      router.push(`/designs?${params.toString()}`);
    });
  };

  const handleClear = () => {
    setValue("");
    const params = new URLSearchParams(searchParams);
    params.delete("q");
    router.push(`/designs?${params.toString()}`);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-muted" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
        className="search-input"
        placeholder={placeholder}
      />
      {value && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default function Search(props: SearchProps) {
  return (
    <Suspense fallback={
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-muted" />
        </div>
        <input
          type="text"
          disabled
          className="search-input opacity-50 cursor-not-allowed"
          placeholder={props.placeholder || "Loading search..."}
        />
      </div>
    }>
      <SearchInput {...props} />
    </Suspense>
  );
}

