import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { axiosAPI } from "../../services/axios";
import { showUploadImage } from "../../scripts/showUploadImage";
import { isInputValid } from "../../scripts/isInputValid";

import styles from "./FormAddStudent.module.css";

export function FormAddStudent() {
  const [filename, setFilename] = useState(String());
  const [name, setName] = useState(String());
  const [street, setStreet] = useState(String());
  const [district, setDistrict] = useState(String());
  const [number, setNumber] = useState(Number());
  const [cep, setCEP] = useState(String());
  const navigate = useNavigate();

  function createNewStudent(event) {
    /*
     * Verifica os inputs e adiciona um novo aluno.
     */
    event.preventDefault();

    const inputs = [filename, name, street, district, number, cep];

    if (isInputValid(inputs)) {
      axiosAPI.post("/add-student", {
        filename: filename.trim(),
        name: name.trim(),
        street: street.trim(),
        district: district.trim(),
        number,
        cep: cep.trim(),
      });

      navigate("/notificacao", { state: "Aluno adicionado." });
    } else {
      alert("Preencha todos os campos.");
    }
  }

  return (
    <form className={styles.container} encType="multipart/form-data">
      <h2 className={styles.title}>adicionar aluno</h2>
      <fieldset className={styles.identityField}>
        <div className={styles.imgContainer}>
          <img
            src="./assets/images/empty_profile.svg"
            alt="Pré-visualisar imagem"
            className={styles.previewImg}
          />
          <div className={styles.imgSelectorContianer}>
            <input
              id="file"
              type="file"
              name="file"
              accept="image/jpeg"
              data-max-size="2097152"
              className={styles.imgSelector}
              onChange={(event) => {
                setFilename(nanoid());
                showUploadImage();
              }}
              required
            />
            Selecionar imagem
          </div>
        </div>

        <div
          className={styles.inputContainer}
          style={{ alignSelf: "flex-end" }}
        >
          <label htmlFor="name" className={styles.typedInputLabel}>
            Nome do estudante
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            className={styles.typedInput}
            required
          />
        </div>
      </fieldset>

      <fieldset className={styles.addressField}>
        <div className={styles.inputContainer}>
          <label htmlFor="street" className={styles.typedInputLabel}>
            Rua
          </label>
          <input
            id="street"
            type="text"
            name="street"
            value={street}
            onChange={(event) => {
              setStreet(event.target.value);
            }}
            className={styles.typedInput}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="district" className={styles.typedInputLabel}>
            Bairro
          </label>
          <input
            id="district"
            type="text"
            name="district"
            value={district}
            onChange={(event) => {
              setDistrict(event.target.value);
            }}
            className={styles.typedInput}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="number" className={styles.typedInputLabel}>
            Número
          </label>
          <input
            id="number"
            type="number"
            name="number"
            value={number}
            onChange={(event) => {
              setNumber(event.target.value);
            }}
            className={styles.typedInput}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="cep" className={styles.typedInputLabel}>
            CEP
          </label>
          <input
            id="cep"
            type="text"
            name="cep"
            value={cep}
            onChange={(event) => {
              setCEP(event.target.value);
            }}
            className={styles.typedInput}
            placeholder="00.000-000"
            required
          />
        </div>
      </fieldset>

      <button type="submit" className="Button" onClick={createNewStudent}>
        Salvar
      </button>
    </form>
  );
}
