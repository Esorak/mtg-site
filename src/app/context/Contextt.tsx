"use client";

import Card from "@/core/aggregates/card/Card";
import type { CardDTO } from "@/core/aggregates/card/CardDTO";
import CardFromNet from "@/core/aggregates/cardfromnet/CardFromNet";
import { ReactNode, createContext, useContext, useState } from "react";

interface CardContextType {
  cards: CardFromNet[];
  addCard: (card: CardDTO) => void;
  removeCard: (id: string) => void;
  searchCard: (name: string) => void;
  fetchAllCards: () => void;
  addCardToDeck: (card: CardDTO) => void;
  createDeck: (name: string) => void;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const useCard = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCard must be used within a CardProvider");
  }
  return context;
};

export function CardProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<CardFromNet[]>([]);

  const fetchAllCards = async () => {
    try {
      console.log("Fetching cards...");
      const response = await fetch("/api/magic", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        const cardInstances = data.map((cardDTO: any) => new Card(cardDTO));
        setCards(cardInstances);
      } else {
        console.error("Failed to fetch cards from backend");
      }
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const searchCard = async (name: string) => {
    try {
      let response = await fetch(`https://api.scryfall.com/cards/search?q=${name}&lang=fr`);

      if (!response.ok) {
        console.log("Fetching in French failed, trying in English...");
        response = await fetch(`https://api.scryfall.com/cards/search?q=${name}&lang=en`);
      }
      if (response.ok) {
        const data = await response.json();
        const cardInstances = data.data.map((cardDTO: any) => new CardFromNet(cardDTO));
        setCards(cardInstances);
        console.log(cardInstances);
      } else {
        console.error("Failed to fetch cards in both French and English");
      }
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const addCard = async (card: CardDTO) => {
    try {
      const response = await fetch("/api/magic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(card),
      });
      if (response.ok) {
        const newCard = await response.json();
        const cardInstance = new CardFromNet(newCard);
        setCards((prevCards) => [...prevCards, cardInstance]);
      } else {
        console.error("Failed to add card");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  /**
   *
   * @param id
   */
  const removeCard = async (id: string) => {
    try {
      const response = await fetch(`/api/magic`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        setCards((prevCards) => prevCards.filter((card) => card.getId() !== id));
      } else {
        console.error("Failed to delete card");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  /*
  
  
  */

  const createDeck = async (name: string) => {
    try {
      const response = await fetch(`/api/deck`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      if (response.ok) {
        console.log("Deck created");
      } else {
        console.error("Failed to create deck");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addCardToDeck = async (card: CardDTO) => {
    try {
      const response = await fetch(`/api/deck`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ deckId: "deck123", card }),
      });
      if (response.ok) {
        console.log("Card added to deck");
      } else {
        console.error("Failed to add card to deck");
      }
      console.log("deck123", card);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <CardContext.Provider value={{ cards, addCard, removeCard, searchCard, fetchAllCards, addCardToDeck, createDeck }}>
      {children}
    </CardContext.Provider>
  );
}
