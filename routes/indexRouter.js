const { Router } = require("express");

const messages = [];

const indexRouter = Router();

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Message Board", messages: messages })
);

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = indexRouter;
