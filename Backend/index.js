const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database/connection");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Métodos GET
app.get("/update-table", (req, res) => {
  const sql = "SELECT * FROM student ORDER BY name";

  db.query(sql, (err, result) => {
    res.send(result);
  });
});

app.get("/get-student", (req, res) => {
  const id = req.query.id;
  const sql = `SELECT * FROM student WHERE id="${id}"`;

  db.query(sql, (err, result) => {
    res.send(result);
  });
});

// Métodos POST
app.post("/add-student", (req, res) => {
  const data = [
    req.body.filename,
    req.body.name,
    req.body.street,
    req.body.district,
    req.body.number,
    req.body.cep,
  ];

  const sql =
    "INSERT INTO student (filename, name, street, district, number, cep) VALUES (?,?,?,?,?,?)";

  db.query(sql, data);
});

app.put("/save-changes", (req, res) => {
  const data = [
    req.body.filename,
    req.body.name,
    req.body.street,
    req.body.district,
    req.body.number,
    req.body.cep,
    req.body.id,
  ];

  const sql = `UPDATE student
                 SET filename=?,
                 name=?,
                 street=?,
                 district=?,
                 number=?,
                 cep=?
                 WHERE id=?
    `;

  db.query(sql, data);
});

// Método DELETE
app.delete("/delete-student", (req, res) => {
  const id = req.query.id;
  const sql = "DELETE FROM student WHERE id=?";

  db.query(sql, id);
});

app.listen(3001, () => {
  console.log("running at: http://localhost:3001");
});
