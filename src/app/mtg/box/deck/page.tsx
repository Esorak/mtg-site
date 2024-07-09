"use client";

import { CardProvider, useCard } from "@/app/context/Contextt";

export function DeckPage() {
  const { cards } = useCard();

  return <main></main>;
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
