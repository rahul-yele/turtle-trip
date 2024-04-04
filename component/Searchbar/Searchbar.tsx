import { MapPin, Search } from "lucide-react";
import styles from "./Searchbar.module.css";

export default function Searchbar() {
  return (
    <div className={styles.searchBar}>
      <MapPin className={styles.searchIcon} />
      <input
        type="text"
        placeholder="I would like to travel to NYC for a weekend for under $500"
        className={styles.searchInput}
      />
      <Search className={styles.clearIcon} />
    </div>
  );
}
