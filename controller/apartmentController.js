const apartmentDao=require("../dao/apartmentDao");

const apartmentController={

    async operateApart(req,resp){
        console.log("进入控制层");
        // console.log(req.query.currentPage);
        // let pageCount=6;//每页展示6条数据

        let Apart=await apartmentDao.handleApart();
        console.log(Apart+"控制层信息");
        resp.send(Apart);
    },
    async addApart(req,resp){

        let name=req.query.formData[0];
        let region=req.query.formData[1];
        console.log(name+region);
        let myDate=new Date();
        let localTime=myDate.toLocaleDateString();
        let AddApart=await apartmentDao.AddApart([name,region,"张芸铭"]);
        // c_date:localTime,
        resp.send(AddApart);
    },
    async deleteApart(req,resp){
        let myId=req.query.myId;
        let delApart=await apartmentDao.delApart([myId]);
        resp.send(delApart);
    },
    async editApart(req,resp){
        let myEditData=req.query.editData;
        console.log(myEditData);
        console.log(myEditData[0],myEditData[1],myEditData[2]);
        let rewriteApart=await apartmentDao.rewriteApart([myEditData[1],myEditData[2],myEditData[0]]);
        resp.send(rewriteApart);
    }

};
module.exports=apartmentController;
