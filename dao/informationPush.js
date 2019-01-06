const SMSClient = require('../config/sms');
const email=require('../config/email');

// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'LTAIrGRlZz9NHHnv';
const secretAccessKey = 'yh4kGibNCKKW9v0PBtyCohXQ1Sn5hL';

//在云通信页面开通相应业务消息后，就能在页面上获得对应的queueName,不用填最后面一段
const queueName = 'Alicom-Queue-1092397003988387-';

//初始化sms_client
let smsClient = new SMSClient({accessKeyId, secretAccessKey});

const SMS= {
    sendSMS(tel,code,callback){
        smsClient.sendSMS({
            PhoneNumbers: tel,
            SignName: '紫英网',
            TemplateCode: 'SMS_149102716',
            TemplateParam: '{"code":"'+code+'"}'
        }).then(function (res) {
            let {Code}=res;
            if (Code === 'OK') {
                //处理返回参数
                console.log("发送成功");
                callback("OK");
            }
        }, function (err) {
            console.log(err);
            callback("error");
        })
    }
};
const Email={
    send(receivers,callback){
        let info = email.send(receivers);
        if(info != "error"){
            callback("OK");
        }else {
            callback("error");
        }
    },
    sendVerify(receivers,user,callback){
        email.sendVerify(receivers,user,function (results) {
            callback(results);
        })
    }
};
module.exports.SMS = SMS;
module.exports.Email = Email;