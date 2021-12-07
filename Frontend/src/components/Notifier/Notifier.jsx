import { useNavigate, useLocation } from "react-router-dom";

import styles from "./Notifier.module.css";

export function Notifier() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.card}>
        <h2 className={styles.message}>{state}</h2>
        <button
          className="Button"
          onClick={() => {
            navigate("/registro");
          }}
        >ok</button>
      </div>
    </div>
  );
}
