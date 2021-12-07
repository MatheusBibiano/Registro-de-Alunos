import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosAPI } from "../../services/axios";
import { showUploadImage } from "../../scripts/showUploadImage";
import { isInputValid } from "../../scripts/isInputValid";

import styles from "./FormEditStudent.module.css";

export function FormEditStudent() {
  const navigate = useNavigate();
  const [student, setStudent] = useState([]);

  const [filename, setFilename] = useState(String());
  const [name, setName] = useState(String());
  const [street, setStreet] = useState(String());
  const [district, setDistrict] = useState(String());
  const [number, setNumber] = useState();
  const [cep, setCEP] = useState(String());

  var pFilename, pName, pStreet, pDistrict, pNumber, pCep;

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
    pFilename = data.filename;
    pName = data.name;
    pStreet = data.street;
    pDistrict = data.district;
    pNumber = data.number;
    pCep = data.cep;
  });

  function saveChanges(event) {
    /*
     * Verifica os inputs e salva as
     * alterações feitas nos dados do aluno.
     */
    event.preventDefault();

    const localId = localStorage.getItem("id");
    const inputs = [localId, filename, name, street, district, number, cep];

    if (isInputValid(inputs)) {
      axiosAPI.post("/save-changes", {
        filename: filename.trim(),
        name: name.trim(),
        street: street.trim(),
        district: district.trim(),
        number: number,
        cep: cep.trim(),
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
                pFilename = nanoid();
                setFilename(pFilename);
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
            placeholder={pName}
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
            onChange={(event) => {
              setStreet(event.target.value);
            }}
            placeholder={pStreet}
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
            onChange={(event) => {
              setDistrict(event.target.value);
            }}
            placeholder={pDistrict}
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
            onChange={(event) => {
              setNumber(event.target.value);
            }}
            placeholder={pNumber}
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
            onChange={(event) => {
              setCEP(event.target.value);
            }}
            placeholder={pCep}
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
