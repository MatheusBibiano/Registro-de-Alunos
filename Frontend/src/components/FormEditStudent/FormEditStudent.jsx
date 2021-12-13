import { nanoid } from "nanoid";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { axiosAPI } from "../../services/axios";
import { showUploadImage } from "../../scripts/showUploadImage";
import { isInputValid } from "../../scripts/isInputValid";

import styles from "./FormEditStudent.module.css";

export function FormEditStudent() {
  const navigate = useNavigate();
  const [student, setStudent] = useState([]);

  const filename = useRef(String());
  const name = useRef(String());
  const street = useRef(String());
  const district = useRef(String());
  const number = useRef(Number());
  const cep = useRef(String());

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

  student.forEach((data) => {
    filename.current = data.filename;
    name.current = data.name;
    street.current = data.street;
    district.current = data.district;
    number.current = data.number;
    cep.current = data.cep;
  });

  function saveChanges(event) {
    /*
     * Verifica os inputs e salva as
     * alterações feitas nos dados do aluno.
     */
    event.preventDefault();

    const localId = localStorage.getItem("id");
    const inputs = [
      localId,
      filename.current,
      name.current,
      street.current,
      district.current,
      number.current,
      cep.current,
    ];

    if (isInputValid(inputs)) {
      axiosAPI.put("/save-changes", {
        filename: filename.current.trim(),
        name: name.current.trim(),
        street: street.current.trim(),
        district: district.current.trim(),
        number: number.current,
        cep: cep.current.trim(),
        id: localId,
      });

      navigate("/notificacao", { state: "Dados editados." });
    } else {
      alert("Preencha todos os campos.");
    }
  }

  return (
    <form className={styles.container} encType="multipart/form-data">
      <h2 className={styles.title}>editar dados do aluno</h2>
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
                filename.current = nanoid();
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
            defaultValue={name.current}
            onChange={(event) => {
              name.current = event.target.value;
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
            defaultValue={street.current}
            onChange={(event) => {
              street.current = event.target.value;
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
            defaultValue={district.current}
            onChange={(event) => {
              district.current = event.target.value;
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
            defaultValue={number.current}
            onChange={(event) => {
              number.current = event.target.value;
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
            defaultValue={cep.current}
            onChange={(event) => {
              cep.current = event.target.value;
            }}
            className={styles.typedInput}
            required
          />
        </div>
      </fieldset>

      <button type="submit" className="Button" onClick={saveChanges}>
        Salvar alterações
      </button>
    </form>
  );
}
