"use client";

import { Bell, Menu, ShoppingCartIcon } from "lucide-react";
import wortenLogo from "../images/wortenlogo.png";
import { DarkModeToggle } from "./DarkModeToggle";
import { DropdownMen } from "./DropdownMen";
import translate from "../languages.json";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";
import { setLanguage } from "@/serverActions";
import { SwitchDemo } from "./SwitchLang";
import { useToast } from "./ui/use-toast";
import NavMenu from "./NavMenu";
import MenuSheet from "./MenuSheet";
export default function Nav({ lang }: { lang: string }) {
  const router = useRouter();
  const { toast } = useToast();
  // function setLanguage() {
  //   if (lang === "en") {
  //     cookies().set("language", "pt");
  //   } else {
  //     cookies().set("language", "en");
  //   }
  //   router.refresh();
  // }
  return (
    <div className="px-4 py-2 flex items-center justify-between w-full lg:max-w-[1000px] xl:max-w-[1150px] mx-auto">
      <img src={wortenLogo?.src} alt="" className="w-14 object-contain" />
      <div className="lg:flex hidden">
        <NavMenu lang={lang} />
      </div>
      {/* <SearchInputCommand /> */}
      <div className="md:flex items-center gap-3 hidden">
        <form
          className="bg-red-500 items-center flex"
          action={async () => {
            await setLanguage(lang === "pt" ? "en" : "pt");
            toast({
              title: "Language mode changed",
              description: `Language: ${
                lang === "pt" ? "English" : "Portuguese"
              }`,
            });
          }}
        >
          <button type="submit">
            {lang === "pt" ? (
              <img
                src="https://img.freepik.com/vetores-premium/vetor-da-bandeira-de-portugal_654626-166.jpg"
                className="w-7 h-5"
              />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1200px-Flag_of_the_United_States.png"
                className="w-7 h-4"
                alt=""
              />
            )}
          </button>
          {/* <button type="submit">Change Idioma</button> */}
        </form>
        <DarkModeToggle />
        <ShoppingCartIcon className="w-4 h-4 cursor-pointer" />
        <Bell className="w-4 h-4 cursor-pointer" />
        {true ? (
          <button className="bg-zinc-100 dark:!text-[#0F172A] font-medium tracking-normal py-1.5 rounded-sm px-5 text-sm transition dark:border-none dark:hover:bg-zinc-300 border text-purpleMain  hover:bg-zinc-200  duration-700 ">
            {/* @ts-ignore */}
            {translate[lang].SIGN_IN}
          </button>
        ) : (
          <DropdownMen />
        )}
        <div className="md:flex hidden">
          <MenuSheet />
        </div>
      </div>

      <div className="md:hidden">
        {" "}
        <MenuSheet />
      </div>
      {/* <Menu className="cursor-pointer md:hidden" /> */}
    </div>
  );
}
