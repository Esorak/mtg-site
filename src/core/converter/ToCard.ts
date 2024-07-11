// core/converter/ToCard.ts
import Card from "@/core/aggregates/card/Card";
import { CardEntity } from "@/database/entities/CardEntity";

export function toCard(cardEntity: CardEntity): Card {
  return new Card({
    id: cardEntity.id,
    name: cardEntity.name,
    color: cardEntity.color,
    type: cardEntity.type,
    subtype: cardEntity.subtype,
    cost: cardEntity.cost,
    defense: cardEntity.defense,
    art: cardEntity.art,
    rarity: cardEntity.rarity,
    setsName: cardEntity.setsName || "",
    collectorNumber: cardEntity.collectorNumber,
    flavorText: cardEntity.flavorText,
    artist: cardEntity.artist,
    manaCost: cardEntity.manaCost,
    loyalty: cardEntity.loyalty,
    keywords: cardEntity.keywords,
    expansion: cardEntity.expansion,
    power: cardEntity.power,
  });
}
