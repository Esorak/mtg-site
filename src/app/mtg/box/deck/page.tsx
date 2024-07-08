"use client";

import { useCard } from "@/app/context/Contextt";
import type CardFromNet from "@/core/aggregates/cardfromnet/CardFromNet";
import { useEffect, useState } from "react";

export function DeckPage() {
  const { cards } = useCard();
  const [deck, setDeck] = useState<CardFromNet[]>([]);

  useEffect(() => {
    setDeck(cards);
  }, [cards]);

  return <main></main>;
}
