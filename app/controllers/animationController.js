class AnimationController{
    async Animation(req,res){
        res.render('admin/utilities-animation',{
            title:'animation',
        })
    }
}

module.exports = new AnimationController()