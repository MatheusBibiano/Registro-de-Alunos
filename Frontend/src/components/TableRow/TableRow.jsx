import { useNavigate } from "react-router-dom";
import { axiosAPI } from "../../services/axios";
import { IoEye, IoPencil, IoTrash } from "react-icons/io5";

import styles from "./TableRow.module.css";

export function TableRow(props) {
  const navigate = useNavigate();

  function storageId(value) {
    /*
     * Cria uma chave no localStorage para
     * armazenar o id do aluno selecionado.
     */
    localStorage.clear();
    localStorage.setItem("id", value);
  }

  function viewStudent() {
    /*
     * Armazena o id do aluno selecionado
     * e navega para a página de visualização.
     */
    storageId(props.data.id);
    navigate("/visualizar-aluno");
  }

  function editStudent() {
    /*
     * Armazena o id do aluno selecionado
     * e navega para a página de edição.
     */
    storageId(props.data.id);
    navigate("/editar-aluno");
  }

  function deleteStudent() {
    /*
     * Faz uma requisição via DELETE
     * para remover o aluno pelo id, em seguida
     * notifica a ação.
     */
    axiosAPI.delete("/delete-student", {
      params: {
        id: props.data.id,
      },
    });
    navigate("/notificacao", { state: "Aluno removido." });
  }

  return (
    <tr>
      <td>
        <img
          src="./assets/images/empty_profile.svg"
          alt="Imagem do estudante"
          className={styles.studentImg}
        />
      </td>
      <td>{props.data.name}</td>
      <td>{props.data.street}</td>
      <td>{props.data.district}</td>
      <td>{props.data.number}</td>
      <td>{props.data.cep}</td>
      <td>
        <button
          id={styles.view}
          className={styles.tableButton}
          title="Visualizar aluno"
          onClick={viewStudent}
        >
          <IoEye className={styles.tableButtonIcon} />
        </button>
        <button
          id={styles.edit}
          className={styles.tableButton}
          title="Editar aluno"
          onClick={editStudent}
        >
          <IoPencil className={styles.tableButtonIcon} />
        </button>
        <button
          id={styles.delete}
          className={styles.tableButton}
          title="Deletar aluno"
          onClick={deleteStudent}
        >
          <IoTrash className={styles.tableButtonIcon} />
        </button>
      </td>
    </tr>
  );
}
