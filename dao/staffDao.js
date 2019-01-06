const staffDb=require("../config/dbConfig");

const staffDao={
    query(){
        return new Promise((resolve, reject) => {
            let sql="select * from employee Join depart";
            staffDb.connect(sql,[],function (err,data) {
                if (err){
                    reject({state:"err",err});
                } else{
                    resolve(data);
                }
            })
        })
    },
    delete(value){
        return new Promise((resolve, reject) => {
            let sql="delete from staff where id=?";
            staffDb.connect(sql,value,function (err,data) {
                if (err) {
                    reject({state:"err",err})
                } else{
                    resolve({state:"ok",info:"删除成功"})
                }
            })
        })
    },
    add(deVal,value11){
        return new Promise((resolve,reject)=>{
            var buMenid;
            // console.log("diyige"+deVal);
            console.log("====+++="+value11);
            var value12=value11;
            // staffDb.connect("insert into depart (depart_id,depart_name,address,managerName) values (default,?,)")
            staffDb.connect("select depart_id from depart where depart_name = ?",[deVal],(err,data)=>{
                console.log("值"+JSON.stringify(data));
                console.log("值"+JSON.stringify(data)[14]);
                buMenid=JSON.stringify(data)[14];//获取到部门ID的值
                console.log("本门"+typeof buMenid);

                let sql="insert into employee (employee_id,employee_name,sex,hotel,tel,position,depart_id) values ('3',?,?,?,?,?,?)";
                console.log("====="+value12);
                console.log("====="+value12[1]);
                // var value13=value12.push(buMenid);
                // console.log("=====+_+_+_+_+_"+value13);
                staffDb.connect(sql,[value12[0],value12[1],value12[2],value12[3],value12[4],buMenid],function (err,data) {
                    if(err){
                        reject(err);
                    }else{
                        resolve(data);
                    }
                })
            });//查询部门表获取部门id
            // let sql="insert into employee (employee_name,sex,hotel,tel,position,depart_id) values (?,?,?,?,?,?)";
            // console.log("====="+value11);
            // let value11=value11.push(buMenid);
            // staffDb.connect(sql,value11,function (err,data) {
            //     if(err){
            //         reject(err);
            //     }else{
            //         resolve(data);
            //     }
            // })
        })
    },
    edit(value){
        console.log(value);
        return new Promise((resolve, reject) => {
            let sql="update employee set employee_name=?,sex=?,tel=?,position=?,hotel=? where employee_id=?";
        // ,apart=?
            staffDb.connect(sql,value,(err,data)=>{
                if (err){
                    reject({state:"err",err})
                } else{
                    resolve({state:"ok",info:"编辑成功"})
                }
            })
        }).catch(new Function());
    },

    myselar(lie_name,value){
    return new Promise((resolve, reject) => {
        // let sql="select * from staff where ?=?";
        let sql="select * from employee where "+lie_name+"=?";
        staffDb.connect(sql,value,function (err,data) {
            if (err){
                reject({state:"err",err});
            } else{
                resolve(data);
            }
        })
    })
}

};
module.exports=staffDao;