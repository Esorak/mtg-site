// core/converter/ToCardDTO.ts

import { CardDTO } from "@/core/aggregates/card/CardDTO";
import CardFromNet from "@/core/aggregates/cardfromnet/CardFromNet";

export default function toCardDTO(cardFromNet: CardFromNet): CardDTO {
  const cardDTO: CardDTO = {
    id: cardFromNet.getId(),
    name: cardFromNet.getName(),
    subtype: cardFromNet.getSubtype() || "",
    type: cardFromNet.getType(),
    cost: cardFromNet.getCost(),
    power: cardFromNet.getPower(),
    defense: cardFromNet.getDefense(),
    art: cardFromNet.getArt(),
    rarity: cardFromNet.getRarity(),
    setsName: cardFromNet.getSetsName(),
    collectorNumber: cardFromNet.getCollectorNumber(),
    flavorText: cardFromNet.getFlavorText(),
    artist: cardFromNet.getArtist(),
    color: cardFromNet.getColor(),
    manaCost: cardFromNet.getManaCost(),
    loyalty: cardFromNet.getLoyalty(),
    keywords: cardFromNet.getKeywords(),
    expansion: cardFromNet.getExpansion(),
  };
  return cardDTO;
}
