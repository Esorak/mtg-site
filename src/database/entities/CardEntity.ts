import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "cards" })
export class CardEntity {
  @PrimaryColumn({ type: "varchar" })
  id!: string;

  @Column({ type: "varchar", nullable: false })
  name!: string;

  @Column({ type: "text", nullable: true })
  description!: string;

  @Column({ type: "varchar", nullable: false, array: true })
  color!: string[];

  @Column({ type: "varchar", nullable: false })
  type!: string;

  @Column({ type: "varchar", nullable: true })
  subtype!: string;

  @Column({ type: "int", nullable: false })
  cost!: number;

  @Column({ type: "int", nullable: true })
  defense?: number;

  @Column({ type: "varchar", nullable: false })
  art!: string;

  @Column({ type: "varchar", nullable: false })
  rarity!: string;

  @Column({ type: "varchar", nullable: true })
  setsName!: string;

  @Column({ type: "varchar", nullable: false })
  collectorNumber!: string;

  @Column({ type: "varchar", nullable: true })
  flavorText?: string;

  @Column({ type: "varchar", nullable: false })
  artist!: string;

  @Column({ type: "varchar", nullable: false })
  manaCost!: string;

  @Column({ type: "int", nullable: true })
  loyalty?: number | null | undefined;

  @Column({ type: "varchar", nullable: true, array: true })
  keywords?: string[];

  @Column({ type: "varchar", nullable: false })
  expansion!: string;

  @Column({ type: "int", nullable: true })
  power?: number;

  constructor(card?: Partial<CardEntity>) {
    if (card) {
      Object.assign(this, card);
    }
  }
}
