import Button from "./Button";
import styles from "./Header.module.scss";

export default function Header() {
  console.log("ici");
  return (
    <header className={styles.header}>
      <Button name="Found Cards" href="/mtg/box/search"></Button>
      <Button name="Inventory" href="/mtg/inventory"></Button>
      <Button name="Decks" href="/mtg/box/deck"></Button>
      <Button name="Draft" href="/draft"></Button>
    </header>
  );
}
