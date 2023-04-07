// 최상단스크롤
$("#udbtn").hide();
$(window).scroll(function(){
    if($(this).scrollTop() != 0){
        $("#udbtn").fadeIn();
    } else{
        $("#udbtn").fadeOut();
    }
});
$("#top").on('click', function() {
    $("html, body").animate({ scrollTop: 0 })
})
$("#bottom").on('click', function() {
    $("html, body").animate({ scrollTop: $('html').height() })
});

// 메뉴
$("nav #menu>li").mouseover(function(){
    $(".submenu",this).stop(true).slideDown();
})
.mouseout(function(){
    $(".submenu",this).stop(true).slideUp();
});

// 반응형 메뉴
$(".menuicon").click(function(){
    $("#actmenu").stop(true).animate({left:'0'},800);
});
$("nav .close").click(function(){
    $("#actmenu").stop(true).animate({left:'-60%'},800);
});

$("#actmenu #menu1>li").mouseover(function(){
    $(".submenu1",this).stop(true).slideDown();
}).mouseout(function(){
    $(".submenu1",this).stop(true).slideUp();
});

// 언어
$(".lang h2 a").click(function(){
    $(".langlist").stop(true).slideDown();
});
$(".langlist li:nth-child(1)").click(function(){
    $(".langlist").stop(true).slideUp();
});
$(".langlist li:nth-child(2)").click(function(){
    $(".langlist").stop(true).slideUp();
});

// 검색
$(".hicon>h2 a").click(function(){
    $(".search").stop(true).slideDown();
});
$(".search>a").click(function(){
    $(".search").stop(true).slideUp();
});

 //패밀리사이트
 $('.noMove').on('click', function(e) {
    e.preventDefault();
})
$("#fheader nav .bottommenu li:last-child a").click(function(){
    $("#familysite").css({display:'block'});
});
$("#familysite>a").click(function(){
    $("#familysite").css({display:'none'});
});