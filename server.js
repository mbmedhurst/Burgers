const express = require("express");
const { join } = require("path");
const { createConnection } = require("mysql2");
const app = express();
const db = createConnection({
  host: "localhost",
  user: "root",
  password: "user1234",
  database: "burgers_db"
});

app.use(express.static(join(_dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine(
  ".hbs",
  require("express-handlebars")({ defaultLayout: "main", extname: ".hbs" })
);
app.set("view engine", ".hbs");
db.connect(_ => app.listen(3000));
