!function() {
    function z() {
        var a, c, b = arguments, d = {}, e = function(a, b) {
            var c, d;
            "object" != typeof a && (a = {});
            for (d in b) b.hasOwnProperty(d) && (c = b[d], a[d] = c && "object" == typeof c && "[object Array]" !== Object.prototype.toString.call(c) && "renderTo" !== d && "number" != typeof c.nodeType ? e(a[d] || {}, c) : b[d]);
            return a;
        };
        b[0] === !0 && (d = b[1], b = Array.prototype.slice.call(b, 2));
        c = b.length;
        for (a = 0; c > a; a++) d = e(d, b[a]);
        return d;
    }
    function C(a, b) {
        return parseInt(a, b || 10);
    }
    function Da(a) {
        return "string" == typeof a;
    }
    function ca(a) {
        return a && "object" == typeof a;
    }
    function Ha(a) {
        return "[object Array]" === Object.prototype.toString.call(a);
    }
    function qa(a) {
        return "number" == typeof a;
    }
    function Ea(a) {
        return V.log(a) / V.LN10;
    }
    function ha(a) {
        return V.pow(10, a);
    }
    function ia(a, b) {
        for (var c = a.length; c--; ) if (a[c] === b) {
            a.splice(c, 1);
            break;
        }
    }
    function r(a) {
        return a !== v && null !== a;
    }
    function I(a, b, c) {
        var d, e;
        if (Da(b)) r(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b)); else if (r(b) && ca(b)) for (d in b) a.setAttribute(d, b[d]);
        return e;
    }
    function ra(a) {
        return Ha(a) ? a : [ a ];
    }
    function J(a, b) {
        ya && !ba && b && b.opacity !== v && (b.filter = "alpha(opacity=" + 100 * b.opacity + ")");
        q(a.style, b);
    }
    function Z(a, b, c, d, e) {
        a = D.createElement(a);
        b && q(a, b);
        e && J(a, {
            padding: 0,
            border: M,
            margin: 0
        });
        c && J(a, c);
        d && d.appendChild(a);
        return a;
    }
    function ja(a, b) {
        var c = function() {
            return v;
        };
        c.prototype = new a();
        q(c.prototype, b);
        return c;
    }
    function Ia(a, b) {
        return Array((b || 2) + 1 - String(a).length).join(0) + a;
    }
    function Wa(a) {
        return 6e4 * (eb && eb(a) || nb || 0);
    }
    function Ja(a, b) {
        for (var e, f, g, h, i, c = "{", d = !1, j = []; -1 !== (c = a.indexOf(c)); ) {
            e = a.slice(0, c);
            if (d) {
                f = e.split(":");
                g = f.shift().split(".");
                i = g.length;
                e = b;
                for (h = 0; i > h; h++) e = e[g[h]];
                f.length && (f = f.join(":"), g = /\.([0-9])/, h = S.lang, i = void 0, /f$/.test(f) ? (i = (i = f.match(g)) ? i[1] : -1, 
                null !== e && (e = y.numberFormat(e, i, h.decimalPoint, f.indexOf(",") > -1 ? h.thousandsSep : ""))) : e = Oa(f, e));
            }
            j.push(e);
            a = a.slice(c + 1);
            c = (d = !d) ? "}" : "{";
        }
        j.push(a);
        return j.join("");
    }
    function ob(a) {
        return V.pow(10, U(V.log(a) / V.LN10));
    }
    function pb(a, b, c, d, e) {
        var f, g = a, c = p(c, 1);
        f = a / c;
        b || (b = [ 1, 2, 2.5, 5, 10 ], d === !1 && (1 === c ? b = [ 1, 2, 5, 10 ] : .1 >= c && (b = [ 1 / c ])));
        for (d = 0; d < b.length; d++) if (g = b[d], e && g * c >= a || !e && f <= (b[d] + (b[d + 1] || b[d])) / 2) break;
        g *= c;
        return g;
    }
    function qb(a, b) {
        var d, e, c = a.length;
        for (e = 0; c > e; e++) a[e].ss_i = e;
        a.sort(function(a, c) {
            d = b(a, c);
            return 0 === d ? a.ss_i - c.ss_i : d;
        });
        for (e = 0; c > e; e++) delete a[e].ss_i;
    }
    function Pa(a) {
        for (var b = a.length, c = a[0]; b--; ) a[b] < c && (c = a[b]);
        return c;
    }
    function Fa(a) {
        for (var b = a.length, c = a[0]; b--; ) a[b] > c && (c = a[b]);
        return c;
    }
    function Qa(a, b) {
        for (var c in a) a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c];
    }
    function Ra(a) {
        fb || (fb = Z(Ka));
        a && fb.appendChild(a);
        fb.innerHTML = "";
    }
    function ka(a, b) {
        var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;
        if (b) throw c;
        O.console && console.log(c);
    }
    function da(a) {
        return parseFloat(a.toPrecision(14));
    }
    function Sa(a, b) {
        za = p(a, b.animation);
    }
    function Cb() {
        var a = S.global, b = a.useUTC, c = b ? "getUTC" : "get", d = b ? "setUTC" : "set";
        Aa = a.Date || window.Date;
        nb = b && a.timezoneOffset;
        eb = b && a.getTimezoneOffset;
        gb = function(a, c, d, h, i, j) {
            var k;
            b ? (k = Aa.UTC.apply(0, arguments), k += Wa(k)) : k = new Aa(a, c, p(d, 1), p(h, 0), p(i, 0), p(j, 0)).getTime();
            return k;
        };
        rb = c + "Minutes";
        sb = c + "Hours";
        tb = c + "Day";
        Xa = c + "Date";
        Ya = c + "Month";
        Za = c + "FullYear";
        Db = d + "Minutes";
        Eb = d + "Hours";
        ub = d + "Date";
        vb = d + "Month";
        wb = d + "FullYear";
    }
    function L() {}
    function Ta(a, b, c, d) {
        this.axis = a;
        this.pos = b;
        this.type = c || "";
        this.isNew = !0;
        !c && !d && this.addLabel();
    }
    function Fb(a, b, c, d, e) {
        var f = a.chart.inverted;
        this.axis = a;
        this.isNegative = c;
        this.options = b;
        this.x = d;
        this.total = null;
        this.points = {};
        this.stack = e;
        this.alignOptions = {
            align: b.align || (f ? c ? "left" : "right" : "center"),
            verticalAlign: b.verticalAlign || (f ? "middle" : c ? "bottom" : "top"),
            y: p(b.y, f ? 4 : c ? 14 : -6),
            x: p(b.x, f ? c ? -6 : 6 : 0)
        };
        this.textAlign = b.textAlign || (f ? c ? "right" : "left" : "center");
    }
    var v, $a, ab, fb, S, Oa, za, zb, F, Aa, gb, nb, eb, rb, sb, tb, Xa, Ya, Za, Db, Eb, ub, vb, wb, y, D = document, O = window, V = Math, w = V.round, U = V.floor, sa = V.ceil, t = V.max, H = V.min, P = V.abs, W = V.cos, $ = V.sin, la = V.PI, ga = 2 * la / 360, Ba = navigator.userAgent, Gb = O.opera, ya = /(msie|trident)/i.test(Ba) && !Gb, hb = 8 === D.documentMode, xb = /AppleWebKit/.test(Ba), La = /Firefox/.test(Ba), Hb = /(Mobile|Android|Windows Phone)/.test(Ba), Ca = "http://www.w3.org/2000/svg", ba = !!D.createElementNS && !!D.createElementNS(Ca, "svg").createSVGRect, Lb = La && parseInt(Ba.split("Firefox/")[1], 10) < 4, ea = !ba && !ya && !!D.createElement("canvas").getContext, Ib = {}, yb = 0, ma = function() {
        return v;
    }, X = [], bb = 0, Ka = "div", M = "none", Mb = /^[0-9]+$/, ib = [ "plotTop", "marginRight", "marginBottom", "plotLeft" ], Nb = "stroke-width", N = {};
    y = O.Highcharts = O.Highcharts ? ka(16, !0) : {};
    y.seriesTypes = N;
    var q = y.extend = function(a, b) {
        var c;
        a || (a = {});
        for (c in b) a[c] = b[c];
        return a;
    }, p = y.pick = function() {
        var b, c, a = arguments, d = a.length;
        for (b = 0; d > b; b++) if (c = a[b], c !== v && null !== c) return c;
    }, cb = y.wrap = function(a, b, c) {
        var d = a[b];
        a[b] = function() {
            var a = Array.prototype.slice.call(arguments);
            a.unshift(d);
            return c.apply(this, a);
        };
    };
    Oa = function(a, b, c) {
        if (!r(b) || isNaN(b)) return "Invalid date";
        var e, a = p(a, "%Y-%m-%d %H:%M:%S"), d = new Aa(b - Wa(b)), f = d[sb](), g = d[tb](), h = d[Xa](), i = d[Ya](), j = d[Za](), k = S.lang, l = k.weekdays, d = q({
            a: l[g].substr(0, 3),
            A: l[g],
            d: Ia(h),
            e: h,
            w: g,
            b: k.shortMonths[i],
            B: k.months[i],
            m: Ia(i + 1),
            y: j.toString().substr(2, 2),
            Y: j,
            H: Ia(f),
            I: Ia(f % 12 || 12),
            l: f % 12 || 12,
            M: Ia(d[rb]()),
            p: 12 > f ? "AM" : "PM",
            P: 12 > f ? "am" : "pm",
            S: Ia(d.getSeconds()),
            L: Ia(w(b % 1e3), 3)
        }, y.dateFormats);
        for (e in d) for (;-1 !== a.indexOf("%" + e); ) a = a.replace("%" + e, "function" == typeof d[e] ? d[e](b) : d[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a;
    };
    F = {
        millisecond: 1,
        second: 1e3,
        minute: 6e4,
        hour: 36e5,
        day: 864e5,
        week: 6048e5,
        month: 24192e5,
        year: 314496e5
    };
    y.numberFormat = function(a, b, c, d) {
        var e = S.lang, a = +a || 0, f = -1 === b ? H((a.toString().split(".")[1] || "").length, 20) : isNaN(b = P(b)) ? 2 : b, b = void 0 === c ? e.decimalPoint : c, d = void 0 === d ? e.thousandsSep : d, e = 0 > a ? "-" : "", c = String(C(a = P(a).toFixed(f))), g = c.length > 3 ? c.length % 3 : 0;
        return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + P(a - c).toFixed(f).slice(2) : "");
    };
    zb = {
        init: function(a, b, c) {
            var g, h, i, b = b || "", d = a.shift, e = b.indexOf("C") > -1, f = e ? 7 : 3, b = b.split(" "), c = [].concat(c), j = function(a) {
                for (g = a.length; g--; ) "M" === a[g] && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2]);
            };
            e && (j(b), j(c));
            a.isArea && (h = b.splice(b.length - 6, 6), i = c.splice(c.length - 6, 6));
            if (d <= c.length / f && b.length === c.length) for (;d--; ) c = [].concat(c).splice(0, f).concat(c);
            a.shift = 0;
            if (b.length) for (a = c.length; b.length < a; ) d = [].concat(b).splice(b.length - f, f), 
            e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
            h && (b = b.concat(h), c = c.concat(i));
            return [ b, c ];
        },
        step: function(a, b, c, d) {
            var e = [], f = a.length;
            if (1 === c) e = d; else if (f === b.length && 1 > c) for (;f--; ) d = parseFloat(a[f]), 
            e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d; else e = b;
            return e;
        }
    };
    !function(a) {
        O.HighchartsAdapter = O.HighchartsAdapter || a && {
            init: function(b) {
                var c = a.fx;
                a.extend(a.easing, {
                    easeOutQuad: function(a, b, c, g, h) {
                        return -g * (b /= h) * (b - 2) + c;
                    }
                });
                a.each([ "cur", "_default", "width", "height", "opacity" ], function(b, e) {
                    var g, f = c.step;
                    "cur" === e ? f = c.prototype : "_default" === e && a.Tween && (f = a.Tween.propHooks[e], 
                    e = "set");
                    (g = f[e]) && (f[e] = function(a) {
                        var c, a = b ? a : this;
                        if ("align" !== a.prop) return c = a.elem, c.attr ? c.attr(a.prop, "cur" === e ? v : a.now) : g.apply(this, arguments);
                    });
                });
                cb(a.cssHooks.opacity, "get", function(a, b, c) {
                    return b.attr ? b.opacity || 0 : a.call(this, b, c);
                });
                this.addAnimSetter("d", function(a) {
                    var f, c = a.elem;
                    a.started || (f = b.init(c, c.d, c.toD), a.start = f[0], a.end = f[1], a.started = !0);
                    c.attr("d", b.step(a.start, a.end, a.pos, c.toD));
                });
                this.each = Array.prototype.forEach ? function(a, b) {
                    return Array.prototype.forEach.call(a, b);
                } : function(a, b) {
                    var c, g = a.length;
                    for (c = 0; g > c; c++) if (b.call(a[c], a[c], c, a) === !1) return c;
                };
                a.fn.highcharts = function() {
                    var c, g, a = "Chart", b = arguments;
                    if (this[0]) {
                        Da(b[0]) && (a = b[0], b = Array.prototype.slice.call(b, 1));
                        c = b[0];
                        c !== v && (c.chart = c.chart || {}, c.chart.renderTo = this[0], new y[a](c, b[1]), 
                        g = this);
                        c === v && (g = X[I(this[0], "data-highcharts-chart")]);
                    }
                    return g;
                };
            },
            addAnimSetter: function(b, c) {
                a.Tween ? a.Tween.propHooks[b] = {
                    set: c
                } : a.fx.step[b] = c;
            },
            getScript: a.getScript,
            inArray: a.inArray,
            adapterRun: function(b, c) {
                return a(b)[c]();
            },
            grep: a.grep,
            map: function(a, c) {
                for (var d = [], e = 0, f = a.length; f > e; e++) d[e] = c.call(a[e], a[e], e, a);
                return d;
            },
            offset: function(b) {
                return a(b).offset();
            },
            addEvent: function(b, c, d) {
                a(b).bind(c, d);
            },
            removeEvent: function(b, c, d) {
                var e = D.removeEventListener ? "removeEventListener" : "detachEvent";
                D[e] && b && !b[e] && (b[e] = function() {});
                a(b).unbind(c, d);
            },
            fireEvent: function(b, c, d, e) {
                var h, f = a.Event(c), g = "detached" + c;
                !ya && d && (delete d.layerX, delete d.layerY, delete d.returnValue);
                q(f, d);
                b[c] && (b[g] = b[c], b[c] = null);
                a.each([ "preventDefault", "stopPropagation" ], function(a, b) {
                    var c = f[b];
                    f[b] = function() {
                        try {
                            c.call(f);
                        } catch (a) {
                            "preventDefault" === b && (h = !0);
                        }
                    };
                });
                a(b).trigger(f);
                b[g] && (b[c] = b[g], b[g] = null);
                e && !f.isDefaultPrevented() && !h && e(f);
            },
            washMouseEvent: function(a) {
                var c = a.originalEvent || a;
                c.pageX === v && (c.pageX = a.pageX, c.pageY = a.pageY);
                return c;
            },
            animate: function(b, c, d) {
                var e = a(b);
                b.style || (b.style = {});
                c.d && (b.toD = c.d, c.d = 1);
                e.stop();
                c.opacity !== v && b.attr && (c.opacity += "px");
                b.hasAnim = 1;
                e.animate(c, d);
            },
            stop: function(b) {
                b.hasAnim && a(b).stop();
            }
        };
    }(O.jQuery);
    var Q = O.HighchartsAdapter, A = Q || {};
    Q && Q.init.call(Q, zb);
    var jb = A.adapterRun, Ob = A.getScript, Ma = A.inArray, m = y.each = A.each, kb = A.grep, Pb = A.offset, Ua = A.map, K = A.addEvent, Y = A.removeEvent, G = A.fireEvent, Qb = A.washMouseEvent, lb = A.animate, db = A.stop;
    S = {
        colors: "#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),
        symbols: [ "circle", "diamond", "square", "triangle", "triangle-down" ],
        lang: {
            loading: "Loading...",
            months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            decimalPoint: ".",
            numericSymbols: "k,M,G,T,P,E".split(","),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com/4.1.4/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com/4.1.4/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [ 10, 10, 15, 10 ],
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {
                    zIndex: 20
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            }
        },
        title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            style: {
                color: "#333333",
                fontSize: "18px"
            }
        },
        subtitle: {
            text: "",
            align: "center",
            style: {
                color: "#555555"
            }
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1e3
                },
                events: {},
                lineWidth: 2,
                marker: {
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {
                            enabled: !0,
                            lineWidthPlus: 1,
                            radiusPlus: 2
                        },
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: {
                    align: "center",
                    formatter: function() {
                        return null === this.y ? "" : y.numberFormat(this.y, -1);
                    },
                    style: {
                        color: "contrast",
                        fontSize: "11px",
                        fontWeight: "bold",
                        textShadow: "0 0 6px contrast, 0 0 3px contrast"
                    },
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                    padding: 5
                },
                cropThreshold: 300,
                pointRange: 0,
                states: {
                    hover: {
                        lineWidthPlus: 1,
                        marker: {},
                        halo: {
                            size: 10,
                            opacity: .25
                        }
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0,
                turboThreshold: 1e3
            }
        },
        labels: {
            style: {
                position: "absolute",
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name;
            },
            borderColor: "#909090",
            borderRadius: 0,
            navigation: {
                activeColor: "#274b6d",
                inactiveColor: "#CCC"
            },
            shadow: !1,
            itemStyle: {
                color: "#333333",
                fontSize: "12px",
                fontWeight: "bold"
            },
            itemHoverStyle: {
                color: "#000"
            },
            itemHiddenStyle: {
                color: "#CCC"
            },
            itemCheckboxStyle: {
                position: "absolute",
                width: "13px",
                height: "13px"
            },
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
                style: {
                    fontWeight: "bold"
                }
            }
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: "relative",
                top: "45%"
            },
            style: {
                position: "absolute",
                backgroundColor: "white",
                opacity: .5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: ba,
            backgroundColor: "rgba(249, 249, 249, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            footerFormat: "",
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: Hb ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "9px"
            }
        }
    };
    var aa = S.plotOptions, Q = aa.line;
    Cb();
    var Rb = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, Sb = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, Tb = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, na = function(a) {
        var c, d, b = [];
        !function(a) {
            a && a.stops ? d = Ua(a.stops, function(a) {
                return na(a[1]);
            }) : (c = Rb.exec(a)) ? b = [ C(c[1]), C(c[2]), C(c[3]), parseFloat(c[4], 10) ] : (c = Sb.exec(a)) ? b = [ C(c[1], 16), C(c[2], 16), C(c[3], 16), 1 ] : (c = Tb.exec(a)) && (b = [ C(c[1]), C(c[2]), C(c[3]), 1 ]);
        }(a);
        return {
            get: function(c) {
                var f;
                d ? (f = z(a), f.stops = [].concat(f.stops), m(d, function(a, b) {
                    f.stops[b] = [ f.stops[b][0], a.get(c) ];
                })) : f = b && !isNaN(b[0]) ? "rgb" === c ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : "a" === c ? b[3] : "rgba(" + b.join(",") + ")" : a;
                return f;
            },
            brighten: function(a) {
                if (d) m(d, function(b) {
                    b.brighten(a);
                }); else if (qa(a) && 0 !== a) {
                    var c;
                    for (c = 0; 3 > c; c++) b[c] += C(255 * a), b[c] < 0 && (b[c] = 0), b[c] > 255 && (b[c] = 255);
                }
                return this;
            },
            rgba: b,
            setOpacity: function(a) {
                b[3] = a;
                return this;
            },
            raw: a
        };
    };
    L.prototype = {
        opacity: 1,
        textProps: "fontSize,fontWeight,fontFamily,color,lineHeight,width,textDecoration,textShadow".split(","),
        init: function(a, b) {
            this.element = "span" === b ? Z(b) : D.createElementNS(Ca, b);
            this.renderer = a;
        },
        animate: function(a, b, c) {
            b = p(b, za, !0);
            db(this);
            if (b) {
                b = z(b, {});
                c && (b.complete = c);
                lb(this, a, b);
            } else this.attr(a), c && c();
            return this;
        },
        colorGradient: function(a, b, c) {
            var e, f, g, h, i, j, k, l, n, o, d = this.renderer, s = [];
            a.linearGradient ? f = "linearGradient" : a.radialGradient && (f = "radialGradient");
            if (f) {
                g = a[f];
                h = d.gradients;
                j = a.stops;
                n = c.radialReference;
                Ha(g) && (a[f] = g = {
                    x1: g[0],
                    y1: g[1],
                    x2: g[2],
                    y2: g[3],
                    gradientUnits: "userSpaceOnUse"
                });
                "radialGradient" === f && n && !r(g.gradientUnits) && (g = z(g, {
                    cx: n[0] - n[2] / 2 + g.cx * n[2],
                    cy: n[1] - n[2] / 2 + g.cy * n[2],
                    r: g.r * n[2],
                    gradientUnits: "userSpaceOnUse"
                }));
                for (o in g) "id" !== o && s.push(o, g[o]);
                for (o in j) s.push(j[o]);
                s = s.join(",");
                h[s] ? a = h[s].attr("id") : (g.id = a = "highcharts-" + yb++, h[s] = i = d.createElement(f).attr(g).add(d.defs), 
                i.stops = [], m(j, function(a) {
                    0 === a[1].indexOf("rgba") ? (e = na(a[1]), k = e.get("rgb"), l = e.get("a")) : (k = a[1], 
                    l = 1);
                    a = d.createElement("stop").attr({
                        offset: a[0],
                        "stop-color": k,
                        "stop-opacity": l
                    }).add(i);
                    i.stops.push(a);
                }));
                c.setAttribute(b, "url(" + d.url + "#" + a + ")");
            }
        },
        applyTextShadow: function(a) {
            var c, b = this.element, d = -1 !== a.indexOf("contrast"), e = this.renderer.forExport || b.style.textShadow !== v && !ya;
            d && (a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill)));
            e ? d && J(b, {
                textShadow: a
            }) : (this.fakeTS = !0, this.ySetter = this.xSetter, c = [].slice.call(b.getElementsByTagName("tspan")), 
            m(a.split(/\s?,\s?/g), function(a) {
                var e, i, d = b.firstChild, a = a.split(" ");
                e = a[a.length - 1];
                (i = a[a.length - 2]) && m(c, function(a, c) {
                    var f;
                    0 === c && (a.setAttribute("x", b.getAttribute("x")), c = b.getAttribute("y"), a.setAttribute("y", c || 0), 
                    null === c && b.setAttribute("y", 0));
                    f = a.cloneNode(1);
                    I(f, {
                        "class": "highcharts-text-shadow",
                        fill: e,
                        stroke: e,
                        "stroke-opacity": 1 / t(C(i), 3),
                        "stroke-width": i,
                        "stroke-linejoin": "round"
                    });
                    b.insertBefore(f, d);
                });
            }));
        },
        attr: function(a, b) {
            var c, d, f, h, e = this.element, g = this;
            "string" == typeof a && b !== v && (c = a, a = {}, a[c] = b);
            if ("string" == typeof a) g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e); else {
                for (c in a) {
                    d = a[c];
                    h = !1;
                    this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c) && (f || (this.symbolAttr(a), 
                    f = !0), h = !0);
                    !this.rotation || "x" !== c && "y" !== c || (this.doTransform = !0);
                    h || (this[c + "Setter"] || this._defaultSetter).call(this, d, c, e);
                    this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c) && this.updateShadows(c, d);
                }
                this.doTransform && (this.updateTransform(), this.doTransform = !1);
            }
            return g;
        },
        updateShadows: function(a, b) {
            for (var c = this.shadows, d = c.length; d--; ) c[d].setAttribute(a, "height" === a ? t(b - (c[d].cutHeight || 0), 0) : "d" === a ? this.d : b);
        },
        addClass: function(a) {
            var b = this.element, c = I(b, "class") || "";
            -1 === c.indexOf(a) && I(b, "class", c + " " + a);
            return this;
        },
        symbolAttr: function(a) {
            var b = this;
            m("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function(c) {
                b[c] = p(a[c], b[c]);
            });
            b.attr({
                d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)
            });
        },
        clip: function(a) {
            return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : M);
        },
        crisp: function(a) {
            var b, d, c = {}, e = a.strokeWidth || this.strokeWidth || 0;
            d = w(e) % 2 / 2;
            a.x = U(a.x || this.x || 0) + d;
            a.y = U(a.y || this.y || 0) + d;
            a.width = U((a.width || this.width || 0) - 2 * d);
            a.height = U((a.height || this.height || 0) - 2 * d);
            a.strokeWidth = e;
            for (b in a) this[b] !== a[b] && (this[b] = c[b] = a[b]);
            return c;
        },
        css: function(a) {
            var e, f, b = this.styles, c = {}, d = this.element, g = "";
            e = !b;
            a && a.color && (a.fill = a.color);
            if (b) for (f in a) a[f] !== b[f] && (c[f] = a[f], e = !0);
            if (e) {
                e = this.textWidth = a && a.width && "text" === d.nodeName.toLowerCase() && C(a.width) || this.textWidth;
                b && (a = q(b, c));
                this.styles = a;
                e && (ea || !ba && this.renderer.forExport) && delete a.width;
                if (ya && !ba) J(this.element, a); else {
                    b = function(a, b) {
                        return "-" + b.toLowerCase();
                    };
                    for (f in a) g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";";
                    I(d, "style", g);
                }
                e && this.added && this.renderer.buildText(this);
            }
            return this;
        },
        on: function(a, b) {
            var c = this, d = c.element;
            ab && "click" === a ? (d.ontouchstart = function(a) {
                c.touchEventFired = Aa.now();
                a.preventDefault();
                b.call(d, a);
            }, d.onclick = function(a) {
                (-1 === Ba.indexOf("Android") || Aa.now() - (c.touchEventFired || 0) > 1100) && b.call(d, a);
            }) : d["on" + a] = b;
            return this;
        },
        setRadialReference: function(a) {
            this.element.radialReference = a;
            return this;
        },
        translate: function(a, b) {
            return this.attr({
                translateX: a,
                translateY: b
            });
        },
        invert: function() {
            this.inverted = !0;
            this.updateTransform();
            return this;
        },
        updateTransform: function() {
            var a = this.translateX || 0, b = this.translateY || 0, c = this.scaleX, d = this.scaleY, e = this.inverted, f = this.rotation, g = this.element;
            e && (a += this.attr("width"), b += this.attr("height"));
            a = [ "translate(" + a + "," + b + ")" ];
            e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")");
            (r(c) || r(d)) && a.push("scale(" + p(c, 1) + " " + p(d, 1) + ")");
            a.length && g.setAttribute("transform", a.join(" "));
        },
        toFront: function() {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this;
        },
        align: function(a, b, c) {
            var d, e, f, g, h = {};
            e = this.renderer;
            f = e.alignedObjects;
            a ? (this.alignOptions = a, this.alignByTranslate = b, !c || Da(c)) && (this.alignTo = d = c || "renderer", 
            ia(f, this), f.push(this), c = null) : (a = this.alignOptions, b = this.alignByTranslate, 
            d = this.alignTo);
            c = p(c, e[d], e);
            d = a.align;
            e = a.verticalAlign;
            f = (c.x || 0) + (a.x || 0);
            g = (c.y || 0) + (a.y || 0);
            ("right" === d || "center" === d) && (f += (c.width - (a.width || 0)) / {
                right: 1,
                center: 2
            }[d]);
            h[b ? "translateX" : "x"] = w(f);
            ("bottom" === e || "middle" === e) && (g += (c.height - (a.height || 0)) / ({
                bottom: 1,
                middle: 2
            }[e] || 1));
            h[b ? "translateY" : "y"] = w(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = !0;
            this.alignAttr = h;
            return this;
        },
        getBBox: function(a) {
            var b, d, c = this.renderer, e = this.rotation, f = this.element, g = this.styles, h = e * ga;
            d = this.textStr;
            var i, k, l, j = f.style;
            d !== v && (l = [ "", e || 0, g && g.fontSize, f.style.width ].join(","), l = "" === d || Mb.test(d) ? "num:" + d.toString().length + l : d + l);
            l && !a && (b = c.cache[l]);
            if (!b) {
                if (f.namespaceURI === Ca || c.forExport) {
                    try {
                        k = this.fakeTS && function(a) {
                            m(f.querySelectorAll(".highcharts-text-shadow"), function(b) {
                                b.style.display = a;
                            });
                        }, La && j.textShadow ? (i = j.textShadow, j.textShadow = "") : k && k(M), b = f.getBBox ? q({}, f.getBBox()) : {
                            width: f.offsetWidth,
                            height: f.offsetHeight
                        }, i ? j.textShadow = i : k && k("");
                    } catch (n) {}
                    (!b || b.width < 0) && (b = {
                        width: 0,
                        height: 0
                    });
                } else b = this.htmlGetBBox();
                if (c.isSVG) {
                    a = b.width;
                    d = b.height;
                    ya && g && "11px" === g.fontSize && "16.9" === d.toPrecision(3) && (b.height = d = 14);
                    e && (b.width = P(d * $(h)) + P(a * W(h)), b.height = P(d * W(h)) + P(a * $(h)));
                }
                c.cache[l] = b;
            }
            return b;
        },
        show: function(a) {
            a && this.element.namespaceURI === Ca ? this.element.removeAttribute("visibility") : this.attr({
                visibility: a ? "inherit" : "visible"
            });
            return this;
        },
        hide: function() {
            return this.attr({
                visibility: "hidden"
            });
        },
        fadeOut: function(a) {
            var b = this;
            b.animate({
                opacity: 0
            }, {
                duration: a || 150,
                complete: function() {
                    b.attr({
                        y: -9999
                    });
                }
            });
        },
        add: function(a) {
            var d, b = this.renderer, c = this.element;
            a && (this.parentGroup = a);
            this.parentInverted = a && a.inverted;
            void 0 !== this.textStr && b.buildText(this);
            this.added = !0;
            (!a || a.handleZ || this.zIndex) && (d = this.zIndexSetter());
            d || (a ? a.element : b.box).appendChild(c);
            this.onAdd && this.onAdd();
            return this;
        },
        safeRemoveChild: function(a) {
            var b = a.parentNode;
            b && b.removeChild(a);
        },
        destroy: function() {
            var e, f, a = this, b = a.element || {}, c = a.shadows, d = a.renderer.isSVG && "SPAN" === b.nodeName && a.parentGroup;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
            db(a);
            a.clipPath && (a.clipPath = a.clipPath.destroy());
            if (a.stops) {
                for (f = 0; f < a.stops.length; f++) a.stops[f] = a.stops[f].destroy();
                a.stops = null;
            }
            a.safeRemoveChild(b);
            for (c && m(c, function(b) {
                a.safeRemoveChild(b);
            }); d && d.div && 0 === d.div.childNodes.length; ) b = d.parentGroup, a.safeRemoveChild(d.div), 
            delete d.div, d = b;
            a.alignTo && ia(a.renderer.alignedObjects, a);
            for (e in a) delete a[e];
            return null;
        },
        shadow: function(a, b, c) {
            var e, f, h, i, j, k, d = [], g = this.element;
            if (a) {
                i = p(a.width, 3);
                j = (a.opacity || .15) / i;
                k = this.parentInverted ? "(-1,-1)" : "(" + p(a.offsetX, 1) + ", " + p(a.offsetY, 1) + ")";
                for (e = 1; i >= e; e++) {
                    f = g.cloneNode(0);
                    h = 2 * i + 1 - 2 * e;
                    I(f, {
                        isShadow: "true",
                        stroke: a.color || "black",
                        "stroke-opacity": j * e,
                        "stroke-width": h,
                        transform: "translate" + k,
                        fill: M
                    });
                    c && (I(f, "height", t(I(f, "height") - h, 0)), f.cutHeight = h);
                    b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g);
                    d.push(f);
                }
                this.shadows = d;
            }
            return this;
        },
        xGetter: function(a) {
            "circle" === this.element.nodeName && (a = {
                x: "cx",
                y: "cy"
            }[a] || a);
            return this._defaultGetter(a);
        },
        _defaultGetter: function(a) {
            a = p(this[a], this.element ? this.element.getAttribute(a) : null, 0);
            /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
            return a;
        },
        dSetter: function(a, b, c) {
            a && a.join && (a = a.join(" "));
            /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
            c.setAttribute(b, a);
            this[b] = a;
        },
        dashstyleSetter: function(a) {
            var b;
            if (a = a && a.toLowerCase()) {
                a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                for (b = a.length; b--; ) a[b] = C(a[b]) * this["stroke-width"];
                a = a.join(",").replace("NaN", "none");
                this.element.setAttribute("stroke-dasharray", a);
            }
        },
        alignSetter: function(a) {
            this.element.setAttribute("text-anchor", {
                left: "start",
                center: "middle",
                right: "end"
            }[a]);
        },
        opacitySetter: function(a, b, c) {
            this[b] = a;
            c.setAttribute(b, a);
        },
        titleSetter: function(a) {
            var b = this.element.getElementsByTagName("title")[0];
            b || (b = D.createElementNS(Ca, "title"), this.element.appendChild(b));
            b.textContent = String(p(a), "").replace(/<[^>]*>/g, "");
        },
        textSetter: function(a) {
            a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this));
        },
        fillSetter: function(a, b, c) {
            "string" == typeof a ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c);
        },
        zIndexSetter: function(a, b) {
            var e, f, h, c = this.renderer, d = this.parentGroup, c = (d || c).element || c.box, g = this.element;
            e = this.added;
            var i;
            r(a) && (g.setAttribute(b, a), a = +a, this[b] === a && (e = !1), this[b] = a);
            if (e) {
                (a = this.zIndex) && d && (d.handleZ = !0);
                d = c.childNodes;
                for (i = 0; i < d.length && !h; i++) (e = d[i], f = I(e, "zIndex"), e !== g && (C(f) > a || !r(a) && r(f))) && (c.insertBefore(g, e), 
                h = !0);
                h || c.appendChild(g);
            }
            return h;
        },
        _defaultSetter: function(a, b, c) {
            c.setAttribute(b, a);
        }
    };
    L.prototype.yGetter = L.prototype.xGetter;
    L.prototype.translateXSetter = L.prototype.translateYSetter = L.prototype.rotationSetter = L.prototype.verticalAlignSetter = L.prototype.scaleXSetter = L.prototype.scaleYSetter = function(a, b) {
        this[b] = a;
        this.doTransform = !0;
    };
    L.prototype["stroke-widthSetter"] = L.prototype.strokeSetter = function(a, b, c) {
        this[b] = a;
        this.stroke && this["stroke-width"] ? (this.strokeWidth = this["stroke-width"], 
        L.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), 
        this.hasStroke = !0) : "stroke-width" === b && 0 === a && this.hasStroke && (c.removeAttribute("stroke"), 
        this.hasStroke = !1);
    };
    var ta = function() {
        this.init.apply(this, arguments);
    };
    ta.prototype = {
        Element: L,
        init: function(a, b, c, d, e) {
            var g, f = location, d = this.createElement("svg").attr({
                version: "1.1"
            }).css(this.getStyle(d));
            g = d.element;
            a.appendChild(g);
            -1 === a.innerHTML.indexOf("xmlns") && I(g, "xmlns", Ca);
            this.isSVG = !0;
            this.box = g;
            this.boxWrapper = d;
            this.alignedObjects = [];
            this.url = (La || xb) && D.getElementsByTagName("base").length ? f.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(D.createTextNode("Created with Highcharts 4.1.4"));
            this.defs = this.createElement("defs").add();
            this.forExport = e;
            this.gradients = {};
            this.cache = {};
            this.setSize(b, c, !1);
            var h;
            La && a.getBoundingClientRect && (this.subPixelFix = b = function() {
                J(a, {
                    left: 0,
                    top: 0
                });
                h = a.getBoundingClientRect();
                J(a, {
                    left: sa(h.left) - h.left + "px",
                    top: sa(h.top) - h.top + "px"
                });
            }, b(), K(O, "resize", b));
        },
        getStyle: function(a) {
            return this.style = q({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            }, a);
        },
        isHidden: function() {
            return !this.boxWrapper.getBBox().width;
        },
        destroy: function() {
            var a = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            Qa(this.gradients || {});
            this.gradients = null;
            a && (this.defs = a.destroy());
            this.subPixelFix && Y(O, "resize", this.subPixelFix);
            return this.alignedObjects = null;
        },
        createElement: function(a) {
            var b = new this.Element();
            b.init(this, a);
            return b;
        },
        draw: function() {},
        buildText: function(a) {
            for (var h, i, b = a.element, c = this, d = c.forExport, e = p(a.textStr, "").toString(), f = -1 !== e.indexOf("<"), g = b.childNodes, j = I(b, "x"), k = a.styles, l = a.textWidth, n = k && k.lineHeight, o = k && k.textShadow, s = k && "ellipsis" === k.textOverflow, x = g.length, T = l && !a.added && this.box, B = function(a) {
                return n ? C(n) : c.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : k && k.fontSize || c.style.fontSize || 12, a).h;
            }, u = function(a) {
                return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
            }; x--; ) b.removeChild(g[x]);
            f || o || s || -1 !== e.indexOf(" ") ? (h = /<.*style="([^"]+)".*>/, i = /<.*href="(http[^"]+)".*>/, 
            T && T.appendChild(b), e = f ? e.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [ e ], 
            "" === e[e.length - 1] && e.pop(), m(e, function(e, f) {
                var g, n = 0, e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                g = e.split("|||");
                m(g, function(e) {
                    if ("" !== e || 1 === g.length) {
                        var p, o = {}, x = D.createElementNS(Ca, "tspan");
                        h.test(e) && (p = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), I(x, "style", p));
                        i.test(e) && !d && (I(x, "onclick", 'location.href="' + e.match(i)[1] + '"'), J(x, {
                            cursor: "pointer"
                        }));
                        e = u(e.replace(/<(.|\n)*?>/g, "") || " ");
                        if (" " !== e) {
                            x.appendChild(D.createTextNode(e));
                            n ? o.dx = 0 : f && null !== j && (o.x = j);
                            I(x, o);
                            b.appendChild(x);
                            !n && f && (!ba && d && J(x, {
                                display: "block"
                            }), I(x, "dy", B(x)));
                            if (l) {
                                for (var T, r, ua, o = e.replace(/([^\^])-/g, "$1- ").split(" "), m = g.length > 1 || f || o.length > 1 && "nowrap" !== k.whiteSpace, v = [], t = B(x), w = 1, q = a.rotation, z = e, y = z.length; (m || s) && (o.length || v.length); ) a.rotation = 0, 
                                T = a.getBBox(!0), ua = T.width, !ba && c.forExport && (ua = c.measureSpanWidth(x.firstChild.data, a.styles)), 
                                T = ua > l, void 0 === r && (r = T), s && r ? (y /= 2, "" === z || !T && .5 > y ? o = [] : (T && (r = !0), 
                                z = e.substring(0, z.length + (T ? -1 : 1) * sa(y)), o = [ z + "…" ], x.removeChild(x.firstChild))) : T && 1 !== o.length ? (x.removeChild(x.firstChild), 
                                v.unshift(o.pop())) : (o = v, v = [], o.length && (w++, x = D.createElementNS(Ca, "tspan"), 
                                I(x, {
                                    dy: t,
                                    x: j
                                }), p && I(x, "style", p), b.appendChild(x)), ua > l && (l = ua)), o.length && x.appendChild(D.createTextNode(o.join(" ").replace(/- /g, "-")));
                                r && a.attr("title", a.textStr);
                                a.rotation = q;
                            }
                            n++;
                        }
                    }
                });
            }), T && T.removeChild(b), o && a.applyTextShadow && a.applyTextShadow(o)) : b.appendChild(D.createTextNode(u(e)));
        },
        getContrast: function(a) {
            a = na(a).rgba;
            return a[0] + a[1] + a[2] > 384 ? "#000" : "#FFF";
        },
        button: function(a, b, c, d, e, f, g, h, i) {
            var l, n, o, s, x, p, j = this.label(a, b, c, i, null, null, null, null, "button"), k = 0, a = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            }, e = z({
                "stroke-width": 1,
                stroke: "#CCCCCC",
                fill: {
                    linearGradient: a,
                    stops: [ [ 0, "#FEFEFE" ], [ 1, "#F6F6F6" ] ]
                },
                r: 2,
                padding: 5,
                style: {
                    color: "black"
                }
            }, e);
            o = e.style;
            delete e.style;
            f = z(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [ [ 0, "#FFF" ], [ 1, "#ACF" ] ]
                }
            }, f);
            s = f.style;
            delete f.style;
            g = z(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [ [ 0, "#9BD" ], [ 1, "#CDF" ] ]
                }
            }, g);
            x = g.style;
            delete g.style;
            h = z(e, {
                style: {
                    color: "#CCC"
                }
            }, h);
            p = h.style;
            delete h.style;
            K(j.element, ya ? "mouseover" : "mouseenter", function() {
                3 !== k && j.attr(f).css(s);
            });
            K(j.element, ya ? "mouseout" : "mouseleave", function() {
                3 !== k && (l = [ e, f, g ][k], n = [ o, s, x ][k], j.attr(l).css(n));
            });
            j.setState = function(a) {
                (j.state = k = a) ? 2 === a ? j.attr(g).css(x) : 3 === a && j.attr(h).css(p) : j.attr(e).css(o);
            };
            return j.on("click", function() {
                3 !== k && d.call(j);
            }).attr(e).css(q({
                cursor: "default"
            }, o));
        },
        crispLine: function(a, b) {
            a[1] === a[4] && (a[1] = a[4] = w(a[1]) - b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = w(a[2]) + b % 2 / 2);
            return a;
        },
        path: function(a) {
            var b = {
                fill: M
            };
            Ha(a) ? b.d = a : ca(a) && q(b, a);
            return this.createElement("path").attr(b);
        },
        circle: function(a, b, c) {
            a = ca(a) ? a : {
                x: a,
                y: b,
                r: c
            };
            b = this.createElement("circle");
            b.xSetter = function(a) {
                this.element.setAttribute("cx", a);
            };
            b.ySetter = function(a) {
                this.element.setAttribute("cy", a);
            };
            return b.attr(a);
        },
        arc: function(a, b, c, d, e, f) {
            ca(a) && (b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x);
            a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {
                innerR: d || 0,
                start: e || 0,
                end: f || 0
            });
            a.r = c;
            return a;
        },
        rect: function(a, b, c, d, e, f) {
            var e = ca(a) ? a.r : e, g = this.createElement("rect"), a = ca(a) ? a : a === v ? {} : {
                x: a,
                y: b,
                width: t(c, 0),
                height: t(d, 0)
            };
            f !== v && (a.strokeWidth = f, a = g.crisp(a));
            e && (a.r = e);
            g.rSetter = function(a) {
                I(this.element, {
                    rx: a,
                    ry: a
                });
            };
            return g.attr(a);
        },
        setSize: function(a, b, c) {
            var d = this.alignedObjects, e = d.length;
            this.width = a;
            this.height = b;
            for (this.boxWrapper[p(c, !0) ? "animate" : "attr"]({
                width: a,
                height: b
            }); e--; ) d[e].align();
        },
        g: function(a) {
            var b = this.createElement("g");
            return r(a) ? b.attr({
                "class": "highcharts-" + a
            }) : b;
        },
        image: function(a, b, c, d, e) {
            var f = {
                preserveAspectRatio: M
            };
            arguments.length > 1 && q(f, {
                x: b,
                y: c,
                width: d,
                height: e
            });
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
            return f;
        },
        symbol: function(a, b, c, d, e, f) {
            var g, j, k, h = this.symbols[a], h = h && h(w(b), w(c), d, e, f), i = /^url\((.*?)\)$/;
            h ? (g = this.path(h), q(g, {
                symbolName: a,
                x: b,
                y: c,
                width: d,
                height: e
            }), f && q(g, f)) : i.test(a) && (k = function(a, b) {
                a.element && (a.attr({
                    width: b[0],
                    height: b[1]
                }), a.alignByTranslate || a.translate(w((d - b[0]) / 2), w((e - b[1]) / 2)));
            }, j = a.match(i)[1], a = Ib[j] || f && f.width && f.height && [ f.width, f.height ], 
            g = this.image(j).attr({
                x: b,
                y: c
            }), g.isImg = !0, a ? k(g, a) : (g.attr({
                width: 0,
                height: 0
            }), Z("img", {
                onload: function() {
                    k(g, Ib[j] = [ this.width, this.height ]);
                },
                src: j
            })));
            return g;
        },
        symbols: {
            circle: function(a, b, c, d) {
                var e = .166 * c;
                return [ "M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z" ];
            },
            square: function(a, b, c, d) {
                return [ "M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z" ];
            },
            triangle: function(a, b, c, d) {
                return [ "M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z" ];
            },
            "triangle-down": function(a, b, c, d) {
                return [ "M", a, b, "L", a + c, b, a + c / 2, b + d, "Z" ];
            },
            diamond: function(a, b, c, d) {
                return [ "M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z" ];
            },
            arc: function(a, b, c, d, e) {
                var f = e.start, c = e.r || c || d, g = e.end - .001, d = e.innerR, h = e.open, i = W(f), j = $(f), k = W(g), g = $(g), e = e.end - f < la ? 0 : 1;
                return [ "M", a + c * i, b + c * j, "A", c, c, 0, e, 1, a + c * k, b + c * g, h ? "M" : "L", a + d * k, b + d * g, "A", d, d, 0, e, 0, a + d * i, b + d * j, h ? "" : "Z" ];
            },
            callout: function(a, b, c, d, e) {
                var f = H(e && e.r || 0, c, d), g = f + 6, h = e && e.anchorX, i = e && e.anchorY, e = w(e.strokeWidth || 0) % 2 / 2;
                a += e;
                b += e;
                e = [ "M", a + f, b, "L", a + c - f, b, "C", a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b ];
                h && h > c && i > b + g && b + d - g > i ? e.splice(13, 3, "L", a + c, i - 6, a + c + 6, i, a + c, i + 6, a + c, b + d - f) : h && 0 > h && i > b + g && b + d - g > i ? e.splice(33, 3, "L", a, i + 6, a - 6, i, a, i - 6, a, b + f) : i && i > d && h > a + g && a + c - g > h ? e.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : i && 0 > i && h > a + g && a + c - g > h && e.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b);
                return e;
            }
        },
        clipRect: function(a, b, c, d) {
            var e = "highcharts-" + yb++, f = this.createElement("clipPath").attr({
                id: e
            }).add(this.defs), a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            a.count = 0;
            return a;
        },
        text: function(a, b, c, d) {
            var e = ea || !ba && this.forExport, f = {};
            if (d && !this.forExport) return this.html(a, b, c);
            f.x = Math.round(b || 0);
            c && (f.y = Math.round(c));
            (a || 0 === a) && (f.text = a);
            a = this.createElement("text").attr(f);
            e && a.css({
                position: "absolute"
            });
            d || (a.xSetter = function(a, b, c) {
                var e, n, d = c.getElementsByTagName("tspan"), f = c.getAttribute(b);
                for (n = 0; n < d.length; n++) e = d[n], e.getAttribute(b) === f && e.setAttribute(b, a);
                c.setAttribute(b, a);
            });
            return a;
        },
        fontMetrics: function(a, b) {
            a = a || this.style.fontSize;
            b && O.getComputedStyle && (b = b.element || b, a = O.getComputedStyle(b, "").fontSize);
            var a = /px/.test(a) ? C(a) : /em/.test(a) ? 12 * parseFloat(a) : 12, c = 24 > a ? a + 3 : w(1.2 * a), d = w(.8 * c);
            return {
                h: c,
                b: d,
                f: a
            };
        },
        rotCorr: function(a, b, c) {
            var d = a;
            b && c && (d = t(d * W(b * ga), 4));
            return {
                x: -a / 3 * $(b * ga),
                y: d
            };
        },
        label: function(a, b, c, d, e, f, g, h, i) {
            function j() {
                var a, b;
                a = s.element.style;
                p = (void 0 === fa || void 0 === t || o.styles.textAlign) && r(s.textStr) && s.getBBox();
                o.width = (fa || p.width || 0) + 2 * u + ua;
                o.height = (t || p.height || 0) + 2 * u;
                H = u + n.fontMetrics(a && a.fontSize, s).b;
                if (A) {
                    x || (a = w(-B * u), b = h ? -H : 0, o.box = x = d ? n.symbol(d, a, b, o.width, o.height, E) : n.rect(a, b, o.width, o.height, 0, E[Nb]), 
                    x.attr("fill", M).add(o));
                    x.isImg || x.attr(q({
                        width: w(o.width),
                        height: w(o.height)
                    }, E));
                    E = null;
                }
            }
            function k() {
                var c, a = o.styles, a = a && a.textAlign, b = ua + u * (1 - B);
                c = h ? 0 : H;
                r(fa) && p && ("center" === a || "right" === a) && (b += {
                    center: .5,
                    right: 1
                }[a] * (fa - p.width));
                (b !== s.x || c !== s.y) && (s.attr("x", b), c !== v && s.attr("SPAN" === s.element.nodeName ? "y" : "translateY", c));
                s.x = b;
                s.y = c;
            }
            function l(a, b) {
                x ? x.attr(a, b) : E[a] = b;
            }
            var x, p, fa, t, y, D, H, A, n = this, o = n.g(i), s = n.text("", 0, 0, g).attr({
                zIndex: 1
            }), B = 0, u = 3, ua = 0, C = 0, E = {};
            o.onAdd = function() {
                s.add(o);
                o.attr({
                    text: a || 0 === a ? a : "",
                    x: b,
                    y: c
                });
                x && r(e) && o.attr({
                    anchorX: e,
                    anchorY: f
                });
            };
            o.widthSetter = function(a) {
                fa = a;
            };
            o.heightSetter = function(a) {
                t = a;
            };
            o.paddingSetter = function(a) {
                r(a) && a !== u && (u = o.padding = a, k());
            };
            o.paddingLeftSetter = function(a) {
                r(a) && a !== ua && (ua = a, k());
            };
            o.alignSetter = function(a) {
                B = {
                    left: 0,
                    center: .5,
                    right: 1
                }[a];
            };
            o.textSetter = function(a) {
                a !== v && s.textSetter(a);
                j();
                k();
            };
            o["stroke-widthSetter"] = function(a, b) {
                a && (A = !0);
                C = a % 2 / 2;
                l(b, a);
            };
            o.strokeSetter = o.fillSetter = o.rSetter = function(a, b) {
                "fill" === b && a && (A = !0);
                l(b, a);
            };
            o.anchorXSetter = function(a, b) {
                e = a;
                l(b, a + C - y);
            };
            o.anchorYSetter = function(a, b) {
                f = a;
                l(b, a - D);
            };
            o.xSetter = function(a) {
                o.x = a;
                B && (a -= B * ((fa || p.width) + u));
                y = w(a);
                o.attr("translateX", y);
            };
            o.ySetter = function(a) {
                D = o.y = w(a);
                o.attr("translateY", D);
            };
            var F = o.css;
            return q(o, {
                css: function(a) {
                    if (a) {
                        var b = {}, a = z(a);
                        m(o.textProps, function(c) {
                            a[c] !== v && (b[c] = a[c], delete a[c]);
                        });
                        s.css(b);
                    }
                    return F.call(o, a);
                },
                getBBox: function() {
                    return {
                        width: p.width + 2 * u,
                        height: p.height + 2 * u,
                        x: p.x - u,
                        y: p.y - u
                    };
                },
                shadow: function(a) {
                    x && x.shadow(a);
                    return o;
                },
                destroy: function() {
                    Y(o.element, "mouseenter");
                    Y(o.element, "mouseleave");
                    s && (s = s.destroy());
                    x && (x = x.destroy());
                    L.prototype.destroy.call(o);
                    o = n = j = k = l = null;
                }
            });
        }
    };
    $a = ta;
    q(L.prototype, {
        htmlCss: function(a) {
            var b = this.element;
            (b = a && "SPAN" === b.tagName && a.width) && (delete a.width, this.textWidth = b, 
            this.updateTransform());
            a && "ellipsis" === a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden");
            this.styles = q(this.styles, a);
            J(this.element, a);
            return this;
        },
        htmlGetBBox: function() {
            var a = this.element;
            "text" === a.nodeName && (a.style.position = "absolute");
            return {
                x: a.offsetLeft,
                y: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight
            };
        },
        htmlUpdateTransform: function() {
            if (this.added) {
                var a = this.renderer, b = this.element, c = this.translateX || 0, d = this.translateY || 0, e = this.x || 0, f = this.y || 0, g = this.textAlign || "left", h = {
                    left: 0,
                    center: .5,
                    right: 1
                }[g], i = this.shadows, j = this.styles;
                J(b, {
                    marginLeft: c,
                    marginTop: d
                });
                i && m(i, function(a) {
                    J(a, {
                        marginLeft: c + 1,
                        marginTop: d + 1
                    });
                });
                this.inverted && m(b.childNodes, function(c) {
                    a.invertChild(c, b);
                });
                if ("SPAN" === b.tagName) {
                    var l, k = this.rotation, n = C(this.textWidth), o = [ k, g, b.innerHTML, this.textWidth ].join(",");
                    if (o !== this.cTT) {
                        l = a.fontMetrics(b.style.fontSize).b;
                        r(k) && this.setSpanRotation(k, h, l);
                        i = p(this.elemWidth, b.offsetWidth);
                        i > n && /[ \-]/.test(b.textContent || b.innerText) && (J(b, {
                            width: n + "px",
                            display: "block",
                            whiteSpace: j && j.whiteSpace || "normal"
                        }), i = n);
                        this.getSpanCorrection(i, l, h, k, g);
                    }
                    J(b, {
                        left: e + (this.xCorr || 0) + "px",
                        top: f + (this.yCorr || 0) + "px"
                    });
                    xb && (l = b.offsetHeight);
                    this.cTT = o;
                }
            } else this.alignOnAdd = !0;
        },
        setSpanRotation: function(a, b, c) {
            var d = {}, e = ya ? "-ms-transform" : xb ? "-webkit-transform" : La ? "MozTransform" : Gb ? "-o-transform" : "";
            d[e] = d.transform = "rotate(" + a + "deg)";
            d[e + (La ? "Origin" : "-origin")] = d.transformOrigin = 100 * b + "% " + c + "px";
            J(this.element, d);
        },
        getSpanCorrection: function(a, b, c) {
            this.xCorr = -a * c;
            this.yCorr = -b;
        }
    });
    q(ta.prototype, {
        html: function(a, b, c) {
            var d = this.createElement("span"), e = d.element, f = d.renderer;
            d.textSetter = function(a) {
                a !== e.innerHTML && delete this.bBox;
                e.innerHTML = this.textStr = a;
            };
            d.xSetter = d.ySetter = d.alignSetter = d.rotationSetter = function(a, b) {
                "align" === b && (b = "textAlign");
                d[b] = a;
                d.htmlUpdateTransform();
            };
            d.attr({
                text: a,
                x: w(b),
                y: w(c)
            }).css({
                position: "absolute",
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize
            });
            e.style.whiteSpace = "nowrap";
            d.css = d.htmlCss;
            f.isSVG && (d.add = function(a) {
                var b, c = f.box.parentNode, j = [];
                if (this.parentGroup = a) {
                    if (b = a.div, !b) {
                        for (;a; ) j.push(a), a = a.parentGroup;
                        m(j.reverse(), function(a) {
                            var d;
                            b = a.div = a.div || Z(Ka, {
                                className: I(a.element, "class")
                            }, {
                                position: "absolute",
                                left: (a.translateX || 0) + "px",
                                top: (a.translateY || 0) + "px"
                            }, b || c);
                            d = b.style;
                            q(a, {
                                translateXSetter: function(b, c) {
                                    d.left = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0;
                                },
                                translateYSetter: function(b, c) {
                                    d.top = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0;
                                },
                                visibilitySetter: function(a, b) {
                                    d[b] = a;
                                }
                            });
                        });
                    }
                } else b = c;
                b.appendChild(e);
                d.added = !0;
                d.alignOnAdd && d.htmlUpdateTransform();
                return d;
            });
            return d;
        }
    });
    if (!ba && !ea) {
        A = {
            init: function(a, b) {
                var c = [ "<", b, ' filled="f" stroked="f"' ], d = [ "position: ", "absolute", ";" ], e = b === Ka;
                ("shape" === b || e) && d.push("left:0;top:0;width:1px;height:1px;");
                d.push("visibility: ", e ? "hidden" : "visible");
                c.push(' style="', d.join(""), '"/>');
                b && (c = e || "span" === b || "img" === b ? c.join("") : a.prepVML(c), this.element = Z(c));
                this.renderer = a;
            },
            add: function(a) {
                var b = this.renderer, c = this.element, d = b.box, d = a ? a.element || a : d;
                a && a.inverted && b.invertChild(c, d);
                d.appendChild(c);
                this.added = !0;
                this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
                this.onAdd && this.onAdd();
                return this;
            },
            updateTransform: L.prototype.htmlUpdateTransform,
            setSpanRotation: function() {
                var a = this.rotation, b = W(a * ga), c = $(a * ga);
                J(this.element, {
                    filter: a ? [ "progid:DXImageTransform.Microsoft.Matrix(M11=", b, ", M12=", -c, ", M21=", c, ", M22=", b, ", sizingMethod='auto expand')" ].join("") : M
                });
            },
            getSpanCorrection: function(a, b, c, d, e) {
                var i, f = d ? W(d * ga) : 1, g = d ? $(d * ga) : 0, h = p(this.elemHeight, this.element.offsetHeight);
                this.xCorr = 0 > f && -a;
                this.yCorr = 0 > g && -h;
                i = 0 > f * g;
                this.xCorr += g * b * (i ? 1 - c : c);
                this.yCorr -= f * b * (d ? i ? c : 1 - c : 1);
                e && "left" !== e && (this.xCorr -= a * c * (0 > f ? -1 : 1), d && (this.yCorr -= h * c * (0 > g ? -1 : 1)), 
                J(this.element, {
                    textAlign: e
                }));
            },
            pathToVML: function(a) {
                for (var b = a.length, c = []; b--; ) qa(a[b]) ? c[b] = w(10 * a[b]) - 5 : "Z" === a[b] ? c[b] = "x" : (c[b] = a[b], 
                !a.isArc || "wa" !== a[b] && "at" !== a[b]) || (c[b + 5] === c[b + 7] && (c[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1), 
                c[b + 6] === c[b + 8] && (c[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1));
                return c.join(" ") || "x";
            },
            clip: function(a) {
                var c, b = this;
                a ? (c = a.members, ia(c, b), c.push(b), b.destroyClip = function() {
                    ia(c, b);
                }, a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = {
                    clip: hb ? "inherit" : "rect(auto)"
                });
                return b.css(a);
            },
            css: L.prototype.htmlCss,
            safeRemoveChild: function(a) {
                a.parentNode && Ra(a);
            },
            destroy: function() {
                this.destroyClip && this.destroyClip();
                return L.prototype.destroy.apply(this);
            },
            on: function(a, b) {
                this.element["on" + a] = function() {
                    var a = O.event;
                    a.target = a.srcElement;
                    b(a);
                };
                return this;
            },
            cutOffPath: function(a, b) {
                var c, a = a.split(/[ ,]/);
                c = a.length;
                (9 === c || 11 === c) && (a[c - 4] = a[c - 2] = C(a[c - 2]) - 10 * b);
                return a.join(" ");
            },
            shadow: function(a, b, c) {
                var e, h, j, l, n, o, s, d = [], f = this.element, g = this.renderer, i = f.style, k = f.path;
                k && "string" != typeof k.value && (k = "x");
                n = k;
                if (a) {
                    o = p(a.width, 3);
                    s = (a.opacity || .15) / o;
                    for (e = 1; 3 >= e; e++) {
                        l = 2 * o + 1 - 2 * e;
                        c && (n = this.cutOffPath(k.value, l + .5));
                        j = [ '<shape isShadow="true" strokeweight="', l, '" filled="false" path="', n, '" coordsize="10 10" style="', f.style.cssText, '" />' ];
                        h = Z(g.prepVML(j), null, {
                            left: C(i.left) + p(a.offsetX, 1),
                            top: C(i.top) + p(a.offsetY, 1)
                        });
                        c && (h.cutOff = l + 1);
                        j = [ '<stroke color="', a.color || "black", '" opacity="', s * e, '"/>' ];
                        Z(g.prepVML(j), null, null, h);
                        b ? b.element.appendChild(h) : f.parentNode.insertBefore(h, f);
                        d.push(h);
                    }
                    this.shadows = d;
                }
                return this;
            },
            updateShadows: ma,
            setAttr: function(a, b) {
                hb ? this.element[a] = b : this.element.setAttribute(a, b);
            },
            classSetter: function(a) {
                this.element.className = a;
            },
            dashstyleSetter: function(a, b, c) {
                (c.getElementsByTagName("stroke")[0] || Z(this.renderer.prepVML([ "<stroke/>" ]), null, null, c))[b] = a || "solid";
                this[b] = a;
            },
            dSetter: function(a, b, c) {
                var d = this.shadows, a = a || [];
                this.d = a.join && a.join(" ");
                c.path = a = this.pathToVML(a);
                if (d) for (c = d.length; c--; ) d[c].path = d[c].cutOff ? this.cutOffPath(a, d[c].cutOff) : a;
                this.setAttr(b, a);
            },
            fillSetter: function(a, b, c) {
                var d = c.nodeName;
                "SPAN" === d ? c.style.color = a : "IMG" !== d && (c.filled = a !== M, this.setAttr("fillcolor", this.renderer.color(a, c, b, this)));
            },
            opacitySetter: ma,
            rotationSetter: function(a, b, c) {
                c = c.style;
                this[b] = c[b] = a;
                c.left = -w($(a * ga) + 1) + "px";
                c.top = w(W(a * ga)) + "px";
            },
            strokeSetter: function(a, b, c) {
                this.setAttr("strokecolor", this.renderer.color(a, c, b));
            },
            "stroke-widthSetter": function(a, b, c) {
                c.stroked = !!a;
                this[b] = a;
                qa(a) && (a += "px");
                this.setAttr("strokeweight", a);
            },
            titleSetter: function(a, b) {
                this.setAttr(b, a);
            },
            visibilitySetter: function(a, b, c) {
                "inherit" === a && (a = "visible");
                this.shadows && m(this.shadows, function(c) {
                    c.style[b] = a;
                });
                "DIV" === c.nodeName && (a = "hidden" === a ? "-999em" : 0, hb || (c.style[b] = a ? "visible" : "hidden"), 
                b = "top");
                c.style[b] = a;
            },
            xSetter: function(a, b, c) {
                this[b] = a;
                "x" === b ? b = "left" : "y" === b && (b = "top");
                this.updateClipping ? (this[b] = a, this.updateClipping()) : c.style[b] = a;
            },
            zIndexSetter: function(a, b, c) {
                c.style[b] = a;
            }
        };
        y.VMLElement = A = ja(L, A);
        A.prototype.ySetter = A.prototype.widthSetter = A.prototype.heightSetter = A.prototype.xSetter;
        var Na = {
            Element: A,
            isIE8: Ba.indexOf("MSIE 8.0") > -1,
            init: function(a, b, c, d) {
                var e;
                this.alignedObjects = [];
                d = this.createElement(Ka).css(q(this.getStyle(d), {
                    position: "relative"
                }));
                e = d.element;
                a.appendChild(d.element);
                this.isVML = !0;
                this.box = e;
                this.boxWrapper = d;
                this.cache = {};
                this.setSize(b, c, !1);
                if (!D.namespaces.hcv) {
                    D.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                    try {
                        D.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
                    } catch (f) {
                        D.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
                    }
                }
            },
            isHidden: function() {
                return !this.box.offsetWidth;
            },
            clipRect: function(a, b, c, d) {
                var e = this.createElement(), f = ca(a);
                return q(e, {
                    members: [],
                    count: 0,
                    left: (f ? a.x : a) + 1,
                    top: (f ? a.y : b) + 1,
                    width: (f ? a.width : c) - 1,
                    height: (f ? a.height : d) - 1,
                    getCSS: function(a) {
                        var b = a.element, c = b.nodeName, a = a.inverted, d = this.top - ("shape" === c ? b.offsetTop : 0), e = this.left, b = e + this.width, f = d + this.height, d = {
                            clip: "rect(" + w(a ? e : d) + "px," + w(a ? f : b) + "px," + w(a ? b : f) + "px," + w(a ? d : e) + "px)"
                        };
                        !a && hb && "DIV" === c && q(d, {
                            width: b + "px",
                            height: f + "px"
                        });
                        return d;
                    },
                    updateClipping: function() {
                        m(e.members, function(a) {
                            a.element && a.css(e.getCSS(a));
                        });
                    }
                });
            },
            color: function(a, b, c, d) {
                var f, h, i, e = this, g = /^rgba/, j = M;
                a && a.linearGradient ? i = "gradient" : a && a.radialGradient && (i = "pattern");
                if (i) {
                    var k, l, o, s, x, p, B, r, n = a.linearGradient || a.radialGradient, u = "", a = a.stops, fa = [], t = function() {
                        h = [ '<fill colors="' + fa.join(",") + '" opacity="', x, '" o:opacity2="', s, '" type="', i, '" ', u, 'focus="100%" method="any" />' ];
                        Z(e.prepVML(h), null, null, b);
                    };
                    o = a[0];
                    r = a[a.length - 1];
                    o[0] > 0 && a.unshift([ 0, o[1] ]);
                    r[0] < 1 && a.push([ 1, r[1] ]);
                    m(a, function(a, b) {
                        g.test(a[1]) ? (f = na(a[1]), k = f.get("rgb"), l = f.get("a")) : (k = a[1], l = 1);
                        fa.push(100 * a[0] + "% " + k);
                        b ? (x = l, p = k) : (s = l, B = k);
                    });
                    if ("fill" === c) if ("gradient" === i) c = n.x1 || n[0] || 0, a = n.y1 || n[1] || 0, 
                    o = n.x2 || n[2] || 0, n = n.y2 || n[3] || 0, u = 'angle="' + (90 - 180 * V.atan((n - a) / (o - c)) / la) + '"', 
                    t(); else {
                        var y, j = n.r, v = 2 * j, w = 2 * j, q = n.cx, E = n.cy, z = b.radialReference, j = function() {
                            z && (y = d.getBBox(), q += (z[0] - y.x) / y.width - .5, E += (z[1] - y.y) / y.height - .5, 
                            v *= z[2] / y.width, w *= z[2] / y.height);
                            u = 'src="' + S.global.VMLRadialGradientURL + '" size="' + v + "," + w + '" origin="0.5,0.5" position="' + q + "," + E + '" color2="' + B + '" ';
                            t();
                        };
                        d.added ? j() : d.onAdd = j;
                        j = p;
                    } else j = k;
                } else if (g.test(a) && "IMG" !== b.tagName) f = na(a), h = [ "<", c, ' opacity="', f.get("a"), '"/>' ], 
                Z(this.prepVML(h), null, null, b), j = f.get("rgb"); else {
                    j = b.getElementsByTagName(c);
                    j.length && (j[0].opacity = 1, j[0].type = "solid");
                    j = a;
                }
                return j;
            },
            prepVML: function(a) {
                var b = this.isIE8, a = a.join("");
                b ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = -1 === a.indexOf('style="') ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<", "<hcv:");
                return a;
            },
            text: ta.prototype.html,
            path: function(a) {
                var b = {
                    coordsize: "10 10"
                };
                Ha(a) ? b.d = a : ca(a) && q(b, a);
                return this.createElement("shape").attr(b);
            },
            circle: function(a, b, c) {
                var d = this.symbol("circle");
                ca(a) && (c = a.r, b = a.y, a = a.x);
                d.isCircle = !0;
                d.r = c;
                return d.attr({
                    x: a,
                    y: b
                });
            },
            g: function(a) {
                var b;
                a && (b = {
                    className: "highcharts-" + a,
                    "class": "highcharts-" + a
                });
                return this.createElement(Ka).attr(b);
            },
            image: function(a, b, c, d, e) {
                var f = this.createElement("img").attr({
                    src: a
                });
                arguments.length > 1 && f.attr({
                    x: b,
                    y: c,
                    width: d,
                    height: e
                });
                return f;
            },
            createElement: function(a) {
                return "rect" === a ? this.symbol(a) : ta.prototype.createElement.call(this, a);
            },
            invertChild: function(a, b) {
                var c = this, d = b.style, e = "IMG" === a.tagName && a.style;
                J(a, {
                    flip: "x",
                    left: C(d.width) - (e ? C(e.top) : 1),
                    top: C(d.height) - (e ? C(e.left) : 1),
                    rotation: -90
                });
                m(a.childNodes, function(b) {
                    c.invertChild(b, a);
                });
            },
            symbols: {
                arc: function(a, b, c, d, e) {
                    var f = e.start, g = e.end, h = e.r || c || d, c = e.innerR, d = W(f), i = $(f), j = W(g), k = $(g);
                    if (g - f === 0) return [ "x" ];
                    f = [ "wa", a - h, b - h, a + h, b + h, a + h * d, b + h * i, a + h * j, b + h * k ];
                    e.open && !c && f.push("e", "M", a, b);
                    f.push("at", a - c, b - c, a + c, b + c, a + c * j, b + c * k, a + c * d, b + c * i, "x", "e");
                    f.isArc = !0;
                    return f;
                },
                circle: function(a, b, c, d, e) {
                    e && (c = d = 2 * e.r);
                    e && e.isCircle && (a -= c / 2, b -= d / 2);
                    return [ "wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e" ];
                },
                rect: function(a, b, c, d, e) {
                    return ta.prototype.symbols[r(e) && e.r ? "callout" : "square"].call(0, a, b, c, d, e);
                }
            }
        };
        y.VMLRenderer = A = function() {
            this.init.apply(this, arguments);
        };
        A.prototype = z(ta.prototype, Na);
        $a = A;
    }
    ta.prototype.measureSpanWidth = function(a, b) {
        var d, c = D.createElement("span");
        d = D.createTextNode(a);
        c.appendChild(d);
        J(c, b);
        this.box.appendChild(c);
        d = c.offsetWidth;
        Ra(c);
        return d;
    };
    var Jb;
    ea && (y.CanVGRenderer = A = function() {
        Ca = "http://www.w3.org/1999/xhtml";
    }, A.prototype.symbols = {}, Jb = function() {
        function a() {
            var d, a = b.length;
            for (d = 0; a > d; d++) b[d]();
            b = [];
        }
        var b = [];
        return {
            push: function(c, d) {
                0 === b.length && Ob(d, a);
                b.push(c);
            }
        };
    }(), $a = A);
    Ta.prototype = {
        addLabel: function() {
            var k, a = this.axis, b = a.options, c = a.chart, d = a.categories, e = a.names, f = this.pos, g = b.labels, h = a.tickPositions, i = f === h[0], j = f === h[h.length - 1], e = d ? p(d[f], e[f], f) : f, d = this.label, h = h.info;
            a.isDatetimeAxis && h && (k = b.dateTimeLabelFormats[h.higherRanks[f] || h.unitName]);
            this.isFirst = i;
            this.isLast = j;
            b = a.labelFormatter.call({
                axis: a,
                chart: c,
                isFirst: i,
                isLast: j,
                dateTimeLabelFormat: k,
                value: a.isLog ? da(ha(e)) : e
            });
            r(d) ? d && d.attr({
                text: b
            }) : (this.labelLength = (this.label = d = r(b) && g.enabled ? c.renderer.text(b, 0, 0, g.useHTML).css(z(g.style)).add(a.labelGroup) : null) && d.getBBox().width, 
            this.rotation = 0);
        },
        getLabelSize: function() {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
        },
        handleOverflow: function(a) {
            var k, b = this.axis, c = a.x, d = b.chart.chartWidth, e = b.chart.spacing, f = p(b.labelLeft, e[3]), e = p(b.labelRight, d - e[1]), g = this.label, h = this.rotation, i = {
                left: 0,
                center: .5,
                right: 1
            }[b.labelAlign], j = g.getBBox().width, b = b.slotWidth;
            if (h) 0 > h && f > c - i * j ? k = w(c / W(h * ga) - f) : h > 0 && c + i * j > e && (k = w((d - c) / W(h * ga))); else {
                d = c - i * j;
                c += i * j;
                f > d ? (b -= f - d, a.x = f, g.attr({
                    align: "left"
                })) : c > e && (b -= c - e, a.x = e, g.attr({
                    align: "right"
                }));
                j > b && (k = b);
            }
            k && g.css({
                width: k,
                textOverflow: "ellipsis"
            });
        },
        getPosition: function(a, b, c, d) {
            var e = this.axis, f = e.chart, g = d && f.oldChartHeight || f.chartHeight;
            return {
                x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0),
                y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB
            };
        },
        getLabelPosition: function(a, b, c, d, e, f, g, h) {
            var i = this.axis, j = i.transA, k = i.reversed, l = i.staggerLines, n = i.tickRotCorr || {
                x: 0,
                y: 0
            }, c = p(e.y, n.y + (2 === i.side ? 8 : -(c.getBBox().height / 2))), a = a + e.x + n.x - (f && d ? f * j * (k ? -1 : 1) : 0), b = b + c - (f && !d ? f * j * (k ? 1 : -1) : 0);
            l && (b += g / (h || 1) % l * (i.labelOffset / l));
            return {
                x: a,
                y: w(b)
            };
        },
        getMarkPath: function(a, b, c, d, e, f) {
            return f.crispLine([ "M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0) ], d);
        },
        render: function(a, b, c) {
            var d = this.axis, e = d.options, f = d.chart.renderer, g = d.horiz, h = this.type, i = this.label, j = this.pos, k = e.labels, l = this.gridLine, n = h ? h + "Grid" : "grid", o = h ? h + "Tick" : "tick", s = e[n + "LineWidth"], x = e[n + "LineColor"], m = e[n + "LineDashStyle"], B = e[o + "Length"], n = e[o + "Width"] || 0, u = e[o + "Color"], r = e[o + "Position"], o = this.mark, fa = k.step, t = !0, w = d.tickmarkOffset, q = this.getPosition(g, j, w, b), y = q.x, q = q.y, z = g && y === d.pos + d.len || !g && q === d.pos ? -1 : 1, c = p(c, 1);
            this.isActive = !0;
            if (s) {
                j = d.getPlotLinePath(j + w, s * z, b, !0);
                if (l === v) {
                    l = {
                        stroke: x,
                        "stroke-width": s
                    };
                    m && (l.dashstyle = m);
                    h || (l.zIndex = 1);
                    b && (l.opacity = 0);
                    this.gridLine = l = s ? f.path(j).attr(l).add(d.gridGroup) : null;
                }
                !b && l && j && l[this.isNew ? "attr" : "animate"]({
                    d: j,
                    opacity: c
                });
            }
            n && B && ("inside" === r && (B = -B), d.opposite && (B = -B), h = this.getMarkPath(y, q, B, n * z, g, f), 
            o ? o.animate({
                d: h,
                opacity: c
            }) : this.mark = f.path(h).attr({
                stroke: u,
                "stroke-width": n,
                opacity: c
            }).add(d.axisGroup));
            i && !isNaN(y) && (i.xy = q = this.getLabelPosition(y, q, i, g, k, w, a, fa), this.isFirst && !this.isLast && !p(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !p(e.showLastLabel, 1) ? t = !1 : g && !d.isRadial && !k.step && !k.rotation && !b && 0 !== c && this.handleOverflow(q), 
            fa && a % fa && (t = !1), t && !isNaN(q.y) ? (q.opacity = c, i[this.isNew ? "attr" : "animate"](q), 
            this.isNew = !1) : i.attr("y", -9999));
        },
        destroy: function() {
            Qa(this, this.axis);
        }
    };
    y.PlotLineOrBand = function(a, b) {
        this.axis = a;
        b && (this.options = b, this.id = b.id);
    };
    y.PlotLineOrBand.prototype = {
        render: function() {
            var s, a = this, b = a.axis, c = b.horiz, d = a.options, e = d.label, f = a.label, g = d.width, h = d.to, i = d.from, j = r(i) && r(h), k = d.value, l = d.dashStyle, n = a.svgElem, o = [], x = d.color, p = d.zIndex, m = d.events, u = {}, t = b.chart.renderer;
            b.isLog && (i = Ea(i), h = Ea(h), k = Ea(k));
            if (g) (o = b.getPlotLinePath(k, g), u = {
                stroke: x,
                "stroke-width": g
            }, l) && (u.dashstyle = l); else {
                if (!j) return;
                o = b.getPlotBandPath(i, h, d);
                x && (u.fill = x);
                d.borderWidth && (u.stroke = d.borderColor, u["stroke-width"] = d.borderWidth);
            }
            r(p) && (u.zIndex = p);
            if (n) o ? n.animate({
                d: o
            }, null, n.onGetPath) : (n.hide(), n.onGetPath = function() {
                n.show();
            }, f) && (a.label = f = f.destroy()); else if (o && o.length && (a.svgElem = n = t.path(o).attr(u).add(), 
            m)) for (s in d = function(b) {
                n.on(b, function(c) {
                    m[b].apply(a, [ c ]);
                });
            }, m) d(s);
            if (e && r(e.text) && o && o.length && b.width > 0 && b.height > 0) {
                e = z({
                    align: c && j && "center",
                    x: c ? !j && 4 : 10,
                    verticalAlign: !c && j && "middle",
                    y: c ? j ? 16 : 10 : j ? 6 : -4,
                    rotation: c && !j && 90
                }, e);
                if (!f) {
                    u = {
                        align: e.textAlign || e.align,
                        rotation: e.rotation
                    };
                    r(p) && (u.zIndex = p);
                    a.label = f = t.text(e.text, 0, 0, e.useHTML).attr(u).css(e.style).add();
                }
                b = [ o[1], o[4], j ? o[6] : o[1] ];
                j = [ o[2], o[5], j ? o[7] : o[2] ];
                o = Pa(b);
                c = Pa(j);
                f.align(e, !1, {
                    x: o,
                    y: c,
                    width: Fa(b) - o,
                    height: Fa(j) - c
                });
                f.show();
            } else f && f.hide();
            return a;
        },
        destroy: function() {
            ia(this.axis.plotLinesAndBands, this);
            delete this.axis;
            Qa(this);
        }
    };
    var va = y.Axis = function() {
        this.init.apply(this, arguments);
    };
    va.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#D8D8D8",
            labels: {
                enabled: !0,
                style: {
                    color: "#606060",
                    cursor: "default",
                    fontSize: "11px"
                },
                x: 0,
                y: 15
            },
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: .01,
            maxPadding: .01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            tickWidth: 1,
            title: {
                align: "middle",
                style: {
                    color: "#707070"
                }
            },
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                x: -8,
                y: 3
            },
            lineWidth: 0,
            maxPadding: .05,
            minPadding: .05,
            startOnTick: !0,
            tickWidth: 0,
            title: {
                rotation: 270,
                text: "Values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function() {
                    return y.numberFormat(this.total, -1);
                },
                style: z(aa.line.dataLabels.style, {
                    color: "#000000"
                })
            }
        },
        defaultLeftAxisOptions: {
            labels: {
                x: -15,
                y: null
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                x: 15,
                y: null
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                autoRotation: [ -45 ],
                x: 0,
                y: null
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                autoRotation: [ -45 ],
                x: 0,
                y: -15
            },
            title: {
                rotation: 0
            }
        },
        init: function(a, b) {
            var c = b.isX;
            this.horiz = a.inverted ? !c : c;
            this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";
            this.opposite = b.opposite;
            this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(b);
            var d = this.options, e = d.type;
            this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
            this.userOptions = b;
            this.minPixelPadding = 0;
            this.chart = a;
            this.reversed = d.reversed;
            this.zoomEnabled = d.zoomEnabled !== !1;
            this.categories = d.categories || "category" === e;
            this.names = this.names || [];
            this.isLog = "logarithmic" === e;
            this.isDatetimeAxis = "datetime" === e;
            this.isLinked = r(d.linkedTo);
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = d.minRange || d.maxZoom;
            this.range = d.range;
            this.offset = d.offset || 0;
            this.stacks = {};
            this.oldStacks = {};
            this.min = this.max = null;
            this.crosshair = p(d.crosshair, ra(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);
            var f, d = this.options.events;
            -1 === Ma(this, a.axes) && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), 
            a[this.coll].push(this));
            this.series = this.series || [];
            a.inverted && c && this.reversed === v && (this.reversed = !0);
            this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (f in d) K(this, f, d[f]);
            this.isLog && (this.val2lin = Ea, this.lin2val = ha);
        },
        setOptions: function(a) {
            this.options = z(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [ this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions ][this.side], z(S[this.coll], a));
        },
        defaultLabelFormatter: function() {
            var g, a = this.axis, b = this.value, c = a.categories, d = this.dateTimeLabelFormat, e = S.lang.numericSymbols, f = e && e.length, h = a.options.labels.format, a = a.isLog ? b : a.tickInterval;
            if (h) g = Ja(h, this); else if (c) g = b; else if (d) g = Oa(d, b); else if (f && a >= 1e3) for (;f-- && g === v; ) c = Math.pow(1e3, f + 1), 
            a >= c && null !== e[f] && (g = y.numberFormat(b / c, -1) + e[f]);
            g === v && (g = P(b) >= 1e4 ? y.numberFormat(b, 0) : y.numberFormat(b, -1, v, ""));
            return g;
        },
        getSeriesExtremes: function() {
            var a = this, b = a.chart;
            a.hasVisibleSeries = !1;
            a.dataMin = a.dataMax = a.ignoreMinPadding = a.ignoreMaxPadding = null;
            a.buildStacks && a.buildStacks();
            m(a.series, function(c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d;
                    d = c.options.threshold;
                    var e;
                    a.hasVisibleSeries = !0;
                    a.isLog && 0 >= d && (d = null);
                    if (a.isXAxis) (d = c.xData, d.length) && (a.dataMin = H(p(a.dataMin, d[0]), Pa(d)), 
                    a.dataMax = t(p(a.dataMax, d[0]), Fa(d))); else {
                        c.getExtremes();
                        e = c.dataMax;
                        c = c.dataMin;
                        r(c) && r(e) && (a.dataMin = H(p(a.dataMin, c), c), a.dataMax = t(p(a.dataMax, e), e));
                        r(d) && (a.dataMin >= d ? (a.dataMin = d, a.ignoreMinPadding = !0) : a.dataMax < d && (a.dataMax = d, 
                        a.ignoreMaxPadding = !0));
                    }
                }
            });
        },
        translate: function(a, b, c, d, e, f) {
            var g = 1, h = 0, i = d ? this.oldTransA : this.transA, d = d ? this.oldMin : this.min, j = this.minPixelPadding, e = (this.doPostTranslate || this.isLog && e) && this.lin2val;
            i || (i = this.transA);
            c && (g *= -1, h = this.len);
            this.reversed && (g *= -1, h -= g * (this.sector || this.len));
            b ? (a = a * g + h, a -= j, a = a / i + d, e && (a = this.lin2val(a))) : (e && (a = this.val2lin(a)), 
            "between" === f && (f = .5), a = g * (a - d) * i + h + g * j + (qa(f) ? i * f * this.pointRange : 0));
            return a;
        },
        toPixels: function(a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos);
        },
        toValue: function(a, b) {
            return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0);
        },
        getPlotLinePath: function(a, b, c, d, e) {
            var i, j, n, f = this.chart, g = this.left, h = this.top, k = c && f.oldChartHeight || f.chartHeight, l = c && f.oldChartWidth || f.chartWidth;
            i = this.transB;
            var o = function(a, b, c) {
                (b > a || a > c) && (d ? a = H(t(b, a), c) : n = !0);
                return a;
            }, e = p(e, this.translate(a, null, null, c)), a = c = w(e + i);
            i = j = w(k - e - i);
            isNaN(e) ? n = !0 : this.horiz ? (i = h, j = k - this.bottom, a = c = o(a, g, g + this.width)) : (a = g, 
            c = l - this.right, i = j = o(i, h, h + this.height));
            return n && !d ? null : f.renderer.crispLine([ "M", a, i, "L", c, j ], b || 1);
        },
        getLinearTickPositions: function(a, b, c) {
            var d, e = da(U(b / a) * a), f = da(sa(c / a) * a), g = [];
            if (b === c && qa(b)) return [ b ];
            for (b = e; f >= b; ) {
                g.push(b);
                b = da(b + a);
                if (b === d) break;
                d = b;
            }
            return g;
        },
        getMinorTickPositions: function() {
            var e, a = this.options, b = this.tickPositions, c = this.minorTickInterval, d = [], f = this.min;
            e = this.max;
            var g = e - f;
            if (g && g / c < this.len / 3) if (this.isLog) {
                a = b.length;
                for (e = 1; a > e; e++) d = d.concat(this.getLogTickPositions(c, b[e - 1], b[e], !0));
            } else if (this.isDatetimeAxis && "auto" === a.minorTickInterval) d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), f, e, a.startOfWeek)); else for (b = f + (b[0] - f) % c; e >= b; b += c) d.push(b);
            this.trimTicks(d);
            return d;
        },
        adjustForMinRange: function() {
            var d, f, g, h, i, j, a = this.options, b = this.min, c = this.max, e = this.dataMax - this.dataMin >= this.minRange;
            this.isXAxis && this.minRange === v && !this.isLog && (r(a.min) || r(a.max) ? this.minRange = null : (m(this.series, function(a) {
                i = a.xData;
                for (g = j = a.xIncrement ? 1 : i.length - 1; g > 0; g--) (h = i[g] - i[g - 1], 
                f === v || f > h) && (f = h);
            }), this.minRange = H(5 * f, this.dataMax - this.dataMin)));
            if (c - b < this.minRange) {
                var k = this.minRange;
                d = (k - c + b) / 2;
                d = [ b - d, p(a.min, b - d) ];
                e && (d[2] = this.dataMin);
                b = Fa(d);
                c = [ b + k, p(a.max, b + k) ];
                e && (c[2] = this.dataMax);
                c = Pa(c);
                k > c - b && (d[0] = c - k, d[1] = p(a.min, c - k), b = Fa(d));
            }
            this.min = b;
            this.max = c;
        },
        setAxisTranslation: function(a) {
            var e, b = this, c = b.max - b.min, d = b.axisPointRange || 0, f = 0, g = 0, h = b.linkedParent, i = !!b.categories, j = b.transA, k = b.isXAxis;
            (k || i || d) && (h ? (f = h.minPointOffset, g = h.pointRangePadding) : m(b.series, function(a) {
                var h = i ? 1 : k ? a.pointRange : b.axisPointRange || 0, j = a.options.pointPlacement, s = a.closestPointRange;
                h > c && (h = 0);
                d = t(d, h);
                b.single || (f = t(f, Da(j) ? 0 : h / 2), g = t(g, "on" === j ? 0 : h));
                !a.noSharedTooltip && r(s) && (e = r(e) ? H(e, s) : s);
            }), h = b.ordinalSlope && e ? b.ordinalSlope / e : 1, b.minPointOffset = f *= h, 
            b.pointRangePadding = g *= h, b.pointRange = H(d, c), k) && (b.closestPointRange = e);
            a && (b.oldTransA = j);
            b.translationSlope = b.transA = j = b.len / (c + g || 1);
            b.transB = b.horiz ? b.left : b.bottom;
            b.minPixelPadding = j * f;
        },
        setTickInterval: function(a) {
            var b = this, c = b.chart, d = b.options, e = b.isLog, f = b.isDatetimeAxis, g = b.isXAxis, h = b.isLinked, i = d.maxPadding, j = d.minPadding, k = d.tickInterval, l = d.tickPixelInterval, n = b.categories;
            !f && !n && !h && this.getTickAmount();
            h ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = p(c.min, c.dataMin), 
            b.max = p(c.max, c.dataMax), d.type !== b.linkedParent.options.type && ka(11, 1)) : (b.min = p(b.userMin, d.min, b.dataMin), 
            b.max = p(b.userMax, d.max, b.dataMax));
            e && (!a && H(b.min, p(b.dataMin, b.min)) <= 0 && ka(10, 1), b.min = da(Ea(b.min)), 
            b.max = da(Ea(b.max)));
            b.range && r(b.max) && (b.userMin = b.min = t(b.min, b.max - b.range), b.userMax = b.max, 
            b.range = null);
            b.beforePadding && b.beforePadding();
            b.adjustForMinRange();
            if (!n && !b.axisPointRange && !b.usePercentage && !h && r(b.min) && r(b.max) && (c = b.max - b.min)) {
                r(d.min) || r(b.userMin) || !j || !(b.dataMin < 0) && b.ignoreMinPadding || (b.min -= c * j);
                r(d.max) || r(b.userMax) || !i || !(b.dataMax > 0) && b.ignoreMaxPadding || (b.max += c * i);
            }
            qa(d.floor) && (b.min = t(b.min, d.floor));
            qa(d.ceiling) && (b.max = H(b.max, d.ceiling));
            b.tickInterval = b.min === b.max || void 0 === b.min || void 0 === b.max ? 1 : h && !k && l === b.linkedParent.options.tickPixelInterval ? b.linkedParent.tickInterval : p(k, this.tickAmount ? (b.max - b.min) / t(this.tickAmount - 1, 1) : void 0, n ? 1 : (b.max - b.min) * l / t(b.len, l));
            g && !a && m(b.series, function(a) {
                a.processData(b.min !== b.oldMin || b.max !== b.oldMax);
            });
            b.setAxisTranslation(!0);
            b.beforeSetTickPositions && b.beforeSetTickPositions();
            b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval));
            b.pointRange && (b.tickInterval = t(b.pointRange, b.tickInterval));
            a = p(d.minTickInterval, b.isDatetimeAxis && b.closestPointRange);
            !k && b.tickInterval < a && (b.tickInterval = a);
            f || e || k || (b.tickInterval = pb(b.tickInterval, null, ob(b.tickInterval), p(d.allowDecimals, !(b.tickInterval > .5 && b.tickInterval < 5 && b.max > 1e3 && b.max < 9999)), !!this.tickAmount));
            !this.tickAmount && this.len && (b.tickInterval = b.unsquish());
            this.setTickPositions();
        },
        setTickPositions: function() {
            var b, g, a = this.options, c = a.tickPositions, d = a.tickPositioner, e = a.startOnTick, f = a.endOnTick;
            this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
            this.minorTickInterval = "auto" === a.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval;
            this.tickPositions = b = a.tickPositions && a.tickPositions.slice();
            !b && (this.tickPositions = b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), 
            d && (d = d.apply(this, [ this.min, this.max ]))) && (this.tickPositions = b = d);
            this.isLinked || (this.trimTicks(b, e, f), this.min === this.max && r(this.min) && !this.tickAmount && (g = !0, 
            this.min -= .5, this.max += .5), this.single = g, !c && !d && this.adjustTickAmount());
        },
        trimTicks: function(a, b, c) {
            var d = a[0], e = a[a.length - 1], f = this.minPointOffset || 0;
            b ? this.min = d : this.min - f > d && a.shift();
            c ? this.max = e : this.max + f < e && a.pop();
            0 === a.length && r(d) && a.push((e + d) / 2);
        },
        getTickAmount: function() {
            var b, a = {}, c = this.options, d = c.tickAmount, e = c.tickPixelInterval;
            !r(c.tickInterval) && this.len < e && !this.isRadial && !this.isLog && c.startOnTick && c.endOnTick && (d = 2);
            !d && this.chart.options.chart.alignTicks !== !1 && c.alignTicks !== !1 && (m(this.chart[this.coll], function(c) {
                var d = c.options, c = c.horiz, d = [ c ? d.left : d.top, c ? d.width : d.height, d.pane ].join(",");
                a[d] ? b = !0 : a[d] = 1;
            }), b && (d = sa(this.len / e) + 1));
            4 > d && (this.finalTickAmt = d, d = 5);
            this.tickAmount = d;
        },
        adjustTickAmount: function() {
            var a = this.tickInterval, b = this.tickPositions, c = this.tickAmount, d = this.finalTickAmt, e = b && b.length;
            if (c > e) {
                for (;b.length < c; ) b.push(da(b[b.length - 1] + a));
                this.transA *= (e - 1) / (c - 1);
                this.max = b[b.length - 1];
            } else e > c && (this.tickInterval *= 2, this.setTickPositions());
            if (r(d)) {
                for (a = c = b.length; a--; ) (3 === d && a % 2 === 1 || 2 >= d && a > 0 && c - 1 > a) && b.splice(a, 1);
                this.finalTickAmt = v;
            }
        },
        setScale: function() {
            var b, c, d, e, a = this.stacks;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            e = this.len !== this.oldAxisLength;
            m(this.series, function(a) {
                (a.isDirtyData || a.isDirty || a.xAxis.isDirty) && (d = !0);
            });
            if (e || d || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) {
                if (!this.isXAxis) for (b in a) for (c in a[b]) a[b][c].total = null, a[b][c].cum = 0;
                this.forceRedraw = !1;
                this.getSeriesExtremes();
                this.setTickInterval();
                this.oldUserMin = this.userMin;
                this.oldUserMax = this.userMax;
                this.isDirty || (this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax);
            } else if (!this.isXAxis) {
                this.oldStacks && (a = this.stacks = this.oldStacks);
                for (b in a) for (c in a[b]) a[b][c].cum = a[b][c].total;
            }
        },
        setExtremes: function(a, b, c, d, e) {
            var f = this, g = f.chart, c = p(c, !0);
            m(f.series, function(a) {
                delete a.kdTree;
            });
            e = q(e, {
                min: a,
                max: b
            });
            G(f, "setExtremes", e, function() {
                f.userMin = a;
                f.userMax = b;
                f.eventArgs = e;
                f.isDirtyExtremes = !0;
                c && g.redraw(d);
            });
        },
        zoom: function(a, b) {
            var c = this.dataMin, d = this.dataMax, e = this.options;
            this.allowZoomOutside || (r(c) && a <= H(c, p(e.min, c)) && (a = v), r(d) && b >= t(d, p(e.max, d)) && (b = v));
            this.displayBtn = a !== v || b !== v;
            this.setExtremes(a, b, !1, v, {
                trigger: "zoom"
            });
            return !0;
        },
        setAxisSize: function() {
            var a = this.chart, b = this.options, c = b.offsetLeft || 0, d = this.horiz, e = p(b.width, a.plotWidth - c + (b.offsetRight || 0)), f = p(b.height, a.plotHeight), g = p(b.top, a.plotTop), b = p(b.left, a.plotLeft + c), c = /%$/;
            c.test(f) && (f = parseFloat(f) / 100 * a.plotHeight);
            c.test(g) && (g = parseFloat(g) / 100 * a.plotHeight + a.plotTop);
            this.left = b;
            this.top = g;
            this.width = e;
            this.height = f;
            this.bottom = a.chartHeight - f - g;
            this.right = a.chartWidth - e - b;
            this.len = t(d ? e : f, 0);
            this.pos = d ? b : g;
        },
        getExtremes: function() {
            var a = this.isLog;
            return {
                min: a ? da(ha(this.min)) : this.min,
                max: a ? da(ha(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            };
        },
        getThreshold: function(a) {
            var b = this.isLog, c = b ? ha(this.min) : this.min, b = b ? ha(this.max) : this.max;
            c > a || null === a ? a = c : a > b && (a = b);
            return this.translate(a, 0, 1, 0, 1);
        },
        autoLabelAlign: function(a) {
            a = (p(a, 0) - 90 * this.side + 720) % 360;
            return a > 15 && 165 > a ? "right" : a > 195 && 345 > a ? "left" : "center";
        },
        unsquish: function() {
            var g, j, l, a = this.ticks, b = this.options.labels, c = this.horiz, d = this.tickInterval, e = d, f = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d), h = b.rotation, i = this.chart.renderer.fontMetrics(b.style.fontSize, a[0] && a[0].label), k = Number.MAX_VALUE, n = function(a) {
                a /= f || 1;
                a = a > 1 ? sa(a) : 1;
                return a * d;
            };
            c ? (l = r(h) ? [ h ] : 80 > f && !b.staggerLines && !b.step && b.autoRotation) && m(l, function(a) {
                var b;
                (a === h || a && a >= -90 && 90 >= a) && (j = n(P(i.h / $(ga * a))), b = j + P(a / 360), 
                k > b && (k = b, g = a, e = j));
            }) : e = n(i.h);
            this.autoRotation = l;
            this.labelRotation = g;
            return e;
        },
        renderUnsquish: function() {
            var k, a = this.chart, b = a.renderer, c = this.tickPositions, d = this.ticks, e = this.options.labels, f = this.horiz, g = a.margin, h = this.slotWidth = f && !e.step && !e.rotation && (this.staggerLines || 1) * a.plotWidth / c.length || !f && (g[3] && g[3] - a.spacing[3] || .33 * a.chartWidth), i = t(1, w(h - 2 * (e.padding || 5))), j = {}, g = b.fontMetrics(e.style.fontSize, d[0] && d[0].label), l = 0;
            Da(e.rotation) || (j.rotation = e.rotation);
            if (this.autoRotation) m(c, function(a) {
                (a = d[a]) && a.labelLength > l && (l = a.labelLength);
            }), l > i && l > g.h ? j.rotation = this.labelRotation : this.labelRotation = 0; else if (h) {
                k = {
                    width: i + "px",
                    textOverflow: "clip"
                };
                for (h = c.length; !f && h--; ) (i = c[h], (i = d[i].label) && this.len / c.length - 4 < i.getBBox().height) && (i.specCss = {
                    textOverflow: "ellipsis"
                });
            }
            j.rotation && (k = {
                width: (l > .5 * a.chartHeight ? .33 * a.chartHeight : a.chartHeight) + "px",
                textOverflow: "ellipsis"
            });
            this.labelAlign = j.align = e.align || this.autoLabelAlign(this.labelRotation);
            m(c, function(a) {
                var b = (a = d[a]) && a.label;
                b && (k && b.css(z(k, b.specCss)), delete b.specCss, b.attr(j), a.rotation = j.rotation);
            });
            this.tickRotCorr = b.rotCorr(g.b, this.labelRotation || 0, 2 === this.side);
        },
        getOffset: function() {
            var j, k, n, q, a = this, b = a.chart, c = b.renderer, d = a.options, e = a.tickPositions, f = a.ticks, g = a.horiz, h = a.side, i = b.inverted ? [ 1, 0, 3, 2 ][h] : h, l = 0, o = 0, s = d.title, x = d.labels, T = 0, B = b.axisOffset, b = b.clipOffset, u = [ -1, 1, 1, -1 ][h];
            a.hasData = j = a.hasVisibleSeries || r(a.min) && r(a.max) && !!e;
            a.showAxis = k = j || p(d.showEmpty, !0);
            a.staggerLines = a.horiz && x.staggerLines;
            a.axisGroup || (a.gridGroup = c.g("grid").attr({
                zIndex: d.gridZIndex || 1
            }).add(), a.axisGroup = c.g("axis").attr({
                zIndex: d.zIndex || 2
            }).add(), a.labelGroup = c.g("axis-labels").attr({
                zIndex: x.zIndex || 7
            }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels").add());
            if (j || a.isLinked) (m(e, function(b) {
                f[b] ? f[b].addLabel() : f[b] = new Ta(a, b);
            }), a.renderUnsquish(), m(e, function(b) {
                (0 === h || 2 === h || {
                    1: "left",
                    3: "right"
                }[h] === a.labelAlign) && (T = t(f[b].getLabelSize(), T));
            }), a.staggerLines) && (T *= a.staggerLines, a.labelOffset = T); else for (q in f) f[q].destroy(), 
            delete f[q];
            if (s && s.text && s.enabled !== !1) {
                a.axisTitle || (a.axisTitle = c.text(s.text, 0, 0, s.useHTML).attr({
                    zIndex: 7,
                    rotation: s.rotation || 0,
                    align: s.textAlign || {
                        low: "left",
                        middle: "center",
                        high: "right"
                    }[s.align]
                }).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(s.style).add(a.axisGroup), 
                a.axisTitle.isNew = !0);
                k && (l = a.axisTitle.getBBox()[g ? "height" : "width"], n = s.offset, o = r(n) ? 0 : p(s.margin, g ? 5 : 10));
                a.axisTitle[k ? "show" : "hide"]();
            }
            a.offset = u * p(d.offset, B[h]);
            a.tickRotCorr = a.tickRotCorr || {
                x: 0,
                y: 0
            };
            c = 2 === h ? a.tickRotCorr.y : 0;
            g = T + o + (T && u * (g ? p(x.y, a.tickRotCorr.y + 8) : x.x) - c);
            a.axisTitleMargin = p(n, g);
            B[h] = t(B[h], a.axisTitleMargin + l + u * a.offset, g);
            b[i] = t(b[i], 2 * U(d.lineWidth / 2));
        },
        getLinePath: function(a) {
            var b = this.chart, c = this.opposite, d = this.offset, e = this.horiz, f = this.left + (c ? this.width : 0) + d, d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
            c && (a *= -1);
            return b.renderer.crispLine([ "M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom ], a);
        },
        getTitlePosition: function() {
            var a = this.horiz, b = this.left, c = this.top, d = this.len, e = this.options.title, f = a ? b : c, g = this.opposite, h = this.offset, i = C(e.style.fontSize || 12), d = {
                low: f + (a ? 0 : d),
                middle: f + d / 2,
                high: f + (a ? d : 0)
            }[e.align], b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? i : 0);
            return {
                x: a ? d : b + (g ? this.width : 0) + h + (e.x || 0),
                y: a ? b - (g ? this.height : 0) + h : d + (e.y || 0)
            };
        },
        render: function() {
            var x, a = this, b = a.chart, c = b.renderer, d = a.options, e = a.isLog, f = a.isLinked, g = a.tickPositions, h = a.axisTitle, i = a.ticks, j = a.minorTicks, k = a.alternateBands, l = d.stackLabels, n = d.alternateGridColor, o = a.tickmarkOffset, s = d.lineWidth, p = b.hasRendered && r(a.oldMin) && !isNaN(a.oldMin);
            x = a.hasData;
            var u, q, B = a.showAxis;
            a.labelEdge.length = 0;
            a.overlap = !1;
            m([ i, j, k ], function(a) {
                for (var b in a) a[b].isActive = !1;
            });
            if (x || f) {
                a.minorTickInterval && !a.categories && m(a.getMinorTickPositions(), function(b) {
                    j[b] || (j[b] = new Ta(a, b, "minor"));
                    p && j[b].isNew && j[b].render(null, !0);
                    j[b].render(null, !1, 1);
                });
                g.length && (m(g, function(b, c) {
                    (!f || b >= a.min && b <= a.max) && (i[b] || (i[b] = new Ta(a, b)), p && i[b].isNew && i[b].render(c, !0, .1), 
                    i[b].render(c));
                }), o && (0 === a.min || a.single)) && (i[-1] || (i[-1] = new Ta(a, -1, null, !0)), 
                i[-1].render(-1));
                n && m(g, function(b, c) {
                    c % 2 === 0 && b < a.max && (k[b] || (k[b] = new y.PlotLineOrBand(a)), u = b + o, 
                    q = g[c + 1] !== v ? g[c + 1] + o : a.max, k[b].options = {
                        from: e ? ha(u) : u,
                        to: e ? ha(q) : q,
                        color: n
                    }, k[b].render(), k[b].isActive = !0);
                });
                a._addedPlotLB || (m((d.plotLines || []).concat(d.plotBands || []), function(b) {
                    a.addPlotBandOrLine(b);
                }), a._addedPlotLB = !0);
            }
            m([ i, j, k ], function(a) {
                var c, d, e = [], f = za ? za.duration || 500 : 0, g = function() {
                    for (d = e.length; d--; ) a[e[d]] && !a[e[d]].isActive && (a[e[d]].destroy(), delete a[e[d]]);
                };
                for (c in a) a[c].isActive || (a[c].render(c, !1, 0), a[c].isActive = !1, e.push(c));
                a !== k && b.hasRendered && f ? f && setTimeout(g, f) : g();
            });
            s && (x = a.getLinePath(s), a.axisLine ? a.axisLine.animate({
                d: x
            }) : a.axisLine = c.path(x).attr({
                stroke: d.lineColor,
                "stroke-width": s,
                zIndex: 7
            }).add(a.axisGroup), a.axisLine[B ? "show" : "hide"]());
            h && B && (h[h.isNew ? "attr" : "animate"](a.getTitlePosition()), h.isNew = !1);
            l && l.enabled && a.renderStackTotals();
            a.isDirty = !1;
        },
        redraw: function() {
            this.render();
            m(this.plotLinesAndBands, function(a) {
                a.render();
            });
            m(this.series, function(a) {
                a.isDirty = !0;
            });
        },
        destroy: function(a) {
            var d, b = this, c = b.stacks, e = b.plotLinesAndBands;
            a || Y(b);
            for (d in c) Qa(c[d]), c[d] = null;
            m([ b.ticks, b.minorTicks, b.alternateBands ], function(a) {
                Qa(a);
            });
            for (a = e.length; a--; ) e[a].destroy();
            m("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","), function(a) {
                b[a] && (b[a] = b[a].destroy());
            });
            this.cross && this.cross.destroy();
        },
        drawCrosshair: function(a, b) {
            var c, d = this.crosshair, e = d.animation;
            if (this.crosshair && (r(b) || !p(this.crosshair.snap, !0)) !== !1) if (p(d.snap, !0) ? r(b) && (c = this.isXAxis ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos, 
            c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : p(b.stackY, b.y)) || null : this.getPlotLinePath(null, null, null, null, c) || null, 
            null === c) this.hideCrosshair(); else if (this.cross) this.cross.attr({
                visibility: "visible"
            })[e ? "animate" : "attr"]({
                d: c
            }, e); else {
                e = this.categories && !this.isRadial;
                e = {
                    "stroke-width": d.width || (e ? this.transA : 1),
                    stroke: d.color || (e ? "rgba(155,200,255,0.2)" : "#C0C0C0"),
                    zIndex: d.zIndex || 2
                };
                d.dashStyle && (e.dashstyle = d.dashStyle);
                this.cross = this.chart.renderer.path(c).attr(e).add();
            } else this.hideCrosshair();
        },
        hideCrosshair: function() {
            this.cross && this.cross.hide();
        }
    };
    q(va.prototype, {
        getPlotBandPath: function(a, b) {
            var c = this.getPlotLinePath(b, null, null, !0), d = this.getPlotLinePath(a, null, null, !0);
            d && c && d.toString() !== c.toString() ? d.push(c[4], c[5], c[1], c[2]) : d = null;
            return d;
        },
        addPlotBand: function(a) {
            return this.addPlotBandOrLine(a, "plotBands");
        },
        addPlotLine: function(a) {
            return this.addPlotBandOrLine(a, "plotLines");
        },
        addPlotBandOrLine: function(a, b) {
            var c = new y.PlotLineOrBand(this, a).render(), d = this.userOptions;
            c && (b && (d[b] = d[b] || [], d[b].push(a)), this.plotLinesAndBands.push(c));
            return c;
        },
        removePlotBandOrLine: function(a) {
            for (var b = this.plotLinesAndBands, c = this.options, d = this.userOptions, e = b.length; e--; ) b[e].id === a && b[e].destroy();
            m([ c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || [] ], function(b) {
                for (e = b.length; e--; ) b[e].id === a && ia(b, b[e]);
            });
        }
    });
    va.prototype.getTimeTicks = function(a, b, c, d) {
        var h, e = [], f = {}, g = S.global.useUTC, i = new Aa(b - Wa(b)), j = a.unitRange, k = a.count;
        if (r(b)) {
            i.setMilliseconds(j >= F.second ? 0 : k * U(i.getMilliseconds() / k));
            j >= F.second && i.setSeconds(j >= F.minute ? 0 : k * U(i.getSeconds() / k));
            j >= F.minute && i[Db](j >= F.hour ? 0 : k * U(i[rb]() / k));
            j >= F.hour && i[Eb](j >= F.day ? 0 : k * U(i[sb]() / k));
            j >= F.day && i[ub](j >= F.month ? 1 : k * U(i[Xa]() / k));
            j >= F.month && (i[vb](j >= F.year ? 0 : k * U(i[Ya]() / k)), h = i[Za]());
            j >= F.year && (h -= h % k, i[wb](h));
            j === F.week && i[ub](i[Xa]() - i[tb]() + p(d, 1));
            b = 1;
            (nb || eb) && (i = i.getTime(), i = new Aa(i + Wa(i)));
            h = i[Za]();
            for (var d = i.getTime(), l = i[Ya](), n = i[Xa](), o = (F.day + (g ? Wa(i) : 6e4 * i.getTimezoneOffset())) % F.day; c > d; ) e.push(d), 
            j === F.year ? d = gb(h + b * k, 0) : j === F.month ? d = gb(h, l + b * k) : g || j !== F.day && j !== F.week ? d += j * k : d = gb(h, l, n + b * k * (j === F.day ? 1 : 7)), 
            b++;
            e.push(d);
            m(kb(e, function(a) {
                return j <= F.hour && a % F.day === o;
            }), function(a) {
                f[a] = "day";
            });
        }
        e.info = q(a, {
            higherRanks: f,
            totalRange: j * k
        });
        return e;
    };
    va.prototype.normalizeTimeTickInterval = function(a, b) {
        var g, c = b || [ [ "millisecond", [ 1, 2, 5, 10, 20, 25, 50, 100, 200, 500 ] ], [ "second", [ 1, 2, 5, 10, 15, 30 ] ], [ "minute", [ 1, 2, 5, 10, 15, 30 ] ], [ "hour", [ 1, 2, 3, 4, 6, 8, 12 ] ], [ "day", [ 1, 2 ] ], [ "week", [ 1, 2 ] ], [ "month", [ 1, 2, 3, 4, 6 ] ], [ "year", null ] ], d = c[c.length - 1], e = F[d[0]], f = d[1];
        for (g = 0; g < c.length; g++) if (d = c[g], e = F[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] + F[c[g + 1][0]]) / 2) break;
        e === F.year && 5 * e > a && (f = [ 1, 2, 5 ]);
        c = pb(a / e, f, "year" === d[0] ? t(ob(a / e), 1) : 1);
        return {
            unitRange: e,
            count: c,
            unitName: d[0]
        };
    };
    va.prototype.getLogTickPositions = function(a, b, c, d) {
        var e = this.options, f = this.len, g = [];
        d || (this._minorAutoInterval = null);
        if (a >= .5) a = w(a), g = this.getLinearTickPositions(a, b, c); else if (a >= .08) for (var h, i, j, k, l, f = U(b), e = a > .3 ? [ 1, 2, 4 ] : a > .15 ? [ 1, 2, 4, 6, 8 ] : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]; c + 1 > f && !l; f++) {
            i = e.length;
            for (h = 0; i > h && !l; h++) j = Ea(ha(f) * e[h]), j > b && (!d || c >= k) && k !== v && g.push(k), 
            k > c && (l = !0), k = j;
        } else (b = ha(b), c = ha(c), a = e[d ? "minorTickInterval" : "tickInterval"], a = p("auto" === a ? null : a, this._minorAutoInterval, (c - b) * (e.tickPixelInterval / (d ? 5 : 1)) / ((d ? f / this.tickPositions.length : f) || 1)), 
        a = pb(a, null, ob(a)), g = Ua(this.getLinearTickPositions(a, b, c), Ea), d) || (this._minorAutoInterval = a / 5);
        d || (this.tickInterval = a);
        return g;
    };
    var Kb = y.Tooltip = function() {
        this.init.apply(this, arguments);
    };
    Kb.prototype = {
        init: function(a, b) {
            var c = b.borderWidth, d = b.style, e = C(d.padding);
            this.chart = a;
            this.options = b;
            this.crosshairs = [];
            this.now = {
                x: 0,
                y: 0
            };
            this.isHidden = !0;
            this.label = a.renderer.label("", 0, 0, b.shape || "callout", null, null, b.useHTML, null, "tooltip").attr({
                padding: e,
                fill: b.backgroundColor,
                "stroke-width": c,
                r: b.borderRadius,
                zIndex: 8
            }).css(d).css({
                padding: 0
            }).add().attr({
                y: -9999
            });
            ea || this.label.shadow(b.shadow);
            this.shared = b.shared;
        },
        destroy: function() {
            this.label && (this.label = this.label.destroy());
            clearTimeout(this.hideTimer);
            clearTimeout(this.tooltipTimeout);
        },
        move: function(a, b, c, d) {
            var e = this, f = e.now, g = e.options.animation !== !1 && !e.isHidden && (P(a - f.x) > 1 || P(b - f.y) > 1), h = e.followPointer || e.len > 1;
            q(f, {
                x: g ? (2 * f.x + a) / 3 : a,
                y: g ? (f.y + b) / 2 : b,
                anchorX: h ? v : g ? (2 * f.anchorX + c) / 3 : c,
                anchorY: h ? v : g ? (f.anchorY + d) / 2 : d
            });
            e.label.attr(f);
            g && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                e && e.move(a, b, c, d);
            }, 32));
        },
        hide: function(a) {
            var c, b = this;
            clearTimeout(this.hideTimer);
            this.isHidden || (c = this.chart.hoverPoints, this.hideTimer = setTimeout(function() {
                b.label.fadeOut();
                b.isHidden = !0;
            }, p(a, this.options.hideDelay, 500)), c && m(c, function(a) {
                a.setState();
            }), this.chart.hoverPoints = null, this.chart.hoverSeries = null);
        },
        getAnchor: function(a, b) {
            var c, j, k, d = this.chart, e = d.inverted, f = d.plotTop, g = d.plotLeft, h = 0, i = 0, a = ra(a);
            c = a[0].tooltipPos;
            this.followPointer && b && (b.chartX === v && (b = d.pointer.normalize(b)), c = [ b.chartX - d.plotLeft, b.chartY - f ]);
            c || (m(a, function(a) {
                j = a.series.yAxis;
                k = a.series.xAxis;
                h += a.plotX + (!e && k ? k.left - g : 0);
                i += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && j ? j.top - f : 0);
            }), h /= a.length, i /= a.length, c = [ e ? d.plotWidth - i : h, this.shared && !e && a.length > 1 && b ? b.chartY - f : e ? d.plotHeight - h : i ]);
            return Ua(c, w);
        },
        getPosition: function(a, b, c) {
            var g, d = this.chart, e = this.distance, f = {}, h = [ "y", d.chartHeight, b, c.plotY + d.plotTop ], i = [ "x", d.chartWidth, a, c.plotX + d.plotLeft ], j = p(c.ttBelow, d.inverted && !c.negative || !d.inverted && c.negative), k = function(a, b, c, d) {
                var g = d - e > c, b = b > d + e + c, c = d - e - c;
                d += e;
                if (j && b) f[a] = d; else if (!j && g) f[a] = c; else if (g) f[a] = c; else {
                    if (!b) return !1;
                    f[a] = d;
                }
            }, l = function(a, b, c, d) {
                if (e > d || d > b - e) return !1;
                f[a] = c / 2 > d ? 1 : d > b - c / 2 ? b - c - 2 : d - c / 2;
            }, n = function(a) {
                var b = h;
                h = i;
                i = b;
                g = a;
            }, o = function() {
                k.apply(0, h) !== !1 ? l.apply(0, i) === !1 && !g && (n(!0), o()) : g ? f.x = f.y = 0 : (n(!0), 
                o());
            };
            (d.inverted || this.len > 1) && n();
            o();
            return f;
        },
        defaultFormatter: function(a) {
            var c, b = this.points || ra(this);
            c = [ a.tooltipFooterHeaderFormatter(b[0]) ];
            c = c.concat(a.bodyFormatter(b));
            c.push(a.tooltipFooterHeaderFormatter(b[0], !0));
            return c.join("");
        },
        refresh: function(a, b) {
            var f, g, i, c = this.chart, d = this.label, e = this.options, h = {}, j = [];
            i = e.formatter || this.defaultFormatter;
            var k, h = c.hoverPoints, l = this.shared;
            clearTimeout(this.hideTimer);
            this.followPointer = ra(a)[0].series.tooltipOptions.followPointer;
            g = this.getAnchor(a, b);
            f = g[0];
            g = g[1];
            !l || a.series && a.series.noSharedTooltip ? h = a.getLabelConfig() : (c.hoverPoints = a, 
            h && m(h, function(a) {
                a.setState();
            }), m(a, function(a) {
                a.setState("hover");
                j.push(a.getLabelConfig());
            }), h = {
                x: a[0].category,
                y: a[0].y
            }, h.points = j, this.len = j.length, a = a[0]);
            i = i.call(h, this);
            h = a.series;
            this.distance = p(h.tooltipOptions.distance, 16);
            i === !1 ? this.hide() : (this.isHidden && (db(d), d.attr("opacity", 1).show()), 
            d.attr({
                text: i
            }), k = e.borderColor || a.color || h.color || "#606060", d.attr({
                stroke: k
            }), this.updatePosition({
                plotX: f,
                plotY: g,
                negative: a.negative,
                ttBelow: a.ttBelow
            }), this.isHidden = !1);
            G(c, "tooltipRefresh", {
                text: i,
                x: f + c.plotLeft,
                y: g + c.plotTop,
                borderColor: k
            });
        },
        updatePosition: function(a) {
            var b = this.chart, c = this.label, c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);
            this.move(w(c.x), w(c.y), a.plotX + b.plotLeft, a.plotY + b.plotTop);
        },
        getXDateFormat: function(a, b, c) {
            var d, f, h, i, b = b.dateTimeLabelFormats, e = c && c.closestPointRange, g = {
                millisecond: 15,
                second: 12,
                minute: 9,
                hour: 6,
                day: 3
            };
            if (e) {
                h = Oa("%m-%d %H:%M:%S.%L", a.x);
                for (f in F) {
                    if (e === F.week && +Oa("%w", a.x) === c.options.startOfWeek && "00:00:00.000" === h.substr(6)) {
                        f = "week";
                        break;
                    }
                    if (F[f] > e) {
                        f = i;
                        break;
                    }
                    if (g[f] && h.substr(g[f]) !== "01-01 00:00:00.000".substr(g[f])) break;
                    "week" !== f && (i = f);
                }
                f && (d = b[f]);
            } else d = b.day;
            return d || b.year;
        },
        tooltipFooterHeaderFormatter: function(a, b) {
            var c = b ? "footer" : "header", d = a.series, e = d.tooltipOptions, f = e.xDateFormat, g = d.xAxis, h = g && "datetime" === g.options.type && qa(a.key), c = e[c + "Format"];
            h && !f && (f = this.getXDateFormat(a, e, g));
            h && f && (c = c.replace("{point.key}", "{point.key:" + f + "}"));
            return Ja(c, {
                point: a,
                series: d
            });
        },
        bodyFormatter: function(a) {
            return Ua(a, function(a) {
                var c = a.series.tooltipOptions;
                return (c.pointFormatter || a.point.tooltipFormatter).call(a.point, c.pointFormat);
            });
        }
    };
    var oa;
    ab = D.documentElement.ontouchstart !== v;
    var Va = y.Pointer = function(a, b) {
        this.init(a, b);
    };
    Va.prototype = {
        init: function(a, b) {
            var f, c = b.chart, d = c.events, e = ea ? "" : c.zoomType, c = a.inverted;
            this.options = b;
            this.chart = a;
            this.zoomX = f = /x/.test(e);
            this.zoomY = e = /y/.test(e);
            this.zoomHor = f && !c || e && c;
            this.zoomVert = e && !c || f && c;
            this.hasZoom = f || e;
            this.runChartClick = d && !!d.click;
            this.pinchDown = [];
            this.lastValidTouch = {};
            y.Tooltip && b.tooltip.enabled && (a.tooltip = new Kb(a, b.tooltip), this.followTouchMove = p(b.tooltip.followTouchMove, !0));
            this.setDOMEvents();
        },
        normalize: function(a, b) {
            var c, d, a = a || window.event, a = Qb(a);
            a.target || (a.target = a.srcElement);
            d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
            b || (this.chartPosition = b = Pb(this.chart.container));
            d.pageX === v ? (c = t(a.x, a.clientX - b.left), d = a.y) : (c = d.pageX - b.left, 
            d = d.pageY - b.top);
            return q(a, {
                chartX: w(c),
                chartY: w(d)
            });
        },
        getCoordinates: function(a) {
            var b = {
                xAxis: [],
                yAxis: []
            };
            m(this.chart.axes, function(c) {
                b[c.isXAxis ? "xAxis" : "yAxis"].push({
                    axis: c,
                    value: c.toValue(a[c.horiz ? "chartX" : "chartY"])
                });
            });
            return b;
        },
        runPointActions: function(a) {
            var f, k, n, o, b = this.chart, c = b.series, d = b.tooltip, e = d ? d.shared : !1, g = b.hoverPoint, h = b.hoverSeries, i = b.chartWidth, j = b.chartWidth, l = [];
            if (!e && !h) for (f = 0; f < c.length; f++) (c[f].directTouch || !c[f].options.stickyTracking) && (c = []);
            h && h.noSharedTooltip || !e && h ? n = h.directTouch && g || h && h.searchPoint(a) : (m(c, function(b) {
                k = b.noSharedTooltip && e;
                b.visible && !k && p(b.options.enableMouseTracking, !0) && (o = b.searchPoint(a)) && l.push(o);
            }), m(l, function(a) {
                a && r(a.plotX) && r(a.plotY) && (a.dist.distX < i || (a.dist.distX === i || a.series.kdDimensions > 1) && a.dist.distR < j) && (i = a.dist.distX, 
                j = a.dist.distR, n = a);
            }));
            if (n && (n !== g || d && d.isHidden)) {
                if (e && !n.series.noSharedTooltip) {
                    f = l.length;
                    for (c = n.clientX; f--; ) h = l[f].clientX, (l[f].x !== n.x || h !== c || l[f].series.noSharedTooltip) && l.splice(f, 1);
                    l.length && d && d.refresh(l, a);
                    m(l, function(b) {
                        b !== n && b.onMouseOver(a);
                    });
                } else d && d.refresh(n, a);
                n.onMouseOver(a);
            } else f = h && h.tooltipOptions.followPointer, d && f && !d.isHidden && (f = d.getAnchor([ {} ], a), 
            d.updatePosition({
                plotX: f[0],
                plotY: f[1]
            }));
            d && !this._onDocumentMouseMove && (this._onDocumentMouseMove = function(a) {
                X[oa] && X[oa].pointer.onDocumentMouseMove(a);
            }, K(D, "mousemove", this._onDocumentMouseMove));
            m(b.axes, function(b) {
                b.drawCrosshair(a, p(n, g));
            });
        },
        reset: function(a, b) {
            var c = this.chart, d = c.hoverSeries, e = c.hoverPoint, f = c.tooltip, g = f && f.shared ? c.hoverPoints : e;
            (a = a && f && g) && ra(g)[0].plotX === v && (a = !1);
            if (a) f.refresh(g), e && (e.setState(e.state, !0), m(c.axes, function(b) {
                p(b.options.crosshair && b.options.crosshair.snap, !0) ? b.drawCrosshair(null, a) : b.hideCrosshair();
            })); else {
                e && e.onMouseOut();
                d && d.onMouseOut();
                f && f.hide(b);
                this._onDocumentMouseMove && (Y(D, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null);
                m(c.axes, function(a) {
                    a.hideCrosshair();
                });
                this.hoverX = null;
            }
        },
        scaleGroups: function(a, b) {
            var d, c = this.chart;
            m(c.series, function(e) {
                d = a || e.getPlotBox();
                e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d), 
                e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d));
            });
            c.clipRect.attr(b || c.clipBox);
        },
        dragStart: function(a) {
            var b = this.chart;
            b.mouseIsDown = a.type;
            b.cancelClick = !1;
            b.mouseDownX = this.mouseDownX = a.chartX;
            b.mouseDownY = this.mouseDownY = a.chartY;
        },
        drag: function(a) {
            var l, b = this.chart, c = b.options.chart, d = a.chartX, e = a.chartY, f = this.zoomHor, g = this.zoomVert, h = b.plotLeft, i = b.plotTop, j = b.plotWidth, k = b.plotHeight, n = this.mouseDownX, o = this.mouseDownY, s = c.panKey && a[c.panKey + "Key"];
            h > d ? d = h : d > h + j && (d = h + j);
            i > e ? e = i : e > i + k && (e = i + k);
            this.hasDragged = Math.sqrt(Math.pow(n - d, 2) + Math.pow(o - e, 2));
            if (this.hasDragged > 10) {
                l = b.isInsidePlot(n - h, o - i);
                b.hasCartesianSeries && (this.zoomX || this.zoomY) && l && !s && !this.selectionMarker && (this.selectionMarker = b.renderer.rect(h, i, f ? 1 : j, g ? 1 : k, 0).attr({
                    fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)",
                    zIndex: 7
                }).add());
                this.selectionMarker && f && (d -= n, this.selectionMarker.attr({
                    width: P(d),
                    x: (d > 0 ? 0 : d) + n
                }));
                this.selectionMarker && g && (d = e - o, this.selectionMarker.attr({
                    height: P(d),
                    y: (d > 0 ? 0 : d) + o
                }));
                l && !this.selectionMarker && c.panning && b.pan(a, c.panning);
            }
        },
        drop: function(a) {
            var b = this, c = this.chart, d = this.hasPinched;
            if (this.selectionMarker) {
                var k, e = {
                    xAxis: [],
                    yAxis: [],
                    originalEvent: a.originalEvent || a
                }, f = this.selectionMarker, g = f.attr ? f.attr("x") : f.x, h = f.attr ? f.attr("y") : f.y, i = f.attr ? f.attr("width") : f.width, j = f.attr ? f.attr("height") : f.height;
                (this.hasDragged || d) && (m(c.axes, function(c) {
                    if (c.zoomEnabled && r(c.min) && (d || b[{
                        xAxis: "zoomX",
                        yAxis: "zoomY"
                    }[c.coll]])) {
                        var f = c.horiz, o = "touchend" === a.type ? c.minPixelPadding : 0, s = c.toValue((f ? g : h) + o), f = c.toValue((f ? g + i : h + j) - o);
                        e[c.coll].push({
                            axis: c,
                            min: H(s, f),
                            max: t(s, f)
                        });
                        k = !0;
                    }
                }), k && G(c, "selection", e, function(a) {
                    c.zoom(q(a, d ? {
                        animation: !1
                    } : null));
                }));
                this.selectionMarker = this.selectionMarker.destroy();
                d && this.scaleGroups();
            }
            c && (J(c.container, {
                cursor: c._cursor
            }), c.cancelClick = this.hasDragged > 10, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, 
            this.pinchDown = []);
        },
        onContainerMouseDown: function(a) {
            a = this.normalize(a);
            a.preventDefault && a.preventDefault();
            this.dragStart(a);
        },
        onDocumentMouseUp: function(a) {
            X[oa] && X[oa].pointer.drop(a);
        },
        onDocumentMouseMove: function(a) {
            var b = this.chart, c = this.chartPosition, a = this.normalize(a, c);
            c && !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && this.reset();
        },
        onContainerMouseLeave: function() {
            var a = X[oa];
            a && (a.pointer.reset(), a.pointer.chartPosition = null);
        },
        onContainerMouseMove: function(a) {
            var b = this.chart;
            oa = b.index;
            a = this.normalize(a);
            a.returnValue = !1;
            "mousedown" === b.mouseIsDown && this.drag(a);
            (this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop)) && !b.openMenu && this.runPointActions(a);
        },
        inClass: function(a, b) {
            for (var c; a; ) {
                if (c = I(a, "class")) {
                    if (-1 !== c.indexOf(b)) return !0;
                    if (-1 !== c.indexOf("highcharts-container")) return !1;
                }
                a = a.parentNode;
            }
        },
        onTrackerMouseOut: function(a) {
            var b = this.chart.hoverSeries, c = (a = a.relatedTarget || a.toElement) && a.point && a.point.series;
            !b || b.options.stickyTracking || this.inClass(a, "highcharts-tooltip") || c === b || b.onMouseOut();
        },
        onContainerClick: function(a) {
            var b = this.chart, c = b.hoverPoint, d = b.plotLeft, e = b.plotTop, a = this.normalize(a);
            a.originalEvent = a;
            a.cancelBubble = !0;
            b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (G(c.series, "click", q(a, {
                point: c
            })), b.hoverPoint && c.firePointEvent("click", a)) : (q(a, this.getCoordinates(a)), 
            b.isInsidePlot(a.chartX - d, a.chartY - e) && G(b, "click", a)));
        },
        setDOMEvents: function() {
            var a = this, b = a.chart.container;
            b.onmousedown = function(b) {
                a.onContainerMouseDown(b);
            };
            b.onmousemove = function(b) {
                a.onContainerMouseMove(b);
            };
            b.onclick = function(b) {
                a.onContainerClick(b);
            };
            K(b, "mouseleave", a.onContainerMouseLeave);
            1 === bb && K(D, "mouseup", a.onDocumentMouseUp);
            ab && (b.ontouchstart = function(b) {
                a.onContainerTouchStart(b);
            }, b.ontouchmove = function(b) {
                a.onContainerTouchMove(b);
            }, 1 === bb && K(D, "touchend", a.onDocumentTouchEnd));
        },
        destroy: function() {
            var a;
            Y(this.chart.container, "mouseleave", this.onContainerMouseLeave);
            bb || (Y(D, "mouseup", this.onDocumentMouseUp), Y(D, "touchend", this.onDocumentTouchEnd));
            clearInterval(this.tooltipTimeout);
            for (a in this) this[a] = null;
        }
    };
    q(y.Pointer.prototype, {
        pinchTranslate: function(a, b, c, d, e, f) {
            (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, a, b, c, d, e, f);
            (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, a, b, c, d, e, f);
        },
        pinchTranslateDirection: function(a, b, c, d, e, f, g, h) {
            var s, p, y, i = this.chart, j = a ? "x" : "y", k = a ? "X" : "Y", l = "chart" + k, n = a ? "width" : "height", o = i["plot" + (a ? "Left" : "Top")], m = h || 1, B = i.inverted, u = i.bounds[a ? "h" : "v"], r = 1 === b.length, q = b[0][l], t = c[0][l], v = !r && b[1][l], w = !r && c[1][l], c = function() {
                !r && P(q - v) > 20 && (m = h || P(t - w) / P(q - v));
                p = (o - t) / m + q;
                s = i["plot" + (a ? "Width" : "Height")] / m;
            };
            c();
            b = p;
            b < u.min ? (b = u.min, y = !0) : b + s > u.max && (b = u.max - s, y = !0);
            y ? (t -= .8 * (t - g[j][0]), r || (w -= .8 * (w - g[j][1])), c()) : g[j] = [ t, w ];
            B || (f[j] = p - o, f[n] = s);
            f = B ? 1 / m : m;
            e[n] = s;
            e[j] = b;
            d[B ? a ? "scaleY" : "scaleX" : "scale" + k] = m;
            d["translate" + k] = f * o + (t - f * q);
        },
        pinch: function(a) {
            var b = this, c = b.chart, d = b.pinchDown, e = a.touches, f = e.length, g = b.lastValidTouch, h = b.hasZoom, i = b.selectionMarker, j = {}, k = 1 === f && (b.inClass(a.target, "highcharts-tracker") && c.runTrackerClick || b.runChartClick), l = {};
            h && !k && a.preventDefault();
            Ua(e, function(a) {
                return b.normalize(a);
            });
            if ("touchstart" === a.type) m(e, function(a, b) {
                d[b] = {
                    chartX: a.chartX,
                    chartY: a.chartY
                };
            }), g.x = [ d[0].chartX, d[1] && d[1].chartX ], g.y = [ d[0].chartY, d[1] && d[1].chartY ], 
            m(c.axes, function(a) {
                if (a.zoomEnabled) {
                    var b = c.bounds[a.horiz ? "h" : "v"], d = a.minPixelPadding, e = a.toPixels(p(a.options.min, a.dataMin)), f = a.toPixels(p(a.options.max, a.dataMax)), g = H(e, f), e = t(e, f);
                    b.min = H(a.pos, g - d);
                    b.max = t(a.pos + a.len, e + d);
                }
            }), b.res = !0; else if (d.length) {
                i || (b.selectionMarker = i = q({
                    destroy: ma
                }, c.plotBox));
                b.pinchTranslate(d, e, j, i, l, g);
                b.hasPinched = h;
                b.scaleGroups(j, l);
                !h && b.followTouchMove && 1 === f ? this.runPointActions(b.normalize(a)) : b.res && (b.res = !1, 
                this.reset(!1, 0));
            }
        },
        onContainerTouchStart: function(a) {
            var b = this.chart;
            oa = b.index;
            1 === a.touches.length ? (a = this.normalize(a), b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && !b.openMenu ? (this.runPointActions(a), 
            this.pinch(a)) : this.reset()) : 2 === a.touches.length && this.pinch(a);
        },
        onContainerTouchMove: function(a) {
            (1 === a.touches.length || 2 === a.touches.length) && this.pinch(a);
        },
        onDocumentTouchEnd: function(a) {
            X[oa] && X[oa].pointer.drop(a);
        }
    });
    if (O.PointerEvent || O.MSPointerEvent) {
        var wa = {}, Ab = !!O.PointerEvent, Ub = function() {
            var a, b = [];
            b.item = function(a) {
                return this[a];
            };
            for (a in wa) wa.hasOwnProperty(a) && b.push({
                pageX: wa[a].pageX,
                pageY: wa[a].pageY,
                target: wa[a].target
            });
            return b;
        }, Bb = function(a, b, c, d) {
            a = a.originalEvent || a;
            "touch" !== a.pointerType && a.pointerType !== a.MSPOINTER_TYPE_TOUCH || !X[oa] || (d(a), 
            d = X[oa].pointer, d[b]({
                type: c,
                target: a.currentTarget,
                preventDefault: ma,
                touches: Ub()
            }));
        };
        q(Va.prototype, {
            onContainerPointerDown: function(a) {
                Bb(a, "onContainerTouchStart", "touchstart", function(a) {
                    wa[a.pointerId] = {
                        pageX: a.pageX,
                        pageY: a.pageY,
                        target: a.currentTarget
                    };
                });
            },
            onContainerPointerMove: function(a) {
                Bb(a, "onContainerTouchMove", "touchmove", function(a) {
                    wa[a.pointerId] = {
                        pageX: a.pageX,
                        pageY: a.pageY
                    };
                    wa[a.pointerId].target || (wa[a.pointerId].target = a.currentTarget);
                });
            },
            onDocumentPointerUp: function(a) {
                Bb(a, "onContainerTouchEnd", "touchend", function(a) {
                    delete wa[a.pointerId];
                });
            },
            batchMSEvents: function(a) {
                a(this.chart.container, Ab ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                a(this.chart.container, Ab ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
                a(D, Ab ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
            }
        });
        cb(Va.prototype, "init", function(a, b, c) {
            a.call(this, b, c);
            (this.hasZoom || this.followTouchMove) && J(b.container, {
                "-ms-touch-action": M,
                "touch-action": M
            });
        });
        cb(Va.prototype, "setDOMEvents", function(a) {
            a.apply(this);
            (this.hasZoom || this.followTouchMove) && this.batchMSEvents(K);
        });
        cb(Va.prototype, "destroy", function(a) {
            this.batchMSEvents(Y);
            a.call(this);
        });
    }
    var mb = y.Legend = function(a, b) {
        this.init(a, b);
    };
    mb.prototype = {
        init: function(a, b) {
            var c = this, d = b.itemStyle, e = b.itemMarginTop || 0;
            this.options = b;
            b.enabled && (c.itemStyle = d, c.itemHiddenStyle = z(d, b.itemHiddenStyle), c.itemMarginTop = e, 
            c.padding = d = p(b.padding, 8), c.initialItemX = d, c.initialItemY = d - 5, c.maxItemWidth = 0, 
            c.chart = a, c.itemHeight = 0, c.symbolWidth = p(b.symbolWidth, 16), c.pages = [], 
            c.render(), K(c.chart, "endResize", function() {
                c.positionCheckboxes();
            }));
        },
        colorizeItem: function(a, b) {
            var j, c = this.options, d = a.legendItem, e = a.legendLine, f = a.legendSymbol, g = this.itemHiddenStyle.color, c = b ? c.itemStyle.color : g, h = b ? a.legendColor || a.color || "#CCC" : g, g = a.options && a.options.marker, i = {
                fill: h
            };
            d && d.css({
                fill: c,
                color: c
            });
            e && e.attr({
                stroke: h
            });
            if (f) {
                if (g && f.isMarker) for (j in i.stroke = h, g = a.convertAttribs(g), g) d = g[j], 
                d !== v && (i[j] = d);
                f.attr(i);
            }
        },
        positionItem: function(a) {
            var b = this.options, c = b.symbolPadding, b = !b.rtl, d = a._legendItemPos, e = d[0], d = d[1], f = a.checkbox;
            a.legendGroup && a.legendGroup.translate(b ? e : this.legendWidth - e - 2 * c - 4, d);
            f && (f.x = e, f.y = d);
        },
        destroyItem: function(a) {
            var b = a.checkbox;
            m([ "legendItem", "legendLine", "legendSymbol", "legendGroup" ], function(b) {
                a[b] && (a[b] = a[b].destroy());
            });
            b && Ra(a.checkbox);
        },
        clearItems: function() {
            var a = this;
            m(a.getAllItems(), function(b) {
                a.destroyItem(b);
            });
        },
        destroy: function() {
            var a = this.group, b = this.box;
            b && (this.box = b.destroy());
            a && (this.group = a.destroy());
        },
        positionCheckboxes: function(a) {
            var c, b = this.group.alignAttr, d = this.clipHeight || this.legendHeight;
            b && (c = b.translateY, m(this.allItems, function(e) {
                var g, f = e.checkbox;
                f && (g = c + f.y + (a || 0) + 3, J(f, {
                    left: b.translateX + e.checkboxOffset + f.x - 20 + "px",
                    top: g + "px",
                    display: g > c - 6 && c + d - 6 > g ? "" : M
                }));
            }));
        },
        renderTitle: function() {
            var a = this.padding, b = this.options.title, c = 0;
            if (b.text) {
                this.title || (this.title = this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({
                    zIndex: 1
                }).css(b.style).add(this.group));
                a = this.title.getBBox();
                c = a.height;
                this.offsetWidth = a.width;
                this.contentGroup.attr({
                    translateY: c
                });
            }
            this.titleHeight = c;
        },
        renderItem: function(a) {
            var b = this.chart, c = b.renderer, d = this.options, e = "horizontal" === d.layout, f = this.symbolWidth, g = d.symbolPadding, h = this.itemStyle, i = this.itemHiddenStyle, j = this.padding, k = e ? p(d.itemDistance, 20) : 0, l = !d.rtl, n = d.width, o = d.itemMarginBottom || 0, s = this.itemMarginTop, x = this.initialItemX, m = a.legendItem, r = a.series && a.series.drawLegendSymbol ? a.series : a, u = r.options, u = this.createCheckboxForItem && u && u.showCheckbox, q = d.useHTML;
            if (!m) {
                a.legendGroup = c.g("legend-item").attr({
                    zIndex: 1
                }).add(this.scrollGroup);
                a.legendItem = m = c.text(d.labelFormat ? Ja(d.labelFormat, a) : d.labelFormatter.call(a), l ? f + g : -g, this.baseline || 0, q).css(z(a.visible ? h : i)).attr({
                    align: l ? "left" : "right",
                    zIndex: 2
                }).add(a.legendGroup);
                this.baseline || (this.baseline = c.fontMetrics(h.fontSize, m).f + 3 + s, m.attr("y", this.baseline));
                r.drawLegendSymbol(this, a);
                this.setItemEvents && this.setItemEvents(a, m, q, h, i);
                this.colorizeItem(a, a.visible);
                u && this.createCheckboxForItem(a);
            }
            c = m.getBBox();
            f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + k + (u ? 20 : 0);
            this.itemHeight = g = w(a.legendItemHeight || c.height);
            e && this.itemX - x + f > (n || b.chartWidth - 2 * j - x - d.x) && (this.itemX = x, 
            this.itemY += s + this.lastLineHeight + o);
            this.maxItemWidth = t(this.maxItemWidth, f);
            this.lastItemY = s + this.itemY + o;
            this.lastLineHeight = t(g, this.lastLineHeight);
            a._legendItemPos = [ this.itemX, this.itemY ];
            e ? this.itemX += f : (this.itemY += s + g + o, this.lastLineHeight = g);
            this.offsetWidth = n || t((e ? this.itemX - x - k : f) + j, this.offsetWidth);
        },
        getAllItems: function() {
            var a = [];
            m(this.chart.series, function(b) {
                var c = b.options;
                p(c.showInLegend, r(c.linkedTo) ? !1 : v, !0) && (a = a.concat(b.legendItems || ("point" === c.legendType ? b.data : b)));
            });
            return a;
        },
        adjustMargins: function(a, b) {
            var c = this.chart, d = this.options, e = d.align[0] + d.verticalAlign[0] + d.layout[0];
            this.display && !d.floating && m([ /(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/ ], function(f, g) {
                f.test(e) && !r(a[g]) && (c[ib[g]] = t(c[ib[g]], c.legend[(g + 1) % 2 ? "legendHeight" : "legendWidth"] + [ 1, -1, -1, 1 ][g] * d[g % 2 ? "x" : "y"] + p(d.margin, 12) + b[g]));
            });
        },
        render: function() {
            var e, f, g, h, a = this, b = a.chart, c = b.renderer, d = a.group, i = a.box, j = a.options, k = a.padding, l = j.borderWidth, n = j.backgroundColor;
            a.itemX = a.initialItemX;
            a.itemY = a.initialItemY;
            a.offsetWidth = 0;
            a.lastItemY = 0;
            d || (a.group = d = c.g("legend").attr({
                zIndex: 7
            }).add(), a.contentGroup = c.g().attr({
                zIndex: 1
            }).add(d), a.scrollGroup = c.g().add(a.contentGroup));
            a.renderTitle();
            e = a.getAllItems();
            qb(e, function(a, b) {
                return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0);
            });
            j.reversed && e.reverse();
            a.allItems = e;
            a.display = f = !!e.length;
            a.lastLineHeight = 0;
            m(e, function(b) {
                a.renderItem(b);
            });
            g = (j.width || a.offsetWidth) + k;
            h = a.lastItemY + a.lastLineHeight + a.titleHeight;
            h = a.handleOverflow(h);
            h += k;
            if (l || n) {
                i ? g > 0 && h > 0 && (i[i.isNew ? "attr" : "animate"](i.crisp({
                    width: g,
                    height: h
                })), i.isNew = !1) : (a.box = i = c.rect(0, 0, g, h, j.borderRadius, l || 0).attr({
                    stroke: j.borderColor,
                    "stroke-width": l || 0,
                    fill: n || M
                }).add(d).shadow(j.shadow), i.isNew = !0);
                i[f ? "show" : "hide"]();
            }
            a.legendWidth = g;
            a.legendHeight = h;
            m(e, function(b) {
                a.positionItem(b);
            });
            f && d.align(q({
                width: g,
                height: h
            }, j), !0, "spacingBox");
            b.isResizing || this.positionCheckboxes();
        },
        handleOverflow: function(a) {
            var h, s, b = this, c = this.chart, d = c.renderer, e = this.options, f = e.y, f = c.spacingBox.height + ("top" === e.verticalAlign ? -f : f) - this.padding, g = e.maxHeight, i = this.clipRect, j = e.navigation, k = p(j.animation, !0), l = j.arrowSize || 12, n = this.nav, o = this.pages, x = this.allItems;
            "horizontal" === e.layout && (f /= 2);
            g && (f = H(f, g));
            o.length = 0;
            if (a > f && !e.useHTML) {
                this.clipHeight = h = t(f - 20 - this.titleHeight - this.padding, 0);
                this.currentPage = p(this.currentPage, 1);
                this.fullHeight = a;
                m(x, function(a, b) {
                    var c = a._legendItemPos[1], d = w(a.legendItem.getBBox().height), e = o.length;
                    (!e || c - o[e - 1] > h && (s || c) !== o[e - 1]) && (o.push(s || c), e++);
                    b === x.length - 1 && c + d - o[e - 1] > h && o.push(c);
                    c !== s && (s = c);
                });
                i || (i = b.clipRect = d.clipRect(0, this.padding, 9999, 0), b.contentGroup.clip(i));
                i.attr({
                    height: h
                });
                n || (this.nav = n = d.g().attr({
                    zIndex: 1
                }).add(this.group), this.up = d.symbol("triangle", 0, 0, l, l).on("click", function() {
                    b.scroll(-1, k);
                }).add(n), this.pager = d.text("", 15, 10).css(j.style).add(n), this.down = d.symbol("triangle-down", 0, 0, l, l).on("click", function() {
                    b.scroll(1, k);
                }).add(n));
                b.scroll(0);
                a = f;
            } else n && (i.attr({
                height: c.chartHeight
            }), n.hide(), this.scrollGroup.attr({
                translateY: 1
            }), this.clipHeight = 0);
            return a;
        },
        scroll: function(a, b) {
            var c = this.pages, d = c.length, e = this.currentPage + a, f = this.clipHeight, g = this.options.navigation, h = g.activeColor, g = g.inactiveColor, i = this.pager, j = this.padding;
            e > d && (e = d);
            e > 0 && (b !== v && Sa(b, this.chart), this.nav.attr({
                translateX: j,
                translateY: f + this.padding + 7 + this.titleHeight,
                visibility: "visible"
            }), this.up.attr({
                fill: 1 === e ? g : h
            }).css({
                cursor: 1 === e ? "default" : "pointer"
            }), i.attr({
                text: e + "/" + d
            }), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                fill: e === d ? g : h
            }).css({
                cursor: e === d ? "default" : "pointer"
            }), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({
                translateY: c
            }), this.currentPage = e, this.positionCheckboxes(c));
        }
    };
    Na = y.LegendSymbolMixin = {
        drawRectangle: function(a, b) {
            var c = a.options.symbolHeight || 12;
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 5 - c / 2, a.symbolWidth, c, a.options.symbolRadius || 0).attr({
                zIndex: 3
            }).add(b.legendGroup);
        },
        drawLineMarker: function(a) {
            var d, b = this.options, c = b.marker;
            d = a.symbolWidth;
            var g, e = this.chart.renderer, f = this.legendGroup, a = a.baseline - w(.3 * e.fontMetrics(a.options.itemStyle.fontSize, this.legendItem).b);
            if (b.lineWidth) {
                g = {
                    "stroke-width": b.lineWidth
                };
                b.dashStyle && (g.dashstyle = b.dashStyle);
                this.legendLine = e.path([ "M", 0, a, "L", d, a ]).attr(g).add(f);
            }
            c && c.enabled !== !1 && (b = c.radius, this.legendSymbol = d = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b).add(f), 
            d.isMarker = !0);
        }
    };
    (/Trident\/7\.0/.test(Ba) || La) && cb(mb.prototype, "positionItem", function(a, b) {
        var c = this, d = function() {
            b._legendItemPos && a.call(c, b);
        };
        d();
        setTimeout(d);
    });
    A = y.Chart = function() {
        this.init.apply(this, arguments);
    };
    A.prototype = {
        callbacks: [],
        init: function(a, b) {
            var c, d = a.series;
            a.series = null;
            c = z(S, a);
            c.series = a.series = d;
            this.userOptions = a;
            d = c.chart;
            this.margin = this.splashArray("margin", d);
            this.spacing = this.splashArray("spacing", d);
            var e = d.events;
            this.bounds = {
                h: {},
                v: {}
            };
            this.callback = b;
            this.isResizing = 0;
            this.options = c;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries = d.showAxes;
            var g, f = this;
            f.index = X.length;
            X.push(f);
            bb++;
            d.reflow !== !1 && K(f, "load", function() {
                f.initReflow();
            });
            if (e) for (g in e) K(f, g, e[g]);
            f.xAxis = [];
            f.yAxis = [];
            f.animation = ea ? !1 : p(d.animation, !0);
            f.pointCount = f.colorCounter = f.symbolCounter = 0;
            f.firstRender();
        },
        initSeries: function(a) {
            var b = this.options.chart;
            (b = N[a.type || b.type || b.defaultSeriesType]) || ka(17, !0);
            b = new b();
            b.init(this, a);
            return b;
        },
        isInsidePlot: function(a, b, c) {
            var d = c ? b : a, a = c ? a : b;
            return d >= 0 && d <= this.plotWidth && a >= 0 && a <= this.plotHeight;
        },
        redraw: function(a) {
            var g, h, b = this.axes, c = this.series, d = this.pointer, e = this.legend, f = this.isDirtyLegend, i = this.hasCartesianSeries, j = this.isDirtyBox, k = c.length, l = k, n = this.renderer, o = n.isHidden(), s = [];
            Sa(a, this);
            o && this.cloneRenderTo();
            for (this.layOutTitles(); l--; ) if (a = c[l], a.options.stacking && (g = !0, a.isDirty)) {
                h = !0;
                break;
            }
            if (h) for (l = k; l--; ) (a = c[l], a.options.stacking) && (a.isDirty = !0);
            m(c, function(a) {
                a.isDirty && "point" === a.options.legendType && (f = !0);
            });
            f && e.options.enabled && (e.render(), this.isDirtyLegend = !1);
            g && this.getStacks();
            i && !this.isResizing && (this.maxTicks = null, m(b, function(a) {
                a.setScale();
            }));
            this.getMargins();
            i && (m(b, function(a) {
                a.isDirty && (j = !0);
            }), m(b, function(a) {
                a.isDirtyExtremes && (a.isDirtyExtremes = !1, s.push(function() {
                    G(a, "afterSetExtremes", q(a.eventArgs, a.getExtremes()));
                    delete a.eventArgs;
                }));
                (j || g) && a.redraw();
            }));
            j && this.drawChartBox();
            m(c, function(a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw();
            });
            d && d.reset(!0);
            n.draw();
            G(this, "redraw");
            o && this.cloneRenderTo(!0);
            m(s, function(a) {
                a.call();
            });
        },
        get: function(a) {
            var d, e, b = this.axes, c = this.series;
            for (d = 0; d < b.length; d++) if (b[d].options.id === a) return b[d];
            for (d = 0; d < c.length; d++) if (c[d].options.id === a) return c[d];
            for (d = 0; d < c.length; d++) {
                e = c[d].points || [];
                for (b = 0; b < e.length; b++) if (e[b].id === a) return e[b];
            }
            return null;
        },
        getAxes: function() {
            var a = this, b = this.options, c = b.xAxis = ra(b.xAxis || {}), b = b.yAxis = ra(b.yAxis || {});
            m(c, function(a, b) {
                a.index = b;
                a.isX = !0;
            });
            m(b, function(a, b) {
                a.index = b;
            });
            c = c.concat(b);
            m(c, function(b) {
                new va(a, b);
            });
        },
        getSelectedPoints: function() {
            var a = [];
            m(this.series, function(b) {
                a = a.concat(kb(b.points || [], function(a) {
                    return a.selected;
                }));
            });
            return a;
        },
        getSelectedSeries: function() {
            return kb(this.series, function(a) {
                return a.selected;
            });
        },
        getStacks: function() {
            var a = this;
            m(a.yAxis, function(a) {
                a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks);
            });
            m(a.series, function(b) {
                !b.options.stacking || b.visible !== !0 && a.options.chart.ignoreHiddenSeries !== !1 || (b.stackKey = b.type + p(b.options.stack, ""));
            });
        },
        setTitle: function(a, b, c) {
            var g;
            var f, d = this, e = d.options;
            f = e.title = z(e.title, a);
            g = e.subtitle = z(e.subtitle, b), e = g;
            m([ [ "title", a, f ], [ "subtitle", b, e ] ], function(a) {
                var b = a[0], c = d[b], e = a[1], a = a[2];
                c && e && (d[b] = c = c.destroy());
                a && a.text && !c && (d[b] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({
                    align: a.align,
                    "class": "highcharts-" + b,
                    zIndex: a.zIndex || 4
                }).css(a.style).add());
            });
            d.layOutTitles(c);
        },
        layOutTitles: function(a) {
            var b = 0, c = this.title, d = this.subtitle, e = this.options, f = e.title, e = e.subtitle, g = this.renderer, h = this.spacingBox.width - 44;
            !c || (c.css({
                width: (f.width || h) + "px"
            }).align(q({
                y: g.fontMetrics(f.style.fontSize, c).b - 3
            }, f), !1, "spacingBox"), f.floating || f.verticalAlign) || (b = c.getBBox().height);
            d && (d.css({
                width: (e.width || h) + "px"
            }).align(q({
                y: b + (f.margin - 13) + g.fontMetrics(f.style.fontSize, d).b
            }, e), !1, "spacingBox"), !e.floating && !e.verticalAlign && (b = sa(b + d.getBBox().height)));
            c = this.titleOffset !== b;
            this.titleOffset = b;
            !this.isDirtyBox && c && (this.isDirtyBox = c, this.hasRendered && p(a, !0) && this.isDirtyBox && this.redraw());
        },
        getChartSize: function() {
            var a = this.options.chart, b = a.width, a = a.height, c = this.renderToClone || this.renderTo;
            r(b) || (this.containerWidth = jb(c, "width"));
            r(a) || (this.containerHeight = jb(c, "height"));
            this.chartWidth = t(0, b || this.containerWidth || 600);
            this.chartHeight = t(0, p(a, this.containerHeight > 19 ? this.containerHeight : 400));
        },
        cloneRenderTo: function(a) {
            var b = this.renderToClone, c = this.container;
            a ? b && (this.renderTo.appendChild(c), Ra(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), 
            this.renderToClone = b = this.renderTo.cloneNode(0), J(b, {
                position: "absolute",
                top: "-9999px",
                display: "block"
            }), b.style.setProperty && b.style.setProperty("display", "block", "important"), 
            D.body.appendChild(b), c && b.appendChild(c));
        },
        getContainer: function() {
            var a, c, d, e, b = this.options.chart;
            this.renderTo = a = b.renderTo;
            e = "highcharts-" + yb++;
            Da(a) && (this.renderTo = a = D.getElementById(a));
            a || ka(13, !0);
            c = C(I(a, "data-highcharts-chart"));
            !isNaN(c) && X[c] && X[c].hasRendered && X[c].destroy();
            I(a, "data-highcharts-chart", this.index);
            a.innerHTML = "";
            !b.skipClone && !a.offsetWidth && this.cloneRenderTo();
            this.getChartSize();
            c = this.chartWidth;
            d = this.chartHeight;
            this.container = a = Z(Ka, {
                className: "highcharts-container" + (b.className ? " " + b.className : ""),
                id: e
            }, q({
                position: "relative",
                overflow: "hidden",
                width: c + "px",
                height: d + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, b.style), this.renderToClone || a);
            this._cursor = a.style.cursor;
            this.renderer = b.forExport ? new ta(a, c, d, b.style, !0) : new $a(a, c, d, b.style);
            ea && this.renderer.create(this, a, c, d);
            this.renderer.chartIndex = this.index;
        },
        getMargins: function(a) {
            var b = this.spacing, c = this.margin, d = this.titleOffset;
            this.resetMargins();
            d && !r(c[0]) && (this.plotTop = t(this.plotTop, d + this.options.title.margin + b[0]));
            this.legend.adjustMargins(c, b);
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop += this.extraTopMargin);
            a || this.getAxisMargins();
        },
        getAxisMargins: function() {
            var a = this, b = a.axisOffset = [ 0, 0, 0, 0 ], c = a.margin;
            a.hasCartesianSeries && m(a.axes, function(a) {
                a.getOffset();
            });
            m(ib, function(d, e) {
                r(c[e]) || (a[d] += b[e]);
            });
            a.setChartSize();
        },
        reflow: function(a) {
            var b = this, c = b.options.chart, d = b.renderTo, e = c.width || jb(d, "width"), f = c.height || jb(d, "height"), c = a ? a.target : O, d = function() {
                b.container && (b.setSize(e, f, !1), b.hasUserSize = null);
            };
            if (!b.hasUserSize && !b.isPrinting && e && f && (c === O || c === D)) {
                (e !== b.containerWidth || f !== b.containerHeight) && (clearTimeout(b.reflowTimeout), 
                a ? b.reflowTimeout = setTimeout(d, 100) : d());
                b.containerWidth = e;
                b.containerHeight = f;
            }
        },
        initReflow: function() {
            var a = this, b = function(b) {
                a.reflow(b);
            };
            K(O, "resize", b);
            K(a, "destroy", function() {
                Y(O, "resize", b);
            });
        },
        setSize: function(a, b, c) {
            var e, f, g, d = this;
            d.isResizing += 1;
            g = function() {
                d && G(d, "endResize", null, function() {
                    d.isResizing -= 1;
                });
            };
            Sa(c, d);
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            r(a) && (d.chartWidth = e = t(0, w(a)), d.hasUserSize = !!e);
            r(b) && (d.chartHeight = f = t(0, w(b)));
            (za ? lb : J)(d.container, {
                width: e + "px",
                height: f + "px"
            }, za);
            d.setChartSize(!0);
            d.renderer.setSize(e, f, c);
            d.maxTicks = null;
            m(d.axes, function(a) {
                a.isDirty = !0;
                a.setScale();
            });
            m(d.series, function(a) {
                a.isDirty = !0;
            });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.layOutTitles();
            d.getMargins();
            d.redraw(c);
            d.oldChartHeight = null;
            G(d, "resize");
            za === !1 ? g() : setTimeout(g, za && za.duration || 500);
        },
        setChartSize: function(a) {
            var i, j, k, l, b = this.inverted, c = this.renderer, d = this.chartWidth, e = this.chartHeight, f = this.options.chart, g = this.spacing, h = this.clipOffset;
            this.plotLeft = i = w(this.plotLeft);
            this.plotTop = j = w(this.plotTop);
            this.plotWidth = k = t(0, w(d - i - this.marginRight));
            this.plotHeight = l = t(0, w(e - j - this.marginBottom));
            this.plotSizeX = b ? l : k;
            this.plotSizeY = b ? k : l;
            this.plotBorderWidth = f.plotBorderWidth || 0;
            this.spacingBox = c.spacingBox = {
                x: g[3],
                y: g[0],
                width: d - g[3] - g[1],
                height: e - g[0] - g[2]
            };
            this.plotBox = c.plotBox = {
                x: i,
                y: j,
                width: k,
                height: l
            };
            d = 2 * U(this.plotBorderWidth / 2);
            b = sa(t(d, h[3]) / 2);
            c = sa(t(d, h[0]) / 2);
            this.clipBox = {
                x: b,
                y: c,
                width: U(this.plotSizeX - t(d, h[1]) / 2 - b),
                height: t(0, U(this.plotSizeY - t(d, h[2]) / 2 - c))
            };
            a || m(this.axes, function(a) {
                a.setAxisSize();
                a.setAxisTranslation();
            });
        },
        resetMargins: function() {
            var a = this;
            m(ib, function(b, c) {
                a[b] = p(a.margin[c], a.spacing[c]);
            });
            a.axisOffset = [ 0, 0, 0, 0 ];
            a.clipOffset = [ 0, 0, 0, 0 ];
        },
        drawChartBox: function() {
            var o, a = this.options.chart, b = this.renderer, c = this.chartWidth, d = this.chartHeight, e = this.chartBackground, f = this.plotBackground, g = this.plotBorder, h = this.plotBGImage, i = a.borderWidth || 0, j = a.backgroundColor, k = a.plotBackgroundColor, l = a.plotBackgroundImage, n = a.plotBorderWidth || 0, s = this.plotLeft, p = this.plotTop, m = this.plotWidth, r = this.plotHeight, u = this.plotBox, q = this.clipRect, t = this.clipBox;
            o = i + (a.shadow ? 8 : 0);
            if (i || j) if (e) e.animate(e.crisp({
                width: c - o,
                height: d - o
            })); else {
                e = {
                    fill: j || M
                };
                i && (e.stroke = a.borderColor, e["stroke-width"] = i);
                this.chartBackground = b.rect(o / 2, o / 2, c - o, d - o, a.borderRadius, i).attr(e).addClass("highcharts-background").add().shadow(a.shadow);
            }
            k && (f ? f.animate(u) : this.plotBackground = b.rect(s, p, m, r, 0).attr({
                fill: k
            }).add().shadow(a.plotShadow));
            l && (h ? h.animate(u) : this.plotBGImage = b.image(l, s, p, m, r).add());
            q ? q.animate({
                width: t.width,
                height: t.height
            }) : this.clipRect = b.clipRect(t);
            n && (g ? g.animate(g.crisp({
                x: s,
                y: p,
                width: m,
                height: r,
                strokeWidth: -n
            })) : this.plotBorder = b.rect(s, p, m, r, 0, -n).attr({
                stroke: a.plotBorderColor,
                "stroke-width": n,
                fill: M,
                zIndex: 1
            }).add());
            this.isDirtyBox = !1;
        },
        propFromSeries: function() {
            var c, e, f, a = this, b = a.options.chart, d = a.options.series;
            m([ "inverted", "angular", "polar" ], function(g) {
                c = N[b.type || b.defaultSeriesType];
                f = a[g] || b[g] || c && c.prototype[g];
                for (e = d && d.length; !f && e--; ) (c = N[d[e].type]) && c.prototype[g] && (f = !0);
                a[g] = f;
            });
        },
        linkSeries: function() {
            var a = this, b = a.series;
            m(b, function(a) {
                a.linkedSeries.length = 0;
            });
            m(b, function(b) {
                var d = b.options.linkedTo;
                Da(d) && (d = ":previous" === d ? a.series[b.index - 1] : a.get(d)) && (d.linkedSeries.push(b), 
                b.linkedParent = d);
            });
        },
        renderSeries: function() {
            m(this.series, function(a) {
                a.translate();
                a.render();
            });
        },
        renderLabels: function() {
            var a = this, b = a.options.labels;
            b.items && m(b.items, function(c) {
                var d = q(b.style, c.style), e = C(d.left) + a.plotLeft, f = C(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                a.renderer.text(c.html, e, f).attr({
                    zIndex: 2
                }).css(d).add();
            });
        },
        render: function() {
            var d, e, f, g, a = this.axes, b = this.renderer, c = this.options;
            this.setTitle();
            this.legend = new mb(this, c.legend);
            this.getStacks();
            this.getMargins(!0);
            this.setChartSize();
            d = this.plotWidth;
            e = this.plotHeight -= 13;
            m(a, function(a) {
                a.setScale();
            });
            this.getAxisMargins();
            f = d / this.plotWidth > 1.2;
            g = e / this.plotHeight > 1.1;
            (f || g) && (this.maxTicks = null, m(a, function(a) {
                (a.horiz && f || !a.horiz && g) && a.setTickInterval(!0);
            }), this.getMargins());
            this.drawChartBox();
            this.hasCartesianSeries && m(a, function(a) {
                a.render();
            });
            this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({
                zIndex: 3
            }).add());
            this.renderSeries();
            this.renderLabels();
            this.showCredits(c.credits);
            this.hasRendered = !0;
        },
        showCredits: function(a) {
            a.enabled && !this.credits && (this.credits = this.renderer.text(a.text, 0, 0).on("click", function() {
                a.href && (location.href = a.href);
            }).attr({
                align: a.position.align,
                zIndex: 8
            }).css(a.style).add().align(a.position));
        },
        destroy: function() {
            var e, a = this, b = a.axes, c = a.series, d = a.container, f = d && d.parentNode;
            G(a, "destroy");
            X[a.index] = v;
            bb--;
            a.renderTo.removeAttribute("data-highcharts-chart");
            Y(a);
            for (e = b.length; e--; ) b[e] = b[e].destroy();
            for (e = c.length; e--; ) c[e] = c[e].destroy();
            m("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function(b) {
                var c = a[b];
                c && c.destroy && (a[b] = c.destroy());
            });
            d && (d.innerHTML = "", Y(d), f && Ra(d));
            for (e in a) delete a[e];
        },
        isReadyToRender: function() {
            var a = this;
            return !ba && O == O.top && "complete" !== D.readyState || ea && !O.canvg ? (ea ? Jb.push(function() {
                a.firstRender();
            }, a.options.global.canvasToolsURL) : D.attachEvent("onreadystatechange", function() {
                D.detachEvent("onreadystatechange", a.firstRender);
                "complete" === D.readyState && a.firstRender();
            }), !1) : !0;
        },
        firstRender: function() {
            var a = this, b = a.options, c = a.callback;
            if (a.isReadyToRender()) {
                a.getContainer();
                G(a, "init");
                a.resetMargins();
                a.setChartSize();
                a.propFromSeries();
                a.getAxes();
                m(b.series || [], function(b) {
                    a.initSeries(b);
                });
                a.linkSeries();
                G(a, "beforeRender");
                y.Pointer && (a.pointer = new Va(a, b));
                a.render();
                a.renderer.draw();
                c && c.apply(a, [ a ]);
                m(a.callbacks, function(b) {
                    a.index !== v && b.apply(a, [ a ]);
                });
                G(a, "load");
                a.cloneRenderTo(!0);
            }
        },
        splashArray: function(a, b) {
            var c = b[a], c = ca(c) ? c : [ c, c, c, c ];
            return [ p(b[a + "Top"], c[0]), p(b[a + "Right"], c[1]), p(b[a + "Bottom"], c[2]), p(b[a + "Left"], c[3]) ];
        }
    };
    var Vb = y.CenteredSeriesMixin = {
        getCenter: function() {
            var g, h, i, a = this.options, b = this.chart, c = 2 * (a.slicedOffset || 0), d = b.plotWidth - 2 * c, b = b.plotHeight - 2 * c, e = a.center, e = [ p(e[0], "50%"), p(e[1], "50%"), a.size || "100%", a.innerSize || 0 ], f = H(d, b);
            for (h = 0; 4 > h; ++h) i = e[h], g = /%$/.test(i), a = 2 > h || 2 === h && g, e[h] = (g ? [ d, b, f, e[2] ][h] * C(i) / 100 : C(i)) + (a ? c : 0);
            return e;
        }
    }, Ga = function() {};
    Ga.prototype = {
        init: function(a, b, c) {
            this.series = a;
            this.color = a.color;
            this.applyOptions(b, c);
            this.pointAttr = {};
            a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], 
            a.colorCounter === b.length) && (a.colorCounter = 0);
            a.chart.pointCount++;
            return this;
        },
        applyOptions: function(a, b) {
            var c = this.series, d = c.options.pointValKey || c.pointValKey, a = Ga.prototype.optionsToObject.call(this, a);
            q(this, a);
            this.options = this.options ? q(this.options, a) : a;
            d && (this.y = this[d]);
            this.x === v && c && (this.x = b === v ? c.autoIncrement() : b);
            return this;
        },
        optionsToObject: function(a) {
            var b = {}, c = this.series, d = c.pointArrayMap || [ "y" ], e = d.length, f = 0, g = 0;
            if ("number" == typeof a || null === a) b[d[0]] = a; else if (Ha(a)) {
                if (a.length > e) {
                    c = typeof a[0];
                    "string" === c ? b.name = a[0] : "number" === c && (b.x = a[0]);
                    f++;
                }
                for (;e > g; ) b[d[g++]] = a[f++];
            } else if ("object" == typeof a) {
                b = a;
                a.dataLabels && (c._hasPointLabels = !0);
                a.marker && (c._hasPointMarkers = !0);
            }
            return b;
        },
        destroy: function() {
            var c, a = this.series.chart, b = a.hoverPoints;
            a.pointCount--;
            b && (this.setState(), ia(b, this), !b.length) && (a.hoverPoints = null);
            this === a.hoverPoint && this.onMouseOut();
            (this.graphic || this.dataLabel) && (Y(this), this.destroyElements());
            this.legendItem && a.legend.destroyItem(this);
            for (c in this) this[c] = null;
        },
        destroyElements: function() {
            for (var b, a = "graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","), c = 6; c--; ) b = a[c], 
            this[b] && (this[b] = this[b].destroy());
        },
        getLabelConfig: function() {
            return {
                x: this.category,
                y: this.y,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            };
        },
        tooltipFormatter: function(a) {
            var b = this.series, c = b.tooltipOptions, d = p(c.valueDecimals, ""), e = c.valuePrefix || "", f = c.valueSuffix || "";
            m(b.pointArrayMap || [ "y" ], function(b) {
                b = "{point." + b;
                (e || f) && (a = a.replace(b + "}", e + b + "}" + f));
                a = a.replace(b + "}", b + ":,." + d + "f}");
            });
            return Ja(a, {
                point: this,
                series: this.series
            });
        },
        firePointEvent: function(a, b, c) {
            var d = this, e = this.series.options;
            (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
            "click" === a && e.allowPointSelect && (c = function(a) {
                d.select(null, a.ctrlKey || a.metaKey || a.shiftKey);
            });
            G(this, a, b, c);
        }
    };
    var R = y.Series = function() {};
    R.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: Ga,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        axisTypes: [ "xAxis", "yAxis" ],
        colorCounter: 0,
        parallelArrays: [ "x", "y" ],
        init: function(a, b) {
            var d, e, c = this, f = a.series, g = function(a, b) {
                return p(a.options.index, a._i) - p(b.options.index, b._i);
            };
            c.chart = a;
            c.options = b = c.setOptions(b);
            c.linkedSeries = [];
            c.bindAxes();
            q(c, {
                name: b.name,
                state: "",
                pointAttr: {},
                visible: b.visible !== !1,
                selected: b.selected === !0
            });
            ea && (b.animation = !1);
            e = b.events;
            for (d in e) K(c, d, e[d]);
            (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) && (a.runTrackerClick = !0);
            c.getColor();
            c.getSymbol();
            m(c.parallelArrays, function(a) {
                c[a + "Data"] = [];
            });
            c.setData(b.data, !1);
            c.isCartesian && (a.hasCartesianSeries = !0);
            f.push(c);
            c._i = f.length - 1;
            qb(f, g);
            this.yAxis && qb(this.yAxis.series, g);
            m(f, function(a, b) {
                a.index = b;
                a.name = a.name || "Series " + (b + 1);
            });
        },
        bindAxes: function() {
            var d, a = this, b = a.options, c = a.chart;
            m(a.axisTypes || [], function(e) {
                m(c[e], function(c) {
                    d = c.options;
                    (b[e] === d.index || b[e] !== v && b[e] === d.id || b[e] === v && 0 === d.index) && (c.series.push(a), 
                    a[e] = c, c.isDirty = !0);
                });
                !a[e] && a.optionalAxis !== e && ka(18, !0);
            });
        },
        updateParallelArrays: function(a, b) {
            var c = a.series, d = arguments;
            m(c.parallelArrays, "number" == typeof b ? function(d) {
                var f = "y" === d && c.toYData ? c.toYData(a) : a[d];
                c[d + "Data"][b] = f;
            } : function(a) {
                Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2));
            });
        },
        autoIncrement: function() {
            var c, a = this.options, b = this.xIncrement, d = a.pointIntervalUnit, b = p(b, a.pointStart, 0);
            this.pointInterval = c = p(this.pointInterval, a.pointInterval, 1);
            ("month" === d || "year" === d) && (a = new Aa(b), a = "month" === d ? +a[vb](a[Ya]() + c) : +a[wb](a[Za]() + c), 
            c = a - b);
            this.xIncrement = b + c;
            return b;
        },
        getSegments: function() {
            var c, a = -1, b = [], d = this.points, e = d.length;
            if (e) if (this.options.connectNulls) {
                for (c = e; c--; ) null === d[c].y && d.splice(c, 1);
                d.length && (b = [ d ]);
            } else m(d, function(c, g) {
                null === c.y ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1));
            });
            this.segments = b;
        },
        setOptions: function(a) {
            var b = this.chart, c = b.options.plotOptions, b = b.userOptions || {}, d = b.plotOptions || {}, e = c[this.type];
            this.userOptions = a;
            c = z(e, c.series, a);
            this.tooltipOptions = z(S.tooltip, S.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);
            null === e.marker && delete c.marker;
            this.zoneAxis = c.zoneAxis;
            a = this.zones = (c.zones || []).slice();
            !c.negativeColor && !c.negativeFillColor || c.zones || a.push({
                value: c[this.zoneAxis + "Threshold"] || c.threshold || 0,
                color: c.negativeColor,
                fillColor: c.negativeFillColor
            });
            a.length && r(a[a.length - 1].value) && a.push({
                color: this.color,
                fillColor: this.fillColor
            });
            return c;
        },
        getCyclic: function(a, b, c) {
            var d = this.userOptions, e = "_" + a + "Index", f = a + "Counter";
            b || (r(d[e]) ? b = d[e] : (d[e] = b = this.chart[f] % c.length, this.chart[f] += 1), 
            b = c[b]);
            this[a] = b;
        },
        getColor: function() {
            this.options.colorByPoint || this.getCyclic("color", this.options.color || aa[this.type].color, this.chart.options.colors);
        },
        getSymbol: function() {
            var a = this.options.marker;
            this.getCyclic("symbol", a.symbol, this.chart.options.symbols);
            /^url/.test(this.symbol) && (a.radius = 0);
        },
        drawLegendSymbol: Na.drawLineMarker,
        setData: function(a, b, c, d) {
            var h, e = this, f = e.points, g = f && f.length || 0, i = e.options, j = e.chart, k = null, l = e.xAxis, n = l && !!l.categories, o = i.turboThreshold, s = this.xData, x = this.yData, r = (h = e.pointArrayMap) && h.length, a = a || [];
            h = a.length;
            b = p(b, !0);
            if (d !== !1 && h && g === h && !e.cropped && !e.hasGroupedData && e.visible) m(a, function(a, b) {
                f[b].update(a, !1, null, !1);
            }); else {
                e.xIncrement = null;
                e.pointRange = n ? 1 : i.pointRange;
                e.colorCounter = 0;
                m(this.parallelArrays, function(a) {
                    e[a + "Data"].length = 0;
                });
                if (o && h > o) {
                    for (c = 0; null === k && h > c; ) k = a[c], c++;
                    if (qa(k)) {
                        n = p(i.pointStart, 0);
                        i = p(i.pointInterval, 1);
                        for (c = 0; h > c; c++) s[c] = n, x[c] = a[c], n += i;
                        e.xIncrement = n;
                    } else if (Ha(k)) if (r) for (c = 0; h > c; c++) i = a[c], s[c] = i[0], x[c] = i.slice(1, r + 1); else for (c = 0; h > c; c++) i = a[c], 
                    s[c] = i[0], x[c] = i[1]; else ka(12);
                } else for (c = 0; h > c; c++) a[c] !== v && (i = {
                    series: e
                }, e.pointClass.prototype.applyOptions.apply(i, [ a[c] ]), e.updateParallelArrays(i, c), 
                n && i.name) && (l.names[i.x] = i.name);
                Da(x[0]) && ka(14, !0);
                e.data = [];
                e.options.data = a;
                for (c = g; c--; ) f[c] && f[c].destroy && f[c].destroy();
                l && (l.minRange = l.userMinRange);
                e.isDirty = e.isDirtyData = j.isDirtyBox = !0;
                c = !1;
            }
            b && j.redraw(c);
        },
        processData: function(a) {
            var e, b = this.xData, c = this.yData, d = b.length;
            e = 0;
            var f, g, i, h = this.xAxis, j = this.options;
            i = j.cropThreshold;
            var l, n, k = this.isCartesian;
            if (k && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) return !1;
            h && (a = h.getExtremes(), l = a.min, n = a.max);
            k && this.sorted && (!i || d > i || this.forceCrop) && (b[d - 1] < l || b[0] > n ? (b = [], 
            c = []) : (b[0] < l || b[d - 1] > n) && (e = this.cropData(this.xData, this.yData, l, n), 
            b = e.xData, c = e.yData, e = e.start, f = !0));
            for (i = b.length - 1; i >= 0; i--) d = b[i] - b[i - 1], d > 0 && (g === v || g > d) ? g = d : 0 > d && this.requireSorting && ka(15);
            this.cropped = f;
            this.cropStart = e;
            this.processedXData = b;
            this.processedYData = c;
            null === j.pointRange && (this.pointRange = g || 1);
            this.closestPointRange = g;
        },
        cropData: function(a, b, c, d) {
            var i, e = a.length, f = 0, g = e, h = p(this.cropShoulder, 1);
            for (i = 0; e > i; i++) if (a[i] >= c) {
                f = t(0, i - h);
                break;
            }
            for (;e > i; i++) if (a[i] > d) {
                g = i + h;
                break;
            }
            return {
                xData: a.slice(f, g),
                yData: b.slice(f, g),
                start: f,
                end: g
            };
        },
        generatePoints: function() {
            var c, i, k, n, a = this.options.data, b = this.data, d = this.processedXData, e = this.processedYData, f = this.pointClass, g = d.length, h = this.cropStart || 0, j = this.hasGroupedData, l = [];
            b || j || (b = [], b.length = a.length, b = this.data = b);
            for (n = 0; g > n; n++) i = h + n, j ? l[n] = new f().init(this, [ d[n] ].concat(ra(e[n]))) : (b[i] ? k = b[i] : a[i] !== v && (b[i] = k = new f().init(this, a[i], d[n])), 
            l[n] = k), l[n].index = i;
            if (b && (g !== (c = b.length) || j)) for (n = 0; c > n; n++) (n === h && !j && (n += g), 
            b[n]) && (b[n].destroyElements(), b[n].plotX = v);
            this.data = b;
            this.points = l;
        },
        getExtremes: function(a) {
            var d, b = this.yAxis, c = this.processedXData, e = [], f = 0;
            d = this.xAxis.getExtremes();
            var i, j, k, l, g = d.min, h = d.max, a = a || this.stackedYData || this.processedYData;
            d = a.length;
            for (l = 0; d > l; l++) if (j = c[l], k = a[l], i = null !== k && k !== v && (!b.isLog || k.length || k > 0), 
            j = this.getExtremesFromAll || this.cropped || (c[l + 1] || j) >= g && (c[l - 1] || j) <= h, 
            i && j) if (i = k.length) for (;i--; ) null !== k[i] && (e[f++] = k[i]); else e[f++] = k;
            this.dataMin = p(void 0, Pa(e));
            this.dataMax = p(void 0, Fa(e));
        },
        translate: function() {
            this.processedXData || this.processData();
            this.generatePoints();
            for (var l, n, o, a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue, i = a.pointPlacement, j = "between" === i || qa(i), k = a.threshold, s = Number.MAX_VALUE, a = 0; g > a; a++) {
                var m = f[a], q = m.x, B = m.y;
                n = m.low;
                var u = b && e.stacks[(this.negStacks && k > B ? "-" : "") + this.stackKey];
                e.isLog && null !== B && 0 >= B && (m.y = B = null, ka(10));
                m.plotX = l = c.translate(q, 0, 0, 0, 1, i, "flags" === this.type);
                b && this.visible && u && u[q] && (u = u[q], B = u.points[this.index + "," + a], 
                n = B[0], B = B[1], 0 === n && (n = p(k, e.min)), e.isLog && 0 >= n && (n = null), 
                m.total = m.stackTotal = u.total, m.percentage = u.total && m.y / u.total * 100, 
                m.stackY = B, u.setOffset(this.pointXOffset || 0, this.barW || 0));
                m.yBottom = r(n) ? e.translate(n, 0, 1, 0, 1) : null;
                h && (B = this.modifyValue(B, m));
                m.plotY = n = "number" == typeof B && 1/0 !== B ? H(t(-1e5, e.translate(B, 0, 1, 0, 1)), 1e5) : v;
                m.isInside = n !== v && n >= 0 && n <= e.len && l >= 0 && l <= c.len;
                m.clientX = j ? c.translate(q, 0, 0, 0, 1) : l;
                m.negative = m.y < (k || 0);
                m.category = d && d[m.x] !== v ? d[m.x] : m.x;
                a && (s = H(s, P(l - o)));
                o = l;
            }
            this.closestPointRangePx = s;
            this.getSegments();
        },
        setClip: function(a) {
            var b = this.chart, c = b.renderer, d = b.inverted, e = this.clipBox, f = e || b.clipBox, g = this.sharedClipKey || [ "_sharedClip", a && a.duration, a && a.easing, f.height ].join(","), h = b[g], i = b[g + "m"];
            if (!h) {
                a && (f.width = 0, b[g + "m"] = i = c.clipRect(-99, d ? -b.plotLeft : -b.plotTop, 99, d ? b.chartWidth : b.chartHeight));
                b[g] = h = c.clipRect(f);
            }
            a && (h.count += 1);
            this.options.clip !== !1 && (this.group.clip(a || e ? h : b.clipRect), this.markerGroup.clip(i), 
            this.sharedClipKey = g);
            a || (h.count -= 1, h.count <= 0 && g && b[g] && (e || (b[g] = b[g].destroy()), 
            b[g + "m"] && (b[g + "m"] = b[g + "m"].destroy())));
        },
        animate: function(a) {
            var d, b = this.chart, c = this.options.animation;
            c && !ca(c) && (c = aa[this.type].animation);
            a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({
                width: b.plotSizeX
            }, c), b[d + "m"] && b[d + "m"].animate({
                width: b.plotSizeX + 99
            }, c), this.animate = null);
        },
        afterAnimate: function() {
            this.setClip();
            G(this, "afterAnimate");
        },
        drawPoints: function() {
            var a, d, e, f, g, h, i, j, k, o, m, x, b = this.points, c = this.chart, l = this.options.marker, n = this.pointAttr[""], r = this.markerGroup, t = p(l.enabled, this.xAxis.isRadial, this.closestPointRangePx > 2 * l.radius);
            if (l.enabled !== !1 || this._hasPointMarkers) for (f = b.length; f--; ) g = b[f], 
            d = U(g.plotX), e = g.plotY, k = g.graphic, o = g.marker || {}, m = !!g.marker, 
            a = t && o.enabled === v || o.enabled, x = g.isInside, a && e !== v && !isNaN(e) && null !== g.y ? (a = g.pointAttr[g.selected ? "select" : ""] || n, 
            h = a.r, i = p(o.symbol, this.symbol), j = 0 === i.indexOf("url"), k ? k[x ? "show" : "hide"](!0).animate(q({
                x: d - h,
                y: e - h
            }, k.symbolName ? {
                width: 2 * h,
                height: 2 * h
            } : {})) : x && (h > 0 || j) && (g.graphic = c.renderer.symbol(i, d - h, e - h, 2 * h, 2 * h, m ? o : l).attr(a).add(r))) : k && (g.graphic = k.destroy());
        },
        convertAttribs: function(a, b, c, d) {
            var f, g, e = this.pointAttrToOptions, h = {}, a = a || {}, b = b || {}, c = c || {}, d = d || {};
            for (f in e) g = e[f], h[f] = p(a[g], b[f], c[f], d[f]);
            return h;
        },
        getAttribs: function() {
            var f, a = this, b = a.options, c = aa[a.type].marker ? b.marker : b, d = c.states, e = d.hover, g = a.color, h = a.options.negativeColor;
            f = {
                stroke: g,
                fill: g
            };
            var j, l, i = a.points || [], k = [], n = a.pointAttrToOptions;
            l = a.hasPointSpecificOptions;
            var o = c.lineColor, s = c.fillColor;
            j = b.turboThreshold;
            var B, p = a.zones, t = a.zoneAxis || "y";
            b.marker ? (e.radius = e.radius || c.radius + e.radiusPlus, e.lineWidth = e.lineWidth || c.lineWidth + e.lineWidthPlus) : (e.color = e.color || na(e.color || g).brighten(e.brightness).get(), 
            e.negativeColor = e.negativeColor || na(e.negativeColor || h).brighten(e.brightness).get());
            k[""] = a.convertAttribs(c, f);
            m([ "hover", "select" ], function(b) {
                k[b] = a.convertAttribs(d[b], k[""]);
            });
            a.pointAttr = k;
            g = i.length;
            if (!j || j > g || l) for (;g--; ) {
                j = i[g];
                (c = j.options && j.options.marker || j.options) && c.enabled === !1 && (c.radius = 0);
                if (p.length) {
                    l = 0;
                    for (f = p[l]; j[t] >= f.value; ) f = p[++l];
                    j.color = j.fillColor = f.color;
                }
                l = b.colorByPoint || j.color;
                if (j.options) for (B in n) r(c[n[B]]) && (l = !0);
                if (l) {
                    c = c || {};
                    l = [];
                    d = c.states || {};
                    f = d.hover = d.hover || {};
                    b.marker || (f.color = f.color || !j.options.color && e[j.negative && h ? "negativeColor" : "color"] || na(j.color).brighten(f.brightness || e.brightness).get());
                    f = {
                        color: j.color
                    };
                    s || (f.fillColor = j.color);
                    o || (f.lineColor = j.color);
                    l[""] = a.convertAttribs(q(f, c), k[""]);
                    l.hover = a.convertAttribs(d.hover, k.hover, l[""]);
                    l.select = a.convertAttribs(d.select, k.select, l[""]);
                } else l = k;
                j.pointAttr = l;
            }
        },
        destroy: function() {
            var d, e, g, h, i, a = this, b = a.chart, c = /AppleWebKit\/533/.test(Ba), f = a.data || [];
            G(a, "destroy");
            Y(a);
            m(a.axisTypes || [], function(b) {
                (i = a[b]) && (ia(i.series, a), i.isDirty = i.forceRedraw = !0);
            });
            a.legendItem && a.chart.legend.destroyItem(a);
            for (e = f.length; e--; ) (g = f[e]) && g.destroy && g.destroy();
            a.points = null;
            clearTimeout(a.animationTimeout);
            m("area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip".split(","), function(b) {
                a[b] && (d = c && "group" === b ? "hide" : "destroy", a[b][d]());
            });
            b.hoverSeries === a && (b.hoverSeries = null);
            ia(b.series, a);
            for (h in a) delete a[h];
        },
        getSegmentPath: function(a) {
            var b = this, c = [], d = b.options.step;
            m(a, function(e, f) {
                var i, g = e.plotX, h = e.plotY;
                b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? "L" : "M"), 
                d && f && (i = a[f - 1], "right" === d ? c.push(i.plotX, h) : "center" === d ? c.push((i.plotX + g) / 2, i.plotY, (i.plotX + g) / 2, h) : c.push(g, i.plotY)), 
                c.push(e.plotX, e.plotY));
            });
            return c;
        },
        getGraphPath: function() {
            var c, a = this, b = [], d = [];
            m(a.segments, function(e) {
                c = a.getSegmentPath(e);
                e.length > 1 ? b = b.concat(c) : d.push(e[0]);
            });
            a.singlePoints = d;
            return a.graphPath = b;
        },
        drawGraph: function() {
            var a = this, b = this.options, c = [ [ "graph", b.lineColor || this.color, b.dashStyle ] ], d = b.lineWidth, e = "square" !== b.linecap, f = this.getGraphPath(), g = this.fillGraph && this.color || M;
            m(this.zones, function(d, e) {
                c.push([ "colorGraph" + e, d.color || a.color, d.dashStyle || b.dashStyle ]);
            });
            m(c, function(c, i) {
                var j = c[0], k = a[j];
                k ? (db(k), k.animate({
                    d: f
                })) : (d || g) && f.length && (k = {
                    stroke: c[1],
                    "stroke-width": d,
                    fill: g,
                    zIndex: 1
                }, c[2] ? k.dashstyle = c[2] : e && (k["stroke-linecap"] = k["stroke-linejoin"] = "round"), 
                a[j] = a.chart.renderer.path(f).attr(k).add(a.group).shadow(2 > i && b.shadow));
            });
        },
        applyZones: function() {
            var e, f, h, a = this, b = this.chart, c = b.renderer, d = this.zones, g = this.clips || [], i = this.graph, j = this.area, k = t(b.chartWidth, b.chartHeight), l = this[(this.zoneAxis || "y") + "Axis"], n = l.reversed, o = l.horiz, s = !1;
            d.length && (i || j) && (i.hide(), j && j.hide(), m(d, function(d, i) {
                e = p(f, n ? o ? b.plotWidth : 0 : o ? 0 : l.toPixels(l.min));
                f = w(l.toPixels(p(d.value, l.max), !0));
                s && (e = f = l.toPixels(l.max));
                l.isXAxis ? (h = {
                    x: n ? f : e,
                    y: 0,
                    width: Math.abs(e - f),
                    height: k
                }, o) || (h.x = b.plotHeight - h.x) : (h = {
                    x: 0,
                    y: n ? e : f,
                    width: k,
                    height: Math.abs(e - f)
                }, o) && (h.y = b.plotWidth - h.y);
                b.inverted && c.isVML && (h = l.isXAxis ? {
                    x: 0,
                    y: n ? e : f,
                    height: h.width,
                    width: b.chartWidth
                } : {
                    x: h.y - b.plotLeft - b.spacingBox.x,
                    y: 0,
                    width: h.height,
                    height: b.chartHeight
                });
                g[i] ? g[i].animate(h) : (g[i] = c.clipRect(h), a["colorGraph" + i].clip(g[i]), 
                j && a["colorArea" + i].clip(g[i]));
                s = d.value > l.max;
            }), this.clips = g);
        },
        invertGroups: function() {
            function a() {
                var a = {
                    width: b.yAxis.len,
                    height: b.xAxis.len
                };
                m([ "group", "markerGroup" ], function(c) {
                    b[c] && b[c].attr(a).invert();
                });
            }
            var b = this, c = b.chart;
            b.xAxis && (K(c, "resize", a), K(b, "destroy", function() {
                Y(c, "resize", a);
            }), a(), b.invertGroups = a);
        },
        plotGroup: function(a, b, c, d, e) {
            var f = this[a], g = !f;
            g && (this[a] = f = this.chart.renderer.g(b).attr({
                visibility: c,
                zIndex: d || .1
            }).add(e));
            f[g ? "attr" : "animate"](this.getPlotBox());
            return f;
        },
        getPlotBox: function() {
            var a = this.chart, b = this.xAxis, c = this.yAxis;
            a.inverted && (b = c, c = this.xAxis);
            return {
                translateX: b ? b.left : a.plotLeft,
                translateY: c ? c.top : a.plotTop,
                scaleX: 1,
                scaleY: 1
            };
        },
        render: function() {
            var c, a = this, b = a.chart, d = a.options, e = (c = d.animation) && !!a.animate && b.renderer.isSVG && p(c.duration, 500) || 0, f = a.visible ? "visible" : "hidden", g = d.zIndex, h = a.hasRendered, i = b.seriesGroup;
            c = a.plotGroup("group", "series", f, g, i);
            a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, i);
            e && a.animate(!0);
            a.getAttribs();
            c.inverted = a.isCartesian ? b.inverted : !1;
            a.drawGraph && (a.drawGraph(), a.applyZones());
            m(a.points, function(a) {
                a.redraw && a.redraw();
            });
            a.drawDataLabels && a.drawDataLabels();
            a.visible && a.drawPoints();
            a.drawTracker && a.options.enableMouseTracking !== !1 && a.drawTracker();
            b.inverted && a.invertGroups();
            d.clip !== !1 && !a.sharedClipKey && !h && c.clip(b.clipRect);
            e && a.animate();
            h || (e ? a.animationTimeout = setTimeout(function() {
                a.afterAnimate();
            }, e) : a.afterAnimate());
            a.isDirty = a.isDirtyData = !1;
            a.hasRendered = !0;
        },
        redraw: function() {
            var a = this.chart, b = this.isDirtyData, c = this.isDirty, d = this.group, e = this.xAxis, f = this.yAxis;
            d && (a.inverted && d.attr({
                width: a.plotWidth,
                height: a.plotHeight
            }), d.animate({
                translateX: p(e && e.left, a.plotLeft),
                translateY: p(f && f.top, a.plotTop)
            }));
            this.translate();
            this.render();
            b && G(this, "updatedData");
            (c || b) && delete this.kdTree;
        },
        kdDimensions: 1,
        kdTree: null,
        kdAxisArray: [ "plotX", "plotY" ],
        kdComparer: "distX",
        searchPoint: function(a) {
            var b = this.xAxis, c = this.yAxis, d = this.chart.inverted;
            a.plotX = d ? b.len - a.chartY + b.pos : a.chartX - b.pos;
            a.plotY = d ? c.len - a.chartX + c.pos : a.chartY - c.pos;
            return this.searchKDTree(a);
        },
        buildKDTree: function() {
            function a(b, d, g) {
                var h, i;
                if (i = b && b.length) return h = c.kdAxisArray[d % g], b.sort(function(a, b) {
                    return a[h] - b[h];
                }), i = Math.floor(i / 2), {
                    point: b[i],
                    left: a(b.slice(0, i), d + 1, g),
                    right: a(b.slice(i + 1), d + 1, g)
                };
            }
            function b() {
                var b = kb(c.points, function(a) {
                    return null !== a.y;
                });
                c.kdTree = a(b, d, d);
            }
            var c = this, d = c.kdDimensions;
            delete c.kdTree;
            c.options.kdSync ? b() : setTimeout(b);
        },
        searchKDTree: function(a) {
            function b(a, h, i, j) {
                var n, k = h.point, l = c.kdAxisArray[i % j], o = k;
                n = r(a[e]) && r(k[e]) ? Math.pow(a[e] - k[e], 2) : null;
                var m = r(a[f]) && r(k[f]) ? Math.pow(a[f] - k[f], 2) : null, p = (n || 0) + (m || 0);
                n = {
                    distX: r(n) ? Math.sqrt(n) : Number.MAX_VALUE,
                    distY: r(m) ? Math.sqrt(m) : Number.MAX_VALUE,
                    distR: r(p) ? Math.sqrt(p) : Number.MAX_VALUE
                };
                k.dist = n;
                l = a[l] - k[l];
                n = 0 > l ? "left" : "right";
                h[n] && (n = b(a, h[n], i + 1, j), o = n.dist[d] < o.dist[d] ? n : k, k = 0 > l ? "right" : "left", 
                h[k] && Math.sqrt(l * l) < o.dist[d] && (a = b(a, h[k], i + 1, j), o = a.dist[d] < o.dist[d] ? a : o));
                return o;
            }
            var c = this, d = this.kdComparer, e = this.kdAxisArray[0], f = this.kdAxisArray[1];
            this.kdTree || this.buildKDTree();
            if (this.kdTree) return b(a, this.kdTree, this.kdDimensions, this.kdDimensions);
        }
    };
    Fb.prototype = {
        destroy: function() {
            Qa(this, this.axis);
        },
        render: function(a) {
            var b = this.options, c = b.format, c = c ? Ja(c, this) : b.formatter.call(this);
            this.label ? this.label.attr({
                text: c,
                visibility: "hidden"
            }) : this.label = this.axis.chart.renderer.text(c, null, null, b.useHTML).css(b.style).attr({
                align: this.textAlign,
                rotation: b.rotation,
                visibility: "hidden"
            }).add(a);
        },
        setOffset: function(a, b) {
            var c = this.axis, d = c.chart, e = d.inverted, f = this.isNegative, g = c.translate(c.usePercentage ? 100 : this.total, 0, 0, 0, 1), c = c.translate(0), c = P(g - c), h = d.xAxis[0].translate(this.x) + a, i = d.plotHeight, f = {
                x: e ? f ? g : g - c : h,
                y: e ? i - h - b : f ? i - g - c : i - g,
                width: e ? c : b,
                height: e ? b : c
            };
            (e = this.label) && (e.align(this.alignOptions, null, f), f = e.alignAttr, e[this.options.crop === !1 || d.isInsidePlot(f.x, f.y) ? "show" : "hide"](!0));
        }
    };
    va.prototype.buildStacks = function() {
        var a = this.series, b = p(this.options.reversedStacks, !0), c = a.length;
        if (!this.isXAxis) {
            for (this.usePercentage = !1; c--; ) a[b ? c : a.length - c - 1].setStackedPoints();
            if (this.usePercentage) for (c = 0; c < a.length; c++) a[c].setPercentStacks();
        }
    };
    va.prototype.renderStackTotals = function() {
        var d, e, a = this.chart, b = a.renderer, c = this.stacks, f = this.stackTotalGroup;
        f || (this.stackTotalGroup = f = b.g("stack-labels").attr({
            visibility: "visible",
            zIndex: 6
        }).add());
        f.translate(a.plotLeft, a.plotTop);
        for (d in c) for (e in a = c[d], a) a[e].render(f);
    };
    R.prototype.setStackedPoints = function() {
        if (this.options.stacking && !(this.visible !== !0 && this.chart.options.chart.ignoreHiddenSeries !== !1)) {
            var o, m, p, r, q, u, a = this.processedXData, b = this.processedYData, c = [], d = b.length, e = this.options, f = e.threshold, g = e.stack, e = e.stacking, h = this.stackKey, i = "-" + h, j = this.negStacks, k = this.yAxis, l = k.stacks, n = k.oldStacks;
            for (r = 0; d > r; r++) {
                q = a[r];
                u = b[r];
                p = this.index + "," + r;
                m = (o = j && f > u) ? i : h;
                l[m] || (l[m] = {});
                l[m][q] || (n[m] && n[m][q] ? (l[m][q] = n[m][q], l[m][q].total = null) : l[m][q] = new Fb(k, k.options.stackLabels, o, q, g));
                m = l[m][q];
                m.points[p] = [ m.cum || 0 ];
                "percent" === e ? (o = o ? h : i, j && l[o] && l[o][q] ? (o = l[o][q], m.total = o.total = t(o.total, m.total) + P(u) || 0) : m.total = da(m.total + (P(u) || 0))) : m.total = da(m.total + (u || 0));
                m.cum = (m.cum || 0) + (u || 0);
                m.points[p].push(m.cum);
                c[r] = m.cum;
            }
            "percent" === e && (k.usePercentage = !0);
            this.stackedYData = c;
            k.oldStacks = {};
        }
    };
    R.prototype.setPercentStacks = function() {
        var a = this, b = a.stackKey, c = a.yAxis.stacks, d = a.processedXData;
        m([ b, "-" + b ], function(b) {
            var e;
            for (var g, h, f = d.length; f--; ) (g = d[f], e = (h = c[b] && c[b][g]) && h.points[a.index + "," + f], 
            g = e) && (h = h.total ? 100 / h.total : 0, g[0] = da(g[0] * h), g[1] = da(g[1] * h), 
            a.stackedYData[f] = g[1]);
        });
    };
    q(A.prototype, {
        addSeries: function(a, b, c) {
            var d, e = this;
            a && (b = p(b, !0), G(e, "addSeries", {
                options: a
            }, function() {
                d = e.initSeries(a);
                e.isDirtyLegend = !0;
                e.linkSeries();
                b && e.redraw(c);
            }));
            return d;
        },
        addAxis: function(a, b, c, d) {
            var e = b ? "xAxis" : "yAxis", f = this.options;
            new va(this, z(a, {
                index: this[e].length,
                isX: b
            }));
            f[e] = ra(f[e] || {});
            f[e].push(a);
            p(c, !0) && this.redraw(d);
        },
        showLoading: function(a) {
            var b = this, c = b.options, d = b.loadingDiv, e = c.loading, f = function() {
                d && J(d, {
                    left: b.plotLeft + "px",
                    top: b.plotTop + "px",
                    width: b.plotWidth + "px",
                    height: b.plotHeight + "px"
                });
            };
            d || (b.loadingDiv = d = Z(Ka, {
                className: "highcharts-loading"
            }, q(e.style, {
                zIndex: 10,
                display: M
            }), b.container), b.loadingSpan = Z("span", null, e.labelStyle, d), K(b, "redraw", f));
            b.loadingSpan.innerHTML = a || c.lang.loading;
            b.loadingShown || (J(d, {
                opacity: 0,
                display: ""
            }), lb(d, {
                opacity: e.style.opacity
            }, {
                duration: e.showDuration || 0
            }), b.loadingShown = !0);
            f();
        },
        hideLoading: function() {
            var a = this.options, b = this.loadingDiv;
            b && lb(b, {
                opacity: 0
            }, {
                duration: a.loading.hideDuration || 100,
                complete: function() {
                    J(b, {
                        display: M
                    });
                }
            });
            this.loadingShown = !1;
        }
    });
    q(Ga.prototype, {
        update: function(a, b, c, d) {
            function e() {
                f.applyOptions(a);
                ca(a) && !Ha(a) && (f.redraw = function() {
                    h && (a && a.marker && a.marker.symbol ? f.graphic = h.destroy() : h.attr(f.pointAttr[f.state || ""]));
                    a && a.dataLabels && f.dataLabel && (f.dataLabel = f.dataLabel.destroy());
                    f.redraw = null;
                });
                i = f.index;
                g.updateParallelArrays(f, i);
                l && f.name && (l[f.x] = f.name);
                k.data[i] = f.options;
                g.isDirty = g.isDirtyData = !0;
                !g.fixedBox && g.hasCartesianSeries && (j.isDirtyBox = !0);
                j.legend.display && "point" === k.legendType && (g.updateTotals(), j.legend.clearItems());
                b && j.redraw(c);
            }
            var i, f = this, g = f.series, h = f.graphic, j = g.chart, k = g.options, l = g.xAxis && g.xAxis.names, b = p(b, !0);
            d === !1 ? e() : f.firePointEvent("update", {
                options: a
            }, e);
        },
        remove: function(a, b) {
            this.series.removePoint(Ma(this, this.series.data), a, b);
        }
    });
    q(R.prototype, {
        addPoint: function(a, b, c, d) {
            var n, e = this.options, f = this.data, g = this.graph, h = this.area, i = this.chart, j = this.xAxis && this.xAxis.names, k = g && g.shift || 0, l = e.data, o = this.xData;
            Sa(d, i);
            c && m([ g, h, this.graphNeg, this.areaNeg ], function(a) {
                a && (a.shift = k + 1);
            });
            h && (h.isArea = !0);
            b = p(b, !0);
            d = {
                series: this
            };
            this.pointClass.prototype.applyOptions.apply(d, [ a ]);
            g = d.x;
            h = o.length;
            if (this.requireSorting && g < o[h - 1]) for (n = !0; h && o[h - 1] > g; ) h--;
            this.updateParallelArrays(d, "splice", h, 0, 0);
            this.updateParallelArrays(d, h);
            j && d.name && (j[g] = d.name);
            l.splice(h, 0, a);
            n && (this.data.splice(h, 0, null), this.processData());
            "point" === e.legendType && this.generatePoints();
            c && (f[0] && f[0].remove ? f[0].remove(!1) : (f.shift(), this.updateParallelArrays(d, "shift"), 
            l.shift()));
            this.isDirtyData = this.isDirty = !0;
            b && (this.getAttribs(), i.redraw());
        },
        removePoint: function(a, b, c) {
            var d = this, e = d.data, f = e[a], g = d.points, h = d.chart, i = function() {
                e.length === g.length && g.splice(a, 1);
                e.splice(a, 1);
                d.options.data.splice(a, 1);
                d.updateParallelArrays(f || {
                    series: d
                }, "splice", a, 1);
                f && f.destroy();
                d.isDirty = !0;
                d.isDirtyData = !0;
                b && h.redraw();
            };
            Sa(c, h);
            b = p(b, !0);
            f ? f.firePointEvent("remove", null, i) : i();
        },
        remove: function(a, b) {
            var c = this, d = c.chart, a = p(a, !0);
            c.isRemoving || (c.isRemoving = !0, G(c, "remove", null, function() {
                c.destroy();
                d.isDirtyLegend = d.isDirtyBox = !0;
                d.linkSeries();
                a && d.redraw(b);
            }));
            c.isRemoving = !1;
        },
        update: function(a, b) {
            var i, c = this, d = this.chart, e = this.userOptions, f = this.type, g = N[f].prototype, h = [ "group", "markerGroup", "dataLabelsGroup" ];
            (a.type && a.type !== f || void 0 !== a.zIndex) && (h.length = 0);
            m(h, function(a) {
                h[a] = c[a];
                delete c[a];
            });
            a = z(e, {
                animation: !1,
                index: this.index,
                pointStart: this.xData[0]
            }, {
                data: this.options.data
            }, a);
            this.remove(!1);
            for (i in g) this[i] = v;
            q(this, N[a.type || f].prototype);
            m(h, function(a) {
                c[a] = h[a];
            });
            this.init(d, a);
            d.linkSeries();
            p(b, !0) && d.redraw(!1);
        }
    });
    q(va.prototype, {
        update: function(a, b) {
            var c = this.chart, a = c.options[this.coll][this.options.index] = z(this.userOptions, a);
            this.destroy(!0);
            this._addedPlotLB = v;
            this.init(c, q(a, {
                events: v
            }));
            c.isDirtyBox = !0;
            p(b, !0) && c.redraw();
        },
        remove: function(a) {
            for (var b = this.chart, c = this.coll, d = this.series, e = d.length; e--; ) d[e] && d[e].remove(!1);
            ia(b.axes, this);
            ia(b[c], this);
            b.options[c].splice(this.options.index, 1);
            m(b[c], function(a, b) {
                a.options.index = b;
            });
            this.destroy();
            b.isDirtyBox = !0;
            p(a, !0) && b.redraw();
        },
        setTitle: function(a, b) {
            this.update({
                title: a
            }, b);
        },
        setCategories: function(a, b) {
            this.update({
                categories: a
            }, b);
        }
    });
    var xa = ja(R);
    N.line = xa;
    aa.area = z(Q, {
        threshold: 0
    });
    var pa = ja(R, {
        type: "area",
        getSegments: function() {
            var i, j, n, o, a = this, b = [], c = [], d = [], e = this.xAxis, f = this.yAxis, g = f.stacks[this.stackKey], h = {}, k = this.points, l = this.options.connectNulls;
            if (this.options.stacking && !this.cropped) {
                for (n = 0; n < k.length; n++) h[k[n].x] = k[n];
                for (o in g) null !== g[o].total && d.push(+o);
                d.sort(function(a, b) {
                    return a - b;
                });
                m(d, function(b) {
                    var k, d = 0;
                    if (!l || h[b] && null !== h[b].y) if (h[b]) c.push(h[b]); else {
                        for (n = a.index; n <= f.series.length; n++) if (k = g[b].points[n + "," + b]) {
                            d = k[1];
                            break;
                        }
                        i = e.translate(b);
                        j = f.toPixels(d, !0);
                        c.push({
                            y: null,
                            plotX: i,
                            clientX: i,
                            plotY: j,
                            yBottom: j,
                            onMouseOver: ma
                        });
                    }
                });
                c.length && b.push(c);
            } else R.prototype.getSegments.call(this), b = this.segments;
            this.segments = b;
        },
        getSegmentPath: function(a) {
            var d, b = R.prototype.getSegmentPath.call(this, a), c = [].concat(b), e = this.options;
            d = b.length;
            var g, f = this.yAxis.getThreshold(e.threshold);
            3 === d && c.push("L", b[1], b[2]);
            if (e.stacking && !this.closedStacks) for (d = a.length - 1; d >= 0; d--) g = p(a[d].yBottom, f), 
            d < a.length - 1 && e.step && c.push(a[d + 1].plotX, g), c.push(a[d].plotX, g); else this.closeSegment(c, a, f);
            this.areaPath = this.areaPath.concat(c);
            return b;
        },
        closeSegment: function(a, b, c) {
            a.push("L", b[b.length - 1].plotX, c, "L", b[0].plotX, c);
        },
        drawGraph: function() {
            this.areaPath = [];
            R.prototype.drawGraph.apply(this);
            var a = this, b = this.areaPath, c = this.options, d = [ [ "area", this.color, c.fillColor ] ];
            m(this.zones, function(b, f) {
                d.push([ "colorArea" + f, b.color || a.color, b.fillColor || c.fillColor ]);
            });
            m(d, function(d) {
                var f = d[0], g = a[f];
                g ? g.animate({
                    d: b
                }) : a[f] = a.chart.renderer.path(b).attr({
                    fill: p(d[2], na(d[1]).setOpacity(p(c.fillOpacity, .75)).get()),
                    zIndex: 0
                }).add(a.group);
            });
        },
        drawLegendSymbol: Na.drawRectangle
    });
    N.area = pa;
    aa.spline = z(Q);
    xa = ja(R, {
        type: "spline",
        getPointSpline: function(a, b, c) {
            var h, i, j, k, d = b.plotX, e = b.plotY, f = a[c - 1], g = a[c + 1];
            if (f && g) {
                a = f.plotY;
                j = g.plotX;
                var l, g = g.plotY;
                h = (1.5 * d + f.plotX) / 2.5;
                i = (1.5 * e + a) / 2.5;
                j = (1.5 * d + j) / 2.5;
                k = (1.5 * e + g) / 2.5;
                l = (k - i) * (j - d) / (j - h) + e - k;
                i += l;
                k += l;
                i > a && i > e ? (i = t(a, e), k = 2 * e - i) : a > i && e > i && (i = H(a, e), 
                k = 2 * e - i);
                k > g && k > e ? (k = t(g, e), i = 2 * e - k) : g > k && e > k && (k = H(g, e), 
                i = 2 * e - k);
                b.rightContX = j;
                b.rightContY = k;
            }
            c ? (b = [ "C", f.rightContX || f.plotX, f.rightContY || f.plotY, h || d, i || e, d, e ], 
            f.rightContX = f.rightContY = null) : b = [ "M", d, e ];
            return b;
        }
    });
    N.spline = xa;
    aa.areaspline = z(aa.area);
    pa = pa.prototype;
    xa = ja(xa, {
        type: "areaspline",
        closedStacks: !0,
        getSegmentPath: pa.getSegmentPath,
        closeSegment: pa.closeSegment,
        drawGraph: pa.drawGraph,
        drawLegendSymbol: Na.drawRectangle
    });
    N.areaspline = xa;
    aa.column = z(Q, {
        borderColor: "#FFFFFF",
        borderRadius: 0,
        groupPadding: .2,
        marker: null,
        pointPadding: .1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {
                brightness: .1,
                shadow: !1,
                halo: !1
            },
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: !1
            }
        },
        dataLabels: {
            align: null,
            verticalAlign: null,
            y: null
        },
        stickyTracking: !1,
        tooltip: {
            distance: 6
        },
        threshold: 0
    });
    xa = ja(R, {
        type: "column",
        pointAttrToOptions: {
            stroke: "borderColor",
            fill: "color",
            r: "borderRadius"
        },
        cropShoulder: 0,
        directTouch: !0,
        trackerGroups: [ "group", "dataLabelsGroup" ],
        negStacks: !0,
        init: function() {
            R.prototype.init.apply(this, arguments);
            var a = this, b = a.chart;
            b.hasRendered && m(b.series, function(b) {
                b.type === a.type && (b.isDirty = !0);
            });
        },
        getColumnMetrics: function() {
            var f, h, a = this, b = a.options, c = a.xAxis, d = a.yAxis, e = c.reversed, g = {}, i = 0;
            b.grouping === !1 ? i = 1 : m(a.chart.series, function(b) {
                var c = b.options, e = b.yAxis;
                b.type === a.type && b.visible && d.len === e.len && d.pos === e.pos && (c.stacking ? (f = b.stackKey, 
                g[f] === v && (g[f] = i++), h = g[f]) : c.grouping !== !1 && (h = i++), b.columnIndex = h);
            });
            var c = H(P(c.transA) * (c.ordinalSlope || b.pointRange || c.closestPointRange || c.tickInterval || 1), c.len), j = c * b.groupPadding, k = (c - 2 * j) / i, l = b.pointWidth, b = r(l) ? (k - l) / 2 : k * b.pointPadding, l = p(l, k - 2 * b);
            return a.columnMetrics = {
                width: l,
                offset: b + (j + ((e ? i - (a.columnIndex || 0) : a.columnIndex) || 0) * k - c / 2) * (e ? -1 : 1)
            };
        },
        translate: function() {
            var a = this, b = a.chart, c = a.options, d = a.borderWidth = p(c.borderWidth, a.closestPointRange * a.xAxis.transA < 2 ? 0 : 1), e = a.yAxis, f = a.translatedThreshold = e.getThreshold(c.threshold), g = p(c.minPointLength, 5), h = a.getColumnMetrics(), i = h.width, j = a.barW = t(i, 1 + 2 * d), k = a.pointXOffset = h.offset, l = -(d % 2 ? .5 : 0), n = d % 2 ? .5 : 1;
            b.renderer.isVML && b.inverted && (n += 1);
            c.pointPadding && (j = sa(j));
            R.prototype.translate.apply(a);
            m(a.points, function(c) {
                var v, d = p(c.yBottom, f), h = H(t(-999 - d, c.plotY), e.len + 999 + d), m = c.plotX + k, r = j, q = H(h, d);
                v = t(h, d) - q;
                P(v) < g && g && (v = g, q = w(P(q - f) > g ? d - g : f - (e.translate(c.y, 0, 1, 0, 1) <= f ? g : 0)));
                c.barX = m;
                c.pointWidth = i;
                c.tooltipPos = b.inverted ? [ e.len + e.pos - b.plotLeft - h, a.xAxis.len - m - r / 2 ] : [ m + r / 2, h + e.pos - b.plotTop ];
                r = w(m + r) + l;
                m = w(m) + l;
                r -= m;
                d = P(q) < .5;
                v = H(w(q + v) + n, 9e4);
                q = w(q) + n;
                v -= q;
                d && (q -= 1, v += 1);
                c.shapeType = "rect";
                c.shapeArgs = {
                    x: m,
                    y: q,
                    width: r,
                    height: v
                };
            });
        },
        getSymbol: ma,
        drawLegendSymbol: Na.drawRectangle,
        drawGraph: ma,
        drawPoints: function() {
            var f, g, a = this, b = this.chart, c = a.options, d = b.renderer, e = c.animationLimit || 250;
            m(a.points, function(h) {
                var i = h.plotY, j = h.graphic;
                i === v || isNaN(i) || null === h.y ? j && (h.graphic = j.destroy()) : (f = h.shapeArgs, 
                i = r(a.borderWidth) ? {
                    "stroke-width": a.borderWidth
                } : {}, g = h.pointAttr[h.selected ? "select" : ""] || a.pointAttr[""], j ? (db(j), 
                j.attr(i)[b.pointCount < e ? "animate" : "attr"](z(f))) : h.graphic = d[h.shapeType](f).attr(i).attr(g).add(a.group).shadow(c.shadow, null, c.stacking && !c.borderRadius));
            });
        },
        animate: function(a) {
            var b = this.yAxis, c = this.options, d = this.chart.inverted, e = {};
            ba && (a ? (e.scaleY = .001, a = H(b.pos + b.len, t(b.pos, b.toPixels(c.threshold))), 
            d ? e.translateX = a - b.len : e.translateY = a, this.group.attr(e)) : (e.scaleY = 1, 
            e[d ? "translateX" : "translateY"] = b.pos, this.group.animate(e, this.options.animation), 
            this.animate = null));
        },
        remove: function() {
            var a = this, b = a.chart;
            b.hasRendered && m(b.series, function(b) {
                b.type === a.type && (b.isDirty = !0);
            });
            R.prototype.remove.apply(a, arguments);
        }
    });
    N.column = xa;
    aa.bar = z(aa.column);
    pa = ja(xa, {
        type: "bar",
        inverted: !0
    });
    N.bar = pa;
    aa.scatter = z(Q, {
        lineWidth: 0,
        marker: {
            enabled: !0
        },
        tooltip: {
            headerFormat: '<span style="color:{series.color}">●</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        }
    });
    pa = ja(R, {
        type: "scatter",
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: [ "group", "markerGroup", "dataLabelsGroup" ],
        takeOrdinalPosition: !1,
        kdDimensions: 2,
        kdComparer: "distR",
        drawGraph: function() {
            this.options.lineWidth && R.prototype.drawGraph.call(this);
        }
    });
    N.scatter = pa;
    aa.pie = z(Q, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: [ null, null ],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
            distance: 30,
            enabled: !0,
            formatter: function() {
                return this.point.name;
            },
            x: 0
        },
        ignoreHiddenPoint: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        states: {
            hover: {
                brightness: .1,
                shadow: !1
            }
        },
        stickyTracking: !1,
        tooltip: {
            followPointer: !0
        }
    });
    Q = {
        type: "pie",
        isCartesian: !1,
        pointClass: ja(Ga, {
            init: function() {
                Ga.prototype.init.apply(this, arguments);
                var b, a = this;
                q(a, {
                    visible: a.visible !== !1,
                    name: p(a.name, "Slice")
                });
                b = function(b) {
                    a.slice("select" === b.type);
                };
                K(a, "select", b);
                K(a, "unselect", b);
                return a;
            },
            setVisible: function(a) {
                var b = this, c = b.series, d = c.chart, e = !c.isDirty && c.options.ignoreHiddenPoint;
                b.visible = b.options.visible = a = a === v ? !b.visible : a;
                c.options.data[Ma(b, c.data)] = b.options;
                m([ "graphic", "dataLabel", "connector", "shadowGroup" ], function(c) {
                    b[c] && b[c][a ? "show" : "hide"](!0);
                });
                b.legendItem && (d.hasRendered && (c.updateTotals(), d.legend.clearItems(), e || d.legend.render()), 
                d.legend.colorizeItem(b, a));
                e && (c.isDirty = !0, d.redraw());
            },
            slice: function(a, b, c) {
                var d = this.series;
                Sa(c, d.chart);
                p(b, !0);
                this.sliced = this.options.sliced = a = r(a) ? a : !this.sliced;
                d.options.data[Ma(this, d.data)] = this.options;
                a = a ? this.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                };
                this.graphic.animate(a);
                this.shadowGroup && this.shadowGroup.animate(a);
            },
            haloPath: function(a) {
                var b = this.shapeArgs, c = this.series.chart;
                return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.plotLeft + b.x, c.plotTop + b.y, b.r + a, b.r + a, {
                    innerR: this.shapeArgs.r,
                    start: b.start,
                    end: b.end
                });
            }
        }),
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: [ "group", "dataLabelsGroup" ],
        axisTypes: [],
        pointAttrToOptions: {
            stroke: "borderColor",
            "stroke-width": "borderWidth",
            fill: "color"
        },
        getColor: ma,
        animate: function(a) {
            var b = this, c = b.points, d = b.startAngleRad;
            a || (m(c, function(a) {
                var c = a.graphic, a = a.shapeArgs;
                c && (c.attr({
                    r: b.center[3] / 2,
                    start: d,
                    end: d
                }), c.animate({
                    r: a.r,
                    start: a.start,
                    end: a.end
                }, b.options.animation));
            }), b.animate = null);
        },
        setData: function(a, b, c, d) {
            R.prototype.setData.call(this, a, !1, c, d);
            this.processData();
            this.generatePoints();
            p(b, !0) && this.chart.redraw(c);
        },
        updateTotals: function() {
            var a, c, d, e, b = 0, f = this.options.ignoreHiddenPoint;
            c = this.points;
            d = c.length;
            for (a = 0; d > a; a++) {
                e = c[a];
                e.y < 0 && (e.y = null);
                b += f && !e.visible ? 0 : e.y;
            }
            this.total = b;
            for (a = 0; d > a; a++) e = c[a], e.percentage = b > 0 && (e.visible || !f) ? e.y / b * 100 : 0, 
            e.total = b;
        },
        generatePoints: function() {
            R.prototype.generatePoints.call(this);
            this.updateTotals();
        },
        translate: function(a) {
            this.generatePoints();
            var f, g, h, n, m, b = 0, c = this.options, d = c.slicedOffset, e = d + c.borderWidth, i = c.startAngle || 0, j = this.startAngleRad = la / 180 * (i - 90), i = (this.endAngleRad = la / 180 * (p(c.endAngle, i + 360) - 90)) - j, k = this.points, l = c.dataLabels.distance, c = c.ignoreHiddenPoint, o = k.length;
            a || (this.center = a = this.getCenter());
            this.getX = function(b, c) {
                h = V.asin(H((b - a[1]) / (a[2] / 2 + l), 1));
                return a[0] + (c ? -1 : 1) * W(h) * (a[2] / 2 + l);
            };
            for (n = 0; o > n; n++) {
                m = k[n];
                f = j + b * i;
                (!c || m.visible) && (b += m.percentage / 100);
                g = j + b * i;
                m.shapeType = "arc";
                m.shapeArgs = {
                    x: a[0],
                    y: a[1],
                    r: a[2] / 2,
                    innerR: a[3] / 2,
                    start: w(1e3 * f) / 1e3,
                    end: w(1e3 * g) / 1e3
                };
                h = (g + f) / 2;
                h > 1.5 * la ? h -= 2 * la : -la / 2 > h && (h += 2 * la);
                m.slicedTranslation = {
                    translateX: w(W(h) * d),
                    translateY: w($(h) * d)
                };
                f = W(h) * a[2] / 2;
                g = $(h) * a[2] / 2;
                m.tooltipPos = [ a[0] + .7 * f, a[1] + .7 * g ];
                m.half = -la / 2 > h || h > la / 2 ? 1 : 0;
                m.angle = h;
                e = H(e, l / 2);
                m.labelPos = [ a[0] + f + W(h) * l, a[1] + g + $(h) * l, a[0] + f + W(h) * e, a[1] + g + $(h) * e, a[0] + f, a[1] + g, 0 > l ? "center" : m.half ? "right" : "left", h ];
            }
        },
        drawGraph: null,
        drawPoints: function() {
            var c, d, f, g, a = this, b = a.chart.renderer, e = a.options.shadow;
            e && !a.shadowGroup && (a.shadowGroup = b.g("shadow").add(a.group));
            m(a.points, function(h) {
                d = h.graphic;
                g = h.shapeArgs;
                f = h.shadowGroup;
                e && !f && (f = h.shadowGroup = b.g("shadow").add(a.shadowGroup));
                c = h.sliced ? h.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                };
                f && f.attr(c);
                d ? d.animate(q(g, c)) : h.graphic = d = b[h.shapeType](g).setRadialReference(a.center).attr(h.pointAttr[h.selected ? "select" : ""]).attr({
                    "stroke-linejoin": "round"
                }).attr(c).add(a.group).shadow(e, f);
                void 0 !== h.visible && h.setVisible(h.visible);
            });
        },
        searchPoint: ma,
        sortByAngle: function(a, b) {
            a.sort(function(a, d) {
                return void 0 !== a.angle && (d.angle - a.angle) * b;
            });
        },
        drawLegendSymbol: Na.drawRectangle,
        getCenter: Vb.getCenter,
        getSymbol: ma
    };
    Q = ja(R, Q);
    N.pie = Q;
    R.prototype.drawDataLabels = function() {
        var f, g, i, j, a = this, b = a.options, c = b.cursor, d = b.dataLabels, e = a.points, h = a.hasRendered || 0, k = a.chart.renderer;
        (d.enabled || a._hasPointLabels) && (a.dlProcessOptions && a.dlProcessOptions(d), 
        j = a.plotGroup("dataLabelsGroup", "data-labels", d.defer ? "hidden" : "visible", d.zIndex || 6), 
        p(d.defer, !0) && (j.attr({
            opacity: +h
        }), h || K(a, "afterAnimate", function() {
            a.visible && j.show();
            j[b.animation ? "animate" : "attr"]({
                opacity: 1
            }, {
                duration: 200
            });
        })), g = d, m(e, function(e) {
            var h, s, t, u, m = e.dataLabel, w = e.connector, B = !0, y = {};
            f = e.dlOptions || e.options && e.options.dataLabels;
            h = p(f && f.enabled, g.enabled);
            if (m && !h) e.dataLabel = m.destroy(); else if (h) {
                d = z(g, f);
                u = d.style;
                h = d.rotation;
                s = e.getLabelConfig();
                i = d.format ? Ja(d.format, s) : d.formatter.call(s, d);
                u.color = p(d.color, u.color, a.color, "black");
                if (m) r(i) ? (m.attr({
                    text: i
                }), B = !1) : (e.dataLabel = m = m.destroy(), w) && (e.connector = w.destroy()); else if (r(i)) {
                    m = {
                        fill: d.backgroundColor,
                        stroke: d.borderColor,
                        "stroke-width": d.borderWidth,
                        r: d.borderRadius || 0,
                        rotation: h,
                        padding: d.padding,
                        zIndex: 1
                    };
                    "contrast" === u.color && (y.color = d.inside || d.distance < 0 || b.stacking ? k.getContrast(e.color || a.color) : "#000000");
                    c && (y.cursor = c);
                    for (t in m) m[t] === v && delete m[t];
                    m = e.dataLabel = k[h ? "text" : "label"](i, 0, -999, d.shape, null, null, d.useHTML).attr(m).css(q(u, y)).add(j).shadow(d.shadow);
                }
                m && a.alignDataLabel(e, m, d, null, B);
            }
        }));
    };
    R.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart, g = f.inverted, h = p(a.plotX, -999), i = p(a.plotY, -999), j = b.getBBox(), k = f.renderer.fontMetrics(c.style.fontSize).b, l = this.visible && (a.series.forceDL || f.isInsidePlot(h, w(i), g) || d && f.isInsidePlot(h, g ? d.x + 1 : d.y + d.height - 1, g));
        l && (d = q({
            x: g ? f.plotWidth - i : h,
            y: w(g ? f.plotHeight - h : i),
            width: 0,
            height: 0
        }, d), q(c, {
            width: j.width,
            height: j.height
        }), c.rotation ? (a = f.renderer.rotCorr(k, c.rotation), b[e ? "attr" : "animate"]({
            x: d.x + c.x + d.width / 2 + a.x,
            y: d.y + c.y + d.height / 2
        }).attr({
            align: c.align
        })) : (b.align(c, null, d), g = b.alignAttr, "justify" === p(c.overflow, "justify") ? this.justifyDataLabel(b, c, g, j, d, e) : p(c.crop, !0) && (l = f.isInsidePlot(g.x, g.y) && f.isInsidePlot(g.x + j.width, g.y + j.height)), 
        c.shape && b.attr({
            anchorX: a.plotX,
            anchorY: a.plotY
        })));
        l || (b.attr({
            y: -999
        }), b.placed = !1);
    };
    R.prototype.justifyDataLabel = function(a, b, c, d, e, f) {
        var j, k, g = this.chart, h = b.align, i = b.verticalAlign, l = a.box ? 0 : a.padding || 0;
        j = c.x + l;
        0 > j && ("right" === h ? b.align = "left" : b.x = -j, k = !0);
        j = c.x + d.width - l;
        j > g.plotWidth && ("left" === h ? b.align = "right" : b.x = g.plotWidth - j, k = !0);
        j = c.y + l;
        0 > j && ("bottom" === i ? b.verticalAlign = "top" : b.y = -j, k = !0);
        j = c.y + d.height - l;
        j > g.plotHeight && ("top" === i ? b.verticalAlign = "bottom" : b.y = g.plotHeight - j, 
        k = !0);
        k && (a.placed = !f, a.align(b, null, e));
    };
    N.pie && (N.pie.prototype.drawDataLabels = function() {
        var c, j, k, y, u, z, C, A, F, J, E, a = this, b = a.data, d = a.chart, e = a.options.dataLabels, f = p(e.connectorPadding, 10), g = p(e.connectorWidth, 1), h = d.plotWidth, i = d.plotHeight, l = p(e.softConnector, !0), n = e.distance, o = a.center, q = o[2] / 2, r = o[1], v = n > 0, D = [ [], [] ], G = [ 0, 0, 0, 0 ], N = function(a, b) {
            return b.y - a.y;
        };
        if (a.visible && (e.enabled || a._hasPointLabels)) {
            R.prototype.drawDataLabels.apply(a);
            m(b, function(a) {
                a.dataLabel && a.visible && D[a.half].push(a);
            });
            for (J = 2; J--; ) {
                var L, K = [], O = [], I = D[J], M = I.length;
                if (M) {
                    a.sortByAngle(I, J - .5);
                    for (E = b = 0; !b && I[E]; ) b = I[E] && I[E].dataLabel && (I[E].dataLabel.getBBox().height || 21), 
                    E++;
                    if (n > 0) {
                        u = H(r + q + n, d.plotHeight);
                        for (E = t(0, r - q - n); u >= E; E += b) K.push(E);
                        u = K.length;
                        if (M > u) {
                            c = [].concat(I);
                            c.sort(N);
                            for (E = M; E--; ) c[E].rank = E;
                            for (E = M; E--; ) I[E].rank >= u && I.splice(E, 1);
                            M = I.length;
                        }
                        for (E = 0; M > E; E++) {
                            c = I[E];
                            z = c.labelPos;
                            c = 9999;
                            var S, Q;
                            for (Q = 0; u > Q; Q++) S = P(K[Q] - z[1]), c > S && (c = S, L = Q);
                            if (E > L && null !== K[E]) L = E; else for (M - E + L > u && null !== K[E] && (L = u - M + E); null === K[L]; ) L++;
                            O.push({
                                i: L,
                                y: K[L]
                            });
                            K[L] = null;
                        }
                        O.sort(N);
                    }
                    for (E = 0; M > E; E++) {
                        c = I[E];
                        z = c.labelPos;
                        y = c.dataLabel;
                        F = c.visible === !1 ? "hidden" : "visible";
                        c = z[1];
                        n > 0 ? (u = O.pop(), L = u.i, A = u.y, c > A && null !== K[L + 1] || A > c && null !== K[L - 1]) && (A = H(t(0, c), d.plotHeight)) : A = c;
                        C = e.justify ? o[0] + (J ? -1 : 1) * (q + n) : a.getX(A === r - q - n || A === r + q + n ? c : A, J);
                        y._attr = {
                            visibility: F,
                            align: z[6]
                        };
                        y._pos = {
                            x: C + e.x + ({
                                left: f,
                                right: -f
                            }[z[6]] || 0),
                            y: A + e.y - 10
                        };
                        y.connX = C;
                        y.connY = A;
                        null === this.options.size && (u = y.width, f > C - u ? G[3] = t(w(u - C + f), G[3]) : C + u > h - f && (G[1] = t(w(C + u - h + f), G[1])), 
                        0 > A - b / 2 ? G[0] = t(w(-A + b / 2), G[0]) : A + b / 2 > i && (G[2] = t(w(A + b / 2 - i), G[2])));
                    }
                }
            }
            (0 === Fa(G) || this.verifyDataLabelOverflow(G)) && (this.placeDataLabels(), v && g && m(this.points, function(b) {
                j = b.connector;
                z = b.labelPos;
                (y = b.dataLabel) && y._pos ? (F = y._attr.visibility, C = y.connX, A = y.connY, 
                k = l ? [ "M", C + ("left" === z[6] ? 5 : -5), A, "C", C, A, 2 * z[2] - z[4], 2 * z[3] - z[5], z[2], z[3], "L", z[4], z[5] ] : [ "M", C + ("left" === z[6] ? 5 : -5), A, "L", z[2], z[3], "L", z[4], z[5] ], 
                j ? (j.animate({
                    d: k
                }), j.attr("visibility", F)) : b.connector = j = a.chart.renderer.path(k).attr({
                    "stroke-width": g,
                    stroke: e.connectorColor || b.color || "#606060",
                    visibility: F
                }).add(a.dataLabelsGroup)) : j && (b.connector = j.destroy());
            }));
        }
    }, N.pie.prototype.placeDataLabels = function() {
        m(this.points, function(a) {
            var b, a = a.dataLabel;
            a && ((b = a._pos) ? (a.attr(a._attr), a[a.moved ? "animate" : "attr"](b), a.moved = !0) : a && a.attr({
                y: -999
            }));
        });
    }, N.pie.prototype.alignDataLabel = ma, N.pie.prototype.verifyDataLabelOverflow = function(a) {
        var f, b = this.center, c = this.options, d = c.center, e = c = c.minSize || 80;
        null !== d[0] ? e = t(b[2] - t(a[1], a[3]), c) : (e = t(b[2] - a[1] - a[3], c), 
        b[0] += (a[3] - a[1]) / 2);
        null !== d[1] ? e = t(H(e, b[2] - t(a[0], a[2])), c) : (e = t(H(e, b[2] - a[0] - a[2]), c), 
        b[1] += (a[0] - a[2]) / 2);
        e < b[2] ? (b[2] = e, this.translate(b), m(this.points, function(a) {
            a.dataLabel && (a.dataLabel._pos = null);
        }), this.drawDataLabels && this.drawDataLabels()) : f = !0;
        return f;
    });
    N.column && (N.column.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart.inverted, g = a.series, h = a.dlBox || a.shapeArgs, i = a.below || a.plotY > p(this.translatedThreshold, g.yAxis.len), j = p(c.inside, !!this.options.stacking);
        h && (d = z(h), f && (d = {
            x: g.yAxis.len - d.y - d.height,
            y: g.xAxis.len - d.x - d.width,
            width: d.height,
            height: d.width
        }), !j) && (f ? (d.x += i ? 0 : d.width, d.width = 0) : (d.y += i ? d.height : 0, 
        d.height = 0));
        c.align = p(c.align, !f || j ? "center" : i ? "right" : "left");
        c.verticalAlign = p(c.verticalAlign, f || j ? "middle" : i ? "top" : "bottom");
        R.prototype.alignDataLabel.call(this, a, b, c, d, e);
    });
    !function(a) {
        var b = a.Chart, c = a.each, d = HighchartsAdapter.addEvent;
        b.prototype.callbacks.push(function(a) {
            function b() {
                var d = [];
                c(a.series, function(a) {
                    var b = a.options.dataLabels;
                    (b.enabled || a._hasPointLabels) && !b.allowOverlap && a.visible && c(a.points, function(a) {
                        a.dataLabel && (a.dataLabel.labelrank = a.labelrank, d.push(a.dataLabel));
                    });
                });
                a.hideOverlappingLabels(d);
            }
            b();
            d(a, "redraw", b);
        });
        b.prototype.hideOverlappingLabels = function(a) {
            var c, d, i, j, b = a.length;
            for (d = 0; b > d; d++) (c = a[d]) && (c.oldOpacity = c.opacity, c.newOpacity = 1);
            for (d = 0; b > d; d++) {
                i = a[d];
                for (c = d + 1; b > c; ++c) (j = a[c], i && j && i.placed && j.placed && 0 !== i.newOpacity && 0 !== j.newOpacity && !(j.alignAttr.x > i.alignAttr.x + i.width || j.alignAttr.x + j.width < i.alignAttr.x || j.alignAttr.y > i.alignAttr.y + i.height || j.alignAttr.y + j.height < i.alignAttr.y)) && ((i.labelrank < j.labelrank ? i : j).newOpacity = 0);
            }
            for (d = 0; b > d; d++) if (c = a[d]) {
                c.oldOpacity !== c.newOpacity && c.placed && (c.alignAttr.opacity = c.newOpacity, 
                c[c.isOld && c.newOpacity ? "animate" : "attr"](c.alignAttr));
                c.isOld = !0;
            }
        };
    }(y);
    Q = y.TrackerMixin = {
        drawTrackerPoint: function() {
            var a = this, b = a.chart, c = b.pointer, d = a.options.cursor, e = d && {
                cursor: d
            }, f = function(a) {
                for (var d, c = a.target; c && !d; ) d = c.point, c = c.parentNode;
                d !== v && d !== b.hoverPoint && d.onMouseOver(a);
            };
            m(a.points, function(a) {
                a.graphic && (a.graphic.element.point = a);
                a.dataLabel && (a.dataLabel.element.point = a);
            });
            a._hasTracking || (m(a.trackerGroups, function(b) {
                a[b] && (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function(a) {
                    c.onTrackerMouseOut(a);
                }).css(e), ab) && a[b].on("touchstart", f);
            }), a._hasTracking = !0);
        },
        drawTrackerGraph: function() {
            var n, a = this, b = a.options, c = b.trackByArea, d = [].concat(c ? a.areaPath : a.graphPath), e = d.length, f = a.chart, g = f.pointer, h = f.renderer, i = f.options.tooltip.snap, j = a.tracker, k = b.cursor, l = k && {
                cursor: k
            }, k = a.singlePoints, o = function() {
                f.hoverSeries !== a && a.onMouseOver();
            }, p = "rgba(192,192,192," + (ba ? 1e-4 : .002) + ")";
            if (e && !c) for (n = e + 1; n--; ) "M" === d[n] && d.splice(n + 1, 0, d[n + 1] - i, d[n + 2], "L"), 
            (n && "M" === d[n] || n === e) && d.splice(n, 0, "L", d[n - 2] + i, d[n - 1]);
            for (n = 0; n < k.length; n++) e = k[n], d.push("M", e.plotX - i, e.plotY, "L", e.plotX + i, e.plotY);
            j ? j.attr({
                d: d
            }) : (a.tracker = h.path(d).attr({
                "stroke-linejoin": "round",
                visibility: a.visible ? "visible" : "hidden",
                stroke: p,
                fill: c ? p : M,
                "stroke-width": b.lineWidth + (c ? 0 : 2 * i),
                zIndex: 2
            }).add(a.group), m([ a.tracker, a.markerGroup ], function(a) {
                a.addClass("highcharts-tracker").on("mouseover", o).on("mouseout", function(a) {
                    g.onTrackerMouseOut(a);
                }).css(l);
                ab && a.on("touchstart", o);
            }));
        }
    };
    N.column && (xa.prototype.drawTracker = Q.drawTrackerPoint);
    N.pie && (N.pie.prototype.drawTracker = Q.drawTrackerPoint);
    N.scatter && (pa.prototype.drawTracker = Q.drawTrackerPoint);
    q(mb.prototype, {
        setItemEvents: function(a, b, c, d, e) {
            var f = this;
            (c ? b : a.legendGroup).on("mouseover", function() {
                a.setState("hover");
                b.css(f.options.itemHoverStyle);
            }).on("mouseout", function() {
                b.css(a.visible ? d : e);
                a.setState();
            }).on("click", function(b) {
                var c = function() {
                    a.setVisible();
                }, b = {
                    browserEvent: b
                };
                a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : G(a, "legendItemClick", b, c);
            });
        },
        createCheckboxForItem: function(a) {
            a.checkbox = Z("input", {
                type: "checkbox",
                checked: a.selected,
                defaultChecked: a.selected
            }, this.options.itemCheckboxStyle, this.chart.container);
            K(a.checkbox, "click", function(b) {
                G(a.series || a, "checkboxClick", {
                    checked: b.target.checked,
                    item: a
                }, function() {
                    a.select();
                });
            });
        }
    });
    S.legend.itemStyle.cursor = "pointer";
    q(A.prototype, {
        showResetZoom: function() {
            var a = this, b = S.lang, c = a.options.chart.resetZoomButton, d = c.theme, e = d.states, f = "chart" === c.relativeTo ? null : "plotBox";
            this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function() {
                a.zoomOut();
            }, d, e && e.hover).attr({
                align: c.position.align,
                title: b.resetZoomTitle
            }).add().align(c.position, !1, f);
        },
        zoomOut: function() {
            var a = this;
            G(a, "selection", {
                resetSelection: !0
            }, function() {
                a.zoom();
            });
        },
        zoom: function(a) {
            var b, e, c = this.pointer, d = !1;
            !a || a.resetSelection ? m(this.axes, function(a) {
                b = a.zoom();
            }) : m(a.xAxis.concat(a.yAxis), function(a) {
                var e = a.axis, h = e.isXAxis;
                (c[h ? "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"]) && (b = e.zoom(a.min, a.max), 
                e.displayBtn && (d = !0));
            });
            e = this.resetZoomButton;
            d && !e ? this.showResetZoom() : !d && ca(e) && (this.resetZoomButton = e.destroy());
            b && this.redraw(p(this.options.chart.animation, a && a.animation, this.pointCount < 100));
        },
        pan: function(a, b) {
            var e, c = this, d = c.hoverPoints;
            d && m(d, function(a) {
                a.setState();
            });
            m("xy" === b ? [ 1, 0 ] : [ 1 ], function(b) {
                var d = a[b ? "chartX" : "chartY"], h = c[b ? "xAxis" : "yAxis"][0], i = c[b ? "mouseDownX" : "mouseDownY"], j = (h.pointRange || 0) / 2, k = h.getExtremes(), l = h.toValue(i - d, !0) + j, j = h.toValue(i + c[b ? "plotWidth" : "plotHeight"] - d, !0) - j, i = i > d;
                h.series.length && (i || l > H(k.dataMin, k.min)) && (!i || j < t(k.dataMax, k.max)) && (h.setExtremes(l, j, !1, !1, {
                    trigger: "pan"
                }), e = !0);
                c[b ? "mouseDownX" : "mouseDownY"] = d;
            });
            e && c.redraw(!1);
            J(c.container, {
                cursor: "move"
            });
        }
    });
    q(Ga.prototype, {
        select: function(a, b) {
            var c = this, d = c.series, e = d.chart, a = p(a, !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {
                accumulate: b
            }, function() {
                c.selected = c.options.selected = a;
                d.options.data[Ma(c, d.data)] = c.options;
                c.setState(a && "select");
                b || m(e.getSelectedPoints(), function(a) {
                    a.selected && a !== c && (a.selected = a.options.selected = !1, d.options.data[Ma(a, d.data)] = a.options, 
                    a.setState(""), a.firePointEvent("unselect"));
                });
            });
        },
        onMouseOver: function(a) {
            var b = this.series, c = b.chart, d = c.tooltip, e = c.hoverPoint;
            c.hoverSeries !== b && b.onMouseOver();
            e && e !== this && e.onMouseOut();
            this.firePointEvent("mouseOver");
            d && (!d.shared || b.noSharedTooltip) && d.refresh(this, a);
            this.setState("hover");
            c.hoverPoint = this;
        },
        onMouseOut: function() {
            var a = this.series.chart, b = a.hoverPoints;
            this.firePointEvent("mouseOut");
            b && -1 !== Ma(this, b) || (this.setState(), a.hoverPoint = null);
        },
        importEvents: function() {
            if (!this.hasImportedEvents) {
                var b, a = z(this.series.options.point, this.options).events;
                this.events = a;
                for (b in a) K(this, b, a[b]);
                this.hasImportedEvents = !0;
            }
        },
        setState: function(a, b) {
            var p, c = this.plotX, d = this.plotY, e = this.series, f = e.options.states, g = aa[e.type].marker && e.options.marker, h = g && !g.enabled, i = g && g.states[a], j = i && i.enabled === !1, k = e.stateMarkerGraphic, l = this.marker || {}, m = e.chart, o = e.halo, a = a || "";
            p = this.pointAttr[a] || e.pointAttr[a];
            if (!(a === this.state && !b || this.selected && "select" !== a || f[a] && f[a].enabled === !1 || a && (j || h && i.enabled === !1) || a && l.states && l.states[a] && l.states[a].enabled === !1)) {
                if (this.graphic) g = g && this.graphic.symbolName && p.r, this.graphic.attr(z(p, g ? {
                    x: c - g,
                    y: d - g,
                    width: 2 * g,
                    height: 2 * g
                } : {})), k && k.hide(); else {
                    a && i && (g = i.radius, l = l.symbol || e.symbol, k && k.currentSymbol !== l && (k = k.destroy()), 
                    k ? k[b ? "animate" : "attr"]({
                        x: c - g,
                        y: d - g
                    }) : l && (e.stateMarkerGraphic = k = m.renderer.symbol(l, c - g, d - g, 2 * g, 2 * g).attr(p).add(e.markerGroup), 
                    k.currentSymbol = l));
                    k && k[a && m.isInsidePlot(c, d, m.inverted) ? "show" : "hide"]();
                }
                if ((c = f[a] && f[a].halo) && c.size) {
                    o || (e.halo = o = m.renderer.path().add(m.seriesGroup));
                    o.attr(q({
                        fill: na(this.color || e.color).setOpacity(c.opacity).get()
                    }, c.attributes))[b ? "animate" : "attr"]({
                        d: this.haloPath(c.size)
                    });
                } else o && o.attr({
                    d: []
                });
                this.state = a;
            }
        },
        haloPath: function(a) {
            var b = this.series, c = b.chart, d = b.getPlotBox(), e = c.inverted;
            return c.renderer.symbols.circle(d.translateX + (e ? b.yAxis.len - this.plotY : this.plotX) - a, d.translateY + (e ? b.xAxis.len - this.plotX : this.plotY) - a, 2 * a, 2 * a);
        }
    });
    q(R.prototype, {
        onMouseOver: function() {
            var a = this.chart, b = a.hoverSeries;
            b && b !== this && b.onMouseOut();
            this.options.events.mouseOver && G(this, "mouseOver");
            this.setState("hover");
            a.hoverSeries = this;
        },
        onMouseOut: function() {
            var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint;
            d && d.onMouseOut();
            this && a.events.mouseOut && G(this, "mouseOut");
            c && !a.stickyTracking && (!c.shared || this.noSharedTooltip) && c.hide();
            this.setState();
            b.hoverSeries = null;
        },
        setState: function(a) {
            var b = this.options, c = this.graph, d = this.graphNeg, e = b.states, b = b.lineWidth, a = a || "";
            this.state !== a && (this.state = a, e[a] && e[a].enabled === !1 || (a && (b = (e[a].lineWidth || b) + (e[a].lineWidthPlus || 0)), 
            c && !c.dashstyle && (a = {
                "stroke-width": b
            }, c.attr(a), d && d.attr(a))));
        },
        setVisible: function(a, b) {
            var f, c = this, d = c.chart, e = c.legendItem, g = d.options.chart.ignoreHiddenSeries, h = c.visible;
            f = (c.visible = a = c.userOptions.visible = a === v ? !h : a) ? "show" : "hide";
            m([ "group", "dataLabelsGroup", "markerGroup", "tracker" ], function(a) {
                c[a] && c[a][f]();
            });
            (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) && c.onMouseOut();
            e && d.legend.colorizeItem(c, a);
            c.isDirty = !0;
            c.options.stacking && m(d.series, function(a) {
                a.options.stacking && a.visible && (a.isDirty = !0);
            });
            m(c.linkedSeries, function(b) {
                b.setVisible(a, !1);
            });
            g && (d.isDirtyBox = !0);
            b !== !1 && d.redraw();
            G(c, f);
        },
        show: function() {
            this.setVisible(!0);
        },
        hide: function() {
            this.setVisible(!1);
        },
        select: function(a) {
            this.selected = a = a === v ? !this.selected : a;
            this.checkbox && (this.checkbox.checked = a);
            G(this, a ? "select" : "unselect");
        },
        drawTracker: Q.drawTrackerGraph
    });
    q(y, {
        Color: na,
        Point: Ga,
        Tick: Ta,
        Renderer: $a,
        SVGElement: L,
        SVGRenderer: ta,
        arrayMin: Pa,
        arrayMax: Fa,
        charts: X,
        dateFormat: Oa,
        error: ka,
        format: Ja,
        pathAnim: zb,
        getOptions: function() {
            return S;
        },
        hasBidiBug: Lb,
        isTouchDevice: Hb,
        setOptions: function(a) {
            S = z(!0, S, a);
            Cb();
            return S;
        },
        addEvent: K,
        removeEvent: Y,
        createElement: Z,
        discardElement: Ra,
        css: J,
        each: m,
        map: Ua,
        merge: z,
        splat: ra,
        extendClass: ja,
        pInt: C,
        svg: ba,
        canvas: ea,
        vml: !ba && !ea,
        product: "Highcharts",
        version: "4.1.4"
    });
}();