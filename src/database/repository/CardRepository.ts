import Card from "@/core/aggregates/card/Card";
import { Repository } from "typeorm";
import Connection from "../Connection";
import { CardEntity } from "../entities/CardEntity";

export default class CardRepository {
  private repository: Repository<CardEntity>;

  constructor(connection: Connection) {
    const dbConnection = connection.getConnection();
    const repository = dbConnection.getRepository(CardEntity);
    this.repository = repository;
  }

  private mapEntityToCard(cardEntity: CardEntity): Card {
    return new Card({
      id: cardEntity.id,
      name: cardEntity.name,
      subtype: cardEntity.subtype,
      type: cardEntity.type,
      cost: cardEntity.cost,
      power: cardEntity.power ?? undefined,
      defense: cardEntity.defense ?? undefined,
      art: cardEntity.art,
      description: cardEntity.description ?? "",
      rarity: cardEntity.rarity,
      setName: cardEntity.setsName,
      collectorNumber: cardEntity.collectorNumber,
      flavorText: cardEntity.flavorText,
      artist: cardEntity.artist,
      color: cardEntity.color,
      manaCost: cardEntity.manaCost,
      keywords: cardEntity.keywords,
      expansion: cardEntity.expansion,
      loyalty: cardEntity.loyalty,
    });
  }
  //  /**
  //  * Sauvegarde d'une carte dans la base de données.
  //  * @param card : Objet représentant une carte à sauvegarder.
  //  */
  //  async saveCard(card: Card): Promise<void> {
  //   const cardEntity = this.repository.create(card);
  //   await this.repository.save(cardEntity);
  // }

  /**
   * Récupère toutes les cartes depuis la base de données.
   * @returns Une promesse résolue avec un tableau de cartes.
   */
  async findAll(): Promise<Card[]> {
    const result = await this.repository.find();
    return result.map((cardEntity) => this.mapEntityToCard(cardEntity));
  }
  // /**
  //  * Supprime une carte de la base de données.
  //  * @param id : Identifiant unique de la carte à supprimer.
  //  */
  // async deleteCard(id: string): Promise<void> {
  //   await this.repository.delete(id);
  // }
}
