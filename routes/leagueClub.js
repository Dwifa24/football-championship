const { Router } = require("express");
const leagueClubRoutes = Router()
const { LeagueClubController } = require ("../controllers")

leagueClubRoutes.get("/", LeagueClubController.getLC)
leagueClubRoutes.post("/create", LeagueClubController.create)
//leagueClubRoutes.get("/create", LeagueClubController.createPage)
leagueClubRoutes.post("/update/:id", LeagueClubController.update)

module.exports = leagueClubRoutes