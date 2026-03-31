class LoginController{
    async Login(req,res){
        res.render('admin/login',{
            title:'Login',
        })
    }
}

module.exports = new LoginController()