"use client";

import { useSyncExternalStore } from "react";
import { isBniSource } from "./utm";

const subscribe = () => () => {};

// Discreet recognition line above the headline. Both variants end in a dash
// that leads into the quoted headline, and both fit one line, so the swap
// after hydration causes no layout shift. The server renders the neutral one
// because the link also gets shared outside the BNI room.
export default function SourceLine() {
  const fromBni = useSyncExternalStore(subscribe, isBniSource, () => false);

  return (
    <p className="flex min-h-6 items-center gap-2 text-sm text-cloud/70">
      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
      {fromBni
        ? "Você veio da apresentação do BNI —"
        : "Uma frase que ouvimos toda semana —"}
    </p>
  );
}
