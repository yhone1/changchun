const manageDao = require('../dao/manage');
const manage={
    //得到所有套餐
    async getAllConsume(req,res){
        let activeName = manageDao.getAllActive();
        let hotelName = manageDao.getAllHotelName();
        let consume = await manageDao.getConsume();
        let active=[];
        activeName = await activeName;
        hotelName = await hotelName;
        for (let i=0;i<consume.length;i++){
            consume[i].hotelname=hotelName[consume[i].hotel_id];
            active[i]=manageDao.getConsumeID(consume[i].room_consume_id);
        }
        active= await Promise.all(active);
        for (let i=0;i<consume.length;i++){
            consume[i].active_id=active[i];
        }
        res.send({consume,activeName,hotelName});
    },
    //获取指定长度的套餐
    async getConsume(req,res){
        let startPage=parseInt(req.query.start);
        let length=parseInt(req.query.length);
        let activeName = manageDao.getAllActive();
        let hotelName = manageDao.getAllHotelName();
        let pageCount = manageDao.getCountConsume();
        let consume =  manageDao.getConsume(startPage,length);
        let active=[];
        consume=await consume;
        if(consume.state==1){
            consume=consume.result;
        }else if(consume.state==0){
            pageCount = await pageCount;
            if(pageCount!=0){
                if(pageCount%length==0){
                    consume =  await manageDao.getConsume((pageCount-length),length);
                    consume = consume.result;
                }else {
                    consume =  await manageDao.getConsume((pageCount/length)*length,length);
                    consume = consume.result;
                }
            }else {
                consume=[];
            }
        }
        for (let i=0;i<consume.length;i++){
            active[i]=manageDao.getConsumeID(consume[i].room_consume_id);
        }
        active= await Promise.all(active);
        for (let i=0;i<consume.length;i++){
            consume[i].active_id=active[i];
        }
        pageCount = await pageCount;
        console.log(pageCount)
        activeName = await activeName;
        hotelName = await hotelName;
        res.send({consume,activeName,hotelName,pageCount});
    },
    //添加套餐
    async addConsume(req,res){
        console.log(req.body);
        let room_consume_id = await manageDao.queryConsumeMaxId();
        let result = await manageDao.addConsume([room_consume_id,req.body.name,parseInt(req.body.hotel_name),req.body.more]);
        let active=[];
        let activeLength=req.body.active.length;
        for(let value of req.body.active){
            active.push(manageDao.addConsumeActive(room_consume_id,value));
        }
        active = Promise.all(active);
        if(active.length==activeLength){
            res.send({status:"ok",state:1})
        }else {
            res.send({status:"err",state:0})
        }
    },
    //删除套餐
    async deleteConsume(req,res){
        let consume_id=req.body.consume_id;
        console.log(consume_id);
        let delConsumeActive = manageDao.deleteConsumeActive(consume_id);
        let delConsumePrice = manageDao.deleteConsumePrice(consume_id);
        let Pro,result;
        try{
            Pro = await Promise.all([delConsumeActive,delConsumePrice]);
            result = await manageDao.deleteConsume(consume_id);
            res.send(result);
        }catch (e) {
            console.log(e);
            res.send(e);
        }

    },
    //更新套餐
    async editConsume(req,res){
        console.log(req.body);
        let consume=req.body.consume;
        let consume_active=[];
        for (let value of consume.active_id){
            consume_active.push(manageDao.addConsumeActive(consume.room_consume_id,value))
        }
        let result = await manageDao.editConsume(consume);
        consume_active = await Promise.all(consume_active);
        res.send(result);
    }
}

module.exports=manage;