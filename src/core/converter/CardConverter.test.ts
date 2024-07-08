// import Card from "@/core/aggregates/card/Card";
// import { translateCardNetToCard } from "@/core/converter/CardConverter";

// const cardNetDTO = {
//   id: "12345",
//   name: "Mystic Elf",
//   subtype_line: "Elf",
//   type_line: "Creature",
//   cmc: 3,
//   power: "2",
//   toughness: "3",
//   image_uris: { normal: "mystic-elf.jpg" },
//   oracle_text: "A mystical elf with enchanting powers.",
//   rarity: "Rare",
//   set_name: "Elven Enchantments",
//   collector_number: "ELF-001",
//   flavor_text: "Whispers of the forest.",
//   artist: "John Doe",
//   colors: ["Green"],
//   mana_cost: "{1}{G}{G}",
//   keywords: ["Trample", "Reach"],
//   set: "Forest Expansion",
//   loyalty: null,
// };

// const expectedCardDTO = {
//   id: "12345",
//   name: "Mystic Elf",
//   subtype: "Elf",
//   type: "Creature",
//   cost: 3,
//   power: 2,
//   defense: 3,
//   art: "mystic-elf.jpg",
//   description: "A mystical elf with enchanting powers.",
//   rarity: "Rare",
//   setsName: "Elven Enchantments",
//   collectorNumber: "ELF-001",
//   flavorText: "Whispers of the forest.",
//   artist: "John Doe",
//   color: ["Green"],
//   manaCost: "{1}{G}{G}",
//   keywords: ["Trample", "Reach"],
//   expansion: "Forest Expansion",
//   loyalty: undefined,
// };

// describe("translateCardNetToCard", () => {
//   test("translates CardNetDTO to Card correctly", () => {
//     const result = translateCardNetToCard(cardNetDTO);
//     expect(result).toBeInstanceOf(Card);
//     expect(result).toEqual(new Card(expectedCardDTO));
//   });
// });
