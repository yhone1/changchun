const con=require('../config/dbConfig');
const roomlLIstModel={

//    查询

    RoomInform(params){
        return new Promise(function(resolve,reject) {
            let sql="select * from roomhao";
            con.connect(sql,params,function (err,data) {
                if(!err ){
                    resolve(data);
                  // console.log(data+"754")
                }else {
                    reject(err)
                }
              })
            });
        },
        //编辑弹框的数据修改
        roomModify(params){
          console.log("进入编辑房间");
          return new Promise(function (resolve, reject) {
                let sql="update roomhao set room_state=？,isactive=？ where room_id=?";
                con.connect(sql,params,function (err,data) {
                    if(!err){
                        resolve(data);
                    }else {
                        reject(err)
                    }
                })
            })
        },
//    删除数据
    roomDele(params){
      console.log("进入删除房间");
      return new Promise(function (resolve, reject){
            let sql="delete from roomhao where room_id=?";
            con.connect(sql,params, (err,data)=> {
                if(!err){
                  resolve(data)
                }else {
                  reject(err)
                }
              console.log(params);
            })
        })
    },
    //增加房间
    roomNews(params){
      console.log("进入增加房间"+params);
        return new Promise(function (resolve, reject) {
            let sql="insert into roomhao values(?,?,?,?,?)";
            con.connect(sql,params,function (err,data) {
              if(!err){
                resolve(data);
                console.log("成功")
              }else {
                reject(err)
              }
            })
        })
    },
    //搜索房间号
  selectRoom(params){
      console.log("进入房间搜索");
        return new Promise(function (resolve, reject) {
            let sql="select * from roomhao where room_id=?";
            con.connect(sql,params,function (err,data) {
                if(!err){
                  resolve(data);
                  console.log(data+"123456789")
                }else {
                  reject(err);
                  console.log("252525")
                  }
            })
        })
    }
};

module.exports=roomlLIstModel;
