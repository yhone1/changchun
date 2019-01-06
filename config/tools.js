const Tools={
    phone(str){
        let s=[];
        for (let i=0;i<str.length;i++){
            if(i>2&&i<7){
                s[i]='*';
            }else {
                s[i]=str[i];
            }
        }
        console.log(s.toString());
        s=s.join("");
        return s;
    },
    UpOrder(...obj){
        let Order,Orders;
        if(obj.length>1){
            Order=obj[0];
            Orders=obj[1];
        }
        Order["subscription"]=Orders["subscription"];
        Order["tax"]=Orders["s_tax"];
        Order["server_money"]=Orders["s_serverMoney"];
        Order["order_price"]=Orders["s_allMoney"];
        // Order["roomPrice"]=Orders["s_roomPrice"];
        Order["in_date"]=Orders["in_date"];
        Order["out_date"]=Orders["out_date"];
        Order["room_number"]=Orders["room_number"];
        Order["adultNum"]=Orders["adultNum"];
        if(Orders["childNum"]==""){
            Order["childNum"]=0;
        }else {
            Order["childNum"]=Orders["childNum"];
        }

        // Order["sum"]=Orders["sum"];
        // Order["roomTypeName"]=Orders["room_type_name"];
        // Order["roomConsumeName"]=Orders["room_consume_name"];
        Order["room_consume_id"]=Orders["s_room_consume_id"];
        Order["room_type_id"]=Orders["s_room_type_id"];
        if(Order["pay"]=="支付宝") Order["pay"]=1;
        if(Order["pay"]=="微信") Order["pay"]=2;
        if(Order["pay"]=="银联") Order["pay"]=3;
        return Order;
    },
    //获取当前日期 YYYY-MM-DD
    getAllDate(...date) {
        let myDate;
        if(date.length>0){
            myDate=date[0];
        }else {
            myDate=new Date();
        }
        return myDate.getFullYear().toString()+(myDate.getMonth()+1).toString().padStart(2,"0")+myDate.getDate().toString().padStart(2,"0");
    },
    //获取当前时间 例：YYYY-MM-DD HH:MM:SS
    getNowDate(){
        let myDate=new Date();
        return myDate.getFullYear()+"-"+(myDate.getMonth()+1).toString().padStart(2,"0")+
            "-"+myDate.getDate().toString().padStart(2,"0")+" "+
            myDate.getHours().toString().padStart(2,"0")+":"+
            myDate.getMinutes().toString().padStart(2,"0")+":"+
            myDate.getSeconds().toString().padStart(2,"0")
    },
    //获取start日期到end日期之间的所有日期
    getAllDdy(start,end){
        let arr = [];
        let startDay = start.split("-");
        let endDay = end.split("-");
        let startDate = new Date();
        startDate.setUTCFullYear(startDay[0], startDay[1] - 1, startDay[2]);
        let endDate = new Date();
        endDate.setUTCFullYear(endDay[0], endDay[1] - 1, endDay[2]);
        let startTime = startDate.getTime() - 24 * 60 * 60 * 1000;
        let endTime = endDate.getTime() - 24 * 60 * 60 * 1000;
        for (let k = startTime; k <= endTime;) {
            k = k + 24 * 60 * 60 * 1000;
            arr.push((new Date(parseInt(k))).format());
        }
        return arr;
    },
    getDelay(){
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve({});
            },3000)
        })
    }
}
//以YYYY-MM-DD 的形势返回日期
Date.prototype.format = function() {
    var s = '';
    var mouth = (this.getMonth() + 1)>=10?(this.getMonth() + 1):('0'+(this.getMonth() + 1));
    var day = this.getDate()>=10?this.getDate():('0'+this.getDate());
    s += this.getFullYear() + '-'; // 获取年份。
    s += mouth + "-"; // 获取月份。
    s += day; // 获取日。
    return (s); // 返回日期。
};
module.exports=Tools;
