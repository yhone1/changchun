var imgs=["../images/home/19_143108_nS_1.jpg","../images/home/23_094603_nC_1.jpg"];
//按钮控制轮播
function Aleft() {
    clearInterval(timer);//清定时器
    $(".box").css({
        left:'0',
        transition:'all 1.5s linear'
    });
    $(".AnNiu :first-child").addClass("anNiu");
    $(".AnNiu :last-child").removeClass("anNiu");
}
function Aright() {
    clearInterval(timer);//清定时器
    $(".box").css({
        left:'-1440px',
        transition:'all 1.5s linear'
    });
    $(".AnNiu :first-child").removeClass("anNiu");
    $(".AnNiu :last-child").addClass("anNiu");
}
//自动轮播
var timer=setInterval(autoPaly1,2500);
function autoPaly1() {
    $(".box").css({
        left:'-=1440px',
        transition:'all 1.5s linear'
    });
    $(".AnNiu :first-child").toggleClass("anNiu");
    $(".AnNiu :last-child").toggleClass("anNiu");

    var add=$(".box :first-child")[0];

    $(".box").css({
        left:'0',
        // transition:'all 1.5s linear'
    });
    $(".box").append(add);
    // setTimeout(function () {
    //     $(".box").css({
    //         left:'0',
    //         // transition:'all 1.5s linear'
    //     });
    // },2500)
}
//移入清除自动轮播
window.onmouseover=function () {
    clearInterval(timer);
};
//移出再次调用
window.onmouseout=function () {
    timer=setInterval(autoPaly1,2500);
};

//======================度假村效果图==================
$(".boxV div").on("mouseover",function () {
    $(this).css({
        width:"40%",
        transition:"all .6s linear"
    });
    $(this).siblings().css({
        width:"30%",
        transition:"all .6s linear"
    });
});
$(".boxV div").on("mouseout",function () {
    $(".boxV div").css({
        width:"33.33%",
        transition:"all .6s linear"
    })
});


$(".find").on("click",function () {
    $(".findRoom form").submit();
});





