"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from "react";

// Definition of Card interface
interface CardInt {
  id: string;
  name: string;
  subtype: string;
  type: string;
  cost: number;
  power: number;
  defense: number;
  art: string;
  description: string;
  rarity: string;
  setName: string;
  collectorNumber: string;
  flavorText: string;
  artist: string;
  color: string[];
  manaCost: string;
  loyalty?: number; // Optional, for planeswalkers
  keywords: string[];
  expansion: string;
  legality: string[];
  multiverseId: number;
}
// Creation of context
const CardContext = createContext<CardContextType | undefined>(undefined);

// Type for context value
interface CardContextType {
  cards: CardInt[];
  addCard: (card: CardInt) => void;
  removeCard: (id: string) => void;
}

// Custom hook to use Card context
export const useCard = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCard must be used within a CardProvider");
  }
  return context;
};

// Provider component
export function CardProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<CardInt[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      const entered = "olivia voldaren";
      try {
        let response = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${entered}&lang=fr`);

        if (!response.ok) {
          console.log("Fetching in French failed, trying in English...");
          response = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${entered}&lang=en`);
        }
        if (response.ok) {
          const data = await response.json();
          setCards(data);
          console.log(data);
        } else {
          console.error("Failed to fetch cards in both French and English");
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  const addCard = async (card: CardInt) => {
    try {
      const response = await fetch("http://localhost:3000/api/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(card),
      });
      if (response.ok) {
        const newCard = await response.json();
        setCards((prevCards) => [...prevCards, newCard]);
      } else {
        console.error("Failed to add card");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const removeCard = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/cards`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
      } else {
        console.error("Failed to delete card");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return <CardContext.Provider value={{ cards, addCard, removeCard }}>{children}</CardContext.Provider>;
}
