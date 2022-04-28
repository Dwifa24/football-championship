const { Router } = require("express")
const clubRoutes = Router()
const { ClubController} = require("../controllers")

clubRoutes.get('/', ClubController.getClub)
clubRoutes.post('/create', ClubController.create)
clubRoutes.get('/create', ClubController.createPage)
clubRoutes.post('/update/:id', ClubController.update)
clubRoutes.get('/update/:id', ClubController.updatePage)
clubRoutes.get('/delete/:id', ClubController.delete)
clubRoutes.get('/league/:id', ClubController.getLeague);
clubRoutes.post('/league/create', ClubController.addLeague);
clubRoutes.get('/league/create', ClubController.addLeaguePage);

module.exports = clubRoutes