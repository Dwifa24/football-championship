const { Router } = require("express");
const leagueRoutes = Router();
const { LeagueController} = require ("../controllers")

leagueRoutes.get("/", LeagueController.getLeague);
leagueRoutes.post("/create", LeagueController.create);
leagueRoutes.get("/create", LeagueController.createPage);
leagueRoutes.post("/update/:id", LeagueController.update);
leagueRoutes.get("/update/:id", LeagueController.updatePage);
leagueRoutes.get("/delete/:id", LeagueController.delete);
leagueRoutes.get("/club/:id", LeagueController.getClub);
leagueRoutes.post("/club/create", LeagueController.addClub);
leagueRoutes.get("/club/create/:id", LeagueController.addClubPage);
leagueRoutes.get("/club/delete/:id", LeagueController.deleteClub);


module.exports = leagueRoutes