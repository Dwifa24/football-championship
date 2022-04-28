const { league, club, leagueClub } = require('../models');

class LeagueController {
    static async getLeague (req, res) {
        try {
            let leagues = await
            league.findAll({
                order: [
                    ['name', 'asc']
                ]
            })
            res.render("./league/page.ejs", {leagues})
        } catch(err){
            res.json(err)
        }
    }

    static async create (req, res){
        try{
            const {name, founded, level, description, image, country} = req.body;
            let result = await league.create({
                name, founded, level, description, image,country
            })
            res.redirect("/leagues")
        } catch(err){
            res.json(err)
        }
    }
    static async createPage (req, res){
        res.render("./league/add.ejs")
    }

    static async update(req, res) {
        try {
            const id = Number(req.params.id);
            const { name, founded, level, description, image, country } = req.body

            let resultLeague = await league.update({
                name, founded, level, description, image,country
            }, {
                where: { id }
            })
            res.redirect("/leagues")
           // resultLeague[0] === 1 ?
            //    res.json({
            //        message: `League id ${id} has been updated!`
            //    }) :
            //    res.json({
            //       message: `League ${id} not found!`
            //    })
        } catch (err) {
            res.json(err)
        }
    }

    static async updatePage (req, res){
        try{
            const id= +req.params.id

            let result = await league.findOne({
                where:{id}
            }) 
        res.render("./league/edit.ejs",{ result })
        } catch (err) {
            res.json(err)
        }
    }
    static async delete(req, res) {
        try {
            const id = Number(req.params.id)

            let result = await league.destroy({
                where: { id }
            })
            let resultlc = await leagueClub.destroy({
               where: { leagueId:id }
            })

            res.redirect("/leagues")
        } catch (err) {
            res.json(err)
        }
    }
    
    static async getClub(req, res) {
        try{
            const id = +req.params.id

            let result = await leagueClub.findAll({
                where: {
                    leagueId: id
                },
                include: [league, club]
            })
            let resultLC = {}
            let clubs = []

            if (result.length === 0) {
                result = await league.findByPk(id)
                resultLC = {
                    ...result.dataValues,clubs
                }
            } else {
                clubs = result. map (cl => {
                    return cl.club.dataValues
                })
                resultLC = {
                    ...result[0].league.dataValues, clubs
                }
            }
            res.render("./league/detail.ejs",{ leagueClub: resultLC })
        } catch(err){
            res.json(err)
        }
    }
    static async addClub (req, res) {
        try{
            const { leagueId, clubId} = req.body;
            let result = await leagueClub.create({
                leagueId , clubId
            })
            res.redirect("/leagues")
        } catch(err){
            res.json(err)
        }
    }
    static async addClubPage (req, res) {
        const id = +req.params.id
        res.render("./league/club.ejs", {leagueClub:result})
    }
    static async deleteClub(req, res) {
        try {
            const id = +req.params.id

            let result = await leagueClub.destroy({
                where: { leagueId:id }
            })

            res.redirect("/leagues")
        } catch (err) {
            res.json(err)
        }
    }
}

module.exports = LeagueController