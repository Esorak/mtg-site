"use client";
import { CardProvider, useCard } from "@/app/context/Contextt";
import type CardFromNet from "@/core/aggregates/cardfromnet/CardFromNet";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <CardProvider>
      <CardList />
    </CardProvider>
  );
}

function CardList() {
  const { fetchAllCards, cards } = useCard();
  const [loading, setLoading] = useState(true);
  const { removeCard } = useCard();
  const { addCardToDeck } = useCard();

  const fetchCards = async () => {
    setLoading(true);
    try {
      await fetchAllCards();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleRemoveCard = async (id: string) => {
    console.log("Deleting card with ID:", id);
    try {
      await removeCard(id);
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  const handleAddtoDeck = async (card) => {
    console.log("Adding card with ID:", id, "to deck");
    await addCardToDeck(id);
  };

  return (
    <main>
      <div className={styles.pageContainer}>
        <div className={styles.resultsContainer}>
          {cards.length > 0 ? (
            cards.map((card: CardFromNet) => (
              <div
                key={card.getId()}
                className={styles.card}
                onDoubleClick={() => handleRemoveCard(card.getId())}
                onClick={() => handleAddtoDeck(card)}
              >
                <h2>{card.getName()}</h2>
                {card.getArt() ? <img src={card.getArt()} alt={card.getId()} /> : <p>No image available</p>}
              </div>
            ))
          ) : (
            <div>No cards found</div>
          )}
        </div>
      </div>
    </main>
  );
}
