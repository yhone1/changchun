$(".icon-menu").click(function () {
    $(".nav-more").css("right","0");
});
$(".icon-close").click(function () {
    $(".nav-more").css("right","-310px");
});
//点击切换文段
$(".block-content ul li h3 span").on("click",function () {
    // console.log($(this).parent().parent());
    $(this).parent().parent().siblings().removeClass("current");
    $(this).parent().parent().addClass("current");
});