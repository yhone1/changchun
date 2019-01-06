const Model=require("../dao/dao");
const Code=require("../dao/codeController");
const tools=require("../config/tools");
const SMS = require("../dao/informationPush").SMS;
const userDao=require("../dao/userDao");
const User={
    addUser(req,user){
        req.session.user=user;
    },
    exitUser(req,res){
        delete  req.session.user;
        res.send({state:1,status:"ok",msg:"退出登录"})
    },
    FPUser(req,res){
        let user=req.query.user;
        Model.FWTel(user,function (results) {
            if(results==="OK"){
                if(!req.session.Code){
                    req.session.Code={};
                }
                if(!req.session.user){
                    req.session.user={};
                }
                req.session.user.user=user;
                req.session.user.stat=false;
            }
            res.send(results);
        })
    },
    restartPW(req,res){
        let password=req.body.password;
        let tel=req.session.user.tel;

},
    getPersonal(req,res){
        if(req.session.user){
            console.log(req.session.user)
            res.render("user1/personal_info",req.session.user);
        }else {
            res.render("login");
        }

    },
    getSafe(req,res){
        if(req.session.user){
            res.render("user1/safe-center",req.session.user)
        }else {
            res.render("login");
        }
    },
    getOder(req,res){
        if(req.session.user){
            let user_id=req.session.user.user_id;
            Model.getOrder(user_id,function (results) {
                console.log(results);
                req.session.user.order=results;
                console.log(req.session.user.order);
                res.render("user1/order",req.session.user);
            });
        }else {
            res.render("login");
        }

},
    findPW(req,res){
        let user = req.body.user;
        Model.findUser(user,function (results) {
            if(results!="error"){
                console.log(req.session);
                req.session.findPW={
                    sid:0
                };
                req.session.findPW.state=1;
                req.session.findPW.tel=results.tel;
                req.session.findPW.account_id=results.account_id;
                req.session.findPW.phone=tools.phone(results);
                res.send(req.session.findPW.phone);
            }else {
                res.send("error");
            }
        })
    },
    findPWGetCode(req,res){
        if(req.session.findPW.state && req.session.findPW.state==1){
            let code = parseInt(Math.random()*999999).toString().padStart(6,"0");
            if(!req.session.findPW.code){
                req.session.findPW.code=[];
            }
            console.log("进入findPWGetCode");
            SMS.sendSMS(req.session.findPW.tel,code,function (resutls) {
                if(resutls=="OK"){
                    Code.addCode(req.session.findPW.code,code);
                    req.session.findPW.state=2;
                    res.send("OK");
                }else {
                    res.send("error");
                }
            })
        }else {
            res.send("500");
        }

    },
    findPWCheckCode(req,res){
        if(req.session.findPW.state && req.session.findPW.state==2){
            let code=req.body.code;
            Code.checkCode(req.session.findPW.code,code,function (flag) {
                if(flag){
                    req.session.findPW.state=3;
                    res.send("OK");
                }else {
                    res.send("error");
                }
            })
        }else {
            res.send("500");
        }

    },
    findPWNewPW(req,res){
        if(req.session.findPW.state && req.session.findPW.state==3){
            let newPassword=req.body.password;
            Model.alterPW(req.session.findPW.account_id,newPassword,function (results) {
                res.send(results);
            });
        }else {
            res.send("500");
        }
    },
    //查询数据库All
    async queryUser(req,resp){
        let data=await userDao.query();
        resp.send(data.data);
        // console.log(data.data);
    },
    //删除用户
    async deleteUser(req,resp){
        // console.log("进入控制层");
        let myId=req.query.myId;
        // console.log(req);
        let data=await userDao.delete([myId]);
        resp.send(data);
    },
    //按姓名搜索
    async searchUser(req,resp){
        console.log("进入控制层");
        let name=req.query.searchName;
        console.log(name);
        console.log(typeof name);
        let data=await userDao.search([name]);
        // console.log(await userDao.search([name]));
        resp.send(data);
    },
    checkTel(req,res){
        if(req.body.oldTel==req.session.user.tel){
            res.send({status:"ok",state:1})
        }else {
            res.send({status:"err",state:0})
        }
    },
    sendCode(req,res){
        let tel=req.body.newTel;
        console.log(req.session.user)
        if(tel!=req.session.user.tel){
            let code=parseInt(Math.random()*999999).toString().padStart(6,"0");
            console.log(req.session);
            if(!req.session.Code){
                req.session.Code={};
            }
            req.session.Code.smscode=[];
            Code.addCode(req.session.Code.smscode,code);
            Code.timeoutDeleteCode(req.session.Code.smscode,code);
            SMS.sendSMS(tel,code,function (results) {
                console.log(results);
                if(results==="OK"){
                    req.session.user.newTel=tel;
                    console.log(req.session.user)
                    res.send({status:"ok",state:1});
                }

            });
            console.log("code:");
            console.log(req.session.smscode);
        }else {
            res.send({status:"err",state:2,msg:"新号码不能是原手机号!"});
        }

    },
    async checkCode(req,res){
        if(!req.session.Code){
            req.session.Code={};
        }
        let code=req.body.code;
        let codes=req.session.Code.smscode;
        if(Code.asyncCheckCode(codes,code)===true){
            let user=req.session.user;
            let result= await userDao.editTel({newTel:user.newTel,account_id:user.account_id});
            if(result.state===1){
                req.session.user.tel=req.session.user.newTel;
                req.session.user.phone=tools.phone(req.session.user.tel);
                res.send({status:"ok",state:1,msg:"验证码验证成功!成功更改手机号"});
            }else {
                res.send({status:"err",state:2,msg:"验证码验证成功!更改手机号失败"});
            }

        }else {
            res.send({status:"err",state:0,msg:"验证码验证失败!"});
        }

    },
    async editPassword(req,res){
        let newPassword=req.body.newPassword;
        let editPassword = await userDao.editPassword({
            newPassword:newPassword,
            account_id:req.session.user.account_id
        });
        if(editPassword.state===1){
            res.send({
                status:"ok",
                state:1,
                msg:"密码修改成功"
            })
        }else {
            res.send({
                status:"err",
                state:0,
                msg:"密码修改失败"
            })
        }
    },
    async checkOldPassword(req,res){
        let oldPassword=req.body.oldPassword;
        let password=await userDao.queryUserPassword(req.session.user.account_id);
        password=password.data;
        if(oldPassword==password){
            res.send({
                state:1,
                status:"ok",
                msg:"密码正确"
            })
        }else {
            res.send({
                state:0,
                status:"err",
                msg:"密码错误"
            })
        }
    }

}
module.exports=User;