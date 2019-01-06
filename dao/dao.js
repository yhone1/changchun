const con=require('../config/dbConfig');
const Tools=require("../config/tools");
const Model={
    /*登录*/
    Login (req,callback) {
        let password = req.body.password;
        let account=req.body.account;
        let arr = [];
        arr.push(account);
        arr.push(password);
        console.log(arr);
        let user={};
        let sql="select * from account where tel=? and password=?";
        con.connect(sql,arr,function (err,results) {
            if(err){
                console.log("error");
            }else {
                if(results.length!=0){
                    user.tel=results[0].tel;
                    user.phone=Tools.phone(results[0].tel);
                    let sql="select * from user where account_id=?";
                    let arr=[results[0].account_id];
                        con.connect(sql,arr,function (err,results) {
                            console.log(err);
                            console.log(results);
                            if(results){
                                Object.assign(user,results[0]);
                                callback(user);
                            }

                        });
                    }else {
                        callback("404");
                    }
            }
        });
    },
    /*注册*/
    signIn(req,callback){
        let tel = req.body.tel;
        let password = req.body.password;
        let arr = [];
        arr.push(tel);
        arr.push(password);
        let sql = "insert into  account values (null,?,?)";
        con.connect(sql,arr,function (err,results) {
            console.log(err);
            if(!err && results){
                callback("OK");
            }else {
                callback("error");
            }
        })
    },
    /*查询用户详细信息*/
    queryInfo(req,callback){
        let arr=[req.session.user.account_id];
        let sql = "select * from user where account_id=?";
        con.connect(sql,arr,function (err,results) {
            if(!err && results){
                callback(results[0]);
            }else {
               callback("error");
            }
        })
    },
    /*查找电话是否存在*/
    FWTel(tel,callback){
        let sql="select * from account where tel=?";
        let arr=[tel];
        con.connect(sql,arr,function(err,results){
            if(!err && results.length>0){
                callback("OK");
            }else {
                callback("error");
            }
        })
    },
    /*重置密码*/
    restartPW(tel,password,callback){
        let arr = [password,tel];
        let sql = "update account set password=? where tel=?";
        con.connect(sql,arr,function (err,results) {
            if(!err && results){
                callback("OK");
            }else {
                callback("error")
            }
        })
    },
    /*得到用户*/
    getOrder(id,callback){
        let arr=[id];
        let sql="select * from payorder where user_id=?";
        con.connect(sql,arr,function (err,results) {
           if(!err && results){
               callback(results);
           }
        })
    },
    /*查找用户*/
    findUser(user,callback){
        let arr=[user];
        let sql="select * from user where tel=?";
        con.connect(sql,arr,function (err,results) {
            if(!err && results.length>0){
                callback(results[0]);
            }else {
                callback("error");
            }
        })
    },
    /*修改密码*/
    alterPW(id,newPassword,callback){
        let arr=[newPassword,id];
        let sql="update account set password=? where account_id=?";
        con.connect(sql,arr,function (err,results) {
            if(!err && results){
                callback("OK");
            }else {
                callback("error");
            }
        })
    }
}
module.exports=Model;
