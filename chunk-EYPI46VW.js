import { a as ir } from "./chunk-DVBBZHYS.js";
import { a as rr } from "./chunk-ZYDAYKGL.js";
import { j as Me, l as Ji, o as tr, v as er } from "./chunk-AEQ62QCG.js";
import {
  Ca as Ct,
  Eb as he,
  Ha as Qt,
  Ma as Ht,
  P as Gi,
  Ra as Oe,
  V as Qi,
  Xb as Kt,
  _a as St,
  aa as Hi,
  ba as Ki,
  gb as nt,
  hb as K,
  ib as dt,
  mb as Zi,
  na as ut,
  qb as $i,
  tb as Qe,
  ub as He,
  vb as Ke,
  xb as _e,
} from "./chunk-CLQWJLWL.js";
function vt(a) {
  if (a === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return a;
}
function _r(a, t) {
  (a.prototype = Object.create(t.prototype)),
    (a.prototype.constructor = a),
    (a.__proto__ = t);
}
var it = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  $t = { duration: 0.5, overwrite: !1, delay: 0 },
  pi,
  j,
  R,
  ft = 1e8,
  k = 1 / ft,
  ni = Math.PI * 2,
  mn = ni / 4,
  gn = 0,
  hr = Math.sqrt,
  yn = Math.cos,
  xn = Math.sin,
  U = function (t) {
    return typeof t == "string";
  },
  I = function (t) {
    return typeof t == "function";
  },
  Tt = function (t) {
    return typeof t == "number";
  },
  Le = function (t) {
    return typeof t > "u";
  },
  gt = function (t) {
    return typeof t == "object";
  },
  et = function (t) {
    return t !== !1;
  },
  mi = function () {
    return typeof window < "u";
  },
  ke = function (t) {
    return I(t) || U(t);
  },
  cr =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Q = Array.isArray,
  si = /(?:-?\.?\d|\.)+/gi,
  gi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Bt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Ze = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  yi = /[+-]=-?[.\d]+/,
  dr = /[^,'"\[\]\s]+/gi,
  vn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  z,
  pt,
  oi,
  xi,
  ot = {},
  Re = {},
  pr,
  mr = function (t) {
    return (Re = Jt(t, ot)) && H;
  },
  Ve = function (t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  ye = function (t, e) {
    return !e && console.warn(t);
  },
  gr = function (t, e) {
    return (t && (ot[t] = e) && Re && (Re[t] = e)) || ot;
  },
  xe = function () {
    return 0;
  },
  bn = { suppressEvents: !0, isStart: !0, kill: !1 },
  De = { suppressEvents: !0, kill: !1 },
  Tn = { suppressEvents: !0 },
  vi = {},
  Mt = [],
  ai = {},
  yr,
  J = {},
  $e = {},
  nr = 30,
  Ee = [],
  bi = "",
  Ti = function (t) {
    var e = t[0],
      i,
      r;
    if ((gt(e) || I(e) || (t = [t]), !(i = (e._gsap || {}).harness))) {
      for (r = Ee.length; r-- && !Ee[r].targetTest(e); );
      i = Ee[r];
    }
    for (r = t.length; r--; )
      (t[r] && (t[r]._gsap || (t[r]._gsap = new Si(t[r], i)))) ||
        t.splice(r, 1);
    return t;
  },
  kt = function (t) {
    return t._gsap || Ti(_t(t))[0]._gsap;
  },
  wi = function (t, e, i) {
    return (i = t[e]) && I(i)
      ? t[e]()
      : (Le(i) && t.getAttribute && t.getAttribute(e)) || i;
  },
  Z = function (t, e) {
    return (t = t.split(",")).forEach(e) || t;
  },
  N = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  B = function (t) {
    return Math.round(t * 1e7) / 1e7 || 0;
  },
  Ut = function (t, e) {
    var i = e.charAt(0),
      r = parseFloat(e.substr(2));
    return (
      (t = parseFloat(t)),
      i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
    );
  },
  wn = function (t, e) {
    for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
    return r < i;
  },
  ze = function () {
    var t = Mt.length,
      e = Mt.slice(0),
      i,
      r;
    for (ai = {}, Mt.length = 0, i = 0; i < t; i++)
      (r = e[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  Pi = function (t) {
    return !!(t._initted || t._startAt || t.add);
  },
  xr = function (t, e, i, r) {
    Mt.length && !j && ze(),
      t.render(e, i, r || !!(j && e < 0 && Pi(t))),
      Mt.length && !j && ze();
  },
  vr = function (t) {
    var e = parseFloat(t);
    return (e || e === 0) && (t + "").match(dr).length < 2
      ? e
      : U(t)
      ? t.trim()
      : t;
  },
  br = function (t) {
    return t;
  },
  at = function (t, e) {
    for (var i in e) i in t || (t[i] = e[i]);
    return t;
  },
  Pn = function (t) {
    return function (e, i) {
      for (var r in i)
        r in e || (r === "duration" && t) || r === "ease" || (e[r] = i[r]);
    };
  },
  Jt = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  sr = function a(t, e) {
    for (var i in e)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (t[i] = gt(e[i]) ? a(t[i] || (t[i] = {}), e[i]) : e[i]);
    return t;
  },
  Fe = function (t, e) {
    var i = {},
      r;
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  },
  pe = function (t) {
    var e = t.parent || z,
      i = t.keyframes ? Pn(Q(t.keyframes)) : at;
    if (et(t.inherit))
      for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  },
  Cn = function (t, e) {
    for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; );
    return i < 0;
  },
  Tr = function (t, e, i, r, n) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var s = t[r],
      o;
    if (n) for (o = e[n]; s && s[n] > o; ) s = s._prev;
    return (
      s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[i]), (t[i] = e)),
      e._next ? (e._next._prev = e) : (t[r] = e),
      (e._prev = s),
      (e.parent = e._dp = t),
      e
    );
  },
  Be = function (t, e, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var n = e._prev,
      s = e._next;
    n ? (n._next = s) : t[i] === e && (t[i] = s),
      s ? (s._prev = n) : t[r] === e && (t[r] = n),
      (e._next = e._prev = e.parent = null);
  },
  Dt = function (t, e) {
    t.parent &&
      (!e || t.parent.autoRemoveChildren) &&
      t.parent.remove &&
      t.parent.remove(t),
      (t._act = 0);
  },
  Nt = function (t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
    return t;
  },
  Sn = function (t) {
    for (var e = t.parent; e && e.parent; )
      (e._dirty = 1), e.totalDuration(), (e = e.parent);
    return t;
  },
  ui = function (t, e, i, r) {
    return (
      t._startAt &&
      (j
        ? t._startAt.revert(De)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(e, !0, r))
    );
  },
  On = function a(t) {
    return !t || (t._ts && a(t.parent));
  },
  or = function (t) {
    return t._repeat ? te(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  te = function (t, e) {
    var i = Math.floor((t = B(t / e)));
    return t && i === t ? i - 1 : i;
  },
  Ie = function (t, e) {
    return (
      (t - e._start) * e._ts +
      (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  },
  Ue = function (t) {
    return (t._end = B(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || k) || 0)
    ));
  },
  Ye = function (t, e) {
    var i = t._dp;
    return (
      i &&
        i.smoothChildTiming &&
        t._ts &&
        ((t._start = B(
          i._time -
            (t._ts > 0
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        Ue(t),
        i._dirty || Nt(i, t)),
      t
    );
  },
  wr = function (t, e) {
    var i;
    if (
      ((e._time ||
        (!e._dur && e._initted) ||
        (e._start < t._time && (e._dur || !e.add))) &&
        ((i = Ie(t.rawTime(), e)),
        (!e._dur || Te(0, e.totalDuration(), i) - e._tTime > k) &&
          e.render(i, !0)),
      Nt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (i = t; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      t._zTime = -k;
    }
  },
  mt = function (t, e, i, r) {
    return (
      e.parent && Dt(e),
      (e._start = B(
        (Tt(i) ? i : i || t !== z ? lt(t, i, e) : t._time) + e._delay
      )),
      (e._end = B(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      Tr(t, e, "_first", "_last", t._sort ? "_start" : 0),
      li(e) || (t._recent = e),
      r || wr(t, e),
      t._ts < 0 && Ye(t, t._tTime),
      t
    );
  },
  Pr = function (t, e) {
    return (
      (ot.ScrollTrigger || Ve("scrollTrigger", e)) &&
      ot.ScrollTrigger.create(e, t)
    );
  },
  Cr = function (t, e, i, r, n) {
    if ((ki(t, e, n), !t._initted)) return 1;
    if (
      !i &&
      t._pt &&
      !j &&
      ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
      yr !== tt.frame
    )
      return Mt.push(t), (t._lazy = [n, r]), 1;
  },
  Mn = function a(t) {
    var e = t.parent;
    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e));
  },
  li = function (t) {
    var e = t.data;
    return e === "isFromStart" || e === "isStart";
  },
  kn = function (t, e, i, r) {
    var n = t.ratio,
      s =
        e < 0 ||
        (!e &&
          ((!t._start && Mn(t) && !(!t._initted && li(t))) ||
            ((t._ts < 0 || t._dp._ts < 0) && !li(t))))
          ? 0
          : 1,
      o = t._rDelay,
      u = 0,
      l,
      f,
      h;
    if (
      (o &&
        t._repeat &&
        ((u = Te(0, t._tDur, e)),
        (f = te(u, o)),
        t._yoyo && f & 1 && (s = 1 - s),
        f !== te(t._tTime, o) &&
          ((n = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
      s !== n || j || r || t._zTime === k || (!e && t._zTime))
    ) {
      if (!t._initted && Cr(t, e, r, i, u)) return;
      for (
        h = t._zTime,
          t._zTime = e || (i ? k : 0),
          i || (i = e && !h),
          t.ratio = s,
          t._from && (s = 1 - s),
          t._time = 0,
          t._tTime = u,
          l = t._pt;
        l;

      )
        l.r(s, l.d), (l = l._next);
      e < 0 && ui(t, e, i, !0),
        t._onUpdate && !i && st(t, "onUpdate"),
        u && t._repeat && !i && t.parent && st(t, "onRepeat"),
        (e >= t._tDur || e < 0) &&
          t.ratio === s &&
          (s && Dt(t, 1),
          !i &&
            !j &&
            (st(t, s ? "onComplete" : "onReverseComplete", !0),
            t._prom && t._prom()));
    } else t._zTime || (t._zTime = e);
  },
  Dn = function (t, e, i) {
    var r;
    if (i > e)
      for (r = t._first; r && r._start <= i; ) {
        if (r.data === "isPause" && r._start > e) return r;
        r = r._next;
      }
    else
      for (r = t._last; r && r._start >= i; ) {
        if (r.data === "isPause" && r._start < e) return r;
        r = r._prev;
      }
  },
  ee = function (t, e, i, r) {
    var n = t._repeat,
      s = B(e) || 0,
      o = t._tTime / t._tDur;
    return (
      o && !r && (t._time *= s / t._dur),
      (t._dur = s),
      (t._tDur = n ? (n < 0 ? 1e10 : B(s * (n + 1) + t._rDelay * n)) : s),
      o > 0 && !r && Ye(t, (t._tTime = t._tDur * o)),
      t.parent && Ue(t),
      i || Nt(t.parent, t),
      t
    );
  },
  ar = function (t) {
    return t instanceof W ? Nt(t) : ee(t, t._dur);
  },
  En = { _start: 0, endTime: xe, totalDuration: xe },
  lt = function a(t, e, i) {
    var r = t.labels,
      n = t._recent || En,
      s = t.duration() >= ft ? n.endTime(!1) : t._dur,
      o,
      u,
      l;
    return U(e) && (isNaN(e) || e in r)
      ? ((u = e.charAt(0)),
        (l = e.substr(-1) === "%"),
        (o = e.indexOf("=")),
        u === "<" || u === ">"
          ? (o >= 0 && (e = e.replace(/=/, "")),
            (u === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(e.substr(1)) || 0) *
                (l ? (o < 0 ? n : i).totalDuration() / 100 : 1))
          : o < 0
          ? (e in r || (r[e] = s), r[e])
          : ((u = parseFloat(e.charAt(o - 1) + e.substr(o + 1))),
            l && i && (u = (u / 100) * (Q(i) ? i[0] : i).totalDuration()),
            o > 1 ? a(t, e.substr(0, o - 1), i) + u : s + u))
      : e == null
      ? s
      : +e;
  },
  me = function (t, e, i) {
    var r = Tt(e[1]),
      n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
      s = e[n],
      o,
      u;
    if ((r && (s.duration = e[1]), (s.parent = i), t)) {
      for (o = s, u = i; u && !("immediateRender" in o); )
        (o = u.vars.defaults || {}), (u = et(u.vars.inherit) && u.parent);
      (s.immediateRender = et(o.immediateRender)),
        t < 2 ? (s.runBackwards = 1) : (s.startAt = e[n - 1]);
    }
    return new L(e[0], s, e[n + 1]);
  },
  Et = function (t, e) {
    return t || t === 0 ? e(t) : e;
  },
  Te = function (t, e, i) {
    return i < t ? t : i > e ? e : i;
  },
  G = function (t, e) {
    return !U(t) || !(e = vn.exec(t)) ? "" : e[1];
  },
  An = function (t, e, i) {
    return Et(i, function (r) {
      return Te(t, e, r);
    });
  },
  fi = [].slice,
  Sr = function (t, e) {
    return (
      t &&
      gt(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && gt(t[0]))) &&
      !t.nodeType &&
      t !== pt
    );
  },
  Rn = function (t, e, i) {
    return (
      i === void 0 && (i = []),
      t.forEach(function (r) {
        var n;
        return (U(r) && !e) || Sr(r, 1)
          ? (n = i).push.apply(n, _t(r))
          : i.push(r);
      }) || i
    );
  },
  _t = function (t, e, i) {
    return R && !e && R.selector
      ? R.selector(t)
      : U(t) && !i && (oi || !ie())
      ? fi.call((e || xi).querySelectorAll(t), 0)
      : Q(t)
      ? Rn(t, i)
      : Sr(t)
      ? fi.call(t, 0)
      : t
      ? [t]
      : [];
  },
  _i = function (t) {
    return (
      (t = _t(t)[0] || ye("Invalid scope") || {}),
      function (e) {
        var i = t.current || t.nativeElement || t;
        return _t(
          e,
          i.querySelectorAll
            ? i
            : i === t
            ? ye("Invalid scope") || xi.createElement("div")
            : t
        );
      }
    );
  },
  Or = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Mr = function (t) {
    if (I(t)) return t;
    var e = gt(t) ? t : { each: t },
      i = Lt(e.ease),
      r = e.from || 0,
      n = parseFloat(e.base) || 0,
      s = {},
      o = r > 0 && r < 1,
      u = isNaN(r) || o,
      l = e.axis,
      f = r,
      h = r;
    return (
      U(r)
        ? (f = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !o && u && ((f = r[0]), (h = r[1])),
      function (c, d, p) {
        var _ = (p || e).length,
          m = s[_],
          y,
          x,
          v,
          b,
          g,
          w,
          P,
          C,
          T;
        if (!m) {
          if (((T = e.grid === "auto" ? 0 : (e.grid || [1, ft])[1]), !T)) {
            for (
              P = -ft;
              P < (P = p[T++].getBoundingClientRect().left) && T < _;

            );
            T < _ && T--;
          }
          for (
            m = s[_] = [],
              y = u ? Math.min(T, _) * f - 0.5 : r % T,
              x = T === ft ? 0 : u ? (_ * h) / T - 0.5 : (r / T) | 0,
              P = 0,
              C = ft,
              w = 0;
            w < _;
            w++
          )
            (v = (w % T) - y),
              (b = x - ((w / T) | 0)),
              (m[w] = g = l ? Math.abs(l === "y" ? b : v) : hr(v * v + b * b)),
              g > P && (P = g),
              g < C && (C = g);
          r === "random" && Or(m),
            (m.max = P - C),
            (m.min = C),
            (m.v = _ =
              (parseFloat(e.amount) ||
                parseFloat(e.each) *
                  (T > _
                    ? _ - 1
                    : l
                    ? l === "y"
                      ? _ / T
                      : T
                    : Math.max(T, _ / T)) ||
                0) * (r === "edges" ? -1 : 1)),
            (m.b = _ < 0 ? n - _ : n),
            (m.u = G(e.amount || e.each) || 0),
            (i = i && _ < 0 ? Nr(i) : i);
        }
        return (
          (_ = (m[c] - m.min) / m.max || 0), B(m.b + (i ? i(_) : _) * m.v) + m.u
        );
      }
    );
  },
  hi = function (t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (i) {
      var r = B(Math.round(parseFloat(i) / t) * t * e);
      return (r - (r % 1)) / e + (Tt(i) ? 0 : G(i));
    };
  },
  kr = function (t, e) {
    var i = Q(t),
      r,
      n;
    return (
      !i &&
        gt(t) &&
        ((r = i = t.radius || ft),
        t.values
          ? ((t = _t(t.values)), (n = !Tt(t[0])) && (r *= r))
          : (t = hi(t.increment))),
      Et(
        e,
        i
          ? I(t)
            ? function (s) {
                return (n = t(s)), Math.abs(n - s) <= r ? n : s;
              }
            : function (s) {
                for (
                  var o = parseFloat(n ? s.x : s),
                    u = parseFloat(n ? s.y : 0),
                    l = ft,
                    f = 0,
                    h = t.length,
                    c,
                    d;
                  h--;

                )
                  n
                    ? ((c = t[h].x - o), (d = t[h].y - u), (c = c * c + d * d))
                    : (c = Math.abs(t[h] - o)),
                    c < l && ((l = c), (f = h));
                return (
                  (f = !r || l <= r ? t[f] : s),
                  n || f === s || Tt(s) ? f : f + G(s)
                );
              }
          : hi(t)
      )
    );
  },
  Dr = function (t, e, i, r) {
    return Et(Q(t) ? !e : i === !0 ? !!(i = 0) : !r, function () {
      return Q(t)
        ? t[~~(Math.random() * t.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) *
                i *
                r
            ) / r;
    });
  },
  zn = function () {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return function (r) {
      return e.reduce(function (n, s) {
        return s(n);
      }, r);
    };
  },
  Fn = function (t, e) {
    return function (i) {
      return t(parseFloat(i)) + (e || G(i));
    };
  },
  In = function (t, e, i) {
    return Ar(t, e, 0, 1, i);
  },
  Er = function (t, e, i) {
    return Et(i, function (r) {
      return t[~~e(r)];
    });
  },
  Nn = function a(t, e, i) {
    var r = e - t;
    return Q(t)
      ? Er(t, a(0, t.length), e)
      : Et(i, function (n) {
          return ((r + ((n - t) % r)) % r) + t;
        });
  },
  Ln = function a(t, e, i) {
    var r = e - t,
      n = r * 2;
    return Q(t)
      ? Er(t, a(0, t.length - 1), e)
      : Et(i, function (s) {
          return (s = (n + ((s - t) % n)) % n || 0), t + (s > r ? n - s : s);
        });
  },
  re = function (t) {
    for (var e = 0, i = "", r, n, s, o; ~(r = t.indexOf("random(", e)); )
      (s = t.indexOf(")", r)),
        (o = t.charAt(r + 7) === "["),
        (n = t.substr(r + 7, s - r - 7).match(o ? dr : si)),
        (i +=
          t.substr(e, r - e) + Dr(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
        (e = s + 1);
    return i + t.substr(e, t.length - e);
  },
  Ar = function (t, e, i, r, n) {
    var s = e - t,
      o = r - i;
    return Et(n, function (u) {
      return i + (((u - t) / s) * o || 0);
    });
  },
  Vn = function a(t, e, i, r) {
    var n = isNaN(t + e)
      ? 0
      : function (d) {
          return (1 - d) * t + d * e;
        };
    if (!n) {
      var s = U(t),
        o = {},
        u,
        l,
        f,
        h,
        c;
      if ((i === !0 && (r = 1) && (i = null), s))
        (t = { p: t }), (e = { p: e });
      else if (Q(t) && !Q(e)) {
        for (f = [], h = t.length, c = h - 2, l = 1; l < h; l++)
          f.push(a(t[l - 1], t[l]));
        h--,
          (n = function (p) {
            p *= h;
            var _ = Math.min(c, ~~p);
            return f[_](p - _);
          }),
          (i = e);
      } else r || (t = Jt(Q(t) ? [] : {}, t));
      if (!f) {
        for (u in e) Oi.call(o, t, u, "get", e[u]);
        n = function (p) {
          return Ai(p, o) || (s ? t.p : t);
        };
      }
    }
    return Et(i, n);
  },
  ur = function (t, e, i) {
    var r = t.labels,
      n = ft,
      s,
      o,
      u;
    for (s in r)
      (o = r[s] - e),
        o < 0 == !!i && o && n > (o = Math.abs(o)) && ((u = s), (n = o));
    return u;
  },
  st = function (t, e, i) {
    var r = t.vars,
      n = r[e],
      s = R,
      o = t._ctx,
      u,
      l,
      f;
    if (n)
      return (
        (u = r[e + "Params"]),
        (l = r.callbackScope || t),
        i && Mt.length && ze(),
        o && (R = o),
        (f = u ? n.apply(l, u) : n.call(l)),
        (R = s),
        f
      );
  },
  ce = function (t) {
    return (
      Dt(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!j),
      t.progress() < 1 && st(t, "onInterrupt"),
      t
    );
  },
  Zt,
  Rr = [],
  zr = function (t) {
    if (t)
      if (((t = (!t.name && t.default) || t), mi() || t.headless)) {
        var e = t.name,
          i = I(t),
          r =
            e && !i && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          n = {
            init: xe,
            render: Ai,
            add: Oi,
            kill: es,
            modifier: ts,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: qe,
            aliases: {},
            register: 0,
          };
        if ((ie(), t !== r)) {
          if (J[e]) return;
          at(r, at(Fe(t, n), s)),
            Jt(r.prototype, Jt(n, Fe(t, s))),
            (J[(r.prop = e)] = r),
            t.targetTest && (Ee.push(r), (vi[e] = 1)),
            (e =
              (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
              "Plugin");
        }
        gr(e, r), t.register && t.register(H, r, $);
      } else Rr.push(t);
  },
  M = 255,
  de = {
    aqua: [0, M, M],
    lime: [0, M, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, M],
    navy: [0, 0, 128],
    white: [M, M, M],
    olive: [128, 128, 0],
    yellow: [M, M, 0],
    orange: [M, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [M, 0, 0],
    pink: [M, 192, 203],
    cyan: [0, M, M],
    transparent: [M, M, M, 0],
  },
  Je = function (t, e, i) {
    return (
      (t += t < 0 ? 1 : t > 1 ? -1 : 0),
      ((t * 6 < 1
        ? e + (i - e) * t * 6
        : t < 0.5
        ? i
        : t * 3 < 2
        ? e + (i - e) * (2 / 3 - t) * 6
        : e) *
        M +
        0.5) |
        0
    );
  },
  Fr = function (t, e, i) {
    var r = t ? (Tt(t) ? [t >> 16, (t >> 8) & M, t & M] : 0) : de.black,
      n,
      s,
      o,
      u,
      l,
      f,
      h,
      c,
      d,
      p;
    if (!r) {
      if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), de[t]))
        r = de[t];
      else if (t.charAt(0) === "#") {
        if (
          (t.length < 6 &&
            ((n = t.charAt(1)),
            (s = t.charAt(2)),
            (o = t.charAt(3)),
            (t =
              "#" +
              n +
              n +
              s +
              s +
              o +
              o +
              (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
          t.length === 9)
        )
          return (
            (r = parseInt(t.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & M, r & M, parseInt(t.substr(7), 16) / 255]
          );
        (t = parseInt(t.substr(1), 16)), (r = [t >> 16, (t >> 8) & M, t & M]);
      } else if (t.substr(0, 3) === "hsl") {
        if (((r = p = t.match(si)), !e))
          (u = (+r[0] % 360) / 360),
            (l = +r[1] / 100),
            (f = +r[2] / 100),
            (s = f <= 0.5 ? f * (l + 1) : f + l - f * l),
            (n = f * 2 - s),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Je(u + 1 / 3, n, s)),
            (r[1] = Je(u, n, s)),
            (r[2] = Je(u - 1 / 3, n, s));
        else if (~t.indexOf("="))
          return (r = t.match(gi)), i && r.length < 4 && (r[3] = 1), r;
      } else r = t.match(si) || de.transparent;
      r = r.map(Number);
    }
    return (
      e &&
        !p &&
        ((n = r[0] / M),
        (s = r[1] / M),
        (o = r[2] / M),
        (h = Math.max(n, s, o)),
        (c = Math.min(n, s, o)),
        (f = (h + c) / 2),
        h === c
          ? (u = l = 0)
          : ((d = h - c),
            (l = f > 0.5 ? d / (2 - h - c) : d / (h + c)),
            (u =
              h === n
                ? (s - o) / d + (s < o ? 6 : 0)
                : h === s
                ? (o - n) / d + 2
                : (n - s) / d + 4),
            (u *= 60)),
        (r[0] = ~~(u + 0.5)),
        (r[1] = ~~(l * 100 + 0.5)),
        (r[2] = ~~(f * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  },
  Ir = function (t) {
    var e = [],
      i = [],
      r = -1;
    return (
      t.split(bt).forEach(function (n) {
        var s = n.match(Bt) || [];
        e.push.apply(e, s), i.push((r += s.length + 1));
      }),
      (e.c = i),
      e
    );
  },
  lr = function (t, e, i) {
    var r = "",
      n = (t + r).match(bt),
      s = e ? "hsla(" : "rgba(",
      o = 0,
      u,
      l,
      f,
      h;
    if (!n) return t;
    if (
      ((n = n.map(function (c) {
        return (
          (c = Fr(c, e, 1)) &&
          s +
            (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) +
            ")"
        );
      })),
      i && ((f = Ir(t)), (u = i.c), u.join(r) !== f.c.join(r)))
    )
      for (l = t.replace(bt, "1").split(Bt), h = l.length - 1; o < h; o++)
        r +=
          l[o] +
          (~u.indexOf(o)
            ? n.shift() || s + "0,0,0,0)"
            : (f.length ? f : n.length ? n : i).shift());
    if (!l)
      for (l = t.split(bt), h = l.length - 1; o < h; o++) r += l[o] + n[o];
    return r + l[h];
  },
  bt = (function () {
    var a =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      t;
    for (t in de) a += "|" + t + "\\b";
    return new RegExp(a + ")", "gi");
  })(),
  Bn = /hsl[a]?\(/,
  Ci = function (t) {
    var e = t.join(" "),
      i;
    if (((bt.lastIndex = 0), bt.test(e)))
      return (
        (i = Bn.test(e)),
        (t[1] = lr(t[1], i)),
        (t[0] = lr(t[0], i, Ir(t[1]))),
        !0
      );
  },
  ve,
  tt = (function () {
    var a = Date.now,
      t = 500,
      e = 33,
      i = a(),
      r = i,
      n = 1e3 / 240,
      s = n,
      o = [],
      u,
      l,
      f,
      h,
      c,
      d,
      p = function _(m) {
        var y = a() - r,
          x = m === !0,
          v,
          b,
          g,
          w;
        if (
          ((y > t || y < 0) && (i += y - e),
          (r += y),
          (g = r - i),
          (v = g - s),
          (v > 0 || x) &&
            ((w = ++h.frame),
            (c = g - h.time * 1e3),
            (h.time = g = g / 1e3),
            (s += v + (v >= n ? 4 : n - v)),
            (b = 1)),
          x || (u = l(_)),
          b)
        )
          for (d = 0; d < o.length; d++) o[d](g, c, w, m);
      };
    return (
      (h = {
        time: 0,
        frame: 0,
        tick: function () {
          p(!0);
        },
        deltaRatio: function (m) {
          return c / (1e3 / (m || 60));
        },
        wake: function () {
          pr &&
            (!oi &&
              mi() &&
              ((pt = oi = window),
              (xi = pt.document || {}),
              (ot.gsap = H),
              (pt.gsapVersions || (pt.gsapVersions = [])).push(H.version),
              mr(Re || pt.GreenSockGlobals || (!pt.gsap && pt) || {}),
              Rr.forEach(zr)),
            (f = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            u && h.sleep(),
            (l =
              f ||
              function (m) {
                return setTimeout(m, (s - h.time * 1e3 + 1) | 0);
              }),
            (ve = 1),
            p(2));
        },
        sleep: function () {
          (f ? cancelAnimationFrame : clearTimeout)(u), (ve = 0), (l = xe);
        },
        lagSmoothing: function (m, y) {
          (t = m || 1 / 0), (e = Math.min(y || 33, t));
        },
        fps: function (m) {
          (n = 1e3 / (m || 240)), (s = h.time * 1e3 + n);
        },
        add: function (m, y, x) {
          var v = y
            ? function (b, g, w, P) {
                m(b, g, w, P), h.remove(v);
              }
            : m;
          return h.remove(m), o[x ? "unshift" : "push"](v), ie(), v;
        },
        remove: function (m, y) {
          ~(y = o.indexOf(m)) && o.splice(y, 1) && d >= y && d--;
        },
        _listeners: o,
      }),
      h
    );
  })(),
  ie = function () {
    return !ve && tt.wake();
  },
  S = {},
  Un = /^[\d.\-M][\d.\-,\s]/,
  Yn = /["']/g,
  qn = function (t) {
    for (
      var e = {},
        i = t.substr(1, t.length - 3).split(":"),
        r = i[0],
        n = 1,
        s = i.length,
        o,
        u,
        l;
      n < s;
      n++
    )
      (u = i[n]),
        (o = n !== s - 1 ? u.lastIndexOf(",") : u.length),
        (l = u.substr(0, o)),
        (e[r] = isNaN(l) ? l.replace(Yn, "").trim() : +l),
        (r = u.substr(o + 1).trim());
    return e;
  },
  Xn = function (t) {
    var e = t.indexOf("(") + 1,
      i = t.indexOf(")"),
      r = t.indexOf("(", e);
    return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
  },
  Wn = function (t) {
    var e = (t + "").split("("),
      i = S[e[0]];
    return i && e.length > 1 && i.config
      ? i.config.apply(
          null,
          ~t.indexOf("{") ? [qn(e[1])] : Xn(t).split(",").map(vr)
        )
      : S._CE && Un.test(t)
      ? S._CE("", t)
      : i;
  },
  Nr = function (t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  },
  Lr = function a(t, e) {
    for (var i = t._first, r; i; )
      i instanceof W
        ? a(i, e)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== e &&
          (i.timeline
            ? a(i.timeline, e)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = e))),
        (i = i._next);
  },
  Lt = function (t, e) {
    return (t && (I(t) ? t : S[t] || Wn(t))) || e;
  },
  Yt = function (t, e, i, r) {
    i === void 0 &&
      (i = function (u) {
        return 1 - e(1 - u);
      }),
      r === void 0 &&
        (r = function (u) {
          return u < 0.5 ? e(u * 2) / 2 : 1 - e((1 - u) * 2) / 2;
        });
    var n = { easeIn: e, easeOut: i, easeInOut: r },
      s;
    return (
      Z(t, function (o) {
        (S[o] = ot[o] = n), (S[(s = o.toLowerCase())] = i);
        for (var u in n)
          S[
            s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")
          ] = S[o + "." + u] = n[u];
      }),
      n
    );
  },
  Vr = function (t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
    };
  },
  ti = function a(t, e, i) {
    var r = e >= 1 ? e : 1,
      n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
      s = (n / ni) * (Math.asin(1 / r) || 0),
      o = function (f) {
        return f === 1 ? 1 : r * Math.pow(2, -10 * f) * xn((f - s) * n) + 1;
      },
      u =
        t === "out"
          ? o
          : t === "in"
          ? function (l) {
              return 1 - o(1 - l);
            }
          : Vr(o);
    return (
      (n = ni / n),
      (u.config = function (l, f) {
        return a(t, l, f);
      }),
      u
    );
  },
  ei = function a(t, e) {
    e === void 0 && (e = 1.70158);
    var i = function (s) {
        return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
      },
      r =
        t === "out"
          ? i
          : t === "in"
          ? function (n) {
              return 1 - i(1 - n);
            }
          : Vr(i);
    return (
      (r.config = function (n) {
        return a(t, n);
      }),
      r
    );
  };
Z("Linear,Quad,Cubic,Quart,Quint,Strong", function (a, t) {
  var e = t < 5 ? t + 1 : t;
  Yt(
    a + ",Power" + (e - 1),
    t
      ? function (i) {
          return Math.pow(i, e);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, e);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, e) / 2
        : 1 - Math.pow((1 - i) * 2, e) / 2;
    }
  );
});
S.Linear.easeNone = S.none = S.Linear.easeIn;
Yt("Elastic", ti("in"), ti("out"), ti());
(function (a, t) {
  var e = 1 / t,
    i = 2 * e,
    r = 2.5 * e,
    n = function (o) {
      return o < e
        ? a * o * o
        : o < i
        ? a * Math.pow(o - 1.5 / t, 2) + 0.75
        : o < r
        ? a * (o -= 2.25 / t) * o + 0.9375
        : a * Math.pow(o - 2.625 / t, 2) + 0.984375;
    };
  Yt(
    "Bounce",
    function (s) {
      return 1 - n(1 - s);
    },
    n
  );
})(7.5625, 2.75);
Yt("Expo", function (a) {
  return Math.pow(2, 10 * (a - 1)) * a + a * a * a * a * a * a * (1 - a);
});
Yt("Circ", function (a) {
  return -(hr(1 - a * a) - 1);
});
Yt("Sine", function (a) {
  return a === 1 ? 1 : -yn(a * mn) + 1;
});
Yt("Back", ei("in"), ei("out"), ei());
S.SteppedEase =
  S.steps =
  ot.SteppedEase =
    {
      config: function (t, e) {
        t === void 0 && (t = 1);
        var i = 1 / t,
          r = t + (e ? 0 : 1),
          n = e ? 1 : 0,
          s = 1 - k;
        return function (o) {
          return (((r * Te(0, s, o)) | 0) + n) * i;
        };
      },
    };
$t.ease = S["quad.out"];
Z(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (a) {
    return (bi += a + "," + a + "Params,");
  }
);
var Si = function (t, e) {
    (this.id = gn++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = e),
      (this.get = e ? e.get : wi),
      (this.set = e ? e.getSetter : qe);
  },
  be = (function () {
    function a(e) {
      (this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        ee(this, +e.duration, 1, 1),
        (this.data = e.data),
        R && ((this._ctx = R), R.data.push(this)),
        ve || tt.wake();
    }
    var t = a.prototype;
    return (
      (t.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (t.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            ee(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (t.totalTime = function (i, r) {
        if ((ie(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (Ye(this, i), !n._dp || n.parent || wr(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            mt(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === k) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), xr(this, i, r)),
          this
        );
      }),
      (t.time = function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + or(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              r
            )
          : this._time;
      }),
      (t.totalProgress = function (i, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, r)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }),
      (t.progress = function (i, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                or(this),
              r
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (t.iteration = function (i, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * n, r)
          : this._repeat
          ? te(this._tTime, n) + 1
          : 1;
      }),
      (t.timeScale = function (i, r) {
        if (!arguments.length) return this._rts === -k ? 0 : this._rts;
        if (this._rts === i) return this;
        var n =
          this.parent && this._ts ? Ie(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -k ? 0 : this._rts),
          this.totalTime(
            Te(-Math.abs(this._delay), this.totalDuration(), n),
            r !== !1
          ),
          Ue(this),
          Sn(this)
        );
      }),
      (t.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (ie(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== k &&
                      (this._tTime -= k)
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && mt(r, this, i - this._delay), this
          );
        }
        return this._start;
      }),
      (t.endTime = function (i) {
        return (
          this._start +
          (et(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (i) {
        var r = this.parent || this._dp;
        return r
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Ie(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (t.revert = function (i) {
        i === void 0 && (i = Tn);
        var r = j;
        return (
          (j = i),
          Pi(this) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (j = r),
          this
        );
      }),
      (t.globalTime = function (i) {
        for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
          (n = r._start + n / (Math.abs(r._ts) || 1)), (r = r._dp);
        return !this.parent && this._sat ? this._sat.globalTime(i) : n;
      }),
      (t.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), ar(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (t.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), ar(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (t.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (t.seek = function (i, r) {
        return this.totalTime(lt(this, i), et(r));
      }),
      (t.restart = function (i, r) {
        return (
          this.play().totalTime(i ? -this._delay : 0, et(r)),
          this._dur || (this._zTime = -k),
          this
        );
      }),
      (t.play = function (i, r) {
        return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
      }),
      (t.reverse = function (i, r) {
        return (
          i != null && this.seek(i || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (i, r) {
        return i != null && this.seek(i, r), this.paused(!0);
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -k : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -k), this;
      }),
      (t.isActive = function () {
        var i = this.parent || this._dp,
          r = this._start,
          n;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (n = i.rawTime(!0)) >= r &&
            n < this.endTime(!0) - k)
        );
      }),
      (t.eventCallback = function (i, r, n) {
        var s = this.vars;
        return arguments.length > 1
          ? (r
              ? ((s[i] = r),
                n && (s[i + "Params"] = n),
                i === "onUpdate" && (this._onUpdate = r))
              : delete s[i],
            this)
          : s[i];
      }),
      (t.then = function (i) {
        var r = this;
        return new Promise(function (n) {
          var s = I(i) ? i : br,
            o = function () {
              var l = r.then;
              (r.then = null),
                I(s) && (s = s(r)) && (s.then || s === r) && (r.then = l),
                n(s),
                (r.then = l);
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? o()
            : (r._prom = o);
        });
      }),
      (t.kill = function () {
        ce(this);
      }),
      a
    );
  })();
at(be.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -k,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var W = (function (a) {
  _r(t, a);
  function t(i, r) {
    var n;
    return (
      i === void 0 && (i = {}),
      (n = a.call(this, i) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!i.smoothChildTiming),
      (n.autoRemoveChildren = !!i.autoRemoveChildren),
      (n._sort = et(i.sortChildren)),
      z && mt(i.parent || z, vt(n), r),
      i.reversed && n.reverse(),
      i.paused && n.paused(!0),
      i.scrollTrigger && Pr(vt(n), i.scrollTrigger),
      n
    );
  }
  var e = t.prototype;
  return (
    (e.to = function (r, n, s) {
      return me(0, arguments, this), this;
    }),
    (e.from = function (r, n, s) {
      return me(1, arguments, this), this;
    }),
    (e.fromTo = function (r, n, s, o) {
      return me(2, arguments, this), this;
    }),
    (e.set = function (r, n, s) {
      return (
        (n.duration = 0),
        (n.parent = this),
        pe(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new L(r, n, lt(this, s), 1),
        this
      );
    }),
    (e.call = function (r, n, s) {
      return mt(this, L.delayedCall(0, r, n), s);
    }),
    (e.staggerTo = function (r, n, s, o, u, l, f) {
      return (
        (s.duration = n),
        (s.stagger = s.stagger || o),
        (s.onComplete = l),
        (s.onCompleteParams = f),
        (s.parent = this),
        new L(r, s, lt(this, u)),
        this
      );
    }),
    (e.staggerFrom = function (r, n, s, o, u, l, f) {
      return (
        (s.runBackwards = 1),
        (pe(s).immediateRender = et(s.immediateRender)),
        this.staggerTo(r, n, s, o, u, l, f)
      );
    }),
    (e.staggerFromTo = function (r, n, s, o, u, l, f, h) {
      return (
        (o.startAt = s),
        (pe(o).immediateRender = et(o.immediateRender)),
        this.staggerTo(r, n, o, u, l, f, h)
      );
    }),
    (e.render = function (r, n, s) {
      var o = this._time,
        u = this._dirty ? this.totalDuration() : this._tDur,
        l = this._dur,
        f = r <= 0 ? 0 : B(r),
        h = this._zTime < 0 != r < 0 && (this._initted || !l),
        c,
        d,
        p,
        _,
        m,
        y,
        x,
        v,
        b,
        g,
        w,
        P;
      if (
        (this !== z && f > u && r >= 0 && (f = u), f !== this._tTime || s || h)
      ) {
        if (
          (o !== this._time &&
            l &&
            ((f += this._time - o), (r += this._time - o)),
          (c = f),
          (b = this._start),
          (v = this._ts),
          (y = !v),
          h && (l || (o = this._zTime), (r || !n) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((w = this._yoyo),
            (m = l + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(m * 100 + r, n, s);
          if (
            ((c = B(f % m)),
            f === u
              ? ((_ = this._repeat), (c = l))
              : ((g = B(f / m)),
                (_ = ~~g),
                _ && _ === g && ((c = l), _--),
                c > l && (c = l)),
            (g = te(this._tTime, m)),
            !o &&
              this._tTime &&
              g !== _ &&
              this._tTime - g * m - this._dur <= 0 &&
              (g = _),
            w && _ & 1 && ((c = l - c), (P = 1)),
            _ !== g && !this._lock)
          ) {
            var C = w && g & 1,
              T = C === (w && _ & 1);
            if (
              (_ < g && (C = !C),
              (o = C ? 0 : f % l ? l : f),
              (this._lock = 1),
              (this.render(o || (P ? 0 : B(_ * m)), n, !l)._lock = 0),
              (this._tTime = f),
              !n && this.parent && st(this, "onRepeat"),
              this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1),
              (o && o !== this._time) ||
                y !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((l = this._dur),
              (u = this._tDur),
              T &&
                ((this._lock = 2),
                (o = C ? l : -1e-4),
                this.render(o, !0),
                this.vars.repeatRefresh && !P && this.invalidate()),
              (this._lock = 0),
              !this._ts && !y)
            )
              return this;
            Lr(this, P);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((x = Dn(this, B(o), B(c))), x && (f -= c - (c = x._start))),
          (this._tTime = f),
          (this._time = c),
          (this._act = !v),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (o = 0)),
          !o && f && !n && !g && (st(this, "onStart"), this._tTime !== f))
        )
          return this;
        if (c >= o && r >= 0)
          for (d = this._first; d; ) {
            if (
              ((p = d._next), (d._act || c >= d._start) && d._ts && x !== d)
            ) {
              if (d.parent !== this) return this.render(r, n, s);
              if (
                (d.render(
                  d._ts > 0
                    ? (c - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (c - d._start) * d._ts,
                  n,
                  s
                ),
                c !== this._time || (!this._ts && !y))
              ) {
                (x = 0), p && (f += this._zTime = -k);
                break;
              }
            }
            d = p;
          }
        else {
          d = this._last;
          for (var O = r < 0 ? r : c; d; ) {
            if (((p = d._prev), (d._act || O <= d._end) && d._ts && x !== d)) {
              if (d.parent !== this) return this.render(r, n, s);
              if (
                (d.render(
                  d._ts > 0
                    ? (O - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (O - d._start) * d._ts,
                  n,
                  s || (j && Pi(d))
                ),
                c !== this._time || (!this._ts && !y))
              ) {
                (x = 0), p && (f += this._zTime = O ? -k : k);
                break;
              }
            }
            d = p;
          }
        }
        if (
          x &&
          !n &&
          (this.pause(),
          (x.render(c >= o ? 0 : -k)._zTime = c >= o ? 1 : -1),
          this._ts)
        )
          return (this._start = b), Ue(this), this.render(r, n, s);
        this._onUpdate && !n && st(this, "onUpdate", !0),
          ((f === u && this._tTime >= this.totalDuration()) || (!f && o)) &&
            (b === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !l) &&
                ((f === u && this._ts > 0) || (!f && this._ts < 0)) &&
                Dt(this, 1),
              !n &&
                !(r < 0 && !o) &&
                (f || o || !u) &&
                (st(
                  this,
                  f === u && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(f < u && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (e.add = function (r, n) {
      var s = this;
      if ((Tt(n) || (n = lt(this, n, r)), !(r instanceof be))) {
        if (Q(r))
          return (
            r.forEach(function (o) {
              return s.add(o, n);
            }),
            this
          );
        if (U(r)) return this.addLabel(r, n);
        if (I(r)) r = L.delayedCall(0, r);
        else return this;
      }
      return this !== r ? mt(this, r, n) : this;
    }),
    (e.getChildren = function (r, n, s, o) {
      r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = -ft);
      for (var u = [], l = this._first; l; )
        l._start >= o &&
          (l instanceof L
            ? n && u.push(l)
            : (s && u.push(l), r && u.push.apply(u, l.getChildren(!0, n, s)))),
          (l = l._next);
      return u;
    }),
    (e.getById = function (r) {
      for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
        if (n[s].vars.id === r) return n[s];
    }),
    (e.remove = function (r) {
      return U(r)
        ? this.removeLabel(r)
        : I(r)
        ? this.killTweensOf(r)
        : (r.parent === this && Be(this, r),
          r === this._recent && (this._recent = this._last),
          Nt(this));
    }),
    (e.totalTime = function (r, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = B(
              tt.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          a.prototype.totalTime.call(this, r, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (e.addLabel = function (r, n) {
      return (this.labels[r] = lt(this, n)), this;
    }),
    (e.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (e.addPause = function (r, n, s) {
      var o = L.delayedCall(0, n || xe, s);
      return (
        (o.data = "isPause"), (this._hasPause = 1), mt(this, o, lt(this, r))
      );
    }),
    (e.removePause = function (r) {
      var n = this._first;
      for (r = lt(this, r); n; )
        n._start === r && n.data === "isPause" && Dt(n), (n = n._next);
    }),
    (e.killTweensOf = function (r, n, s) {
      for (var o = this.getTweensOf(r, s), u = o.length; u--; )
        Ot !== o[u] && o[u].kill(r, n);
      return this;
    }),
    (e.getTweensOf = function (r, n) {
      for (var s = [], o = _t(r), u = this._first, l = Tt(n), f; u; )
        u instanceof L
          ? wn(u._targets, o) &&
            (l
              ? (!Ot || (u._initted && u._ts)) &&
                u.globalTime(0) <= n &&
                u.globalTime(u.totalDuration()) > n
              : !n || u.isActive()) &&
            s.push(u)
          : (f = u.getTweensOf(o, n)).length && s.push.apply(s, f),
          (u = u._next);
      return s;
    }),
    (e.tweenTo = function (r, n) {
      n = n || {};
      var s = this,
        o = lt(s, r),
        u = n,
        l = u.startAt,
        f = u.onStart,
        h = u.onStartParams,
        c = u.immediateRender,
        d,
        p = L.to(
          s,
          at(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (o - (l && "time" in l ? l.time : s._time)) / s.timeScale()
                ) ||
                k,
              onStart: function () {
                if ((s.pause(), !d)) {
                  var m =
                    n.duration ||
                    Math.abs(
                      (o - (l && "time" in l ? l.time : s._time)) /
                        s.timeScale()
                    );
                  p._dur !== m && ee(p, m, 0, 1).render(p._time, !0, !0),
                    (d = 1);
                }
                f && f.apply(p, h || []);
              },
            },
            n
          )
        );
      return c ? p.render(0) : p;
    }),
    (e.tweenFromTo = function (r, n, s) {
      return this.tweenTo(n, at({ startAt: { time: lt(this, r) } }, s));
    }),
    (e.recent = function () {
      return this._recent;
    }),
    (e.nextLabel = function (r) {
      return r === void 0 && (r = this._time), ur(this, lt(this, r));
    }),
    (e.previousLabel = function (r) {
      return r === void 0 && (r = this._time), ur(this, lt(this, r), 1);
    }),
    (e.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + k);
    }),
    (e.shiftChildren = function (r, n, s) {
      s === void 0 && (s = 0);
      for (var o = this._first, u = this.labels, l; o; )
        o._start >= s && ((o._start += r), (o._end += r)), (o = o._next);
      if (n) for (l in u) u[l] >= s && (u[l] += r);
      return Nt(this);
    }),
    (e.invalidate = function (r) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(r), (n = n._next);
      return a.prototype.invalidate.call(this, r);
    }),
    (e.clear = function (r) {
      r === void 0 && (r = !0);
      for (var n = this._first, s; n; ) (s = n._next), this.remove(n), (n = s);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Nt(this)
      );
    }),
    (e.totalDuration = function (r) {
      var n = 0,
        s = this,
        o = s._last,
        u = ft,
        l,
        f,
        h;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -r : r)
        );
      if (s._dirty) {
        for (h = s.parent; o; )
          (l = o._prev),
            o._dirty && o.totalDuration(),
            (f = o._start),
            f > u && s._sort && o._ts && !s._lock
              ? ((s._lock = 1), (mt(s, o, f - o._delay, 1)._lock = 0))
              : (u = f),
            f < 0 &&
              o._ts &&
              ((n -= f),
              ((!h && !s._dp) || (h && h.smoothChildTiming)) &&
                ((s._start += f / s._ts), (s._time -= f), (s._tTime -= f)),
              s.shiftChildren(-f, !1, -1 / 0),
              (u = 0)),
            o._end > n && o._ts && (n = o._end),
            (o = l);
        ee(s, s === z && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
      }
      return s._tDur;
    }),
    (t.updateRoot = function (r) {
      if ((z._ts && (xr(z, Ie(r, z)), (yr = tt.frame)), tt.frame >= nr)) {
        nr += it.autoSleep || 120;
        var n = z._first;
        if ((!n || !n._ts) && it.autoSleep && tt._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || tt.sleep();
        }
      }
    }),
    t
  );
})(be);
at(W.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var jn = function (t, e, i, r, n, s, o) {
    var u = new $(this._pt, t, e, 0, 1, Ei, null, n),
      l = 0,
      f = 0,
      h,
      c,
      d,
      p,
      _,
      m,
      y,
      x;
    for (
      u.b = i,
        u.e = r,
        i += "",
        r += "",
        (y = ~r.indexOf("random(")) && (r = re(r)),
        s && ((x = [i, r]), s(x, t, e), (i = x[0]), (r = x[1])),
        c = i.match(Ze) || [];
      (h = Ze.exec(r));

    )
      (p = h[0]),
        (_ = r.substring(l, h.index)),
        d ? (d = (d + 1) % 5) : _.substr(-5) === "rgba(" && (d = 1),
        p !== c[f++] &&
          ((m = parseFloat(c[f - 1]) || 0),
          (u._pt = {
            _next: u._pt,
            p: _ || f === 1 ? _ : ",",
            s: m,
            c: p.charAt(1) === "=" ? Ut(m, p) - m : parseFloat(p) - m,
            m: d && d < 4 ? Math.round : 0,
          }),
          (l = Ze.lastIndex));
    return (
      (u.c = l < r.length ? r.substring(l, r.length) : ""),
      (u.fp = o),
      (yi.test(r) || y) && (u.e = 0),
      (this._pt = u),
      u
    );
  },
  Oi = function (t, e, i, r, n, s, o, u, l, f) {
    I(r) && (r = r(n || 0, t, s));
    var h = t[e],
      c =
        i !== "get"
          ? i
          : I(h)
          ? l
            ? t[
                e.indexOf("set") || !I(t["get" + e.substr(3)])
                  ? e
                  : "get" + e.substr(3)
              ](l)
            : t[e]()
          : h,
      d = I(h) ? (l ? Zn : Yr) : Di,
      p;
    if (
      (U(r) &&
        (~r.indexOf("random(") && (r = re(r)),
        r.charAt(1) === "=" &&
          ((p = Ut(c, r) + (G(c) || 0)), (p || p === 0) && (r = p))),
      !f || c !== r || ci)
    )
      return !isNaN(c * r) && r !== ""
        ? ((p = new $(
            this._pt,
            t,
            e,
            +c || 0,
            r - (c || 0),
            typeof h == "boolean" ? Jn : qr,
            0,
            d
          )),
          l && (p.fp = l),
          o && p.modifier(o, this, t),
          (this._pt = p))
        : (!h && !(e in t) && Ve(e, r),
          jn.call(this, t, e, c, r, d, u || it.stringFilter, l));
  },
  Gn = function (t, e, i, r, n) {
    if (
      (I(t) && (t = ge(t, n, e, i, r)),
      !gt(t) || (t.style && t.nodeType) || Q(t) || cr(t))
    )
      return U(t) ? ge(t, n, e, i, r) : t;
    var s = {},
      o;
    for (o in t) s[o] = ge(t[o], n, e, i, r);
    return s;
  },
  Mi = function (t, e, i, r, n, s) {
    var o, u, l, f;
    if (
      J[t] &&
      (o = new J[t]()).init(
        n,
        o.rawVars ? e[t] : Gn(e[t], r, n, s, i),
        i,
        r,
        s
      ) !== !1 &&
      ((i._pt = u = new $(i._pt, n, t, 0, 1, o.render, o, 0, o.priority)),
      i !== Zt)
    )
      for (l = i._ptLookup[i._targets.indexOf(n)], f = o._props.length; f--; )
        l[o._props[f]] = u;
    return o;
  },
  Ot,
  ci,
  ki = function a(t, e, i) {
    var r = t.vars,
      n = r.ease,
      s = r.startAt,
      o = r.immediateRender,
      u = r.lazy,
      l = r.onUpdate,
      f = r.runBackwards,
      h = r.yoyoEase,
      c = r.keyframes,
      d = r.autoRevert,
      p = t._dur,
      _ = t._startAt,
      m = t._targets,
      y = t.parent,
      x = y && y.data === "nested" ? y.vars.targets : m,
      v = t._overwrite === "auto" && !pi,
      b = t.timeline,
      g,
      w,
      P,
      C,
      T,
      O,
      A,
      D,
      E,
      X,
      Y,
      V,
      q;
    if (
      (b && (!c || !n) && (n = "none"),
      (t._ease = Lt(n, $t.ease)),
      (t._yEase = h ? Nr(Lt(h === !0 ? n : h, $t.ease)) : 0),
      h &&
        t._yoyo &&
        !t._repeat &&
        ((h = t._yEase), (t._yEase = t._ease), (t._ease = h)),
      (t._from = !b && !!r.runBackwards),
      !b || (c && !r.stagger))
    ) {
      if (
        ((D = m[0] ? kt(m[0]).harness : 0),
        (V = D && r[D.prop]),
        (g = Fe(r, vi)),
        _ &&
          (_._zTime < 0 && _.progress(1),
          e < 0 && f && o && !d ? _.render(-1, !0) : _.revert(f && p ? De : bn),
          (_._lazy = 0)),
        s)
      ) {
        if (
          (Dt(
            (t._startAt = L.set(
              m,
              at(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: y,
                  immediateRender: !0,
                  lazy: !_ && et(u),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    l &&
                    function () {
                      return st(t, "onUpdate");
                    },
                  stagger: 0,
                },
                s
              )
            ))
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          e < 0 && (j || (!o && !d)) && t._startAt.revert(De),
          o && p && e <= 0 && i <= 0)
        ) {
          e && (t._zTime = e);
          return;
        }
      } else if (f && p && !_) {
        if (
          (e && (o = !1),
          (P = at(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: o && !_ && et(u),
              immediateRender: o,
              stagger: 0,
              parent: y,
            },
            g
          )),
          V && (P[D.prop] = V),
          Dt((t._startAt = L.set(m, P))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          e < 0 && (j ? t._startAt.revert(De) : t._startAt.render(-1, !0)),
          (t._zTime = e),
          !o)
        )
          a(t._startAt, k, k);
        else if (!e) return;
      }
      for (
        t._pt = t._ptCache = 0, u = (p && et(u)) || (u && !p), w = 0;
        w < m.length;
        w++
      ) {
        if (
          ((T = m[w]),
          (A = T._gsap || Ti(m)[w]._gsap),
          (t._ptLookup[w] = X = {}),
          ai[A.id] && Mt.length && ze(),
          (Y = x === m ? w : x.indexOf(T)),
          D &&
            (E = new D()).init(T, V || g, t, Y, x) !== !1 &&
            ((t._pt = C =
              new $(t._pt, T, E.name, 0, 1, E.render, E, 0, E.priority)),
            E._props.forEach(function (ct) {
              X[ct] = C;
            }),
            E.priority && (O = 1)),
          !D || V)
        )
          for (P in g)
            J[P] && (E = Mi(P, g, t, Y, T, x))
              ? E.priority && (O = 1)
              : (X[P] = C =
                  Oi.call(t, T, P, "get", g[P], Y, x, 0, r.stringFilter));
        t._op && t._op[w] && t.kill(T, t._op[w]),
          v &&
            t._pt &&
            ((Ot = t),
            z.killTweensOf(T, X, t.globalTime(e)),
            (q = !t.parent),
            (Ot = 0)),
          t._pt && u && (ai[A.id] = 1);
      }
      O && Ri(t), t._onInit && t._onInit(t);
    }
    (t._onUpdate = l),
      (t._initted = (!t._op || t._pt) && !q),
      c && e <= 0 && b.render(ft, !0, !0);
  },
  Qn = function (t, e, i, r, n, s, o, u) {
    var l = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
      f,
      h,
      c,
      d;
    if (!l)
      for (
        l = t._ptCache[e] = [], c = t._ptLookup, d = t._targets.length;
        d--;

      ) {
        if (((f = c[d][e]), f && f.d && f.d._pt))
          for (f = f.d._pt; f && f.p !== e && f.fp !== e; ) f = f._next;
        if (!f)
          return (
            (ci = 1),
            (t.vars[e] = "+=0"),
            ki(t, o),
            (ci = 0),
            u ? ye(e + " not eligible for reset") : 1
          );
        l.push(f);
      }
    for (d = l.length; d--; )
      (h = l[d]),
        (f = h._pt || h),
        (f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + s * f.c),
        (f.c = i - f.s),
        h.e && (h.e = N(i) + G(h.e)),
        h.b && (h.b = f.s + G(h.b));
  },
  Hn = function (t, e) {
    var i = t[0] ? kt(t[0]).harness : 0,
      r = i && i.aliases,
      n,
      s,
      o,
      u;
    if (!r) return e;
    n = Jt({}, e);
    for (s in r)
      if (s in n) for (u = r[s].split(","), o = u.length; o--; ) n[u[o]] = n[s];
    return n;
  },
  Kn = function (t, e, i, r) {
    var n = e.ease || r || "power1.inOut",
      s,
      o;
    if (Q(e))
      (o = i[t] || (i[t] = [])),
        e.forEach(function (u, l) {
          return o.push({ t: (l / (e.length - 1)) * 100, v: u, e: n });
        });
    else
      for (s in e)
        (o = i[s] || (i[s] = [])),
          s === "ease" || o.push({ t: parseFloat(t), v: e[s], e: n });
  },
  ge = function (t, e, i, r, n) {
    return I(t)
      ? t.call(e, i, r, n)
      : U(t) && ~t.indexOf("random(")
      ? re(t)
      : t;
  },
  Br = bi + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Ur = {};
Z(Br + ",id,stagger,delay,duration,paused,scrollTrigger", function (a) {
  return (Ur[a] = 1);
});
var L = (function (a) {
  _r(t, a);
  function t(i, r, n, s) {
    var o;
    typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
      (o = a.call(this, s ? r : pe(r)) || this);
    var u = o.vars,
      l = u.duration,
      f = u.delay,
      h = u.immediateRender,
      c = u.stagger,
      d = u.overwrite,
      p = u.keyframes,
      _ = u.defaults,
      m = u.scrollTrigger,
      y = u.yoyoEase,
      x = r.parent || z,
      v = (Q(i) || cr(i) ? Tt(i[0]) : "length" in r) ? [i] : _t(i),
      b,
      g,
      w,
      P,
      C,
      T,
      O,
      A;
    if (
      ((o._targets = v.length
        ? Ti(v)
        : ye(
            "GSAP target " + i + " not found. https://gsap.com",
            !it.nullTargetWarn
          ) || []),
      (o._ptLookup = []),
      (o._overwrite = d),
      p || c || ke(l) || ke(f))
    ) {
      if (
        ((r = o.vars),
        (b = o.timeline =
          new W({
            data: "nested",
            defaults: _ || {},
            targets: x && x.data === "nested" ? x.vars.targets : v,
          })),
        b.kill(),
        (b.parent = b._dp = vt(o)),
        (b._start = 0),
        c || ke(l) || ke(f))
      ) {
        if (((P = v.length), (O = c && Mr(c)), gt(c)))
          for (C in c) ~Br.indexOf(C) && (A || (A = {}), (A[C] = c[C]));
        for (g = 0; g < P; g++)
          (w = Fe(r, Ur)),
            (w.stagger = 0),
            y && (w.yoyoEase = y),
            A && Jt(w, A),
            (T = v[g]),
            (w.duration = +ge(l, vt(o), g, T, v)),
            (w.delay = (+ge(f, vt(o), g, T, v) || 0) - o._delay),
            !c &&
              P === 1 &&
              w.delay &&
              ((o._delay = f = w.delay), (o._start += f), (w.delay = 0)),
            b.to(T, w, O ? O(g, T, v) : 0),
            (b._ease = S.none);
        b.duration() ? (l = f = 0) : (o.timeline = 0);
      } else if (p) {
        pe(at(b.vars.defaults, { ease: "none" })),
          (b._ease = Lt(p.ease || r.ease || "none"));
        var D = 0,
          E,
          X,
          Y;
        if (Q(p))
          p.forEach(function (V) {
            return b.to(v, V, ">");
          }),
            b.duration();
        else {
          w = {};
          for (C in p)
            C === "ease" || C === "easeEach" || Kn(C, p[C], w, p.easeEach);
          for (C in w)
            for (
              E = w[C].sort(function (V, q) {
                return V.t - q.t;
              }),
                D = 0,
                g = 0;
              g < E.length;
              g++
            )
              (X = E[g]),
                (Y = {
                  ease: X.e,
                  duration: ((X.t - (g ? E[g - 1].t : 0)) / 100) * l,
                }),
                (Y[C] = X.v),
                b.to(v, Y, D),
                (D += Y.duration);
          b.duration() < l && b.to({}, { duration: l - b.duration() });
        }
      }
      l || o.duration((l = b.duration()));
    } else o.timeline = 0;
    return (
      d === !0 && !pi && ((Ot = vt(o)), z.killTweensOf(v), (Ot = 0)),
      mt(x, vt(o), n),
      r.reversed && o.reverse(),
      r.paused && o.paused(!0),
      (h ||
        (!l &&
          !p &&
          o._start === B(x._time) &&
          et(h) &&
          On(vt(o)) &&
          x.data !== "nested")) &&
        ((o._tTime = -k), o.render(Math.max(0, -f) || 0)),
      m && Pr(vt(o), m),
      o
    );
  }
  var e = t.prototype;
  return (
    (e.render = function (r, n, s) {
      var o = this._time,
        u = this._tDur,
        l = this._dur,
        f = r < 0,
        h = r > u - k && !f ? u : r < k ? 0 : r,
        c,
        d,
        p,
        _,
        m,
        y,
        x,
        v,
        b;
      if (!l) kn(this, r, n, s);
      else if (
        h !== this._tTime ||
        !r ||
        s ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== f) ||
        this._lazy
      ) {
        if (((c = h), (v = this.timeline), this._repeat)) {
          if (((_ = l + this._rDelay), this._repeat < -1 && f))
            return this.totalTime(_ * 100 + r, n, s);
          if (
            ((c = B(h % _)),
            h === u
              ? ((p = this._repeat), (c = l))
              : ((m = B(h / _)),
                (p = ~~m),
                p && p === m ? ((c = l), p--) : c > l && (c = l)),
            (y = this._yoyo && p & 1),
            y && ((b = this._yEase), (c = l - c)),
            (m = te(this._tTime, _)),
            c === o && !s && this._initted && p === m)
          )
            return (this._tTime = h), this;
          p !== m &&
            (v && this._yEase && Lr(v, y),
            this.vars.repeatRefresh &&
              !y &&
              !this._lock &&
              c !== _ &&
              this._initted &&
              ((this._lock = s = 1),
              (this.render(B(_ * p), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Cr(this, f ? r : c, s, n, h)) return (this._tTime = 0), this;
          if (o !== this._time && !(s && this.vars.repeatRefresh && p !== m))
            return this;
          if (l !== this._dur) return this.render(r, n, s);
        }
        if (
          ((this._tTime = h),
          (this._time = c),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = x = (b || this._ease)(c / l)),
          this._from && (this.ratio = x = 1 - x),
          !o && h && !n && !m && (st(this, "onStart"), this._tTime !== h))
        )
          return this;
        for (d = this._pt; d; ) d.r(x, d.d), (d = d._next);
        (v && v.render(r < 0 ? r : v._dur * v._ease(c / this._dur), n, s)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !n &&
            (f && ui(this, r, n, s), st(this, "onUpdate")),
          this._repeat &&
            p !== m &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            st(this, "onRepeat"),
          (h === this._tDur || !h) &&
            this._tTime === h &&
            (f && !this._onUpdate && ui(this, r, !0, !0),
            (r || !l) &&
              ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
              Dt(this, 1),
            !n &&
              !(f && !o) &&
              (h || o || y) &&
              (st(this, h === u ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(h < u && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (e.targets = function () {
      return this._targets;
    }),
    (e.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        a.prototype.invalidate.call(this, r)
      );
    }),
    (e.resetTo = function (r, n, s, o, u) {
      ve || tt.wake(), this._ts || this.play();
      var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        f;
      return (
        this._initted || ki(this, l),
        (f = this._ease(l / this._dur)),
        Qn(this, r, n, s, o, f, l, u)
          ? this.resetTo(r, n, s, o, 1)
          : (Ye(this, 0),
            this.parent ||
              Tr(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (e.kill = function (r, n) {
      if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? ce(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!j),
          this
        );
      if (this.timeline) {
        var s = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, n, Ot && Ot.vars.overwrite !== !0)
            ._first || ce(this),
          this.parent &&
            s !== this.timeline.totalDuration() &&
            ee(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        );
      }
      var o = this._targets,
        u = r ? _t(r) : o,
        l = this._ptLookup,
        f = this._pt,
        h,
        c,
        d,
        p,
        _,
        m,
        y;
      if ((!n || n === "all") && Cn(o, u))
        return n === "all" && (this._pt = 0), ce(this);
      for (
        h = this._op = this._op || [],
          n !== "all" &&
            (U(n) &&
              ((_ = {}),
              Z(n, function (x) {
                return (_[x] = 1);
              }),
              (n = _)),
            (n = Hn(o, n))),
          y = o.length;
        y--;

      )
        if (~u.indexOf(o[y])) {
          (c = l[y]),
            n === "all"
              ? ((h[y] = n), (p = c), (d = {}))
              : ((d = h[y] = h[y] || {}), (p = n));
          for (_ in p)
            (m = c && c[_]),
              m &&
                ((!("kill" in m.d) || m.d.kill(_) === !0) && Be(this, m, "_pt"),
                delete c[_]),
              d !== "all" && (d[_] = 1);
        }
      return this._initted && !this._pt && f && ce(this), this;
    }),
    (t.to = function (r, n) {
      return new t(r, n, arguments[2]);
    }),
    (t.from = function (r, n) {
      return me(1, arguments);
    }),
    (t.delayedCall = function (r, n, s, o) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: s,
        onReverseCompleteParams: s,
        callbackScope: o,
      });
    }),
    (t.fromTo = function (r, n, s) {
      return me(2, arguments);
    }),
    (t.set = function (r, n) {
      return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(r, n);
    }),
    (t.killTweensOf = function (r, n, s) {
      return z.killTweensOf(r, n, s);
    }),
    t
  );
})(be);
at(L.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Z("staggerTo,staggerFrom,staggerFromTo", function (a) {
  L[a] = function () {
    var t = new W(),
      e = fi.call(arguments, 0);
    return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, e);
  };
});
var Di = function (t, e, i) {
    return (t[e] = i);
  },
  Yr = function (t, e, i) {
    return t[e](i);
  },
  Zn = function (t, e, i, r) {
    return t[e](r.fp, i);
  },
  $n = function (t, e, i) {
    return t.setAttribute(e, i);
  },
  qe = function (t, e) {
    return I(t[e]) ? Yr : Le(t[e]) && t.setAttribute ? $n : Di;
  },
  qr = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
  },
  Jn = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
  Ei = function (t, e) {
    var i = e._pt,
      r = "";
    if (!t && e.b) r = e.b;
    else if (t === 1 && e.e) r = e.e;
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) +
          r),
          (i = i._next);
      r += e.c;
    }
    e.set(e.t, e.p, r, e);
  },
  Ai = function (t, e) {
    for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
  },
  ts = function (t, e, i, r) {
    for (var n = this._pt, s; n; )
      (s = n._next), n.p === r && n.modifier(t, e, i), (n = s);
  },
  es = function (t) {
    for (var e = this._pt, i, r; e; )
      (r = e._next),
        (e.p === t && !e.op) || e.op === t
          ? Be(this, e, "_pt")
          : e.dep || (i = 1),
        (e = r);
    return !i;
  },
  is = function (t, e, i, r) {
    r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
  },
  Ri = function (t) {
    for (var e = t._pt, i, r, n, s; e; ) {
      for (i = e._next, r = n; r && r.pr > e.pr; ) r = r._next;
      (e._prev = r ? r._prev : s) ? (e._prev._next = e) : (n = e),
        (e._next = r) ? (r._prev = e) : (s = e),
        (e = i);
    }
    t._pt = n;
  },
  $ = (function () {
    function a(e, i, r, n, s, o, u, l, f) {
      (this.t = i),
        (this.s = n),
        (this.c = s),
        (this.p = r),
        (this.r = o || qr),
        (this.d = u || this),
        (this.set = l || Di),
        (this.pr = f || 0),
        (this._next = e),
        e && (e._prev = this);
    }
    var t = a.prototype;
    return (
      (t.modifier = function (i, r, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = is),
          (this.m = i),
          (this.mt = n),
          (this.tween = r);
      }),
      a
    );
  })();
Z(
  bi +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (a) {
    return (vi[a] = 1);
  }
);
ot.TweenMax = ot.TweenLite = L;
ot.TimelineLite = ot.TimelineMax = W;
z = new W({
  sortChildren: !1,
  defaults: $t,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
it.stringFilter = Ci;
var Vt = [],
  Ae = {},
  rs = [],
  fr = 0,
  ns = 0,
  ii = function (t) {
    return (Ae[t] || rs).map(function (e) {
      return e();
    });
  },
  di = function () {
    var t = Date.now(),
      e = [];
    t - fr > 2 &&
      (ii("matchMediaInit"),
      Vt.forEach(function (i) {
        var r = i.queries,
          n = i.conditions,
          s,
          o,
          u,
          l;
        for (o in r)
          (s = pt.matchMedia(r[o]).matches),
            s && (u = 1),
            s !== n[o] && ((n[o] = s), (l = 1));
        l && (i.revert(), u && e.push(i));
      }),
      ii("matchMediaRevert"),
      e.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r);
        });
      }),
      (fr = t),
      ii("matchMedia"));
  },
  Xr = (function () {
    function a(e, i) {
      (this.selector = i && _i(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = ns++),
        e && this.add(e);
    }
    var t = a.prototype;
    return (
      (t.add = function (i, r, n) {
        I(i) && ((n = r), (r = i), (i = I));
        var s = this,
          o = function () {
            var l = R,
              f = s.selector,
              h;
            return (
              l && l !== s && l.data.push(s),
              n && (s.selector = _i(n)),
              (R = s),
              (h = r.apply(s, arguments)),
              I(h) && s._r.push(h),
              (R = l),
              (s.selector = f),
              (s.isReverted = !1),
              h
            );
          };
        return (
          (s.last = o),
          i === I
            ? o(s, function (u) {
                return s.add(null, u);
              })
            : i
            ? (s[i] = o)
            : o
        );
      }),
      (t.ignore = function (i) {
        var r = R;
        (R = null), i(this), (R = r);
      }),
      (t.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof a
              ? i.push.apply(i, r.getTweens())
              : r instanceof L &&
                  !(r.parent && r.parent.data === "nested") &&
                  i.push(r);
          }),
          i
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (i, r) {
        var n = this;
        if (
          (i
            ? (function () {
                for (var o = n.getTweens(), u = n.data.length, l; u--; )
                  (l = n.data[u]),
                    l.data === "isFlip" &&
                      (l.revert(),
                      l.getChildren(!0, !0, !1).forEach(function (f) {
                        return o.splice(o.indexOf(f), 1);
                      }));
                for (
                  o
                    .map(function (f) {
                      return {
                        g:
                          f._dur ||
                          f._delay ||
                          (f._sat && !f._sat.vars.immediateRender)
                            ? f.globalTime(0)
                            : -1 / 0,
                        t: f,
                      };
                    })
                    .sort(function (f, h) {
                      return h.g - f.g || -1 / 0;
                    })
                    .forEach(function (f) {
                      return f.t.revert(i);
                    }),
                    u = n.data.length;
                  u--;

                )
                  (l = n.data[u]),
                    l instanceof W
                      ? l.data !== "nested" &&
                        (l.scrollTrigger && l.scrollTrigger.revert(), l.kill())
                      : !(l instanceof L) && l.revert && l.revert(i);
                n._r.forEach(function (f) {
                  return f(i, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (o) {
                return o.kill && o.kill();
              }),
          this.clear(),
          r)
        )
          for (var s = Vt.length; s--; )
            Vt[s].id === this.id && Vt.splice(s, 1);
      }),
      (t.revert = function (i) {
        this.kill(i || {});
      }),
      a
    );
  })(),
  ss = (function () {
    function a(e) {
      (this.contexts = []), (this.scope = e), R && R.data.push(this);
    }
    var t = a.prototype;
    return (
      (t.add = function (i, r, n) {
        gt(i) || (i = { matches: i });
        var s = new Xr(0, n || this.scope),
          o = (s.conditions = {}),
          u,
          l,
          f;
        R && !s.selector && (s.selector = R.selector),
          this.contexts.push(s),
          (r = s.add("onMatch", r)),
          (s.queries = i);
        for (l in i)
          l === "all"
            ? (f = 1)
            : ((u = pt.matchMedia(i[l])),
              u &&
                (Vt.indexOf(s) < 0 && Vt.push(s),
                (o[l] = u.matches) && (f = 1),
                u.addListener
                  ? u.addListener(di)
                  : u.addEventListener("change", di)));
        return (
          f &&
            r(s, function (h) {
              return s.add(null, h);
            }),
          this
        );
      }),
      (t.revert = function (i) {
        this.kill(i || {});
      }),
      (t.kill = function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0);
        });
      }),
      a
    );
  })(),
  Ne = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      e.forEach(function (r) {
        return zr(r);
      });
    },
    timeline: function (t) {
      return new W(t);
    },
    getTweensOf: function (t, e) {
      return z.getTweensOf(t, e);
    },
    getProperty: function (t, e, i, r) {
      U(t) && (t = _t(t)[0]);
      var n = kt(t || {}).get,
        s = i ? br : vr;
      return (
        i === "native" && (i = ""),
        t &&
          (e
            ? s(((J[e] && J[e].get) || n)(t, e, i, r))
            : function (o, u, l) {
                return s(((J[o] && J[o].get) || n)(t, o, u, l));
              })
      );
    },
    quickSetter: function (t, e, i) {
      if (((t = _t(t)), t.length > 1)) {
        var r = t.map(function (f) {
            return H.quickSetter(f, e, i);
          }),
          n = r.length;
        return function (f) {
          for (var h = n; h--; ) r[h](f);
        };
      }
      t = t[0] || {};
      var s = J[e],
        o = kt(t),
        u = (o.harness && (o.harness.aliases || {})[e]) || e,
        l = s
          ? function (f) {
              var h = new s();
              (Zt._pt = 0),
                h.init(t, i ? f + i : f, Zt, 0, [t]),
                h.render(1, h),
                Zt._pt && Ai(1, Zt);
            }
          : o.set(t, u);
      return s
        ? l
        : function (f) {
            return l(t, u, i ? f + i : f, o, 1);
          };
    },
    quickTo: function (t, e, i) {
      var r,
        n = H.to(
          t,
          at(
            ((r = {}), (r[e] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
            i || {}
          )
        ),
        s = function (u, l, f) {
          return n.resetTo(e, u, l, f);
        };
      return (s.tween = n), s;
    },
    isTweening: function (t) {
      return z.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = Lt(t.ease, $t.ease)), sr($t, t || {});
    },
    config: function (t) {
      return sr(it, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        i = t.effect,
        r = t.plugins,
        n = t.defaults,
        s = t.extendTimeline;
      (r || "").split(",").forEach(function (o) {
        return (
          o && !J[o] && !ot[o] && ye(e + " effect requires " + o + " plugin.")
        );
      }),
        ($e[e] = function (o, u, l) {
          return i(_t(o), at(u || {}, n), l);
        }),
        s &&
          (W.prototype[e] = function (o, u, l) {
            return this.add($e[e](o, gt(u) ? u : (l = u) && {}, this), l);
          });
    },
    registerEase: function (t, e) {
      S[t] = Lt(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? Lt(t, e) : S;
    },
    getById: function (t) {
      return z.getById(t);
    },
    exportRoot: function (t, e) {
      t === void 0 && (t = {});
      var i = new W(t),
        r,
        n;
      for (
        i.smoothChildTiming = et(t.smoothChildTiming),
          z.remove(i),
          i._dp = 0,
          i._time = i._tTime = z._time,
          r = z._first;
        r;

      )
        (n = r._next),
          (e ||
            !(
              !r._dur &&
              r instanceof L &&
              r.vars.onComplete === r._targets[0]
            )) &&
            mt(i, r, r._start - r._delay),
          (r = n);
      return mt(z, i, 0), i;
    },
    context: function (t, e) {
      return t ? new Xr(t, e) : R;
    },
    matchMedia: function (t) {
      return new ss(t);
    },
    matchMediaRefresh: function () {
      return (
        Vt.forEach(function (t) {
          var e = t.conditions,
            i,
            r;
          for (r in e) e[r] && ((e[r] = !1), (i = 1));
          i && t.revert();
        }) || di()
      );
    },
    addEventListener: function (t, e) {
      var i = Ae[t] || (Ae[t] = []);
      ~i.indexOf(e) || i.push(e);
    },
    removeEventListener: function (t, e) {
      var i = Ae[t],
        r = i && i.indexOf(e);
      r >= 0 && i.splice(r, 1);
    },
    utils: {
      wrap: Nn,
      wrapYoyo: Ln,
      distribute: Mr,
      random: Dr,
      snap: kr,
      normalize: In,
      getUnit: G,
      clamp: An,
      splitColor: Fr,
      toArray: _t,
      selector: _i,
      mapRange: Ar,
      pipe: zn,
      unitize: Fn,
      interpolate: Vn,
      shuffle: Or,
    },
    install: mr,
    effects: $e,
    ticker: tt,
    updateRoot: W.updateRoot,
    plugins: J,
    globalTimeline: z,
    core: {
      PropTween: $,
      globals: gr,
      Tween: L,
      Timeline: W,
      Animation: be,
      getCache: kt,
      _removeLinkedListItem: Be,
      reverting: function () {
        return j;
      },
      context: function (t) {
        return t && R && (R.data.push(t), (t._ctx = R)), R;
      },
      suppressOverwrites: function (t) {
        return (pi = t);
      },
    },
  };
Z("to,from,fromTo,delayedCall,set,killTweensOf", function (a) {
  return (Ne[a] = L[a]);
});
tt.add(W.updateRoot);
Zt = Ne.to({}, { duration: 0 });
var os = function (t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
      i = i._next;
    return i;
  },
  as = function (t, e) {
    var i = t._targets,
      r,
      n,
      s;
    for (r in e)
      for (n = i.length; n--; )
        (s = t._ptLookup[n][r]),
          s &&
            (s = s.d) &&
            (s._pt && (s = os(s, r)),
            s && s.modifier && s.modifier(e[r], t, i[n], r));
  },
  ri = function (t, e) {
    return {
      name: t,
      headless: 1,
      rawVars: 1,
      init: function (r, n, s) {
        s._onInit = function (o) {
          var u, l;
          if (
            (U(n) &&
              ((u = {}),
              Z(n, function (f) {
                return (u[f] = 1);
              }),
              (n = u)),
            e)
          ) {
            u = {};
            for (l in n) u[l] = e(n[l]);
            n = u;
          }
          as(o, n);
        };
      },
    };
  },
  H =
    Ne.registerPlugin(
      {
        name: "attr",
        init: function (t, e, i, r, n) {
          var s, o, u;
          this.tween = i;
          for (s in e)
            (u = t.getAttribute(s) || ""),
              (o = this.add(
                t,
                "setAttribute",
                (u || 0) + "",
                e[s],
                r,
                n,
                0,
                0,
                s
              )),
              (o.op = s),
              (o.b = u),
              this._props.push(s);
        },
        render: function (t, e) {
          for (var i = e._pt; i; )
            j ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (t, e) {
          for (var i = e.length; i--; )
            this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
        },
      },
      ri("roundProps", hi),
      ri("modifiers"),
      ri("snap", kr)
    ) || Ne;
L.version = W.version = H.version = "3.13.0";
pr = 1;
mi() && ie();
var us = S.Power0,
  ls = S.Power1,
  fs = S.Power2,
  _s = S.Power3,
  hs = S.Power4,
  cs = S.Linear,
  ds = S.Quad,
  ps = S.Cubic,
  ms = S.Quart,
  gs = S.Quint,
  ys = S.Strong,
  xs = S.Elastic,
  vs = S.Back,
  bs = S.SteppedEase,
  Ts = S.Bounce,
  ws = S.Sine,
  Ps = S.Expo,
  Cs = S.Circ;
var Wr,
  At,
  se,
  Vi,
  jt,
  Ss,
  jr,
  Bi,
  Os = function () {
    return typeof window < "u";
  },
  Pt = {},
  Wt = 180 / Math.PI,
  oe = Math.PI / 180,
  ne = Math.atan2,
  Gr = 1e8,
  Ui = /([A-Z])/g,
  Ms = /(left|right|width|margin|padding|x)/i,
  ks = /[\s,\(]\S/,
  yt = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Fi = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
  },
  Ds = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
      e
    );
  },
  Es = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
      e
    );
  },
  As = function (t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
  },
  en = function (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  },
  rn = function (t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
  },
  Rs = function (t, e, i) {
    return (t.style[e] = i);
  },
  zs = function (t, e, i) {
    return t.style.setProperty(e, i);
  },
  Fs = function (t, e, i) {
    return (t._gsap[e] = i);
  },
  Is = function (t, e, i) {
    return (t._gsap.scaleX = t._gsap.scaleY = i);
  },
  Ns = function (t, e, i, r, n) {
    var s = t._gsap;
    (s.scaleX = s.scaleY = i), s.renderTransform(n, s);
  },
  Ls = function (t, e, i, r, n) {
    var s = t._gsap;
    (s[e] = i), s.renderTransform(n, s);
  },
  F = "transform",
  rt = F + "Origin",
  Vs = function a(t, e) {
    var i = this,
      r = this.target,
      n = r.style,
      s = r._gsap;
    if (t in Pt && n) {
      if (((this.tfm = this.tfm || {}), t !== "transform"))
        (t = yt[t] || t),
          ~t.indexOf(",")
            ? t.split(",").forEach(function (o) {
                return (i.tfm[o] = wt(r, o));
              })
            : (this.tfm[t] = s.x ? s[t] : wt(r, t)),
          t === rt && (this.tfm.zOrigin = s.zOrigin);
      else
        return yt.transform.split(",").forEach(function (o) {
          return a.call(i, o, e);
        });
      if (this.props.indexOf(F) >= 0) return;
      s.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(rt, e, "")),
        (t = F);
    }
    (n || e) && this.props.push(t, e, n[t]);
  },
  nn = function (t) {
    t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  },
  Bs = function () {
    var t = this.props,
      e = this.target,
      i = e.style,
      r = e._gsap,
      n,
      s;
    for (n = 0; n < t.length; n += 3)
      t[n + 1]
        ? t[n + 1] === 2
          ? e[t[n]](t[n + 2])
          : (e[t[n]] = t[n + 2])
        : t[n + 2]
        ? (i[t[n]] = t[n + 2])
        : i.removeProperty(
            t[n].substr(0, 2) === "--"
              ? t[n]
              : t[n].replace(Ui, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (s in this.tfm) r[s] = this.tfm[s];
      r.svg &&
        (r.renderTransform(),
        e.setAttribute("data-svg-origin", this.svgo || "")),
        (n = Bi()),
        (!n || !n.isStart) &&
          !i[F] &&
          (nn(i),
          r.zOrigin &&
            i[rt] &&
            ((i[rt] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1));
    }
  },
  sn = function (t, e) {
    var i = { target: t, props: [], revert: Bs, save: Vs };
    return (
      t._gsap || H.core.getCache(t),
      e &&
        t.style &&
        t.nodeType &&
        e.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  },
  on,
  Ii = function (t, e) {
    var i = At.createElementNS
      ? At.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : At.createElement(t);
    return i && i.style ? i : At.createElement(t);
  },
  ht = function a(t, e, i) {
    var r = getComputedStyle(t);
    return (
      r[e] ||
      r.getPropertyValue(e.replace(Ui, "-$1").toLowerCase()) ||
      r.getPropertyValue(e) ||
      (!i && a(t, ae(e) || e, 1)) ||
      ""
    );
  },
  Qr = "O,Moz,ms,Ms,Webkit".split(","),
  ae = function (t, e, i) {
    var r = e || jt,
      n = r.style,
      s = 5;
    if (t in n && !i) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      s-- && !(Qr[s] + t in n);

    );
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Qr[s] : "") + t;
  },
  Ni = function () {
    Os() &&
      window.document &&
      ((Wr = window),
      (At = Wr.document),
      (se = At.documentElement),
      (jt = Ii("div") || { style: {} }),
      (Ss = Ii("div")),
      (F = ae(F)),
      (rt = F + "Origin"),
      (jt.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (on = !!ae("perspective")),
      (Bi = H.core.reverting),
      (Vi = 1));
  },
  Hr = function (t) {
    var e = t.ownerSVGElement,
      i = Ii(
        "svg",
        (e && e.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      r = t.cloneNode(!0),
      n;
    (r.style.display = "block"), i.appendChild(r), se.appendChild(i);
    try {
      n = r.getBBox();
    } catch {}
    return i.removeChild(r), se.removeChild(i), n;
  },
  Kr = function (t, e) {
    for (var i = e.length; i--; )
      if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
  },
  an = function (t) {
    var e, i;
    try {
      e = t.getBBox();
    } catch {
      (e = Hr(t)), (i = 1);
    }
    return (
      (e && (e.width || e.height)) || i || (e = Hr(t)),
      e && !e.width && !e.x && !e.y
        ? {
            x: +Kr(t, ["x", "cx", "x1"]) || 0,
            y: +Kr(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : e
    );
  },
  un = function (t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && an(t));
  },
  Gt = function (t, e) {
    if (e) {
      var i = t.style,
        r;
      e in Pt && e !== rt && (e = F),
        i.removeProperty
          ? ((r = e.substr(0, 2)),
            (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
            i.removeProperty(
              r === "--" ? e : e.replace(Ui, "-$1").toLowerCase()
            ))
          : i.removeAttribute(e);
    }
  },
  Rt = function (t, e, i, r, n, s) {
    var o = new $(t._pt, e, i, 0, 1, s ? rn : en);
    return (t._pt = o), (o.b = r), (o.e = n), t._props.push(i), o;
  },
  Zr = { deg: 1, rad: 1, turn: 1 },
  Us = { grid: 1, flex: 1 },
  zt = function a(t, e, i, r) {
    var n = parseFloat(i) || 0,
      s = (i + "").trim().substr((n + "").length) || "px",
      o = jt.style,
      u = Ms.test(e),
      l = t.tagName.toLowerCase() === "svg",
      f = (l ? "client" : "offset") + (u ? "Width" : "Height"),
      h = 100,
      c = r === "px",
      d = r === "%",
      p,
      _,
      m,
      y;
    if (r === s || !n || Zr[r] || Zr[s]) return n;
    if (
      (s !== "px" && !c && (n = a(t, e, i, "px")),
      (y = t.getCTM && un(t)),
      (d || s === "%") && (Pt[e] || ~e.indexOf("adius")))
    )
      return (
        (p = y ? t.getBBox()[u ? "width" : "height"] : t[f]),
        N(d ? (n / p) * h : (n / 100) * p)
      );
    if (
      ((o[u ? "width" : "height"] = h + (c ? s : r)),
      (_ =
        (r !== "rem" && ~e.indexOf("adius")) ||
        (r === "em" && t.appendChild && !l)
          ? t
          : t.parentNode),
      y && (_ = (t.ownerSVGElement || {}).parentNode),
      (!_ || _ === At || !_.appendChild) && (_ = At.body),
      (m = _._gsap),
      m && d && m.width && u && m.time === tt.time && !m.uncache)
    )
      return N((n / m.width) * h);
    if (d && (e === "height" || e === "width")) {
      var x = t.style[e];
      (t.style[e] = h + r), (p = t[f]), x ? (t.style[e] = x) : Gt(t, e);
    } else
      (d || s === "%") &&
        !Us[ht(_, "display")] &&
        (o.position = ht(t, "position")),
        _ === t && (o.position = "static"),
        _.appendChild(jt),
        (p = jt[f]),
        _.removeChild(jt),
        (o.position = "absolute");
    return (
      u && d && ((m = kt(_)), (m.time = tt.time), (m.width = _[f])),
      N(c ? (p * n) / h : p && n ? (h / p) * n : 0)
    );
  },
  wt = function (t, e, i, r) {
    var n;
    return (
      Vi || Ni(),
      e in yt &&
        e !== "transform" &&
        ((e = yt[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
      Pt[e] && e !== "transform"
        ? ((n = Ce(t, r)),
          (n =
            e !== "transformOrigin"
              ? n[e]
              : n.svg
              ? n.origin
              : We(ht(t, rt)) + " " + n.zOrigin + "px"))
        : ((n = t.style[e]),
          (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
            (n =
              (Xe[e] && Xe[e](t, e, i)) ||
              ht(t, e) ||
              wi(t, e) ||
              (e === "opacity" ? 1 : 0))),
      i && !~(n + "").trim().indexOf(" ") ? zt(t, e, n, i) + i : n
    );
  },
  Ys = function (t, e, i, r) {
    if (!i || i === "none") {
      var n = ae(e, t, 1),
        s = n && ht(t, n, 1);
      s && s !== i
        ? ((e = n), (i = s))
        : e === "borderColor" && (i = ht(t, "borderTopColor"));
    }
    var o = new $(this._pt, t.style, e, 0, 1, Ei),
      u = 0,
      l = 0,
      f,
      h,
      c,
      d,
      p,
      _,
      m,
      y,
      x,
      v,
      b,
      g;
    if (
      ((o.b = i),
      (o.e = r),
      (i += ""),
      (r += ""),
      r.substring(0, 6) === "var(--" &&
        (r = ht(t, r.substring(4, r.indexOf(")")))),
      r === "auto" &&
        ((_ = t.style[e]),
        (t.style[e] = r),
        (r = ht(t, e) || r),
        _ ? (t.style[e] = _) : Gt(t, e)),
      (f = [i, r]),
      Ci(f),
      (i = f[0]),
      (r = f[1]),
      (c = i.match(Bt) || []),
      (g = r.match(Bt) || []),
      g.length)
    ) {
      for (; (h = Bt.exec(r)); )
        (m = h[0]),
          (x = r.substring(u, h.index)),
          p
            ? (p = (p + 1) % 5)
            : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (p = 1),
          m !== (_ = c[l++] || "") &&
            ((d = parseFloat(_) || 0),
            (b = _.substr((d + "").length)),
            m.charAt(1) === "=" && (m = Ut(d, m) + b),
            (y = parseFloat(m)),
            (v = m.substr((y + "").length)),
            (u = Bt.lastIndex - v.length),
            v ||
              ((v = v || it.units[e] || b),
              u === r.length && ((r += v), (o.e += v))),
            b !== v && (d = zt(t, e, _, v) || 0),
            (o._pt = {
              _next: o._pt,
              p: x || l === 1 ? x : ",",
              s: d,
              c: y - d,
              m: (p && p < 4) || e === "zIndex" ? Math.round : 0,
            }));
      o.c = u < r.length ? r.substring(u, r.length) : "";
    } else o.r = e === "display" && r === "none" ? rn : en;
    return yi.test(r) && (o.e = 0), (this._pt = o), o;
  },
  $r = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  qs = function (t) {
    var e = t.split(" "),
      i = e[0],
      r = e[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((t = i), (i = r), (r = t)),
      (e[0] = $r[i] || i),
      (e[1] = $r[r] || r),
      e.join(" ")
    );
  },
  Xs = function (t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var i = e.t,
        r = i.style,
        n = e.u,
        s = i._gsap,
        o,
        u,
        l;
      if (n === "all" || n === !0) (r.cssText = ""), (u = 1);
      else
        for (n = n.split(","), l = n.length; --l > -1; )
          (o = n[l]),
            Pt[o] && ((u = 1), (o = o === "transformOrigin" ? rt : F)),
            Gt(i, o);
      u &&
        (Gt(i, F),
        s &&
          (s.svg && i.removeAttribute("transform"),
          (r.scale = r.rotate = r.translate = "none"),
          Ce(i, 1),
          (s.uncache = 1),
          nn(r)));
    }
  },
  Xe = {
    clearProps: function (t, e, i, r, n) {
      if (n.data !== "isFromStart") {
        var s = (t._pt = new $(t._pt, e, i, 0, 0, Xs));
        return (s.u = r), (s.pr = -10), (s.tween = n), t._props.push(i), 1;
      }
    },
  },
  Pe = [1, 0, 0, 1, 0, 0],
  ln = {},
  fn = function (t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
  },
  Jr = function (t) {
    var e = ht(t, F);
    return fn(e) ? Pe : e.substr(7).match(gi).map(N);
  },
  Yi = function (t, e) {
    var i = t._gsap || kt(t),
      r = t.style,
      n = Jr(t),
      s,
      o,
      u,
      l;
    return i.svg && t.getAttribute("transform")
      ? ((u = t.transform.baseVal.consolidate().matrix),
        (n = [u.a, u.b, u.c, u.d, u.e, u.f]),
        n.join(",") === "1,0,0,1,0,0" ? Pe : n)
      : (n === Pe &&
          !t.offsetParent &&
          t !== se &&
          !i.svg &&
          ((u = r.display),
          (r.display = "block"),
          (s = t.parentNode),
          (!s || (!t.offsetParent && !t.getBoundingClientRect().width)) &&
            ((l = 1), (o = t.nextElementSibling), se.appendChild(t)),
          (n = Jr(t)),
          u ? (r.display = u) : Gt(t, "display"),
          l &&
            (o
              ? s.insertBefore(t, o)
              : s
              ? s.appendChild(t)
              : se.removeChild(t))),
        e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  Li = function (t, e, i, r, n, s) {
    var o = t._gsap,
      u = n || Yi(t, !0),
      l = o.xOrigin || 0,
      f = o.yOrigin || 0,
      h = o.xOffset || 0,
      c = o.yOffset || 0,
      d = u[0],
      p = u[1],
      _ = u[2],
      m = u[3],
      y = u[4],
      x = u[5],
      v = e.split(" "),
      b = parseFloat(v[0]) || 0,
      g = parseFloat(v[1]) || 0,
      w,
      P,
      C,
      T;
    i
      ? u !== Pe &&
        (P = d * m - p * _) &&
        ((C = b * (m / P) + g * (-_ / P) + (_ * x - m * y) / P),
        (T = b * (-p / P) + g * (d / P) - (d * x - p * y) / P),
        (b = C),
        (g = T))
      : ((w = an(t)),
        (b = w.x + (~v[0].indexOf("%") ? (b / 100) * w.width : b)),
        (g = w.y + (~(v[1] || v[0]).indexOf("%") ? (g / 100) * w.height : g))),
      r || (r !== !1 && o.smooth)
        ? ((y = b - l),
          (x = g - f),
          (o.xOffset = h + (y * d + x * _) - y),
          (o.yOffset = c + (y * p + x * m) - x))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = b),
      (o.yOrigin = g),
      (o.smooth = !!r),
      (o.origin = e),
      (o.originIsAbsolute = !!i),
      (t.style[rt] = "0px 0px"),
      s &&
        (Rt(s, o, "xOrigin", l, b),
        Rt(s, o, "yOrigin", f, g),
        Rt(s, o, "xOffset", h, o.xOffset),
        Rt(s, o, "yOffset", c, o.yOffset)),
      t.setAttribute("data-svg-origin", b + " " + g);
  },
  Ce = function (t, e) {
    var i = t._gsap || new Si(t);
    if ("x" in i && !e && !i.uncache) return i;
    var r = t.style,
      n = i.scaleX < 0,
      s = "px",
      o = "deg",
      u = getComputedStyle(t),
      l = ht(t, rt) || "0",
      f,
      h,
      c,
      d,
      p,
      _,
      m,
      y,
      x,
      v,
      b,
      g,
      w,
      P,
      C,
      T,
      O,
      A,
      D,
      E,
      X,
      Y,
      V,
      q,
      ct,
      Se,
      le,
      fe,
      Ft,
      ji,
      xt,
      It;
    return (
      (f = h = c = _ = m = y = x = v = b = 0),
      (d = p = 1),
      (i.svg = !!(t.getCTM && un(t))),
      u.translate &&
        ((u.translate !== "none" ||
          u.scale !== "none" ||
          u.rotate !== "none") &&
          (r[F] =
            (u.translate !== "none"
              ? "translate3d(" +
                (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") +
            (u.scale !== "none"
              ? "scale(" + u.scale.split(" ").join(",") + ") "
              : "") +
            (u[F] !== "none" ? u[F] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (P = Yi(t, i.svg)),
      i.svg &&
        (i.uncache
          ? ((ct = t.getBBox()),
            (l = i.xOrigin - ct.x + "px " + (i.yOrigin - ct.y) + "px"),
            (q = ""))
          : (q = !e && t.getAttribute("data-svg-origin")),
        Li(t, q || l, !!q || i.originIsAbsolute, i.smooth !== !1, P)),
      (g = i.xOrigin || 0),
      (w = i.yOrigin || 0),
      P !== Pe &&
        ((A = P[0]),
        (D = P[1]),
        (E = P[2]),
        (X = P[3]),
        (f = Y = P[4]),
        (h = V = P[5]),
        P.length === 6
          ? ((d = Math.sqrt(A * A + D * D)),
            (p = Math.sqrt(X * X + E * E)),
            (_ = A || D ? ne(D, A) * Wt : 0),
            (x = E || X ? ne(E, X) * Wt + _ : 0),
            x && (p *= Math.abs(Math.cos(x * oe))),
            i.svg && ((f -= g - (g * A + w * E)), (h -= w - (g * D + w * X))))
          : ((It = P[6]),
            (ji = P[7]),
            (le = P[8]),
            (fe = P[9]),
            (Ft = P[10]),
            (xt = P[11]),
            (f = P[12]),
            (h = P[13]),
            (c = P[14]),
            (C = ne(It, Ft)),
            (m = C * Wt),
            C &&
              ((T = Math.cos(-C)),
              (O = Math.sin(-C)),
              (q = Y * T + le * O),
              (ct = V * T + fe * O),
              (Se = It * T + Ft * O),
              (le = Y * -O + le * T),
              (fe = V * -O + fe * T),
              (Ft = It * -O + Ft * T),
              (xt = ji * -O + xt * T),
              (Y = q),
              (V = ct),
              (It = Se)),
            (C = ne(-E, Ft)),
            (y = C * Wt),
            C &&
              ((T = Math.cos(-C)),
              (O = Math.sin(-C)),
              (q = A * T - le * O),
              (ct = D * T - fe * O),
              (Se = E * T - Ft * O),
              (xt = X * O + xt * T),
              (A = q),
              (D = ct),
              (E = Se)),
            (C = ne(D, A)),
            (_ = C * Wt),
            C &&
              ((T = Math.cos(C)),
              (O = Math.sin(C)),
              (q = A * T + D * O),
              (ct = Y * T + V * O),
              (D = D * T - A * O),
              (V = V * T - Y * O),
              (A = q),
              (Y = ct)),
            m &&
              Math.abs(m) + Math.abs(_) > 359.9 &&
              ((m = _ = 0), (y = 180 - y)),
            (d = N(Math.sqrt(A * A + D * D + E * E))),
            (p = N(Math.sqrt(V * V + It * It))),
            (C = ne(Y, V)),
            (x = Math.abs(C) > 2e-4 ? C * Wt : 0),
            (b = xt ? 1 / (xt < 0 ? -xt : xt) : 0)),
        i.svg &&
          ((q = t.getAttribute("transform")),
          (i.forceCSS = t.setAttribute("transform", "") || !fn(ht(t, F))),
          q && t.setAttribute("transform", q))),
      Math.abs(x) > 90 &&
        Math.abs(x) < 270 &&
        (n
          ? ((d *= -1), (x += _ <= 0 ? 180 : -180), (_ += _ <= 0 ? 180 : -180))
          : ((p *= -1), (x += x <= 0 ? 180 : -180))),
      (e = e || i.uncache),
      (i.x =
        f -
        ((i.xPercent =
          f &&
          ((!e && i.xPercent) ||
            (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0)))
          ? (t.offsetWidth * i.xPercent) / 100
          : 0) +
        s),
      (i.y =
        h -
        ((i.yPercent =
          h &&
          ((!e && i.yPercent) ||
            (Math.round(t.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
          ? (t.offsetHeight * i.yPercent) / 100
          : 0) +
        s),
      (i.z = c + s),
      (i.scaleX = N(d)),
      (i.scaleY = N(p)),
      (i.rotation = N(_) + o),
      (i.rotationX = N(m) + o),
      (i.rotationY = N(y) + o),
      (i.skewX = x + o),
      (i.skewY = v + o),
      (i.transformPerspective = b + s),
      (i.zOrigin = parseFloat(l.split(" ")[2]) || (!e && i.zOrigin) || 0) &&
        (r[rt] = We(l)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = it.force3D),
      (i.renderTransform = i.svg ? js : on ? _n : Ws),
      (i.uncache = 0),
      i
    );
  },
  We = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  zi = function (t, e, i) {
    var r = G(e);
    return N(parseFloat(e) + parseFloat(zt(t, "x", i + "px", r))) + r;
  },
  Ws = function (t, e) {
    (e.z = "0px"),
      (e.rotationY = e.rotationX = "0deg"),
      (e.force3D = 0),
      _n(t, e);
  },
  qt = "0deg",
  we = "0px",
  Xt = ") ",
  _n = function (t, e) {
    var i = e || this,
      r = i.xPercent,
      n = i.yPercent,
      s = i.x,
      o = i.y,
      u = i.z,
      l = i.rotation,
      f = i.rotationY,
      h = i.rotationX,
      c = i.skewX,
      d = i.skewY,
      p = i.scaleX,
      _ = i.scaleY,
      m = i.transformPerspective,
      y = i.force3D,
      x = i.target,
      v = i.zOrigin,
      b = "",
      g = (y === "auto" && t && t !== 1) || y === !0;
    if (v && (h !== qt || f !== qt)) {
      var w = parseFloat(f) * oe,
        P = Math.sin(w),
        C = Math.cos(w),
        T;
      (w = parseFloat(h) * oe),
        (T = Math.cos(w)),
        (s = zi(x, s, P * T * -v)),
        (o = zi(x, o, -Math.sin(w) * -v)),
        (u = zi(x, u, C * T * -v + v));
    }
    m !== we && (b += "perspective(" + m + Xt),
      (r || n) && (b += "translate(" + r + "%, " + n + "%) "),
      (g || s !== we || o !== we || u !== we) &&
        (b +=
          u !== we || g
            ? "translate3d(" + s + ", " + o + ", " + u + ") "
            : "translate(" + s + ", " + o + Xt),
      l !== qt && (b += "rotate(" + l + Xt),
      f !== qt && (b += "rotateY(" + f + Xt),
      h !== qt && (b += "rotateX(" + h + Xt),
      (c !== qt || d !== qt) && (b += "skew(" + c + ", " + d + Xt),
      (p !== 1 || _ !== 1) && (b += "scale(" + p + ", " + _ + Xt),
      (x.style[F] = b || "translate(0, 0)");
  },
  js = function (t, e) {
    var i = e || this,
      r = i.xPercent,
      n = i.yPercent,
      s = i.x,
      o = i.y,
      u = i.rotation,
      l = i.skewX,
      f = i.skewY,
      h = i.scaleX,
      c = i.scaleY,
      d = i.target,
      p = i.xOrigin,
      _ = i.yOrigin,
      m = i.xOffset,
      y = i.yOffset,
      x = i.forceCSS,
      v = parseFloat(s),
      b = parseFloat(o),
      g,
      w,
      P,
      C,
      T;
    (u = parseFloat(u)),
      (l = parseFloat(l)),
      (f = parseFloat(f)),
      f && ((f = parseFloat(f)), (l += f), (u += f)),
      u || l
        ? ((u *= oe),
          (l *= oe),
          (g = Math.cos(u) * h),
          (w = Math.sin(u) * h),
          (P = Math.sin(u - l) * -c),
          (C = Math.cos(u - l) * c),
          l &&
            ((f *= oe),
            (T = Math.tan(l - f)),
            (T = Math.sqrt(1 + T * T)),
            (P *= T),
            (C *= T),
            f &&
              ((T = Math.tan(f)),
              (T = Math.sqrt(1 + T * T)),
              (g *= T),
              (w *= T))),
          (g = N(g)),
          (w = N(w)),
          (P = N(P)),
          (C = N(C)))
        : ((g = h), (C = c), (w = P = 0)),
      ((v && !~(s + "").indexOf("px")) || (b && !~(o + "").indexOf("px"))) &&
        ((v = zt(d, "x", s, "px")), (b = zt(d, "y", o, "px"))),
      (p || _ || m || y) &&
        ((v = N(v + p - (p * g + _ * P) + m)),
        (b = N(b + _ - (p * w + _ * C) + y))),
      (r || n) &&
        ((T = d.getBBox()),
        (v = N(v + (r / 100) * T.width)),
        (b = N(b + (n / 100) * T.height))),
      (T =
        "matrix(" + g + "," + w + "," + P + "," + C + "," + v + "," + b + ")"),
      d.setAttribute("transform", T),
      x && (d.style[F] = T);
  },
  Gs = function (t, e, i, r, n) {
    var s = 360,
      o = U(n),
      u = parseFloat(n) * (o && ~n.indexOf("rad") ? Wt : 1),
      l = u - r,
      f = r + l + "deg",
      h,
      c;
    return (
      o &&
        ((h = n.split("_")[1]),
        h === "short" && ((l %= s), l !== l % (s / 2) && (l += l < 0 ? s : -s)),
        h === "cw" && l < 0
          ? (l = ((l + s * Gr) % s) - ~~(l / s) * s)
          : h === "ccw" && l > 0 && (l = ((l - s * Gr) % s) - ~~(l / s) * s)),
      (t._pt = c = new $(t._pt, e, i, r, l, Ds)),
      (c.e = f),
      (c.u = "deg"),
      t._props.push(i),
      c
    );
  },
  tn = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  Qs = function (t, e, i) {
    var r = tn({}, i._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      s = i.style,
      o,
      u,
      l,
      f,
      h,
      c,
      d,
      p;
    r.svg
      ? ((l = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (s[F] = e),
        (o = Ce(i, 1)),
        Gt(i, F),
        i.setAttribute("transform", l))
      : ((l = getComputedStyle(i)[F]), (s[F] = e), (o = Ce(i, 1)), (s[F] = l));
    for (u in Pt)
      (l = r[u]),
        (f = o[u]),
        l !== f &&
          n.indexOf(u) < 0 &&
          ((d = G(l)),
          (p = G(f)),
          (h = d !== p ? zt(i, u, l, p) : parseFloat(l)),
          (c = parseFloat(f)),
          (t._pt = new $(t._pt, o, u, h, c - h, Fi)),
          (t._pt.u = p || 0),
          t._props.push(u));
    tn(o, r);
  };
Z("padding,margin,Width,Radius", function (a, t) {
  var e = "Top",
    i = "Right",
    r = "Bottom",
    n = "Left",
    s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function (o) {
      return t < 2 ? a + o : "border" + o + a;
    });
  Xe[t > 1 ? "border" + a : a] = function (o, u, l, f, h) {
    var c, d;
    if (arguments.length < 4)
      return (
        (c = s.map(function (p) {
          return wt(o, p, l);
        })),
        (d = c.join(" ")),
        d.split(c[0]).length === 5 ? c[0] : d
      );
    (c = (f + "").split(" ")),
      (d = {}),
      s.forEach(function (p, _) {
        return (d[p] = c[_] = c[_] || c[((_ - 1) / 2) | 0]);
      }),
      o.init(u, d, h);
  };
});
var qi = {
  name: "css",
  register: Ni,
  targetTest: function (t) {
    return t.style && t.nodeType;
  },
  init: function (t, e, i, r, n) {
    var s = this._props,
      o = t.style,
      u = i.vars.startAt,
      l,
      f,
      h,
      c,
      d,
      p,
      _,
      m,
      y,
      x,
      v,
      b,
      g,
      w,
      P,
      C;
    Vi || Ni(),
      (this.styles = this.styles || sn(t)),
      (C = this.styles.props),
      (this.tween = i);
    for (_ in e)
      if (_ !== "autoRound" && ((f = e[_]), !(J[_] && Mi(_, e, i, r, t, n)))) {
        if (
          ((d = typeof f),
          (p = Xe[_]),
          d === "function" && ((f = f.call(i, r, t, n)), (d = typeof f)),
          d === "string" && ~f.indexOf("random(") && (f = re(f)),
          p)
        )
          p(this, t, _, f, i) && (P = 1);
        else if (_.substr(0, 2) === "--")
          (l = (getComputedStyle(t).getPropertyValue(_) + "").trim()),
            (f += ""),
            (bt.lastIndex = 0),
            bt.test(l) || ((m = G(l)), (y = G(f))),
            y ? m !== y && (l = zt(t, _, l, y) + y) : m && (f += m),
            this.add(o, "setProperty", l, f, r, n, 0, 0, _),
            s.push(_),
            C.push(_, 0, o[_]);
        else if (d !== "undefined") {
          if (
            (u && _ in u
              ? ((l = typeof u[_] == "function" ? u[_].call(i, r, t, n) : u[_]),
                U(l) && ~l.indexOf("random(") && (l = re(l)),
                G(l + "") ||
                  l === "auto" ||
                  (l += it.units[_] || G(wt(t, _)) || ""),
                (l + "").charAt(1) === "=" && (l = wt(t, _)))
              : (l = wt(t, _)),
            (c = parseFloat(l)),
            (x = d === "string" && f.charAt(1) === "=" && f.substr(0, 2)),
            x && (f = f.substr(2)),
            (h = parseFloat(f)),
            _ in yt &&
              (_ === "autoAlpha" &&
                (c === 1 && wt(t, "visibility") === "hidden" && h && (c = 0),
                C.push("visibility", 0, o.visibility),
                Rt(
                  this,
                  o,
                  "visibility",
                  c ? "inherit" : "hidden",
                  h ? "inherit" : "hidden",
                  !h
                )),
              _ !== "scale" &&
                _ !== "transform" &&
                ((_ = yt[_]), ~_.indexOf(",") && (_ = _.split(",")[0]))),
            (v = _ in Pt),
            v)
          ) {
            if (
              (this.styles.save(_),
              d === "string" &&
                f.substring(0, 6) === "var(--" &&
                ((f = ht(t, f.substring(4, f.indexOf(")")))),
                (h = parseFloat(f))),
              b ||
                ((g = t._gsap),
                (g.renderTransform && !e.parseTransform) ||
                  Ce(t, e.parseTransform),
                (w = e.smoothOrigin !== !1 && g.smooth),
                (b = this._pt =
                  new $(this._pt, o, F, 0, 1, g.renderTransform, g, 0, -1)),
                (b.dep = 1)),
              _ === "scale")
            )
              (this._pt = new $(
                this._pt,
                g,
                "scaleY",
                g.scaleY,
                (x ? Ut(g.scaleY, x + h) : h) - g.scaleY || 0,
                Fi
              )),
                (this._pt.u = 0),
                s.push("scaleY", _),
                (_ += "X");
            else if (_ === "transformOrigin") {
              C.push(rt, 0, o[rt]),
                (f = qs(f)),
                g.svg
                  ? Li(t, f, 0, w, 0, this)
                  : ((y = parseFloat(f.split(" ")[2]) || 0),
                    y !== g.zOrigin && Rt(this, g, "zOrigin", g.zOrigin, y),
                    Rt(this, o, _, We(l), We(f)));
              continue;
            } else if (_ === "svgOrigin") {
              Li(t, f, 1, w, 0, this);
              continue;
            } else if (_ in ln) {
              Gs(this, g, _, c, x ? Ut(c, x + f) : f);
              continue;
            } else if (_ === "smoothOrigin") {
              Rt(this, g, "smooth", g.smooth, f);
              continue;
            } else if (_ === "force3D") {
              g[_] = f;
              continue;
            } else if (_ === "transform") {
              Qs(this, f, t);
              continue;
            }
          } else _ in o || (_ = ae(_) || _);
          if (v || ((h || h === 0) && (c || c === 0) && !ks.test(f) && _ in o))
            (m = (l + "").substr((c + "").length)),
              h || (h = 0),
              (y = G(f) || (_ in it.units ? it.units[_] : m)),
              m !== y && (c = zt(t, _, l, y)),
              (this._pt = new $(
                this._pt,
                v ? g : o,
                _,
                c,
                (x ? Ut(c, x + h) : h) - c,
                !v && (y === "px" || _ === "zIndex") && e.autoRound !== !1
                  ? As
                  : Fi
              )),
              (this._pt.u = y || 0),
              m !== y && y !== "%" && ((this._pt.b = l), (this._pt.r = Es));
          else if (_ in o) Ys.call(this, t, _, l, x ? x + f : f);
          else if (_ in t) this.add(t, _, l || t[_], x ? x + f : f, r, n);
          else if (_ !== "parseTransform") {
            Ve(_, f);
            continue;
          }
          v ||
            (_ in o
              ? C.push(_, 0, o[_])
              : typeof t[_] == "function"
              ? C.push(_, 2, t[_]())
              : C.push(_, 1, l || t[_])),
            s.push(_);
        }
      }
    P && Ri(this);
  },
  render: function (t, e) {
    if (e.tween._time || !Bi())
      for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
    else e.styles.revert();
  },
  get: wt,
  aliases: yt,
  getSetter: function (t, e, i) {
    var r = yt[e];
    return (
      r && r.indexOf(",") < 0 && (e = r),
      e in Pt && e !== rt && (t._gsap.x || wt(t, "x"))
        ? i && jr === i
          ? e === "scale"
            ? Is
            : Fs
          : (jr = i || {}) && (e === "scale" ? Ns : Ls)
        : t.style && !Le(t.style[e])
        ? Rs
        : ~e.indexOf("-")
        ? zs
        : qe(t, e)
    );
  },
  core: { _removeProperty: Gt, _getMatrix: Yi },
};
H.utils.checkPrefix = ae;
H.core.getStyleSaver = sn;
(function (a, t, e, i) {
  var r = Z(a + "," + t + "," + e, function (n) {
    Pt[n] = 1;
  });
  Z(t, function (n) {
    (it.units[n] = "deg"), (ln[n] = 1);
  }),
    (yt[r[13]] = a + "," + t),
    Z(i, function (n) {
      var s = n.split(":");
      yt[s[1]] = r[s[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Z(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (a) {
    it.units[a] = "px";
  }
);
H.registerPlugin(qi);
var Xi = H.registerPlugin(qi) || H,
  ao = Xi.core.Tween;
var ue = class a {
  music = ut(!1);
  toggle() {
    this.music.set(!this.music());
  }
  get() {
    return this.music;
  }
  static ɵfac = function (e) {
    return new (e || a)();
  };
  static ɵprov = Gi({ token: a, factory: a.ɵfac, providedIn: "root" });
};
function Hs(a, t) {
  a & 1 && (nt(0, "div", 4), dt(1, "lord-icon", 5), K());
}
var je = class a {
  constructor(t) {
    this.storeNombres = t;
    Kt(
      () => {
        this.startNombres.set(this.storeNombres.get()());
      },
      { allowSignalWrites: !0 }
    );
  }
  storeMusicPortadaAnimadaToogle = ut(!1);
  portadaUrl = "";
  ngAfterViewInit() {
    window.matchMedia("(max-width: 600px)").matches
      ? (this.portadaUrl = "assets/images/Timeless/image1.jpg")
      : (this.portadaUrl = "assets/images/Timeless/image1.jpg"),
      setTimeout(() => {
        this.storeMusicPortadaAnimadaToogle.set(!0);
      }, 1e3),
      Kt(() => {
        this.storeMusicPortadaAnimadaToogle()
          ? setTimeout(() => {
              this.mostrarIcono.set(!1);
            }, 6100)
          : this.mostrarIcono.set(!0);
      });
  }
  startNombres = ut(!1);
  mostrarIcono = ut(!0);
  static ɵfac = function (e) {
    return new (e || a)(Qt(ue));
  };
  static ɵcmp = Ht({
    type: a,
    selectors: [["P_5_Timeless"]],
    decls: 4,
    vars: 1,
    consts: [
      [1, "relative", "h-[70vh]", "w-full", "overflow-hidden"],
      [1, "absolute", "inset-0", "flex", "items-center", "justify-center"],
      [
        "ngSrc",
        "assets/images/Timeless/image6.jpg",
        "priority",
        "",
        "srcset",
        `
              assets/images/Timeless/image6.jpg  600w,
              assets/images/Timeless/image6.jpg 1200w
            `,
        "fill",
        "",
        1,
        "w-full",
        "h-full",
        "object-cover",
        "shadow-2xl",
      ],
      ["class", "absolute bottom-48 left-0 z-30", 4, "ngIf"],
      [1, "absolute", "bottom-48", "left-0", "z-30"],
      [
        "src",
        "https://cdn.lordicon.com/ougeaphd.json",
        "trigger",
        "loop",
        "delay",
        "1000",
        "stroke",
        "light",
        "colors",
        "primary:#ffffff,secondary:#ffffff",
        1,
        "rotate-90",
        2,
        "width",
        "100px",
        "height",
        "150px",
      ],
    ],
    template: function (e, i) {
      e & 1 &&
        (nt(0, "div", 0)(1, "div", 1),
        dt(2, "img", 2),
        K(),
        Oe(3, Hs, 2, 0, "div", 3),
        K()),
        e & 2 && (Ct(3), St("ngIf", i.mostrarIcono()));
    },
    dependencies: [er, tr, Ji],
    styles: [
      ".fade-left-animation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeLeft 2.5s ease-out forwards}@keyframes _ngcontent-%COMP%_fadeLeft{0%{opacity:0;transform:translate(-100px)}to{opacity:1;transform:translate(0)}}.nombre2[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_animacion2 3.5s alternate ease-in}@keyframes _ngcontent-%COMP%_animacion2{0%{-webkit-transform:scale(.4);transform:scale(.4);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}",
    ],
  });
};
var dn = (a) => ({ "fade-left-animation": a });
function Ks(a, t) {
  a & 1 && (nt(0, "div", 5), dt(1, "lord-icon", 6), K());
}
var Ge = class a {
  constructor(t) {
    this.storeNombres = t;
    Kt(
      () => {
        this.startNombres.set(this.storeNombres.get()());
      },
      { allowSignalWrites: !0 }
    );
  }
  storeMusicPortadaAnimadaToogle = ut(!1);
  portadaUrl = "";
  startNombres = ut(!1);
  mostrarIcono = ut(!0);
  ngAfterViewInit() {
    window.matchMedia("(max-width: 600px)").matches
      ? (this.portadaUrl = "assets/images/Timeless/image6.jpg")
      : (this.portadaUrl = "assets/images/Timeless/image6.jpg"),
      setTimeout(() => {
        this.storeMusicPortadaAnimadaToogle.set(!0);
      }, 1e3),
      Kt(() => {
        this.storeMusicPortadaAnimadaToogle()
          ? setTimeout(() => {
              this.mostrarIcono.set(!1);
            }, 6100)
          : this.mostrarIcono.set(!0);
      });
  }
  static ɵfac = function (e) {
    return new (e || a)(Qt(ue));
  };
  static ɵcmp = Ht({
    type: a,
    selectors: [["FP_5_Timeless"]],
    decls: 8,
    vars: 7,
    consts: [
      [1, "relative", "h-[20vh]", "w-full", "overflow-hidden"],
      [
        "id",
        "Inicio",
        1,
        "absolute",
        "inset-0",
        "flex",
        "items-center",
        "justify-center",
        "z-10",
      ],
      [
        1,
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "h-full",
        "tracking-widest",
        "space-y-4",
        "text-primary-100",
      ],
      [1, "Great Vibes", "text-center", 3, "ngClass"],
      ["class", "absolute bottom-48 left-0 z-30", 4, "ngIf"],
      [1, "absolute", "bottom-48", "left-0", "z-30"],
      [
        "src",
        "https://cdn.lordicon.com/ougeaphd.json",
        "trigger",
        "loop",
        "delay",
        "1000",
        "stroke",
        "light",
        "colors",
        "primary:#ffffff,secondary:#ffffff",
        1,
        "rotate-90",
        2,
        "width",
        "100px",
        "height",
        "150px",
      ],
    ],
    template: function (e, i) {
      e & 1 &&
        (nt(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3),
        _e(4, " Diana & Carlos "),
        K(),
        nt(5, "h2", 3),
        _e(6, " 14\xB703\xB72026 "),
        K()()(),
        Oe(7, Ks, 2, 0, "div", 4),
        K()),
        e & 2 &&
          (Ct(3),
          St("ngClass", he(3, dn, i.startNombres())),
          Ct(2),
          St("ngClass", he(5, dn, i.startNombres())),
          Ct(2),
          St("ngIf", i.mostrarIcono()));
    },
    dependencies: [Me],
    styles: [
      ".fade-left-animation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeLeft 2.5s ease-out forwards}@keyframes _ngcontent-%COMP%_fadeLeft{0%{opacity:0;transform:translate(-100px)}to{opacity:1;transform:translate(0)}}.nombre2[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_animacion2 3.5s alternate ease-in}@keyframes _ngcontent-%COMP%_animacion2{0%{-webkit-transform:scale(.4);transform:scale(.4);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}",
    ],
  });
};
var Zs = ["solapa"],
  $s = ["portadaContainer"],
  Js = (a) => ({ "opacity-100": a }),
  pn = class a {
    constructor(t) {
      this.storeMusicToggle = t;
    }
    solapa;
    portadaContainer;
    menuVisibilityService = Qi(rr);
    toolTip = ut(!1);
    ngAfterViewInit() {
      (document.body.style.overflow = "hidden"),
        setTimeout(() => {
          this.toolTip.set(!0);
        }, 2e3);
    }
    showButtons() {
      let t = document.querySelector(".music-button");
      t && t.classList.add("show");
      let e = document.querySelector(".menu-wrap");
      e && e.classList.add("show");
    }
    abrirSobre() {
      this.storeMusicToggle.toggle();
      let t = Xi.timeline();
      t.to(this.solapa.nativeElement, {
        rotateX: -180,
        transformOrigin: "top center",
        duration: 1.2,
        ease: "power2.inOut",
        zIndex: 10,
      }),
        t.set(this.portadaContainer.nativeElement, { pointerEvents: "auto" }),
        t.to(this.portadaContainer.nativeElement, {
          y: -200,
          duration: 0.8,
          ease: "power2.out",
        }),
        t.to(this.portadaContainer.nativeElement, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          zIndex: 20,
        }),
        t.to(this.portadaContainer.nativeElement, {
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          onComplete: () => {
            (document.body.style.overflow = "auto"),
              this.showButtons(),
              this.menuVisibilityService.showMenu();
          },
        });
    }
    static ɵfac = function (e) {
      return new (e || a)(Qt(ir));
    };
    static ɵcmp = Ht({
      type: a,
      selectors: [["SCM_7_PortadaSobre2"]],
      viewQuery: function (e, i) {
        if ((e & 1 && (Qe(Zs, 5), Qe($s, 5)), e & 2)) {
          let r;
          He((r = Ke())) && (i.solapa = r.first),
            He((r = Ke())) && (i.portadaContainer = r.first);
        }
      },
      decls: 20,
      vars: 3,
      consts: [
        ["solapa", ""],
        ["portadaContainer", ""],
        [
          "id",
          "Home",
          1,
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
          "h-screen",
          "overflow-hidden",
          "box-border",
        ],
        [1, "relative"],
        [1, "triangulo-superior", "text-[#eae3d5]", "relative"],
        [1, "sello"],
        [
          "src",
          "assets/images/SelloLisa.png",
          "alt",
          "Sello de invitaci\xF3n",
          1,
          "w-[100px]",
          "h-[100px]",
          "sm:w-[200px]",
          "sm:h-[200px]",
          "object-contain",
          "drop-shadow-lg",
          "cursor-pointer",
          "selloAnimation",
          3,
          "click",
        ],
        [
          1,
          "absolute",
          "-top-10",
          "text-center",
          "justify-center",
          "z-10",
          "inset-x-0",
          "opacity-0",
          "duration-400",
          "ease-in",
          "transition-all",
          3,
          "ngClass",
        ],
        [1, "bg-primary-500", "rounded-xl", "px-2", "py-0.5"],
        [1, "text-primary-100", "text-sm"],
        [1, "arrow-container", "text-primary-500"],
        [
          1,
          "px-[180px]",
          "py-[130px]",
          "sm:px-[400px]",
          "sm:py-[231px]",
          "absolute",
          "top-1/2",
          "left-1/2",
          "-translate-x-1/2",
          "-translate-y-1/2",
          "z-10",
          "bg-[#eae3d5]",
        ],
        [1, "triangulo-inferior", "text-[#eae3d5]"],
        [
          1,
          "triangulo-izquierdo",
          "absolute",
          "top-0",
          "left-0",
          "text-[#eae3d5]",
        ],
        [
          1,
          "triangulo-derecho",
          "absolute",
          "top-0",
          "right-0",
          "text-[#eae3d5]",
        ],
        [
          1,
          "absolute",
          "top-0",
          "left-0",
          "w-full",
          "h-full",
          "opacity-100",
          "scale-[0.2]",
          "pointer-events-none",
          "z-10",
        ],
        [1, "body-card"],
      ],
      template: function (e, i) {
        if (e & 1) {
          let r = Zi();
          nt(0, "div", 2)(1, "div", 3),
            dt(2, "div", 4, 0),
            nt(4, "div", 5)(5, "img", 6),
            $i("click", function () {
              return Hi(r), Ki(i.abrirSobre());
            }),
            K(),
            nt(6, "div", 7)(7, "div", 8)(8, "h5", 9),
            _e(9, "Click Aqu\xED"),
            K()(),
            dt(10, "div", 10),
            K()(),
            dt(11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "div", 14),
            K()(),
            nt(15, "div", 15, 1),
            dt(17, "P_5_Timeless"),
            nt(18, "div", 16),
            dt(19, "FP_5_Timeless"),
            K()();
        }
        e & 2 && (Ct(6), St("ngClass", he(1, Js, i.toolTip())));
      },
      dependencies: [je, Ge, Me],
      styles: [
        ".triangulo-superior[_ngcontent-%COMP%]{border-left:180px solid transparent;border-right:180px solid transparent;border-top:150px solid;transform-origin:top center;filter:drop-shadow(2px 2px 4px rgba(0,0,0,.3));position:relative;z-index:14}.sello[_ngcontent-%COMP%]{position:absolute;z-index:15;top:50%;left:50%;transform:translate(-50%,-50%)}.selloAnimation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_crescendo 1.4s alternate infinite ease-in}.arrow-container[_ngcontent-%COMP%]{width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px solid currentColor;margin:0 auto;position:relative;top:0}@keyframes _ngcontent-%COMP%_crescendo{0%{transform:scale(1)}to{transform:scale(1.4)}}.triangulo-inferior[_ngcontent-%COMP%]{border-left:180px solid transparent;border-right:180px solid transparent;border-bottom:150px solid;margin-top:-35px;filter:drop-shadow(2px 2px 4px rgba(0,0,0,.3));position:relative;z-index:13}.triangulo-izquierdo[_ngcontent-%COMP%]{border-top:135px solid transparent;border-bottom:130px solid transparent;border-left:170px solid;z-index:12;filter:drop-shadow(-2px 0px 4px rgba(0,0,0,.5));box-shadow:inset 2px 0 2px #0000004d}.triangulo-derecho[_ngcontent-%COMP%]{border-top:136px solid transparent;border-bottom:130px solid transparent;border-right:170px solid;z-index:12;filter:drop-shadow(2px 0px 4px rgba(0,0,0,.5));box-shadow:inset -2px 0 2px #0000004d}@media (min-width: 640px){.triangulo-superior[_ngcontent-%COMP%]{border-left:400px solid transparent;border-right:400px solid transparent;border-top:250px solid}.triangulo-inferior[_ngcontent-%COMP%]{border-left:400px solid transparent;border-right:400px solid transparent;border-bottom:250px solid;margin-top:-35px}.triangulo-izquierdo[_ngcontent-%COMP%]{border-top:232px solid transparent;border-bottom:232px solid transparent;border-left:400px solid}.triangulo-derecho[_ngcontent-%COMP%]{border-top:232px solid transparent;border-bottom:232px solid transparent;border-right:400px solid;z-index:12;filter:drop-shadow(2px 0px 4px rgba(0,0,0,.5));box-shadow:inset -2px 0 2px #0000004d}.sello[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%)}}",
      ],
    });
  };
export { pn as SCM_7_PortadaSobre2 };
