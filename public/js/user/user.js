let sec=0;
let passwordFlag=false;
//跳转个人信息页
$(".personal_info").bind("click",function () {
    window.location.href="/user/personal_info.html"
});
//跳转我的订单页
$(".order").bind("click",function () {
    window.location.href="/user/order.html"
});
//跳转账户安全页
$(".safe-center").bind("click",function () {
    window.location.href="/user/safe-center.html"
});
//跳转退出登录页
$(".exit").bind("click",function () {
    $.get({
        url:"/user/exitUser",
        dataType:"json",
        success(result){
            if(result.state==1){
                window.location.href="/home.html"
            }
        }
    })
});
$("span.changeTel").on("click",function () {
    $(".telmodify").css("display","block")
})
$("span.telconfirm").on("click",function () {
    let tel=$("#oldTel").val();
    $.post({
        url:"/user/safe/checkTel.do",
        data:`oldTel=${tel}`,
        dataType:"json",
        success(result){
            console.log(result);
            if(result.state==1){
                $(".telbind").css("display","block");
            }
        }
    })
});
$("#sendCode").on("click",function () {
    let newTel = $("#newTel").val();
    $.post({
        url:"/user/safe/sendNewTelCode.do",
        data:`newTel=${newTel}`,
        dataType:"json",
        success(result){
            console.log(result);
            if(result.state==1){
               sec=60;
               delay();
            }if(result.state==2){
                console.log("请输入新的手机号码!")
            }
            if(result.state==0){
                console.log("发送失败")
            }
        }
    })
})

function delay() {
    $("#sendCode").html(sec);
    sec--;
    if(sec>=0){
        setTimeout(delay,1000);
    }else {
        $("#sendCode").html("重新发送");
    }
}
$(".telbindconfirm").on("click",function () {
    let code=$("#code").val();
    $.post({
        url:"/user/safe/checkCode.do",
        data:`code=${code}`,
        dataType:"json",
        success(result){
            console.log(result.msg);
            if(result.state==1){
                $(".telbind").css("display","none");
                console.log("更改成功！");
                window.location.href="/user/safe-center.html"
            }
        }
    })
});
$(".editPassword").on("click",function () {
    $(".pwdmodify").css("display","block")
});
$("#oldPassword").on("change",function () {
    let oldPassword=$(this).val();
    $.post({
        url:"/user/safe/checkOldPassword.do",
        dataType:"json",
        data:`oldPassword=${oldPassword}`,
        success(result){
            console.log(result);
            if(result.state===1){
                passwordFlag=true;
            }
            if(result.state===0){
                $(".msg").html("请输入正确的密码");
                passwordFlag=false;
            }
        }
    })

})
$("span.pwdconfirm").on("click",function () {
    console.log(passwordFlag);
    if(passwordFlag){
        let password1=$("#newPassword1").val();
        let password2=$("#newPassword2").val();
        console.log(password2);
        console.log(password1)
        if(password1===password2){
            $.post({
                url:"/user/safe/editPassword.do",
                dataType:"json",
                data:`newPassword=${password2}`,
                success(result){
                    console.log(result);
                    if(result.state===1){
                        console.log("密码修改成功");
                        $(".pwdsuccess").css("display","block");
                        $(".pwdmodify").css("display","none");

                    }
                    if(result.state===2){
                        // $(".pwdsuccess").css("display","block");
                        $(".msg").html("新密码不能是旧密码");
                        console.log("新密码不能是旧密码")
                    }
                    if(result.state===0){
                        console.log("密码修改失败")
                    }
                }
            })
        }
    }
})
function cancel() {
    $(".modalblock").css("display","none");
}
$(".cancel").on("click",cancel);