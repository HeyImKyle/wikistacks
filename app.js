const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const { db, Page, User } = require("./models");
const wiki = require("./routes/wiki")


app.use("/wiki", wiki)
app.use("/users", require("./routes/users"))
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + "/stylesheets")));

app.get("/", (req, res) => {
  res.redirect(
    "/wiki"
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
