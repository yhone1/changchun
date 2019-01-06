/**
 * Created by Administrator on 2018/11/8 0008.
 */

//数据库连接池
const con=require('../config/dbConfig');
const tools=require('../config/tools');
const orderModle={

    //查询所有数据库信息在room页面循环出来
    queryRoom(value,callback){
        let obj;
        let arr=[value];
        let sql="select * from room_type where hotel_id=?";
        con.connect(sql,arr,function (err,result) {
            obj=result;
            for(let i=0;i<obj.length;i++){
                orderModle.queryDevice(value,obj[i].room_type_id,obj[i]);
            }
        });
        setTimeout(function () {
                callback(obj);
        },1000);
    },
    //根据酒店id查询房间
    asyncQueryRoom(hotel_id){
        return new Promise(function (resolve, reject) {
            let arr=[hotel_id];
            let sql="select * from room_type where hotel_id=?";
            con.connect(sql,arr,function (err,result) {
                if(err){
                    reject(err);
                }else {
                    resolve(result);
                    }
            });
        });
    },
    // 查询套餐
    asyncQueryDevice(room_type_id){
        return new Promise(function (resolve, reject) {
            let obj={};
            let arr=[room_type_id];
            let sql="select * from device where device_id in(select device_id from room_type_device where room_type_id=?)";
            con.connect(sql,arr,function (err,result) {
                if(err){
                    reject(err);
                }else {
                    obj=result;
                    resolve(obj);
                }
                // orderModle.queryRoom_consume(hotel_id,value,obj);
            })
        });
    },
    asyncQueryRoomConsume(room_type_id){
        return new Promise(function (resolve, reject) {
            let obj={};
            let arr=[room_type_id];
            let sql="select * from (select * from room_consume_type_price where room_type_id=?)as s,room_consume as s2 \n" +
                "where s.room_consume_id=s2.room_consume_id";
            con.connect(sql,arr,function (err,result) {
                if(err){
                    reject(err);
                }else {
                    obj=result;
                    resolve(obj);
                }
                // for (let i=0;i<obj.room_consume.length;i++){
                //     orderModle.queryActive_consume(obj.room_consume[i].room_consume_id,obj.room_consume[i]);
                //     orderModle.queryPrice(obj.room_consume[i].room_consume_id,value,obj.room_consume[i]);
                // }
            });
        });
    },
    asyncQueryActiveConsume(room_consume_id){
        return new Promise(function (resolve, reject) {
            let arr=[room_consume_id];
            let sql="select active_consume_id from room_active_consume where room_consume_id=?";
            con.connect(sql,arr,function (err,result) {
                if(err){
                    reject(err);
                }else {
                    let arr=[];
                    for (let value of result){
                        arr.push(value.active_consume_id);
                    }
                    resolve(arr);
                }
            });
        });
    },
    asyncQueryConsumePrice(room_type_id,room_consume_id){
        return new Promise(function (resolve, reject) {
            let arr=[room_type_id,room_consume_id];
            let sql="select * from room_consume_type_price where room_type_id=? and room_consume_id=?";
            con.connect(sql,arr,function (err,result) {
                if(err){
                    reject(err);
                }else {
                    if(result.length>0){
                        resolve(result[0].consume_price);
                        // obj.consume_price=result[0].consume_price;
                    }else {
                        resolve(0);
                    }
                }

            });
        });
    },
    asyncQueryRoomNum(room,date,num){
        return new Promise(function (resolve, reject) {
            let sql='select room_type_id,room_number from payorder where in_date =? or out_date=? or in_date<? and out_date>?';
            let arr=[date,date,date,date];
            con.connect(sql,arr,function (err,result) {
                if(err){
                    resolve({status:"err",state:0,msg:err});
                }else {
                    let name="";
                    for (let i=0;i<result.length;i++ ){
                        name="id_"+result[i].room_type_id;
                        if(room[name]){
                            room[name]-=result[i].room_number
                        }
                    }
                    for(let name in room){
                        if(room[name]<num){
                            room[name]=false;
                        }else {
                            room[name]=true;
                        }
                    }
                    resolve(room);
                }
            });
        });

    },
    //查询所有套餐
    asyncQueryAllDevice(){
        return new Promise((resolve, reject) => {
            let sql="select * from device";
            con.connect(sql,[],(err,result)=>{
                if(err){
                    console.log(err);
                    reject({state:"err",err});
                }else {
                    let device={};
                    for (let value of result){
                        device[value.device_id]=value.device_name;
                    }
                    resolve(device);
                }
            })
        })
    },
    //查询房间套餐
    asyncQueryRoomDevice(room_type_id){
        return new Promise((resolve, reject) => {
            let sql="select device_id from room_type_device where room_type_id=?";
            con.connect(sql,[room_type_id],(err,result)=>{
                if(err){
                    console.log(err);
                    reject({state:"err",err});
                }else {
                    let room_device=[];
                    for (let value of result){
                       room_device.push(value.device_id)
                    }
                    resolve(room_device);
                }
            })
        })
    },
    queryDevice(hotel_id,value,obj){
        let arr=[value];
        let sql="select * from device where device_id in(select device_id from room_type_device where room_type_id=?)";
        con.connect(sql,arr,function (err,result) {
            obj.device=result;
            orderModle.queryRoom_consume(hotel_id,value,obj);
        })
    },
    queryRoom_consume(hotel_id,value,obj){
        let arr=[hotel_id];
        let sql="select * from room_consume where hotel_id=?";
        con.connect(sql,arr,function (err,result) {
            obj.room_consume=result;
            for (let i=0;i<obj.room_consume.length;i++){
                orderModle.queryActive_consume(obj.room_consume[i].room_consume_id,obj.room_consume[i]);
                orderModle.queryPrice(obj.room_consume[i].room_consume_id,value,obj.room_consume[i]);
            }
        })
    },
    queryPrice(room_type_id,room_consume_id,obj){
        let arr=[room_type_id,room_consume_id];

        let sql="select * from room_consume_type_price where room_type_id=? and room_consume_id=?";
        con.connect(sql,arr,function (err,result) {
            if(result.length>0){
                obj.consume_price=result[0].consume_price;
            }else {
                obj.consume_price=0;
            }
        })
    },
    queryActive_consume(value,obj){
        let arr=[value];
        let sql="select * from active_consume where active_consume_id in(select active_consume_id from room_active_consume where room_consume_id=?)";
        con.connect(sql,arr,function (err,result) {
            obj.active_consume=result;
        })
    },


//    根据room页面传递的room_type_id和consume_type_id查询相对应的名字
    requryGuestRoom(room_type_id,callback){
        let arr=[room_type_id];
        let obj={};
        let sql="select room_type_name,roomPrice from room_type where room_type_id=?";
        con.connect(sql,arr,function (err,result) {
            obj.room_type_name=result[0].room_type_name;
            obj.roomPrice=result[0].roomPrice;
            callback(obj);
        })
    },

    requryGuestConsume(room_consume_id,callback){
        let arr=[room_consume_id];
        let obj={};
        let sql="select room_consume_name from room_consume where room_consume_id=?";
        con.connect(sql,arr,function (err,result) {
            if(err){
                console.log(err)
            }else {
                obj.room_consume_name=result[0].room_consume_name;
                callback(obj.room_consume_name);
            }

        })
    },
    //插入订单
    upOrder(obj,callback){
        let order=obj;
        orderModle.queryOrderNum(function (result) {
            let order_hao=result;
            let orderTime=tools.getNowDate();
            let sql='';
            let value='values(';
            let arr=[];
            order["order_state"]=1;
            order["order_hao"]=order_hao;
            order["order_time"]=orderTime;
            console.log(order);
            if(order.contact_phone===""){
                order.contact_phone=null;
            }
            sql='insert into payorder (';
            for (let key in order){
                sql=sql+key+',';
                value=value+'?,';
                arr.push(order[key]);
            }
            sql=sql.substr(0,sql.length-1);
            value=value.substr(0,value.length-1);
            sql+=')';
            value+=')';
            sql=sql+value;
            console.log(sql)
            con.connect(sql,arr,function (err,result) {
                if(err){
                    console.log(err);
                }else {
                    if(result){
                        callback(true);
                    }
                    else {
                        callback(false);
                    }
                }
            })
        })

    },
    queryOrderNum(callback){
        let date=tools.getAllDate();
        let sql=`select order_hao from payorder where order_hao like '${date}%'`;
        con.connect(sql,[],function (err,result) {
            if(err){
                console.log(err);
            }
            if(result){
                if(result.length>0){
                    let orderHao=0;
                    for (let i=0;i<result.length;i++){
                        if(parseInt(result[i]["order_hao"])>orderHao){
                            orderHao=parseInt(result[i]["order_hao"]);
                        }
                    }
                    callback(`${orderHao+1}`);
                }else {
                    callback(`${date}0001`);
                }
            }
        })

    },
    daoSelectOrder(params) {//order的查询
        return new Promise(function (resolve, reject) {
            con.connect("select *from payorder",params, (err, data) => {
                console.log("=====DaoSelect=====");
                if (!err) {
                    console.log(data);
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    },
    daoUpdateOrder(params) {
        return new Promise(function (resolve, reject) {
            con.connect("update payorder set room_type_name=?,room_number=?,guestname=?,guest_tel=?,order_state=? where order_id=?", params, (err, data) => {
                console.log("=====DaoUpdate====");
                if (!err) {
                    console.log(data);
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    },
    daoDeleteOrder(params) {
        return new Promise(function (resolve, reject) {
            con.connect("delete from payorder where order_id=?", params, (err, data) => {
                console.log("=====DaoDelete====");
                if (!err) {
                    console.log(data);
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    },
    daoAddOrder(params){
        return new Promise(function (resolve, reject) {
            con.connect("insert into payorder values (default,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", params, (err, data) => {
                console.log("=====DaoAdd====");
                if (!err) {
                    console.log(data);
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    },
    //根据订单id查询订单
    queryOrder(orderID){
        return new Promise((resolve, reject) => {
            let sql="select * from payorder where order_id=?";
            con.connect(sql,[orderID],(err,result)=>{
              if(err){
                  resolve({status:"err",state:0,msg:err});
              }else {
                  resolve(result[0]);
              }
            })
        })
    },
    queryAllHotelName(){
        return new Promise((resolve, reject) => {
            let sql="select hotel_id,hotelname as hotel_name from hotel ";
            con.connect(sql,(err,result)=>{
                if(err){
                    reject({status:"err",state:0,msg:err})
                }else {
                    let hotel={};
                    for(let value of result){
                        hotel[value.hotel_id]=value.hotel_name;
                    }
                    resolve(hotel);
                }
            })

        })
    },
    getHotelID(room_type_id){
        return new Promise((resolve, reject) => {
            let sql="select hotel_id from room_type where room_type_id=?";
            con.connect(sql,[room_type_id],(err,result)=>{
                if(err){
                    reject({status:"err",state:0,msg:err})
                }else {
                    resolve(result[0].hotel_id)
                }
            })
        })
    }
};
module.exports=orderModle;