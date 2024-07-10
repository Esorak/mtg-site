import Card from "../card/Card";

export default class deck {
  private id: string;
  private name: string | undefined;
  private cards: Card[];

  public constructor(id: string, name: string, cards: Card[] = []) {
    this.id = id;
    this.name = name;
    this.cards = cards;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getName(): string | undefined {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getCards(): Card[] {
    return this.cards;
  }

  public setCards(cards: Card[]): void {
    this.cards = cards;
  }

  public addCard(card: Card): void {
    this.cards.push(card);
  }

  public getDeckSize(): number {
    return this.cards.length;
  }
}
