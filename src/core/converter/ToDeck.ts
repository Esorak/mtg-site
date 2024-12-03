// core/converter/ToDeck.ts

import Deck from "@/core/aggregates/deck/Deck";
import { cardEntityToCard } from "@/core/converter/ToCard";
import DeckEntity from "@/database/entities/DeckEntity";

export function toDeck(deckEntity: DeckEntity): Deck {
  const cards = deckEntity.cards.map((cardEntity) => cardEntityToCard(cardEntity));
  return new Deck(deckEntity.id, deckEntity.name ?? "default name", cards);
}
