import { MapPin, Search } from "lucide-react";
import styles from "./Searchbar.module.css";

interface Props {
  getData: () => void;
  setLoading: (val: boolean) => void
}


export default function Searchbar({ getData, setLoading }: Props) {

  function handleKeyDown(event: any) {
    if (event.key === 'Enter') {
      setLoading(true)
      getData()
    }
  }

  function handleClick() {
    setLoading(true)
    getData()
  }

  return (
    <div className={styles.searchBar}>
      <MapPin className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search flights"
        className={styles.searchInput}
        onKeyDown={handleKeyDown}
      />
      <Search className={styles.clearIcon} onClick={handleClick} />
    </div>
  );
}
