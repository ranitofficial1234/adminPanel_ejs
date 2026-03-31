class BlankController{
    async Blank(req,res){
        res.render('admin/blank',{
            title:'blank',
        })
    }
}

module.exports = new BlankController()