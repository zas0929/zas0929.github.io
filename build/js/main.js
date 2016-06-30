!function (e) {
    function n(e, n, t) {
        var o;
        t && 0 !== n && (o = "next" === t ? "-=" : "+="), e.animate({"margin-left": o ? o + n : n})
    }

    var t = e("div.slider").css("overflow", "hidden").children("ul"), o = t.find("img"), i = o[0].width, a = o.length, r = 1, c = a * i;
    e("#slider-nav").show().find("a").on("click", function (o) {
        o.preventDefault();
        var p = e(this).data("dir"), l = i;
        "next" === p ? ++r : --r, 0 === r ? (r = a, l = c - i, p = "next") : r - 1 === a && (r = 1, l = 0), n(t, l, p)
    })
}(jQuery), $(document).ready(function () {
    function e() {
        TweenLite.to(f, .75, {scaleX: .25, scaleY: .351, x: "+=16px", y: "+=18px", onComplete: n})
    }

    function n() {
        TweenLite.fromTo(s, .2, {scale: 0, x: "-=110px", y: "-=110px", opacity: 1}, {
            scale: 1,
            x: "+=75px",
            y: "+=80px",
            onComplete: t
        })
    }

    function t() {
        TweenLite.to(m, .2, {opacity: 1, onComplete: o})
    }

    function o() {
        TweenLite.fromTo(w, .2, {scale: 0, x: 0, y: 0, opacity: 1}, {
            scale: 1,
            x: "+=110px",
            y: "+=56px",
            onComplete: i
        })
    }

    function i() {
        TweenLite.to(y, .2, {opacity: 1, onComplete: a})
    }

    function a() {
        TweenLite.fromTo(b, .4, {scale: 2, opacity: 0}, {scale: 1, opacity: 1, delay: 1, y: "+=100px", onComplete: r})
    }

    function r() {
        TweenLite.to(f, .2, {opacity: 0, delay: 1.5, onComplete: c})
    }

    function c() {
        TweenLite.to(v, .75, {opacity: 1}), TweenLite.to(x, .75, {opacity: 1}), TweenLite.to(g, .75, {opacity: 1})
    }

    function p() {
        P.play()
    }

    function l() {
        P.reverse()
    }

    function d(e) {
        h ? TweenLite.set(e, {background: "-webkit-linear-gradient(top," + C.top + ", " + C.bottom + ")"}) : TweenLite.set(e, {background: "linear-gradient(to top," + C.top + ", " + C.bottom + ")"})
    }

    var f = $(".banner__img"), u = $(".banner"), s = $(".banner__title"), m = $(".banner__title-text"), w = $(".banner__price"), y = $(".banner__price-text"), b = $(".banner__btn"), v = $(".banner__bg"), f = $(".banner__img"), x = $(".slider"), g = $("#slider-nav");
    TweenLite.fromTo(u, .2, {opacity: 0}, {opacity: 1, onComplete: e});
    var T = (/iPad|iPhone|iPod/.test(navigator.platform), window.chrome), _ = window.navigator.vendor, L = window.navigator.userAgent.indexOf("OPR") > -1, h = !1;
    null !== T && void 0 !== T && "Google Inc." === _ && 0 == L && (h = !0);
    var C = {
        top: "rgba(245,145,15,1)",
        bottom: "rgba(255,85,0,1)"
    }, P = TweenMax.to(C, .5, {
        colorProps: {top: "#ff5300", bottom: "#ff5300"},
        onUpdate: d,
        onUpdateParams: [".banner__btn"],
        paused: !0
    });
    u.hover(p, l), g.hover(p, l);
    var q = (require("http"), require("url"), require("querystring"), require("node-static"));
    new q.Server(".", {cache: 0})
});