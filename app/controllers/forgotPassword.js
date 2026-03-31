class ForgotPassword{
    async Forgot(req,res){
        res.render('admin/forgot-password',{
            title:'Forgot Password',
        })
    }
}

module.exports = new ForgotPassword()