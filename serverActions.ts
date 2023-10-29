"use server";
import { cookies } from "next/headers";

export async function setLanguage(lang: string) {
  cookies().set("language", lang);
}
