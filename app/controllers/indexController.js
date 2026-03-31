class IndexController{
    async Index(req,res){
        res.render('admin/index',{
            title:'dashboard',
        })
    }
}

module.exports = new IndexController()