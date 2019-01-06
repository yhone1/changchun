const Model=require("../dao/dao");

const dbController={
    postLogin(req,res) {
        Model.Login(req,function(results) {
           //正确，进入主页
            if(results!="error"&&results!="404"){
                if(!req.session.user){
                    req.session.user=null;
                }
                req.session.user=results;
                if(req.session.preUrl){
                    let str=`
                    <script>
                    window.location.href="${req.session.preUrl}";
                    </script>`;
                    res.send(str);
                }else {
                    res.render("home");
                }
            }
            else {
                // req.seesion.user={};
                // req.seesion.user.account_id=results.account_id;
                res.render("login");
            }
        });
    },
    query(req,res) {
        Model.query(req,[],function (results) {
            res.send(results);
        });

    },
    queryInfo(req,res){
        Model.queryInfo(req,function (results) {
            if(results!="error"){
                req.session.user.user=results;
                res.render("",req.session.user);
            }else {
                res.render("",{err:"error"});
            }
        })
    },
    signIn(req,res){

    }
};

module.exports.dbController=dbController;