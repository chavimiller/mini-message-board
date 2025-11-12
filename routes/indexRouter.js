const { Router } = require("express");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Message Board", messages: messages })
);

module.exports = indexRouter;
