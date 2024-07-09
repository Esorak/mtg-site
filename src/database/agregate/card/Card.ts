import type { CardDTO } from "@/core/aggregates/card/CardDTO";

export default class Card {
  private id: string;
  private name: string;
  private subtype: string;
  private type: string;
  private cost: number;
  private power: number | undefined;
  private defense: number | undefined;
  private art: string;
  private description: string | undefined;
  private rarity: string;
  private setsName: string;
  private collectorNumber: string;
  private flavorText: string | undefined;
  private artist: string;
  private color: string[];
  private manaCost: string;
  private loyalty?: number | null | undefined;
  private keywords: string[] | undefined;
  private expansion: string;

  public constructor(cardDTO: CardDTO) {
    this.id = cardDTO.id;
    this.name = cardDTO.name;
    this.subtype = cardDTO.subtype;
    this.type = cardDTO.type;
    this.cost = cardDTO.cost;
    this.power = cardDTO.power;
    this.defense = cardDTO.defense;
    this.art = cardDTO.art;
    this.description = cardDTO.description;
    this.rarity = cardDTO.rarity;
    this.setsName = cardDTO.setsName;
    this.collectorNumber = cardDTO.collectorNumber;
    this.flavorText = cardDTO.flavorText;
    this.artist = cardDTO.artist;
    this.color = cardDTO.color;
    this.manaCost = cardDTO.manaCost;
    this.keywords = cardDTO.keywords;
    this.expansion = cardDTO.expansion;
    this.loyalty = cardDTO.loyalty;
  }

  // Getter and setter methods for all attributes

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

  public getSubtype(): string {
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

  public getPower(): number | undefined {
    return this.power;
  }

  public setPower(power: number | undefined): void {
    this.power = power;
  }

  public getDefense(): number | undefined {
    return this.defense;
  }

  public setDefense(defense: number | undefined): void {
    this.defense = defense;
  }

  public getArt(): string {
    return this.art;
  }

  public setArt(art: string): void {
    this.art = art;
  }

  public getDescription(): string | undefined {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getRarity(): string {
    return this.rarity;
  }

  public setRarity(rarity: string): void {
    this.rarity = rarity;
  }

  public getSetsName(): string {
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

  public getFlavorText(): string | undefined {
    return this.flavorText;
  }

  public setFlavorText(flavorText: string): void {
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

  public getLoyalty(): number | null | undefined {
    return this.loyalty;
  }

  public setLoyalty(loyalty: number | null | undefined): void {
    this.loyalty = loyalty;
  }

  public getKeywords(): string[] | undefined {
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
