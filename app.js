const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");

app.use(express.urlencoded({ extended: true }));

const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log("Listening on PORT" + PORT);
});
