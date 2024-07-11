// core/converter/ToCardEntity.ts
import Card from "@/core/aggregates/card/Card";
import { CardEntity } from "@/database/entities/CardEntity";

export function toCardEntity(card: Card): CardEntity {
  return new CardEntity({
    id: card.getId(),
    name: card.getName(),
    color: card.getColor(),
    type: card.getType(),
    subtype: card.getSubtype(),
    cost: card.getCost(),
    defense: card.getDefense(),
    art: card.getArt(),
    rarity: card.getRarity(),
    setsName: card.getSetsName(),
    collectorNumber: card.getCollectorNumber(),
    flavorText: card.getFlavorText(),
    artist: card.getArtist(),
    manaCost: card.getManaCost(),
    loyalty: card.getLoyalty(),
    keywords: card.getKeywords(),
    expansion: card.getExpansion(),
    power: card.getPower(),
  });
}
