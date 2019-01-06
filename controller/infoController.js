const SMS = require("../dao/informationPush").SMS;
const Email = require("../dao/informationPush").Email;
const Code = require("../dao/codeController");
const Model =require("../dao/dao");
var user = require("../config/user");
const infoPush={
    sendCode(req,res){
        let tel=req.body.tel;
        let code=parseInt(Math.random()*999999).toString().padStart(6,"0");
        console.log(req.session);
        if(!req.session.Code){
            req.session.Code={};
        }
        req.session.Code.smscode=[];
        Code.addCode(req.session.Code.smscode,code);
        Code.timeoutDeleteCode(req.session.Code.smscode,code);
        SMS.sendSMS(tel,code,function (results) {
           res.send(results);
        });
        console.log("code:");
        console.log(req.session.smscode);
    },
    emailSend(req,res){
        let receivers = req.body.receivers;
        Email.send(receivers,function (results) {
            res.send(results);
        });
    },
    check(req,res){
        if(!req.session.Code){
            req.session.Code={};
        }
      let code=req.body.code;
      let codes=req.session.Code.smscode;
      Code.checkCode(codes,code,function (results) {
          if(results){
              res.send("OK");
          }else {
              res.send("error");
          }
      })
    },
    signCodeCheck(req,res){
        let code=req.body.code;
        let codes=req.session.smscode;
        let flag=false;
        console.log(codes);
        console.log("code:"+code);
        for(let i=0;i<codes.length;i++){
            if(code==codes[i]){
                flag=true;
                break;
            }
        }
        if(flag){
            Model.signIn(req,function (results) {
                res.send(results);
            })
        }
        else {
            res.send("error");
        }
    },
    sendVerify(req,res){
        let receivers=req.body.receivers;
        let u={};
         u.psd=(Math.random()*100).toString();
         u.id=req.session.user.account_id;
         user.emailPsd.push(u);
         Email.sendVerify(receivers,u,function (results) {
             res.send(results);
         })
    },
    checkVerify(req,res){
        let id=req.query.id;
        let psd=req.query.psd;
        let flag=false;
        for(let i=0;user.emailPsd.length;i++){
            if(user.emailPsd[i].id==id && user.emailPsd[i].psd==psd){
                flag=true;
                break;
            }
        }
        if(flag){
            res.render("home");
        }else {
            res.redirect("error")
        }
    },
    FPSendCode(req,res){
        if(!req.session.user){
            req.session.user={};
        }
        if(!req.session.Code){
            req.session.Code={};
        }
        let tel=req.body.tel;
        req.session.user.tel=tel;
        let code=parseInt(Math.random()*999999).toString().padStart(6,"0");
        req.session.Code.FWCode=[];
        Code.addCode(req.session.Code.FWCode,code);
        Code.timeoutDeleteCode(req.session.Code.FWCode,code);
        SMS.sendSMS(tel,code,function (results) {
            res.send(results);
        });
    },
    FPCheckCode(req,res){
        let code = req.body.code;
        Code.checkCode(req.seesion.Code.FWCode,code,function (results) {
            if(results){
                req.session.Code.FWCode=[];
                res.send("OK");
            }else {
                res.send("error");
            }
        })
    }

}
module.exports=infoPush;