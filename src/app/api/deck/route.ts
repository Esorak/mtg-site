import type { CardDTO } from "@/core/aggregates/card/CardDTO";
import cardDTOtoCard from "@/core/converter/cardDTOToCard";
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

// Schéma de validation pour la création de deck
const postSchema = z.object({
  id: z.string().min(1, "Id cannot be empty"),
  name: z.string().min(1, "Name cannot be empty"),
});

// POST pour créer un nouveau deck
export async function POST(req: Request): Promise<Response> {
  let name;

  try {
    const requestData = await req.json();
    const data = postSchema.parse(requestData);
    name = data.name;
  } catch (e) {
    console.error("Invalid data:", e);
    return new Response(JSON.stringify({ error: "invalid data" }), { status: 400 });
  }

  const connection = await Connection.getInstance();
  const repo = new DeckRepository(connection);

  try {
    await repo.createDeck(name);
    return new Response("ok");
  } catch (e) {
    console.error("Error creating deck:", e);
    return new Response(JSON.stringify({ error: "failed to create deck" }), { status: 500 });
  }
}

// Schéma de validation pour les cartes
const CardSchema = z.object({
  id: z.string().min(1, "Id cannot be empty"),
  name: z.string().min(1, "Name cannot be empty"),
  color: z.array(z.string()),
  type: z.string().min(1, "Type cannot be empty"),
  subtype: z.string().min(1, "Subtype cannot be empty"),
  cost: z.number().min(0, "Cost cannot be negative"),
  defense: z.number().nullable(),
  art: z.string().min(1, "Art cannot be empty"),
  rarity: z.string().min(1, "Rarity cannot be empty"),
  setsName: z.string().nullable(),
  collectorNumber: z.string().min(1, "CollectorNumber cannot be empty"),
  flavorText: z.string().nullable(),
  artist: z.string().min(1, "Artist cannot be empty"),
  manaCost: z.string().min(1, "ManaCost cannot be empty"),
  loyalty: z.number().nullable(),
  keywords: z.array(z.string()).nullable(),
  expansion: z.string().min(1, "Expansion cannot be empty"),
  power: z.number().nullable(),
});

// Schéma de validation pour ajouter une carte à un deck
const addCardToDeckSchema = z.object({
  deckId: z.string().min(1, "Deck ID cannot be empty"),
  card: CardSchema,
});

// PUT pour ajouter une carte à un deck existant
export async function PUT(req: Request): Promise<Response> {
  let deckId;
  let card: CardDTO;

  try {
    const requestData = await req.json();
    const data = addCardToDeckSchema.parse(requestData);
    deckId = data.deckId;
    card = data.card as CardDTO;
  } catch (e) {
    console.error("Invalid data:", e);
    return new Response(JSON.stringify({ error: "invalid data" }), { status: 400 });
  }

  const connection = await Connection.getInstance();
  const repo = new DeckRepository(connection);

  try {
    await repo.AddCardToDeck(deckId, cardDTOtoCard(card));
    return new Response("ok");
  } catch (e) {
    console.error("Error adding card to deck:", e);
    return new Response(JSON.stringify({ error: "failed to add card to deck" }), { status: 500 });
  }
}
