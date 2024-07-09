import Deck from "@/core/aggregates/deck/Deck";
import { toDeck } from "@/core/converter/ToDeck";
import { Repository } from "typeorm";
import Connection from "../Connection";
import { CardEntity } from "../entities/CardEntity";
import DeckEntity from "../entities/DeckEntity";

export default class DeckRepository {
  private repository: Repository<DeckEntity>;

  constructor(connection: Connection) {
    const dbConnection = connection.getConnection();
    this.repository = dbConnection.getRepository(DeckEntity);
  }

  async saveDeck(deck: Deck): Promise<void> {
    const deckEntity = new DeckEntity();
    deckEntity.id = deck.getId();
    deckEntity.name = deck.getName();
    deckEntity.cards = deck.getCards().map((card) => {
      const cardEntity = new CardEntity();
      cardEntity.id = card.getId();
      cardEntity.name = card.getName();
      cardEntity.description = card.getDescription();
      cardEntity.color = card.getColor();
      cardEntity.type = card.getType();
      cardEntity.subtype = card.getSubtype();
      cardEntity.cost = card.getCost();
      cardEntity.defense = card.getDefense();
      cardEntity.art = card.getArt();
      cardEntity.rarity = card.getRarity();
      cardEntity.setsName = card.getSetsName();
      cardEntity.collectorNumber = card.getCollectorNumber();
      cardEntity.flavorText = card.getFlavorText();
      cardEntity.artist = card.getArtist();
      cardEntity.manaCost = card.getManaCost();
      cardEntity.loyalty = card.getLoyalty();
      cardEntity.keywords = card.getKeywords();
      cardEntity.expansion = card.getExpansion();
      cardEntity.power = card.getPower();
      return cardEntity;
    });
    await this.repository.save(deckEntity);
  }

  async getAllDecks(): Promise<Deck[]> {
    const deckEntities = await this.repository.find({ relations: ["cards"] });
    return deckEntities.map((deckEntity) => toDeck(deckEntity));
  }

  async deleteDeck(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
