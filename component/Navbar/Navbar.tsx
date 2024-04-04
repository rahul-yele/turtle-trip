import { Heart, ShoppingCart, User } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles.navItem}>
          <li>
            <User />
          </li>
          <li>
            <div className={styles.signInAndAccount}>
              <span className={styles.signIn}>Sign in</span>
              <span className={styles.account}>Account</span>
            </div>
          </li>
          <li>
            <Heart className={styles.heart} />
            <span className={styles.likeCount}>0</span>
          </li>
          <li>
            <ShoppingCart className={styles.cart} />
            <span className={styles.cartCount}>0</span>
          </li>
        </ul>
      </div>
    </>
  );
}
