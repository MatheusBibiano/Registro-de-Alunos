import { Link } from "react-router-dom";

import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.container}>
      <article className={styles.articleContainer}>
        <h1 className={styles.title}>Plataforma de registro de alunos</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          leo dui, maximus vitae felis eget, viverra luctus felis. Cras enim
          erat, imperdiet ut ipsum id, gravida faucibus mi. Suspendisse potenti.
          Nam porttitor consequat lorem quis egestas. In quis ipsum lobortis,
          maximus augue sed, porta massa. In lobortis purus at ex volutpat
          eleifend. Nullam bibendum et nulla at ullamcorper. Nam laoreet, sem
          non viverra hendrerit, turpis metus iaculis tellus, vel accumsan risus
          ante nec massa.
        </p>
        <Link to="/registro" className="Button">
          registrar alunos
        </Link>
      </article>

      <div className={styles.imgContainer}>
        <img
          src="./assets/images/students.png"
          alt="Estudantes"
          className={styles.homeImg}
        />
      </div>
    </div>
  );
}
