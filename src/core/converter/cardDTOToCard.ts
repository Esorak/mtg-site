import Card from "../aggregates/card/Card";
import type { CardDTO } from "../aggregates/card/CardDTO";

export default function cardDTOtoCard(cardDTO: CardDTO): Card {
  return new Card({
    id: cardDTO.id,
    name: cardDTO.name,
    color: cardDTO.color,
    type: cardDTO.type,
    subtype: cardDTO.subtype,
    cost: cardDTO.cost,
    defense: cardDTO.defense,
    art: cardDTO.art,
    rarity: cardDTO.rarity,
    setsName: cardDTO.setsName,
    collectorNumber: cardDTO.collectorNumber,
    flavorText: cardDTO.flavorText,
    artist: cardDTO.artist,
    manaCost: cardDTO.manaCost,
    loyalty: cardDTO.loyalty,
    keywords: cardDTO.keywords,
    expansion: cardDTO.expansion,
    power: cardDTO.power,
  });
}
