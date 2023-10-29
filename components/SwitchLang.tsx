import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchDemo({ checked, lang }: any) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" checked={checked} type="submit" />
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
    </div>
  );
}
