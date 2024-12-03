import Card from "@/core/aggregates/card/Card";
import { cardEntityToCard } from "@/core/converter/ToCard";
import { Repository } from "typeorm";
import Connection from "../Connection";
import { CardEntity } from "../entities/CardEntity";

export default class CardRepository {
  private repository: Repository<CardEntity>;

  constructor(connection: Connection) {
    const dbConnection = connection.getConnection();
    this.repository = dbConnection.getRepository(CardEntity);
  }

  async saveCard(card: Card): Promise<void> {
    const cardEntity = new CardEntity();
    cardEntity.id = card.getId();
    cardEntity.name = card.getName();

    // Décomposer la chaîne "type — subtype"
    const [type, subtype] = card.getType().split(" — ");

    cardEntity.type = type;
    cardEntity.subtype = subtype;
    cardEntity.cost = card.getCost();
    cardEntity.power = card.getPower() ?? 0;
    cardEntity.defense = card.getDefense() ?? 0;
    cardEntity.art = card.getArt();
    cardEntity.color = card.getColor();
    cardEntity.rarity = card.getRarity();
    cardEntity.setsName = card.getSetsName();
    cardEntity.collectorNumber = card.getCollectorNumber();
    cardEntity.flavorText = card.getFlavorText() ?? "";
    cardEntity.artist = card.getArtist();
    cardEntity.manaCost = card.getManaCost();
    cardEntity.loyalty = card.getLoyalty();
    cardEntity.keywords = card.getKeywords() ?? [];
    cardEntity.expansion = card.getExpansion();

    await this.repository.save(cardEntity);
  }

  async getAllCards(): Promise<Card[]> {
    const cardEntities = await this.repository.find();
    return cardEntities.map((cardEntity) => cardEntityToCard(cardEntity));
  }

  async deleteCard(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
