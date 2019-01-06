//数据连接

const amDb=require('../config/dbConfig');
const apartmentDao={
    handleApart(){
        return new Promise((resolve, reject) => {
            let sql="select * from depart";
            amDb.connect(sql,[],function (err,data) {
                if(err){
                    console.log(data+"错误的");
                    reject({state:"err",err});
                }else {
                    console.log(data+"正确的");
                    resolve(data);
                }
            })
        }).catch(new Function());

    },
    AddApart(value){
        console.log(value);
        return new Promise((resolve, reject) => {
            console.log("123456789");
            let sql="insert into depart (depart_id,depart_name,address,managerName) values(default,?,?,?)";
            amDb.connect(sql,value,function (err,data) {
                if (err){
                    reject(err);
                } else{
                    resolve({state:"ok",info:"添加成功"})
                }
            })
        })

    },
    delApart(value){
        // console.log(value);
        return new Promise((resolve, reject) => {
            let sql="delete from depart where depart_id=?";
            amDb.connect(sql,value,(err,data)=> {
                if (err){
                    reject({state:"err",err});
                } else{
                    resolve({state:"ok",info:"删除成功"});
                }
            })
        })

    },
    rewriteApart(value){
        return new Promise((resolve, reject) => {
            let sql="update depart set depart_name=?,managerName=? where depart_id=?";
            amDb.connect(sql,value,(err,data)=>{
                if (err){
                    reject({state:"err",err});
                } else{
                    resolve({state:"ok",info:"更新成功"});
                }
            })
        })

    }
};

module.exports=apartmentDao;