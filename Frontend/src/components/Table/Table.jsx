import { TableRow } from "../TableRow/TableRow";

import styles from "./Table.module.css";

export function Table(props) {
  const rows = props.rows.map((data, index) => (
    <TableRow
      key={index}
      data={{
        id: data.id,
        filename: data.filename,
        name: data.name,
        street: data.street,
        district: data.district,
        number: data.number,
        cep: data.cep,
      }}
    />
  ));

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nome</th>
          <th>Rua</th>
          <th>Bairro</th>
          <th>Número</th>
          <th>CEP</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
