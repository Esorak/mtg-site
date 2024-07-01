import Card from "./Card"; // Assurez-vous que le chemin d'importation est correct

describe("Card", () => {
  let card: Card;

  beforeEach(() => {
    card = new Card(
      "1",
      "CardName",
      "Subtype",
      "Type",
      3,
      2,
      2,
      "ArtURL",
      "Description",
      "Rare",
      "SetName",
      "123",
      "Flavor text",
      "ArtistName",
      ["Red"],
      "3R",
      ["Flying"],
      "Expansion",
      5,
    );
  });

  test("should create a card with correct attributes", () => {
    expect(card.getId()).toBe("1");
    expect(card.getName()).toBe("CardName");
    expect(card.getSubtype()).toBe("Subtype");
    expect(card.getType()).toBe("Type");
    expect(card.getCost()).toBe(3);
    expect(card.getPower()).toBe(2);
    expect(card.getDefense()).toBe(2);
    expect(card.getArt()).toBe("ArtURL");
    expect(card.getDescription()).toBe("Description");
    expect(card.getRarity()).toBe("Rare");
    expect(card.getSetsName()).toBe("SetName");
    expect(card.getCollectorNumber()).toBe("123");
    expect(card.getFlavorText()).toBe("Flavor text");
    expect(card.getArtist()).toBe("ArtistName");
    expect(card.getColor()).toEqual(["Red"]);
    expect(card.getManaCost()).toBe("3R");
    expect(card.getKeywords()).toEqual(["Flying"]);
    expect(card.getExpansion()).toBe("Expansion");
    expect(card.getLoyalty()).toBe(5);
  });

  test("should set and get id correctly", () => {
    card.setId("2");
    expect(card.getId()).toBe("2");
  });

  test("should set and get name correctly", () => {
    card.setName("NewCardName");
    expect(card.getName()).toBe("NewCardName");
  });

  // Ajoutez d'autres tests pour les autres méthodes getter et setter

  test("should set and get loyalty correctly", () => {
    card.setLoyalty(7);
    expect(card.getLoyalty()).toBe(7);
  });

  test("should set and get color correctly", () => {
    card.setColor(["Blue"]);
    expect(card.getColor()).toEqual(["Blue"]);
  });
});
