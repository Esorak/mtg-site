"use client";

import { CardProvider, useCard } from "@/app/context/Contextt";

export function DeckPage() {
  const { cards } = useCard();

  return (
    <main>
      <h1>Deck 1</h1>
      <ul></ul>
    </main>
  );
}

export default function Home() {
  return (
    <main>
      <CardProvider>
        <DeckPage />
      </CardProvider>
    </main>
  );
}
