const express = require('express');
const route = express.Router()

route.get('/', (req,res) =>{
    res.render('index.ejs')
})

const leagueRoutes = require('./league')
const clubRoutes = require('./club')
const playerRoutes = require('./player')
const leagueClubRoutes = require('./leagueClub')

route.use('/leagues', leagueRoutes)
route.use('/clubs', clubRoutes)
route.use('/players', playerRoutes)
route.use('/lcs', leagueClubRoutes)

module.exports = route