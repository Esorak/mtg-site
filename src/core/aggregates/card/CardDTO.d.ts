export interface CardDTO {
  id: string;
  name: string;
  subtype: string;
  type: string;
  cost: number;
  power?: number;
  defense?: number;
  art: string;
  rarity: string;
  setsName: string | null | undefined;
  collectorNumber: string;
  flavorText: string | null | undefined;
  artist: string;
  color: string[];
  manaCost: string;
  loyalty?: number | null | undefined;
  keywords: string[] | undefined;
  expansion: string;
}
export interface CardNetDTO {
  id: string;
  name: string;
  subtype_line: string;
  type_line: string;
  cmc: number;
  power: string;
  toughness: string;
  image_uris: { normal: string };
  oracle_text: string;
  rarity: string;
  sets_name: string | null | undefined;
  collector_number: string;
  flavor_text: string | null | undefined;
  artist: string;
  colors: string[];
  mana_cost: string;
  keywords: string[];
  set: string;
  loyalty?: string | null | undefined;
}
