
$(document).ready(function() {
    //slider
    (function($) {
        var $sliderUL = $('div.slider').css('overflow', 'hidden').children('ul'),
            $imgs = $sliderUL.find('img'),
            $imgWidth = $imgs[0].width,
            $imgsLen = $imgs.length,
            $current = 1,
            $totalImgsWidth = $imgsLen * $imgWidth;

        $('#slider-nav').show().find('a').on('click', function(e) {
            e.preventDefault();
            var $direction = $(this).data('dir'),
                $loc = $imgWidth;


            ( $direction === 'next' ) ? ++$current : --$current;

            if ( $current === 0 ) {
                $current = $imgsLen;
                $loc = $totalImgsWidth - $imgWidth;
                $direction = 'next';
            } else if ( $current - 1 === $imgsLen ) {
                $current = 1;
                $loc = 0;
            }

            transition($sliderUL, $loc, $direction);
        });

        function transition( $container, $loc, $direction ) {
            var $unit;

            if ( $direction && $loc !== 0 ) {
                $unit = ( $direction === 'next' ) ? '-=' : '+=';
            }

            $container.animate({
                'margin-left': $unit ? ($unit + $loc) : $loc

            });
        }

    })(jQuery);
    var $bannerImg = $('.banner__img'),
        $banner = $('.banner'),
        $bannerTitle = $('.banner__title'),
        $bannerTitleText = $('.banner__title-text'),
        $bannerPrice = $('.banner__price'),
        $bannerPriceText = $('.banner__price-text'),
        $btn = $('.banner__btn'),
        $bannerBg = $('.banner__bg'),
        $bannerImg = $('.banner__img'),
        $bannerSlider = $('.slider'),
        $sliderNav = $('#slider-nav');


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
        TweenLite.to($sliderNav, 0.75, {opacity: 1});

    }



    //basic gradient demo using webkit gradient + ColorPropsPlugin
    var iOS = /iPad|iPhone|iPod/.test(navigator.platform),
        isChrome_iOS = false;

    var isChromium = window.chrome,
        vendorName = window.navigator.vendor,
        isOpera = window.navigator.userAgent.indexOf("OPR") > -1,
        isChrome = false;
    if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false) {
        // is Google chrome on iOS
        //if(iOS){
        //isChrome_iOS = true;
        //}
        isChrome = true;
    }

//create an object to store initial color values
    var colors = {top:"rgba(245,145,15,1)", bottom:"rgba(255,85,0,1)"};

//create a paused tween
//use ColorPropsPlugin to tween the top and bottom colors
    var tween = TweenMax.to(colors, 0.5, {colorProps:{top:"#ff5300", bottom:"#ff5300"}, onUpdate:colorize, onUpdateParams:[".banner__btn"], paused:true});

//var tween = TweenMax.to("#box", 1, {backgroundImage: "linear-gradient(to top,#CC0000,#F3F30B)", paused:true});

    $banner.hover(over, out);
    $sliderNav.hover (over, out);

    function over() {
        tween.play();
    };

    function out() {
        tween.reverse();
    }

    function colorize(element) {
        //apply the colors to the element
        if(isChrome){
            //TweenLite.set(element, {backgroundImage:"-webkit-linear-gradient(top," + colors.top + ", " + colors.bottom + ")"});
            TweenLite.set(element, {background:"-webkit-linear-gradient(top," + colors.top + ", " + colors.bottom + ")"});
        } else {
            TweenLite.set(element, {background:"linear-gradient(to top," + colors.top + ", " + colors.bottom + ")"});
        }
        //console.log(colors.right);
    }
    // loading xml
    
    function loadData() {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'data.xml', true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;

            if (xhr.status != 200) {
                //error
                alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
            } else {
                // result
                var a = xhr.responseText;
                var regPrice = /\<\!\[cdata\[.*\]\]\>/gmi;
                var b = a.match(regPrice);
                var Price = b[0].substring(9, b[0].length - 3);
                var More = b[1].substring(9, b[1].length - 10);
                $('.banner__price-text').text(Price);
                $('.banner__btn').text(More);
            }
        }
    }

    loadData();

});





