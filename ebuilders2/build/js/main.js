$(document).ready(function(){function e(){TweenLite.to(f,.75,{scaleX:.25,scaleY:.351,x:"+=16px",y:"+=18px",onComplete:t})}function t(){TweenLite.fromTo(m,.2,{scale:0,x:"-=110px",y:"-=110px",opacity:1},{scale:1,x:"+=75px",y:"+=80px",onComplete:n})}function n(){TweenLite.to(b,.2,{opacity:1,onComplete:o})}function o(){TweenLite.fromTo(x,.2,{scale:0,x:0,y:0,opacity:1},{scale:1,x:"+=110px",y:"+=56px",onComplete:a})}function a(){TweenLite.to(w,.2,{opacity:1,onComplete:i})}function i(){TweenLite.fromTo(y,.4,{scale:2,opacity:0},{scale:1,opacity:1,delay:1,y:"+=100px",onComplete:r})}function r(){TweenLite.to(f,.2,{opacity:0,delay:1.5,onComplete:c})}function c(){TweenLite.to(g,.75,{opacity:1}),TweenLite.to(_,.75,{opacity:1}),TweenLite.to(v,.75,{opacity:1})}function p(){k.play()}function l(){k.reverse()}function s(e){C?TweenLite.set(e,{background:"-webkit-linear-gradient(top,"+P.top+", "+P.bottom+")"}):TweenLite.set(e,{background:"linear-gradient(to top,"+P.top+", "+P.bottom+")"})}function d(){var e=new XMLHttpRequest;e.open("GET","data.xml",!0),e.send(),e.onreadystatechange=function(){if(4==e.readyState)if(200!=e.status)alert("Ошибка "+e.status+": "+e.statusText);else{var t=e.responseText,n=/\<\!\[cdata\[.*\]\]\>/gim,o=t.match(n),a=o[0].substring(9,o[0].length-3),i=o[1].substring(9,o[1].length-10);$(".banner__price-text").text(a),$(".banner__btn").text(i)}}}!function(e){function t(e,t,n){var o;n&&0!==t&&(o="next"===n?"-=":"+="),e.animate({"margin-left":o?o+t:t})}var n=e("div.slider").css("overflow","hidden").children("ul"),o=n.find("img"),a=o[0].width,i=o.length,r=1,c=i*a;e("#slider-nav").show().find("a").on("click",function(o){o.preventDefault();var p=e(this).data("dir"),l=a;"next"===p?++r:--r,0===r?(r=i,l=c-a,p="next"):r-1===i&&(r=1,l=0),t(n,l,p)})}(jQuery);var f=$(".banner__img"),u=$(".banner"),m=$(".banner__title"),b=$(".banner__title-text"),x=$(".banner__price"),w=$(".banner__price-text"),y=$(".banner__btn"),g=$(".banner__bg"),f=$(".banner__img"),_=$(".slider"),v=$("#slider-nav");TweenLite.fromTo(u,.2,{opacity:0},{opacity:1,onComplete:e});var T=(/iPad|iPhone|iPod/.test(navigator.platform),window.chrome),h=window.navigator.vendor,L=window.navigator.userAgent.indexOf("OPR")>-1,C=!1;null!==T&&void 0!==T&&"Google Inc."===h&&0==L&&(C=!0);var P={top:"rgba(245,145,15,1)",bottom:"rgba(255,85,0,1)"},k=TweenMax.to(P,.5,{colorProps:{top:"#ff5300",bottom:"#ff5300"},onUpdate:s,onUpdateParams:[".banner__btn"],paused:!0});u.hover(p,l),v.hover(p,l),d()});