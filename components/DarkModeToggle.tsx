"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")} className="">
          <MoonIcon />
        </button>
      ) : (
        <button onClick={() => setTheme("light")} className="">
          <SunIcon />
        </button>
      )}
    </>
  );
}
