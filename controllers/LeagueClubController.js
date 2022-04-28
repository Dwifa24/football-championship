const { leagueClub, league, club } = require('../models')

class LeagueClubController{
    static async getLC (req, res) {
        try {
            let lcs = await
            leagueClub.findAll({
                include: [league, club]
            })
            res.json(lcs)
        } catch(err){
            res.json(err)
        }
    }

    static async create (req, res) {
        try{
            const { leagueId, clubId} = req.body;
            let result = await leagueClub.create({
                leagueId, clubId
            })
            res.json(result)
        } catch(err){
            res.json(err)
        }
    }
    static async update (req,res){
        try {
            const id = +req.params.id
            const {leagueId, clubId} = req.body

            let resultLc = await
            lc.update({
                leagueId, clubId
            }, {
                where: { id }
            })
            resultLc[0] === 1
            res.json({
                message: 'League Club id ${id} has been updated!'
            }) ;
            res.json({
                message: 'League Club id ${id} not found!'
            })
        } catch (err) {
            res.json(err)
        }
    }
}
module.exports = LeagueClubController