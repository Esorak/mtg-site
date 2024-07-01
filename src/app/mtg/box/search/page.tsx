// pages/index.tsx

import { CardProvider } from "@/app/context/Contextt";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <div className={styles.pageContainer}>
        <CardProvider>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Enter card name"
              value={undefined}
              onChange={undefined}
              className={styles.searchInput}
            />
            <button onClick={undefined} className={styles.searchButton}>
              Search
            </button>
          </div>
          <div className={styles.resultsContainer}>
            {/* Ajoutez ici la logique pour afficher les résultats de la recherche */}
          </div>
        </CardProvider>
      </div>
    </main>
  );
}
