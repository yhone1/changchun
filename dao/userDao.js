const con=require("../config/dbConfig");
const userDao={
    query(){
        return new Promise((resolve, reject) => {
            let sql="select * from user";
            con.connect(sql,[],(err,data)=>{
                if (err){
                    reject({state:"err",err})
                } else{
                    resolve({state:"ok",data})
                }
            })

        })
    },
    delete(value){
        return new Promise((resolve, reject) => {
            // console.log("进入Dao层");
            let sql="delete from user where user_id=?";
            con.connect(sql,value,(err,data)=>{
                if (err){
                    reject({state:"err",err})
                } else{
                    resolve({state:"ok",info:"删除成功"})
                }
            })
        })
    },
    search(value){
        console.log("进入Dao层"+value);
        return new Promise((resolve, reject) => {
            let sql="select * from user where username like \"%\"?\"%\"";
            con.connect(sql,value,(err,data)=>{
                if (err){
                    reject({state:"err",err});
                    console.log(err);
                    console.log(sql);
                }else{
                    resolve(data);
                    console.log("ok",data)
                }
            })
        })
    },
    editTel(Params){
        return new Promise(resolve => {
            let sql="update account set tel=? where account_id=?"
            let arr=[Params.newTel,Params.account_id];
            con.connect(sql,arr,(err,result)=>{
                if(err){
                    console.log(err);
                    resolve({status:"err",state:0,msg:err});
                }else {
                    resolve({status:"ok",state:1,msg:result});
                }
            })
        })
    },
    editPassword(Params){
        return new Promise(resolve => {
            let sql="update account set password=? where account_id=?"
            let arr=[Params.newPassword,Params.account_id];
            con.connect(sql,arr,(err,result)=>{
                if(err){
                    console.log(err);
                    resolve({status:"err",state:0,msg:err});
                }else {
                    resolve({status:"ok",state:1,msg:result});
                }
            })
        })
    },
    queryUserPassword(Params){
        return new Promise(resolve => {
            let sql="select *from account where account_id=?";
            con.connect(sql,[Params],(err,result)=>{
                if(err){
                    console.log(err);
                    resolve({status:"err",state:0,msg:err});
                }else {
                    resolve({status:"ok",state:1,data:result[0].password});
                }
            })
        })
    }
};
module.exports=userDao;