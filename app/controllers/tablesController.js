class TablesController{
    async Tables(req,res){
        res.render('admin/tables',{
            title:'tables',
        })
    }
}

module.exports = new TablesController()