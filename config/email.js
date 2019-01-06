const nodemailer=require('nodemailer');

const Email= {
    transporter:{},
    text:{
        content:"亲爱的用户：\n" +
        "\n" +
        "飘洋过海，谢谢你对常青的爱\n" +
        "请赤裸裸的回归那个最原本的自己\n" +
        "绿水青山我们 在这儿等你\n" +
        "\n" +
        "*此电子邮件是用作订阅我们所提供的时事通讯服务。\n" +
        "\n" +
        "使用这个\"opt-in | 决定参加\"的流程，我们将严格遵守国际电子邮件\n" +
        "行销的相关法则。您的个人信息保证只会被用来接收一些您自己感兴趣的\n" +
        "和/或者某类已表明不反感的信息。\n",

    },
    config: {
        "host": "smtpdm.aliyun.com",
        "port": 465,
        "secureConnection": true, // use SSL
        "auth": {
            "user": 'calvin@yyyemail.yuyuying.top', // user name
            "pass": 'zsy9730611962ZSY'
        }
    },
    create() {
            this.transporter = nodemailer.createTransport(this.config);
            },
    send(receivers) {
        let mailOptions= {
            from: 'calvin<calvin@yyyemail.yuyuying.top>', // sender address mailfrom must be same with the user
                to: receivers, // list of receivers
                // cc:'haha<xxx@xxx.com>', // copy for receivers
                // bcc:'haha<xxxx@xxxx.com>', // secret copy for receivers
                subject: '邮件推送', // Subject line
                //text: '验证', // plaintext body
                // reply-to：'1757478118@qq.com',//custom reply address
                html: '<b>Hello world</b><img src="cid:01" style="width:200px;height:auto">', // html body
                attachments: [
                {
                    // filename: 'text',
                    // content: 'hello world!'
                }]
        }
        this.transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return "error";
            }
            console.log('Message sent: ' + info.response);
        });
    },
    sendVerify(receivers,user,callback) {
        let mailOptions= {
            from: 'calvin<calvin@yyyemail.yuyuying.top>', // sender address mailfrom must be same with the user
            to: receivers, // list of receivers
            // cc:'haha<xxx@xxx.com>', // copy for receivers
            // bcc:'haha<xxxx@xxxx.com>', // secret copy for receivers
            subject: '确认验证', // Subject line
            //text: '验证', // plaintext body
            // reply-to：'1757478118@qq.com',//custom reply address
            html:`<h2>S账号注册确认:</h2> 
    <p >亲爱的用户：</p>  
    <p>您于近期注册了${user.name}帐号, 请<a href='http://localhost:9999/temail.do?id=${user.id}&psd=${user.psd}'>点击验证</a>完成注册。</p>`

        }
        this.transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                callback("error");
            }else {
                callback("OK");
                console.log('Message sent: ' + info.response);
            }

        });
    }
};
Email.create();
module.exports=Email;
