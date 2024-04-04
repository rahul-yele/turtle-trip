import { Heart, Image } from "lucide-react";
import styles from "./Card.module.css";

interface StyeleProps {
  className: string;
}

const Card: React.FC<StyeleProps> = ({ className }) => {
  return (
    <div className={`${className} ${styles.mainContainer}`}>
      <div className={styles.container1}>
        <div className={styles.column}>
          <div className={styles.buttonDark}></div>
          <div className={styles.buttonLight}></div>
        </div>
        <Heart fill="red" className={styles.heart} />
      </div>
      <Image className={styles.image} />
      <div className={styles.buttons}>
        <span className={styles.button}>button</span>
        <span className={styles.button}>button</span>
        <span className={styles.button}>button</span>
      </div>
      <div className={styles.container1}>
        <div className={styles.column}>
          <div className={styles.buttonDark}></div>
          <div className={styles.buttonLight}></div>
        </div>
        <div className={styles.largeButton}></div>
      </div>
    </div>
  );
};

export default Card;
