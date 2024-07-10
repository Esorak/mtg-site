import CardDTO from "@/core/aggregates/card/CardDTO";
import Deck from "@/core/aggregates/deck/Deck";
import { Connection, Repository } from "typeorm";
import DeckEntity from "../entities/DeckEntity";
import DeckRepository from "./DeckRepository";

jest.mock("typeorm", () => {
  return {
    Repository: jest.fn().mockImplementation(() => ({
      save: jest.fn(),
      findOne: jest.fn(),
    })),
    getConnection: jest.fn().mockImplementation(() => ({
      getRepository: jest.fn().mockReturnValue(new Repository<DeckEntity>()),
    })),
  };
});

describe("DeckRepository", () => {
  let deckRepository: DeckRepository;
  let connection: Connection;
  let deckEntityRepository: Repository<DeckEntity>;

  beforeEach(() => {
    connection = new Connection();
    deckRepository = new DeckRepository(connection);
    deckEntityRepository = connection.getRepository(DeckEntity);
  });

  it("should save a deck", async () => {
    const deck = new Deck("deck123", "Sample Deck");
    deckEntityRepository.save = jest.fn().mockResolvedValue({});

    await deckRepository.saveDeck(deck);

    expect(deckEntityRepository.save).toHaveBeenCalledWith(
      expect.objectContaining({
        id: "deck123",
        name: "Sample Deck",
      }),
    );
  });

  it("should add a card to a deck", async () => {
    const deckId = "deck123";
    const card = new CardDTO({
      id: "card1",
      name: "Card One",
      description: "First card description",
      color: ["Red"],
      type: "Creature",
      subtype: "Warrior",
      power: 3,
      defense: 2,
      art: "Card Art",
      rarity: "Rare",
      setsName: "Set Name",
      collectorNumber: "123",
      flavorText: "First card flavor text",
      artist: "Artist Name",
      manaCost: "{1}{R}{R}",
      loyalty: null,
      keywords: ["Haste"],
      expansion: "Expansion 1",
    });

    const existingDeck = new DeckEntity();
    existingDeck.id = deckId;
    existingDeck.cards = [];

    deckEntityRepository.findOne = jest.fn().mockResolvedValue(existingDeck);
    deckEntityRepository.save = jest.fn().mockResolvedValue({});

    await deckRepository.AddCardToDeck(deckId, card);

    expect(deckEntityRepository.findOne).toHaveBeenCalledWith({
      where: { id: deckId },
      relations: ["cards"],
    });
    expect(deckEntityRepository.save).toHaveBeenCalledWith(
      expect.objectContaining({
        id: "deck123",
        cards: [
          expect.objectContaining({
            id: "card1",
            name: "Card One",
          }),
        ],
      }),
    );
  });
});
