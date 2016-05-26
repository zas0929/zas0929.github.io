$(document).ready(function() {
    var $bannerImg = $('.banner__img'),
        $banner = $('.banner'),
        $bannerTitle = $('.banner__title'),
        $bannerTitleText = $('.banner__title-text'),
        $bannerPrice = $('.banner__price'),
        $bannerPriceText = $('.banner__price-text'),
        $btn = $('.banner__btn'),
        $bannerBg = $('.banner__bg'),
        $bannerImg = $('.banner__img'),
        $bannerSlider = $('.banner__slider');




    TweenLite.fromTo($banner, 0.2, {opacity:0}, {opacity:1, onComplete: bannerImg});

    function bannerImg() {
        TweenLite.to($bannerImg, 0.75, {scaleX: 0.25, scaleY: 0.351, x:'+=16px', y:'+=18px', onComplete: bannerTitle});
    }

    function bannerTitle() {
        TweenLite.fromTo($bannerTitle, 0.2,{scale: 0, x:'-=110px', y:'-=110px', opacity: 1}, {scale: 1, x:'+=75px', y:'+=80px', onComplete: bannerTitleText});
    }
    function bannerTitleText() {
        TweenLite.to($bannerTitleText, 0.2, {opacity: 1, onComplete: bannerPrice});
    }
    function bannerPrice() {
        TweenLite.fromTo($bannerPrice, 0.2, {scale: 0, x: 0, y: 0, opacity: 1}, {scale: 1, x:'+=110px', y:'+=56px', onComplete: bannerPriceText});
    }
    function bannerPriceText() {
        TweenLite.to($bannerPriceText, 0.2, {opacity: 1, onComplete: btnRun});
    }
    function btnRun() {
        TweenLite.fromTo($btn, 0.4, {scale: 2, opacity: 0}, {scale: 1, opacity: 1, delay: 1, y: '+=100px', onComplete: bgRun});
    }
    function bgRun() {
        TweenLite.to($bannerImg, 0.2, {opacity: 0, delay: 1.5, onComplete: sliderRun});

    }
    function sliderRun() {
        TweenLite.to($bannerBg, 0.75, {opacity: 1});
        TweenLite.to($bannerSlider, 0.75, {opacity: 1});
        $bannerSlider.bxSlider({
            speed: 750,
            pager: false
        });
    }

    ////TweenLite.to( $btn , 2 , { backgroundImage: "linear-gradient(to bottom, rgba(245,145,15,1) 0%, rgba(255,85,0,1) 100%)" } )
    //$banner.mouseover(function() {
    //    TweenLite.set($btn, 0.5, { backgroundColor: '#cc0000'});
    //});
    //    $banner.mouseout(function() {
    //        TweenLite.set($btn, 0.5, { backgroundImage: "linear-gradient(to bottom, rgba(245,145,15,1) 0%, rgba(255,85,0,1) 100%)"  });
    //    });

});
