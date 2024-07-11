import Card from "@/core/aggregates/card/Card";
import type { CardDTO, CardNetDTO } from "../aggregates/card/CardDTO";

export function translateCardNetToCard(cardNetDTO: CardNetDTO): Card {
  const cardDTO: CardDTO = {
    id: cardNetDTO.id,
    name: cardNetDTO.name,
    subtype: cardNetDTO.subtype_line,
    type: cardNetDTO.type_line,
    cost: cardNetDTO.cmc,
    power: cardNetDTO.power ? parseInt(cardNetDTO.power) : undefined,
    defense: cardNetDTO.toughness ? parseInt(cardNetDTO.toughness) : undefined,
    art: cardNetDTO.image_uris ? cardNetDTO.image_uris.normal : "",
    rarity: cardNetDTO.rarity,
    setsName: cardNetDTO.sets_name,
    collectorNumber: cardNetDTO.collector_number,
    flavorText: cardNetDTO.flavor_text,
    artist: cardNetDTO.artist,
    color: cardNetDTO.colors,
    manaCost: cardNetDTO.mana_cost,
    keywords: cardNetDTO.keywords || [],
    expansion: cardNetDTO.set,
    loyalty: cardNetDTO.loyalty ? parseInt(cardNetDTO.loyalty) : undefined,
  };

  return new Card(cardDTO);
}
