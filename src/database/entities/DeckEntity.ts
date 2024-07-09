import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { CardEntity } from "./CardEntity";

@Entity({ name: "decks" })
//enlever le name undefined et geter de nom sur la page
export default class DeckEntity {
  @PrimaryColumn("varchar")
  id!: string;
  @Column({ type: "varchar", nullable: true })
  name!: string | undefined;
  @ManyToMany(() => CardEntity, (card) => card.decks)
  cards!: CardEntity[];

  constructor(deck?: Partial<CardEntity>) {
    if (deck) {
      Object.assign(this, deck);
    }
  }
}