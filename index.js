const express = require('express');
const exphbs  = require('express-handlebars');
const listArticles = require('./articles.js');
const app = express();
const port = 3333;

const viewDirectory = "views";

const helpers = [];

const hbs = exphbs.create({
  extname: ".hbs",
  partialsDir: `${viewDirectory}/partials/`,
  defaultLayout: "base",
  helpers,
  compilerOptions: {
    preventIndent: true,
  },
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

app.use(express.static('public'))
app.get('/', listArticles);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
