const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const { db, Page, User } = require("./models");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + "/stylesheets")));

app.get("/", (req, res, next) => {
  res.send(
    '<link rel="stylesheet" href="/style.css" /><a href="/"><h1>"Hello World"</h1></a>'
  );
});

const PORT = 3000;
const init = async () => {
  // sequelize.sync()
  await db.sync();
  //   await Page.sync();
  //   await User.sync();

  //   await db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();
