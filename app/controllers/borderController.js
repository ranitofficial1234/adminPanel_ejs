class BorderController{
    async Border(req,res){
        res.render('admin/utilities-border',{
            title:'utilities-border',
        })
    }
}

module.exports = new BorderController()