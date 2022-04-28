const { player, club } = require('../models');

class PlayerController {
    static async getPlayer (req, res) {
        try {
            let players = await
            player.findAll({
                include: [club],
                order: [ 
                    ['name', 'asc']
                ] 
            })
            res.render("./player/page.ejs", {players})
        } catch(err){
            res.json(err)
        }
    }

    static async create (req, res){
        try{
            const {back_number, name, nationality, position, born, height, image, clubId} = req.body;
            let result = await player.create({
                back_number, name, nationality, position, born, height, image, clubId
            })
            res.redirect("/players")
        } catch(err){
            res.json(err)
        }
    }
    static async createPage (req, res){
        res.render("./player/add.ejs")
    }

    static async update(req, res) {
        try {
            const id = Number(req.params.id);
            const { back_number, name, nationality, position, born, height, image, clubId } = req.body

            let resultLeague = await player.update({
                back_number, name, nationality, position,born, height, image,clubId
            }, {
                where: { id }
            })
            res.redirect("/players")
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

            let result = await player.findOne({
                where:{id}
            }) 
        res.render("./player/edit.ejs",{ result })
        } catch (err) {
            res.json(err)
        }
    }
    static async delete(req, res) {
        try {
            const id = +req.params.id

            let result = await player.destroy({
                where: { id }
            })
            res.redirect("/players")
        } catch (err) {
            res.json(err)
        }
    }
}
module.exports = PlayerController