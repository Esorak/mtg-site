import Card from "@/core/aggregates/card/Card";
import type { CardDTO } from "@/core/aggregates/card/CardDTO";
import Deck from "@/core/aggregates/deck/Deck";
import Connection from "@/database/Connection";
import DeckRepository from "@/database/repository/DeckRepository";

import { z } from "zod";

// GET all decks
export async function GET(): Promise<Response> {
  const connection = await Connection.getInstance();
  const repo = new DeckRepository(connection);

  const decks = await repo.getAllDecks();
  return new Response(JSON.stringify(decks));
}

// DELETE a deck
// const deleteSchema = z
//   .object({
//     id: z.string(),
//   })
//   .transform((data) => data.id);

// export async function DELETE(req: Request): Promise<Response> {
//   let id;

//   try {
//     const requestData = await req.json();
//     id = deleteSchema.parse(requestData);
//   } catch (e) {
//     console.error("Invalid data:", e);
//     return new Response(JSON.stringify({ error: "invalid data" }), { status: 400 });
//   }

//   const connection = await Connection.getInstance();
//   const repo = new CardRepository(connection);

//   try {
//     await repo.deleteCard(id);
//     return new Response("ok");
//   } catch (e) {
//     console.error("Error deleting card:", e);
//     return new Response(JSON.stringify({ error: "failed to delete card" }), { status: 500 });
//   }
// }

//card schema
const CardSchema = z.object({
  id: z.string().min(1, "Id cannot be empty"),
  name: z.string().min(1, "Name cannot be empty"),
  description: z.string().optional(),
  color: z.array(z.string()),
  type: z.string().min(1, "Type cannot be empty"),
  subtype: z.string().min(1, "Subtype cannot be empty"),
  cost: z.number().min(0, "Cost cannot be negative"),
  defense: z.number().optional(),
  art: z.string().min(1, "Art cannot be empty"),
  rarity: z.string().min(1, "Rarity cannot be empty"),
  setsName: z.string().optional(),
  collectorNumber: z.string().min(1, "CollectorNumber cannot be empty"),
  flavorText: z.string().optional(),
  artist: z.string().min(1, "Artist cannot be empty"),
  manaCost: z.string().min(1, "ManaCost cannot be empty"),
  loyalty: z.number().optional(),
  keywords: z.array(z.string()).optional(),
  expansion: z.string().min(1, "Expansion cannot be empty"),
  power: z.number().optional(),
});

// POST a new deck
const postSchema = z.object({
  id: z.string().min(1, "Id cannot be empty"),
  name: z.string().min(1, "Name cannot be empty"),
  card: z.array(CardSchema),
});

export async function POST(req: Request): Promise<Response> {
  let data;
  try {
    data = await req.json();
    postSchema.parse(data); // Validation des données
  } catch (e) {
    console.error("Invalid data:", e); // Log de l'erreur
    return new Response(JSON.stringify({ error: "invalid data" }), { status: 400 });
  }

  const newDeck: Deck = new Deck(
    data.id,
    data.name,
    data.card.map((card: CardDTO) => new Card(card)),
  );

  const connection = await Connection.getInstance();
  const repo = new DeckRepository(connection);
  try {
    await repo.saveDeck(newDeck);
    return new Response(JSON.stringify(newDeck));
  } catch (e) {
    console.error("Error saving card to database:", e); // Log de l'erreur d'enregistrement
    return new Response(JSON.stringify({ error: "failed to save deck" }), { status: 500 });
  }
}
