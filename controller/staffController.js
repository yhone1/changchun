const staffDao=require("../dao/staffDao")

const staffController={
    async queryStaff(req,resp){
        let data=await staffDao.query();
        resp.send(data);
    },
    async deleteStaff(req,resp){
        let myId=req.query.myId;
        console.log(myId);
        let data=await staffDao.delete([myId]);
        resp.send(data)
    },
    async addStaff(req,resp){
        let myForm=JSON.parse(req.query.myform);

        let data=await staffDao.add(myForm.depart,[myForm.name,myForm.sex,'常青谷',myForm.tel,'实习生']
            // {employee_name:myForm.name,sex:myForm.sex,hotel:'常青谷',tel:myForm.tel,position:'实习生'}
            ,()=>{
        // ,apart:myForm.depart  ,depart_id:myForm.depart
        });
        resp.send(data);
    },
    async editStaff(req,resp){
        let myEditData=JSON.parse(req.query.editData);
        // console.log(typeof myEditData.id);
        let data=await staffDao.edit([myEditData.name,myEditData.sex,myEditData.depart_,myEditData.tel,myEditData.position,myEditData.hotel,myEditData.id]);
        resp.send(data);
    },
    //查询
    async mysearchBtn(req,resp){
        let mysel=req.query.mysel;
        console.log(mysel[0]+mysel[1]+"测试哈哈哈");
        console.log(typeof mysel[0]);
        console.log(typeof mysel[1]);
        let mydata=await staffDao.myselar(mysel[0],[mysel[1]]);
        console.log(JSON.stringify(mydata)+"返回值");
        resp.send(mydata);
    },

};
module.exports=staffController;