import { useEffect, useState } from "react";
import { axiosAPI } from "../../services/axios";
import { Link } from "react-router-dom";
import { Table } from "../Table/Table";
import { IoAdd } from "react-icons/io5";

import styles from "./Register.module.css";

export function Register() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axiosAPI.get("/update-table").then(({ data }) => {
      setStudents(data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lista de Alunos</h2>
      <Link to="/novo-aluno" className="Button" style={{ margin: "2rem 5rem" }}>
        <IoAdd className={styles.addStudentIcon} />
        Novo aluno
      </Link>

      {students.length === 0 ? (
        <span className={styles.messageRegisterEmpty}>Não há registros</span>
      ) : (
        <Table rows={students} />
      )}
    </div>
  );
}
