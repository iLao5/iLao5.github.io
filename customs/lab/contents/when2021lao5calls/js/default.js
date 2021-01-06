var mus, is_chrome = navigator.userAgent.indexOf("Chrome") > -1, is_explorer = navigator.userAgent.indexOf("MSIE") > -1, is_firefox = navigator.userAgent.indexOf("Firefox") > -1, is_safari = navigator.userAgent.indexOf("Safari") > -1, is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
function is_touch_device() {
    "use strict";
    return "ontouchstart"in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
}
function viewport() {
    "use strict";
    var t = window
      , e = "inner";
    return "innerWidth"in window || (e = "client",
    t = document.documentElement || document.body),
    {
        width: t[e + "Width"],
        height: t[e + "Height"]
    }
}
function najvisjiBox(t) {
    "use strict";
    var e = 0;
    $(t).each((function() {
        $(this).outerHeight() > e && (e = $(this).outerHeight())
    }
    )),
    $(t).css({
        height: e
    })
}
function odstevalnik(t) {
    var e = t;
    $(".odstevalnikWrapp").addClass("aktiven"),
    $(".odstevalnikWrapp span").text(e),
    t -= 1;
    var i = setInterval((function() {
        t <= 0 && clearInterval(i),
        $(".odstevalnikWrapp span").text(0 + t),
        -1 == (t -= 1) && $(".odstevalnikWrapp").removeClass("aktiven")
    }
    ), 1e3)
}
function startp() {}
function toOprojektu() {
    "use strict";
    $("main, footer").fadeOut((function() {
        var t = "/o-projektu";
        "en" == lang && (t = "/en/o-projektu"),
        window.location.href = t
    }
    ))
}
function randOdg() {
    "use strict";
    var t = Math.floor(2 * Math.random());
    $(".odgovoriWrapp.aktiven").children().eq(t).trigger("click")
}
function vprOdg1() {
    "use strict";
    var t = $("#savaVideo");
    t.trigger("play"),
    t.on("timeupdate", (function() {
        this.currentTime > 3 && this.currentTime,
        this.currentTime > 4 && this.currentTime < 4.4 && $(".vprasanjaWrapp1").addClass("aktiven"),
        this.currentTime > 15.5 && this.currentTime < 15.9 && $(".vprasanjaWrapp1").removeClass("aktiven"),
        this.currentTime > 26.7 && this.currentTime < 27.1 && $(".vprasanjaWrapp2").addClass("aktiven"),
        this.currentTime > 33.5 && this.currentTime < 33.9 && $(".vprasanjaWrapp2").removeClass("aktiven"),
        this.currentTime > 43.5 && this.currentTime,
        this.currentTime > 49.5 && this.currentTime < 49.9 && $(".vprasanjaWrapp3").addClass("aktiven"),
        this.currentTime > 55.5 && this.currentTime < 55.9 && $(".vprasanjaWrapp3").removeClass("aktiven"),
        this.currentTime > 66.5 && this.currentTime,
        this.currentTime > 69.5 && this.currentTime < 69.9 && $(".vprasanjaWrapp4").addClass("aktiven"),
        this.currentTime > 71 && this.currentTime < 71.5 && $(".vprasanjaWrapp4").removeClass("aktiven"),
        this.currentTime > 80.5 && this.currentTime,
        this.currentTime > 82 && this.currentTime < 82.4 && (mus.volume = .4),
        this.currentTime > 83 && this.currentTime < 83.4 && (mus.volume = .3),
        this.currentTime > 84 && this.currentTime < 84.4 && (mus.volume = .2),
        this.currentTime > 85 && this.currentTime < 85.4 && (mus.volume = .1),
        this.currentTime > 85.5 && this.currentTime < 86 && (mus.volume = 0),
        this.currentTime > 15.5 && this.currentTime < 15.9 && ($("#odg1a, #odg1b").prop("muted", !0),
        $(".odgovoriWrapp1").addClass("aktiven").children().addClass("zaKlik"),
        setTimeout((function() {
            $(".timerWrapp").addClass("aktiven sec7 on"),
            odstevalnik(7),
            setTimeout((function() {
                $(".timerWrapp.aktiven").length && randOdg(),
                setTimeout((function() {
                    $(".odgovoriWrapp1").removeClass("aktiven").children().removeClass("zaKlik")
                }
                ), 4e3),
                $(".timerWrapp").removeClass("on")
            }
            ), 7e3)
        }
        ), 350)),
        this.currentTime > 33.5 && this.currentTime < 33.9 && ($("#odg1a, #odg1b").prop("muted", !0),
        $(".odgovoriWrapp2").addClass("aktiven").children().addClass("zaKlik"),
        setTimeout((function() {
            $(".timerWrapp").addClass("aktiven on"),
            odstevalnik(5),
            setTimeout((function() {
                $(".timerWrapp.aktiven").length && randOdg(),
                setTimeout((function() {
                    $(".odgovoriWrapp2").removeClass("aktiven").children().removeClass("zaKlik")
                }
                ), 4500),
                $(".timerWrapp").removeClass("on")
            }
            ), 5e3)
        }
        ), 350)),
        this.currentTime > 55.5 && this.currentTime < 55.9 && ($("#odg1a, #odg1b").prop("muted", !0),
        $(".odgovoriWrapp3").addClass("aktiven").children().addClass("zaKlik"),
        setTimeout((function() {
            $(".timerWrapp").addClass("aktiven on"),
            odstevalnik(5),
            setTimeout((function() {
                $(".timerWrapp.aktiven").length && randOdg(),
                setTimeout((function() {
                    $(".odgovoriWrapp3").removeClass("aktiven").children().removeClass("zaKlik")
                }
                ), 4500),
                $(".timerWrapp").removeClass("on")
            }
            ), 5e3)
        }
        ), 350)),
        this.currentTime > 71 && this.currentTime < 71.4 && ($("#odg1a, #odg1b").prop("muted", !0),
        $(".odgovoriWrapp4").addClass("aktiven").children().addClass("zaKlik"),
        setTimeout((function() {
            $(".timerWrapp").addClass("aktiven on"),
            odstevalnik(5),
            setTimeout((function() {
                $(".timerWrapp.aktiven").length && randOdg(),
                setTimeout((function() {
                    $(".odgovoriWrapp4").removeClass("aktiven").children().removeClass("zaKlik")
                }
                ), 4500),
                $(".timerWrapp").removeClass("on")
            }
            ), 5e3)
        }
        ), 350)),
        this.currentTime > 82.5 && this.currentTime < 82.9 && $(".posnZglas2").fadeIn()
    }
    )),
    t.on("ended", (function() {
        toOprojektu()
    }
    )),
    $("body").on("click", ".odgovoriWrapp1 .odg.zaKlik", (function() {
        $(".zaKlik").removeClass("zaKlik"),
        $(this).addClass("aktiven").siblings().addClass("pasiven");
        var t = $(this).data("odg");
        $(t).prop("muted", !1),
        $(".timerWrapp").removeClass("aktiven sec7"),
        $(".odstevalnikWrapp").removeClass("aktiven")
    }
    )),
    $("body").on("click", ".odgovoriWrapp2 .odg.zaKlik", (function() {
        $(".zaKlik").removeClass("zaKlik"),
        $(this).addClass("aktiven").siblings().addClass("pasiven");
        var t = $(this).data("odg");
        $(t).prop("muted", !1),
        $(".timerWrapp").removeClass("aktiven"),
        $(".odstevalnikWrapp").removeClass("aktiven")
    }
    )),
    $("body").on("click", ".odgovoriWrapp3 .odg.zaKlik", (function() {
        $(".zaKlik").removeClass("zaKlik"),
        $(this).addClass("aktiven").siblings().addClass("pasiven");
        var t = $(this).data("odg");
        $(t).prop("muted", !1),
        $(".timerWrapp").removeClass("aktiven"),
        $(".odstevalnikWrapp").removeClass("aktiven")
    }
    )),
    $("body").on("click", ".odgovoriWrapp4 .odg.zaKlik", (function() {
        $(".zaKlik").removeClass("zaKlik"),
        $(this).addClass("aktiven").siblings().addClass("pasiven");
        var t = $(this).data("odg");
        $(t).prop("muted", !1),
        $(".timerWrapp").removeClass("aktiven"),
        $(".odstevalnikWrapp").removeClass("aktiven")
    }
    ))
}
function anim() {
    "use strict";
    ($(window).width() >= 992 ? $(".anim:not(.triggered)") : $(".anim")).each((function() {
        if ($(this).isOnScreen() && ($(this).addClass("active"),
        $(this).hasClass("trigger"))) {
            var t = $(this).data("eletotrigger")
              , e = 350
              , i = $(this).data("delay");
            null != i && (e = i),
            setTimeout((function() {
                $("." + t).addClass("active"),
                setTimeout((function() {
                    $(".aniCaption").addClass("active")
                }
                ), e)
            }
            ), e)
        }
    }
    )),
    $(".mobileAnimTitani").each((function() {
        $(this).isOnScreen() && $(this).addClass("active")
    }
    ))
}
function paraEle(t) {
    "use strict";
    $(t).each((function(t, e) {
        if (!0 === $(e).isOnScreen() && viewport().width >= 768) {
            var i = $(window).scrollTop()
              , a = $(e).offset().top
              , n = 10;
            $(e).data("para") && (n = $(e).data("para"));
            var s = i - Math.round(a - $(window).height());
            $(e).css({
                transform: "translateY(" + s / n + "px)"
            })
        }
        viewport().width < 768 && $(e).css({
            transform: ""
        })
    }
    ))
}
is_chrome && is_safari && (is_safari = !1),
is_chrome && is_opera && (is_chrome = !1),
$.fn.imagesLoaded = function() {
    "use strict";
    var t = this.find('img[src!=""]')
      , e = this.find($("*").css("background-image"));
    if (!(t = $.merge(t, e)).length)
        return $.Deferred().resolve().promise();
    var i = [];
    return t.each((function() {
        var t = $.Deferred();
        i.push(t);
        var e = new Image;
        e.onload = function() {
            t.resolve()
        }
        ,
        e.onerror = function() {
            t.resolve()
        }
        ,
        e.src = this.src
    }
    )),
    $.when.apply($, i)
}
,
function() {
    "use strict";
    for (var t = document.querySelectorAll(".c-hamburger"), e = t.length - 1; e >= 0; e--) {
        i(t[e])
    }
    function i(t) {
        t.addEventListener("click", (function(t) {
            t.preventDefault(),
            !0 === this.classList.contains("is-active") ? this.classList.remove("is-active") : this.classList.add("is-active")
        }
        ))
    }
}(),
jQuery.fn.center = function() {
    "use strict";
    return this.css("position", "absolute"),
    this.css("top", Math.max(0, ($(window).height() - $(this).outerHeight()) / 2 + $(window).scrollTop()) + "px"),
    this.css("left", Math.max(0, ($(window).width() - $(this).outerWidth()) / 2 + $(window).scrollLeft()) + "px"),
    this
}
,
$((function() {
    "use strict";
    $("html").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", (function() {}
    ))
}
)),
viewport().width,
function(t) {
    t.fn.isOnScreen = function(e) {
        var i = this.outerHeight()
          , a = this.outerWidth();
        if (!a || !i)
            return !1;
        var n = t(window)
          , s = {
            top: n.scrollTop(),
            left: n.scrollLeft()
        };
        s.right = s.left + n.width(),
        s.bottom = s.top + n.height();
        var r = this.offset();
        r.right = r.left + a,
        r.bottom = r.top + i;
        var o = {
            top: s.bottom - r.top,
            left: s.right - r.left,
            bottom: r.bottom - s.top,
            right: r.right - s.left
        };
        return "function" == typeof e ? e.call(this, o) : o.top > 0 && o.left > 0 && o.right > 0 && o.bottom > 0
    }
}(jQuery),
$((function() {
    $.ajax({
        url: "audio/SAVA-Osamljenost-V16-WEB_1_A.mp3",
        success: function() {
            canA1 = !0
        }
    }),
    $.ajax({
        url: "audio/SAVA-Osamljenost-V16-WEB_1_B.mp3",
        success: function() {
            canA2 = !0
        }
    })
}
)),
$(document).on("pagehide", (function() {
    mus.volume = 0,
    alert("Y")
}
)),
$((function() {
    "use strict";
    $("body").on("click", ".ring", (function() {
        $(".ring").addClass("off"),
        $(".stText").removeClass("aktiven"),
        $("header, footer").addClass("inPlay"),
        setTimeout((function() {
            $(".ringWrapp").fadeOut(350, (function() {
                $(".videoContainer").delay(1500).fadeIn(2e3)
            }
            )),
            setTimeout((function() {
                $(".posnZglas1").delay(300).fadeIn()
            }
            ), 500),
            setTimeout((function() {
                $(".posnZglas").fadeOut()
            }
            ), 3500)
        }
        ), 650);
        var t = $("#odg1a");
        t.trigger("play");
        var e = $("#odg1b");
        e.trigger("play"),
        e.prop("muted", !0);
        var i = !1
          , a = document.getElementById("savaVideo");
        !function n() {
            canA1 && canA2 && !i ? t.on("timeupdate", (function() {
                this.currentTime > .5 && this.currentTime < .9 && (i = !0,
                e.currentTime = .5,
                a.currentTime = .5)
            }
            )) : setTimeout((function() {
                a.currentTime = 1,
                n()
            }
            ), 200)
        }(),
        (mus = document.getElementById("mus")).volume = .5,
        mus.play(),
        vprOdg1()
    }
    ))
}
)),
$((function() {
    "use strict";
    $("body").on("click", "#videoContr", (function() {
        var t = $("#klicVideo");
        $(this).hasClass("pause") ? (t.trigger("play"),
        $(this).removeClass("pause")) : (t.trigger("pause"),
        $(this).addClass("pause"))
    }
    ))
}
)),
$((function() {
    "use strict";
    $("#sporocilo").validate({
        errorPlacement: function(t, e) {
            "pogoji" == e.attr("name") ? t.appendTo(".checkWrapp") : t.insertAfter(e)
        },
        submitHandler: function(t) {
            $(".submit-button").addClass("state-1 animated"),
            $(t).ajaxSubmit({
                success: function(t) {
                    $("#ime, #email, #tel, #sporocilo").val(""),
                    setTimeout((function() {
                        $(".submit-button").addClass("state-2"),
                        setTimeout((function() {
                            $(".submit-button").removeClass("state-1 animated state-2")
                        }
                        ), 2e3)
                    }
                    ), 2e3)
                }
            })
        }
    })
}
)),
$((function() {}
)),
$((function() {
    "use strict";
    $(window).scroll((function() {
        var t = $(".fullWidthImgContainer.para");
        if (t.length && !0 === t.isOnScreen()) {
            var e = $(window).scrollTop();
            $(t).hasClass("paraImg") || is_touch_device() || $(t).css({
                transform: "translateY(" + e / 10 + "px)"
            }),
            $(t).find("img").css({
                "-webkit-transform": "translateY(" + e / 10 + "px)",
                transform: "translateY(" + e / 10 + "px)"
            })
        }
        var i = $(".floatingPara");
        i.length && paraEle(i);
        var a = $(".crta");
        a.length && !0 === a.isOnScreen() && a.addClass("aktiven")
    }
    ))
}
)),
$((function() {
    "use strict";
    var t = $(".floatingPara");
    t.length && paraEle(t);
    var e = $(".crta");
    e.length && !0 === e.isOnScreen() && e.addClass("aktiven")
}
)),
$((function() {
    "use strict";
    $("body").on("click", "#dskOk", (function(t) {
        t.preventDefault(),
        $.getScript("https://www.googletagmanager.com/gtag/js?id=UA-9457138-49", (function() {
            function t() {
                dataLayer.push(arguments)
            }
            window.dataLayer = window.dataLayer || [],
            t("js", new Date),
            t("config", "UA-9457138-49")
        }
        )),
        $.cookie("dsk", "da", {
            expires: 90,
            path: "/"
        }),
        $(".kukiPasicaWrapp").fadeOut(300, (function() {
            $(this).remove()
        }
        ))
    }
    )),
    $("body").on("click", "#dskN", (function(t) {
        t.preventDefault(),
        $(".kukiPasicaWrapp").fadeOut(300, (function() {
            $(this).remove()
        }
        )),
        $.cookie("dskN", "da", {
            expires: "",
            path: "/"
        })
    }
    ))
}
)),
$((function() {
    "use strict";
    var t;
    $(".langFl").length && ($("body").on("click", ".jezikiWrapp a", (function(e) {
        e.preventDefault(),
        t = $(this).attr("href"),
        $(".langFl").addClass("aktiven")
    }
    )),
    $("body").on("click", ".langFl a#yes", (function(e) {
        e.preventDefault(),
        window.location.href = t
    }
    )),
    $("body").on("click", ".langFl a#no", (function(t) {
        t.preventDefault(),
        $(".langFl").removeClass("aktiven")
    }
    )))
}
));
var my_mute = !1;
function init() {
    "use strict";
    startp(),
    anim()
}
$("#muteButton").bind("click", (function() {
    "use strict";
    $(this).toggleClass("muted"),
    $("audio,video").each((function() {
        my_mute ? $(this).data("muted") && ($(this).data("muted", !1),
        $(this).prop("volume", 1)) : $(this).muted || ($(this).data("muted", !0),
        $(this).prop("volume", 0))
    }
    )),
    my_mute = !my_mute
}
)),
$(window).scroll((function() {
    "use strict";
    anim()
}
)),
$(window).mousemove((function(t) {
    $(".cursor").css({
        left: t.pageX,
        top: t.pageY - $(document).scrollTop()
    })
}
)),
window.addEventListener("load", (function(t) {
    "use strict";
    init()
}
));
