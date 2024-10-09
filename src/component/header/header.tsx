import React from "react";
import { ClearzLogo } from "component";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <ClearzLogo className="z-10 h-20 cursor-pointer text-sky-800" />
    </header>
  );
}
