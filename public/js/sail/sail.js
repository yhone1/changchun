//轮播
function myPre() {
    $(".box").css({
        left:"-=1000px",
        transition:"all .6s linear"
    });
    if ($(".box").css("left")=="-10000px"){
        $(".box").css({
            left:"-10000px",
        })
    }
}
function myNext() {
    console.log($(".box").css("left"));
    $(".box").css({
        left:"+=1000px",
        transition:"all .6s linear"
    })
    if ($(".box").css("left")=="0px"){
        $(".box").css({
            left:"0px",
        })
    }
}