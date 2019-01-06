/**
 * Created by Administrator on 2018/10/23 0023.
 */
//连接数据库
const dbpool=require("../config/dbConfig");
const userModel={

    //增加房型
    DaoAddRoomCastle(params,callback){//body是前台传来的参数
        // console.log("dao层接收到的"+params);
        dbpool.connect("insert into room_type (room_type_id,room_type_name,hotel_id,guestNum,mainPicPath,roomNum,roomPrice,room_type_more) values(null,?,?,?,?,?,?,?)",
            params,(err,data)=>{
                if(err){
                    // console.log("dao层出错=="+err);
                    callback("err");
                }
                else{
                    callback(data);
                }
            });

    },


    //查询
    DaoQueryRoomTypeCastle(params,callback){
        return new Promise((resolve,reject)=>{
            let pageCount=6;//每页展示6条数据
            let currentPage=params;//当前展示第几页--params是vue传过来的currentPage=1
            let sql="select * from room_type LEFT JOIN hotel ON room_type.hotel_id=hotel.hotel_id WHERE room_type.hotel_id=1 limit ?,?";
            dbpool.connect(sql,[(currentPage-1)*pageCount,pageCount],(error,data)=>{
                if(error){
                    reject({status:"err",error})
                }
                else{
                    if(data.length>0){
                        resolve(data);
                    }else {
                        reject({status:"err",msg:"没有记录"});
                        resolve(0);
                    }
                }

            })
        });
    },
    DaoQueryRoomTypeStables(params,callback){
        return new Promise((resolve,reject)=>{
            let pageCount=6;//每页展示6条数据
            let currentPage=params;//当前展示第几页--params是vue传过来的currentPage=1
            let sql="select * from room_type LEFT JOIN hotel ON room_type.hotel_id=hotel.hotel_id WHERE room_type.hotel_id=2 limit ?,?";
            dbpool.connect(sql,[(currentPage-1)*pageCount,pageCount],(error,data)=>{
                if(error){
                    reject({status:"err",error})
                }
                else{
                    if(data.length>0){
                        resolve(data);
                    }else {
                        reject({status:"err",msg:"没有记录"});
                        resolve(0);
                    }
                }

            })
        });
    },
    //总页数
    DaoGetPageRoomTypeCastle(params,callback){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select count(*) as totalCount from room_type where room_type.hotel_id=1",
                [params],(error,data)=>{
                if(error){
                    reject({status:"err",error})
                }else {
                    if(data.length>0){
                        let result=data[0].totalCount;
                        resolve(result);
                    }else {
                        reject({status:"err",msg:"没有记录"});
                        resolve(0);
                    }
                }
                })
        })
    },
    DaoGetPageRoomTypeStables(params,callback){
        return new Promise((resolve,reject)=>{
            let pageCount=6;
            dbpool.connect("select count(*) as totalCount from room_type where room_type.hotel_id=2",
                [params],(error,data)=>{
                if(error){
                    reject({status:"err",error})
                }else {
                    if(data.length>0){
                        let result=data[0].totalCount;
                        resolve(result);
                    }else {
                        reject({status:"err",msg:"没有记录"});
                        resolve(0);
                    }
                }
                })
        })
    },

    //删除
    DaoDeleteRoomCastle(params,callback){
        dbpool.connect("delete from room_type where room_type_id=?",
        params,(err,data)=>{
            if(err){
                callback("err");
            }
            else{
                callback(data);
            }
            })
    },

    //修改数据
    DaoUpdateRoomCastle(params,callback){
        console.log("dao层接收的"+params);
        dbpool.connect("UPDATE room_type SET room_type_name=?,hotel_id=?,guestNum=?,roomPrice=?,room_type_more=? WHERE room_type_id=?",
            params,(err,data)=>{
                if(err){
                    console.log(err);
                    callback("err");
                }
                else{
                    callback(data);
                }
            })
    },


};
module.exports=userModel;