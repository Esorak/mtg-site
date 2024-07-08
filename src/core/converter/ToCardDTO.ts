// Importations nécessaires
import Card from "@/core/aggregates/card/Card";
import type { CardDTO } from "../aggregates/card/CardDTO";

export function ToCardDTO(card: Card): CardDTO {
  const cardDTO: CardDTO = {
    id: card.getId(),
    name: card.getName(),
    subtype: card.getSubtype(),
    type: card.getType(),
    cost: card.getCost(),
    power: card.getPower(),
    defense: card.getDefense(),
    art: card.getArt(),
    description: card.getDescription(),
    rarity: card.getRarity(),
    setsName: card.getSetsName(),
    collectorNumber: card.getCollectorNumber(),
    flavorText: card.getFlavorText(),
    artist: card.getArtist(),
    color: card.getColor(),
    manaCost: card.getManaCost(),
    loyalty: card.getLoyalty(),
    keywords: card.getKeywords(),
    expansion: card.getExpansion(),
  };

  return cardDTO;
}
