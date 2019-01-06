const con=require('../config/dbConfig');
const manageDao={
    /***
     * start number 起始下标
     * length number 查询数量
     */
    getConsume(start,length){
        return new Promise((resolve, reject) => {
            let sql="";
            let arr=[];
            if(start==undefined || length==undefined){
                 sql="select *from room_consume";
                 arr=[];
            }else {
                sql="select *from room_consume limit ?,?";
                arr=[start,length];
            }
            console.log(sql);
            con.connect(sql,arr,function (err,result) {
                if(err){
                    //查询出错,返回出错信息
                    reject({status:"err",err});
                }else {
                    if(result.length>0){
                        //查询成功，有记录state:1返回记录
                        resolve({status:"ok",state:1,result});
                    }else {
                        //查询成功，无记录，state:0
                        resolve({status:"ok",state:0,result,msg:"无记录"})
                    }

                }
            })
        })
    },
    getAllHotelName(){
        return new Promise((resolve, reject) => {
            let sql="select * from hotel";
            let arr=[];
            con.connect(sql,arr,(err,result)=>{
                if(err){
                    reject(err)
                }else {
                    let hotel={};
                    for (let value of result){
                        hotel[value.hotel_id]=value.hotelname;
                    }
                    resolve(hotel);
                }
            })
        })
    },
    getAllActive(){
        return new Promise((resolve, reject) => {
            let sql="select *from active_consume";
            let arr=[];
            con.connect(sql,arr,(err,result)=>{
                if(err){
                    reject(err);
                }else {
                    let active={};
                    for (let value of result){
                        active[value.active_consume_id]=value.active_consume_name;
                    }
                    resolve(active);
                }
            })
        })
    },
    getConsumeID(room_consume_id){
        return new Promise((resolve, reject) => {
            let sql="select active_consume_id from room_active_consume where room_consume_id=?";
            let arr=[room_consume_id];
            con.connect(sql,arr,(err,result)=>{
                if(err){
                    reject(err);
                }else {
                    let activeConsumeId=[];
                    for (let value of result){
                        activeConsumeId.push(value.active_consume_id);
                    }
                    resolve(activeConsumeId);
                }
            })
        })
    },
    getCountConsume(){
        return new Promise((resolve, reject) => {
            let sql="select count(*) as count from room_consume"
            con.connect(sql,[],(err,result)=>{
                if(err){
                    reject({status:"err",err})
                }else {
                    resolve(result[0].count);
                }
            })
        })
    },
    addConsume(params){
        return new Promise((resolve, reject) => {
            let sql ="insert into room_consume values (?,?,?,?)";
            con.connect(sql,params,(err,result)=>{
                if(err){
                    reject({status:"err",err});
                }else {
                    resolve({status:"ok",state:1});
                }
            })
        })
    },
    addConsumeActive(consume_id,active_id){
        return new Promise((resolve, reject) => {
            let sql= "insert into (room_consume_id,active_consume_id)" +
                "values (?,?)";
            con.connect(sql,[consume_id,active_id],(err,result)=>{
                if(err){
                    console.log(err);
                    reject({status:"err",state:0,msg:err});
                }else {
                    resolve({status:"ok",state:1,msg:result})
                }
            })
        })
    },
    queryConsumeMaxId(){
        return new Promise((resolve, reject) => {
            let sql="select max(room_consume_id) as id from room_consume";
            con.connect(sql,[],(err,result)=>{
                if(err){
                    console.log(err);
                    reject({status:"err",state:0,err})
                }else {
                    resolve(result[0].id);
                }
            })
        })
    },
    //删除套餐表指定记录
    deleteConsume(consume_id){
        return new Promise((resolve, reject) => {
            let sql="delete from room_consume where room_consume_id=?";
            con.connect(sql,[consume_id],(err,result)=>{
                if(err){
                    console.log(err);
                    reject({status:"err",state:0,msg:err})
                }else {
                    resolve({status:"ok",state:1,msg:"套餐已经被删除"});
                }
            })
        })
    },
    //删除room_active_consume指定记录
    deleteConsumeActive(consume_id){
        return new Promise((resolve, reject) => {
            let sql="delete from room_active_consume where room_consume_id=?";
            con.connect(sql,[consume_id],(err,result)=>{
                if(err){
                    console.log(err);
                    reject({status:"err",state:0,msg:err})
                }else {
                    resolve({status:"ok",state:1});
                }
            })
        })
    },
    //删除room_consume_price表指定套餐的记录
    deleteConsumePrice(consume_id){
        return new Promise((resolve, reject) => {
            let sql="delete from room_consume_type_price where room_consume_id=?";
            con.connect(sql,[consume_id],(err,result)=>{
                if(err){
                    console.log(err);
                    reject({status:"err",state:0,msg:err})
                }else {
                    resolve({status:"ok",state:1});
                }
            })
        })
    },
    //编辑room_consume表指定记录
    editConsume(params){
      return new Promise((resolve) => {
            let sql="update room_consume set room_consume_name=?," +
                "hotel_id=?,more=?,price=? where room_consume_id=?";
            let arr=[params.room_consume_name,params.hotel_id,
                params.more,params.price,params.room_consume_id];
            con.connect(sql,arr,(err,result)=>{
                if(err){
                    console.log(err);
                    resolve({status:"err",state:0,msg:err});
                }else {
                    resolve({status:"ok",state:1,msg:result})
                }
            })
        })
    }

}
module.exports=manageDao;