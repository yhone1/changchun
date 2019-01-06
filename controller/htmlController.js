const htmlController={
    getIndex(req,res) {
        res.render("home");
},
    postInfo(req,res){

    },
    getUser(req,res){
        if(!req.session.user){
           res.render("login");
        }else {
            res.render("user1/user",req.session.user);
        }
    },
    getHtml(req,res,next){

        if(req){
            console.log("url****************************************************");
            console.log(req.originalUrl);
            next();
            return 0;
        }
        return 0;

    }
}
module.exports.htmlController=htmlController;