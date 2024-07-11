import Card from "@/core/aggregates/card/Card";
import Deck from "@/core/aggregates/deck/Deck";
import { toCardEntity } from "@/core/converter/toCardEntity";
import { toDeck } from "@/core/converter/ToDeck";
import { Repository } from "typeorm";
import Connection from "../Connection";
import { CardEntity } from "../entities/CardEntity";
import DeckEntity from "../entities/DeckEntity";
import CardRepository from "./CardRepository";

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
    const connection = await Connection.getInstance();
    const repo = new CardRepository(connection);
    const cardEntities: CardEntity[] = [];
    deck.getCards().forEach(async (card) => {
      repo.saveCard(card);
      const cardEntity = toCardEntity(card);
      console.log("card:", card);
      console.log("cardentity:", cardEntity);
      cardEntities.push(cardEntity);
    });
    deckEntity.cards = cardEntities;
    await this.repository.save(deckEntity);
  }

  async AddCardToDeck(deckId: string, card: Card): Promise<void> {
    const deckEntity = await this.repository.findOne({
      where: { id: deckId },
      relations: ["cards"],
    });
    if (deckEntity) {
      const cardEntity = toCardEntity(card);
      deckEntity.cards.push(cardEntity);
      await this.repository.save(deckEntity);
    }
  }

  async getAllDecks(): Promise<Deck[]> {
    const deckEntities = await this.repository.find({ relations: ["cards"] });
    return deckEntities.map((deckEntity) => toDeck(deckEntity));
  }

  async deleteDeck(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async createDeck(name: string): Promise<void> {
    const deck = new Deck("", name);
    await this.saveDeck(deck);
  }
}
