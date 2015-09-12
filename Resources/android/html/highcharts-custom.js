var HighchartsAdapter = function() {
    function l(l) {
        function t(q, n, t) {
            q.removeEventListener(n, t, !1);
        }
        function q(q, n, t) {
            t = q.HCProxiedMethods[t.toString()];
            q.detachEvent("on" + n, t);
        }
        function w(w, n) {
            var F, x, B, l = w.HCEvents;
            if (w.removeEventListener) F = t; else {
                if (!w.attachEvent) return;
                F = q;
            }
            n ? (x = {}, x[n] = !0) : x = l;
            for (B in x) if (l[B]) for (x = l[B].length; x--; ) F(w, B, l[B][x]);
        }
        l.HCExtended || Highcharts.extend(l, {
            HCExtended: !0,
            HCEvents: {},
            bind: function(q, n) {
                var l, t = this, w = this.HCEvents;
                t.addEventListener ? t.addEventListener(q, n, !1) : t.attachEvent && (l = function(q) {
                    q.target = q.srcElement || window;
                    n.call(t, q);
                }, t.HCProxiedMethods || (t.HCProxiedMethods = {}), t.HCProxiedMethods[n.toString()] = l, 
                t.attachEvent("on" + q, l));
                w[q] === x && (w[q] = []);
                w[q].push(n);
            },
            unbind: function(l, n) {
                var F, x;
                l ? (F = this.HCEvents[l] || [], n ? (x = HighchartsAdapter.inArray(n, F), x > -1 && (F.splice(x, 1), 
                this.HCEvents[l] = F), this.removeEventListener ? t(this, l, n) : this.attachEvent && q(this, l, n)) : (w(this, l), 
                this.HCEvents[l] = [])) : (w(this), this.HCEvents = {});
            },
            trigger: function(q, n) {
                var l, F, x, t = this.HCEvents[q] || [], w = t.length;
                F = function() {
                    n.defaultPrevented = !0;
                };
                for (l = 0; w > l; l++) {
                    x = t[l];
                    if (n.stopped) break;
                    n.preventDefault = F;
                    n.target = this;
                    n.type || (n.type = q);
                    !1 === x.call(this, n) && n.preventDefault();
                }
            }
        });
        return l;
    }
    var x, P, ga, B = document, na = [], N = [], Q = {};
    Math.easeInOutSine = function(l, t, q, w) {
        return -q / 2 * (Math.cos(Math.PI * l / w) - 1) + t;
    };
    return {
        init: function(l) {
            B.defaultView || (this._getStyle = function(t, q) {
                var w;
                if (t.style[q]) return t.style[q];
                "opacity" === q && (q = "filter");
                w = t.currentStyle[q.replace(/\-(\w)/g, function(q, n) {
                    return n.toUpperCase();
                })];
                "filter" === q && (w = w.replace(/alpha\(opacity=([0-9]+)\)/, function(q, n) {
                    return n / 100;
                }));
                return "" === w ? 1 : w;
            }, this.adapterRun = function(t, q) {
                var w = {
                    width: "clientWidth",
                    height: "clientHeight"
                }[q];
                if (w) return t.style.zoom = 1, t[w] - 2 * parseInt(HighchartsAdapter._getStyle(t, "padding"), 10);
            });
            Array.prototype.forEach || (this.each = function(t, q) {
                for (var w = 0, l = t.length; l > w; w++) if (!1 === q.call(t[w], t[w], w, t)) return w;
            });
            Array.prototype.indexOf || (this.inArray = function(t, q) {
                var w, l = 0;
                if (q) for (w = q.length; w > l; l++) if (q[l] === t) return l;
                return -1;
            });
            Array.prototype.filter || (this.grep = function(t, q) {
                for (var w = [], l = 0, n = t.length; n > l; l++) q(t[l], l) && w.push(t[l]);
                return w;
            });
            ga = function(t, q, l) {
                this.options = q;
                this.elem = t;
                this.prop = l;
            };
            ga.prototype = {
                update: function() {
                    var t;
                    t = this.paths;
                    var q = this.elem, w = q.element;
                    Q[this.prop] ? Q[this.prop](this) : t && w ? q.attr("d", l.step(t[0], t[1], this.now, this.toD)) : q.attr ? w && q.attr(this.prop, this.now) : (t = {}, 
                    t[this.prop] = this.now + this.unit, Highcharts.css(q, t));
                    this.options.step && this.options.step.call(this.elem, this.now, this);
                },
                custom: function(t, q, l) {
                    var x, F = this, n = function(n) {
                        return F.step(n);
                    };
                    this.startTime = +new Date();
                    this.start = t;
                    this.end = q;
                    this.unit = l;
                    this.now = this.start;
                    this.pos = this.state = 0;
                    n.elem = this.elem;
                    n() && 1 === N.push(n) && (P = setInterval(function() {
                        for (x = 0; x < N.length; x++) N[x]() || N.splice(x--, 1);
                        N.length || clearInterval(P);
                    }, 13));
                },
                step: function(l) {
                    var w, q = +new Date();
                    w = this.options;
                    var n, F = this.elem;
                    if (F.stopAnimation || F.attr && !F.element) w = !1; else if (l || q >= w.duration + this.startTime) {
                        this.now = this.end;
                        this.pos = this.state = 1;
                        this.update();
                        l = this.options.curAnim[this.prop] = !0;
                        for (n in w.curAnim) !0 !== w.curAnim[n] && (l = !1);
                        l && w.complete && w.complete.call(F);
                        w = !1;
                    } else F = q - this.startTime, this.state = F / w.duration, this.pos = w.easing(F, 0, 1, w.duration), 
                    this.now = this.start + (this.end - this.start) * this.pos, this.update(), w = !0;
                    return w;
                }
            };
            this.animate = function(t, q, w) {
                var x, B, N, P, n = "";
                t.stopAnimation = !1;
                ("object" != typeof w || null === w) && (x = arguments, w = {
                    duration: x[2],
                    easing: x[3],
                    complete: x[4]
                });
                "number" != typeof w.duration && (w.duration = 400);
                w.easing = Math[w.easing] || Math.easeInOutSine;
                w.curAnim = Highcharts.extend({}, q);
                for (P in q) N = new ga(t, w, P), B = null, "d" === P ? (N.paths = l.init(t, t.d, q.d), 
                N.toD = q.d, x = 0, B = 1) : t.attr ? x = t.attr(P) : (x = parseFloat(HighchartsAdapter._getStyle(t, P)) || 0, 
                "opacity" !== P && (n = "px")), B || (B = q[P]), N.custom(x, B, n);
            };
        },
        _getStyle: function(l, t) {
            return window.getComputedStyle(l, void 0).getPropertyValue(t);
        },
        addAnimSetter: function(l, t) {
            Q[l] = t;
        },
        getScript: function(l, t) {
            var q = B.getElementsByTagName("head")[0], w = B.createElement("script");
            w.type = "text/javascript";
            w.src = l;
            w.onload = t;
            q.appendChild(w);
        },
        inArray: function(l, t) {
            return t.indexOf ? t.indexOf(l) : na.indexOf.call(t, l);
        },
        adapterRun: function(l, t) {
            return parseInt(HighchartsAdapter._getStyle(l, t), 10);
        },
        grep: function(l, t) {
            return na.filter.call(l, t);
        },
        map: function(l, t) {
            for (var q = [], w = 0, x = l.length; x > w; w++) q[w] = t.call(l[w], l[w], w, l);
            return q;
        },
        offset: function(l) {
            var t = document.documentElement;
            l = l.getBoundingClientRect();
            return {
                top: l.top + (window.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: l.left + (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            };
        },
        addEvent: function(x, t, q) {
            l(x).bind(t, q);
        },
        removeEvent: function(x, t, q) {
            l(x).unbind(t, q);
        },
        fireEvent: function(l, t, q, w) {
            var x;
            B.createEvent && (l.dispatchEvent || l.fireEvent) ? (x = B.createEvent("Events"), 
            x.initEvent(t, !0, !0), x.target = l, Highcharts.extend(x, q), l.dispatchEvent ? l.dispatchEvent(x) : l.fireEvent(t, x)) : !0 === l.HCExtended && (q = q || {}, 
            l.trigger(t, q));
            q && q.defaultPrevented && (w = null);
            w && w(q);
        },
        washMouseEvent: function(l) {
            return l;
        },
        stop: function(l) {
            l.stopAnimation = !0;
        },
        each: function(l, t) {
            return Array.prototype.forEach.call(l, t);
        }
    };
}();

!function() {
    function l(a, b) {
        var c;
        a || (a = {});
        for (c in b) a[c] = b[c];
        return a;
    }
    function x() {
        var a, c, b = arguments, d = {}, e = function(a, b) {
            var c, d;
            "object" != typeof a && (a = {});
            for (d in b) b.hasOwnProperty(d) && (a[d] = (c = b[d]) && "object" == typeof c && "[object Array]" !== Object.prototype.toString.call(c) && "renderTo" !== d && "number" != typeof c.nodeType ? e(a[d] || {}, c) : b[d]);
            return a;
        };
        !0 === b[0] && (d = b[1], b = Array.prototype.slice.call(b, 2));
        c = b.length;
        for (a = 0; c > a; a++) d = e(d, b[a]);
        return d;
    }
    function B(a, b) {
        return parseInt(a, b || 10);
    }
    function na(a) {
        return "string" == typeof a;
    }
    function N(a) {
        return a && "object" == typeof a;
    }
    function P(a) {
        return "[object Array]" === Object.prototype.toString.call(a);
    }
    function Q(a) {
        return "number" == typeof a;
    }
    function ga(a) {
        return W.log(a) / W.LN10;
    }
    function F(a) {
        return W.pow(10, a);
    }
    function t(a, b) {
        for (var c = a.length; c--; ) if (a[c] === b) {
            a.splice(c, 1);
            break;
        }
    }
    function q(a) {
        return a !== A && null !== a;
    }
    function w(a, b, c) {
        var d, e;
        if (na(b)) q(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b)); else if (q(b) && N(b)) for (d in b) a.setAttribute(d, b[d]);
        return e;
    }
    function xa(a) {
        return P(a) ? a : [ a ];
    }
    function n() {
        var b, c, a = arguments, d = a.length;
        for (b = 0; d > b; b++) if (c = a[b], c !== A && null !== c) return c;
    }
    function J(a, b) {
        Ga && !oa && b && b.opacity !== A && (b.filter = "alpha(opacity=" + 100 * b.opacity + ")");
        l(a.style, b);
    }
    function fa(a, b, c, d, e) {
        a = U.createElement(a);
        b && l(a, b);
        e && J(a, {
            padding: 0,
            border: "none",
            margin: 0
        });
        c && J(a, c);
        d && d.appendChild(a);
        return a;
    }
    function Na(a, b) {
        var c = function() {
            return A;
        };
        c.prototype = new a();
        l(c.prototype, b);
        return c;
    }
    function T(a, b, c, d) {
        var e = ca.numberFormat, f = R.lang, g = +a || 0, h = -1 === b ? (g.toString().split(".")[1] || "").length : isNaN(b = qa(b)) ? 2 : b, k = void 0 === c ? f.decimalPoint : c, f = void 0 === d ? f.thousandsSep : d, m = 0 > g ? "-" : "", p = String(B(g = qa(g).toFixed(h))), r = 3 < p.length ? p.length % 3 : 0;
        return e !== T ? e(a, b, c, d) : m + (r ? p.substr(0, r) + f : "") + p.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + f) + (h ? k + qa(g - p).toFixed(h).slice(2) : "");
    }
    function Z(a, b) {
        return Array((b || 2) + 1 - String(a).length).join(0) + a;
    }
    function G(a, b, c) {
        var d = a[b];
        a[b] = function() {
            var a = Array.prototype.slice.call(arguments);
            a.unshift(d);
            return c.apply(this, a);
        };
    }
    function I(a, b) {
        for (var e, f, g, h, k, c = "{", d = !1, m = []; -1 !== (c = a.indexOf(c)); ) {
            e = a.slice(0, c);
            if (d) {
                f = e.split(":");
                g = f.shift().split(".");
                k = g.length;
                e = b;
                for (h = 0; k > h; h++) e = e[g[h]];
                f.length && (f = f.join(":"), g = /\.([0-9])/, h = R.lang, k = void 0, /f$/.test(f) ? (k = (k = f.match(g)) ? k[1] : -1, 
                null !== e && (e = T(e, k, h.decimalPoint, -1 < f.indexOf(",") ? h.thousandsSep : ""))) : e = ta(f, e));
            }
            m.push(e);
            a = a.slice(c + 1);
            c = (d = !d) ? "}" : "{";
        }
        m.push(a);
        return m.join("");
    }
    function da(a, b, c, d) {
        var e;
        c = n(c, 1);
        e = a / c;
        b || (b = [ 1, 2, 2.5, 5, 10 ], !1 === d && (1 === c ? b = [ 1, 2, 5, 10 ] : .1 >= c && (b = [ 1 / c ])));
        for (d = 0; d < b.length && !(a = b[d], e <= (b[d] + (b[d + 1] || b[d])) / 2); d++) ;
        return a * c;
    }
    function L(a, b) {
        var d, e, c = a.length;
        for (e = 0; c > e; e++) a[e].ss_i = e;
        a.sort(function(a, c) {
            d = b(a, c);
            return 0 === d ? a.ss_i - c.ss_i : d;
        });
        for (e = 0; c > e; e++) delete a[e].ss_i;
    }
    function aa(a) {
        for (var b = a.length, c = a[0]; b--; ) a[b] < c && (c = a[b]);
        return c;
    }
    function Ba(a) {
        for (var b = a.length, c = a[0]; b--; ) a[b] > c && (c = a[b]);
        return c;
    }
    function ka(a, b) {
        for (var c in a) a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c];
    }
    function C(a) {
        Ua || (Ua = fa("div"));
        a && Ua.appendChild(a);
        Ua.innerHTML = "";
    }
    function ya(a) {
        return parseFloat(a.toPrecision(14));
    }
    function sb() {
        var a = R.global.useUTC, b = a ? "getUTC" : "get", c = a ? "setUTC" : "set";
        ia = R.global.Date || window.Date;
        Ca = 6e4 * (a && R.global.timezoneOffset || 0);
        Va = a ? ia.UTC : function(a, b, c, g, h, k) {
            return new ia(a, b, n(c, 1), n(g, 0), n(h, 0), n(k, 0)).getTime();
        };
        cb = b + "Minutes";
        db = b + "Hours";
        eb = b + "Day";
        Ha = b + "Date";
        Wa = b + "Month";
        Xa = b + "FullYear";
        tb = c + "Minutes";
        ub = c + "Hours";
        fb = c + "Date";
        vb = c + "Month";
        wb = c + "FullYear";
    }
    function M() {}
    function za(a, b, c, d) {
        this.axis = a;
        this.pos = b;
        this.type = c || "";
        this.isNew = !0;
        c || d || this.addLabel();
    }
    function K() {
        this.init.apply(this, arguments);
    }
    function V() {
        this.init.apply(this, arguments);
    }
    function gb(a) {
        var b = a.options, c = b.navigator, d = c.enabled, b = b.scrollbar, e = b.enabled, f = d ? c.height : 0, g = e ? b.height : 0;
        this.handles = [];
        this.scrollbarButtons = [];
        this.elementsToDestroy = [];
        this.chart = a;
        this.setBaseSeries();
        this.height = f;
        this.scrollbarHeight = g;
        this.scrollbarEnabled = e;
        this.navigatorEnabled = d;
        this.navigatorOptions = c;
        this.scrollbarOptions = b;
        this.outlineHeight = f + g;
        this.init();
    }
    function hb(a) {
        this.init(a);
    }
    var A, Sa, Ua, R, ta, pa, kb, H, la, ia, Va, Ca, cb, db, eb, Ha, Wa, Xa, tb, ub, fb, vb, wb, ca, U = document, Y = window, W = Math, E = W.round, X = W.floor, Oa = W.ceil, D = W.max, S = W.min, qa = W.abs, ua = W.cos, Da = W.sin, va = W.PI, xb = 2 * va / 360, Ia = navigator.userAgent, yb = Y.opera, Ga = /msie/i.test(Ia) && !yb, ib = /AppleWebKit/.test(Ia), Pa = /Firefox/.test(Ia), Ra = /(Mobile|Android|Windows Phone)/.test(Ia), Aa = "http://www.w3.org/2000/svg", oa = !!U.createElementNS && !!U.createElementNS(Aa, "svg").createSVGRect, Ib = Pa && 4 > parseInt(Ia.split("Firefox/")[1], 10), wa = !oa && !Ga && !!U.createElement("canvas").getContext, zb = {}, jb = 0, lb = function() {
        return A;
    }, Ja = [], Ab = 0, Jb = /^[0-9]+$/, Ka = {};
    Y.Highcharts ? la(16, !0) : ca = Y.Highcharts = {};
    ta = function(a, b, c) {
        if (!q(b) || isNaN(b)) return "Invalid date";
        a = n(a, "%Y-%m-%d %H:%M:%S");
        var e, d = new ia(b - Ca), f = d[db](), g = d[eb](), h = d[Ha](), k = d[Wa](), m = d[Xa](), p = R.lang, r = p.weekdays, d = l({
            a: r[g].substr(0, 3),
            A: r[g],
            d: Z(h),
            e: h,
            b: p.shortMonths[k],
            B: p.months[k],
            m: Z(k + 1),
            y: m.toString().substr(2, 2),
            Y: m,
            H: Z(f),
            I: Z(f % 12 || 12),
            l: f % 12 || 12,
            M: Z(d[cb]()),
            p: 12 > f ? "AM" : "PM",
            P: 12 > f ? "am" : "pm",
            S: Z(d.getSeconds()),
            L: Z(E(b % 1e3), 3)
        }, ca.dateFormats);
        for (e in d) for (;-1 !== a.indexOf("%" + e); ) a = a.replace("%" + e, "function" == typeof d[e] ? d[e](b) : d[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a;
    };
    la = function(a, b) {
        var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;
        if (b) throw c;
        Y.console && console.log(c);
    };
    H = {
        millisecond: 1,
        second: 1e3,
        minute: 6e4,
        hour: 36e5,
        day: 864e5,
        week: 6048e5,
        month: 26784e5,
        year: 31556952e3
    };
    kb = {
        init: function(a, b, c) {
            b = b || "";
            var g, d = a.shift, e = -1 < b.indexOf("C"), f = e ? 7 : 3;
            b = b.split(" ");
            c = [].concat(c);
            var h, k, m = function(a) {
                for (g = a.length; g--; ) "M" === a[g] && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2]);
            };
            e && (m(b), m(c));
            a.isArea && (h = b.splice(b.length - 6, 6), k = c.splice(c.length - 6, 6));
            if (d <= c.length / f && b.length === c.length) for (;d--; ) c = [].concat(c).splice(0, f).concat(c);
            a.shift = 0;
            if (b.length) for (a = c.length; b.length < a; ) d = [].concat(b).splice(b.length - f, f), 
            e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
            h && (b = b.concat(h), c = c.concat(k));
            return [ b, c ];
        },
        step: function(a, b, c, d) {
            var e = [], f = a.length;
            if (1 === c) e = d; else if (f === b.length && 1 > c) for (;f--; ) d = parseFloat(a[f]), 
            e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d; else e = b;
            return e;
        }
    };
    var Ya = Y.HighchartsAdapter, ra = Ya || {};
    Ya && Ya.init.call(Ya, kb);
    var Za = ra.adapterRun, Kb = ra.getScript, $a = ra.inArray, y = ra.each, ab = ra.grep, La = ra.map, O = ra.addEvent, ba = ra.removeEvent, ha = ra.fireEvent, Bb = ra.animate, mb = ra.stop, nb = {
        enabled: !0,
        x: 0,
        y: 15,
        style: {
            color: "#606060",
            cursor: "default",
            fontSize: "11px"
        }
    };
    R = {
        colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #8085e8 #8d4653 #91e8e1".split(" "),
        symbols: [ "circle", "diamond", "square", "triangle", "triangle-down" ],
        lang: {
            loading: "Loading...",
            months: "January February March April May June July August September October November December".split(" "),
            shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            decimalPoint: ".",
            numericSymbols: "kMGTPE".split(""),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: ","
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com@product.cdnpath@//Highstock 2.0.4/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com@product.cdnpath@//Highstock 2.0.4/gfx/vml-radial-gradient.png"
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
                dataLabels: x(nb, {
                    align: "center",
                    enabled: !1,
                    formatter: function() {
                        return null === this.y ? "" : T(this.y, -1);
                    },
                    verticalAlign: "bottom",
                    y: 0
                }),
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
            animation: oa,
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
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: Ra ? 25 : 10,
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
    var Qa = R.plotOptions, Lb = Qa.line;
    sb();
    var Mb = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, Nb = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, Ob = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, Ta = function(a) {
        var c, d, b = [];
        !function(a) {
            a && a.stops ? d = La(a.stops, function(a) {
                return Ta(a[1]);
            }) : (c = Mb.exec(a)) ? b = [ B(c[1]), B(c[2]), B(c[3]), parseFloat(c[4], 10) ] : (c = Nb.exec(a)) ? b = [ B(c[1], 16), B(c[2], 16), B(c[3], 16), 1 ] : (c = Ob.exec(a)) && (b = [ B(c[1]), B(c[2]), B(c[3]), 1 ]);
        }(a);
        return {
            get: function(c) {
                var f;
                d ? (f = x(a), f.stops = [].concat(f.stops), y(d, function(a, b) {
                    f.stops[b] = [ f.stops[b][0], a.get(c) ];
                })) : f = b && !isNaN(b[0]) ? "rgb" === c ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : "a" === c ? b[3] : "rgba(" + b.join(",") + ")" : a;
                return f;
            },
            brighten: function(a) {
                if (d) y(d, function(b) {
                    b.brighten(a);
                }); else if (Q(a) && 0 !== a) {
                    var c;
                    for (c = 0; 3 > c; c++) b[c] += B(255 * a), 0 > b[c] && (b[c] = 0), 255 < b[c] && (b[c] = 255);
                }
                return this;
            },
            rgba: b,
            setOpacity: function(a) {
                b[3] = a;
                return this;
            }
        };
    };
    M.prototype = {
        opacity: 1,
        textProps: "fontSize fontWeight fontFamily color lineHeight width textDecoration textShadow HcTextStroke".split(" "),
        init: function(a, b) {
            this.element = "span" === b ? fa(b) : U.createElementNS(Aa, b);
            this.renderer = a;
        },
        animate: function(a, b, c) {
            b = n(b, pa, !0);
            mb(this);
            b ? (b = x(b, {}), c && (b.complete = c), Bb(this, a, b)) : (this.attr(a), c && c());
            return this;
        },
        colorGradient: function(a, b, c) {
            var e, f, g, h, k, m, p, r, v, u, d = this.renderer, z = [];
            a.linearGradient ? f = "linearGradient" : a.radialGradient && (f = "radialGradient");
            if (f) {
                g = a[f];
                h = d.gradients;
                m = a.stops;
                v = c.radialReference;
                P(g) && (a[f] = g = {
                    x1: g[0],
                    y1: g[1],
                    x2: g[2],
                    y2: g[3],
                    gradientUnits: "userSpaceOnUse"
                });
                "radialGradient" === f && v && !q(g.gradientUnits) && (g = x(g, {
                    cx: v[0] - v[2] / 2 + g.cx * v[2],
                    cy: v[1] - v[2] / 2 + g.cy * v[2],
                    r: g.r * v[2],
                    gradientUnits: "userSpaceOnUse"
                }));
                for (u in g) "id" !== u && z.push(u, g[u]);
                for (u in m) z.push(m[u]);
                z = z.join(",");
                h[z] ? a = h[z].attr("id") : (g.id = a = "highcharts-" + jb++, h[z] = k = d.createElement(f).attr(g).add(d.defs), 
                k.stops = [], y(m, function(a) {
                    0 === a[1].indexOf("rgba") ? (e = Ta(a[1]), p = e.get("rgb"), r = e.get("a")) : (p = a[1], 
                    r = 1);
                    a = d.createElement("stop").attr({
                        offset: a[0],
                        "stop-color": p,
                        "stop-opacity": r
                    }).add(k);
                    k.stops.push(a);
                }));
                c.setAttribute(b, "url(" + d.url + "#" + a + ")");
            }
        },
        attr: function(a, b) {
            var c, d, f, h, e = this.element, g = this;
            "string" == typeof a && b !== A && (c = a, a = {}, a[c] = b);
            if ("string" == typeof a) g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e); else {
                for (c in a) d = a[c], h = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c) && (f || (this.symbolAttr(a), 
                f = !0), h = !0), !this.rotation || "x" !== c && "y" !== c || (this.doTransform = !0), 
                h || (this[c + "Setter"] || this._defaultSetter).call(this, d, c, e), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c) && this.updateShadows(c, d);
                this.doTransform && (this.updateTransform(), this.doTransform = !1);
            }
            return g;
        },
        updateShadows: function(a, b) {
            for (var c = this.shadows, d = c.length; d--; ) c[d].setAttribute(a, "height" === a ? D(b - (c[d].cutHeight || 0), 0) : "d" === a ? this.d : b);
        },
        addClass: function(a) {
            var b = this.element, c = w(b, "class") || "";
            -1 === c.indexOf(a) && w(b, "class", c + " " + a);
            return this;
        },
        symbolAttr: function(a) {
            var b = this;
            y("x y r start end width height innerR anchorX anchorY".split(" "), function(c) {
                b[c] = n(a[c], b[c]);
            });
            b.attr({
                d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)
            });
        },
        clip: function(a) {
            return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none");
        },
        crisp: function(a) {
            var b, d, c = {}, e = a.strokeWidth || this.strokeWidth || 0;
            d = E(e) % 2 / 2;
            a.x = X(a.x || this.x || 0) + d;
            a.y = X(a.y || this.y || 0) + d;
            a.width = X((a.width || this.width || 0) - 2 * d);
            a.height = X((a.height || this.height || 0) - 2 * d);
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
                e = this.textWidth = a && a.width && "text" === d.nodeName.toLowerCase() && B(a.width);
                b && (a = l(b, c));
                this.styles = a;
                e && (wa || !oa && this.renderer.forExport) && delete a.width;
                if (Ga && !oa) J(this.element, a); else {
                    b = function(a, b) {
                        return "-" + b.toLowerCase();
                    };
                    for (f in a) g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";";
                    w(d, "style", g);
                }
                e && this.added && this.renderer.buildText(this);
            }
            return this;
        },
        on: function(a, b) {
            this.element["on" + a] = b;
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
            (q(c) || q(d)) && a.push("scale(" + n(c, 1) + " " + n(d, 1) + ")");
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
            a ? (this.alignOptions = a, this.alignByTranslate = b, !c || na(c)) && (this.alignTo = d = c || "renderer", 
            t(f, this), f.push(this), c = null) : (a = this.alignOptions, b = this.alignByTranslate, 
            d = this.alignTo);
            c = n(c, e[d], e);
            d = a.align;
            e = a.verticalAlign;
            f = (c.x || 0) + (a.x || 0);
            g = (c.y || 0) + (a.y || 0);
            ("right" === d || "center" === d) && (f += (c.width - (a.width || 0)) / {
                right: 1,
                center: 2
            }[d]);
            h[b ? "translateX" : "x"] = E(f);
            ("bottom" === e || "middle" === e) && (g += (c.height - (a.height || 0)) / ({
                bottom: 1,
                middle: 2
            }[e] || 1));
            h[b ? "translateY" : "y"] = E(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = !0;
            this.alignAttr = h;
            return this;
        },
        getBBox: function() {
            var c, d, a = this.bBox, b = this.renderer, e = this.rotation;
            c = this.element;
            var f = this.styles, g = e * xb;
            d = this.textStr;
            var h;
            ("" === d || Jb.test(d)) && (h = "num." + d.toString().length + (f ? "|" + f.fontSize + "|" + f.fontFamily : ""));
            h && (a = b.cache[h]);
            if (!a) {
                if (c.namespaceURI === Aa || b.forExport) {
                    try {
                        a = c.getBBox ? l({}, c.getBBox()) : {
                            width: c.offsetWidth,
                            height: c.offsetHeight
                        };
                    } catch (k) {}
                    (!a || 0 > a.width) && (a = {
                        width: 0,
                        height: 0
                    });
                } else a = this.htmlGetBBox();
                b.isSVG && (c = a.width, d = a.height, Ga && f && "11px" === f.fontSize && "16.9" === d.toPrecision(3) && (a.height = d = 14), 
                e && (a.width = qa(d * Da(g)) + qa(c * ua(g)), a.height = qa(d * ua(g)) + qa(c * Da(g))));
                this.bBox = a;
                h && (b.cache[h] = a);
            }
            return a;
        },
        show: function(a) {
            a && this.element.namespaceURI === Aa ? this.element.removeAttribute("visibility") : this.attr({
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
            var g, h, b = this.renderer, c = a || b, d = c.element || b.box, e = this.element, f = this.zIndex;
            a && (this.parentGroup = a);
            this.parentInverted = a && a.inverted;
            void 0 !== this.textStr && b.buildText(this);
            f && (c.handleZ = !0, f = B(f));
            if (c.handleZ) for (a = d.childNodes, g = 0; g < a.length; g++) if (b = a[g], c = w(b, "zIndex"), 
            b !== e && (B(c) > f || !q(f) && q(c))) {
                d.insertBefore(e, b);
                h = !0;
                break;
            }
            h || d.appendChild(e);
            this.added = !0;
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
            mb(a);
            a.clipPath && (a.clipPath = a.clipPath.destroy());
            if (a.stops) {
                for (f = 0; f < a.stops.length; f++) a.stops[f] = a.stops[f].destroy();
                a.stops = null;
            }
            a.safeRemoveChild(b);
            for (c && y(c, function(b) {
                a.safeRemoveChild(b);
            }); d && d.div && 0 === d.div.childNodes.length; ) b = d.parentGroup, a.safeRemoveChild(d.div), 
            delete d.div, d = b;
            a.alignTo && t(a.renderer.alignedObjects, a);
            for (e in a) delete a[e];
            return null;
        },
        shadow: function(a, b, c) {
            var e, f, h, k, m, p, d = [], g = this.element;
            if (a) {
                k = n(a.width, 3);
                m = (a.opacity || .15) / k;
                p = this.parentInverted ? "(-1,-1)" : "(" + n(a.offsetX, 1) + ", " + n(a.offsetY, 1) + ")";
                for (e = 1; k >= e; e++) f = g.cloneNode(0), h = 2 * k + 1 - 2 * e, w(f, {
                    isShadow: "true",
                    stroke: a.color || "black",
                    "stroke-opacity": m * e,
                    "stroke-width": h,
                    transform: "translate" + p,
                    fill: "none"
                }), c && (w(f, "height", D(w(f, "height") - h, 0)), f.cutHeight = h), b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g), 
                d.push(f);
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
            a = n(this[a], this.element ? this.element.getAttribute(a) : null, 0);
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
                for (b = a.length; b--; ) a[b] = B(a[b]) * this["stroke-width"];
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
            b || (b = U.createElementNS(Aa, "title"), this.element.appendChild(b));
            b.textContent = n(a, "").replace(/<[^>]*>/g, "");
        },
        textSetter: function(a) {
            a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this));
        },
        fillSetter: function(a, b, c) {
            "string" == typeof a ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c);
        },
        zIndexSetter: function(a, b, c) {
            c.setAttribute(b, a);
            this[b] = a;
        },
        _defaultSetter: function(a, b, c) {
            c.setAttribute(b, a);
        }
    };
    M.prototype.yGetter = M.prototype.xGetter;
    M.prototype.translateXSetter = M.prototype.translateYSetter = M.prototype.rotationSetter = M.prototype.verticalAlignSetter = M.prototype.scaleXSetter = M.prototype.scaleYSetter = function(a, b) {
        this[b] = a;
        this.doTransform = !0;
    };
    M.prototype["stroke-widthSetter"] = M.prototype.strokeSetter = function(a, b, c) {
        this[b] = a;
        this.stroke && this["stroke-width"] ? (this.strokeWidth = this["stroke-width"], 
        M.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), 
        this.hasStroke = !0) : "stroke-width" === b && 0 === a && this.hasStroke && (c.removeAttribute("stroke"), 
        this.hasStroke = !1);
    };
    var Ma = function() {
        this.init.apply(this, arguments);
    };
    Ma.prototype = {
        Element: M,
        init: function(a, b, c, d, e) {
            var g, f = location;
            d = this.createElement("svg").attr({
                version: "1.1"
            }).css(this.getStyle(d));
            g = d.element;
            a.appendChild(g);
            -1 === a.innerHTML.indexOf("xmlns") && w(g, "xmlns", Aa);
            this.isSVG = !0;
            this.box = g;
            this.boxWrapper = d;
            this.alignedObjects = [];
            this.url = (Pa || ib) && U.getElementsByTagName("base").length ? f.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(U.createTextNode("Created with Highcharts 4.0.4 /Highstock 2.0.4"));
            this.defs = this.createElement("defs").add();
            this.forExport = e;
            this.gradients = {};
            this.cache = {};
            this.setSize(b, c, !1);
            var h;
            Pa && a.getBoundingClientRect && (this.subPixelFix = b = function() {
                J(a, {
                    left: 0,
                    top: 0
                });
                h = a.getBoundingClientRect();
                J(a, {
                    left: Oa(h.left) - h.left + "px",
                    top: Oa(h.top) - h.top + "px"
                });
            }, b(), O(Y, "resize", b));
        },
        getStyle: function(a) {
            return this.style = l({
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
            ka(this.gradients || {});
            this.gradients = null;
            a && (this.defs = a.destroy());
            this.subPixelFix && ba(Y, "resize", this.subPixelFix);
            return this.alignedObjects = null;
        },
        createElement: function(a) {
            var b = new this.Element();
            b.init(this, a);
            return b;
        },
        draw: function() {},
        buildText: function(a) {
            for (var h, k, b = a.element, c = this, d = c.forExport, e = n(a.textStr, "").toString(), f = -1 !== e.indexOf("<"), g = b.childNodes, m = w(b, "x"), p = a.styles, r = a.textWidth, v = p && p.lineHeight, u = p && p.HcTextStroke, z = g.length, Cb = function(a) {
                return v ? B(v) : c.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : p && p.fontSize || c.style.fontSize || 12, a).h;
            }; z--; ) b.removeChild(g[z]);
            f || u || -1 !== e.indexOf(" ") ? (h = /<.*style="([^"]+)".*>/, k = /<.*href="(http[^"]+)".*>/, 
            r && !a.added && this.box.appendChild(b), e = f ? e.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [ e ], 
            "" === e[e.length - 1] && e.pop(), y(e, function(e, f) {
                var g, v = 0;
                e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                g = e.split("|||");
                y(g, function(e) {
                    if ("" !== e || 1 === g.length) {
                        var n, u = {}, z = U.createElementNS(Aa, "tspan");
                        h.test(e) && (n = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), w(z, "style", n));
                        k.test(e) && !d && (w(z, "onclick", 'location.href="' + e.match(k)[1] + '"'), J(z, {
                            cursor: "pointer"
                        }));
                        e = (e.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                        if (" " !== e) {
                            z.appendChild(U.createTextNode(e));
                            v ? u.dx = 0 : f && null !== m && (u.x = m);
                            w(z, u);
                            b.appendChild(z);
                            !v && f && (!oa && d && J(z, {
                                display: "block"
                            }), w(z, "dy", Cb(z)));
                            if (r) {
                                e = e.replace(/([^\^])-/g, "$1- ").split(" ");
                                for (var q, l, u = 1 < g.length || 1 < e.length && "nowrap" !== p.whiteSpace, ma = p.HcHeight, t = [], y = Cb(z), x = 1; u && (e.length || t.length); ) delete a.bBox, 
                                q = a.getBBox(), l = q.width, !oa && c.forExport && (l = c.measureSpanWidth(z.firstChild.data, a.styles)), 
                                (q = l > r) && 1 !== e.length ? (z.removeChild(z.firstChild), t.unshift(e.pop())) : (e = t, 
                                t = [], e.length && (x++, ma && x * y > ma ? (e = [ "..." ], a.attr("title", a.textStr)) : (z = U.createElementNS(Aa, "tspan"), 
                                w(z, {
                                    dy: y,
                                    x: m
                                }), n && w(z, "style", n), b.appendChild(z))), l > r && (r = l)), e.length && z.appendChild(U.createTextNode(e.join(" ").replace(/- /g, "-")));
                            }
                            v++;
                        }
                    }
                });
            })) : b.appendChild(U.createTextNode(e));
        },
        button: function(a, b, c, d, e, f, g, h, k) {
            var r, v, u, z, n, q, m = this.label(a, b, c, k, null, null, null, null, "button"), p = 0;
            a = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            };
            e = x({
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
            u = e.style;
            delete e.style;
            f = x(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [ [ 0, "#FFF" ], [ 1, "#ACF" ] ]
                }
            }, f);
            z = f.style;
            delete f.style;
            g = x(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [ [ 0, "#9BD" ], [ 1, "#CDF" ] ]
                }
            }, g);
            n = g.style;
            delete g.style;
            h = x(e, {
                style: {
                    color: "#CCC"
                }
            }, h);
            q = h.style;
            delete h.style;
            O(m.element, Ga ? "mouseover" : "mouseenter", function() {
                3 !== p && m.attr(f).css(z);
            });
            O(m.element, Ga ? "mouseout" : "mouseleave", function() {
                3 !== p && (r = [ e, f, g ][p], v = [ u, z, n ][p], m.attr(r).css(v));
            });
            m.setState = function(a) {
                (m.state = p = a) ? 2 === a ? m.attr(g).css(n) : 3 === a && m.attr(h).css(q) : m.attr(e).css(u);
            };
            return m.on("click", function() {
                3 !== p && d.call(m);
            }).attr(e).css(l({
                cursor: "default"
            }, u));
        },
        crispLine: function(a, b) {
            a[1] === a[4] && (a[1] = a[4] = E(a[1]) - b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = E(a[2]) + b % 2 / 2);
            return a;
        },
        path: function(a) {
            var b = {
                fill: "none"
            };
            P(a) ? b.d = a : N(a) && l(b, a);
            return this.createElement("path").attr(b);
        },
        circle: function(a, b, c) {
            a = N(a) ? a : {
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
            N(a) && (b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x);
            a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {
                innerR: d || 0,
                start: e || 0,
                end: f || 0
            });
            a.r = c;
            return a;
        },
        rect: function(a, b, c, d, e, f) {
            e = N(a) ? a.r : e;
            var g = this.createElement("rect");
            a = N(a) ? a : a === A ? {} : {
                x: a,
                y: b,
                width: D(c, 0),
                height: D(d, 0)
            };
            f !== A && (a.strokeWidth = f, a = g.crisp(a));
            e && (a.r = e);
            g.rSetter = function(a) {
                w(this.element, {
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
            for (this.boxWrapper[n(c, !0) ? "animate" : "attr"]({
                width: a,
                height: b
            }); e--; ) d[e].align();
        },
        g: function(a) {
            var b = this.createElement("g");
            return q(a) ? b.attr({
                "class": "highcharts-" + a
            }) : b;
        },
        image: function(a, b, c, d, e) {
            var f = {
                preserveAspectRatio: "none"
            };
            1 < arguments.length && l(f, {
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
            var g, m, p, h = this.symbols[a], h = h && h(E(b), E(c), d, e, f), k = /^url\((.*?)\)$/;
            h ? (g = this.path(h), l(g, {
                symbolName: a,
                x: b,
                y: c,
                width: d,
                height: e
            }), f && l(g, f)) : k.test(a) && (p = function(a, b) {
                a.element && (a.attr({
                    width: b[0],
                    height: b[1]
                }), a.alignByTranslate || a.translate(E((d - b[0]) / 2), E((e - b[1]) / 2)));
            }, m = a.match(k)[1], a = zb[m] || f && f.width && f.height && [ f.width, f.height ], 
            g = this.image(m).attr({
                x: b,
                y: c
            }), g.isImg = !0, a ? p(g, a) : (g.attr({
                width: 0,
                height: 0
            }), fa("img", {
                onload: function() {
                    p(g, zb[m] = [ this.width, this.height ]);
                },
                src: m
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
                var f = e.start;
                c = e.r || c || d;
                var g = e.end - .001;
                d = e.innerR;
                var h = e.open, k = ua(f), m = Da(f), p = ua(g), g = Da(g);
                e = e.end - f < va ? 0 : 1;
                return [ "M", a + c * k, b + c * m, "A", c, c, 0, e, 1, a + c * p, b + c * g, h ? "M" : "L", a + d * p, b + d * g, "A", d, d, 0, e, 0, a + d * k, b + d * m, h ? "" : "Z" ];
            },
            callout: function(a, b, c, d, e) {
                var f = S(e && e.r || 0, c, d), g = f + 6, h = e && e.anchorX, k = e && e.anchorY;
                e = E(e.strokeWidth || 0) % 2 / 2;
                a += e;
                b += e;
                e = [ "M", a + f, b, "L", a + c - f, b, "C", a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b ];
                h && h > c && k > b + g && b + d - g > k ? e.splice(13, 3, "L", a + c, k - 6, a + c + 6, k, a + c, k + 6, a + c, b + d - f) : h && 0 > h && k > b + g && b + d - g > k ? e.splice(33, 3, "L", a, k + 6, a - 6, k, a, k - 6, a, b + f) : k && k > d && h > a + g && a + c - g > h ? e.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : k && 0 > k && h > a + g && a + c - g > h && e.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b);
                return e;
            }
        },
        clipRect: function(a, b, c, d) {
            var e = "highcharts-" + jb++, f = this.createElement("clipPath").attr({
                id: e
            }).add(this.defs);
            a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            return a;
        },
        text: function(a, b, c, d) {
            var e = wa || !oa && this.forExport, f = {};
            if (d && !this.forExport) return this.html(a, b, c);
            f.x = Math.round(b || 0);
            c && (f.y = Math.round(c));
            (a || 0 === a) && (f.text = a);
            a = this.createElement("text").attr(f);
            e && a.css({
                position: "absolute"
            });
            d || (a.xSetter = function(a, b, c) {
                var e, v, d = c.getElementsByTagName("tspan"), f = c.getAttribute(b);
                for (v = 0; v < d.length; v++) e = d[v], e.getAttribute(b) === f && e.setAttribute(b, a);
                c.setAttribute(b, a);
            });
            return a;
        },
        fontMetrics: function(a, b) {
            a = a || this.style.fontSize;
            b && Y.getComputedStyle && (b = b.element || b, a = Y.getComputedStyle(b, "").fontSize);
            a = /px/.test(a) ? B(a) : /em/.test(a) ? 12 * parseFloat(a) : 12;
            var c = 24 > a ? a + 4 : E(1.2 * a), d = E(.8 * c);
            return {
                h: c,
                b: d,
                f: a
            };
        },
        label: function(a, b, c, d, e, f, g, h, k) {
            function m() {
                var a, b;
                a = z.element.style;
                ma = (void 0 === I || void 0 === L || u.styles.textAlign) && z.textStr && z.getBBox();
                u.width = (I || ma.width || 0) + 2 * w + G;
                u.height = (L || ma.height || 0) + 2 * w;
                da = w + v.fontMetrics(a && a.fontSize, z).b;
                F && (n || (a = E(-t * w), b = h ? -da : 0, u.box = n = d ? v.symbol(d, a, b, u.width, u.height, ja) : v.rect(a, b, u.width, u.height, 0, ja["stroke-width"]), 
                n.attr("fill", "none").add(u)), n.isImg || n.attr(l({
                    width: E(u.width),
                    height: E(u.height)
                }, ja)), ja = null);
            }
            function p() {
                var c, a = u.styles, a = a && a.textAlign, b = G + w * (1 - t);
                c = h ? 0 : da;
                q(I) && ma && ("center" === a || "right" === a) && (b += {
                    center: .5,
                    right: 1
                }[a] * (I - ma.width));
                (b !== z.x || c !== z.y) && (z.attr("x", b), c !== A && z.attr("y", c));
                z.x = b;
                z.y = c;
            }
            function r(a, b) {
                n ? n.attr(a, b) : ja[a] = b;
            }
            var n, ma, I, L, C, D, da, F, v = this, u = v.g(k), z = v.text("", 0, 0, g).attr({
                zIndex: 1
            }), t = 0, w = 3, G = 0, B = 0, ja = {};
            u.onAdd = function() {
                z.add(u);
                u.attr({
                    text: a || 0 === a ? a : "",
                    x: b,
                    y: c
                });
                n && q(e) && u.attr({
                    anchorX: e,
                    anchorY: f
                });
            };
            u.widthSetter = function(a) {
                I = a;
            };
            u.heightSetter = function(a) {
                L = a;
            };
            u.paddingSetter = function(a) {
                q(a) && a !== w && (w = a, p());
            };
            u.paddingLeftSetter = function(a) {
                q(a) && a !== G && (G = a, p());
            };
            u.alignSetter = function(a) {
                t = {
                    left: 0,
                    center: .5,
                    right: 1
                }[a];
            };
            u.textSetter = function(a) {
                a !== A && z.textSetter(a);
                m();
                p();
            };
            u["stroke-widthSetter"] = function(a, b) {
                a && (F = !0);
                B = a % 2 / 2;
                r(b, a);
            };
            u.strokeSetter = u.fillSetter = u.rSetter = function(a, b) {
                "fill" === b && a && (F = !0);
                r(b, a);
            };
            u.anchorXSetter = function(a, b) {
                e = a;
                r(b, a + B - C);
            };
            u.anchorYSetter = function(a, b) {
                f = a;
                r(b, a - D);
            };
            u.xSetter = function(a) {
                u.x = a;
                t && (a -= t * ((I || ma.width) + w));
                C = E(a);
                u.attr("translateX", C);
            };
            u.ySetter = function(a) {
                D = u.y = E(a);
                u.attr("translateY", D);
            };
            var K = u.css;
            return l(u, {
                css: function(a) {
                    if (a) {
                        var b = {};
                        a = x(a);
                        y(u.textProps, function(c) {
                            a[c] !== A && (b[c] = a[c], delete a[c]);
                        });
                        z.css(b);
                    }
                    return K.call(u, a);
                },
                getBBox: function() {
                    return {
                        width: ma.width + 2 * w,
                        height: ma.height + 2 * w,
                        x: ma.x - w,
                        y: ma.y - w
                    };
                },
                shadow: function(a) {
                    n && n.shadow(a);
                    return u;
                },
                destroy: function() {
                    ba(u.element, "mouseenter");
                    ba(u.element, "mouseleave");
                    z && (z = z.destroy());
                    n && (n = n.destroy());
                    M.prototype.destroy.call(u);
                    u = v = m = p = r = null;
                }
            });
        }
    };
    Sa = Ma;
    l(M.prototype, {
        htmlCss: function(a) {
            var b = this.element;
            (b = a && "SPAN" === b.tagName && a.width) && (delete a.width, this.textWidth = b, 
            this.updateTransform());
            this.styles = l(this.styles, a);
            J(this.element, a);
            return this;
        },
        htmlGetBBox: function() {
            var a = this.element, b = this.bBox;
            b || ("text" === a.nodeName && (a.style.position = "absolute"), b = this.bBox = {
                x: a.offsetLeft,
                y: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight
            });
            return b;
        },
        htmlUpdateTransform: function() {
            if (this.added) {
                var a = this.renderer, b = this.element, c = this.translateX || 0, d = this.translateY || 0, e = this.x || 0, f = this.y || 0, g = this.textAlign || "left", h = {
                    left: 0,
                    center: .5,
                    right: 1
                }[g], k = this.shadows;
                J(b, {
                    marginLeft: c,
                    marginTop: d
                });
                k && y(k, function(a) {
                    J(a, {
                        marginLeft: c + 1,
                        marginTop: d + 1
                    });
                });
                this.inverted && y(b.childNodes, function(c) {
                    a.invertChild(c, b);
                });
                if ("SPAN" === b.tagName) {
                    var p, m = this.rotation, r = B(this.textWidth), v = [ m, g, b.innerHTML, this.textWidth ].join();
                    v !== this.cTT && (p = a.fontMetrics(b.style.fontSize).b, q(m) && this.setSpanRotation(m, h, p), 
                    k = n(this.elemWidth, b.offsetWidth), k > r && /[ \-]/.test(b.textContent || b.innerText) && (J(b, {
                        width: r + "px",
                        display: "block",
                        whiteSpace: "normal"
                    }), k = r), this.getSpanCorrection(k, p, h, m, g));
                    J(b, {
                        left: e + (this.xCorr || 0) + "px",
                        top: f + (this.yCorr || 0) + "px"
                    });
                    ib && (p = b.offsetHeight);
                    this.cTT = v;
                }
            } else this.alignOnAdd = !0;
        },
        setSpanRotation: function(a, b, c) {
            var d = {}, e = Ga ? "-ms-transform" : ib ? "-webkit-transform" : Pa ? "MozTransform" : yb ? "-o-transform" : "";
            d[e] = d.transform = "rotate(" + a + "deg)";
            d[e + (Pa ? "Origin" : "-origin")] = d.transformOrigin = 100 * b + "% " + c + "px";
            J(this.element, d);
        },
        getSpanCorrection: function(a, b, c) {
            this.xCorr = -a * c;
            this.yCorr = -b;
        }
    });
    l(Ma.prototype, {
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
                x: E(b),
                y: E(c)
            }).css({
                position: "absolute",
                whiteSpace: "nowrap",
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize
            });
            d.css = d.htmlCss;
            f.isSVG && (d.add = function(a) {
                var b, c = f.box.parentNode, m = [];
                if (this.parentGroup = a) {
                    if (b = a.div, !b) {
                        for (;a; ) m.push(a), a = a.parentGroup;
                        y(m.reverse(), function(a) {
                            var d;
                            b = a.div = a.div || fa("div", {
                                className: w(a.element, "class")
                            }, {
                                position: "absolute",
                                left: (a.translateX || 0) + "px",
                                top: (a.translateY || 0) + "px"
                            }, b || c);
                            d = b.style;
                            l(a, {
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
    var ob, Db;
    wa && (ca.CanVGRenderer = ob = function() {
        Aa = "http://www.w3.org/1999/xhtml";
    }, ob.prototype.symbols = {}, Db = function() {
        function a() {
            var d, a = b.length;
            for (d = 0; a > d; d++) b[d]();
            b = [];
        }
        var b = [];
        return {
            push: function(c, d) {
                0 === b.length && Kb(d, a);
                b.push(c);
            }
        };
    }(), Sa = ob);
    za.prototype = {
        addLabel: function() {
            var v, a = this.axis, b = a.options, c = a.chart, d = a.horiz, e = a.categories, f = a.names, g = this.pos, h = b.labels, k = h.rotation, m = a.tickPositions, d = d && e && !h.step && !h.staggerLines && !h.rotation && c.plotWidth / m.length || !d && (c.margin[3] || .33 * c.chartWidth), p = g === m[0], r = g === m[m.length - 1], f = e ? n(e[g], f[g], g) : g, e = this.label, u = m.info;
            a.isDatetimeAxis && u && (v = b.dateTimeLabelFormats[u.higherRanks[g] || u.unitName]);
            this.isFirst = p;
            this.isLast = r;
            b = a.labelFormatter.call({
                axis: a,
                chart: c,
                isFirst: p,
                isLast: r,
                dateTimeLabelFormat: v,
                value: a.isLog ? ya(F(f)) : f
            });
            g = d && {
                width: D(1, E(d - 2 * (h.padding || 10))) + "px"
            };
            q(e) ? e && e.attr({
                text: b
            }).css(g) : (v = {
                align: a.labelAlign
            }, Q(k) && (v.rotation = k), d && h.ellipsis && (g.HcHeight = a.len / m.length), 
            this.label = e = q(b) && h.enabled ? c.renderer.text(b, 0, 0, h.useHTML).attr(v).css(l(g, h.style)).add(a.labelGroup) : null, 
            a.tickBaseline = c.renderer.fontMetrics(h.style.fontSize, e).b, k && 2 === a.side && (a.tickBaseline *= ua(k * xb)));
            this.yOffset = e ? n(h.y, a.tickBaseline + (2 === a.side ? 8 : -(e.getBBox().height / 2))) : 0;
        },
        getLabelSize: function() {
            var a = this.label, b = this.axis;
            return a ? a.getBBox()[b.horiz ? "height" : "width"] : 0;
        },
        getLabelSides: function() {
            var a = this.label.getBBox(), b = this.axis, c = b.horiz, d = b.options.labels, a = c ? a.width : a.height, b = c ? d.x - a * {
                left: 0,
                center: .5,
                right: 1
            }[b.labelAlign] : 0;
            return [ b, c ? a + b : a ];
        },
        handleOverflow: function(a, b) {
            var r, v, u, c = !0, d = this.axis, e = this.isFirst, f = this.isLast, g = d.horiz ? b.x : b.y, h = d.reversed, k = d.tickPositions, m = this.getLabelSides(), p = m[0], m = m[1], z = this.label.line;
            r = z || 0;
            v = d.labelEdge;
            u = d.justifyLabels && (e || f);
            v[r] === A || g + p > v[r] ? v[r] = g + m : u || (c = !1);
            if (u) {
                r = (v = d.justifyToPlot) ? d.pos : 0;
                v = v ? r + d.len : d.chart.chartWidth;
                do a += e ? 1 : -1, u = d.ticks[k[a]]; while (k[a] && (!u || !u.label || u.label.line !== z));
                d = u && u.label.xy && u.label.xy.x + u.getLabelSides()[e ? 0 : 1];
                e && !h || f && h ? r > g + p && (g = r - p, u && g + m > d && (c = !1)) : g + m > v && (g = v - m, 
                u && d > g + p && (c = !1));
                b.x = g;
            }
            return c;
        },
        getPosition: function(a, b, c, d) {
            var e = this.axis, f = e.chart, g = d && f.oldChartHeight || f.chartHeight;
            return {
                x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0),
                y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB
            };
        },
        getLabelPosition: function(a, b, c, d, e, f, g, h) {
            var k = this.axis, m = k.transA, p = k.reversed, r = k.staggerLines;
            a = a + e.x - (f && d ? f * m * (p ? -1 : 1) : 0);
            b = b + this.yOffset - (f && !d ? f * m * (p ? 1 : -1) : 0);
            r && (c.line = g / (h || 1) % r, b += k.labelOffset / r * c.line);
            return {
                x: a,
                y: b
            };
        },
        getMarkPath: function(a, b, c, d, e, f) {
            return f.crispLine([ "M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0) ], d);
        },
        render: function(a, b, c) {
            var d = this.axis, e = d.options, f = d.chart.renderer, g = d.horiz, h = this.type, k = this.label, m = this.pos, p = e.labels, r = this.gridLine, v = h ? h + "Grid" : "grid", u = h ? h + "Tick" : "tick", z = e[v + "LineWidth"], q = e[v + "LineColor"], l = e[v + "LineDashStyle"], t = e[u + "Length"], v = e[u + "Width"] || 0, w = e[u + "Color"], y = e[u + "Position"], u = this.mark, G = p.step, x = !0, I = d.tickmarkOffset, L = this.getPosition(g, m, I, b), C = L.x, L = L.y, ja = g && C === d.pos + d.len || !g && L === d.pos ? -1 : 1;
            c = n(c, 1);
            this.isActive = !0;
            z && (m = d.getPlotLinePath(m + I, z * ja, b, !0), r === A && (r = {
                stroke: q,
                "stroke-width": z
            }, l && (r.dashstyle = l), h || (r.zIndex = 1), b && (r.opacity = 0), this.gridLine = r = z ? f.path(m).attr(r).add(d.gridGroup) : null), 
            !b && r && m) && r[this.isNew ? "attr" : "animate"]({
                d: m,
                opacity: c
            });
            v && t && ("inside" === y && (t = -t), d.opposite && (t = -t), h = this.getMarkPath(C, L, t, v * ja, g, f), 
            u ? u.animate({
                d: h,
                opacity: c
            }) : this.mark = f.path(h).attr({
                stroke: w,
                "stroke-width": v,
                opacity: c
            }).add(d.axisGroup));
            k && !isNaN(C) && (k.xy = L = this.getLabelPosition(C, L, k, g, p, I, a, G), this.isFirst && !this.isLast && !n(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !n(e.showLastLabel, 1) ? x = !1 : d.isRadial || p.step || p.rotation || b || 0 === c || (x = this.handleOverflow(a, L)), 
            G && a % G && (x = !1), x && !isNaN(L.y) ? (L.opacity = c, k[this.isNew ? "attr" : "animate"](L), 
            this.isNew = !1) : k.attr("y", -9999));
        },
        destroy: function() {
            ka(this, this.axis);
        }
    };
    ca.PlotLineOrBand = function(a, b) {
        this.axis = a;
        b && (this.options = b, this.id = b.id);
    };
    ca.PlotLineOrBand.prototype = {
        render: function() {
            var n, a = this, b = a.axis, c = b.horiz, d = (b.pointRange || 0) / 2, e = a.options, f = e.label, g = a.label, h = e.width, k = e.to, m = e.from, p = q(m) && q(k), r = e.value, v = e.dashStyle, u = a.svgElem, z = [], l = e.color, t = e.zIndex, w = e.events, y = {}, G = b.chart.renderer;
            b.isLog && (m = ga(m), k = ga(k), r = ga(r));
            if (h) z = b.getPlotLinePath(r, h), y = {
                stroke: l,
                "stroke-width": h
            }, v && (y.dashstyle = v); else {
                if (!p) return;
                m = D(m, b.min - d), k = S(k, b.max + d), z = b.getPlotBandPath(m, k, e), l && (y.fill = l), 
                e.borderWidth && (y.stroke = e.borderColor, y["stroke-width"] = e.borderWidth);
            }
            q(t) && (y.zIndex = t);
            if (u) z ? u.animate({
                d: z
            }, null, u.onGetPath) : (u.hide(), u.onGetPath = function() {
                u.show();
            }, g && (a.label = g = g.destroy())); else if (z && z.length && (a.svgElem = u = G.path(z).attr(y).add(), 
            w)) for (n in d = function(b) {
                u.on(b, function(c) {
                    w[b].apply(a, [ c ]);
                });
            }, w) d(n);
            f && q(f.text) && z && z.length && 0 < b.width && 0 < b.height ? (f = x({
                align: c && p && "center",
                x: c ? !p && 4 : 10,
                verticalAlign: !c && p && "middle",
                y: c ? p ? 16 : 10 : p ? 6 : -4,
                rotation: c && !p && 90
            }, f), g || (y = {
                align: f.textAlign || f.align,
                rotation: f.rotation
            }, q(t) && (y.zIndex = t), a.label = g = G.text(f.text, 0, 0, f.useHTML).attr(y).css(f.style).add()), 
            b = [ z[1], z[4], p ? z[6] : z[1] ], p = [ z[2], z[5], p ? z[7] : z[2] ], z = aa(b), 
            c = aa(p), g.align(f, !1, {
                x: z,
                y: c,
                width: Ba(b) - z,
                height: Ba(p) - c
            }), g.show()) : g && g.hide();
            return a;
        },
        destroy: function() {
            t(this.axis.plotLinesAndBands, this);
            delete this.axis;
            ka(this);
        }
    };
    K.prototype = {
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
            gridLineColor: "#C0C0C0",
            labels: nb,
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
                    return T(this.total, -1);
                },
                style: nb.style
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
                x: 0,
                y: null
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
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
            this.zoomEnabled = !1 !== d.zoomEnabled;
            this.categories = d.categories || "category" === e;
            this.names = [];
            this.isLog = "logarithmic" === e;
            this.isDatetimeAxis = "datetime" === e;
            this.isLinked = q(d.linkedTo);
            this.tickmarkOffset = this.categories && "between" === d.tickmarkPlacement && 1 === n(d.tickInterval, 1) ? .5 : 0;
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
            this.crosshair = n(d.crosshair, xa(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);
            var f, d = this.options.events;
            -1 === $a(this, a.axes) && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), 
            a[this.coll].push(this));
            this.series = this.series || [];
            a.inverted && c && this.reversed === A && (this.reversed = !0);
            this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (f in d) O(this, f, d[f]);
            this.isLog && (this.val2lin = ga, this.lin2val = F);
        },
        setOptions: function(a) {
            this.options = x(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [ this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions ][this.side], x(R[this.coll], a));
        },
        defaultLabelFormatter: function() {
            var g, a = this.axis, b = this.value, c = a.categories, d = this.dateTimeLabelFormat, e = R.lang.numericSymbols, f = e && e.length, h = a.options.labels.format, a = a.isLog ? b : a.tickInterval;
            if (h) g = I(h, this); else if (c) g = b; else if (d) g = ta(d, b); else if (f && a >= 1e3) for (;f-- && g === A; ) c = Math.pow(1e3, f + 1), 
            a >= c && null !== e[f] && (g = T(b / c, -1) + e[f]);
            g === A && (g = 1e4 <= qa(b) ? T(b, 0) : T(b, -1, A, ""));
            return g;
        },
        getSeriesExtremes: function() {
            var a = this, b = a.chart;
            a.hasVisibleSeries = !1;
            a.dataMin = a.dataMax = a.ignoreMinPadding = a.ignoreMaxPadding = null;
            a.buildStacks && a.buildStacks();
            y(a.series, function(c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d;
                    d = c.options.threshold;
                    var e;
                    a.hasVisibleSeries = !0;
                    a.isLog && 0 >= d && (d = null);
                    a.isXAxis ? (d = c.xData, d.length && (a.dataMin = S(n(a.dataMin, d[0]), aa(d)), 
                    a.dataMax = D(n(a.dataMax, d[0]), Ba(d)))) : (c.getExtremes(), e = c.dataMax, c = c.dataMin, 
                    q(c) && q(e) && (a.dataMin = S(n(a.dataMin, c), c), a.dataMax = D(n(a.dataMax, e), e)), 
                    q(d) && (a.dataMin >= d ? (a.dataMin = d, a.ignoreMinPadding = !0) : a.dataMax < d && (a.dataMax = d, 
                    a.ignoreMaxPadding = !0)));
                }
            });
        },
        translate: function(a, b, c, d, e, f) {
            var g = 1, h = 0, k = d ? this.oldTransA : this.transA;
            d = d ? this.oldMin : this.min;
            var m = this.minPixelPadding;
            e = (this.options.ordinal || this.isLog && e) && this.lin2val;
            k || (k = this.transA);
            c && (g *= -1, h = this.len);
            this.reversed && (g *= -1, h -= g * (this.sector || this.len));
            b ? (a = a * g + h - m, a = a / k + d, e && (a = this.lin2val(a))) : (e && (a = this.val2lin(a)), 
            "between" === f && (f = .5), a = g * (a - d) * k + h + g * m + (Q(f) ? k * f * this.pointRange : 0));
            return a;
        },
        toPixels: function(a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos);
        },
        toValue: function(a, b) {
            return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0);
        },
        getPlotLinePath: function(a, b, c, d, e) {
            var k, m, v, f = this.chart, g = this.left, h = this.top, p = c && f.oldChartHeight || f.chartHeight, r = c && f.oldChartWidth || f.chartWidth;
            k = this.transB;
            e = n(e, this.translate(a, null, null, c));
            a = c = E(e + k);
            k = m = E(p - e - k);
            isNaN(e) ? v = !0 : this.horiz ? (k = h, m = p - this.bottom, g > a || a > g + this.width) && (v = !0) : (a = g, 
            c = r - this.right, h > k || k > h + this.height) && (v = !0);
            return v && !d ? null : f.renderer.crispLine([ "M", a, k, "L", c, m ], b || 1);
        },
        getLinearTickPositions: function(a, b, c) {
            var d, e = ya(X(b / a) * a), f = ya(Oa(c / a) * a), g = [];
            if (b === c && Q(b)) return [ b ];
            for (b = e; f >= b; ) {
                g.push(b);
                b = ya(b + a);
                if (b === d) break;
                d = b;
            }
            return g;
        },
        getMinorTickPositions: function() {
            var e, a = this.options, b = this.tickPositions, c = this.minorTickInterval, d = [];
            if (this.isLog) for (e = b.length, a = 1; e > a; a++) d = d.concat(this.getLogTickPositions(c, b[a - 1], b[a], !0)); else if (this.isDatetimeAxis && "auto" === a.minorTickInterval) d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), this.min, this.max, a.startOfWeek)), 
            d[0] < this.min && d.shift(); else for (b = this.min + (b[0] - this.min) % c; b <= this.max; b += c) d.push(b);
            return d;
        },
        adjustForMinRange: function() {
            var d, f, g, h, k, m, a = this.options, b = this.min, c = this.max, e = this.dataMax - this.dataMin >= this.minRange;
            this.isXAxis && this.minRange === A && !this.isLog && (q(a.min) || q(a.max) ? this.minRange = null : (y(this.series, function(a) {
                k = a.xData;
                for (g = m = a.xIncrement ? 1 : k.length - 1; g > 0; g--) (h = k[g] - k[g - 1], 
                f === A || f > h) && (f = h);
            }), this.minRange = S(5 * f, this.dataMax - this.dataMin)));
            if (c - b < this.minRange) {
                var p = this.minRange;
                d = (p - c + b) / 2;
                d = [ b - d, n(a.min, b - d) ];
                e && (d[2] = this.dataMin);
                b = Ba(d);
                c = [ b + p, n(a.max, b + p) ];
                e && (c[2] = this.dataMax);
                c = aa(c);
                p > c - b && (d[0] = c - p, d[1] = n(a.min, c - p), b = Ba(d));
            }
            this.min = b;
            this.max = c;
        },
        setAxisTranslation: function(a) {
            var e, b = this, c = b.max - b.min, d = b.axisPointRange || 0, f = 0, g = 0, h = b.linkedParent, k = !!b.categories, m = b.transA;
            (b.isXAxis || k || d) && (h ? (f = h.minPointOffset, g = h.pointRangePadding) : y(b.series, function(a) {
                var h = k ? 1 : b.isXAxis ? a.pointRange : b.axisPointRange || 0, m = a.options.pointPlacement, u = a.closestPointRange;
                h > c && (h = 0);
                d = D(d, h);
                f = D(f, na(m) ? 0 : h / 2);
                g = D(g, "on" === m ? 0 : h);
                !a.noSharedTooltip && q(u) && (e = q(e) ? S(e, u) : u);
            }), h = b.ordinalSlope && e ? b.ordinalSlope / e : 1, b.minPointOffset = f *= h, 
            b.pointRangePadding = g *= h, b.pointRange = S(d, c), b.closestPointRange = e);
            a && (b.oldTransA = m);
            b.translationSlope = b.transA = m = b.len / (c + g || 1);
            b.transB = b.horiz ? b.left : b.bottom;
            b.minPixelPadding = m * f;
        },
        setTickPositions: function(a) {
            var t, b = this, c = b.chart, d = b.options, e = d.startOnTick, f = d.endOnTick, g = b.isLog, h = b.isDatetimeAxis, k = b.isXAxis, m = b.isLinked, p = b.options.tickPositioner, r = d.maxPadding, v = d.minPadding, u = d.tickInterval, z = d.minTickInterval, l = d.tickPixelInterval, w = b.categories;
            m ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = n(c.min, c.dataMin), 
            b.max = n(c.max, c.dataMax), d.type !== b.linkedParent.options.type && la(11, 1)) : (b.min = n(b.userMin, d.min, b.dataMin), 
            b.max = n(b.userMax, d.max, b.dataMax));
            g && (!a && 0 >= S(b.min, n(b.dataMin, b.min)) && la(10, 1), b.min = ya(ga(b.min)), 
            b.max = ya(ga(b.max)));
            b.range && q(b.max) && (b.userMin = b.min = D(b.min, b.max - b.range), b.userMax = b.max, 
            b.range = null);
            b.beforePadding && b.beforePadding();
            b.adjustForMinRange();
            !(w || b.axisPointRange || b.usePercentage || m) && q(b.min) && q(b.max) && (c = b.max - b.min) && (q(d.min) || q(b.userMin) || !v || !(0 > b.dataMin) && b.ignoreMinPadding || (b.min -= c * v), 
            q(d.max) || q(b.userMax) || !r || !(0 < b.dataMax) && b.ignoreMaxPadding || (b.max += c * r));
            Q(d.floor) && (b.min = D(b.min, d.floor));
            Q(d.ceiling) && (b.max = S(b.max, d.ceiling));
            b.min === b.max || void 0 === b.min || void 0 === b.max ? b.tickInterval = 1 : m && !u && l === b.linkedParent.options.tickPixelInterval ? b.tickInterval = b.linkedParent.tickInterval : (b.tickInterval = n(u, w ? 1 : (b.max - b.min) * l / D(b.len, l)), 
            !q(u) && b.len < l && !this.isRadial && !this.isLog && !w && e && f && (t = !0, 
            b.tickInterval /= 4));
            k && !a && y(b.series, function(a) {
                a.processData(b.min !== b.oldMin || b.max !== b.oldMax);
            });
            b.setAxisTranslation(!0);
            b.beforeSetTickPositions && b.beforeSetTickPositions();
            b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval));
            b.pointRange && (b.tickInterval = D(b.pointRange, b.tickInterval));
            !u && b.tickInterval < z && (b.tickInterval = z);
            h || g || u || (b.tickInterval = da(b.tickInterval, null, W.pow(10, X(W.log(b.tickInterval) / W.LN10)), n(d.allowDecimals, !(1 < b.tickInterval && 5 > b.tickInterval && 1e3 < b.max && 9999 > b.max))));
            b.minorTickInterval = "auto" === d.minorTickInterval && b.tickInterval ? b.tickInterval / 5 : d.minorTickInterval;
            b.tickPositions = a = d.tickPositions ? [].concat(d.tickPositions) : p && p.apply(b, [ b.min, b.max ]);
            a || (!b.ordinalPositions && (b.max - b.min) / b.tickInterval > D(2 * b.len, 200) && la(19, !0), 
            a = h ? b.getTimeTicks(b.normalizeTimeTickInterval(b.tickInterval, d.units), b.min, b.max, d.startOfWeek, b.ordinalPositions, b.closestPointRange, !0) : g ? b.getLogTickPositions(b.tickInterval, b.min, b.max) : b.getLinearTickPositions(b.tickInterval, b.min, b.max), 
            t && a.splice(1, a.length - 2), b.tickPositions = a);
            m || (d = a[0], g = a[a.length - 1], h = b.minPointOffset || 0, e ? b.min = d : b.min - h > d && a.shift(), 
            f ? b.max = g : b.max + h < g && a.pop(), 0 === a.length && q(d) && a.push((g + d) / 2), 
            1 === a.length && (e = 1e13 < qa(b.max) ? 1 : .001, b.min -= e, b.max += e));
        },
        setMaxTicks: function() {
            var a = this.chart, b = a.maxTicks || {}, c = this.tickPositions, d = this._maxTicksKey = [ this.coll, this.pos, this.len ].join("-");
            !this.isLinked && !this.isDatetimeAxis && c && c.length > (b[d] || 0) && !1 !== this.options.alignTicks && (b[d] = c.length);
            a.maxTicks = b;
        },
        adjustTickAmount: function() {
            var a = this._maxTicksKey, b = this.tickPositions, c = this.chart.maxTicks;
            if (c && c[a] && !this.isDatetimeAxis && !this.categories && !this.isLinked && !1 !== this.options.alignTicks && this.min !== A) {
                var d = this.tickAmount, e = b.length;
                this.tickAmount = a = c[a];
                if (a > e) {
                    for (;b.length < a; ) b.push(ya(b[b.length - 1] + this.tickInterval));
                    this.transA *= (e - 1) / (a - 1);
                    this.max = b[b.length - 1];
                }
                q(d) && a !== d && (this.isDirty = !0);
            }
        },
        setScale: function() {
            var b, c, d, e, a = this.stacks;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            e = this.len !== this.oldAxisLength;
            y(this.series, function(a) {
                (a.isDirtyData || a.isDirty || a.xAxis.isDirty) && (d = !0);
            });
            if (e || d || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) {
                if (!this.isXAxis) for (b in a) for (c in a[b]) a[b][c].total = null, a[b][c].cum = 0;
                this.forceRedraw = !1;
                this.getSeriesExtremes();
                this.setTickPositions();
                this.oldUserMin = this.userMin;
                this.oldUserMax = this.userMax;
                this.isDirty || (this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax);
            } else if (!this.isXAxis) for (b in this.oldStacks && (a = this.stacks = this.oldStacks), 
            a) for (c in a[b]) a[b][c].cum = a[b][c].total;
            this.setMaxTicks();
        },
        setExtremes: function(a, b, c, d, e) {
            var f = this, g = f.chart;
            c = n(c, !0);
            e = l(e, {
                min: a,
                max: b
            });
            ha(f, "setExtremes", e, function() {
                f.userMin = a;
                f.userMax = b;
                f.eventArgs = e;
                f.isDirtyExtremes = !0;
                c && g.redraw(d);
            });
        },
        zoom: function(a, b) {
            var c = this.dataMin, d = this.dataMax, e = this.options;
            this.allowZoomOutside || (q(c) && a <= S(c, n(e.min, c)) && (a = A), q(d) && b >= D(d, n(e.max, d)) && (b = A));
            this.displayBtn = a !== A || b !== A;
            this.setExtremes(a, b, !1, A, {
                trigger: "zoom"
            });
            return !0;
        },
        setAxisSize: function() {
            var a = this.chart, b = this.options, c = b.offsetLeft || 0, d = this.horiz, e = n(b.width, a.plotWidth - c + (b.offsetRight || 0)), f = n(b.height, a.plotHeight), g = n(b.top, a.plotTop), b = n(b.left, a.plotLeft + c), c = /%$/;
            c.test(f) && (f = parseInt(f, 10) / 100 * a.plotHeight);
            c.test(g) && (g = parseInt(g, 10) / 100 * a.plotHeight + a.plotTop);
            this.left = b;
            this.top = g;
            this.width = e;
            this.height = f;
            this.bottom = a.chartHeight - f - g;
            this.right = a.chartWidth - e - b;
            this.len = D(d ? e : f, 0);
            this.pos = d ? b : g;
        },
        getExtremes: function() {
            var a = this.isLog;
            return {
                min: a ? ya(F(this.min)) : this.min,
                max: a ? ya(F(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            };
        },
        getThreshold: function(a) {
            var b = this.isLog, c = b ? F(this.min) : this.min, b = b ? F(this.max) : this.max;
            c > a || null === a ? a = c : a > b && (a = b);
            return this.translate(a, 0, 1, 0, 1);
        },
        autoLabelAlign: function(a) {
            a = (n(a, 0) - 90 * this.side + 720) % 360;
            return a > 15 && 165 > a ? "right" : a > 195 && 345 > a ? "left" : "center";
        },
        getOffset: function() {
            var m, p, v, x, C, B, da, ja, E, a = this, b = a.chart, c = b.renderer, d = a.options, e = a.tickPositions, f = a.ticks, g = a.horiz, h = a.side, k = b.inverted ? [ 1, 0, 3, 2 ][h] : h, r = 0, u = 0, z = d.title, l = d.labels, t = 0, w = b.axisOffset, b = b.clipOffset, G = [ -1, 1, 1, -1 ][h], I = 1, L = n(l.maxStaggerLines, 5);
            a.hasData = m = a.hasVisibleSeries || q(a.min) && q(a.max) && !!e;
            a.showAxis = p = m || n(d.showEmpty, !0);
            a.staggerLines = a.horiz && l.staggerLines;
            a.axisGroup || (a.gridGroup = c.g("grid").attr({
                zIndex: d.gridZIndex || 1
            }).add(), a.axisGroup = c.g("axis").attr({
                zIndex: d.zIndex || 2
            }).add(), a.labelGroup = c.g("axis-labels").attr({
                zIndex: l.zIndex || 7
            }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels").add());
            if (m || a.isLinked) {
                a.labelAlign = n(l.align || a.autoLabelAlign(l.rotation));
                y(e, function(b) {
                    f[b] ? f[b].addLabel() : f[b] = new za(a, b);
                });
                if (a.horiz && !a.staggerLines && L && !l.rotation) {
                    for (m = a.reversed ? [].concat(e).reverse() : e; L > I; ) {
                        C = [];
                        B = !1;
                        for (x = 0; x < m.length; x++) da = m[x], ja = (ja = f[da].label && f[da].label.getBBox()) ? ja.width : 0, 
                        E = x % I, ja && (da = a.translate(da), C[E] !== A && da < C[E] && (B = !0), C[E] = da + ja);
                        if (!B) break;
                        I++;
                    }
                    I > 1 && (a.staggerLines = I);
                }
                y(e, function(b) {
                    (0 === h || 2 === h || {
                        1: "left",
                        3: "right"
                    }[h] === a.labelAlign) && (t = D(f[b].getLabelSize(), t));
                });
                a.staggerLines && (t *= a.staggerLines, a.labelOffset = t);
            } else for (x in f) f[x].destroy(), delete f[x];
            z && z.text && !1 !== z.enabled && (a.axisTitle || (a.axisTitle = c.text(z.text, 0, 0, z.useHTML).attr({
                zIndex: 7,
                rotation: z.rotation || 0,
                align: z.textAlign || {
                    low: "left",
                    middle: "center",
                    high: "right"
                }[z.align]
            }).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(z.style).add(a.axisGroup), 
            a.axisTitle.isNew = !0), p && (r = a.axisTitle.getBBox()[g ? "height" : "width"], 
            v = z.offset, u = q(v) ? 0 : n(z.margin, g ? 5 : 10)), a.axisTitle[p ? "show" : "hide"]());
            a.offset = G * n(d.offset, w[h]);
            c = 2 === h ? a.tickBaseline : 0;
            g = t + u + (t && G * (g ? n(l.y, a.tickBaseline + 8) : l.x) - c);
            a.axisTitleMargin = n(v, g);
            w[h] = D(w[h], a.axisTitleMargin + r + G * a.offset, g);
            b[k] = D(b[k], 2 * X(d.lineWidth / 2));
        },
        getLinePath: function(a) {
            var b = this.chart, c = this.opposite, d = this.offset, e = this.horiz, f = this.left + (c ? this.width : 0) + d, d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
            c && (a *= -1);
            return b.renderer.crispLine([ "M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom ], a);
        },
        getTitlePosition: function() {
            var a = this.horiz, b = this.left, c = this.top, d = this.len, e = this.options.title, f = a ? b : c, g = this.opposite, h = this.offset, k = B(e.style.fontSize || 12), d = {
                low: f + (a ? 0 : d),
                middle: f + d / 2,
                high: f + (a ? d : 0)
            }[e.align], b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? k : 0);
            return {
                x: a ? d : b + (g ? this.width : 0) + h + (e.x || 0),
                y: a ? b - (g ? this.height : 0) + h : d + (e.y || 0)
            };
        },
        render: function() {
            var m, L, B, a = this, b = a.horiz, c = a.reversed, d = a.chart, e = d.renderer, f = a.options, g = a.isLog, h = a.isLinked, k = a.tickPositions, p = a.axisTitle, r = a.ticks, v = a.minorTicks, u = a.alternateBands, n = f.stackLabels, l = f.alternateGridColor, t = a.tickmarkOffset, w = f.lineWidth, x = d.hasRendered && q(a.oldMin) && !isNaN(a.oldMin), G = a.hasData, I = a.showAxis, C = f.labels.overflow, D = a.justifyLabels = b && !1 !== C;
            a.labelEdge.length = 0;
            a.justifyToPlot = "justify" === C;
            y([ r, v, u ], function(a) {
                for (var b in a) a[b].isActive = !1;
            });
            (G || h) && (a.minorTickInterval && !a.categories && y(a.getMinorTickPositions(), function(b) {
                v[b] || (v[b] = new za(a, b, "minor"));
                x && v[b].isNew && v[b].render(null, !0);
                v[b].render(null, !1, 1);
            }), k.length && (m = k.slice(), (b && c || !b && !c) && m.reverse(), D && (m = m.slice(1).concat([ m[0] ])), 
            y(m, function(b, c) {
                D && (c = c === m.length - 1 ? 0 : c + 1);
                (!h || b >= a.min && b <= a.max) && (r[b] || (r[b] = new za(a, b)), x && r[b].isNew && r[b].render(c, !0, .1), 
                r[b].render(c));
            }), t && 0 === a.min && (r[-1] || (r[-1] = new za(a, -1, null, !0)), r[-1].render(-1))), 
            l && y(k, function(b, c) {
                0 === c % 2 && b < a.max && (u[b] || (u[b] = new ca.PlotLineOrBand(a)), L = b + t, 
                B = k[c + 1] !== A ? k[c + 1] + t : a.max, u[b].options = {
                    from: g ? F(L) : L,
                    to: g ? F(B) : B,
                    color: l
                }, u[b].render(), u[b].isActive = !0);
            }), a._addedPlotLB || (y((f.plotLines || []).concat(f.plotBands || []), function(b) {
                a.addPlotBandOrLine(b);
            }), a._addedPlotLB = !0));
            y([ r, v, u ], function(a) {
                var b, c, e = [], f = pa ? pa.duration || 500 : 0, g = function() {
                    for (c = e.length; c--; ) a[e[c]] && !a[e[c]].isActive && (a[e[c]].destroy(), delete a[e[c]]);
                };
                for (b in a) a[b].isActive || (a[b].render(b, !1, 0), a[b].isActive = !1, e.push(b));
                a !== u && d.hasRendered && f ? f && setTimeout(g, f) : g();
            });
            w && (b = a.getLinePath(w), a.axisLine ? a.axisLine.animate({
                d: b
            }) : a.axisLine = e.path(b).attr({
                stroke: f.lineColor,
                "stroke-width": w,
                zIndex: 7
            }).add(a.axisGroup), a.axisLine[I ? "show" : "hide"]());
            p && I && (p[p.isNew ? "attr" : "animate"](a.getTitlePosition()), p.isNew = !1);
            n && n.enabled && a.renderStackTotals();
            a.isDirty = !1;
        },
        redraw: function() {
            this.render();
            y(this.plotLinesAndBands, function(a) {
                a.render();
            });
            y(this.series, function(a) {
                a.isDirty = !0;
            });
        },
        destroy: function(a) {
            var d, b = this, c = b.stacks, e = b.plotLinesAndBands;
            a || ba(b);
            for (d in c) ka(c[d]), c[d] = null;
            y([ b.ticks, b.minorTicks, b.alternateBands ], function(a) {
                ka(a);
            });
            for (a = e.length; a--; ) e[a].destroy();
            y("stackTotalGroup axisLine axisTitle axisGroup cross gridGroup labelGroup".split(" "), function(a) {
                b[a] && (b[a] = b[a].destroy());
            });
            this.cross && this.cross.destroy();
        },
        drawCrosshair: function(a, b) {
            if (this.crosshair) if (!1 === (q(b) || !n(this.crosshair.snap, !0))) this.hideCrosshair(); else {
                var c, d = this.crosshair, e = d.animation;
                n(d.snap, !0) ? q(b) && (c = this.chart.inverted != this.horiz ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos;
                c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : n(b.stackY, b.y)) : this.getPlotLinePath(null, null, null, null, c);
                null === c ? this.hideCrosshair() : this.cross ? this.cross.attr({
                    visibility: "visible"
                })[e ? "animate" : "attr"]({
                    d: c
                }, e) : (e = {
                    "stroke-width": d.width || 1,
                    stroke: d.color || "#C0C0C0",
                    zIndex: d.zIndex || 2
                }, d.dashStyle && (e.dashstyle = d.dashStyle), this.cross = this.chart.renderer.path(c).attr(e).add());
            }
        },
        hideCrosshair: function() {
            this.cross && this.cross.hide();
        }
    };
    l(K.prototype, {
        getPlotBandPath: function(a, b) {
            var c = this.getPlotLinePath(b), d = this.getPlotLinePath(a);
            d && c ? d.push(c[4], c[5], c[1], c[2]) : d = null;
            return d;
        },
        addPlotBand: function(a) {
            return this.addPlotBandOrLine(a, "plotBands");
        },
        addPlotLine: function(a) {
            return this.addPlotBandOrLine(a, "plotLines");
        },
        addPlotBandOrLine: function(a, b) {
            var c = new ca.PlotLineOrBand(this, a).render(), d = this.userOptions;
            c && (b && (d[b] = d[b] || [], d[b].push(a)), this.plotLinesAndBands.push(c));
            return c;
        },
        removePlotBandOrLine: function(a) {
            for (var b = this.plotLinesAndBands, c = this.options, d = this.userOptions, e = b.length; e--; ) b[e].id === a && b[e].destroy();
            y([ c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || [] ], function(b) {
                for (e = b.length; e--; ) b[e].id === a && t(b, b[e]);
            });
        }
    });
    K.prototype.getTimeTicks = function(a, b, c, d) {
        var h, e = [], f = {}, g = R.global.useUTC, k = new ia(b - Ca), m = a.unitRange, p = a.count;
        if (q(b)) {
            m >= H.second && (k.setMilliseconds(0), k.setSeconds(m >= H.minute ? 0 : p * X(k.getSeconds() / p)));
            m >= H.minute && k[tb](m >= H.hour ? 0 : p * X(k[cb]() / p));
            m >= H.hour && k[ub](m >= H.day ? 0 : p * X(k[db]() / p));
            m >= H.day && k[fb](m >= H.month ? 1 : p * X(k[Ha]() / p));
            m >= H.month && (k[vb](m >= H.year ? 0 : p * X(k[Wa]() / p)), h = k[Xa]());
            m >= H.year && k[wb](h - h % p);
            m === H.week && k[fb](k[Ha]() - k[eb]() + n(d, 1));
            b = 1;
            Ca && (k = new ia(k.getTime() + Ca));
            h = k[Xa]();
            d = k.getTime();
            for (var r = k[Wa](), v = k[Ha](), u = (H.day + (g ? Ca : 6e4 * k.getTimezoneOffset())) % H.day; c > d; ) e.push(d), 
            d = m === H.year ? Va(h + b * p, 0) : m === H.month ? Va(h, r + b * p) : g || m !== H.day && m !== H.week ? d + m * p : Va(h, r, v + b * p * (m === H.day ? 1 : 7)), 
            b++;
            e.push(d);
            y(ab(e, function(a) {
                return m <= H.hour && a % H.day === u;
            }), function(a) {
                f[a] = "day";
            });
        }
        e.info = l(a, {
            higherRanks: f,
            totalRange: m * p
        });
        return e;
    };
    K.prototype.normalizeTimeTickInterval = function(a, b) {
        var g, c = b || [ [ "millisecond", [ 1, 2, 5, 10, 20, 25, 50, 100, 200, 500 ] ], [ "second", [ 1, 2, 5, 10, 15, 30 ] ], [ "minute", [ 1, 2, 5, 10, 15, 30 ] ], [ "hour", [ 1, 2, 3, 4, 6, 8, 12 ] ], [ "day", [ 1, 2 ] ], [ "week", [ 1, 2 ] ], [ "month", [ 1, 2, 3, 4, 6 ] ], [ "year", null ] ], d = c[c.length - 1], e = H[d[0]], f = d[1];
        for (g = 0; g < c.length && !(d = c[g], e = H[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] + H[c[g + 1][0]]) / 2); g++) ;
        e === H.year && 5 * e > a && (f = [ 1, 2, 5 ]);
        c = da(a / e, f, "year" === d[0] ? D(W.pow(10, X(W.log(a / e) / W.LN10)), 1) : 1);
        return {
            unitRange: e,
            count: c,
            unitName: d[0]
        };
    };
    var pb = ca.Legend = function(a, b) {
        this.init(a, b);
    };
    pb.prototype = {
        init: function(a, b) {
            var c = this, d = b.itemStyle, e = n(b.padding, 8), f = b.itemMarginTop || 0;
            this.options = b;
            b.enabled && (c.itemStyle = d, c.itemHiddenStyle = x(d, b.itemHiddenStyle), c.itemMarginTop = f, 
            c.padding = e, c.initialItemX = e, c.initialItemY = e - 5, c.maxItemWidth = 0, c.chart = a, 
            c.itemHeight = 0, c.lastLineHeight = 0, c.symbolWidth = n(b.symbolWidth, 16), c.pages = [], 
            c.render(), O(c.chart, "endResize", function() {
                c.positionCheckboxes();
            }));
        },
        colorizeItem: function(a, b) {
            var m, c = this.options, d = a.legendItem, e = a.legendLine, f = a.legendSymbol, g = this.itemHiddenStyle.color, c = b ? c.itemStyle.color : g, h = b ? a.legendColor || a.color || "#CCC" : g, g = a.options && a.options.marker, k = {
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
                if (g && f.isMarker) for (m in k.stroke = h, g = a.convertAttribs(g), g) d = g[m], 
                d !== A && (k[m] = d);
                f.attr(k);
            }
        },
        positionItem: function(a) {
            var b = this.options, c = b.symbolPadding, b = !b.rtl, d = a._legendItemPos, e = d[0], d = d[1], f = a.checkbox;
            a.legendGroup && a.legendGroup.translate(b ? e : this.legendWidth - e - 2 * c - 4, d);
            f && (f.x = e, f.y = d);
        },
        destroyItem: function(a) {
            var b = a.checkbox;
            y([ "legendItem", "legendLine", "legendSymbol", "legendGroup" ], function(b) {
                a[b] && (a[b] = a[b].destroy());
            });
            b && C(a.checkbox);
        },
        destroy: function() {
            var a = this.group, b = this.box;
            b && (this.box = b.destroy());
            a && (this.group = a.destroy());
        },
        positionCheckboxes: function(a) {
            var c, b = this.group.alignAttr, d = this.clipHeight || this.legendHeight;
            b && (c = b.translateY, y(this.allItems, function(e) {
                var g, f = e.checkbox;
                f && (g = c + f.y + (a || 0) + 3, J(f, {
                    left: b.translateX + e.checkboxOffset + f.x - 20 + "px",
                    top: g + "px",
                    display: g > c - 6 && c + d - 6 > g ? "" : "none"
                }));
            }));
        },
        renderTitle: function() {
            var a = this.padding, b = this.options.title, c = 0;
            b.text && (this.title || (this.title = this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({
                zIndex: 1
            }).css(b.style).add(this.group)), a = this.title.getBBox(), c = a.height, this.offsetWidth = a.width, 
            this.contentGroup.attr({
                translateY: c
            }));
            this.titleHeight = c;
        },
        renderItem: function(a) {
            var b = this.chart, c = b.renderer, d = this.options, e = "horizontal" === d.layout, f = this.symbolWidth, g = d.symbolPadding, h = this.itemStyle, k = this.itemHiddenStyle, m = this.padding, p = e ? n(d.itemDistance, 20) : 0, r = !d.rtl, v = d.width, u = d.itemMarginBottom || 0, z = this.itemMarginTop, l = this.initialItemX, q = a.legendItem, t = a.series && a.series.drawLegendSymbol ? a.series : a, w = t.options, w = this.createCheckboxForItem && w && w.showCheckbox, y = d.useHTML;
            q || (a.legendGroup = c.g("legend-item").attr({
                zIndex: 1
            }).add(this.scrollGroup), a.legendItem = q = c.text(d.labelFormat ? I(d.labelFormat, a) : d.labelFormatter.call(a), r ? f + g : -g, this.baseline || 0, y).css(x(a.visible ? h : k)).attr({
                align: r ? "left" : "right",
                zIndex: 2
            }).add(a.legendGroup), this.baseline || (this.baseline = c.fontMetrics(h.fontSize, q).f + 3 + z, 
            q.attr("y", this.baseline)), t.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, q, y, h, k), 
            this.colorizeItem(a, a.visible), w && this.createCheckboxForItem(a));
            c = q.getBBox();
            f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + p + (w ? 20 : 0);
            this.itemHeight = g = E(a.legendItemHeight || c.height);
            e && this.itemX - l + f > (v || b.chartWidth - 2 * m - l - d.x) && (this.itemX = l, 
            this.itemY += z + this.lastLineHeight + u, this.lastLineHeight = 0);
            this.maxItemWidth = D(this.maxItemWidth, f);
            this.lastItemY = z + this.itemY + u;
            this.lastLineHeight = D(g, this.lastLineHeight);
            a._legendItemPos = [ this.itemX, this.itemY ];
            e ? this.itemX += f : (this.itemY += z + g + u, this.lastLineHeight = g);
            this.offsetWidth = v || D((e ? this.itemX - l - p : f) + m, this.offsetWidth);
        },
        getAllItems: function() {
            var a = [];
            y(this.chart.series, function(b) {
                var c = b.options;
                n(c.showInLegend, q(c.linkedTo) ? !1 : A, !0) && (a = a.concat(b.legendItems || ("point" === c.legendType ? b.data : b)));
            });
            return a;
        },
        render: function() {
            var e, f, g, h, a = this, b = a.chart, c = b.renderer, d = a.group, k = a.box, m = a.options, p = a.padding, r = m.borderWidth, v = m.backgroundColor;
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
            L(e, function(a, b) {
                return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0);
            });
            m.reversed && e.reverse();
            a.allItems = e;
            a.display = f = !!e.length;
            y(e, function(b) {
                a.renderItem(b);
            });
            g = m.width || a.offsetWidth;
            h = a.lastItemY + a.lastLineHeight + a.titleHeight;
            h = a.handleOverflow(h);
            (r || v) && (g += p, h += p, k ? g > 0 && h > 0 && (k[k.isNew ? "attr" : "animate"](k.crisp({
                width: g,
                height: h
            })), k.isNew = !1) : (a.box = k = c.rect(0, 0, g, h, m.borderRadius, r || 0).attr({
                stroke: m.borderColor,
                "stroke-width": r || 0,
                fill: v || "none"
            }).add(d).shadow(m.shadow), k.isNew = !0), k[f ? "show" : "hide"]());
            a.legendWidth = g;
            a.legendHeight = h;
            y(e, function(b) {
                a.positionItem(b);
            });
            f && d.align(l({
                width: g,
                height: h
            }, m), !0, "spacingBox");
            b.isResizing || this.positionCheckboxes();
        },
        handleOverflow: function(a) {
            var h, l, b = this, c = this.chart, d = c.renderer, e = this.options, f = e.y, f = c.spacingBox.height + ("top" === e.verticalAlign ? -f : f) - this.padding, g = e.maxHeight, k = this.clipRect, m = e.navigation, p = n(m.animation, !0), r = m.arrowSize || 12, v = this.nav, u = this.pages, q = this.allItems;
            "horizontal" === e.layout && (f /= 2);
            g && (f = S(f, g));
            u.length = 0;
            a > f && !e.useHTML ? (this.clipHeight = h = D(f - 20 - this.titleHeight - this.padding, 0), 
            this.currentPage = n(this.currentPage, 1), this.fullHeight = a, y(q, function(a, b) {
                var c = a._legendItemPos[1], d = E(a.legendItem.getBBox().height), e = u.length;
                (!e || c - u[e - 1] > h && (l || c) !== u[e - 1]) && (u.push(l || c), e++);
                b === q.length - 1 && c + d - u[e - 1] > h && u.push(c);
                c !== l && (l = c);
            }), k || (k = b.clipRect = d.clipRect(0, this.padding, 9999, 0), b.contentGroup.clip(k)), 
            k.attr({
                height: h
            }), v || (this.nav = v = d.g().attr({
                zIndex: 1
            }).add(this.group), this.up = d.symbol("triangle", 0, 0, r, r).on("click", function() {
                b.scroll(-1, p);
            }).add(v), this.pager = d.text("", 15, 10).css(m.style).add(v), this.down = d.symbol("triangle-down", 0, 0, r, r).on("click", function() {
                b.scroll(1, p);
            }).add(v)), b.scroll(0), a = f) : v && (k.attr({
                height: c.chartHeight
            }), v.hide(), this.scrollGroup.attr({
                translateY: 1
            }), this.clipHeight = 0);
            return a;
        },
        scroll: function(a, b) {
            var c = this.pages, d = c.length, e = this.currentPage + a, f = this.clipHeight, g = this.options.navigation, h = g.activeColor, g = g.inactiveColor, k = this.pager, m = this.padding;
            e > d && (e = d);
            e > 0 && (b !== A && (pa = n(b, this.chart.animation)), this.nav.attr({
                translateX: m,
                translateY: f + this.padding + 7 + this.titleHeight,
                visibility: "visible"
            }), this.up.attr({
                fill: 1 === e ? g : h
            }).css({
                cursor: 1 === e ? "default" : "pointer"
            }), k.attr({
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
    var Eb = ca.LegendSymbolMixin = {
        drawRectangle: function(a, b) {
            var c = a.options.symbolHeight || 12;
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 5 - c / 2, a.symbolWidth, c, a.options.symbolRadius || 0).attr({
                zIndex: 3
            }).add(b.legendGroup);
        },
        drawLineMarker: function(a) {
            var d, b = this.options, c = b.marker;
            d = a.symbolWidth;
            var e = this.chart.renderer, f = this.legendGroup;
            a = a.baseline - E(.3 * e.fontMetrics(a.options.itemStyle.fontSize, this.legendItem).b);
            var g;
            b.lineWidth && (g = {
                "stroke-width": b.lineWidth
            }, b.dashStyle && (g.dashstyle = b.dashStyle), this.legendLine = e.path([ "M", 0, a, "L", d, a ]).attr(g).add(f));
            c && !1 !== c.enabled && (b = c.radius, this.legendSymbol = d = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b).add(f), 
            d.isMarker = !0);
        }
    };
    (/Trident\/7\.0/.test(Ia) || Pa) && G(pb.prototype, "positionItem", function(a, b) {
        var c = this, d = function() {
            b._legendItemPos && a.call(c, b);
        };
        d();
        setTimeout(d);
    });
    V.prototype = {
        init: function(a, b) {
            var c, d = a.series;
            a.series = null;
            c = x(R, a);
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
            f.index = Ja.length;
            Ja.push(f);
            Ab++;
            !1 !== d.reflow && O(f, "load", function() {
                f.initReflow();
            });
            if (e) for (g in e) O(f, g, e[g]);
            f.xAxis = [];
            f.yAxis = [];
            f.animation = wa ? !1 : n(d.animation, !0);
            f.pointCount = f.colorCounter = f.symbolCounter = 0;
            f.firstRender();
        },
        initSeries: function(a) {
            var b = this.options.chart;
            (b = Ka[a.type || b.type || b.defaultSeriesType]) || la(17, !0);
            b = new b();
            b.init(this, a);
            return b;
        },
        isInsidePlot: function(a, b, c) {
            var d = c ? b : a;
            a = c ? a : b;
            return d >= 0 && d <= this.plotWidth && a >= 0 && a <= this.plotHeight;
        },
        adjustTickAmounts: function() {
            !1 !== this.options.chart.alignTicks && y(this.axes, function(a) {
                a.adjustTickAmount();
            });
            this.maxTicks = null;
        },
        redraw: function(a) {
            var g, h, b = this.axes, c = this.series, d = this.pointer, e = this.legend, f = this.isDirtyLegend, k = this.hasCartesianSeries, m = this.isDirtyBox, p = c.length, r = p, v = this.renderer, u = v.isHidden(), z = [];
            pa = n(a, this.animation);
            u && this.cloneRenderTo();
            for (this.layOutTitles(); r--; ) if (a = c[r], a.options.stacking && (g = !0, a.isDirty)) {
                h = !0;
                break;
            }
            if (h) for (r = p; r--; ) a = c[r], a.options.stacking && (a.isDirty = !0);
            y(c, function(a) {
                a.isDirty && "point" === a.options.legendType && (f = !0);
            });
            f && e.options.enabled && (e.render(), this.isDirtyLegend = !1);
            g && this.getStacks();
            k && (this.isResizing || (this.maxTicks = null, y(b, function(a) {
                a.setScale();
            })), this.adjustTickAmounts());
            this.getMargins();
            k && (y(b, function(a) {
                a.isDirty && (m = !0);
            }), y(b, function(a) {
                a.isDirtyExtremes && (a.isDirtyExtremes = !1, z.push(function() {
                    ha(a, "afterSetExtremes", l(a.eventArgs, a.getExtremes()));
                    delete a.eventArgs;
                }));
                (m || g) && a.redraw();
            }));
            m && this.drawChartBox();
            y(c, function(a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw();
            });
            d && d.reset(!0);
            v.draw();
            ha(this, "redraw");
            u && this.cloneRenderTo(!0);
            y(z, function(a) {
                a.call();
            });
        },
        get: function(a) {
            var d, e, b = this.axes, c = this.series;
            for (d = 0; d < b.length; d++) if (b[d].options.id === a) return b[d];
            for (d = 0; d < c.length; d++) if (c[d].options.id === a) return c[d];
            for (d = 0; d < c.length; d++) for (e = c[d].points || [], b = 0; b < e.length; b++) if (e[b].id === a) return e[b];
            return null;
        },
        getAxes: function() {
            var a = this, b = this.options, c = b.xAxis = xa(b.xAxis || {}), b = b.yAxis = xa(b.yAxis || {});
            y(c, function(a, b) {
                a.index = b;
                a.isX = !0;
            });
            y(b, function(a, b) {
                a.index = b;
            });
            c = c.concat(b);
            y(c, function(b) {
                new K(a, b);
            });
            a.adjustTickAmounts();
        },
        getSelectedPoints: function() {
            var a = [];
            y(this.series, function(b) {
                a = a.concat(ab(b.points || [], function(a) {
                    return a.selected;
                }));
            });
            return a;
        },
        getSelectedSeries: function() {
            return ab(this.series, function(a) {
                return a.selected;
            });
        },
        getStacks: function() {
            var a = this;
            y(a.yAxis, function(a) {
                a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks);
            });
            y(a.series, function(b) {
                !b.options.stacking || !0 !== b.visible && !1 !== a.options.chart.ignoreHiddenSeries || (b.stackKey = b.type + n(b.options.stack, ""));
            });
        },
        setTitle: function(a, b, c) {
            var f, d = this, e = d.options;
            f = e.title = x(e.title, a);
            e = e.subtitle = x(e.subtitle, b);
            y([ [ "title", a, f ], [ "subtitle", b, e ] ], function(a) {
                var b = a[0], c = d[b], e = a[1];
                a = a[2];
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
            c && (c.css({
                width: (f.width || h) + "px"
            }).align(l({
                y: g.fontMetrics(f.style.fontSize, c).b - 3
            }, f), !1, "spacingBox"), f.floating || f.verticalAlign || (b = c.getBBox().height));
            d && (d.css({
                width: (e.width || h) + "px"
            }).align(l({
                y: b + (f.margin - 13) + g.fontMetrics(f.style.fontSize, d).b
            }, e), !1, "spacingBox"), e.floating || e.verticalAlign || (b = Oa(b + d.getBBox().height)));
            c = this.titleOffset !== b;
            this.titleOffset = b;
            !this.isDirtyBox && c && (this.isDirtyBox = c, this.hasRendered && n(a, !0) && this.isDirtyBox && this.redraw());
        },
        getChartSize: function() {
            var a = this.options.chart, b = a.width, a = a.height, c = this.renderToClone || this.renderTo;
            q(b) || (this.containerWidth = Za(c, "width"));
            q(a) || (this.containerHeight = Za(c, "height"));
            this.chartWidth = D(0, b || this.containerWidth || 600);
            this.chartHeight = D(0, n(a, 19 < this.containerHeight ? this.containerHeight : 400));
        },
        cloneRenderTo: function(a) {
            var b = this.renderToClone, c = this.container;
            a ? b && (this.renderTo.appendChild(c), C(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), 
            this.renderToClone = b = this.renderTo.cloneNode(0), J(b, {
                position: "absolute",
                top: "-9999px",
                display: "block"
            }), b.style.setProperty && b.style.setProperty("display", "block", "important"), 
            U.body.appendChild(b), c && b.appendChild(c));
        },
        getContainer: function() {
            var a, c, d, e, b = this.options.chart;
            this.renderTo = a = b.renderTo;
            e = "highcharts-" + jb++;
            na(a) && (this.renderTo = a = U.getElementById(a));
            a || la(13, !0);
            c = B(w(a, "data-highcharts-chart"));
            !isNaN(c) && Ja[c] && Ja[c].hasRendered && Ja[c].destroy();
            w(a, "data-highcharts-chart", this.index);
            a.innerHTML = "";
            b.skipClone || a.offsetWidth || this.cloneRenderTo();
            this.getChartSize();
            c = this.chartWidth;
            d = this.chartHeight;
            this.container = a = fa("div", {
                className: "highcharts-container" + (b.className ? " " + b.className : ""),
                id: e
            }, l({
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
            this.renderer = b.forExport ? new Ma(a, c, d, b.style, !0) : new Sa(a, c, d, b.style);
            wa && this.renderer.create(this, a, c, d);
        },
        getMargins: function() {
            var b, a = this.spacing, c = this.legend, d = this.margin, e = this.options.legend, f = n(e.margin, 20), g = e.x, h = e.y, k = e.align, m = e.verticalAlign, p = this.titleOffset;
            this.resetMargins();
            b = this.axisOffset;
            p && !q(d[0]) && (this.plotTop = D(this.plotTop, p + this.options.title.margin + a[0]));
            c.display && !e.floating && ("right" === k ? q(d[1]) || (this.marginRight = D(this.marginRight, c.legendWidth - g + f + a[1])) : "left" === k ? q(d[3]) || (this.plotLeft = D(this.plotLeft, c.legendWidth + g + f + a[3])) : "top" === m ? q(d[0]) || (this.plotTop = D(this.plotTop, c.legendHeight + h + f + a[0])) : "bottom" !== m || q(d[2]) || (this.marginBottom = D(this.marginBottom, c.legendHeight - h + f + a[2])));
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop += this.extraTopMargin);
            this.hasCartesianSeries && y(this.axes, function(a) {
                a.getOffset();
            });
            q(d[3]) || (this.plotLeft += b[3]);
            q(d[0]) || (this.plotTop += b[0]);
            q(d[2]) || (this.marginBottom += b[2]);
            q(d[1]) || (this.marginRight += b[1]);
            this.setChartSize();
        },
        reflow: function(a) {
            var b = this, c = b.options.chart, d = b.renderTo, e = c.width || Za(d, "width"), f = c.height || Za(d, "height"), c = a ? a.target : Y, d = function() {
                b.container && (b.setSize(e, f, !1), b.hasUserSize = null);
            };
            if (!b.hasUserSize && e && f && (c === Y || c === U)) {
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
            O(Y, "resize", b);
            O(a, "destroy", function() {
                ba(Y, "resize", b);
            });
        },
        setSize: function(a, b, c) {
            var e, f, g, d = this;
            d.isResizing += 1;
            g = function() {
                d && ha(d, "endResize", null, function() {
                    --d.isResizing;
                });
            };
            pa = n(c, d.animation);
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            q(a) && (d.chartWidth = e = D(0, E(a)), d.hasUserSize = !!e);
            q(b) && (d.chartHeight = f = D(0, E(b)));
            (pa ? Bb : J)(d.container, {
                width: e + "px",
                height: f + "px"
            }, pa);
            d.setChartSize(!0);
            d.renderer.setSize(e, f, c);
            d.maxTicks = null;
            y(d.axes, function(a) {
                a.isDirty = !0;
                a.setScale();
            });
            y(d.series, function(a) {
                a.isDirty = !0;
            });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.layOutTitles();
            d.getMargins();
            d.redraw(c);
            d.oldChartHeight = null;
            ha(d, "resize");
            !1 === pa ? g() : setTimeout(g, pa && pa.duration || 500);
        },
        setChartSize: function(a) {
            var k, m, p, r, b = this.inverted, c = this.renderer, d = this.chartWidth, e = this.chartHeight, f = this.options.chart, g = this.spacing, h = this.clipOffset;
            this.plotLeft = k = E(this.plotLeft);
            this.plotTop = m = E(this.plotTop);
            this.plotWidth = p = D(0, E(d - k - this.marginRight));
            this.plotHeight = r = D(0, E(e - m - this.marginBottom));
            this.plotSizeX = b ? r : p;
            this.plotSizeY = b ? p : r;
            this.plotBorderWidth = f.plotBorderWidth || 0;
            this.spacingBox = c.spacingBox = {
                x: g[3],
                y: g[0],
                width: d - g[3] - g[1],
                height: e - g[0] - g[2]
            };
            this.plotBox = c.plotBox = {
                x: k,
                y: m,
                width: p,
                height: r
            };
            d = 2 * X(this.plotBorderWidth / 2);
            b = Oa(D(d, h[3]) / 2);
            c = Oa(D(d, h[0]) / 2);
            this.clipBox = {
                x: b,
                y: c,
                width: X(this.plotSizeX - D(d, h[1]) / 2 - b),
                height: D(0, X(this.plotSizeY - D(d, h[2]) / 2 - c))
            };
            a || y(this.axes, function(a) {
                a.setAxisSize();
                a.setAxisTranslation();
            });
        },
        resetMargins: function() {
            var a = this.spacing, b = this.margin;
            this.plotTop = n(b[0], a[0]);
            this.marginRight = n(b[1], a[1]);
            this.marginBottom = n(b[2], a[2]);
            this.plotLeft = n(b[3], a[3]);
            this.axisOffset = [ 0, 0, 0, 0 ];
            this.clipOffset = [ 0, 0, 0, 0 ];
        },
        drawChartBox: function() {
            var u, a = this.options.chart, b = this.renderer, c = this.chartWidth, d = this.chartHeight, e = this.chartBackground, f = this.plotBackground, g = this.plotBorder, h = this.plotBGImage, k = a.borderWidth || 0, m = a.backgroundColor, p = a.plotBackgroundColor, r = a.plotBackgroundImage, v = a.plotBorderWidth || 0, n = this.plotLeft, l = this.plotTop, q = this.plotWidth, t = this.plotHeight, w = this.plotBox, y = this.clipRect, x = this.clipBox;
            u = k + (a.shadow ? 8 : 0);
            (k || m) && (e ? e.animate(e.crisp({
                width: c - u,
                height: d - u
            })) : (e = {
                fill: m || "none"
            }, k && (e.stroke = a.borderColor, e["stroke-width"] = k), this.chartBackground = b.rect(u / 2, u / 2, c - u, d - u, a.borderRadius, k).attr(e).addClass("highcharts-background").add().shadow(a.shadow)));
            p && (f ? f.animate(w) : this.plotBackground = b.rect(n, l, q, t, 0).attr({
                fill: p
            }).add().shadow(a.plotShadow));
            r && (h ? h.animate(w) : this.plotBGImage = b.image(r, n, l, q, t).add());
            y ? y.animate({
                width: x.width,
                height: x.height
            }) : this.clipRect = b.clipRect(x);
            v && (g ? g.animate(g.crisp({
                x: n,
                y: l,
                width: q,
                height: t,
                strokeWidth: -v
            })) : this.plotBorder = b.rect(n, l, q, t, 0, -v).attr({
                stroke: a.plotBorderColor,
                "stroke-width": v,
                fill: "none",
                zIndex: 1
            }).add());
            this.isDirtyBox = !1;
        },
        propFromSeries: function() {
            var c, e, f, a = this, b = a.options.chart, d = a.options.series;
            y([ "inverted", "angular", "polar" ], function(g) {
                c = Ka[b.type || b.defaultSeriesType];
                f = a[g] || b[g] || c && c.prototype[g];
                for (e = d && d.length; !f && e--; ) (c = Ka[d[e].type]) && c.prototype[g] && (f = !0);
                a[g] = f;
            });
        },
        linkSeries: function() {
            var a = this, b = a.series;
            y(b, function(a) {
                a.linkedSeries.length = 0;
            });
            y(b, function(b) {
                var d = b.options.linkedTo;
                na(d) && (d = ":previous" === d ? a.series[b.index - 1] : a.get(d)) && (d.linkedSeries.push(b), 
                b.linkedParent = d);
            });
        },
        renderSeries: function() {
            y(this.series, function(a) {
                a.translate();
                a.setTooltipPoints && a.setTooltipPoints();
                a.render();
            });
        },
        renderLabels: function() {
            var a = this, b = a.options.labels;
            b.items && y(b.items, function(c) {
                var d = l(b.style, c.style), e = B(d.left) + a.plotLeft, f = B(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                a.renderer.text(c.html, e, f).attr({
                    zIndex: 2
                }).css(d).add();
            });
        },
        render: function() {
            var a = this.axes, b = this.renderer, c = this.options;
            this.setTitle();
            this.legend = new pb(this, c.legend);
            this.getStacks();
            y(a, function(a) {
                a.setScale();
            });
            this.getMargins();
            this.maxTicks = null;
            y(a, function(a) {
                a.setTickPositions(!0);
                a.setMaxTicks();
            });
            this.adjustTickAmounts();
            this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries && y(a, function(a) {
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
            ha(a, "destroy");
            Ja[a.index] = A;
            Ab--;
            a.renderTo.removeAttribute("data-highcharts-chart");
            ba(a);
            for (e = b.length; e--; ) b[e] = b[e].destroy();
            for (e = c.length; e--; ) c[e] = c[e].destroy();
            y("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer scroller rangeSelector legend resetZoomButton tooltip renderer".split(" "), function(b) {
                var c = a[b];
                c && c.destroy && (a[b] = c.destroy());
            });
            d && (d.innerHTML = "", ba(d), f && C(d));
            for (e in a) delete a[e];
        },
        isReadyToRender: function() {
            var a = this;
            return !oa && Y == Y.top && "complete" !== U.readyState || wa && !Y.canvg ? (wa ? Db.push(function() {
                a.firstRender();
            }, a.options.global.canvasToolsURL) : U.attachEvent("onreadystatechange", function() {
                U.detachEvent("onreadystatechange", a.firstRender);
                "complete" === U.readyState && a.firstRender();
            }), !1) : !0;
        },
        firstRender: function() {
            var a = this, b = a.options, c = a.callback;
            a.isReadyToRender() && (a.getContainer(), ha(a, "init"), a.resetMargins(), a.setChartSize(), 
            a.propFromSeries(), a.getAxes(), y(b.series || [], function(b) {
                a.initSeries(b);
            }), a.linkSeries(), ha(a, "beforeRender"), ca.Pointer && (a.pointer = new Pointer(a, b)), 
            a.render(), a.renderer.draw(), c && c.apply(a, [ a ]), y(a.callbacks, function(b) {
                b.apply(a, [ a ]);
            }), a.cloneRenderTo(!0), ha(a, "load"));
        },
        splashArray: function(a, b) {
            var c = b[a], c = N(c) ? c : [ c, c, c, c ];
            return [ n(b[a + "Top"], c[0]), n(b[a + "Right"], c[1]), n(b[a + "Bottom"], c[2]), n(b[a + "Left"], c[3]) ];
        }
    };
    V.prototype.callbacks = [];
    var Pb = ca.CenteredSeriesMixin = {
        getCenter: function() {
            var d, h, a = this.options, b = this.chart, c = 2 * (a.slicedOffset || 0), e = b.plotWidth - 2 * c, f = b.plotHeight - 2 * c, b = a.center, a = [ n(b[0], "50%"), n(b[1], "50%"), a.size || "100%", a.innerSize || 0 ], g = S(e, f);
            return La(a, function(a, b) {
                h = /%$/.test(a);
                d = 2 > b || 2 === b && h;
                return (h ? [ e, f, g, g ][b] * B(a) / 100 : a) + (d ? c : 0);
            });
        }
    }, Ea = function() {};
    Ea.prototype = {
        init: function(a, b, c) {
            this.series = a;
            this.applyOptions(b, c);
            this.pointAttr = {};
            a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], 
            a.colorCounter === b.length && (a.colorCounter = 0));
            a.chart.pointCount++;
            return this;
        },
        applyOptions: function(a, b) {
            var c = this.series, d = c.options.pointValKey || c.pointValKey;
            a = Ea.prototype.optionsToObject.call(this, a);
            l(this, a);
            this.options = this.options ? l(this.options, a) : a;
            d && (this.y = this[d]);
            this.x === A && c && (this.x = b === A ? c.autoIncrement() : b);
            return this;
        },
        optionsToObject: function(a) {
            var b = {}, c = this.series, d = c.pointArrayMap || [ "y" ], e = d.length, f = 0, g = 0;
            if ("number" == typeof a || null === a) b[d[0]] = a; else if (P(a)) for (a.length > e && (c = typeof a[0], 
            "string" === c ? b.name = a[0] : "number" === c && (b.x = a[0]), f++); e > g; ) b[d[g++]] = a[f++]; else "object" == typeof a && (b = a, 
            a.dataLabels && (c._hasPointLabels = !0), a.marker && (c._hasPointMarkers = !0));
            return b;
        },
        destroy: function() {
            var c, a = this.series.chart, b = a.hoverPoints;
            a.pointCount--;
            b && (this.setState(), t(b, this), b.length || (a.hoverPoints = null));
            this === a.hoverPoint && this.onMouseOut();
            (this.graphic || this.dataLabel) && (ba(this), this.destroyElements());
            this.legendItem && a.legend.destroyItem(this);
            for (c in this) this[c] = null;
        },
        destroyElements: function() {
            for (var b, a = "graphic dataLabel dataLabelUpper group connector shadowGroup".split(" "), c = 6; c--; ) b = a[c], 
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
            var b = this.series, c = b.tooltipOptions, d = n(c.valueDecimals, ""), e = c.valuePrefix || "", f = c.valueSuffix || "";
            y(b.pointArrayMap || [ "y" ], function(b) {
                b = "{point." + b;
                (e || f) && (a = a.replace(b + "}", e + b + "}" + f));
                a = a.replace(b + "}", b + ":,." + d + "f}");
            });
            return I(a, {
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
            ha(this, a, b, c);
        }
    };
    var sa = function() {};
    sa.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: Ea,
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
                return n(a.options.index, a._i) - n(b.options.index, b._i);
            };
            c.chart = a;
            c.options = b = c.setOptions(b);
            c.linkedSeries = [];
            c.bindAxes();
            l(c, {
                name: b.name,
                state: "",
                pointAttr: {},
                visible: !1 !== b.visible,
                selected: !0 === b.selected
            });
            wa && (b.animation = !1);
            e = b.events;
            for (d in e) O(c, d, e[d]);
            (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) && (a.runTrackerClick = !0);
            c.getColor();
            c.getSymbol();
            y(c.parallelArrays, function(a) {
                c[a + "Data"] = [];
            });
            c.setData(b.data, !1);
            c.isCartesian && (a.hasCartesianSeries = !0);
            f.push(c);
            c._i = f.length - 1;
            L(f, g);
            this.yAxis && L(this.yAxis.series, g);
            y(f, function(a, b) {
                a.index = b;
                a.name = a.name || "Series " + (b + 1);
            });
        },
        bindAxes: function() {
            var d, a = this, b = a.options, c = a.chart;
            y(a.axisTypes || [], function(e) {
                y(c[e], function(c) {
                    d = c.options;
                    (b[e] === d.index || b[e] !== A && b[e] === d.id || b[e] === A && 0 === d.index) && (c.series.push(a), 
                    a[e] = c, c.isDirty = !0);
                });
                a[e] || a.optionalAxis === e || la(18, !0);
            });
        },
        updateParallelArrays: function(a, b) {
            var c = a.series, d = arguments;
            y(c.parallelArrays, "number" == typeof b ? function(d) {
                var f = "y" === d && c.toYData ? c.toYData(a) : a[d];
                c[d + "Data"][b] = f;
            } : function(a) {
                Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2));
            });
        },
        autoIncrement: function() {
            var a = this.options, b = this.xIncrement, b = n(b, a.pointStart, 0);
            this.pointInterval = n(this.pointInterval, a.pointInterval, 1);
            this.xIncrement = b + this.pointInterval;
            return b;
        },
        getSegments: function() {
            var c, a = -1, b = [], d = this.points, e = d.length;
            if (e) if (this.options.connectNulls) {
                for (c = e; c--; ) null === d[c].y && d.splice(c, 1);
                d.length && (b = [ d ]);
            } else y(d, function(c, g) {
                null === c.y ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1));
            });
            this.segments = b;
        },
        setOptions: function(a) {
            var b = this.chart, c = b.options.plotOptions, b = b.userOptions || {}, d = b.plotOptions || {}, e = c[this.type];
            this.userOptions = a;
            c = x(e, c.series, a);
            this.tooltipOptions = x(R.tooltip, R.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);
            null === e.marker && delete c.marker;
            return c;
        },
        getCyclic: function(a, b, c) {
            var d = this.userOptions, e = "_" + a + "Index", f = a + "Counter";
            b || (q(d[e]) ? b = d[e] : (d[e] = b = this.chart[f] % c.length, this.chart[f] += 1), 
            b = c[b]);
            this[a] = b;
        },
        getColor: function() {
            this.options.colorByPoint || this.getCyclic("color", this.options.color || Qa[this.type].color, this.chart.options.colors);
        },
        getSymbol: function() {
            var a = this.options.marker;
            this.getCyclic("symbol", a.symbol, this.chart.options.symbols);
            /^url/.test(this.symbol) && (a.radius = 0);
        },
        drawLegendSymbol: Eb.drawLineMarker,
        setData: function(a, b, c, d) {
            var h, e = this, f = e.points, g = f && f.length || 0, k = e.options, m = e.chart, p = null, r = e.xAxis, v = r && !!r.categories, u = e.tooltipPoints, l = k.turboThreshold, q = this.xData, t = this.yData, w = (h = e.pointArrayMap) && h.length;
            a = a || [];
            h = a.length;
            b = n(b, !0);
            if (!1 === d || !h || g !== h || e.cropped || e.hasGroupedData) {
                e.xIncrement = null;
                e.pointRange = v ? 1 : k.pointRange;
                e.colorCounter = 0;
                y(this.parallelArrays, function(a) {
                    e[a + "Data"].length = 0;
                });
                if (l && h > l) {
                    for (c = 0; null === p && h > c; ) p = a[c], c++;
                    if (Q(p)) {
                        v = n(k.pointStart, 0);
                        k = n(k.pointInterval, 1);
                        for (c = 0; h > c; c++) q[c] = v, t[c] = a[c], v += k;
                        e.xIncrement = v;
                    } else if (P(p)) if (w) for (c = 0; h > c; c++) k = a[c], q[c] = k[0], t[c] = k.slice(1, w + 1); else for (c = 0; h > c; c++) k = a[c], 
                    q[c] = k[0], t[c] = k[1]; else la(12);
                } else for (c = 0; h > c; c++) a[c] !== A && (k = {
                    series: e
                }, e.pointClass.prototype.applyOptions.apply(k, [ a[c] ]), e.updateParallelArrays(k, c), 
                v && k.name && (r.names[k.x] = k.name));
                na(t[0]) && la(14, !0);
                e.data = [];
                e.options.data = a;
                for (c = g; c--; ) f[c] && f[c].destroy && f[c].destroy();
                u && (u.length = 0);
                r && (r.minRange = r.userMinRange);
                e.isDirty = e.isDirtyData = m.isDirtyBox = !0;
                c = !1;
            } else y(a, function(a, b) {
                f[b].update(a, !1, null, !1);
            });
            b && m.redraw(c);
        },
        processData: function(a) {
            var e, b = this.xData, c = this.yData, d = b.length;
            e = 0;
            var f, g, k, h = this.xAxis, m = this.options;
            k = m.cropThreshold;
            var v, u, p = 0, r = this.isCartesian;
            if (r && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) return !1;
            h && (v = h.getExtremes(), u = v.min, v = v.max);
            r && this.sorted && (!k || d > k || this.forceCrop) && (b[d - 1] < u || b[0] > v ? (b = [], 
            c = []) : (b[0] < u || b[d - 1] > v) && (e = this.cropData(this.xData, this.yData, u, v), 
            b = e.xData, c = e.yData, e = e.start, f = !0, p = b.length));
            for (k = b.length - 1; k >= 0; k--) d = b[k] - b[k - 1], !f && b[k] > u && b[k] < v && p++, 
            d > 0 && (g === A || g > d) ? g = d : 0 > d && this.requireSorting && la(15);
            this.cropped = f;
            this.cropStart = e;
            this.processedXData = b;
            this.processedYData = c;
            this.activePointCount = p;
            null === m.pointRange && (this.pointRange = g || 1);
            this.closestPointRange = g;
        },
        cropData: function(a, b, c, d) {
            var k, e = a.length, f = 0, g = e, h = n(this.cropShoulder, 1);
            for (k = 0; e > k; k++) if (a[k] >= c) {
                f = D(0, k - h);
                break;
            }
            for (;e > k; k++) if (a[k] > d) {
                g = k + h;
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
            var c, k, p, v, a = this.options.data, b = this.data, d = this.processedXData, e = this.processedYData, f = this.pointClass, g = d.length, h = this.cropStart || 0, m = this.hasGroupedData, r = [];
            b || m || (b = [], b.length = a.length, b = this.data = b);
            for (v = 0; g > v; v++) k = h + v, m ? r[v] = new f().init(this, [ d[v] ].concat(xa(e[v]))) : (b[k] ? p = b[k] : a[k] !== A && (b[k] = p = new f().init(this, a[k], d[v])), 
            r[v] = p), r[v].index = k;
            if (b && (g !== (c = b.length) || m)) for (v = 0; c > v; v++) v !== h || m || (v += g), 
            b[v] && (b[v].destroyElements(), b[v].plotX = A);
            this.data = b;
            this.points = r;
        },
        getExtremes: function(a) {
            var d, b = this.yAxis, c = this.processedXData, e = [], f = 0;
            d = this.xAxis.getExtremes();
            var k, m, p, r, g = d.min, h = d.max;
            a = a || this.stackedYData || this.processedYData;
            d = a.length;
            for (r = 0; d > r; r++) if (m = c[r], p = a[r], k = null !== p && p !== A && (!b.isLog || p.length || p > 0), 
            m = this.getExtremesFromAll || this.cropped || (c[r + 1] || m) >= g && (c[r - 1] || m) <= h, 
            k && m) if (k = p.length) for (;k--; ) null !== p[k] && (e[f++] = p[k]); else e[f++] = p;
            this.dataMin = n(void 0, aa(e));
            this.dataMax = n(void 0, Ba(e));
        },
        translate: function() {
            this.processedXData || this.processData();
            this.generatePoints();
            for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue, k = a.pointPlacement, m = "between" === k || Q(k), p = a.threshold, a = 0; g > a; a++) {
                var r = f[a], v = r.x, u = r.y, l = r.low, t = b && e.stacks[(this.negStacks && p > u ? "-" : "") + this.stackKey];
                e.isLog && 0 >= u && (r.y = u = null, la(10));
                r.plotX = c.translate(v, 0, 0, 0, 1, k, "flags" === this.type);
                b && this.visible && t && t[v] && (t = t[v], u = t.points[this.index + "," + a], 
                l = u[0], u = u[1], 0 === l && (l = n(p, e.min)), e.isLog && 0 >= l && (l = null), 
                r.total = r.stackTotal = t.total, r.percentage = t.total && r.y / t.total * 100, 
                r.stackY = u, t.setOffset(this.pointXOffset || 0, this.barW || 0));
                r.yBottom = q(l) ? e.translate(l, 0, 1, 0, 1) : null;
                h && (u = this.modifyValue(u, r));
                r.plotY = "number" == typeof u && 1/0 !== u ? e.translate(u, 0, 1, 0, 1) : A;
                r.clientX = m ? c.translate(v, 0, 0, 0, 1) : r.plotX;
                r.negative = r.y < (p || 0);
                r.category = d && d[r.x] !== A ? d[r.x] : r.x;
            }
            this.getSegments();
        },
        animate: function(a) {
            var d, b = this.chart, c = b.renderer;
            d = this.options.animation;
            var g, e = this.clipBox || b.clipBox, f = b.inverted;
            d && !N(d) && (d = Qa[this.type].animation);
            g = [ "_sharedClip", d.duration, d.easing, e.height ].join();
            a ? (a = b[g], d = b[g + "m"], a || (b[g] = a = c.clipRect(l(e, {
                width: 0
            })), b[g + "m"] = d = c.clipRect(-99, f ? -b.plotLeft : -b.plotTop, 99, f ? b.chartWidth : b.chartHeight)), 
            this.group.clip(a), this.markerGroup.clip(d), this.sharedClipKey = g) : ((a = b[g]) && a.animate({
                width: b.plotSizeX
            }, d), b[g + "m"] && b[g + "m"].animate({
                width: b.plotSizeX + 99
            }, d), this.animate = null);
        },
        afterAnimate: function() {
            var a = this.chart, b = this.sharedClipKey, c = this.group, d = this.clipBox;
            c && !1 !== this.options.clip && (b && d || c.clip(d ? a.renderer.clipRect(d) : a.clipRect), 
            this.markerGroup.clip());
            ha(this, "afterAnimate");
            setTimeout(function() {
                b && a[b] && (d || (a[b] = a[b].destroy()), a[b + "m"] && (a[b + "m"] = a[b + "m"].destroy()));
            }, 100);
        },
        drawPoints: function() {
            var a, d, e, f, g, h, k, m, p, u, q, t, b = this.points, c = this.chart, r = this.options.marker, v = this.pointAttr[""], w = this.markerGroup, y = n(r.enabled, !this.requireSorting || this.activePointCount < .5 * this.xAxis.len / r.radius);
            if (!1 !== r.enabled || this._hasPointMarkers) for (f = b.length; f--; ) g = b[f], 
            d = X(g.plotX), e = g.plotY, p = g.graphic, u = g.marker || {}, q = !!g.marker, 
            a = y && u.enabled === A || u.enabled, t = c.isInsidePlot(E(d), e, c.inverted), 
            a && e !== A && !isNaN(e) && null !== g.y ? (a = g.pointAttr[g.selected ? "select" : ""] || v, 
            h = a.r, k = n(u.symbol, this.symbol), m = 0 === k.indexOf("url"), p ? p[t ? "show" : "hide"](!0).animate(l({
                x: d - h,
                y: e - h
            }, p.symbolName ? {
                width: 2 * h,
                height: 2 * h
            } : {})) : t && (h > 0 || m) && (g.graphic = c.renderer.symbol(k, d - h, e - h, 2 * h, 2 * h, q ? u : r).attr(a).add(w))) : p && (g.graphic = p.destroy());
        },
        convertAttribs: function(a, b, c, d) {
            var f, g, e = this.pointAttrToOptions, h = {};
            a = a || {};
            b = b || {};
            c = c || {};
            d = d || {};
            for (f in e) g = e[f], h[f] = n(a[g], b[f], c[f], d[f]);
            return h;
        },
        getAttribs: function() {
            var f, a = this, b = a.options, c = Qa[a.type].marker ? b.marker : b, d = c.states, e = d.hover, g = a.color;
            f = {
                stroke: g,
                fill: g
            };
            var k, p, h = a.points || [], m = [], r = a.pointAttrToOptions;
            p = a.hasPointSpecificOptions;
            var v = b.negativeColor, u = c.lineColor, n = c.fillColor;
            k = b.turboThreshold;
            var t;
            b.marker ? (e.radius = e.radius || c.radius + e.radiusPlus, e.lineWidth = e.lineWidth || c.lineWidth + e.lineWidthPlus) : e.color = e.color || Ta(e.color || g).brighten(e.brightness).get();
            m[""] = a.convertAttribs(c, f);
            y([ "hover", "select" ], function(b) {
                m[b] = a.convertAttribs(d[b], m[""]);
            });
            a.pointAttr = m;
            g = h.length;
            if (!k || k > g || p) for (;g--; ) {
                k = h[g];
                (c = k.options && k.options.marker || k.options) && !1 === c.enabled && (c.radius = 0);
                k.negative && v && (k.color = k.fillColor = v);
                p = b.colorByPoint || k.color;
                if (k.options) for (t in r) q(c[r[t]]) && (p = !0);
                p ? (c = c || {}, p = [], d = c.states || {}, f = d.hover = d.hover || {}, b.marker || (f.color = f.color || !k.options.color && e.color || Ta(k.color).brighten(f.brightness || e.brightness).get()), 
                f = {
                    color: k.color
                }, n || (f.fillColor = k.color), u || (f.lineColor = k.color), p[""] = a.convertAttribs(l(f, c), m[""]), 
                p.hover = a.convertAttribs(d.hover, m.hover, p[""]), p.select = a.convertAttribs(d.select, m.select, p[""])) : p = m;
                k.pointAttr = p;
            }
        },
        destroy: function() {
            var d, e, g, h, k, a = this, b = a.chart, c = /AppleWebKit\/533/.test(Ia), f = a.data || [];
            ha(a, "destroy");
            ba(a);
            y(a.axisTypes || [], function(b) {
                (k = a[b]) && (t(k.series, a), k.isDirty = k.forceRedraw = !0);
            });
            a.legendItem && a.chart.legend.destroyItem(a);
            for (e = f.length; e--; ) (g = f[e]) && g.destroy && g.destroy();
            a.points = null;
            clearTimeout(a.animationTimeout);
            y("area graph dataLabelsGroup group markerGroup tracker graphNeg areaNeg posClip negClip".split(" "), function(b) {
                a[b] && (d = c && "group" === b ? "hide" : "destroy", a[b][d]());
            });
            b.hoverSeries === a && (b.hoverSeries = null);
            t(b.series, a);
            for (h in a) delete a[h];
        },
        getSegmentPath: function(a) {
            var b = this, c = [], d = b.options.step;
            y(a, function(e, f) {
                var k, g = e.plotX, h = e.plotY;
                b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? "L" : "M"), 
                d && f && (k = a[f - 1], "right" === d ? c.push(k.plotX, h) : "center" === d ? c.push((k.plotX + g) / 2, k.plotY, (k.plotX + g) / 2, h) : c.push(g, k.plotY)), 
                c.push(e.plotX, e.plotY));
            });
            return c;
        },
        getGraphPath: function() {
            var c, a = this, b = [], d = [];
            y(a.segments, function(e) {
                c = a.getSegmentPath(e);
                1 < e.length ? b = b.concat(c) : d.push(e[0]);
            });
            a.singlePoints = d;
            return a.graphPath = b;
        },
        drawGraph: function() {
            var a = this, b = this.options, c = [ [ "graph", b.lineColor || this.color ] ], d = b.lineWidth, e = b.dashStyle, f = "square" !== b.linecap, g = this.getGraphPath(), h = b.negativeColor;
            h && c.push([ "graphNeg", h ]);
            y(c, function(c, h) {
                var p = c[0], r = a[p];
                r ? (mb(r), r.animate({
                    d: g
                })) : d && g.length && (r = {
                    stroke: c[1],
                    "stroke-width": d,
                    fill: "none",
                    zIndex: 1
                }, e ? r.dashstyle = e : f && (r["stroke-linecap"] = r["stroke-linejoin"] = "round"), 
                a[p] = a.chart.renderer.path(g).attr(r).add(a.group).shadow(!h && b.shadow));
            });
        },
        clipNeg: function() {
            var e, a = this.options, b = this.chart, c = b.renderer, d = a.negativeColor || a.negativeFillColor, f = this.graph, g = this.area, h = this.posClip, k = this.negClip;
            e = b.chartWidth;
            var m = b.chartHeight, p = D(e, m), r = this.yAxis;
            d && (f || g) && (d = E(r.toPixels(a.threshold || 0, !0)), 0 > d && (p -= d), a = {
                x: 0,
                y: 0,
                width: p,
                height: d
            }, p = {
                x: 0,
                y: d,
                width: p,
                height: p
            }, b.inverted && (a.height = p.y = b.plotWidth - d, c.isVML && (a = {
                x: b.plotWidth - d - b.plotLeft,
                y: 0,
                width: e,
                height: m
            }, p = {
                x: d + b.plotLeft - e,
                y: 0,
                width: b.plotLeft + d,
                height: e
            })), r.reversed ? (b = p, e = a) : (b = a, e = p), h ? (h.animate(b), k.animate(e)) : (this.posClip = h = c.clipRect(b), 
            this.negClip = k = c.clipRect(e), f && this.graphNeg && (f.clip(h), this.graphNeg.clip(k)), 
            g && (g.clip(h), this.areaNeg.clip(k))));
        },
        invertGroups: function() {
            function a() {
                var a = {
                    width: b.yAxis.len,
                    height: b.xAxis.len
                };
                y([ "group", "markerGroup" ], function(c) {
                    b[c] && b[c].attr(a).invert();
                });
            }
            var b = this, c = b.chart;
            b.xAxis && (O(c, "resize", a), O(b, "destroy", function() {
                ba(c, "resize", a);
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
            var c, a = this, b = a.chart, d = a.options, e = (c = d.animation) && !!a.animate && b.renderer.isSVG && n(c.duration, 500) || 0, f = a.visible ? "visible" : "hidden", g = d.zIndex, h = a.hasRendered, k = b.seriesGroup;
            c = a.plotGroup("group", "series", f, g, k);
            a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, k);
            e && a.animate(!0);
            a.getAttribs();
            c.inverted = a.isCartesian ? b.inverted : !1;
            a.drawGraph && (a.drawGraph(), a.clipNeg());
            y(a.points, function(a) {
                a.redraw && a.redraw();
            });
            a.drawDataLabels && a.drawDataLabels();
            a.visible && a.drawPoints();
            a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
            b.inverted && a.invertGroups();
            !1 === d.clip || a.sharedClipKey || h || c.clip(b.clipRect);
            e && a.animate();
            h || (e ? a.animationTimeout = setTimeout(function() {
                a.afterAnimate();
            }, e) : a.afterAnimate());
            a.isDirty = a.isDirtyData = !1;
            a.hasRendered = !0;
        },
        redraw: function() {
            var a = this.chart, b = this.isDirtyData, c = this.group, d = this.xAxis, e = this.yAxis;
            c && (a.inverted && c.attr({
                width: a.plotWidth,
                height: a.plotHeight
            }), c.animate({
                translateX: n(d && d.left, a.plotLeft),
                translateY: n(e && e.top, a.plotTop)
            }));
            this.translate();
            this.setTooltipPoints && this.setTooltipPoints(!0);
            this.render();
            b && ha(this, "updatedData");
        }
    };
    var Qb = Na(sa);
    Ka.line = Qb;
    Qa.pie = x(Lb, {
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
            }
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
    var qb = {
        type: "pie",
        isCartesian: !1,
        pointClass: Na(Ea, {
            init: function() {
                Ea.prototype.init.apply(this, arguments);
                var b, a = this;
                0 > a.y && (a.y = null);
                l(a, {
                    visible: !1 !== a.visible,
                    name: n(a.name, "Slice")
                });
                b = function(b) {
                    a.slice("select" === b.type);
                };
                O(a, "select", b);
                O(a, "unselect", b);
                return a;
            },
            setVisible: function(a) {
                var b = this, c = b.series, d = c.chart;
                b.visible = b.options.visible = a = a === A ? !b.visible : a;
                c.options.data[$a(b, c.data)] = b.options;
                y([ "graphic", "dataLabel", "connector", "shadowGroup" ], function(c) {
                    b[c] && b[c][a ? "show" : "hide"](!0);
                });
                b.legendItem && d.legend.colorizeItem(b, a);
                !c.isDirty && c.options.ignoreHiddenPoint && (c.isDirty = !0, d.redraw());
            },
            slice: function(a, b, c) {
                var d = this.series;
                pa = n(c, d.chart.animation);
                n(b, !0);
                this.sliced = this.options.sliced = a = q(a) ? a : !this.sliced;
                d.options.data[$a(this, d.data)] = this.options;
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
        singularTooltips: !0,
        getColor: lb,
        animate: function(a) {
            var b = this, c = b.points, d = b.startAngleRad;
            a || (y(c, function(a) {
                var c = a.graphic;
                a = a.shapeArgs;
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
            sa.prototype.setData.call(this, a, !1, c, d);
            this.processData();
            this.generatePoints();
            n(b, !0) && this.chart.redraw(c);
        },
        generatePoints: function() {
            var a, c, d, e, b = 0, f = this.options.ignoreHiddenPoint;
            sa.prototype.generatePoints.call(this);
            c = this.points;
            d = c.length;
            for (a = 0; d > a; a++) e = c[a], b += f && !e.visible ? 0 : e.y;
            this.total = b;
            for (a = 0; d > a; a++) e = c[a], e.percentage = b > 0 ? e.y / b * 100 : 0, e.total = b;
        },
        translate: function(a) {
            this.generatePoints();
            var f, g, h, v, l, b = 0, c = this.options, d = c.slicedOffset, e = d + c.borderWidth, k = c.startAngle || 0, m = this.startAngleRad = va / 180 * (k - 90), k = (this.endAngleRad = va / 180 * (n(c.endAngle, k + 360) - 90)) - m, p = this.points, r = c.dataLabels.distance, c = c.ignoreHiddenPoint, u = p.length;
            a || (this.center = a = this.getCenter());
            this.getX = function(b, c) {
                h = W.asin(S((b - a[1]) / (a[2] / 2 + r), 1));
                return a[0] + (c ? -1 : 1) * ua(h) * (a[2] / 2 + r);
            };
            for (v = 0; u > v; v++) {
                l = p[v];
                f = m + b * k;
                (!c || l.visible) && (b += l.percentage / 100);
                g = m + b * k;
                l.shapeType = "arc";
                l.shapeArgs = {
                    x: a[0],
                    y: a[1],
                    r: a[2] / 2,
                    innerR: a[3] / 2,
                    start: E(1e3 * f) / 1e3,
                    end: E(1e3 * g) / 1e3
                };
                h = (g + f) / 2;
                h > 1.5 * va ? h -= 2 * va : -va / 2 > h && (h += 2 * va);
                l.slicedTranslation = {
                    translateX: E(ua(h) * d),
                    translateY: E(Da(h) * d)
                };
                f = ua(h) * a[2] / 2;
                g = Da(h) * a[2] / 2;
                l.tooltipPos = [ a[0] + .7 * f, a[1] + .7 * g ];
                l.half = -va / 2 > h || h > va / 2 ? 1 : 0;
                l.angle = h;
                e = S(e, r / 2);
                l.labelPos = [ a[0] + f + ua(h) * r, a[1] + g + Da(h) * r, a[0] + f + ua(h) * e, a[1] + g + Da(h) * e, a[0] + f, a[1] + g, 0 > r ? "center" : l.half ? "right" : "left", h ];
            }
        },
        drawGraph: null,
        drawPoints: function() {
            var c, d, f, g, a = this, b = a.chart.renderer, e = a.options.shadow;
            e && !a.shadowGroup && (a.shadowGroup = b.g("shadow").add(a.group));
            y(a.points, function(h) {
                d = h.graphic;
                g = h.shapeArgs;
                f = h.shadowGroup;
                e && !f && (f = h.shadowGroup = b.g("shadow").add(a.shadowGroup));
                c = h.sliced ? h.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                };
                f && f.attr(c);
                d ? d.animate(l(g, c)) : h.graphic = d = b[h.shapeType](g).setRadialReference(a.center).attr(h.pointAttr[h.selected ? "select" : ""]).attr({
                    "stroke-linejoin": "round"
                }).attr(c).add(a.group).shadow(e, f);
                void 0 !== h.visible && h.setVisible(h.visible);
            });
        },
        sortByAngle: function(a, b) {
            a.sort(function(a, d) {
                return void 0 !== a.angle && (d.angle - a.angle) * b;
            });
        },
        drawLegendSymbol: Eb.drawRectangle,
        getCenter: Pb.getCenter,
        getSymbol: lb
    }, qb = Na(sa, qb);
    Ka.pie = qb;
    G(sa.prototype, "init", function(a) {
        var b;
        a.apply(this, Array.prototype.slice.call(arguments, 1));
        (b = this.xAxis) && b.options.ordinal && O(this, "updatedData", function() {
            delete b.ordinalIndex;
        });
    });
    G(K.prototype, "getTimeTicks", function(a, b, c, d, e, f, g, h) {
        var p, v, u, l, k = 0, m = 0, r = {}, n = [], t = -Number.MAX_VALUE, w = this.options.tickPixelInterval;
        if (!this.options.ordinal || !f || 3 > f.length || c === A) return a.call(this, b, c, d, e);
        for (u = f.length; u > m; m++) {
            l = m && f[m - 1] > d;
            f[m] < c && (k = m);
            if (m === u - 1 || f[m + 1] - f[m] > 5 * g || l) {
                if (f[m] > t) {
                    for (p = a.call(this, b, f[k], f[m], e); p.length && p[0] <= t; ) p.shift();
                    p.length && (t = p[p.length - 1]);
                    n = n.concat(p);
                }
                k = m + 1;
            }
            if (l) break;
        }
        a = p.info;
        if (h && a.unitRange <= H.hour) {
            m = n.length - 1;
            for (k = 1; m > k; k++) new ia(n[k] - Ca)[Ha]() !== new ia(n[k - 1] - Ca)[Ha]() && (r[n[k]] = "day", 
            v = !0);
            v && (r[n[0]] = "day");
            a.higherRanks = r;
        }
        n.info = a;
        if (h && q(w)) {
            h = a = n.length;
            var y, m = [];
            for (v = []; h--; ) k = this.translate(n[h]), y && (v[h] = y - k), m[h] = y = k;
            v.sort();
            v = v[X(v.length / 2)];
            .6 * w > v && (v = null);
            h = n[a - 1] > d ? a - 1 : a;
            for (y = void 0; h--; ) k = m[h], d = y - k, y && .8 * w > d && (null === v || .8 * v > d) ? (r[n[h]] && !r[n[h + 1]] ? (d = h + 1, 
            y = k) : d = h, n.splice(d, 1)) : y = k;
        }
        return n;
    });
    l(K.prototype, {
        beforeSetTickPositions: function() {
            var a, d, g, b = [], c = !1, e = this.getExtremes(), f = e.min, e = e.max;
            if (this.options.ordinal) {
                y(this.series, function(c, d) {
                    if (!1 !== c.visible && !1 !== c.takeOrdinalPosition && (b = b.concat(c.processedXData), 
                    a = b.length, b.sort(function(a, b) {
                        return a - b;
                    }), a)) for (d = a - 1; d--; ) b[d] === b[d + 1] && b.splice(d, 1);
                });
                a = b.length;
                if (a > 2) {
                    d = b[1] - b[0];
                    for (g = a - 1; g-- && !c; ) b[g + 1] - b[g] !== d && (c = !0);
                    !this.options.keepOrdinalPadding && (b[0] - f > d || e - b[b.length - 1] > d) && (c = !0);
                }
                c ? (this.ordinalPositions = b, c = this.val2lin(D(f, b[0]), !0), d = D(this.val2lin(S(e, b[b.length - 1]), !0), 1), 
                this.ordinalSlope = e = (e - f) / (d - c), this.ordinalOffset = f - c * e) : this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = A;
            }
            this.groupIntervalFactor = null;
        },
        val2lin: function(a, b) {
            var c = this.ordinalPositions;
            if (c) {
                var e, f, d = c.length;
                for (e = d; e--; ) if (c[e] === a) {
                    f = e;
                    break;
                }
                for (e = d - 1; e--; ) if (a > c[e] || 0 === e) {
                    c = (a - c[e]) / (c[e + 1] - c[e]);
                    f = e + c;
                    break;
                }
                return b ? f : this.ordinalSlope * (f || 0) + this.ordinalOffset;
            }
            return a;
        },
        lin2val: function(a, b) {
            var c = this.ordinalPositions;
            if (c) {
                var g, h, d = this.ordinalSlope, e = this.ordinalOffset, f = c.length - 1;
                if (b) 0 > a ? a = c[0] : a > f ? a = c[f] : (f = X(a), h = a - f); else for (;f--; ) if (g = d * f + e, 
                a >= g) {
                    d = d * (f + 1) + e;
                    h = (a - g) / (d - g);
                    break;
                }
                return h !== A && c[f] !== A ? c[f] + (h ? h * (c[f + 1] - c[f]) : 0) : a;
            }
            return a;
        },
        getExtendedPositions: function() {
            var f, g, a = this.chart, b = this.series[0].currentDataGrouping, c = this.ordinalIndex, d = b ? b.count + b.unitName : "raw", e = this.getExtremes();
            c || (c = this.ordinalIndex = {});
            c[d] || (f = {
                series: [],
                getExtremes: function() {
                    return {
                        min: e.dataMin,
                        max: e.dataMax
                    };
                },
                options: {
                    ordinal: !0
                },
                val2lin: K.prototype.val2lin
            }, y(this.series, function(c) {
                g = {
                    xAxis: f,
                    xData: c.xData,
                    chart: a,
                    destroyGroupedData: lb
                };
                g.options = {
                    dataGrouping: b ? {
                        enabled: !0,
                        forced: !0,
                        approximation: "open",
                        units: [ [ b.unitName, [ b.count ] ] ]
                    } : {
                        enabled: !1
                    }
                };
                c.processData.apply(g);
                f.series.push(g);
            }), this.beforeSetTickPositions.apply(f), c[d] = f.ordinalPositions);
            return c[d];
        },
        getGroupIntervalFactor: function(a, b, c) {
            var d = 0;
            c = c.processedXData;
            var e = c.length, f = [], g = this.groupIntervalFactor;
            if (!g) {
                for (;e - 1 > d; d++) f[d] = c[d + 1] - c[d];
                f.sort(function(a, b) {
                    return a - b;
                });
                d = f[X(e / 2)];
                a = D(a, c[0]);
                b = S(b, c[e - 1]);
                this.groupIntervalFactor = g = e * d / (b - a);
            }
            return g;
        },
        postProcessTickInterval: function(a) {
            var b = this.ordinalSlope;
            return b ? a / (b / this.closestPointRange) : a;
        }
    });
    G(V.prototype, "pan", function(a, b) {
        var c = this.xAxis[0], d = b.chartX, e = !1;
        if (c.options.ordinal && c.series.length) {
            var l, f = this.mouseDownX, g = c.getExtremes(), h = g.dataMax, k = g.min, m = g.max, p = this.hoverPoints, r = c.closestPointRange, f = (f - d) / (c.translationSlope * (c.ordinalSlope || r)), v = {
                ordinalPositions: c.getExtendedPositions()
            }, r = c.lin2val, u = c.val2lin;
            v.ordinalPositions ? 1 < qa(f) && (p && y(p, function(a) {
                a.setState();
            }), 0 > f ? (p = v, l = c.ordinalPositions ? c : v) : (p = c.ordinalPositions ? c : v, 
            l = v), v = l.ordinalPositions, h > v[v.length - 1] && v.push(h), this.fixedRange = m - k, 
            f = c.toFixedRange(null, null, r.apply(p, [ u.apply(p, [ k, !0 ]) + f, !0 ]), r.apply(l, [ u.apply(l, [ m, !0 ]) + f, !0 ])), 
            f.min >= S(g.dataMin, k) && f.max <= D(h, m) && c.setExtremes(f.min, f.max, !0, !1, {
                trigger: "pan"
            }), this.mouseDownX = d, J(this.container, {
                cursor: "move"
            })) : e = !0;
        } else e = !0;
        e && a.apply(this, Array.prototype.slice.call(arguments, 1));
    });
    G(sa.prototype, "getSegments", function(a) {
        var b, c = this.options.gapSize, d = this.xAxis;
        a.apply(this, Array.prototype.slice.call(arguments, 1));
        c && (b = this.segments, y(b, function(a, f) {
            for (var g = a.length - 1; g--; ) a[g + 1].x - a[g].x > d.closestPointRange * c && b.splice(f + 1, 0, a.splice(g + 1, a.length - g));
        }));
    });
    var ea = sa.prototype, Fb = Tooltip.prototype, Rb = ea.processData, Sb = ea.generatePoints, Tb = ea.destroy, Ub = Fb.tooltipHeaderFormatter, Vb = {
        approximation: "average",
        groupPixelWidth: 2,
        dateTimeLabelFormats: {
            millisecond: [ "%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L" ],
            second: [ "%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S" ],
            minute: [ "%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M" ],
            hour: [ "%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M" ],
            day: [ "%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y" ],
            week: [ "Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y" ],
            month: [ "%B %Y", "%B", "-%B %Y" ],
            year: [ "%Y", "%Y", "-%Y" ]
        }
    }, Gb = {
        line: {},
        spline: {},
        area: {},
        areaspline: {},
        column: {
            approximation: "sum",
            groupPixelWidth: 10
        },
        arearange: {
            approximation: "range"
        },
        areasplinerange: {
            approximation: "range"
        },
        columnrange: {
            approximation: "range",
            groupPixelWidth: 10
        },
        candlestick: {
            approximation: "ohlc",
            groupPixelWidth: 10
        },
        ohlc: {
            approximation: "ohlc",
            groupPixelWidth: 5
        }
    }, Hb = [ [ "millisecond", [ 1, 2, 5, 10, 20, 25, 50, 100, 200, 500 ] ], [ "second", [ 1, 2, 5, 10, 15, 30 ] ], [ "minute", [ 1, 2, 5, 10, 15, 30 ] ], [ "hour", [ 1, 2, 3, 4, 6, 8, 12 ] ], [ "day", [ 1 ] ], [ "week", [ 1 ] ], [ "month", [ 1, 3, 6 ] ], [ "year", null ] ], Fa = {
        sum: function(a) {
            var c, b = a.length;
            if (!b && a.hasNulls) c = null; else if (b) for (c = 0; b--; ) c += a[b];
            return c;
        },
        average: function(a) {
            var b = a.length;
            a = Fa.sum(a);
            "number" == typeof a && b && (a /= b);
            return a;
        },
        open: function(a) {
            return a.length ? a[0] : a.hasNulls ? null : A;
        },
        high: function(a) {
            return a.length ? Ba(a) : a.hasNulls ? null : A;
        },
        low: function(a) {
            return a.length ? aa(a) : a.hasNulls ? null : A;
        },
        close: function(a) {
            return a.length ? a[a.length - 1] : a.hasNulls ? null : A;
        },
        ohlc: function(a, b, c, d) {
            a = Fa.open(a);
            b = Fa.high(b);
            c = Fa.low(c);
            d = Fa.close(d);
            if ("number" == typeof a || "number" == typeof b || "number" == typeof c || "number" == typeof d) return [ a, b, c, d ];
        },
        range: function(a, b) {
            a = Fa.low(a);
            b = Fa.high(b);
            if ("number" == typeof a || "number" == typeof b) return [ a, b ];
        }
    };
    ea.groupData = function(a, b, c, d) {
        var m, p, e = this.data, f = this.options.data, g = [], h = [], k = a.length, r = !!b, v = [ [], [], [], [] ];
        d = "function" == typeof d ? d : Fa[d];
        var n, u = this.pointArrayMap, l = u && u.length;
        for (n = 0; k >= n && !(a[n] >= c[0]); n++) ;
        for (;k >= n; n++) {
            for (;(c[1] !== A && a[n] >= c[1] || n === k) && (m = c.shift(), p = d.apply(0, v), 
            p !== A && (g.push(m), h.push(p)), v[0] = [], v[1] = [], v[2] = [], v[3] = [], n !== k); ) ;
            if (n === k) break;
            if (u) {
                m = this.cropStart + n;
                m = e && e[m] || this.pointClass.prototype.applyOptions.apply({
                    series: this
                }, [ f[m] ]);
                var q;
                for (p = 0; l > p; p++) q = m[u[p]], "number" == typeof q ? v[p].push(q) : null === q && (v[p].hasNulls = !0);
            } else m = r ? b[n] : null, "number" == typeof m ? v[0].push(m) : null === m && (v[0].hasNulls = !0);
        }
        return [ g, h ];
    };
    ea.processData = function() {
        var e, a = this.chart, b = this.options, c = b.dataGrouping, d = !1 !== this.allowDG && c && n(c.enabled, a.options._stock);
        this.forceCrop = d;
        this.groupPixelWidth = null;
        this.hasProcessed = !0;
        if (!1 !== Rb.apply(this, arguments) && d) {
            this.destroyGroupedData();
            var f = this.processedXData, g = this.processedYData, h = a.plotSizeX, a = this.xAxis, k = a.options.ordinal, m = this.groupPixelWidth = a.getGroupPixelWidth && a.getGroupPixelWidth(), d = this.pointRange;
            if (m) {
                e = !0;
                this.points = null;
                var p = a.getExtremes(), d = p.min, p = p.max, k = k && a.getGroupIntervalFactor(d, p, this) || 1, h = m * (p - d) / h * k, m = a.getTimeTicks(a.normalizeTimeTickInterval(h, c.units || Hb), d, p, a.options.startOfWeek, f, this.closestPointRange), g = ea.groupData.apply(this, [ f, g, m, c.approximation ]), f = g[0], g = g[1];
                if (c.smoothed) {
                    c = f.length - 1;
                    for (f[c] = p; c-- && c > 0; ) f[c] += h / 2;
                    f[0] = d;
                }
                this.currentDataGrouping = m.info;
                null === b.pointRange && (this.pointRange = m.info.totalRange);
                this.closestPointRange = m.info.totalRange;
                q(f[0]) && f[0] < a.dataMin && (a.dataMin = f[0]);
                this.processedXData = f;
                this.processedYData = g;
            } else this.currentDataGrouping = null, this.pointRange = d;
            this.hasGroupedData = e;
        }
    };
    ea.destroyGroupedData = function() {
        var a = this.groupedData;
        y(a || [], function(b, c) {
            b && (a[c] = b.destroy ? b.destroy() : null);
        });
        this.groupedData = null;
    };
    ea.generatePoints = function() {
        Sb.apply(this);
        this.destroyGroupedData();
        this.groupedData = this.hasGroupedData ? this.points : null;
    };
    Fb.tooltipHeaderFormatter = function(a) {
        var f, h, b = a.series, c = b.tooltipOptions, d = b.options.dataGrouping, e = c.xDateFormat, g = b.xAxis;
        if (g && "datetime" === g.options.type && d && Q(a.key)) {
            b = b.currentDataGrouping;
            d = d.dateTimeLabelFormats;
            if (b) g = d[b.unitName], 1 === b.count ? e = g[0] : (e = g[1], f = g[2]); else if (!e && d) for (h in H) if (H[h] >= g.closestPointRange || H[h] <= H.day && 0 < a.key % H[h]) {
                e = d[h][0];
                break;
            }
            e = ta(e, a.key);
            f && (e += ta(f, a.key + b.totalRange - 1));
            a = c.headerFormat.replace("{point.key}", e);
        } else a = Ub.call(this, a);
        return a;
    };
    ea.destroy = function() {
        for (var a = this.groupedData || [], b = a.length; b--; ) a[b] && a[b].destroy();
        Tb.apply(this);
    };
    G(ea, "setOptions", function(a, b) {
        var c = a.call(this, b), d = this.type, e = this.chart.options.plotOptions, f = Qa[d].dataGrouping;
        Gb[d] && (f || (f = x(Vb, Gb[d])), c.dataGrouping = x(f, e.series && e.series.dataGrouping, e[d].dataGrouping, b.dataGrouping));
        this.chart.options._stock && (this.requireSorting = !0);
        return c;
    });
    G(K.prototype, "setScale", function(a) {
        a.call(this);
        y(this.series, function(a) {
            a.hasProcessed = !1;
        });
    });
    K.prototype.getGroupPixelWidth = function() {
        var c, f, a = this.series, b = a.length, d = 0, e = !1;
        for (c = b; c--; ) (f = a[c].options.dataGrouping) && (d = D(d, f.groupPixelWidth));
        for (c = b; c--; ) (f = a[c].options.dataGrouping) && a[c].hasProcessed && (b = (a[c].processedXData || a[c].data).length, 
        a[c].groupPixelWidth || b > this.chart.plotSizeX / d || b && f.forced) && (e = !0);
        return e ? d : 0;
    };
    var rb = [].concat(Hb), bb = function(a) {
        return Math[a].apply(0, ab(arguments, function(a) {
            return "number" == typeof a;
        }));
    };
    rb[4] = [ "day", [ 1, 2, 3, 4 ] ];
    rb[5] = [ "week", [ 1, 2, 3 ] ];
    l(R, {
        navigator: {
            handles: {
                backgroundColor: "#ebe7e8",
                borderColor: "#b2b1b6"
            },
            height: 40,
            margin: 25,
            maskFill: "rgba(128,179,236,0.3)",
            maskInside: !0,
            outlineColor: "#b2b1b6",
            outlineWidth: 1,
            series: {
                type: Ka.areaspline === A ? "line" : "areaspline",
                color: "#4572A7",
                compare: null,
                fillOpacity: .05,
                dataGrouping: {
                    approximation: "average",
                    enabled: !0,
                    groupPixelWidth: 2,
                    smoothed: !0,
                    units: rb
                },
                dataLabels: {
                    enabled: !1,
                    zIndex: 2
                },
                id: "highcharts-navigator-series",
                lineColor: "#4572A7",
                lineWidth: 1,
                marker: {
                    enabled: !1
                },
                pointRange: 0,
                shadow: !1,
                threshold: null
            },
            xAxis: {
                tickWidth: 0,
                lineWidth: 0,
                gridLineColor: "#EEE",
                gridLineWidth: 1,
                tickPixelInterval: 200,
                labels: {
                    align: "left",
                    style: {
                        color: "#888"
                    },
                    x: 3,
                    y: -4
                },
                crosshair: !1
            },
            yAxis: {
                gridLineWidth: 0,
                startOnTick: !1,
                endOnTick: !1,
                minPadding: .1,
                maxPadding: .1,
                labels: {
                    enabled: !1
                },
                crosshair: !1,
                title: {
                    text: null
                },
                tickWidth: 0
            }
        },
        scrollbar: {
            height: Ra ? 20 : 14,
            barBackgroundColor: "#bfc8d1",
            barBorderRadius: 0,
            barBorderWidth: 1,
            barBorderColor: "#bfc8d1",
            buttonArrowColor: "#666",
            buttonBackgroundColor: "#ebe7e8",
            buttonBorderColor: "#bbb",
            buttonBorderRadius: 0,
            buttonBorderWidth: 1,
            minWidth: 6,
            rifleColor: "#666",
            trackBackgroundColor: "#eeeeee",
            trackBorderColor: "#eeeeee",
            trackBorderWidth: 1,
            liveRedraw: oa && !Ra
        }
    });
    gb.prototype = {
        drawHandle: function(a, b) {
            var h, c = this.chart, d = c.renderer, e = this.elementsToDestroy, f = this.handles, g = this.navigatorOptions.handles, g = {
                fill: g.backgroundColor,
                stroke: g.borderColor,
                "stroke-width": 1
            };
            this.rendered || (f[b] = d.g("navigator-handle-" + [ "left", "right" ][b]).css({
                cursor: "e-resize"
            }).attr({
                zIndex: 4 - b
            }).add(), h = d.rect(-4.5, 0, 9, 16, 0, 1).attr(g).add(f[b]), e.push(h), h = d.path([ "M", -1.5, 4, "L", -1.5, 12, "M", .5, 4, "L", .5, 12 ]).attr(g).add(f[b]), 
            e.push(h));
            f[b][c.isResizing ? "animate" : "attr"]({
                translateX: this.scrollerLeft + this.scrollbarHeight + parseInt(a, 10),
                translateY: this.top + this.height / 2 - 8
            });
        },
        drawScrollbarButton: function(a) {
            var g, b = this.chart.renderer, c = this.elementsToDestroy, d = this.scrollbarButtons, e = this.scrollbarHeight, f = this.scrollbarOptions;
            this.rendered || (d[a] = b.g().add(this.scrollbarGroup), g = b.rect(-.5, -.5, e + 1, e + 1, f.buttonBorderRadius, f.buttonBorderWidth).attr({
                stroke: f.buttonBorderColor,
                "stroke-width": f.buttonBorderWidth,
                fill: f.buttonBackgroundColor
            }).add(d[a]), c.push(g), g = b.path([ "M", e / 2 + (a ? -1 : 1), e / 2 - 3, "L", e / 2 + (a ? -1 : 1), e / 2 + 3, e / 2 + (a ? 2 : -2), e / 2 ]).attr({
                fill: f.buttonArrowColor
            }).add(d[a]), c.push(g));
            a && d[a].attr({
                translateX: this.scrollerWidth - e
            });
        },
        render: function(a, b, c, d) {
            var g, h, k, m, M, e = this.chart, f = e.renderer, p = this.scrollbarGroup, r = this.navigatorGroup, v = this.scrollbar, r = this.xAxis, l = this.scrollbarTrack, q = this.scrollbarHeight, t = this.scrollbarEnabled, w = this.navigatorOptions, y = this.scrollbarOptions, x = y.minWidth, G = this.height, I = this.top, L = this.navigatorEnabled, C = w.outlineWidth, A = C / 2, B = 0, da = this.outlineHeight, F = y.barBorderRadius, K = y.barBorderWidth, H = I + A;
            if (!isNaN(a)) {
                this.navigatorLeft = g = n(r.left, e.plotLeft + q);
                this.navigatorWidth = h = n(r.len, e.plotWidth - 2 * q);
                this.scrollerLeft = k = g - q;
                this.scrollerWidth = m = m = h + 2 * q;
                r.getExtremes && (M = this.getUnionExtremes(!0), !M || M.dataMin === r.min && M.dataMax === r.max || r.setExtremes(M.dataMin, M.dataMax, !0, !1));
                c = n(c, r.translate(a));
                d = n(d, r.translate(b));
                (isNaN(c) || 1/0 === qa(c)) && (c = 0, d = m);
                if (!(r.translate(d, !0) - r.translate(c, !0) < e.xAxis[0].minRange)) {
                    this.zoomedMax = S(D(c, d), h);
                    this.zoomedMin = D(this.fixedWidth ? this.zoomedMax - this.fixedWidth : S(c, d), 0);
                    this.range = this.zoomedMax - this.zoomedMin;
                    c = E(this.zoomedMax);
                    b = E(this.zoomedMin);
                    a = c - b;
                    this.rendered || (L && (this.navigatorGroup = r = f.g("navigator").attr({
                        zIndex: 3
                    }).add(), this.leftShade = f.rect().attr({
                        fill: w.maskFill
                    }).add(r), w.maskInside || (this.rightShade = f.rect().attr({
                        fill: w.maskFill
                    }).add(r)), this.outline = f.path().attr({
                        "stroke-width": C,
                        stroke: w.outlineColor
                    }).add(r)), t && (this.scrollbarGroup = p = f.g("scrollbar").add(), v = y.trackBorderWidth, 
                    this.scrollbarTrack = l = f.rect().attr({
                        x: 0,
                        y: -v % 2 / 2,
                        fill: y.trackBackgroundColor,
                        stroke: y.trackBorderColor,
                        "stroke-width": v,
                        r: y.trackBorderRadius || 0,
                        height: q
                    }).add(p), this.scrollbar = v = f.rect().attr({
                        y: -K % 2 / 2,
                        height: q,
                        fill: y.barBackgroundColor,
                        stroke: y.barBorderColor,
                        "stroke-width": K,
                        r: F
                    }).add(p), this.scrollbarRifles = f.path().attr({
                        stroke: y.rifleColor,
                        "stroke-width": 1
                    }).add(p)));
                    e = e.isResizing ? "animate" : "attr";
                    if (L) {
                        this.leftShade[e](w.maskInside ? {
                            x: g + b,
                            y: I,
                            width: c - b,
                            height: G
                        } : {
                            x: g,
                            y: I,
                            width: b,
                            height: G
                        });
                        this.rightShade && this.rightShade[e]({
                            x: g + c,
                            y: I,
                            width: h - c,
                            height: G
                        });
                        this.outline[e]({
                            d: [ "M", k, H, "L", g + b + A, H, g + b + A, H + da, "L", g + c - A, H + da, "L", g + c - A, H, k + m, H ].concat(w.maskInside ? [ "M", g + b + A, H, "L", g + c - A, H ] : [])
                        });
                        this.drawHandle(b + A, 0);
                        this.drawHandle(c + A, 1);
                    }
                    t && p && (this.drawScrollbarButton(0), this.drawScrollbarButton(1), p[e]({
                        translateX: k,
                        translateY: E(H + G)
                    }), l[e]({
                        width: m
                    }), g = q + b, h = a - K, x > h && (B = (x - h) / 2, h = x, g -= B), this.scrollbarPad = B, 
                    v[e]({
                        x: X(g) + K % 2 / 2,
                        width: h
                    }), x = q + b + a / 2 - .5, this.scrollbarRifles.attr({
                        visibility: a > 12 ? "visible" : "hidden"
                    })[e]({
                        d: [ "M", x - 3, q / 4, "L", x - 3, 2 * q / 3, "M", x, q / 4, "L", x, 2 * q / 3, "M", x + 3, q / 4, "L", x + 3, 2 * q / 3 ]
                    }));
                    this.scrollbarPad = B;
                    this.rendered = !0;
                }
            }
        },
        addEvents: function() {
            var a = this.chart.container, a = [ [ a, "mousedown", this.mouseDownHandler ], [ a, "mousemove", this.mouseMoveHandler ], [ document, "mouseup", this.mouseUpHandler ] ];
            y(a, function(a) {
                O.apply(null, a);
            });
            this._events = a;
        },
        removeEvents: function() {
            y(this._events, function(a) {
                ba.apply(null, a);
            });
            this._events = A;
            this.navigatorEnabled && this.baseSeries && ba(this.baseSeries, "updatedData", this.updatedDataHandler);
        },
        init: function() {
            var c, d, k, m, r, a = this, b = a.chart, e = a.scrollbarHeight, f = a.navigatorOptions, g = a.height, h = a.top, p = document.body.style, l = a.baseSeries;
            a.mouseDownHandler = function(d) {
                d = b.pointer.normalize(d);
                var e = a.zoomedMin, f = a.zoomedMax, h = a.top, m = a.scrollbarHeight, l = a.scrollerLeft, n = a.scrollerWidth, v = a.navigatorLeft, u = a.navigatorWidth, q = a.scrollbarPad, t = a.range, w = d.chartX, y = d.chartY;
                d = b.xAxis[0];
                var z, x = Ra ? 10 : 7;
                y > h && h + g + m > y && ((h = !a.scrollbarEnabled || h + g > y) && W.abs(w - e - v) < x ? (a.grabbedLeft = !0, 
                a.otherHandlePos = f, a.fixedExtreme = d.max, b.fixedRange = null) : h && W.abs(w - f - v) < x ? (a.grabbedRight = !0, 
                a.otherHandlePos = e, a.fixedExtreme = d.min, b.fixedRange = null) : w > v + e - q && v + f + q > w ? (a.grabbedCenter = w, 
                a.fixedWidth = t, b.renderer.isSVG && (r = p.cursor, p.cursor = "ew-resize"), k = w - e) : w > l && l + n > w && (f = h ? w - v - t / 2 : v > w ? e - .2 * t : w > l + n - m ? e + .2 * t : v + e > w ? e - t : f, 
                0 > f ? f = 0 : f + t >= u && (f = u - t, z = c.dataMax), f !== e && (a.fixedWidth = t, 
                e = c.toFixedRange(f, f + t, null, z), d.setExtremes(e.min, e.max, !0, !1, {
                    trigger: "navigator"
                }))));
            };
            a.mouseMoveHandler = function(c) {
                var r, d = a.scrollbarHeight, e = a.navigatorLeft, f = a.navigatorWidth, g = a.scrollerLeft, h = a.scrollerWidth, p = a.range;
                0 !== c.pageX && (c = b.pointer.normalize(c), r = c.chartX, e > r ? r = e : r > g + h - d && (r = g + h - d), 
                a.grabbedLeft ? (m = !0, a.render(0, 0, r - e, a.otherHandlePos)) : a.grabbedRight ? (m = !0, 
                a.render(0, 0, a.otherHandlePos, r - e)) : a.grabbedCenter && (m = !0, k > r ? r = k : r > f + k - p && (r = f + k - p), 
                a.render(0, 0, r - k, r - k + p)), m && a.scrollbarOptions.liveRedraw && setTimeout(function() {
                    a.mouseUpHandler(c);
                }, 0));
            };
            a.mouseUpHandler = function(d) {
                var e, f;
                m && (a.zoomedMin === a.otherHandlePos ? e = a.fixedExtreme : a.zoomedMax === a.otherHandlePos && (f = a.fixedExtreme), 
                e = c.toFixedRange(a.zoomedMin, a.zoomedMax, e, f), b.xAxis[0].setExtremes(e.min, e.max, !0, !1, {
                    trigger: "navigator",
                    triggerOp: "navigator-drag",
                    DOMEvent: d
                }));
                "mousemove" !== d.type && (a.grabbedLeft = a.grabbedRight = a.grabbedCenter = a.fixedWidth = a.fixedExtreme = a.otherHandlePos = m = k = null, 
                p.cursor = r || "");
            };
            var u = b.xAxis.length, q = b.yAxis.length;
            b.extraBottomMargin = a.outlineHeight + f.margin;
            a.navigatorEnabled ? (a.xAxis = c = new K(b, x({
                ordinal: l && l.xAxis.options.ordinal
            }, f.xAxis, {
                id: "navigator-x-axis",
                isX: !0,
                type: "datetime",
                index: u,
                height: g,
                offset: 0,
                offsetLeft: e,
                offsetRight: -e,
                keepOrdinalPadding: !0,
                startOnTick: !1,
                endOnTick: !1,
                minPadding: 0,
                maxPadding: 0,
                zoomEnabled: !1
            })), a.yAxis = d = new K(b, x(f.yAxis, {
                id: "navigator-y-axis",
                alignTicks: !1,
                height: g,
                offset: 0,
                index: q,
                zoomEnabled: !1
            })), l || f.series.data ? a.addBaseSeries() : 0 === b.series.length && G(b, "redraw", function(c, d) {
                0 < b.series.length && !a.series && (a.setBaseSeries(), b.redraw = c);
                c.call(b, d);
            })) : a.xAxis = c = {
                translate: function(a, c) {
                    var d = b.xAxis[0], f = d.getExtremes(), g = b.plotWidth - 2 * e, h = bb("min", d.options.min, f.dataMin), d = bb("max", d.options.max, f.dataMax) - h;
                    return c ? a * d / g + h : g * (a - h) / d;
                },
                toFixedRange: K.prototype.toFixedRange
            };
            G(b, "getMargins", function(b) {
                var e = this.legend, f = e.options;
                b.call(this);
                a.top = h = a.navigatorOptions.top || this.chartHeight - a.height - a.scrollbarHeight - this.spacing[2] - ("bottom" === f.verticalAlign && f.enabled && !f.floating ? e.legendHeight + n(f.margin, 10) : 0);
                c && d && (c.options.top = d.options.top = h, c.setAxisSize(), d.setAxisSize());
            });
            a.addEvents();
        },
        getUnionExtremes: function(a) {
            var b = this.chart.xAxis[0], c = this.xAxis, d = c.options, e = b.options;
            if (!a || null !== b.dataMin) return {
                dataMin: bb("min", d && d.min, e.min, b.dataMin, c.dataMin),
                dataMax: bb("max", d && d.max, e.max, b.dataMax, c.dataMax)
            };
        },
        setBaseSeries: function(a) {
            var b = this.chart;
            a = a || b.options.navigator.baseSeries;
            this.series && this.series.remove();
            this.baseSeries = b.series[a] || "string" == typeof a && b.get(a) || b.series[0];
            this.xAxis && this.addBaseSeries();
        },
        addBaseSeries: function() {
            var e, a = this.baseSeries, b = a ? a.options : {}, c = b.data, d = this.navigatorOptions.series;
            e = d.data;
            this.hasNavigatorData = !!e;
            b = x(b, d, {
                enableMouseTracking: !1,
                group: "nav",
                padXAxis: !1,
                xAxis: "navigator-x-axis",
                yAxis: "navigator-y-axis",
                name: "Navigator",
                showInLegend: !1,
                isInternal: !0,
                visible: !0
            });
            b.data = e || c;
            this.series = this.chart.initSeries(b);
            a && !1 !== this.navigatorOptions.adaptToUpdatedData && (O(a, "updatedData", this.updatedDataHandler), 
            a.userOptions.events = l(a.userOptions.event, {
                updatedData: this.updatedDataHandler
            }));
        },
        updatedDataHandler: function() {
            var k, m, p, r, l, a = this.chart.scroller, b = a.baseSeries, c = b.xAxis, d = c.getExtremes(), e = d.min, f = d.max, g = d.dataMin, d = d.dataMax, h = f - e, n = a.series;
            k = n.xData;
            var q = !!c.setExtremes;
            m = f >= k[k.length - 1] - (this.closestPointRange || 0);
            k = g >= e;
            a.hasNavigatorData || (n.options.pointStart = b.xData[0], n.setData(b.options.data, !1), 
            l = !0);
            k && (r = g, p = r + h);
            m && (p = d, k || (r = D(p - h, n.xData[0])));
            q && (k || m) ? isNaN(r) || c.setExtremes(r, p, !0, !1, {
                trigger: "updatedData"
            }) : (l && this.chart.redraw(!1), a.render(D(e, g), S(f, d)));
        },
        destroy: function() {
            this.removeEvents();
            y([ this.xAxis, this.yAxis, this.leftShade, this.rightShade, this.outline, this.scrollbarTrack, this.scrollbarRifles, this.scrollbarGroup, this.scrollbar ], function(a) {
                a && a.destroy && a.destroy();
            });
            this.xAxis = this.yAxis = this.leftShade = this.rightShade = this.outline = this.scrollbarTrack = this.scrollbarRifles = this.scrollbarGroup = this.scrollbar = null;
            y([ this.scrollbarButtons, this.handles, this.elementsToDestroy ], function(a) {
                ka(a);
            });
        }
    };
    ca.Scroller = gb;
    G(K.prototype, "zoom", function(a, b, c) {
        var h, d = this.chart, e = d.options, f = e.chart.zoomType, g = e.navigator, e = e.rangeSelector;
        this.isXAxis && (g && g.enabled || e && e.enabled) && ("x" === f ? d.resetZoomButton = "blocked" : "y" === f ? h = !1 : "xy" === f && (d = this.previousZoom, 
        q(b) ? this.previousZoom = [ this.min, this.max ] : d && (b = d[0], c = d[1], delete this.previousZoom)));
        return h !== A ? h : a.call(this, b, c);
    });
    G(V.prototype, "init", function(a, b, c) {
        O(this, "beforeRender", function() {
            var a = this.options;
            (a.navigator.enabled || a.scrollbar.enabled) && (this.scroller = new gb(this));
        });
        a.call(this, b, c);
    });
    G(sa.prototype, "addPoint", function(a, b, c, d, e) {
        var f = this.options.turboThreshold;
        f && this.xData.length > f && N(b) && !P(b) && this.chart.scroller && la(20, !0);
        a.call(this, b, c, d, e);
    });
    l(R, {
        rangeSelector: {
            buttonTheme: {
                width: 28,
                height: 18,
                fill: "#f7f7f7",
                padding: 2,
                r: 0,
                "stroke-width": 0,
                style: {
                    color: "#444",
                    cursor: "pointer",
                    fontWeight: "normal"
                },
                zIndex: 7,
                states: {
                    hover: {
                        fill: "#e7e7e7"
                    },
                    select: {
                        fill: "#e7f0f9",
                        style: {
                            color: "black",
                            fontWeight: "bold"
                        }
                    }
                }
            },
            inputPosition: {
                align: "right"
            },
            labelStyle: {
                color: "#666"
            }
        }
    });
    R.lang = x(R.lang, {
        rangeSelectorZoom: "Zoom",
        rangeSelectorFrom: "From",
        rangeSelectorTo: "To"
    });
    hb.prototype = {
        clickButton: function(a, b) {
            var r, w, c = this, d = c.selected, e = c.chart, f = c.buttons, g = c.buttonOptions[a], h = e.xAxis[0], k = e.scroller && e.scroller.getUnionExtremes() || h || {}, m = k.dataMin, p = k.dataMax, l = h && E(S(h.max, n(p, h.max))), u = new ia(l), q = g.type, t = g.count, k = g._range;
            if (null !== m && null !== p && a !== c.selected) {
                if ("month" === q || "year" === q) r = {
                    month: "Month",
                    year: "FullYear"
                }[q], u["set" + r](u["get" + r]() - t), r = u.getTime(), m = n(m, Number.MIN_VALUE), 
                isNaN(r) || m > r ? (r = m, l = S(r + k, p)) : k = l - r; else if (k) r = D(l - k, m), 
                l = S(r + k, p); else if ("ytd" === q) {
                    if (!h) {
                        O(e, "beforeRender", function() {
                            c.clickButton(a);
                        });
                        return;
                    }
                    p === A && (m = Number.MAX_VALUE, p = Number.MIN_VALUE, y(e.series, function(a) {
                        a = a.xData;
                        m = S(a[0], m);
                        p = D(a[a.length - 1], p);
                    }), b = !1), l = new ia(p), w = l.getFullYear(), r = w = D(m || 0, ia.UTC(w, 0, 1)), 
                    l = l.getTime(), l = S(p || l, l);
                } else "all" === q && h && (r = m, l = p);
                f[d] && f[d].setState(0);
                f[a] && f[a].setState(2);
                e.fixedRange = k;
                h ? h.setExtremes(r, l, n(b, 1), 0, {
                    trigger: "rangeSelectorButton",
                    rangeSelectorButton: g
                }) : (d = e.options.xAxis, d[0] = x(d[0], {
                    range: k,
                    min: w
                }));
                c.setSelected(a);
            }
        },
        setSelected: function(a) {
            this.selected = this.options.selected = a;
        },
        defaultButtons: [ {
            type: "month",
            count: 1,
            text: "1m"
        }, {
            type: "month",
            count: 3,
            text: "3m"
        }, {
            type: "month",
            count: 6,
            text: "6m"
        }, {
            type: "ytd",
            text: "YTD"
        }, {
            type: "year",
            count: 1,
            text: "1y"
        }, {
            type: "all",
            text: "All"
        } ],
        init: function(a) {
            var b = this, c = a.options.rangeSelector, d = c.buttons || [].concat(b.defaultButtons), e = c.selected, f = b.blurInputs = function() {
                var a = b.minInput, c = b.maxInput;
                a && a.blur && ha(a, "blur");
                c && c.blur && ha(c, "blur");
            };
            b.chart = a;
            b.options = c;
            b.buttons = [];
            a.extraTopMargin = 35;
            b.buttonOptions = d;
            O(a.container, "mousedown", f);
            O(a, "resize", f);
            y(d, b.computeButtonRange);
            e !== A && d[e] && this.clickButton(e, !1);
            O(a, "load", function() {
                O(a.xAxis[0], "afterSetExtremes", function() {
                    b.updateButtonStates(!0);
                });
            });
        },
        updateButtonStates: function(a) {
            var b = this, c = this.chart, d = c.xAxis[0], e = c.scroller && c.scroller.getUnionExtremes() || d, f = e.dataMin, g = e.dataMax, h = b.selected, k = b.options.allButtonsEnabled, m = b.buttons;
            a && c.fixedRange !== E(d.max - d.min) && (m[h] && m[h].setState(0), b.setSelected(null));
            y(b.buttonOptions, function(a, c) {
                var e = a._range, l = e > g - f, n = e < d.minRange, q = "all" === a.type && d.max - d.min >= g - f && 2 !== m[c].state, t = "ytd" === a.type && ta("%Y", f) === ta("%Y", g);
                e === E(d.max - d.min) && c !== h ? (b.setSelected(c), m[c].setState(2)) : !k && (l || n || q || t) ? m[c].setState(3) : 3 === m[c].state && m[c].setState(0);
            });
        },
        computeButtonRange: function(a) {
            var b = a.type, c = a.count || 1, d = {
                millisecond: 1,
                second: 1e3,
                minute: 6e4,
                hour: 36e5,
                day: 864e5,
                week: 6048e5
            };
            d[b] ? a._range = d[b] * c : ("month" === b || "year" === b) && (a._range = 864e5 * {
                month: 30,
                year: 365
            }[b] * c);
        },
        setInputValue: function(a, b) {
            var c = this.chart.options.rangeSelector;
            q(b) && (this[a + "Input"].HCTime = b);
            this[a + "Input"].value = ta(c.inputEditDateFormat || "%Y-%m-%d", this[a + "Input"].HCTime);
            this[a + "DateBox"].attr({
                text: ta(c.inputDateFormat || "%b %e, %Y", this[a + "Input"].HCTime)
            });
        },
        drawInput: function(a) {
            var k, m, p, b = this, c = b.chart, d = c.renderer.style, e = c.renderer, f = c.options.rangeSelector, g = b.div, h = "min" === a, r = this.inputGroup;
            this[a + "Label"] = m = e.label(R.lang[h ? "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).attr({
                padding: 2
            }).css(x(d, f.labelStyle)).add(r);
            r.offset += m.width + 5;
            this[a + "DateBox"] = p = e.label("", r.offset).attr({
                padding: 2,
                width: f.inputBoxWidth || 90,
                height: f.inputBoxHeight || 17,
                stroke: f.inputBoxBorderColor || "silver",
                "stroke-width": 1
            }).css(x({
                textAlign: "center",
                color: "#444"
            }, d, f.inputStyle)).on("click", function() {
                b[a + "Input"].focus();
            }).add(r);
            r.offset += p.width + (h ? 10 : 0);
            this[a + "Input"] = k = fa("input", {
                name: a,
                className: "highcharts-range-selector",
                type: "text"
            }, l({
                position: "absolute",
                border: 0,
                width: "1px",
                height: "1px",
                padding: 0,
                textAlign: "center",
                fontSize: d.fontSize,
                fontFamily: d.fontFamily,
                top: c.plotTop + "px"
            }, f.inputStyle), g);
            k.onfocus = function() {
                J(this, {
                    left: r.translateX + p.x + "px",
                    top: r.translateY + "px",
                    width: p.width - 2 + "px",
                    height: p.height - 2 + "px",
                    border: "2px solid silver"
                });
            };
            k.onblur = function() {
                J(this, {
                    border: 0,
                    width: "1px",
                    height: "1px"
                });
                b.setInputValue(a);
            };
            k.onchange = function() {
                var a = k.value, d = (f.inputDateParser || ia.parse)(a), e = c.xAxis[0], g = e.dataMin, m = e.dataMax;
                isNaN(d) && (d = a.split("-"), d = ia.UTC(B(d[0]), B(d[1]) - 1, B(d[2])));
                isNaN(d) || (R.global.useUTC || (d += 6e4 * new ia().getTimezoneOffset()), h ? d > b.maxInput.HCTime ? d = A : g > d && (d = g) : d < b.minInput.HCTime ? d = A : d > m && (d = m), 
                d !== A && c.xAxis[0].setExtremes(h ? d : e.min, h ? e.max : d, A, A, {
                    trigger: "rangeSelectorInput"
                }));
            };
        },
        render: function(a, b) {
            var w, c = this, d = c.chart, e = d.renderer, f = d.container, g = d.options, h = g.exporting && g.navigation && g.navigation.buttonOptions, k = g.rangeSelector, m = c.buttons, g = R.lang, p = c.div, p = c.inputGroup, r = k.buttonTheme, q = !1 !== k.inputEnabled, u = r && r.states, t = d.plotLeft;
            c.rendered || (c.zoomText = e.text(g.rangeSelectorZoom, t, d.plotTop - 20).css(k.labelStyle).add(), 
            w = t + c.zoomText.getBBox().width + 5, y(c.buttonOptions, function(a, b) {
                m[b] = e.button(a.text, w, d.plotTop - 35, function() {
                    c.clickButton(b);
                    c.isActive = !0;
                }, r, u && u.hover, u && u.select).css({
                    textAlign: "center"
                }).add();
                w += m[b].width + n(k.buttonSpacing, 5);
                c.selected === b && m[b].setState(2);
            }), c.updateButtonStates(), q && (c.div = p = fa("div", null, {
                position: "relative",
                height: 0,
                zIndex: 1
            }), f.parentNode.insertBefore(p, f), c.inputGroup = p = e.g("input-group").add(), 
            p.offset = 0, c.drawInput("min"), c.drawInput("max")));
            q && (f = d.plotTop - 45, p.align(l({
                y: f,
                width: p.offset,
                x: h && f < (h.y || 0) + h.height - d.spacing[0] ? -40 : 0
            }, k.inputPosition), !0, d.spacingBox), c.setInputValue("min", a), c.setInputValue("max", b));
            c.rendered = !0;
        },
        destroy: function() {
            var e, a = this.minInput, b = this.maxInput, c = this.chart, d = this.blurInputs;
            ba(c.container, "mousedown", d);
            ba(c, "resize", d);
            ka(this.buttons);
            a && (a.onfocus = a.onblur = a.onchange = null);
            b && (b.onfocus = b.onblur = b.onchange = null);
            for (e in this) this[e] && "chart" !== e && (this[e].destroy ? this[e].destroy() : this[e].nodeType && C(this[e])), 
            this[e] = null;
        }
    };
    K.prototype.toFixedRange = function(a, b, c, d) {
        var e = this.chart && this.chart.fixedRange;
        a = n(c, this.translate(a, !0));
        b = n(d, this.translate(b, !0));
        c = e && (b - a) / e;
        c > .7 && 1.3 > c && (d ? a = b - e : b = a + e);
        return {
            min: a,
            max: b
        };
    };
    G(V.prototype, "init", function(a, b, c) {
        O(this, "init", function() {
            this.options.rangeSelector.enabled && (this.rangeSelector = new hb(this));
        });
        a.call(this, b, c);
    });
    ca.RangeSelector = hb;
    V.prototype.callbacks.push(function(a) {
        function b() {
            f = a.xAxis[0].getExtremes();
            g.render(f.min, f.max);
        }
        function c() {
            f = a.xAxis[0].getExtremes();
            isNaN(f.min) || h.render(f.min, f.max);
        }
        function d(a) {
            "navigator-drag" !== a.triggerOp && g.render(a.min, a.max);
        }
        function e(a) {
            h.render(a.min, a.max);
        }
        var f, g = a.scroller, h = a.rangeSelector;
        g && (O(a.xAxis[0], "afterSetExtremes", d), G(a, "drawChartBox", function(a) {
            var c = this.isDirtyBox;
            a.call(this);
            c && b();
        }), b());
        h && (O(a.xAxis[0], "afterSetExtremes", e), O(a, "resize", c), c());
        O(a, "destroy", function() {
            g && ba(a.xAxis[0], "afterSetExtremes", d);
            h && (ba(a, "resize", c), ba(a.xAxis[0], "afterSetExtremes", e));
        });
    });
    ca.StockChart = function(a, b) {
        var d, c = a.series, e = n(a.navigator && a.navigator.enabled, !0) ? {
            startOnTick: !1,
            endOnTick: !1
        } : null, f = {
            marker: {
                enabled: !1,
                radius: 2
            },
            states: {
                hover: {
                    lineWidth: 2
                }
            }
        }, g = {
            shadow: !1,
            borderWidth: 0
        };
        a.xAxis = La(xa(a.xAxis || {}), function(a) {
            return x({
                minPadding: 0,
                maxPadding: 0,
                ordinal: !0,
                title: {
                    text: null
                },
                labels: {
                    overflow: "justify"
                },
                showLastLabel: !0
            }, a, {
                type: "datetime",
                categories: null
            }, e);
        });
        a.yAxis = La(xa(a.yAxis || {}), function(a) {
            d = n(a.opposite, !0);
            return x({
                labels: {
                    y: -2
                },
                opposite: d,
                showLastLabel: !1,
                title: {
                    text: null
                }
            }, a);
        });
        a.series = null;
        a = x({
            chart: {
                panning: !0,
                pinchType: "x"
            },
            navigator: {
                enabled: !0
            },
            scrollbar: {
                enabled: !0
            },
            rangeSelector: {
                enabled: !0
            },
            title: {
                text: null,
                style: {
                    fontSize: "16px"
                }
            },
            tooltip: {
                shared: !0,
                crosshairs: !0
            },
            legend: {
                enabled: !1
            },
            plotOptions: {
                line: f,
                spline: f,
                area: f,
                areaspline: f,
                arearange: f,
                areasplinerange: f,
                column: g,
                columnrange: g,
                candlestick: g,
                ohlc: g
            }
        }, a, {
            _stock: !0,
            chart: {
                inverted: !1
            }
        });
        a.series = c;
        return new V(a, b);
    };
    G(Pointer.prototype, "init", function(a, b, c) {
        var d = c.chart.pinchType || "";
        a.call(this, b, c);
        this.pinchX = this.pinchHor = -1 !== d.indexOf("x");
        this.pinchY = this.pinchVert = -1 !== d.indexOf("y");
        this.hasZoom = this.hasZoom || this.pinchHor || this.pinchVert;
    });
    G(K.prototype, "autoLabelAlign", function(a) {
        var b = this.chart, c = this.options, b = b._labelPanes = b._labelPanes || {}, d = this.options.labels;
        return this.chart.options._stock && "yAxis" === this.coll && (c = c.top + "," + c.height, 
        !b[c] && d.enabled) ? (15 === d.x && (d.x = 0), void 0 === d.align && (d.align = "right"), 
        b[c] = 1, "right") : a.call(this, [].slice.call(arguments, 1));
    });
    K.prototype.getPlotLinePath = function(a, b, c, d, e) {
        var r, l, u, t, x, G, f = this, g = this.isLinked && !this.series ? this.linkedParent.series : this.series, h = f.chart, k = h.renderer, m = f.left, p = f.top, w = [];
        ("xAxis" === f.coll || "yAxis" === f.coll) && (x = f.isXAxis ? q(f.options.yAxis) ? [ h.yAxis[f.options.yAxis] ] : La(g, function(a) {
            return a.yAxis;
        }) : q(f.options.xAxis) ? [ h.xAxis[f.options.xAxis] ] : La(g, function(a) {
            return a.xAxis;
        }));
        y(f.isXAxis ? h.yAxis : h.xAxis, function(a) {
            if (q(a.options.id) ? -1 === a.options.id.indexOf("navigator") : 1) {
                var b = a.isXAxis ? "yAxis" : "xAxis", b = q(a.options[b]) ? h[b][a.options[b]] : h[b][0];
                f === b && x.push(a);
            }
        });
        G = x.length ? [] : [ f ];
        y(x, function(a) {
            -1 === $a(a, G) && G.push(a);
        });
        e = n(e, f.translate(a, null, null, c));
        isNaN(e) || (f.horiz ? y(G, function(a) {
            l = a.top;
            t = l + a.len;
            r = u = E(e + f.transB);
            (r >= m && r <= m + f.width || d) && w.push("M", r, l, "L", u, t);
        }) : y(G, function(a) {
            r = a.left;
            u = r + a.width;
            l = t = E(p + f.height - e);
            (l >= p && l <= p + f.height || d) && w.push("M", r, l, "L", u, t);
        }));
        if (0 < w.length) return k.crispPolyLine(w, b || 1);
    };
    K.prototype.getPlotBandPath = function(a, b) {
        var f, c = this.getPlotLinePath(b), d = this.getPlotLinePath(a), e = [];
        if (d && c) for (f = 0; f < d.length; f += 6) e.push("M", d[f + 1], d[f + 2], "L", d[f + 4], d[f + 5], c[f + 4], c[f + 5], c[f + 1], c[f + 2]); else e = null;
        return e;
    };
    Ma.prototype.crispPolyLine = function(a, b) {
        var c;
        for (c = 0; c < a.length; c += 6) a[c + 1] === a[c + 4] && (a[c + 1] = a[c + 4] = E(a[c + 1]) - b % 2 / 2), 
        a[c + 2] === a[c + 5] && (a[c + 2] = a[c + 5] = E(a[c + 2]) + b % 2 / 2);
        return a;
    };
    Sa === ca.VMLRenderer && (VMLRenderer.prototype.crispPolyLine = Ma.prototype.crispPolyLine);
    G(K.prototype, "hideCrosshair", function(a, b) {
        a.call(this, b);
        q(this.crossLabelArray) && (q(b) ? this.crossLabelArray[b] && this.crossLabelArray[b].hide() : y(this.crossLabelArray, function(a) {
            a.hide();
        }));
    });
    G(K.prototype, "drawCrosshair", function(a, b, c) {
        var d, e;
        a.call(this, b, c);
        if (q(this.crosshair.label) && this.crosshair.label.enabled && q(c)) {
            e = this.chart;
            var f = this.options.crosshair.label, g = this.isXAxis ? "x" : "y";
            d = this.horiz;
            var h = this.opposite, k = this.left, m = this.top;
            a = this.crossLabel;
            var p, r = f.format, v = "";
            a || (a = this.crossLabel = e.renderer.label().attr({
                align: f.align || (d ? "center" : h ? "right" === this.labelAlign ? "right" : "left" : "left" === this.labelAlign ? "left" : "center"),
                zIndex: 12,
                height: d ? 16 : A,
                fill: f.backgroundColor || this.series[0] && this.series[0].color || "gray",
                padding: n(f.padding, 2),
                stroke: f.borderColor || null,
                "stroke-width": f.borderWidth || 0
            }).css(l({
                color: "white",
                fontWeight: "normal",
                fontSize: "11px",
                textAlign: "center"
            }, f.style)).add());
            d ? (b = c.plotX + k, p = m + (h ? 0 : this.height)) : (b = h ? this.width + k : 0, 
            p = c.plotY + m);
            if (m > p || p > m + this.height) this.hideCrosshair(); else {
                r || f.formatter || (this.isDatetimeAxis && (v = "%b %d, %Y"), r = "{value" + (v ? ":" + v : "") + "}");
                a.attr({
                    text: r ? I(r, {
                        value: c[g]
                    }) : f.formatter.call(this, c[g]),
                    x: b,
                    y: p,
                    visibility: "visible"
                });
                c = a.getBBox();
                d ? ("inside" === this.options.tickPosition && !h || "inside" !== this.options.tickPosition && h) && (p = a.y - c.height) : p = a.y - c.height / 2;
                d ? (d = k - c.x, e = k + this.width - c.x) : (d = "left" === this.labelAlign ? k : 0, 
                e = "right" === this.labelAlign ? k + this.width : e.chartWidth);
                a.translateX < d && (b += d - a.translateX);
                a.translateX + c.width >= e && (b -= a.translateX + c.width - e);
                a.attr({
                    x: b,
                    y: p,
                    visibility: "visible"
                });
            }
        }
    });
    var Wb = ea.init, Xb = ea.processData, Yb = Ea.prototype.tooltipFormatter;
    ea.init = function() {
        Wb.apply(this, arguments);
        this.setCompare(this.options.compare);
    };
    ea.setCompare = function(a) {
        this.modifyValue = "value" === a || "percent" === a ? function(b, c) {
            var d = this.compareValue;
            b !== A && (b = "value" === a ? b - d : b = b / d * 100 - 100, c && (c.change = b));
            return b;
        } : null;
        this.chart.hasRendered && (this.isDirty = !0);
    };
    ea.processData = function() {
        var b, c, d, a = 0;
        Xb.apply(this, arguments);
        if (this.xAxis && this.processedYData) for (b = this.processedXData, c = this.processedYData, 
        d = c.length; d > a; a++) if ("number" == typeof c[a] && b[a] >= this.xAxis.min) {
            this.compareValue = c[a];
            break;
        }
    };
    G(ea, "getExtremes", function(a) {
        a.apply(this, [].slice.call(arguments, 1));
        this.modifyValue && (this.dataMax = this.modifyValue(this.dataMax), this.dataMin = this.modifyValue(this.dataMin));
    });
    K.prototype.setCompare = function(a, b) {
        this.isXAxis || (y(this.series, function(b) {
            b.setCompare(a);
        }), n(b, !0) && this.chart.redraw());
    };
    Ea.prototype.tooltipFormatter = function(a) {
        a = a.replace("{point.change}", (0 < this.change ? "+" : "") + T(this.change, n(this.series.tooltipOptions.changeDecimals, 2)));
        return Yb.apply(this, [ a ]);
    };
    G(sa.prototype, "render", function(a) {
        this.chart.options._stock && (!this.clipBox && this.animate && -1 !== this.animate.toString().indexOf("sharedClip") ? (this.clipBox = x(this.chart.clipBox), 
        this.clipBox.width = this.xAxis.len, this.clipBox.height = this.yAxis.len) : this.chart[this.sharedClipKey] && this.chart[this.sharedClipKey].attr({
            width: this.xAxis.len,
            height: this.yAxis.len
        }));
        a.call(this);
    });
    l(ca, {
        Axis: K,
        Chart: V,
        Color: Ta,
        Point: Ea,
        Tick: za,
        Renderer: Sa,
        Series: sa,
        SVGElement: M,
        SVGRenderer: Ma,
        arrayMin: aa,
        arrayMax: Ba,
        charts: Ja,
        dateFormat: ta,
        format: I,
        pathAnim: kb,
        getOptions: function() {
            return R;
        },
        hasBidiBug: Ib,
        isTouchDevice: Ra,
        numberFormat: T,
        seriesTypes: Ka,
        setOptions: function(a) {
            R = x(!0, R, a);
            sb();
            return R;
        },
        addEvent: O,
        removeEvent: ba,
        createElement: fa,
        discardElement: C,
        css: J,
        each: y,
        extend: l,
        map: La,
        merge: x,
        pick: n,
        splat: xa,
        extendClass: Na,
        pInt: B,
        wrap: G,
        svg: oa,
        canvas: wa,
        vml: !oa && !wa,
        product: "Highcharts 4.0.4",
        version: "/Highstock 2.0.4"
    });
}();

!function(l) {
    var Z, x = l.Chart, B = l.addEvent, na = l.removeEvent, N = HighchartsAdapter.fireEvent, P = l.createElement, Q = l.discardElement, ga = l.css, F = l.merge, t = l.each, q = l.extend, w = l.splat, xa = Math.max, n = document, J = window, fa = l.isTouchDevice, Na = l.Renderer.prototype.symbols, T = l.getOptions();
    q(T.lang, {
        printChart: "Print chart",
        downloadPNG: "Download PNG image",
        downloadJPEG: "Download JPEG image",
        downloadPDF: "Download PDF document",
        downloadSVG: "Download SVG vector image",
        contextButtonTitle: "Chart context menu"
    });
    T.navigation = {
        menuStyle: {
            border: "1px solid #A0A0A0",
            background: "#FFFFFF",
            padding: "5px 0"
        },
        menuItemStyle: {
            padding: "0 10px",
            background: "none",
            color: "#303030",
            fontSize: fa ? "14px" : "11px"
        },
        menuItemHoverStyle: {
            background: "#4572A5",
            color: "#FFFFFF"
        },
        buttonOptions: {
            symbolFill: "#E0E0E0",
            symbolSize: 14,
            symbolStroke: "#666",
            symbolStrokeWidth: 3,
            symbolX: 12.5,
            symbolY: 10.5,
            align: "right",
            buttonSpacing: 3,
            height: 22,
            theme: {
                fill: "white",
                stroke: "none"
            },
            verticalAlign: "top",
            width: 24
        }
    };
    T.exporting = {
        type: "image/png",
        url: "http://export.highcharts.com/",
        buttons: {
            contextButton: {
                menuClassName: "highcharts-contextmenu",
                symbol: "menu",
                _titleKey: "contextButtonTitle",
                menuItems: [ {
                    textKey: "printChart",
                    onclick: function() {
                        this.print();
                    }
                }, {
                    separator: !0
                }, {
                    textKey: "downloadPNG",
                    onclick: function() {
                        this.exportChart();
                    }
                }, {
                    textKey: "downloadJPEG",
                    onclick: function() {
                        this.exportChart({
                            type: "image/jpeg"
                        });
                    }
                }, {
                    textKey: "downloadPDF",
                    onclick: function() {
                        this.exportChart({
                            type: "application/pdf"
                        });
                    }
                }, {
                    textKey: "downloadSVG",
                    onclick: function() {
                        this.exportChart({
                            type: "image/svg+xml"
                        });
                    }
                } ]
            }
        }
    };
    l.post = function(l, q, t) {
        var w;
        l = P("form", F({
            method: "post",
            action: l,
            enctype: "multipart/form-data"
        }, t), {
            display: "none"
        }, n.body);
        for (w in q) P("input", {
            type: "hidden",
            name: w,
            value: q[w]
        }, null, l);
        l.submit();
        Q(l);
    };
    q(x.prototype, {
        sanitizeSVG: function(l) {
            return l.replace(/zIndex="[^"]+"/g, "").replace(/isShadow="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g, " xlink:href=").replace(/\n/, " ").replace(/<\/svg>.*?$/, "</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1="rgb($2)" $1-opacity="$3"').replace(/(text-shadow:)([^;"]+)([;"])/g, function(l, n, q, t) {
                q = q.replace(/\([^\)]+\)/g, function(l) {
                    return l.replace(/,/g, "|");
                });
                q = q.split(",")[0];
                q = q.replace(/\([^\)]+\)/g, function(l) {
                    return l.replace(/\|/g, ",");
                });
                return n + q + t;
            }).replace(/&nbsp;/g, " ").replace(/&shy;/g, "­").replace(/<IMG /g, "<image ").replace(/height=([^" ]+)/g, 'height="$1"').replace(/width=([^" ]+)/g, 'width="$1"').replace(/hc-svg-href="([^"]+)">/g, 'xlink:href="$1"/>').replace(/id=([^" >]+)/g, 'id="$1"').replace(/class=([^" >]+)/g, 'class="$1"').replace(/ transform /g, " ").replace(/:(path|rect)/g, "$1").replace(/style="([^"]+)"/g, function(l) {
                return l.toLowerCase();
            });
        },
        getSVG: function(x) {
            var B, L, aa, J, ka, I = this, C = F(I.options, x);
            n.createElementNS || (n.createElementNS = function(l, q) {
                return n.createElement(q);
            });
            L = P("div", null, {
                position: "absolute",
                top: "-9999em",
                width: I.chartWidth + "px",
                height: I.chartHeight + "px"
            }, n.body);
            aa = I.renderTo.style.width;
            ka = I.renderTo.style.height;
            aa = C.exporting.sourceWidth || C.chart.width || /px$/.test(aa) && parseInt(aa, 10) || 600;
            ka = C.exporting.sourceHeight || C.chart.height || /px$/.test(ka) && parseInt(ka, 10) || 400;
            q(C.chart, {
                animation: !1,
                renderTo: L,
                forExport: !0,
                width: aa,
                height: ka
            });
            C.exporting.enabled = !1;
            delete C.data;
            C.series = [];
            t(I.series, function(l) {
                J = F(l.options, {
                    animation: !1,
                    enableMouseTracking: !1,
                    showCheckbox: !1,
                    visible: l.visible
                });
                J.isInternal || C.series.push(J);
            });
            x && t([ "xAxis", "yAxis" ], function(l) {
                t(w(x[l]), function(n, q) {
                    C[l][q] = F(C[l][q], n);
                });
            });
            B = new l.Chart(C, I.callback);
            t([ "xAxis", "yAxis" ], function(l) {
                t(I[l], function(n, q) {
                    var t = B[l][q], w = n.getExtremes(), x = w.userMin, w = w.userMax;
                    !t || void 0 === x && void 0 === w || t.setExtremes(x, w, !0, !1);
                });
            });
            aa = B.container.innerHTML;
            C = null;
            B.destroy();
            Q(L);
            aa = this.sanitizeSVG(aa);
            return aa = aa.replace(/(url\(#highcharts-[0-9]+)&quot;/g, "$1").replace(/&quot;/g, "'");
        },
        getSVGForExport: function(l, n) {
            var q = this.options.exporting;
            return this.getSVG(F({
                chart: {
                    borderRadius: 0
                }
            }, q.chartOptions, n, {
                exporting: {
                    sourceWidth: l && l.sourceWidth || q.sourceWidth,
                    sourceHeight: l && l.sourceHeight || q.sourceHeight
                }
            }));
        },
        exportChart: function(n, q) {
            var t = this.getSVGForExport(n, q);
            n = F(this.options.exporting, n);
            l.post(n.url, {
                filename: n.filename || "chart",
                type: n.type,
                width: n.width || 0,
                scale: n.scale || 2,
                svg: t
            }, n.formAttributes);
        },
        print: function() {
            var l = this, q = l.container, w = [], x = q.parentNode, B = n.body, F = B.childNodes;
            l.isPrinting || (l.isPrinting = !0, N(l, "beforePrint"), t(F, function(l, n) {
                1 === l.nodeType && (w[n] = l.style.display, l.style.display = "none");
            }), B.appendChild(q), J.focus(), J.print(), setTimeout(function() {
                x.appendChild(q);
                t(F, function(l, n) {
                    1 === l.nodeType && (l.style.display = w[n]);
                });
                l.isPrinting = !1;
                N(l, "afterPrint");
            }, 1e3));
        },
        contextMenu: function(l, n, w, x, F, J, N) {
            var fa, A, U, C = this, Q = C.options.navigation, T = Q.menuItemStyle, M = C.chartWidth, za = C.chartHeight, K = "cache-" + l, V = C[K], Z = xa(F, J), Y = function(n) {
                C.pointer.inClass(n.target, l) || A();
            };
            V || (C[K] = V = P("div", {
                className: l
            }, {
                position: "absolute",
                zIndex: 1e3,
                padding: Z + "px"
            }, C.container), fa = P("div", null, q({
                MozBoxShadow: "3px 3px 10px #888",
                WebkitBoxShadow: "3px 3px 10px #888",
                boxShadow: "3px 3px 10px #888"
            }, Q.menuStyle), V), A = function() {
                ga(V, {
                    display: "none"
                });
                N && N.setState(0);
                C.openMenu = !1;
            }, B(V, "mouseleave", function() {
                U = setTimeout(A, 500);
            }), B(V, "mouseenter", function() {
                clearTimeout(U);
            }), B(document, "mouseup", Y), B(C, "destroy", function() {
                na(document, "mouseup", Y);
            }), t(n, function(l) {
                if (l) {
                    var n = l.separator ? P("hr", null, null, fa) : P("div", {
                        onmouseover: function() {
                            ga(this, Q.menuItemHoverStyle);
                        },
                        onmouseout: function() {
                            ga(this, T);
                        },
                        onclick: function() {
                            A();
                            l.onclick && l.onclick.apply(C, arguments);
                        },
                        innerHTML: l.text || C.options.lang[l.textKey]
                    }, q({
                        cursor: "pointer"
                    }, T), fa);
                    C.exportDivElements.push(n);
                }
            }), C.exportDivElements.push(fa, V), C.exportMenuWidth = V.offsetWidth, C.exportMenuHeight = V.offsetHeight);
            n = {
                display: "block"
            };
            w + C.exportMenuWidth > M ? n.right = M - w - F - Z + "px" : n.left = w - Z + "px";
            x + J + C.exportMenuHeight > za && "top" !== N.alignOptions.verticalAlign ? n.bottom = za - x - Z + "px" : n.top = x + J - Z + "px";
            ga(V, n);
            C.openMenu = !0;
        },
        addButton: function(n) {
            var N, C, t = this, w = t.renderer, x = F(t.options.navigation.buttonOptions, n), B = x.onclick, J = x.menuItems, P = {
                stroke: x.symbolStroke,
                fill: x.symbolFill
            }, Q = x.symbolSize || 12;
            t.btnCount || (t.btnCount = 0);
            t.exportDivElements || (t.exportDivElements = [], t.exportSVGElements = []);
            if (!1 !== x.enabled) {
                var V, M = x.theme, T = M.states, K = T && T.hover, T = T && T.select;
                delete M.states;
                B ? V = function() {
                    B.apply(t, arguments);
                } : J && (V = function() {
                    t.contextMenu(C.menuClassName, J, C.translateX, C.translateY, C.width, C.height, C);
                    C.setState(2);
                });
                x.text && x.symbol ? M.paddingLeft = l.pick(M.paddingLeft, 25) : x.text || q(M, {
                    width: x.width,
                    height: x.height,
                    padding: 0
                });
                C = w.button(x.text, 0, 0, V, M, K, T).attr({
                    title: t.options.lang[x._titleKey],
                    "stroke-linecap": "round"
                });
                C.menuClassName = n.menuClassName || "highcharts-menu-" + t.btnCount++;
                x.symbol && (N = w.symbol(x.symbol, x.symbolX - Q / 2, x.symbolY - Q / 2, Q, Q).attr(q(P, {
                    "stroke-width": x.symbolStrokeWidth || 1,
                    zIndex: 1
                })).add(C));
                C.add().align(q(x, {
                    width: C.width,
                    x: l.pick(x.x, Z)
                }), !0, "spacingBox");
                Z += (C.width + x.buttonSpacing) * ("right" === x.align ? -1 : 1);
                t.exportSVGElements.push(C, N);
            }
        },
        destroyExport: function(l) {
            l = l.target;
            var n, q;
            for (n = 0; n < l.exportSVGElements.length; n++) (q = l.exportSVGElements[n]) && (q.onclick = q.ontouchstart = null, 
            l.exportSVGElements[n] = q.destroy());
            for (n = 0; n < l.exportDivElements.length; n++) q = l.exportDivElements[n], na(q, "mouseleave"), 
            l.exportDivElements[n] = q.onmouseout = q.onmouseover = q.ontouchstart = q.onclick = null, 
            Q(q);
        }
    });
    Na.menu = function(l, n, q, t) {
        return [ "M", l, n + 2.5, "L", l + q, n + 2.5, "M", l, n + t / 2 + .5, "L", l + q, n + t / 2 + .5, "M", l, n + t - 1.5, "L", l + q, n + t - 1.5 ];
    };
    x.prototype.callbacks.push(function(l) {
        var n, q = l.options.exporting, t = q.buttons;
        Z = 0;
        if (!1 !== q.enabled) {
            for (n in t) l.addButton(t[n]);
            B(l, "destroy", l.destroyExport);
        }
    });
}(Highcharts);