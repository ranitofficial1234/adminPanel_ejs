class OtherController{
    async Other(req,res){
        res.render('admin/utilities-other',{
            title:'utilities-other',
        })
    }
}

module.exports = new OtherController()