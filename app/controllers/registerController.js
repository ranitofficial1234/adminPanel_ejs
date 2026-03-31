class RegisterController{
    async Register(req,res){
        res.render('admin/register',{
            title:'Register',
        })
    }
}

module.exports = new RegisterController()