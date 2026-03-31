class ChartsController{
    async Charts(req,res){
        res.render('admin/charts',{
            title:'Charts',
        })
    }
}

module.exports = new ChartsController()