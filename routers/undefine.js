const express=require("express");
const router=express.Router();//调用express对象提供的路由方法获取路由对象
router.get('/*',function (req,res) {
    res.status(404);
    res.end();
})
module.exports=router;