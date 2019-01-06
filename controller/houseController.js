/**
 * Created by Administrator on 2018/10/23 0023.
 */

const fs=require('fs');
// const multer=require("multer");
//链接dao层
const houseModel=require("../dao/houseDao");
const houseController={
    //查询--异步操作
   async queryRoomTypeCastle(req,resp){
        let data=userModel.DaoQueryRoomTypeCastle([req.query.currentPage]);//后台查询到每页显示的6条数据
        let pages=userModel.DaoGetPageRoomTypeCastle([]);//后台查询到一共有多少页
        resp.send({data:await data,pages:await pages});//await等待 异步操作  将查到的data数据和pages页数作为一个对象往前台传
    },
    async queryRoomTypeStables(req,resp){
        let data=userModel.DaoQueryRoomTypeStables([req.query.currentPage]);//后台查询到每页显示的6条数据
        let pages=userModel.DaoGetPageRoomTypeStables([]);//后台查询到一共有多少页
        resp.send({data:await data,pages:await pages});//await等待 异步操作  将查到的data数据和pages页数作为一个对象往前台传
    },

    //增加
    addRoomCastle(req,resp){
        // console.log("controller1111111层"+req.query.formData);
        let formData = req.query.formData;
        let imgData = formData[3];
        let base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");//截取照片base64码的信息
        let houZui=imgData.substring(11,imgData.indexOf(";"));//截取照片信息取其中的格式作为照片格式后缀
        let dataBuffer = new Buffer(base64Data, 'base64');//base64解码为图片
        fs.writeFile("./public/upload/"+Date.now()+"."+houZui+"", dataBuffer, function(err) {//将图片保存在本地服务器
            if(err){
                // resp.send(err);
            }else{
                console.log("太好了！保存成功了啊！");
                // return resp.send("上传成功");
            }
        });
        let imgPath="./public/upload/"+Date.now()+"."+houZui+"";
        let params=[formData[0],formData[1],formData[2],imgPath,formData[4],formData[5],formData[6]];
        console.log("controller层======"+params);
        //往后台传送数据
        userModel.DaoAddRoomCastle(params,function (result) {//req.body是前台传来的参数
            resp.send(result);
        })
    },


    //删除数据
    deleteRoomCastle(req,resp){
        userModel.DaoDeleteRoomCastle([req.query.room_type_id],function (result) {
            resp.send(result);
        })

    },

//    修改数据
    updateRoomCastle(req,resp){
        console.log("controller层"+req.query.formData);
        let formData=req.query.formData;
        userModel.DaoUpdateRoomCastle([formData[0],formData[1],formData[2],formData[3],formData[4],formData[5]],function (result) {
            resp.send(result);
        })
    },



};

module.exports=houseController;