$(document).ready(function() {
    var $bannerImg = $('.banner__img'),
        $banner = $('.banner'),
        $bannerTitle = $('.banner__title'),
        $bannerTitleText = $('.banner__title-text'),
        $bannerPrice = $('.banner__price'),
        $bannerPriceText = $('.banner__price-text');



    TweenLite.fromTo($banner, 0.2, {opacity:0}, {opacity:1});
    TweenLite.to($bannerImg, 0.75, {scaleX: 0.25, scaleY: 0.351, x:'+=16px', y:'+=18px'});

    TweenLite.fromTo($bannerTitle, 0.2,{scale: 0, x:'-=110px', y:'-=110px', opacity: 1}, {scale: 1, x:'+=75px', y:'+=80px', delay: 0.95})
    TweenLite.to($bannerTitleText, 0.2, {opacity: 1, delay: 1.2});

    TweenLite.fromTo($bannerPrice, 0.2, {scale: 0, x: 0, y: 0, opacity: 1}, {scale: 1, x:'+=110px', y:'+=56px', delay: 1.4})
    TweenLite.to($bannerPriceText, 0.2, {opacity: 1, delay: 1.6});

});
