const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;

const cors = require('cors');

const bodyParser = require("body-parser");


let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));


const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "bbs",
});

app.get("/list", (req, res) => {
  const sqlQuery = "SELECT BOARD_ID, BOARD_TITLE, REGISTER_ID, DATE_FORMAT(REGISTER_DATE, '%Y-%m-%d') AS REGISTER_DATE FROM BOARD;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});


app.get("/", (req, res) => {
  const sqlQuery = "INSERT INTO requested (rowno) VALUES (1)";
  db.query(sqlQuery, (err, result) => {
    res.send("success!");
  });
});


app.post("/insert", (req, res) => {
  var title = req.body.title;
  var content = req.body.content;

  const sqlQuery =
    "insert into BOARD(BOARD_TITLE, BOARD_CONTENT, REGISTER_ID) values(?, ?,'artistJay');";
  db.query(sqlQuery, [title, content], (err, result) => {
    res.send(result);
  });
});

app.post("/update", (req, res) => {
  var title = req.body.title;
  var content = req.body.content;
  var id = req.body.id;

  const sqlQuery =
    "UPDATE BOARD SET BOARD_TITLE = ?, BOARD_CONTENT = ? WHERE BOARD_ID = ?;";
  db.query(sqlQuery, [title, content,id], (err, result) => {
    res.send(result);
  });
});

app.post("/delete", (req, res) => {
  const id = req.body.boardIdList; // 6,5

  const sqlQuery = `DELETE FROM BOARD WHERE BOARD_ID IN (${id})`;
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});



app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
