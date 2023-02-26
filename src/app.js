const express = require("express");
const hbs = require("hbs")
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

// console.log(path.join(__dirname,"../public"));
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")

app.set("view engine", "hbs");
app.set("views",templates_path)
hbs.registerPartials(partials_path)

app.use(express.static(static_path));

app.get("/", (req, res) => {
  // res.send("Welcome to Satya");
  res.render("index")
});
app.get("/about", (req, res) => {
  // res.send("Welcome to Satya about");
  res.render('about')
});
app.get("/weather", (req, res) => {
  // res.send("Welcome to Satya weather");
  res.render('weather')
});
app.get("*", (req, res) => {
  // res.send("Thi is Error/Page not Found");
  res.render('404error',{
    errorMsg:"Oops! Page Not Found",
  })
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
