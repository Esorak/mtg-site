import type { CardNetDTO } from "../card/CardDTO";

export default class CardFromNet {
  private id: string;
  private name: string;
  private subtype: string | undefined;
  private type: string;
  private cost: number;
  private power: number | undefined | null;
  private defense: number | undefined | null;
  private art: string;
  private rarity: string;
  private setsName: string | undefined | null;
  private collectorNumber: string;
  private flavorText: string | undefined | null;
  private artist: string;
  private color: string[];
  private manaCost: string;
  private loyalty?: number | undefined | null;
  private keywords: string[];
  private expansion: string;

  constructor(cardNetDTO: CardNetDTO) {
    this.id = cardNetDTO.id;
    this.name = cardNetDTO.name;
    this.subtype = cardNetDTO.type_line;
    this.type = cardNetDTO.type_line;
    this.cost = cardNetDTO.cmc;
    this.power = cardNetDTO.power ? parseInt(cardNetDTO.power) : undefined;
    this.defense = cardNetDTO.toughness ? parseInt(cardNetDTO.toughness) : undefined;
    this.art = cardNetDTO.image_uris ? cardNetDTO.image_uris.normal : "";
    this.rarity = cardNetDTO.rarity;
    this.setsName = cardNetDTO.sets_name;
    this.collectorNumber = cardNetDTO.collector_number;
    this.flavorText = cardNetDTO.flavor_text ? cardNetDTO.flavor_text : undefined;
    this.artist = cardNetDTO.artist;
    this.color = cardNetDTO.colors;
    this.manaCost = cardNetDTO.mana_cost;
    this.keywords = cardNetDTO.keywords || [];
    this.expansion = cardNetDTO.set;
    this.loyalty = cardNetDTO.loyalty ? parseInt(cardNetDTO.loyalty) : undefined;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getSubtype(): string | undefined {
    return this.subtype;
  }

  public setSubtype(subtype: string): void {
    this.subtype = subtype;
  }

  public getType(): string {
    return this.type;
  }

  public setType(type: string): void {
    this.type = type;
  }

  public getCost(): number {
    return this.cost;
  }

  public setCost(cost: number): void {
    this.cost = cost;
  }

  public getPower(): number | undefined | null {
    return this.power;
  }

  public setPower(power: number | undefined | null): void {
    this.power = power;
  }

  public getDefense(): number | undefined | null {
    return this.defense;
  }

  public setDefense(defense: number | undefined | null): void {
    this.defense = defense;
  }

  public getArt(): string {
    return this.art;
  }

  public setArt(art: string): void {
    this.art = art;
  }
  public getRarity(): string {
    return this.rarity;
  }

  public setRarity(rarity: string): void {
    this.rarity = rarity;
  }

  public getSetsName(): string | undefined | null {
    return this.setsName;
  }

  public setSetsName(setsName: string): void {
    this.setsName = setsName;
  }

  public getCollectorNumber(): string {
    return this.collectorNumber;
  }

  public setCollectorNumber(collectorNumber: string): void {
    this.collectorNumber = collectorNumber;
  }

  public getFlavorText(): string | undefined | null {
    return this.flavorText;
  }

  public setFlavorText(flavorText: string | undefined): void {
    this.flavorText = flavorText;
  }

  public getArtist(): string {
    return this.artist;
  }

  public setArtist(artist: string): void {
    this.artist = artist;
  }

  public getColor(): string[] {
    return this.color;
  }

  public setColor(color: string[]): void {
    this.color = color;
  }

  public getManaCost(): string {
    return this.manaCost;
  }

  public setManaCost(manaCost: string): void {
    this.manaCost = manaCost;
  }

  public getLoyalty(): number | undefined | null {
    return this.loyalty;
  }

  public setLoyalty(loyalty: number | undefined | null): void {
    this.loyalty = loyalty;
  }

  public getKeywords(): string[] {
    return this.keywords;
  }

  public setKeywords(keywords: string[]): void {
    this.keywords = keywords;
  }

  public getExpansion(): string {
    return this.expansion;
  }

  public setExpansion(expansion: string): void {
    this.expansion = expansion;
  }
}
