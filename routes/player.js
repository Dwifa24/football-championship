const { Router } = require("express");
const playerRoutes = Router();
const { PlayerController} = require ("../controllers")

playerRoutes.get("/", PlayerController.getPlayer);
playerRoutes.post("/create", PlayerController.create);
playerRoutes.get("/create", PlayerController.createPage);
playerRoutes.post("/update/:id", PlayerController.update);
playerRoutes.get("/update/:id", PlayerController.updatePage);
playerRoutes.get("/delete/:id", PlayerController.delete);

module.exports = playerRoutes