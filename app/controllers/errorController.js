class ErrorController{
    async Error(req,res){
        res.render('admin/404',{
            title:'not found',
        })
    }
}

module.exports = new ErrorController()