if(window.location.pathname!='/login.html'){
    window.location.pathname='/login.html';
}
var flag_tel=flag_pw=true;
$("input").focus(function() {
    $(this).parent("label").addClass("active");
});
$("input").blur(function() {
    if ($(this).val() == "") {
        $(this).parent("label").removeClass("active");
    }
});


//注册
$("#zhuce").click(function() {
    $(".zhuce").css("display","block");
    $(".flipper").css("transform","rotateY(180deg)");
   $(".logon").css(" z-index","-4");
    $(".logon").css("visibility","hidden");
   $(".zhuce").css(" z-index","10");
    document.getElementById("log").style.zIndex=1;
});

//返回
$(".fanhui").click(function() {

    $(".flipper").css("transform","rotateY(360deg)");
    $(".zhuce").css("display","none");
    $(".logon").css("visibility","visible");
});

$("#phone").blur(function () {

    var phone = $('#phone').val();
    $("#phone").attr("disabled");
    if(!(/^1[34578]\d{9}$/.test(phone))){
        $('#zz').css("display","block");
        $('#zz').html("手机号格式错误，请重新输入");
        $('#phone').css("border","1px red solid");
        $("#xianshi").css("top","175px");
        $("#butt").unbind("click");
        flag_tel=false;
        return false;
    }else {
        $("#butt").bind("click",signInCode);
        $('#zz').css("display","none");
        $('#phone').css("border","1px #ccc solid");
        $("#xianshi").css("top","156px");
        flag_tel=true;
        }
});

//密码获取焦点时
$("#pwd").focus(function () {
    $(".qd1").css("display","block");
    var pwd=$('#pwd').val();
    var reg=/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{8,}$/;
    // $(".qd1").css("display","block");
    if (!(reg.test(pwd))){

        $("#tjian").html("<ul>\n" +
            "    <li id='li1'>密码不能为空</li>\n" +
            "    <li id='li2'>密码长度必须大于8</li>\n" +
            "    <li id='li3'>密码必须包含字母和数字</li>\n" +
            "</ul>");
    }
    if (pwd.length>= 8 ){
        $("#li2").css("color","green");
        $('#pwd').css("border","1px #ccc solid");

    }else {
        $("#li2").css("color","red");
        $('#pwd').css("border","1px red solid");

    }
    if(!(/^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$/.test(pwd))){
        $("#li3").css("color","red");
    } else {
        $("#li3").css("color","green");
    }
    if (pwd=="") {
        $("#li1").css("color","red")
    }else {
        $("#li1").css("color","green")
    }


});
//失去焦点

$("#pwd").blur(function () {
    $(".qd1").css("display","none");
$("#tjian ul").css("display","none");

});



$("#pwd").keyup(function () {
    var pwd=$('#pwd').val();
// $(".qd1").css("display","none");
// $("ul").css("display","none");
if (pwd.length>= 8 ){
        $("#li2").css("color","green");
}else {
    $("#li2").css("color","red");
}
    if(!(/^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$/.test(pwd))){
        $("#li3").css("color","red");
        } else {
        $("#li3").css("color","green");

    }
    if (pwd=="") {
        $("#li1").css("color","red");
        $('#pwd').css("border","1px red solid");
    }else {
        $("#li1").css("color","green");
        $('#pwd').css("border","1px #ccc solid");


    }

});



//密码验证.

//获取文本框注册键盘抬起事件
var pwd=document.getElementById("pwd");
var strengthLevel=document.getElementById("strengthLevel");
pwd.onkeyup=function () {
    console.log("dada");
    strengthLevel.className="strengthLv"+(this.value.length>=6?getLvl(this.value) :0);
};

function getLvl(pwd) {
    var lvl=0;//默认是0级
    //密码中是否有数字,或者是字母,或者是特殊符号
    if(/[0-9]/.test(pwd)){
        lvl++;
    }
    //判断密码中有没有字母
    if(/[a-zA-Z]/.test(pwd)){
        lvl++;
    }
    //判断密码中有没有特殊符号
    if(/[^0-9a-zA-Z_]/.test(pwd)){
        lvl++;
    }
    return lvl;//最小的值是1,最大值是3
}

//鼠标按下显示密码
$("#xianshi").mousedown(function () {
    pwd.type="text";
console.log(pwd.type)
});

$("#xianshi").mouseup(function () {
    pwd.type="password";
    console.log(pwd.type)
});
$(".guanbi").click(function () {
    $("#log").css("display","none")
});
var time=60;
function signInCode() {
    var tel = $("#phone").val();
    var str="tel="+tel;
    $.ajax({
        url:"/sendCode.do",
        type: 'post',
        data:str,
        dataType: 'text',
        success: function (response) {
            console.log(response);
            if(response=="OK"){
                console.log("发送成功!")
            }else {
                console.log("发送失败!")
            }
        },
        error:function () {
            console.log("出错了！")
        }
        }
    );
    timer=setInterval(butt,1000);
}
//验证码倒计时

function butt() {
    if(time==60){
        $("#butt").unbind("click");
    }
    document.getElementById("butt").innerHTML=("倒计时:"+time);
    time--;
    if (time<=0){
        time=60;
        document.getElementById("butt").innerHTML="重新发送";
        $("#butt").bind("click",signInCode);
        clearInterval(timer);
    }
}

function f_singIn() {
    let flag_code=!($("#code").val()==""||$("#code").val()==undefined||$("#code").val()==null)
    if(flag_tel&&flag_pw&&flag_code){
        $("#zc").css("");
    }
}
function singIn() {
    $.ajax({
            url:"/signId.do",
            type: 'post',
            data:$("#form").serialize(o),
            dataType: 'text',
            success: function (response) {
                console.log(response);
                if(response=="OK"){
                    console.log("注册成功!")
                }else {
                    console.log("注册失败!")
                }
            },
            error:function () {
                console.log("出错了！")
            }
        }
    );
}

var oFix = document.getElementById('rightfixed');
var oUl = oFix.getElementsByTagName('ul')[0];
var oLi = oUl.getElementsByTagName('li');
oFix.onmouseover = function() {
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].style.transition = "1s " + i * 0.1 + "s";
        oLi[i].style.left = '0px';
    }
}

oFix.onmouseout = function() {
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].style.transition = "1s " + i * 0.1 + "s";
        oLi[i].style.left = '100px';
    }

}

var nav = $('nav');
var line = $('<div />').addClass('line');

line.appendTo(nav);

var active = nav.find('.active');
var pos = 0;
var wid = 0;

if (active.length) {
    pos = active.position().left;
    wid = active.width();
    line.css({
        left: pos,
        width: wid
    });
}

nav.find('ul li a').mouseover(function(e) {
    if (!$(this).parent().hasClass('active')) {
        e.preventDefault();

        var _this = $(this);

        nav.find('ul li').removeClass('active');

        var position = _this.parent().position();
        var width = _this.parent().width();

        if (position.left >= pos) {
            line.animate({
                width: ((position.left - pos) + width)
            }, 300, function() {
                line.animate({
                    width: width,
                    left: position.left
                }, 150);
                _this.parent().addClass('active');
            });
        } else {
            line.animate({
                left: position.left,
                width: ((pos - position.left) + wid)
            }, 300, function() {
                line.animate({
                    width: width
                }, 150);
                _this.parent().addClass('active');
            });
        }

        pos = position.left;
        wid = width;
    }
});


var image = new Array(5); //定义image为图片数量的数组
image [0] = '../images/jobOpportunity/logon/bj1.jpg'; //背景图象的路径
image [1] = '../images/jobOpportunity/logon/bj3.jpg';
image [2] = '../images/jobOpportunity/logon/tp1.jpg';
image [3] = '../images/jobOpportunity/logon/tp3.jpg';
image [4] = '../images/jobOpportunity/logon/tp2.jpg';
window.onload=function () {
    time=setInterval(aa,2000)

};

function aa(){
    number = Math.floor(Math.random() * image.length);
    // document.write("<BODY BACKGROUND="+image[number]+">");
    $("body").css("background-image","url("+image[number]+")");
    $("body").css("transition","1s");
    // $(".logon").css("background-image","url("+image[number]+")");
    // $(".logon").css("transition","1s");

    // $(".zhuce").css("background-image","url("+image[number]+")");
    // $(".zhuce").css("transition","1s");
}


// $("button.login").click(login);
//登录
function login() {
    $.ajax({
        url:"/login.do",
        type:"post",
        data:$("form.login").serialize(),
        dataType: 'text',
        success: function (response) {
            console.log(response);
            if(response=="OK"){
                console.log("登录成功!")
            }else {
                console.log("登录失败!")
            }
        },
        error:function () {
            console.log("出错了！")
        }

    });
}
