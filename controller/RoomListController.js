const roomlLIstModel=require("../dao/roomlLIst");
const express=require("express");


const RoomListController={

    //数据查询
    roomInformation(req,res){
      console.log("111");
      roomlLIstModel.RoomInform().then(function (data) {
            res.send(data) ;
        }).catch(function(err) {
            res.send(err) ;
        })
    },
    // //编辑弹框的数据修改
    roomModify(req,res){
       let  params=[room_type_id, door_hao,room_state,isactive];
      roomlLIstModel.roomModify(params).then(function (data) {
            res.send(data) ;
        }).catch(function(err) {
            res.send(err) ;
        })
    },
    //删除
    roomDelete(req,res) {
      let params=[req.query.room_id];
      console.log(req.query);
      roomlLIstModel.roomDele(params).then(function (data) {
          res.send(data)
          }).catch(function (err) {
          res.send(err)
        })
    },
    //增加房间
    roomNew(req,res) {
      let params=[req.query.room_id,req.query.door_hao,req.query.room_type_id,req.query.isactivet,req.query.room_state];
      roomlLIstModel.roomNews(params).then(function (data) {
        res.send(data)
      }).catch(function (err) {
        res.send(err)
        })
    },
//    搜索房间
  selectRoom(req,res){
    console.log("进入");
    let params=[req.query.room_id];
    console.log(params);
      roomlLIstModel.selectRoom(params).then(function (data) {
          res.send(data)
      }).catch(function (err) {
          res.send(err)
        })
    }
};

module.exports.RoomListController=RoomListController;
