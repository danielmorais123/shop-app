import Nav from "@/components/Nav";
import { cookies } from "next/headers";

export default function Home() {
  let language = cookies().get("language")?.value || "en";

  return (
    <div className="flex flex-col dark:bg-[#242427] bg-zinc-300 min-h-screen">
      <Nav lang={language} />
    </div>
  );
}
