const { club, league, leagueClub } = require('../models')

class ClubController {
    static async getClub (req, res) {
        try {
            let clubs = await 
            club.findAll({
                order: [
                    ['name', 'asc']
                ]
            })
            res.render('./club/page.ejs', {clubs})
        } catch(err){
            res.json(err)
        }
    }

    static async create (req, res) {
        try{
            const { name, founded, manager, stadium, image, country  } = req.body;
            let result = await club.create({
                name, founded, manager, stadium, image, country
            })
            res.redirect("/clubs")
        } catch(err){
            res.json(err)
        }
    }
    static async createPage (req, res){
        res.render("./club/add.ejs")
    }
    static async update (req, res) {
        try {
            const id = Number(req.params.id)
            const { name, founded, manager, stadium, image, country } = req.body

            let resultClub = await
            club.update({
                name, founded, manager, stadium, image, country
            }, {
                where: { id }
            })

            res.redirect("/clubs")
        } catch (err) {
            res.json(err)
        }
    }
    static async updatePage (req, res){
        try{
            const id= +req.params.id

            let result = await club.findOne({
                where:{id}
            }) 
        res.render("./club/edit.ejs",{ result })
        } catch (err) {
            res.json(err)
        }
    }
    static async delete(req, res) {
        try {
            const id = Number(req.params.id)

            let result = await club.destroy({
                where: { id }
            })
            let resultlc = await leagueClub.destroy({
               where: { clubeId:id }
            })

            res.redirect("/clubs")
        } catch (err) {
            res.json(err)
        }
    }
    static async getLeague(req, res) {
        try{
            const id = +req.params.id

            let result = await leagueClub.findAll({
                where: {
                    clubId: id
                },
                include: [league, club]
            })
            let resultLC = {}
            let leagues = []

            if (result.length === 0 ) {
                result = await club.findByPk(id)
                resultLC = {
                    ...result.dataValues,leagues
                }
            } else {
                leagues = result. map (cl => {
                    return cl.league.dataValues
                })
                resultLC = {
                    ...result[0].club.dataValues, leagues
                }
            }
            res.render("./club/detail.ejs",{ leagueClub: resultLC })
        } catch(err){
            res.json(err)
        }
    }
    static async addLeague (req, res) {
        try{
            const { leagueId, clubId} = req.body;
            let result = await leagueClub.create({
                leagueId , clubId
            })
            res.redirect("/clubs")
        } catch(err){
            res.json(err)
        }
    }
    static async addLeaguePage (req, res) {
        //const id = +req.params.id
        res.render("./club/league.ejs", {leagueClub:result})
    }
    static async deleteLeague(req, res) {
        try {
            const id = +req.params.id

            let result = await leagueClub.destroy({
                where: { clubId:id }
            })

            res.redirect("/clubs")
        } catch (err) {
            res.json(err)
        }
    }
    
}



module.exports = ClubController