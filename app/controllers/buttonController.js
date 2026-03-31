class ButtonController{
    async Button(req,res){
        res.render('admin/buttons',{
            title:'button',
        })
    }
}

module.exports = new ButtonController()