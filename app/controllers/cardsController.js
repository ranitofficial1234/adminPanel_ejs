class CardsController{
    async Cards(req,res){
        res.render('admin/cards',{
            title:'cards',
        })
    }
}

module.exports = new CardsController()