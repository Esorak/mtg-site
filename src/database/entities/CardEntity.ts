import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "cards" })
export class CardEntity {
  @PrimaryColumn({ type: "uuid" })
  id!: string;

  @Column({ type: "varchar", nullable: false })
  name!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ type: "varchar", nullable: false, array: true })
  color!: string[];

  @Column({ type: "varchar", nullable: false })
  type!: string;

  @Column({ type: "varchar", nullable: false })
  subtype!: string;

  @Column({ type: "int", nullable: false })
  cost!: number;

  @Column({ type: "int", nullable: true })
  defense?: number;

  @Column({ type: "varchar", nullable: false })
  art!: string;

  @Column({ type: "varchar", nullable: false })
  rarity!: string;

  @Column({ type: "varchar", nullable: false })
  setsName!: string;

  @Column({ type: "varchar", nullable: false })
  collectorNumber!: string;

  @Column({ type: "varchar", nullable: false })
  flavorText!: string;

  @Column({ type: "varchar", nullable: false })
  artist!: string;

  @Column({ type: "varchar", nullable: false })
  manaCost!: string;

  @Column({ type: "int", nullable: true })
  loyalty?: number;

  @Column({ type: "varchar", nullable: false, array: true })
  keywords!: string[];

  @Column({ type: "varchar", nullable: false })
  expansion!: string;

  @Column({ type: "number", nullable: true })
  power?: number;

  constructor(card?: Partial<CardEntity>) {
    if (card) {
      Object.assign(this, card);
    }
  }
}
