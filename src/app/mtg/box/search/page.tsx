"use client";

import { CardProvider, useCard } from "@/app/context/Contextt";
import type { CardDTO } from "@/core/aggregates/card/CardDTO";
import CardFromNet from "@/core/aggregates/cardfromnet/CardFromNet";
import CardDTOFromNet from "@/core/converter/CardDTOFromNet";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

function SearchPage() {
  const { cards, searchCard, addCard } = useCard();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCard, setSelectedCard] = useState<CardDTO | null>(null);

  useEffect(() => {
    if (cards.length === 0) return;
    console.log(cards);
  }, [cards]);

  const handleSearch = () => {
    searchCard(searchTerm);
  };

  const handleCardClick = (card: CardDTO) => {
    setSelectedCard(card);
  };

  const handleAddCard = async () => {
    if (selectedCard) {
      await addCard(selectedCard);
      setSelectedCard(null);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Enter card name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          Search
        </button>
      </div>
      <div className={styles.resultsContainer}>
        {cards.map((card: CardFromNet) => (
          <div key={card.getId()} className={styles.card} onClick={() => handleCardClick(CardDTOFromNet(card))}>
            {card.getArt() ? <img src={card.getArt()} alt={card.getId()} /> : <p>No image available</p>}
            <h3>{card.getName()}</h3>
          </div>
        ))}
      </div>
      {selectedCard && (
        <div className={styles.dialogOverlay}>
          <div className={styles.dialog}>
            <h2>Add Card</h2>
            <p>Do you want to add this card to the database?</p>
            <div className={styles.dialogButtons}>
              <button onClick={handleAddCard}>Yes</button>
              <button onClick={() => setSelectedCard(null)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <CardProvider>
        <SearchPage />
      </CardProvider>
    </main>
  );
}
