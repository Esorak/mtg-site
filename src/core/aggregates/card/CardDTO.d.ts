interface CardDTO {
  id: string;
  name: string;
  subtype: string;
  type: string;
  cost: number;
  power?: number;
  defense?: number;
  art: string;
  description: string;
  rarity: string;
  setName: string;
  collectorNumber: string;
  flavorText: string;
  artist: string;
  color: string[];
  manaCost: string;
  loyalty?: number;
  keywords: string[];
  expansion: string;
}
