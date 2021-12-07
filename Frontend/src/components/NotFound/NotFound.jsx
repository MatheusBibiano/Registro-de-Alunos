import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.message}>Página não encontrada!</h2>
      <Link to="/" className="Button">
        ir para o início
      </Link>
    </div>
  );
}
