const { Router } = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/new", (req, res) => res.render("form"));

module.exports = newMessageRouter;
