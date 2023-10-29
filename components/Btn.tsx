import React from "react";
import { Button } from "./ui/button";

export default function Btn({ text, onClick }: any) {
  return <Button onClick={onClick} className="!py-0.5 !text-sm transition hover:bg-">{text}</Button>;
}
