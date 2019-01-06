
var index=0;
var banner=byId("banner").getElementsByTagName("div");
var len=banner.length;
var timer=null;
var dots=byId("dots").getElementsByTagName("span");
function byId(id){
    return typeof (id)==="string"?document.getElementById(id):id
}

function slideImg(){
    var bigDiv=byId("bigDiv");
    var next=byId("next");
    var prev=byId("prev");
    bigDiv.onmouseover=function(){
        clearInterval(timer)
    };
    bigDiv.onmouseout=function(){

        timer=setInterval(function(){
            index++;
            if(index>=len){
                index=0
            }
            changeImg()

        },2000);
    };
    bigDiv.onmouseout();


    for(var j=0;j<len;j++){
        dots[j].id=j;
        dots[j].onclick=function(){
            index=this.id;
            changeImg()

        }
    }


    next.onclick=function(){
        index++;
        if(index>=len) index=0;
        changeImg()
    };

    prev.onclick=function(){
        index--;
        if(index<0) index=len-1;
        changeImg()
    }
}

function changeImg(){

    for(var i=0;i<len;i++){
        banner[i].style.display="none";
        dots[i].style.backgroundColor="gray";
    }
    banner[index].style.display="block";
    dots[index].style.backgroundColor="wheat"
}


slideImg();


$("#luox").click(function(){
    console.log("aaaa");
    $("#kaifa").css("border-bottom","0px #0c8cf6 solid");
    $("#luox").css("border-bottom","2px #0c8cf6 solid")
});
$("#kaifa").click(function(){
    $("#luox").css("border-bottom","0px #0c8cf6 solid ");
    $("#kaifa").css("border-bottom","2px #0c8cf6 solid")
});
// $(".ff").hover(bb,aa)
// function aa () {
//     $(this).css("border-bottom","0px #0c8cf6 solid")
// }
// function bb () {
//     $(this).css("border-bottom","2px #0c8cf6 solid")
// }
window.onscroll=function () {
    var scrollTop = $(document).scrollTop();
    if (scrollTop<1300) {
        $("#luox").css("border-bottom", "2px #0c8cf6 solid");
        $("#kaifa").css("border-bottom", "0px #0c8cf6 solid");
    }else {
        $("#kaifa").css("border-bottom", "2px #0c8cf6 solid");
        $("#luox").css("border-bottom", "0px #0c8cf6 solid");
        }
        
    if (scrollTop<600){
        $("nav").css("background-color","rgba(255, 255, 255, 0.28)")
        $("nav").css("transition","5s")
    }else {
        $("nav").css("background-color","rgba(0, 0, 0, 0.91)");
        $("nav ul li").css("color","rgba(255, 255, 255, 0.78)")

    }
};