
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


$("#confirm").click(sendUser);
$("button.code").click(getCode);
$("#code1").click(checkCode);
$("#password").click(sendNewPW);

function sendUser() {
    let str="user="+$("#user").val();
    $.ajax({
        url:"findPW.do",
        type:"post",
        data:str,
        dataType:"text",
        success:function (results) {
            console.log(results);
            if(results!="error"){
                $(".sfen").css("display","block");
                $(".tianxie").css("display","none");
                $(".p1").css("width","200");
                $(".p1").css("transition","1s");
                $(".t2").css("transition","3s");
                $(".t2").css("background-color","rgb(37, 127, 58)")
            }else {
                console.log(results);
            }
        },
        error:function (err) {
            console.log("失败了")
        }
    });
}
function getCode() {
    let str="tel="+$("#tel").val();
    $.ajax({
        url:"/findPWGetCode.do",
        type:"post",
        data:str,
        dataType:"text",
        success:function (results) {
            if(results=="OK"){
                $("button.code").css("background-color","#165040");
                $("button.code").attr("disabled", true);
            }else {
                console.log(results);
            }
        },
        error:function (err) {
            console.log("失败了")
        }
    });
}
function checkCode() {
    let str="tel="+$("#tel").val()+"&code="+$("#code").val();
    $.ajax({
        url:"/findPWCheckCode.do",
        type:"post",
        data:str,
        dataType:"text",
        success:function (results) {
            if(results=="OK"){
                $(".sfen").css("display","none");
                $(".password").css("display","block");
                $(".p2").css("width","200");
                $(".p2").css("transition","1s")
                $(".t3").css("transition","3s");
                $(".t3").css("background-color","rgb(37, 127, 58)");
            }else {
                console.log(results);
            }
        },
        error:function (err) {
            console.log("失败了")
        }
    });
}
function sendNewPW() {
    let str="password="+$("#pw1").val();
    $.ajax({
        url:"/findPWNewPW.do",
        type:"post",
        data:str,
        dataType:"text",
        success:function (results) {
            if(results=="OK"){
                $(".wancheng").css("display","block");
                $(".password").css("display","none");
                $(".p3").css("width","200");
                $(".p3").css("transition","1s")
                $(".t4").css("transition","3s");
                $(".t4").css("background-color","rgb(37, 127, 58)")
            }else {
                console.log(results);
            }
        },
        error:function (err) {
            console.log("失败了")
        }
    });
}