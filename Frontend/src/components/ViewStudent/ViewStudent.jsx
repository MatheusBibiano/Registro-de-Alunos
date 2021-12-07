import { useEffect, useState } from "react";
import { axiosAPI } from "../../services/axios";

import styles from "./ViewStudent.module.css";

export function ViewStudent() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axiosAPI
      .get("/get-student", {
        params: {
          id: localStorage.getItem("id"),
        },
      })
      .then(({ data }) => {
        setStudent(data);
      });
  }, []);

  const rows = student.map((data) => {
    return (
      <>
        <li>
          <strong>Nome:</strong>
          <span>{data.name}</span>
        </li>

        <li>
          <strong>Rua:</strong>
          <span>{data.street}</span>
        </li>

        <li>
          <strong>Bairro:</strong>
          <span>{data.district}</span>
        </li>

        <li>
          <strong>Número:</strong>
          <span>{data.number}</span>
        </li>

        <li>
          <strong>CEP:</strong>
          <span>{data.cep}</span>
        </li>
      </>
    );
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>aluno</h2>
      <article>
        <img
          src="./assets/images/empty_profile.svg"
          alt="Imagem do aluno"
          className={styles.studentPhoto}
        />
        <section className={styles.infoContainer}>
          <ul>{rows}</ul>
        </section>
      </article>
    </div>
  );
}
