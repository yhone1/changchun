/**
 * Created by Administrator on 2018/11/6 0006.
 */
$("#albumout>span").click(function() {
    var index = $(this).index();
    $("#showBox img").each(function() {
        $(this).attr("src", "http://www.jq22.com/img/cs/500x300-" + ($(this).index() + 1) + ".png");
    })
    $("#cover").fadeIn(500);
    $("#albuminner").fadeIn(500);
})
$("#cover").click(function() {
    $(this).fadeOut(500);
    $("#albuminner").fadeOut(500);
})
$("#prev").click(function(e) {
    var e = e || window.event;
    e.stopPropagation();
    $("#showBox img").first().stop().animate({
        "left": "-510"
    }, 500, function() {
        $("#showBox").append($(this));
        $(this).animate({
            "left": "0"
        }, 500);
    });
    $("#showBox").stop().animate({
        "left": "240"
    }, 500, function() {
        $(this).animate({
            "left": "0"
        }, 500);
    });
})
$("#next").click(function(e) {
    var e = e || window.event;
    e.stopPropagation();
    $("#showBox img").last().stop().animate({
        "left": "510"
    }, 500, function() {
        $("#showBox").prepend($(this));
        $(this).animate({
            "left": "0"
        }, 500);
    });
    $("#showBox").stop().animate({
        "left": "-240"
    }, 500, function() {
        $(this).animate({
            "left": "0"
        }, 500);
    });
})