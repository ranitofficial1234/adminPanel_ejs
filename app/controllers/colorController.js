class ColorController{
    async Color(req,res){
        res.render('admin/utilities-color',{
            title:'utilities-color',
        })
    }
}

module.exports = new ColorController()