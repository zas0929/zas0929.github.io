$(document).ready(function() {
    var $bannerImg = $('.banner__img'),
        $banner = $('.banner'),
        $bannerTitle = $('.banner__title'),
        $bannerTitleText = $('.banner__title-text'),
        $bannerPrice = $('.banner__price'),
        $bannerPriceText = $('.banner__price-text');



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
        TweenLite.to($bannerPriceText, 0.2, {opacity: 1, onComplete: sliderRun});
    }

function sliderRun() {
    $('.banner__img').fadeOut(200);
    $('.banner__slider').bxSlider();
}


});
