    // 페이지제어
    let n = 0;
    let state = 1;
    $(window).on('wheel',function(){
        if(event.wheelDelta < 0 && state == 1){
            state = 0;
            n++;
            if(n > 5) n = 5;
            let next = $('.sect').eq(n);
            $('html, body').stop().animate({scrollTop: next.position().top},500, function(){
                state = 1;
            });
            console.log(n)
        }
        else if(event.wheelDelta > 0 && state == 1){
            state = 0;
            n--;
            if(n < 0) n = 0;
            let prev = $('.sect').eq(n);
            $('html, body').stop().animate({scrollTop: prev.position().top},500, function(){
                state = 1;
            });
        }
    })
    $("#pagedot a").on('click',function(e){
        e.preventDefault();
        n = $(this).index();
        let pos = $('.sect').eq(n)
        $('html, body').animate({ scrollTop: pos.position().top }, 500)
    })

    // 팝업창
    $("#popup button").click(function(){
        $("#popup").css({display:'none'});
    });

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
    }) 
    
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

    //스크롤시 메뉴 색 변경
    $(window).scroll(function(){
        if( $(this).scrollTop() >= $(window).height() ){
            $("#menu li a").css({ color:'#222'});
            $(".logo img").attr({ src: 'icon/logo-b.svg'});
            $(".lang h2 a  img").attr({ src: 'icon/language-b.svg'});
            $(".hicon>h2 a img").attr({ src: 'icon/search-b.svg'});
            $("header .menuicon img").attr({ src: 'icon/menu-burger-b.svg'});
        } 
        if( $(this).scrollTop() < $(window).height() ) {
            $("#menu li a").css({ color:'#fff'});
            $(".logo img").attr({ src: 'icon/mainlogo.svg'});
            $(".lang h2 a  img").attr({ src: 'icon/language.svg'});
            $(".hicon>h2 a img").attr({ src: 'icon/search.svg'});
            $("header .menuicon img").attr({ src: 'icon/menu-burger.svg'});
        }     
        if( $(this).scrollTop() > $(window).height()* 4 ) {
            $("#menu li a").css({ color:'#fff'});
            $(".logo img").attr({ src: 'icon/mainlogo.svg'});
            $(".lang h2 a  img").attr({ src: 'icon/language.svg'});
            $(".hicon>h2 a img").attr({ src: 'icon/search.svg'});
            $("header .menuicon img").attr({ src: 'icon/menu-burger.svg'});
        }     
    })

    // 슬로건페이지
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        contol:true,
        dot: true
    });
    $('#slider-next').click(function(){
        slider.goToNextSlide();
        return false;
    });
    $('#slider-count').click(function(){
        var count = slider.getSlideCount();
        alert('Slide count: ' + count);
        return false;
    });


    // let slogan = 1;
    // $("#sbtn button:nth-child(2)").click(function(){
    //     if(slogan < 3){
    //         $(".slogantext li").css({transform:`translateX(-${slogan}00%)`, transition: `all 0.8s`});
    //         slogan += 1;
    //     } else{
    //         $(".slogantext li").css({transform:`translateX(0)`});
    //         slogan = 1;
    //     }
    // });
    // $("#sbtn button:nth-child(1)").click(function(){
    //     if(slogan > 1){
    //         $(".slogantext li").css({transform:`translateX(-${slogan - 2}00%)`, transition: `all 0.8s`});
    //         slogan -= 1;
    //     } else{
    //         $(".slogantext li").css({transform:`translateX(-200%)`});
    //         slogan = 3;
    //     }
    // });
    



    // 비즈니스페이지
    
