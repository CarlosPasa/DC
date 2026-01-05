import {
  a as _,
  b as He,
  c as Gn,
  d as Wn,
  e as Xn,
  f as Or,
  g as Jn,
  h as Se,
  i as Yn,
  p as Et,
  q as Zn,
  r as Dr,
  s as Ct,
  u as Kn,
} from "./chunk-AEQ62QCG.js";
import {
  $ as Rr,
  A as re,
  B as Z,
  C as mr,
  D as ye,
  Da as Be,
  E as Re,
  F as ne,
  Fa as xn,
  G as vr,
  H as Sn,
  I as bn,
  Ia as Un,
  J as Tn,
  Ja as kn,
  K as P,
  Ka as Ln,
  L as En,
  La as Tt,
  M as D,
  Ma as jn,
  N as T,
  Na as Ve,
  Nb as Vn,
  Oa as Cr,
  P as m,
  Q as $e,
  Qb as Ar,
  R as Cn,
  S as C,
  Sa as $n,
  Sb as Hn,
  T as yr,
  Ta as Fn,
  U as g,
  Ua as Ir,
  V as h,
  Va as Mr,
  W as wt,
  Wa as zn,
  X as In,
  Y as ie,
  Yb as qn,
  Z as $,
  a as d,
  b as N,
  ea as wr,
  f as mn,
  fa as St,
  g as vn,
  ga as Sr,
  h as yt,
  ha as bt,
  i as hr,
  ia as we,
  ib as Bn,
  j as fr,
  ja as K,
  k as te,
  ka as br,
  l as j,
  la as Mn,
  m as Y,
  n as O,
  na as An,
  o as f,
  oa as On,
  p as je,
  pa as Tr,
  q as yn,
  qa as Dn,
  r as Rn,
  ra as Fe,
  s as y,
  sa as Er,
  t as Rt,
  u as x,
  v as pr,
  va as Pn,
  w as wn,
  wa as _n,
  x as gr,
  xa as Nn,
  ya as ze,
  z as q,
} from "./chunk-CLQWJLWL.js";
var At = new C(""),
  xr = (() => {
    class t {
      _zone;
      _plugins;
      _eventNameToPlugin = new Map();
      constructor(e, n) {
        (this._zone = n),
          e.forEach((i) => {
            i.manager = this;
          }),
          (this._plugins = e.slice().reverse());
      }
      addEventListener(e, n, i, o) {
        return this._findPluginFor(n).addEventListener(e, n, i, o);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(e) {
        let n = this._eventNameToPlugin.get(e);
        if (n) return n;
        if (((n = this._plugins.find((o) => o.supports(e))), !n))
          throw new T(5101, !1);
        return this._eventNameToPlugin.set(e, n), n;
      }
      static ɵfac = function (n) {
        return new (n || t)(g(At), g(K));
      };
      static ɵprov = m({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  qe = class {
    _doc;
    constructor(r) {
      this._doc = r;
    }
    manager;
  },
  It = "ng-app-id";
function Qn(t) {
  for (let r of t) r.remove();
}
function ei(t, r) {
  let e = r.createElement("style");
  return (e.textContent = t), e;
}
function Co(t, r, e, n) {
  let i = t.head?.querySelectorAll(`style[${It}="${r}"],link[${It}="${r}"]`);
  if (i)
    for (let o of i)
      o.removeAttribute(It),
        o instanceof HTMLLinkElement
          ? n.set(o.href.slice(o.href.lastIndexOf("/") + 1), {
              usage: 0,
              elements: [o],
            })
          : o.textContent && e.set(o.textContent, { usage: 0, elements: [o] });
}
function _r(t, r) {
  let e = r.createElement("link");
  return e.setAttribute("rel", "stylesheet"), e.setAttribute("href", t), e;
}
var Ur = (() => {
    class t {
      doc;
      appId;
      nonce;
      inline = new Map();
      external = new Map();
      hosts = new Set();
      isServer;
      constructor(e, n, i, o = {}) {
        (this.doc = e),
          (this.appId = n),
          (this.nonce = i),
          (this.isServer = Dr(o)),
          Co(e, n, this.inline, this.external),
          this.hosts.add(e.head);
      }
      addStyles(e, n) {
        for (let i of e) this.addUsage(i, this.inline, ei);
        n?.forEach((i) => this.addUsage(i, this.external, _r));
      }
      removeStyles(e, n) {
        for (let i of e) this.removeUsage(i, this.inline);
        n?.forEach((i) => this.removeUsage(i, this.external));
      }
      addUsage(e, n, i) {
        let o = n.get(e);
        o
          ? o.usage++
          : n.set(e, {
              usage: 1,
              elements: [...this.hosts].map((s) =>
                this.addElement(s, i(e, this.doc))
              ),
            });
      }
      removeUsage(e, n) {
        let i = n.get(e);
        i && (i.usage--, i.usage <= 0 && (Qn(i.elements), n.delete(e)));
      }
      ngOnDestroy() {
        for (let [, { elements: e }] of [...this.inline, ...this.external])
          Qn(e);
        this.hosts.clear();
      }
      addHost(e) {
        this.hosts.add(e);
        for (let [n, { elements: i }] of this.inline)
          i.push(this.addElement(e, ei(n, this.doc)));
        for (let [n, { elements: i }] of this.external)
          i.push(this.addElement(e, _r(n, this.doc)));
      }
      removeHost(e) {
        this.hosts.delete(e);
      }
      addElement(e, n) {
        return (
          this.nonce && n.setAttribute("nonce", this.nonce),
          this.isServer && n.setAttribute(It, this.appId),
          e.appendChild(n)
        );
      }
      static ɵfac = function (n) {
        return new (n || t)(g(_), g(Tr), g(Er, 8), g(Fe));
      };
      static ɵprov = m({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  Pr = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/Math/MathML",
  },
  kr = /%COMP%/g;
var ri = "%COMP%",
  Io = `_nghost-${ri}`,
  Mo = `_ngcontent-${ri}`,
  Ao = !0,
  Oo = new C("", { providedIn: "root", factory: () => Ao });
function Do(t) {
  return Mo.replace(kr, t);
}
function Po(t) {
  return Io.replace(kr, t);
}
function ni(t, r) {
  return r.map((e) => e.replace(kr, t));
}
var Lr = (() => {
    class t {
      eventManager;
      sharedStylesHost;
      appId;
      removeStylesOnCompDestroy;
      doc;
      platformId;
      ngZone;
      nonce;
      tracingService;
      rendererByCompId = new Map();
      defaultRenderer;
      platformIsServer;
      constructor(e, n, i, o, s, a, c, u = null, l = null) {
        (this.eventManager = e),
          (this.sharedStylesHost = n),
          (this.appId = i),
          (this.removeStylesOnCompDestroy = o),
          (this.doc = s),
          (this.platformId = a),
          (this.ngZone = c),
          (this.nonce = u),
          (this.tracingService = l),
          (this.platformIsServer = Dr(a)),
          (this.defaultRenderer = new Ge(
            e,
            s,
            c,
            this.platformIsServer,
            this.tracingService
          ));
      }
      createRenderer(e, n) {
        if (!e || !n) return this.defaultRenderer;
        this.platformIsServer &&
          n.encapsulation === ze.ShadowDom &&
          (n = N(d({}, n), { encapsulation: ze.Emulated }));
        let i = this.getOrCreateRenderer(e, n);
        return (
          i instanceof Mt
            ? i.applyToHost(e)
            : i instanceof We && i.applyStyles(),
          i
        );
      }
      getOrCreateRenderer(e, n) {
        let i = this.rendererByCompId,
          o = i.get(n.id);
        if (!o) {
          let s = this.doc,
            a = this.ngZone,
            c = this.eventManager,
            u = this.sharedStylesHost,
            l = this.removeStylesOnCompDestroy,
            v = this.platformIsServer,
            b = this.tracingService;
          switch (n.encapsulation) {
            case ze.Emulated:
              o = new Mt(c, u, n, this.appId, l, s, a, v, b);
              break;
            case ze.ShadowDom:
              return new Nr(c, u, e, n, s, a, this.nonce, v, b);
            default:
              o = new We(c, u, n, l, s, a, v, b);
              break;
          }
          i.set(n.id, o);
        }
        return o;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
      componentReplaced(e) {
        this.rendererByCompId.delete(e);
      }
      static ɵfac = function (n) {
        return new (n || t)(
          g(xr),
          g(Ur),
          g(Tr),
          g(Oo),
          g(_),
          g(Fe),
          g(K),
          g(Er),
          g(Pn, 8)
        );
      };
      static ɵprov = m({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  Ge = class {
    eventManager;
    doc;
    ngZone;
    platformIsServer;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(r, e, n, i, o) {
      (this.eventManager = r),
        (this.doc = e),
        (this.ngZone = n),
        (this.platformIsServer = i),
        (this.tracingService = o);
    }
    destroy() {}
    destroyNode = null;
    createElement(r, e) {
      return e
        ? this.doc.createElementNS(Pr[e] || e, r)
        : this.doc.createElement(r);
    }
    createComment(r) {
      return this.doc.createComment(r);
    }
    createText(r) {
      return this.doc.createTextNode(r);
    }
    appendChild(r, e) {
      (ti(r) ? r.content : r).appendChild(e);
    }
    insertBefore(r, e, n) {
      r && (ti(r) ? r.content : r).insertBefore(e, n);
    }
    removeChild(r, e) {
      e.remove();
    }
    selectRootElement(r, e) {
      let n = typeof r == "string" ? this.doc.querySelector(r) : r;
      if (!n) throw new T(-5104, !1);
      return e || (n.textContent = ""), n;
    }
    parentNode(r) {
      return r.parentNode;
    }
    nextSibling(r) {
      return r.nextSibling;
    }
    setAttribute(r, e, n, i) {
      if (i) {
        e = i + ":" + e;
        let o = Pr[i];
        o ? r.setAttributeNS(o, e, n) : r.setAttribute(e, n);
      } else r.setAttribute(e, n);
    }
    removeAttribute(r, e, n) {
      if (n) {
        let i = Pr[n];
        i ? r.removeAttributeNS(i, e) : r.removeAttribute(`${n}:${e}`);
      } else r.removeAttribute(e);
    }
    addClass(r, e) {
      r.classList.add(e);
    }
    removeClass(r, e) {
      r.classList.remove(e);
    }
    setStyle(r, e, n, i) {
      i & (Be.DashCase | Be.Important)
        ? r.style.setProperty(e, n, i & Be.Important ? "important" : "")
        : (r.style[e] = n);
    }
    removeStyle(r, e, n) {
      n & Be.DashCase ? r.style.removeProperty(e) : (r.style[e] = "");
    }
    setProperty(r, e, n) {
      r != null && (r[e] = n);
    }
    setValue(r, e) {
      r.nodeValue = e;
    }
    listen(r, e, n, i) {
      if (
        typeof r == "string" &&
        ((r = He().getGlobalEventTarget(this.doc, r)), !r)
      )
        throw new T(5102, !1);
      let o = this.decoratePreventDefault(n);
      return (
        this.tracingService?.wrapEventListener &&
          (o = this.tracingService.wrapEventListener(r, e, o)),
        this.eventManager.addEventListener(r, e, o, i)
      );
    }
    decoratePreventDefault(r) {
      return (e) => {
        if (e === "__ngUnwrap__") return r;
        (this.platformIsServer ? this.ngZone.runGuarded(() => r(e)) : r(e)) ===
          !1 && e.preventDefault();
      };
    }
  };
function ti(t) {
  return t.tagName === "TEMPLATE" && t.content !== void 0;
}
var Nr = class extends Ge {
    sharedStylesHost;
    hostEl;
    shadowRoot;
    constructor(r, e, n, i, o, s, a, c, u) {
      super(r, o, s, c, u),
        (this.sharedStylesHost = e),
        (this.hostEl = n),
        (this.shadowRoot = n.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let l = i.styles;
      l = ni(i.id, l);
      for (let b of l) {
        let E = document.createElement("style");
        a && E.setAttribute("nonce", a),
          (E.textContent = b),
          this.shadowRoot.appendChild(E);
      }
      let v = i.getExternalStyles?.();
      if (v)
        for (let b of v) {
          let E = _r(b, o);
          a && E.setAttribute("nonce", a), this.shadowRoot.appendChild(E);
        }
    }
    nodeOrShadowRoot(r) {
      return r === this.hostEl ? this.shadowRoot : r;
    }
    appendChild(r, e) {
      return super.appendChild(this.nodeOrShadowRoot(r), e);
    }
    insertBefore(r, e, n) {
      return super.insertBefore(this.nodeOrShadowRoot(r), e, n);
    }
    removeChild(r, e) {
      return super.removeChild(null, e);
    }
    parentNode(r) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  We = class extends Ge {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(r, e, n, i, o, s, a, c, u) {
      super(r, o, s, a, c),
        (this.sharedStylesHost = e),
        (this.removeStylesOnCompDestroy = i);
      let l = n.styles;
      (this.styles = u ? ni(u, l) : l),
        (this.styleUrls = n.getExternalStyles?.(u));
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles, this.styleUrls);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
    }
  },
  Mt = class extends We {
    contentAttr;
    hostAttr;
    constructor(r, e, n, i, o, s, a, c, u) {
      let l = i + "-" + n.id;
      super(r, e, n, o, s, a, c, u, l),
        (this.contentAttr = Do(l)),
        (this.hostAttr = Po(l));
    }
    applyToHost(r) {
      this.applyStyles(), this.setAttribute(r, this.hostAttr, "");
    }
    createElement(r, e) {
      let n = super.createElement(r, e);
      return super.setAttribute(n, this.contentAttr, ""), n;
    }
  };
var Ot = class t extends Wn {
    supportsDOMEvents = !0;
    static makeCurrent() {
      Gn(new t());
    }
    onAndCancel(r, e, n, i) {
      return (
        r.addEventListener(e, n, i),
        () => {
          r.removeEventListener(e, n, i);
        }
      );
    }
    dispatchEvent(r, e) {
      r.dispatchEvent(e);
    }
    remove(r) {
      r.remove();
    }
    createElement(r, e) {
      return (e = e || this.getDefaultDocument()), e.createElement(r);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(r) {
      return r.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(r) {
      return r instanceof DocumentFragment;
    }
    getGlobalEventTarget(r, e) {
      return e === "window"
        ? window
        : e === "document"
        ? r
        : e === "body"
        ? r.body
        : null;
    }
    getBaseHref(r) {
      let e = _o();
      return e == null ? null : No(e);
    }
    resetBaseElement() {
      Xe = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(r) {
      return Et(document.cookie, r);
    }
  },
  Xe = null;
function _o() {
  return (
    (Xe = Xe || document.head.querySelector("base")),
    Xe ? Xe.getAttribute("href") : null
  );
}
function No(t) {
  return new URL(t, document.baseURI).pathname;
}
var xo = (() => {
    class t {
      build() {
        return new XMLHttpRequest();
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = m({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  oi = (() => {
    class t extends qe {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return !0;
      }
      addEventListener(e, n, i, o) {
        return (
          e.addEventListener(n, i, o),
          () => this.removeEventListener(e, n, i, o)
        );
      }
      removeEventListener(e, n, i, o) {
        return e.removeEventListener(n, i, o);
      }
      static ɵfac = function (n) {
        return new (n || t)(g(_));
      };
      static ɵprov = m({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  ii = ["alt", "control", "meta", "shift"],
  Uo = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS",
  },
  ko = {
    alt: (t) => t.altKey,
    control: (t) => t.ctrlKey,
    meta: (t) => t.metaKey,
    shift: (t) => t.shiftKey,
  },
  si = (() => {
    class t extends qe {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return t.parseEventName(e) != null;
      }
      addEventListener(e, n, i, o) {
        let s = t.parseEventName(n),
          a = t.eventCallback(s.fullKey, i, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => He().onAndCancel(e, s.domEventName, a, o));
      }
      static parseEventName(e) {
        let n = e.toLowerCase().split("."),
          i = n.shift();
        if (n.length === 0 || !(i === "keydown" || i === "keyup")) return null;
        let o = t._normalizeKey(n.pop()),
          s = "",
          a = n.indexOf("code");
        if (
          (a > -1 && (n.splice(a, 1), (s = "code.")),
          ii.forEach((u) => {
            let l = n.indexOf(u);
            l > -1 && (n.splice(l, 1), (s += u + "."));
          }),
          (s += o),
          n.length != 0 || o.length === 0)
        )
          return null;
        let c = {};
        return (c.domEventName = i), (c.fullKey = s), c;
      }
      static matchEventFullKeyCode(e, n) {
        let i = Uo[e.key] || e.key,
          o = "";
        return (
          n.indexOf("code.") > -1 && ((i = e.code), (o = "code.")),
          i == null || !i
            ? !1
            : ((i = i.toLowerCase()),
              i === " " ? (i = "space") : i === "." && (i = "dot"),
              ii.forEach((s) => {
                if (s !== i) {
                  let a = ko[s];
                  a(e) && (o += s + ".");
                }
              }),
              (o += i),
              o === n)
        );
      }
      static eventCallback(e, n, i) {
        return (o) => {
          t.matchEventFullKeyCode(o, e) && i.runGuarded(() => n(o));
        };
      }
      static _normalizeKey(e) {
        return e === "esc" ? "escape" : e;
      }
      static ɵfac = function (n) {
        return new (n || t)(g(_));
      };
      static ɵprov = m({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function Lo(t, r) {
  return Hn(d({ rootComponent: t }, jo(r)));
}
function jo(t) {
  return {
    appProviders: [...Vo, ...(t?.providers ?? [])],
    platformProviders: Bo,
  };
}
function $o() {
  Ot.makeCurrent();
}
function Fo() {
  return new br();
}
function zo() {
  return On(document), document;
}
var Bo = [
  { provide: Fe, useValue: Zn },
  { provide: Dn, useValue: $o, multi: !0 },
  { provide: _, useFactory: zo },
];
var Vo = [
  { provide: In, useValue: "root" },
  { provide: br, useFactory: Fo },
  { provide: At, useClass: oi, multi: !0, deps: [_] },
  { provide: At, useClass: si, multi: !0, deps: [_] },
  Lr,
  Ur,
  xr,
  { provide: xn, useExisting: Lr },
  { provide: Ct, useClass: xo },
  [],
];
var Ee = class {},
  Je = class {},
  oe = class t {
    headers;
    normalizedNames = new Map();
    lazyInit;
    lazyUpdate = null;
    constructor(r) {
      r
        ? typeof r == "string"
          ? (this.lazyInit = () => {
              (this.headers = new Map()),
                r
                  .split(
                    `
`
                  )
                  .forEach((e) => {
                    let n = e.indexOf(":");
                    if (n > 0) {
                      let i = e.slice(0, n),
                        o = e.slice(n + 1).trim();
                      this.addHeaderEntry(i, o);
                    }
                  });
            })
          : typeof Headers < "u" && r instanceof Headers
          ? ((this.headers = new Map()),
            r.forEach((e, n) => {
              this.addHeaderEntry(n, e);
            }))
          : (this.lazyInit = () => {
              (this.headers = new Map()),
                Object.entries(r).forEach(([e, n]) => {
                  this.setHeaderEntries(e, n);
                });
            })
        : (this.headers = new Map());
    }
    has(r) {
      return this.init(), this.headers.has(r.toLowerCase());
    }
    get(r) {
      this.init();
      let e = this.headers.get(r.toLowerCase());
      return e && e.length > 0 ? e[0] : null;
    }
    keys() {
      return this.init(), Array.from(this.normalizedNames.values());
    }
    getAll(r) {
      return this.init(), this.headers.get(r.toLowerCase()) || null;
    }
    append(r, e) {
      return this.clone({ name: r, value: e, op: "a" });
    }
    set(r, e) {
      return this.clone({ name: r, value: e, op: "s" });
    }
    delete(r, e) {
      return this.clone({ name: r, value: e, op: "d" });
    }
    maybeSetNormalizedName(r, e) {
      this.normalizedNames.has(e) || this.normalizedNames.set(e, r);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof t
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
        (this.lazyInit = null),
        this.lazyUpdate &&
          (this.lazyUpdate.forEach((r) => this.applyUpdate(r)),
          (this.lazyUpdate = null)));
    }
    copyFrom(r) {
      r.init(),
        Array.from(r.headers.keys()).forEach((e) => {
          this.headers.set(e, r.headers.get(e)),
            this.normalizedNames.set(e, r.normalizedNames.get(e));
        });
    }
    clone(r) {
      let e = new t();
      return (
        (e.lazyInit =
          this.lazyInit && this.lazyInit instanceof t ? this.lazyInit : this),
        (e.lazyUpdate = (this.lazyUpdate || []).concat([r])),
        e
      );
    }
    applyUpdate(r) {
      let e = r.name.toLowerCase();
      switch (r.op) {
        case "a":
        case "s":
          let n = r.value;
          if ((typeof n == "string" && (n = [n]), n.length === 0)) return;
          this.maybeSetNormalizedName(r.name, e);
          let i = (r.op === "a" ? this.headers.get(e) : void 0) || [];
          i.push(...n), this.headers.set(e, i);
          break;
        case "d":
          let o = r.value;
          if (!o) this.headers.delete(e), this.normalizedNames.delete(e);
          else {
            let s = this.headers.get(e);
            if (!s) return;
            (s = s.filter((a) => o.indexOf(a) === -1)),
              s.length === 0
                ? (this.headers.delete(e), this.normalizedNames.delete(e))
                : this.headers.set(e, s);
          }
          break;
      }
    }
    addHeaderEntry(r, e) {
      let n = r.toLowerCase();
      this.maybeSetNormalizedName(r, n),
        this.headers.has(n)
          ? this.headers.get(n).push(e)
          : this.headers.set(n, [e]);
    }
    setHeaderEntries(r, e) {
      let n = (Array.isArray(e) ? e : [e]).map((o) => o.toString()),
        i = r.toLowerCase();
      this.headers.set(i, n), this.maybeSetNormalizedName(r, i);
    }
    forEach(r) {
      this.init(),
        Array.from(this.normalizedNames.keys()).forEach((e) =>
          r(this.normalizedNames.get(e), this.headers.get(e))
        );
    }
  };
var Pt = class {
  encodeKey(r) {
    return ai(r);
  }
  encodeValue(r) {
    return ai(r);
  }
  decodeKey(r) {
    return decodeURIComponent(r);
  }
  decodeValue(r) {
    return decodeURIComponent(r);
  }
};
function Ho(t, r) {
  let e = new Map();
  return (
    t.length > 0 &&
      t
        .replace(/^\?/, "")
        .split("&")
        .forEach((i) => {
          let o = i.indexOf("="),
            [s, a] =
              o == -1
                ? [r.decodeKey(i), ""]
                : [r.decodeKey(i.slice(0, o)), r.decodeValue(i.slice(o + 1))],
            c = e.get(s) || [];
          c.push(a), e.set(s, c);
        }),
    e
  );
}
var qo = /%(\d[a-f0-9])/gi,
  Go = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/",
  };
function ai(t) {
  return encodeURIComponent(t).replace(qo, (r, e) => Go[e] ?? r);
}
function Dt(t) {
  return `${t}`;
}
var Q = class t {
  map;
  encoder;
  updates = null;
  cloneFrom = null;
  constructor(r = {}) {
    if (((this.encoder = r.encoder || new Pt()), r.fromString)) {
      if (r.fromObject) throw new T(2805, !1);
      this.map = Ho(r.fromString, this.encoder);
    } else
      r.fromObject
        ? ((this.map = new Map()),
          Object.keys(r.fromObject).forEach((e) => {
            let n = r.fromObject[e],
              i = Array.isArray(n) ? n.map(Dt) : [Dt(n)];
            this.map.set(e, i);
          }))
        : (this.map = null);
  }
  has(r) {
    return this.init(), this.map.has(r);
  }
  get(r) {
    this.init();
    let e = this.map.get(r);
    return e ? e[0] : null;
  }
  getAll(r) {
    return this.init(), this.map.get(r) || null;
  }
  keys() {
    return this.init(), Array.from(this.map.keys());
  }
  append(r, e) {
    return this.clone({ param: r, value: e, op: "a" });
  }
  appendAll(r) {
    let e = [];
    return (
      Object.keys(r).forEach((n) => {
        let i = r[n];
        Array.isArray(i)
          ? i.forEach((o) => {
              e.push({ param: n, value: o, op: "a" });
            })
          : e.push({ param: n, value: i, op: "a" });
      }),
      this.clone(e)
    );
  }
  set(r, e) {
    return this.clone({ param: r, value: e, op: "s" });
  }
  delete(r, e) {
    return this.clone({ param: r, value: e, op: "d" });
  }
  toString() {
    return (
      this.init(),
      this.keys()
        .map((r) => {
          let e = this.encoder.encodeKey(r);
          return this.map
            .get(r)
            .map((n) => e + "=" + this.encoder.encodeValue(n))
            .join("&");
        })
        .filter((r) => r !== "")
        .join("&")
    );
  }
  clone(r) {
    let e = new t({ encoder: this.encoder });
    return (
      (e.cloneFrom = this.cloneFrom || this),
      (e.updates = (this.updates || []).concat(r)),
      e
    );
  }
  init() {
    this.map === null && (this.map = new Map()),
      this.cloneFrom !== null &&
        (this.cloneFrom.init(),
        this.cloneFrom
          .keys()
          .forEach((r) => this.map.set(r, this.cloneFrom.map.get(r))),
        this.updates.forEach((r) => {
          switch (r.op) {
            case "a":
            case "s":
              let e = (r.op === "a" ? this.map.get(r.param) : void 0) || [];
              e.push(Dt(r.value)), this.map.set(r.param, e);
              break;
            case "d":
              if (r.value !== void 0) {
                let n = this.map.get(r.param) || [],
                  i = n.indexOf(Dt(r.value));
                i !== -1 && n.splice(i, 1),
                  n.length > 0
                    ? this.map.set(r.param, n)
                    : this.map.delete(r.param);
              } else {
                this.map.delete(r.param);
                break;
              }
          }
        }),
        (this.cloneFrom = this.updates = null));
  }
};
var _t = class {
  map = new Map();
  set(r, e) {
    return this.map.set(r, e), this;
  }
  get(r) {
    return (
      this.map.has(r) || this.map.set(r, r.defaultValue()), this.map.get(r)
    );
  }
  delete(r) {
    return this.map.delete(r), this;
  }
  has(r) {
    return this.map.has(r);
  }
  keys() {
    return this.map.keys();
  }
};
function Wo(t) {
  switch (t) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return !1;
    default:
      return !0;
  }
}
function ci(t) {
  return typeof ArrayBuffer < "u" && t instanceof ArrayBuffer;
}
function ui(t) {
  return typeof Blob < "u" && t instanceof Blob;
}
function li(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function Xo(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
var di = "Content-Type",
  hi = "Accept",
  fi = "X-Request-URL",
  pi = "text/plain",
  gi = "application/json",
  Jo = `${gi}, ${pi}, */*`,
  Te = class t {
    url;
    body = null;
    headers;
    context;
    reportProgress = !1;
    withCredentials = !1;
    responseType = "json";
    method;
    params;
    urlWithParams;
    transferCache;
    constructor(r, e, n, i) {
      (this.url = e), (this.method = r.toUpperCase());
      let o;
      if (
        (Wo(this.method) || i
          ? ((this.body = n !== void 0 ? n : null), (o = i))
          : (o = n),
        o &&
          ((this.reportProgress = !!o.reportProgress),
          (this.withCredentials = !!o.withCredentials),
          o.responseType && (this.responseType = o.responseType),
          o.headers && (this.headers = o.headers),
          o.context && (this.context = o.context),
          o.params && (this.params = o.params),
          (this.transferCache = o.transferCache)),
        (this.headers ??= new oe()),
        (this.context ??= new _t()),
        !this.params)
      )
        (this.params = new Q()), (this.urlWithParams = e);
      else {
        let s = this.params.toString();
        if (s.length === 0) this.urlWithParams = e;
        else {
          let a = e.indexOf("?"),
            c = a === -1 ? "?" : a < e.length - 1 ? "&" : "";
          this.urlWithParams = e + c + s;
        }
      }
    }
    serializeBody() {
      return this.body === null
        ? null
        : typeof this.body == "string" ||
          ci(this.body) ||
          ui(this.body) ||
          li(this.body) ||
          Xo(this.body)
        ? this.body
        : this.body instanceof Q
        ? this.body.toString()
        : typeof this.body == "object" ||
          typeof this.body == "boolean" ||
          Array.isArray(this.body)
        ? JSON.stringify(this.body)
        : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || li(this.body)
        ? null
        : ui(this.body)
        ? this.body.type || null
        : ci(this.body)
        ? null
        : typeof this.body == "string"
        ? pi
        : this.body instanceof Q
        ? "application/x-www-form-urlencoded;charset=UTF-8"
        : typeof this.body == "object" ||
          typeof this.body == "number" ||
          typeof this.body == "boolean"
        ? gi
        : null;
    }
    clone(r = {}) {
      let e = r.method || this.method,
        n = r.url || this.url,
        i = r.responseType || this.responseType,
        o = r.transferCache ?? this.transferCache,
        s = r.body !== void 0 ? r.body : this.body,
        a = r.withCredentials ?? this.withCredentials,
        c = r.reportProgress ?? this.reportProgress,
        u = r.headers || this.headers,
        l = r.params || this.params,
        v = r.context ?? this.context;
      return (
        r.setHeaders !== void 0 &&
          (u = Object.keys(r.setHeaders).reduce(
            (b, E) => b.set(E, r.setHeaders[E]),
            u
          )),
        r.setParams &&
          (l = Object.keys(r.setParams).reduce(
            (b, E) => b.set(E, r.setParams[E]),
            l
          )),
        new t(e, n, s, {
          params: l,
          headers: u,
          context: v,
          reportProgress: c,
          responseType: i,
          withCredentials: a,
          transferCache: o,
        })
      );
    }
  },
  le = (function (t) {
    return (
      (t[(t.Sent = 0)] = "Sent"),
      (t[(t.UploadProgress = 1)] = "UploadProgress"),
      (t[(t.ResponseHeader = 2)] = "ResponseHeader"),
      (t[(t.DownloadProgress = 3)] = "DownloadProgress"),
      (t[(t.Response = 4)] = "Response"),
      (t[(t.User = 5)] = "User"),
      t
    );
  })(le || {}),
  Ce = class {
    headers;
    status;
    statusText;
    url;
    ok;
    type;
    constructor(r, e = 200, n = "OK") {
      (this.headers = r.headers || new oe()),
        (this.status = r.status !== void 0 ? r.status : e),
        (this.statusText = r.statusText || n),
        (this.url = r.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  },
  Nt = class t extends Ce {
    constructor(r = {}) {
      super(r);
    }
    type = le.ResponseHeader;
    clone(r = {}) {
      return new t({
        headers: r.headers || this.headers,
        status: r.status !== void 0 ? r.status : this.status,
        statusText: r.statusText || this.statusText,
        url: r.url || this.url || void 0,
      });
    }
  },
  Ye = class t extends Ce {
    body;
    constructor(r = {}) {
      super(r), (this.body = r.body !== void 0 ? r.body : null);
    }
    type = le.Response;
    clone(r = {}) {
      return new t({
        body: r.body !== void 0 ? r.body : this.body,
        headers: r.headers || this.headers,
        status: r.status !== void 0 ? r.status : this.status,
        statusText: r.statusText || this.statusText,
        url: r.url || this.url || void 0,
      });
    }
  },
  Ze = class extends Ce {
    name = "HttpErrorResponse";
    message;
    error;
    ok = !1;
    constructor(r) {
      super(r, 0, "Unknown Error"),
        this.status >= 200 && this.status < 300
          ? (this.message = `Http failure during parsing for ${
              r.url || "(unknown url)"
            }`)
          : (this.message = `Http failure response for ${
              r.url || "(unknown url)"
            }: ${r.status} ${r.statusText}`),
        (this.error = r.error || null);
    }
  },
  Yo = 200,
  Zo = 204;
function jr(t, r) {
  return {
    body: r,
    headers: t.headers,
    context: t.context,
    observe: t.observe,
    params: t.params,
    reportProgress: t.reportProgress,
    responseType: t.responseType,
    withCredentials: t.withCredentials,
    transferCache: t.transferCache,
  };
}
var Ut = (() => {
  class t {
    handler;
    constructor(e) {
      this.handler = e;
    }
    request(e, n, i = {}) {
      let o;
      if (e instanceof Te) o = e;
      else {
        let c;
        i.headers instanceof oe ? (c = i.headers) : (c = new oe(i.headers));
        let u;
        i.params &&
          (i.params instanceof Q
            ? (u = i.params)
            : (u = new Q({ fromObject: i.params }))),
          (o = new Te(e, n, i.body !== void 0 ? i.body : null, {
            headers: c,
            context: i.context,
            params: u,
            reportProgress: i.reportProgress,
            responseType: i.responseType || "json",
            withCredentials: i.withCredentials,
            transferCache: i.transferCache,
          }));
      }
      let s = f(o).pipe(Z((c) => this.handler.handle(c)));
      if (e instanceof Te || i.observe === "events") return s;
      let a = s.pipe(q((c) => c instanceof Ye));
      switch (i.observe || "body") {
        case "body":
          switch (o.responseType) {
            case "arraybuffer":
              return a.pipe(
                y((c) => {
                  if (c.body !== null && !(c.body instanceof ArrayBuffer))
                    throw new T(2806, !1);
                  return c.body;
                })
              );
            case "blob":
              return a.pipe(
                y((c) => {
                  if (c.body !== null && !(c.body instanceof Blob))
                    throw new T(2807, !1);
                  return c.body;
                })
              );
            case "text":
              return a.pipe(
                y((c) => {
                  if (c.body !== null && typeof c.body != "string")
                    throw new T(2808, !1);
                  return c.body;
                })
              );
            case "json":
            default:
              return a.pipe(y((c) => c.body));
          }
        case "response":
          return a;
        default:
          throw new T(2809, !1);
      }
    }
    delete(e, n = {}) {
      return this.request("DELETE", e, n);
    }
    get(e, n = {}) {
      return this.request("GET", e, n);
    }
    head(e, n = {}) {
      return this.request("HEAD", e, n);
    }
    jsonp(e, n) {
      return this.request("JSONP", e, {
        params: new Q().append(n, "JSONP_CALLBACK"),
        observe: "body",
        responseType: "json",
      });
    }
    options(e, n = {}) {
      return this.request("OPTIONS", e, n);
    }
    patch(e, n, i = {}) {
      return this.request("PATCH", e, jr(i, n));
    }
    post(e, n, i = {}) {
      return this.request("POST", e, jr(i, n));
    }
    put(e, n, i = {}) {
      return this.request("PUT", e, jr(i, n));
    }
    static ɵfac = function (n) {
      return new (n || t)(g(Ee));
    };
    static ɵprov = m({ token: t, factory: t.ɵfac });
  }
  return t;
})();
var Ko = new C("");
function Qo(t, r) {
  return r(t);
}
function es(t, r, e) {
  return (n, i) => $(e, () => r(n, (o) => t(o, i)));
}
var mi = new C(""),
  vi = new C(""),
  yi = new C("", { providedIn: "root", factory: () => !0 });
var xt = (() => {
  class t extends Ee {
    backend;
    injector;
    chain = null;
    pendingTasks = h(bt);
    contributeToStability = h(yi);
    constructor(e, n) {
      super(), (this.backend = e), (this.injector = n);
    }
    handle(e) {
      if (this.chain === null) {
        let n = Array.from(
          new Set([...this.injector.get(mi), ...this.injector.get(vi, [])])
        );
        this.chain = n.reduceRight((i, o) => es(i, o, this.injector), Qo);
      }
      if (this.contributeToStability) {
        let n = this.pendingTasks.add();
        return this.chain(e, (i) => this.backend.handle(i)).pipe(
          Re(() => this.pendingTasks.remove(n))
        );
      } else return this.chain(e, (n) => this.backend.handle(n));
    }
    static ɵfac = function (n) {
      return new (n || t)(g(Je), g(ie));
    };
    static ɵprov = m({ token: t, factory: t.ɵfac });
  }
  return t;
})();
var ts = /^\)\]\}',?\n/,
  rs = RegExp(`^${fi}:`, "m");
function ns(t) {
  return "responseURL" in t && t.responseURL
    ? t.responseURL
    : rs.test(t.getAllResponseHeaders())
    ? t.getResponseHeader(fi)
    : null;
}
var $r = (() => {
    class t {
      xhrFactory;
      constructor(e) {
        this.xhrFactory = e;
      }
      handle(e) {
        if (e.method === "JSONP") throw new T(-2800, !1);
        let n = this.xhrFactory;
        return (n.ɵloadImpl ? O(n.ɵloadImpl()) : f(null)).pipe(
          P(
            () =>
              new yt((o) => {
                let s = n.build();
                if (
                  (s.open(e.method, e.urlWithParams),
                  e.withCredentials && (s.withCredentials = !0),
                  e.headers.forEach((R, S) =>
                    s.setRequestHeader(R, S.join(","))
                  ),
                  e.headers.has(hi) || s.setRequestHeader(hi, Jo),
                  !e.headers.has(di))
                ) {
                  let R = e.detectContentTypeHeader();
                  R !== null && s.setRequestHeader(di, R);
                }
                if (e.responseType) {
                  let R = e.responseType.toLowerCase();
                  s.responseType = R !== "json" ? R : "text";
                }
                let a = e.serializeBody(),
                  c = null,
                  u = () => {
                    if (c !== null) return c;
                    let R = s.statusText || "OK",
                      S = new oe(s.getAllResponseHeaders()),
                      H = ns(s) || e.url;
                    return (
                      (c = new Nt({
                        headers: S,
                        status: s.status,
                        statusText: R,
                        url: H,
                      })),
                      c
                    );
                  },
                  l = () => {
                    let { headers: R, status: S, statusText: H, url: vt } = u(),
                      I = null;
                    S !== Zo &&
                      (I =
                        typeof s.response > "u" ? s.responseText : s.response),
                      S === 0 && (S = I ? Yo : 0);
                    let dr = S >= 200 && S < 300;
                    if (e.responseType === "json" && typeof I == "string") {
                      let To = I;
                      I = I.replace(ts, "");
                      try {
                        I = I !== "" ? JSON.parse(I) : null;
                      } catch (Eo) {
                        (I = To),
                          dr && ((dr = !1), (I = { error: Eo, text: I }));
                      }
                    }
                    dr
                      ? (o.next(
                          new Ye({
                            body: I,
                            headers: R,
                            status: S,
                            statusText: H,
                            url: vt || void 0,
                          })
                        ),
                        o.complete())
                      : o.error(
                          new Ze({
                            error: I,
                            headers: R,
                            status: S,
                            statusText: H,
                            url: vt || void 0,
                          })
                        );
                  },
                  v = (R) => {
                    let { url: S } = u(),
                      H = new Ze({
                        error: R,
                        status: s.status || 0,
                        statusText: s.statusText || "Unknown Error",
                        url: S || void 0,
                      });
                    o.error(H);
                  },
                  b = !1,
                  E = (R) => {
                    b || (o.next(u()), (b = !0));
                    let S = { type: le.DownloadProgress, loaded: R.loaded };
                    R.lengthComputable && (S.total = R.total),
                      e.responseType === "text" &&
                        s.responseText &&
                        (S.partialText = s.responseText),
                      o.next(S);
                  },
                  A = (R) => {
                    let S = { type: le.UploadProgress, loaded: R.loaded };
                    R.lengthComputable && (S.total = R.total), o.next(S);
                  };
                return (
                  s.addEventListener("load", l),
                  s.addEventListener("error", v),
                  s.addEventListener("timeout", v),
                  s.addEventListener("abort", v),
                  e.reportProgress &&
                    (s.addEventListener("progress", E),
                    a !== null &&
                      s.upload &&
                      s.upload.addEventListener("progress", A)),
                  s.send(a),
                  o.next({ type: le.Sent }),
                  () => {
                    s.removeEventListener("error", v),
                      s.removeEventListener("abort", v),
                      s.removeEventListener("load", l),
                      s.removeEventListener("timeout", v),
                      e.reportProgress &&
                        (s.removeEventListener("progress", E),
                        a !== null &&
                          s.upload &&
                          s.upload.removeEventListener("progress", A)),
                      s.readyState !== s.DONE && s.abort();
                  }
                );
              })
          )
        );
      }
      static ɵfac = function (n) {
        return new (n || t)(g(Ct));
      };
      static ɵprov = m({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  Ri = new C(""),
  is = "XSRF-TOKEN",
  os = new C("", { providedIn: "root", factory: () => is }),
  ss = "X-XSRF-TOKEN",
  as = new C("", { providedIn: "root", factory: () => ss }),
  Ke = class {},
  cs = (() => {
    class t {
      doc;
      cookieName;
      lastCookieString = "";
      lastToken = null;
      parseCount = 0;
      constructor(e, n) {
        (this.doc = e), (this.cookieName = n);
      }
      getToken() {
        let e = this.doc.cookie || "";
        return (
          e !== this.lastCookieString &&
            (this.parseCount++,
            (this.lastToken = Et(e, this.cookieName)),
            (this.lastCookieString = e)),
          this.lastToken
        );
      }
      static ɵfac = function (n) {
        return new (n || t)(g(_), g(os));
      };
      static ɵprov = m({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function us(t, r) {
  let e = t.url.toLowerCase();
  if (
    !h(Ri) ||
    t.method === "GET" ||
    t.method === "HEAD" ||
    e.startsWith("http://") ||
    e.startsWith("https://")
  )
    return r(t);
  let n = h(Ke).getToken(),
    i = h(as);
  return (
    n != null &&
      !t.headers.has(i) &&
      (t = t.clone({ headers: t.headers.set(i, n) })),
    r(t)
  );
}
function ls(...t) {
  let r = [
    Ut,
    $r,
    xt,
    { provide: Ee, useExisting: xt },
    { provide: Je, useFactory: () => h(Ko, { optional: !0 }) ?? h($r) },
    { provide: mi, useValue: us, multi: !0 },
    { provide: Ri, useValue: !0 },
    { provide: Ke, useClass: cs },
  ];
  for (let e of t) r.push(...e.ɵproviders);
  return wt(r);
}
var wi = (() => {
  class t {
    _doc;
    constructor(e) {
      this._doc = e;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(e) {
      this._doc.title = e || "";
    }
    static ɵfac = function (n) {
      return new (n || t)(g(_));
    };
    static ɵprov = m({ token: t, factory: t.ɵfac, providedIn: "root" });
  }
  return t;
})();
var F = "https://crm.invitafy.com/";
var Si = 2579;
var p = "primary",
  dt = Symbol("RouteTitle"),
  Hr = class {
    params;
    constructor(r) {
      this.params = r || {};
    }
    has(r) {
      return Object.prototype.hasOwnProperty.call(this.params, r);
    }
    get(r) {
      if (this.has(r)) {
        let e = this.params[r];
        return Array.isArray(e) ? e[0] : e;
      }
      return null;
    }
    getAll(r) {
      if (this.has(r)) {
        let e = this.params[r];
        return Array.isArray(e) ? e : [e];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function fe(t) {
  return new Hr(t);
}
function Oi(t, r, e) {
  let n = e.path.split("/");
  if (
    n.length > t.length ||
    (e.pathMatch === "full" && (r.hasChildren() || n.length < t.length))
  )
    return null;
  let i = {};
  for (let o = 0; o < n.length; o++) {
    let s = n[o],
      a = t[o];
    if (s[0] === ":") i[s.substring(1)] = a;
    else if (s !== a.path) return null;
  }
  return { consumed: t.slice(0, n.length), posParams: i };
}
function fs(t, r) {
  if (t.length !== r.length) return !1;
  for (let e = 0; e < t.length; ++e) if (!G(t[e], r[e])) return !1;
  return !0;
}
function G(t, r) {
  let e = t ? qr(t) : void 0,
    n = r ? qr(r) : void 0;
  if (!e || !n || e.length != n.length) return !1;
  let i;
  for (let o = 0; o < e.length; o++)
    if (((i = e[o]), !Di(t[i], r[i]))) return !1;
  return !0;
}
function qr(t) {
  return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)];
}
function Di(t, r) {
  if (Array.isArray(t) && Array.isArray(r)) {
    if (t.length !== r.length) return !1;
    let e = [...t].sort(),
      n = [...r].sort();
    return e.every((i, o) => n[o] === i);
  } else return t === r;
}
function Pi(t) {
  return t.length > 0 ? t[t.length - 1] : null;
}
function ue(t) {
  return yn(t) ? t : Fn(t) ? O(Promise.resolve(t)) : f(t);
}
var ps = { exact: Ni, subset: xi },
  _i = { exact: gs, subset: ms, ignored: () => !0 };
function bi(t, r, e) {
  return (
    ps[e.paths](t.root, r.root, e.matrixParams) &&
    _i[e.queryParams](t.queryParams, r.queryParams) &&
    !(e.fragment === "exact" && t.fragment !== r.fragment)
  );
}
function gs(t, r) {
  return G(t, r);
}
function Ni(t, r, e) {
  if (
    !de(t.segments, r.segments) ||
    !jt(t.segments, r.segments, e) ||
    t.numberOfChildren !== r.numberOfChildren
  )
    return !1;
  for (let n in r.children)
    if (!t.children[n] || !Ni(t.children[n], r.children[n], e)) return !1;
  return !0;
}
function ms(t, r) {
  return (
    Object.keys(r).length <= Object.keys(t).length &&
    Object.keys(r).every((e) => Di(t[e], r[e]))
  );
}
function xi(t, r, e) {
  return Ui(t, r, r.segments, e);
}
function Ui(t, r, e, n) {
  if (t.segments.length > e.length) {
    let i = t.segments.slice(0, e.length);
    return !(!de(i, e) || r.hasChildren() || !jt(i, e, n));
  } else if (t.segments.length === e.length) {
    if (!de(t.segments, e) || !jt(t.segments, e, n)) return !1;
    for (let i in r.children)
      if (!t.children[i] || !xi(t.children[i], r.children[i], n)) return !1;
    return !0;
  } else {
    let i = e.slice(0, t.segments.length),
      o = e.slice(t.segments.length);
    return !de(t.segments, i) || !jt(t.segments, i, n) || !t.children[p]
      ? !1
      : Ui(t.children[p], r, o, n);
  }
}
function jt(t, r, e) {
  return r.every((n, i) => _i[e](t[i].parameters, n.parameters));
}
var X = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(r = new w([], {}), e = {}, n = null) {
      (this.root = r), (this.queryParams = e), (this.fragment = n);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= fe(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return Rs.serialize(this);
    }
  },
  w = class {
    segments;
    children;
    parent = null;
    constructor(r, e) {
      (this.segments = r),
        (this.children = e),
        Object.values(e).forEach((n) => (n.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return $t(this);
    }
  },
  se = class {
    path;
    parameters;
    _parameterMap;
    constructor(r, e) {
      (this.path = r), (this.parameters = e);
    }
    get parameterMap() {
      return (this._parameterMap ??= fe(this.parameters)), this._parameterMap;
    }
    toString() {
      return Li(this);
    }
  };
function vs(t, r) {
  return de(t, r) && t.every((e, n) => G(e.parameters, r[n].parameters));
}
function de(t, r) {
  return t.length !== r.length ? !1 : t.every((e, n) => e.path === r[n].path);
}
function ys(t, r) {
  let e = [];
  return (
    Object.entries(t.children).forEach(([n, i]) => {
      n === p && (e = e.concat(r(i, n)));
    }),
    Object.entries(t.children).forEach(([n, i]) => {
      n !== p && (e = e.concat(r(i, n)));
    }),
    e
  );
}
var pe = (() => {
    class t {
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = m({
        token: t,
        factory: () => new ae(),
        providedIn: "root",
      });
    }
    return t;
  })(),
  ae = class {
    parse(r) {
      let e = new Wr(r);
      return new X(
        e.parseRootSegment(),
        e.parseQueryParams(),
        e.parseFragment()
      );
    }
    serialize(r) {
      let e = `/${Qe(r.root, !0)}`,
        n = bs(r.queryParams),
        i = typeof r.fragment == "string" ? `#${ws(r.fragment)}` : "";
      return `${e}${n}${i}`;
    }
  },
  Rs = new ae();
function $t(t) {
  return t.segments.map((r) => Li(r)).join("/");
}
function Qe(t, r) {
  if (!t.hasChildren()) return $t(t);
  if (r) {
    let e = t.children[p] ? Qe(t.children[p], !1) : "",
      n = [];
    return (
      Object.entries(t.children).forEach(([i, o]) => {
        i !== p && n.push(`${i}:${Qe(o, !1)}`);
      }),
      n.length > 0 ? `${e}(${n.join("//")})` : e
    );
  } else {
    let e = ys(t, (n, i) =>
      i === p ? [Qe(t.children[p], !1)] : [`${i}:${Qe(n, !1)}`]
    );
    return Object.keys(t.children).length === 1 && t.children[p] != null
      ? `${$t(t)}/${e[0]}`
      : `${$t(t)}/(${e.join("//")})`;
  }
}
function ki(t) {
  return encodeURIComponent(t)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function kt(t) {
  return ki(t).replace(/%3B/gi, ";");
}
function ws(t) {
  return encodeURI(t);
}
function Gr(t) {
  return ki(t)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function Ft(t) {
  return decodeURIComponent(t);
}
function Ti(t) {
  return Ft(t.replace(/\+/g, "%20"));
}
function Li(t) {
  return `${Gr(t.path)}${Ss(t.parameters)}`;
}
function Ss(t) {
  return Object.entries(t)
    .map(([r, e]) => `;${Gr(r)}=${Gr(e)}`)
    .join("");
}
function bs(t) {
  let r = Object.entries(t)
    .map(([e, n]) =>
      Array.isArray(n)
        ? n.map((i) => `${kt(e)}=${kt(i)}`).join("&")
        : `${kt(e)}=${kt(n)}`
    )
    .filter((e) => e);
  return r.length ? `?${r.join("&")}` : "";
}
var Ts = /^[^\/()?;#]+/;
function Fr(t) {
  let r = t.match(Ts);
  return r ? r[0] : "";
}
var Es = /^[^\/()?;=#]+/;
function Cs(t) {
  let r = t.match(Es);
  return r ? r[0] : "";
}
var Is = /^[^=?&#]+/;
function Ms(t) {
  let r = t.match(Is);
  return r ? r[0] : "";
}
var As = /^[^&#]+/;
function Os(t) {
  let r = t.match(As);
  return r ? r[0] : "";
}
var Wr = class {
  url;
  remaining;
  constructor(r) {
    (this.url = r), (this.remaining = r);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new w([], {})
        : new w([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let r = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(r);
      while (this.consumeOptional("&"));
    return r;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let r = [];
    for (
      this.peekStartsWith("(") || r.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), r.push(this.parseSegment());
    let e = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (e = this.parseParens(!0)));
    let n = {};
    return (
      this.peekStartsWith("(") && (n = this.parseParens(!1)),
      (r.length > 0 || Object.keys(e).length > 0) && (n[p] = new w(r, e)),
      n
    );
  }
  parseSegment() {
    let r = Fr(this.remaining);
    if (r === "" && this.peekStartsWith(";")) throw new T(4009, !1);
    return this.capture(r), new se(Ft(r), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let r = {};
    for (; this.consumeOptional(";"); ) this.parseParam(r);
    return r;
  }
  parseParam(r) {
    let e = Cs(this.remaining);
    if (!e) return;
    this.capture(e);
    let n = "";
    if (this.consumeOptional("=")) {
      let i = Fr(this.remaining);
      i && ((n = i), this.capture(n));
    }
    r[Ft(e)] = Ft(n);
  }
  parseQueryParam(r) {
    let e = Ms(this.remaining);
    if (!e) return;
    this.capture(e);
    let n = "";
    if (this.consumeOptional("=")) {
      let s = Os(this.remaining);
      s && ((n = s), this.capture(n));
    }
    let i = Ti(e),
      o = Ti(n);
    if (r.hasOwnProperty(i)) {
      let s = r[i];
      Array.isArray(s) || ((s = [s]), (r[i] = s)), s.push(o);
    } else r[i] = o;
  }
  parseParens(r) {
    let e = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let n = Fr(this.remaining),
        i = this.remaining[n.length];
      if (i !== "/" && i !== ")" && i !== ";") throw new T(4010, !1);
      let o;
      n.indexOf(":") > -1
        ? ((o = n.slice(0, n.indexOf(":"))), this.capture(o), this.capture(":"))
        : r && (o = p);
      let s = this.parseChildren();
      (e[o] = Object.keys(s).length === 1 ? s[p] : new w([], s)),
        this.consumeOptional("//");
    }
    return e;
  }
  peekStartsWith(r) {
    return this.remaining.startsWith(r);
  }
  consumeOptional(r) {
    return this.peekStartsWith(r)
      ? ((this.remaining = this.remaining.substring(r.length)), !0)
      : !1;
  }
  capture(r) {
    if (!this.consumeOptional(r)) throw new T(4011, !1);
  }
};
function ji(t) {
  return t.segments.length > 0 ? new w([], { [p]: t }) : t;
}
function $i(t) {
  let r = {};
  for (let [n, i] of Object.entries(t.children)) {
    let o = $i(i);
    if (n === p && o.segments.length === 0 && o.hasChildren())
      for (let [s, a] of Object.entries(o.children)) r[s] = a;
    else (o.segments.length > 0 || o.hasChildren()) && (r[n] = o);
  }
  let e = new w(t.segments, r);
  return Ds(e);
}
function Ds(t) {
  if (t.numberOfChildren === 1 && t.children[p]) {
    let r = t.children[p];
    return new w(t.segments.concat(r.segments), r.children);
  }
  return t;
}
function De(t) {
  return t instanceof X;
}
function Fi(t, r, e = null, n = null) {
  let i = zi(t);
  return Bi(i, r, e, n);
}
function zi(t) {
  let r;
  function e(o) {
    let s = {};
    for (let c of o.children) {
      let u = e(c);
      s[c.outlet] = u;
    }
    let a = new w(o.url, s);
    return o === t && (r = a), a;
  }
  let n = e(t.root),
    i = ji(n);
  return r ?? i;
}
function Bi(t, r, e, n) {
  let i = t;
  for (; i.parent; ) i = i.parent;
  if (r.length === 0) return zr(i, i, i, e, n);
  let o = Ps(r);
  if (o.toRoot()) return zr(i, i, new w([], {}), e, n);
  let s = _s(o, i, t),
    a = s.processChildren
      ? tt(s.segmentGroup, s.index, o.commands)
      : Hi(s.segmentGroup, s.index, o.commands);
  return zr(i, s.segmentGroup, a, e, n);
}
function Bt(t) {
  return typeof t == "object" && t != null && !t.outlets && !t.segmentPath;
}
function nt(t) {
  return typeof t == "object" && t != null && t.outlets;
}
function zr(t, r, e, n, i) {
  let o = {};
  n &&
    Object.entries(n).forEach(([c, u]) => {
      o[c] = Array.isArray(u) ? u.map((l) => `${l}`) : `${u}`;
    });
  let s;
  t === r ? (s = e) : (s = Vi(t, r, e));
  let a = ji($i(s));
  return new X(a, o, i);
}
function Vi(t, r, e) {
  let n = {};
  return (
    Object.entries(t.children).forEach(([i, o]) => {
      o === r ? (n[i] = e) : (n[i] = Vi(o, r, e));
    }),
    new w(t.segments, n)
  );
}
var Vt = class {
  isAbsolute;
  numberOfDoubleDots;
  commands;
  constructor(r, e, n) {
    if (
      ((this.isAbsolute = r),
      (this.numberOfDoubleDots = e),
      (this.commands = n),
      r && n.length > 0 && Bt(n[0]))
    )
      throw new T(4003, !1);
    let i = n.find(nt);
    if (i && i !== Pi(n)) throw new T(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function Ps(t) {
  if (typeof t[0] == "string" && t.length === 1 && t[0] === "/")
    return new Vt(!0, 0, t);
  let r = 0,
    e = !1,
    n = t.reduce((i, o, s) => {
      if (typeof o == "object" && o != null) {
        if (o.outlets) {
          let a = {};
          return (
            Object.entries(o.outlets).forEach(([c, u]) => {
              a[c] = typeof u == "string" ? u.split("/") : u;
            }),
            [...i, { outlets: a }]
          );
        }
        if (o.segmentPath) return [...i, o.segmentPath];
      }
      return typeof o != "string"
        ? [...i, o]
        : s === 0
        ? (o.split("/").forEach((a, c) => {
            (c == 0 && a === ".") ||
              (c == 0 && a === ""
                ? (e = !0)
                : a === ".."
                ? r++
                : a != "" && i.push(a));
          }),
          i)
        : [...i, o];
    }, []);
  return new Vt(e, r, n);
}
var Ae = class {
  segmentGroup;
  processChildren;
  index;
  constructor(r, e, n) {
    (this.segmentGroup = r), (this.processChildren = e), (this.index = n);
  }
};
function _s(t, r, e) {
  if (t.isAbsolute) return new Ae(r, !0, 0);
  if (!e) return new Ae(r, !1, NaN);
  if (e.parent === null) return new Ae(e, !0, 0);
  let n = Bt(t.commands[0]) ? 0 : 1,
    i = e.segments.length - 1 + n;
  return Ns(e, i, t.numberOfDoubleDots);
}
function Ns(t, r, e) {
  let n = t,
    i = r,
    o = e;
  for (; o > i; ) {
    if (((o -= i), (n = n.parent), !n)) throw new T(4005, !1);
    i = n.segments.length;
  }
  return new Ae(n, !1, i - o);
}
function xs(t) {
  return nt(t[0]) ? t[0].outlets : { [p]: t };
}
function Hi(t, r, e) {
  if (((t ??= new w([], {})), t.segments.length === 0 && t.hasChildren()))
    return tt(t, r, e);
  let n = Us(t, r, e),
    i = e.slice(n.commandIndex);
  if (n.match && n.pathIndex < t.segments.length) {
    let o = new w(t.segments.slice(0, n.pathIndex), {});
    return (
      (o.children[p] = new w(t.segments.slice(n.pathIndex), t.children)),
      tt(o, 0, i)
    );
  } else
    return n.match && i.length === 0
      ? new w(t.segments, {})
      : n.match && !t.hasChildren()
      ? Xr(t, r, e)
      : n.match
      ? tt(t, 0, i)
      : Xr(t, r, e);
}
function tt(t, r, e) {
  if (e.length === 0) return new w(t.segments, {});
  {
    let n = xs(e),
      i = {};
    if (
      Object.keys(n).some((o) => o !== p) &&
      t.children[p] &&
      t.numberOfChildren === 1 &&
      t.children[p].segments.length === 0
    ) {
      let o = tt(t.children[p], r, e);
      return new w(t.segments, o.children);
    }
    return (
      Object.entries(n).forEach(([o, s]) => {
        typeof s == "string" && (s = [s]),
          s !== null && (i[o] = Hi(t.children[o], r, s));
      }),
      Object.entries(t.children).forEach(([o, s]) => {
        n[o] === void 0 && (i[o] = s);
      }),
      new w(t.segments, i)
    );
  }
}
function Us(t, r, e) {
  let n = 0,
    i = r,
    o = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; i < t.segments.length; ) {
    if (n >= e.length) return o;
    let s = t.segments[i],
      a = e[n];
    if (nt(a)) break;
    let c = `${a}`,
      u = n < e.length - 1 ? e[n + 1] : null;
    if (i > 0 && c === void 0) break;
    if (c && u && typeof u == "object" && u.outlets === void 0) {
      if (!Ci(c, u, s)) return o;
      n += 2;
    } else {
      if (!Ci(c, {}, s)) return o;
      n++;
    }
    i++;
  }
  return { match: !0, pathIndex: i, commandIndex: n };
}
function Xr(t, r, e) {
  let n = t.segments.slice(0, r),
    i = 0;
  for (; i < e.length; ) {
    let o = e[i];
    if (nt(o)) {
      let c = ks(o.outlets);
      return new w(n, c);
    }
    if (i === 0 && Bt(e[0])) {
      let c = t.segments[r];
      n.push(new se(c.path, Ei(e[0]))), i++;
      continue;
    }
    let s = nt(o) ? o.outlets[p] : `${o}`,
      a = i < e.length - 1 ? e[i + 1] : null;
    s && a && Bt(a)
      ? (n.push(new se(s, Ei(a))), (i += 2))
      : (n.push(new se(s, {})), i++);
  }
  return new w(n, {});
}
function ks(t) {
  let r = {};
  return (
    Object.entries(t).forEach(([e, n]) => {
      typeof n == "string" && (n = [n]),
        n !== null && (r[e] = Xr(new w([], {}), 0, n));
    }),
    r
  );
}
function Ei(t) {
  let r = {};
  return Object.entries(t).forEach(([e, n]) => (r[e] = `${n}`)), r;
}
function Ci(t, r, e) {
  return t == e.path && G(r, e.parameters);
}
var zt = "imperative",
  M = (function (t) {
    return (
      (t[(t.NavigationStart = 0)] = "NavigationStart"),
      (t[(t.NavigationEnd = 1)] = "NavigationEnd"),
      (t[(t.NavigationCancel = 2)] = "NavigationCancel"),
      (t[(t.NavigationError = 3)] = "NavigationError"),
      (t[(t.RoutesRecognized = 4)] = "RoutesRecognized"),
      (t[(t.ResolveStart = 5)] = "ResolveStart"),
      (t[(t.ResolveEnd = 6)] = "ResolveEnd"),
      (t[(t.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (t[(t.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (t[(t.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (t[(t.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (t[(t.ChildActivationStart = 11)] = "ChildActivationStart"),
      (t[(t.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (t[(t.ActivationStart = 13)] = "ActivationStart"),
      (t[(t.ActivationEnd = 14)] = "ActivationEnd"),
      (t[(t.Scroll = 15)] = "Scroll"),
      (t[(t.NavigationSkipped = 16)] = "NavigationSkipped"),
      t
    );
  })(M || {}),
  L = class {
    id;
    url;
    constructor(r, e) {
      (this.id = r), (this.url = e);
    }
  },
  ce = class extends L {
    type = M.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(r, e, n = "imperative", i = null) {
      super(r, e), (this.navigationTrigger = n), (this.restoredState = i);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  B = class extends L {
    urlAfterRedirects;
    type = M.NavigationEnd;
    constructor(r, e, n) {
      super(r, e), (this.urlAfterRedirects = n);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  U = (function (t) {
    return (
      (t[(t.Redirect = 0)] = "Redirect"),
      (t[(t.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (t[(t.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (t[(t.GuardRejected = 3)] = "GuardRejected"),
      t
    );
  })(U || {}),
  Pe = (function (t) {
    return (
      (t[(t.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (t[(t.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      t
    );
  })(Pe || {}),
  W = class extends L {
    reason;
    code;
    type = M.NavigationCancel;
    constructor(r, e, n, i) {
      super(r, e), (this.reason = n), (this.code = i);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  J = class extends L {
    reason;
    code;
    type = M.NavigationSkipped;
    constructor(r, e, n, i) {
      super(r, e), (this.reason = n), (this.code = i);
    }
  },
  _e = class extends L {
    error;
    target;
    type = M.NavigationError;
    constructor(r, e, n, i) {
      super(r, e), (this.error = n), (this.target = i);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  it = class extends L {
    urlAfterRedirects;
    state;
    type = M.RoutesRecognized;
    constructor(r, e, n, i) {
      super(r, e), (this.urlAfterRedirects = n), (this.state = i);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Ht = class extends L {
    urlAfterRedirects;
    state;
    type = M.GuardsCheckStart;
    constructor(r, e, n, i) {
      super(r, e), (this.urlAfterRedirects = n), (this.state = i);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  qt = class extends L {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = M.GuardsCheckEnd;
    constructor(r, e, n, i, o) {
      super(r, e),
        (this.urlAfterRedirects = n),
        (this.state = i),
        (this.shouldActivate = o);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  Gt = class extends L {
    urlAfterRedirects;
    state;
    type = M.ResolveStart;
    constructor(r, e, n, i) {
      super(r, e), (this.urlAfterRedirects = n), (this.state = i);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Wt = class extends L {
    urlAfterRedirects;
    state;
    type = M.ResolveEnd;
    constructor(r, e, n, i) {
      super(r, e), (this.urlAfterRedirects = n), (this.state = i);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Xt = class {
    route;
    type = M.RouteConfigLoadStart;
    constructor(r) {
      this.route = r;
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  Jt = class {
    route;
    type = M.RouteConfigLoadEnd;
    constructor(r) {
      this.route = r;
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  Yt = class {
    snapshot;
    type = M.ChildActivationStart;
    constructor(r) {
      this.snapshot = r;
    }
    toString() {
      return `ChildActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Zt = class {
    snapshot;
    type = M.ChildActivationEnd;
    constructor(r) {
      this.snapshot = r;
    }
    toString() {
      return `ChildActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Kt = class {
    snapshot;
    type = M.ActivationStart;
    constructor(r) {
      this.snapshot = r;
    }
    toString() {
      return `ActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Qt = class {
    snapshot;
    type = M.ActivationEnd;
    constructor(r) {
      this.snapshot = r;
    }
    toString() {
      return `ActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Ne = class {
    routerEvent;
    position;
    anchor;
    type = M.Scroll;
    constructor(r, e, n) {
      (this.routerEvent = r), (this.position = e), (this.anchor = n);
    }
    toString() {
      let r = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${r}')`;
    }
  },
  ot = class {},
  xe = class {
    url;
    navigationBehaviorOptions;
    constructor(r, e) {
      (this.url = r), (this.navigationBehaviorOptions = e);
    }
  };
function Ls(t, r) {
  return (
    t.providers &&
      !t._injector &&
      (t._injector = Tt(t.providers, r, `Route: ${t.path}`)),
    t._injector ?? r
  );
}
function z(t) {
  return t.outlet || p;
}
function js(t, r) {
  let e = t.filter((n) => z(n) === r);
  return e.push(...t.filter((n) => z(n) !== r)), e;
}
function ht(t) {
  if (!t) return null;
  if (t.routeConfig?._injector) return t.routeConfig._injector;
  for (let r = t.parent; r; r = r.parent) {
    let e = r.routeConfig;
    if (e?._loadedInjector) return e._loadedInjector;
    if (e?._injector) return e._injector;
  }
  return null;
}
var er = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() {
      return ht(this.route?.snapshot) ?? this.rootInjector;
    }
    constructor(r) {
      (this.rootInjector = r), (this.children = new ge(this.rootInjector));
    }
  },
  ge = (() => {
    class t {
      rootInjector;
      contexts = new Map();
      constructor(e) {
        this.rootInjector = e;
      }
      onChildOutletCreated(e, n) {
        let i = this.getOrCreateContext(e);
        (i.outlet = n), this.contexts.set(e, i);
      }
      onChildOutletDestroyed(e) {
        let n = this.getContext(e);
        n && ((n.outlet = null), (n.attachRef = null));
      }
      onOutletDeactivated() {
        let e = this.contexts;
        return (this.contexts = new Map()), e;
      }
      onOutletReAttached(e) {
        this.contexts = e;
      }
      getOrCreateContext(e) {
        let n = this.getContext(e);
        return (
          n || ((n = new er(this.rootInjector)), this.contexts.set(e, n)), n
        );
      }
      getContext(e) {
        return this.contexts.get(e) || null;
      }
      static ɵfac = function (n) {
        return new (n || t)(g(ie));
      };
      static ɵprov = m({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })(),
  tr = class {
    _root;
    constructor(r) {
      this._root = r;
    }
    get root() {
      return this._root.value;
    }
    parent(r) {
      let e = this.pathFromRoot(r);
      return e.length > 1 ? e[e.length - 2] : null;
    }
    children(r) {
      let e = Jr(r, this._root);
      return e ? e.children.map((n) => n.value) : [];
    }
    firstChild(r) {
      let e = Jr(r, this._root);
      return e && e.children.length > 0 ? e.children[0].value : null;
    }
    siblings(r) {
      let e = Yr(r, this._root);
      return e.length < 2
        ? []
        : e[e.length - 2].children.map((i) => i.value).filter((i) => i !== r);
    }
    pathFromRoot(r) {
      return Yr(r, this._root).map((e) => e.value);
    }
  };
function Jr(t, r) {
  if (t === r.value) return r;
  for (let e of r.children) {
    let n = Jr(t, e);
    if (n) return n;
  }
  return null;
}
function Yr(t, r) {
  if (t === r.value) return [r];
  for (let e of r.children) {
    let n = Yr(t, e);
    if (n.length) return n.unshift(r), n;
  }
  return [];
}
var k = class {
  value;
  children;
  constructor(r, e) {
    (this.value = r), (this.children = e);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function Me(t) {
  let r = {};
  return t && t.children.forEach((e) => (r[e.value.outlet] = e)), r;
}
var st = class extends tr {
  snapshot;
  constructor(r, e) {
    super(r), (this.snapshot = e), on(this, r);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function qi(t) {
  let r = $s(t),
    e = new j([new se("", {})]),
    n = new j({}),
    i = new j({}),
    o = new j({}),
    s = new j(""),
    a = new V(e, n, o, s, i, p, t, r.root);
  return (a.snapshot = r.root), new st(new k(a, []), r);
}
function $s(t) {
  let r = {},
    e = {},
    n = {},
    i = "",
    o = new he([], r, n, i, e, p, t, null, {});
  return new at("", new k(o, []));
}
var V = class {
  urlSubject;
  paramsSubject;
  queryParamsSubject;
  fragmentSubject;
  dataSubject;
  outlet;
  component;
  snapshot;
  _futureSnapshot;
  _routerState;
  _paramMap;
  _queryParamMap;
  title;
  url;
  params;
  queryParams;
  fragment;
  data;
  constructor(r, e, n, i, o, s, a, c) {
    (this.urlSubject = r),
      (this.paramsSubject = e),
      (this.queryParamsSubject = n),
      (this.fragmentSubject = i),
      (this.dataSubject = o),
      (this.outlet = s),
      (this.component = a),
      (this._futureSnapshot = c),
      (this.title = this.dataSubject?.pipe(y((u) => u[dt])) ?? f(void 0)),
      (this.url = r),
      (this.params = e),
      (this.queryParams = n),
      (this.fragment = i),
      (this.data = o);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(y((r) => fe(r)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(y((r) => fe(r)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function rr(t, r, e = "emptyOnly") {
  let n,
    { routeConfig: i } = t;
  return (
    r !== null &&
    (e === "always" ||
      i?.path === "" ||
      (!r.component && !r.routeConfig?.loadComponent))
      ? (n = {
          params: d(d({}, r.params), t.params),
          data: d(d({}, r.data), t.data),
          resolve: d(d(d(d({}, t.data), r.data), i?.data), t._resolvedData),
        })
      : (n = {
          params: d({}, t.params),
          data: d({}, t.data),
          resolve: d(d({}, t.data), t._resolvedData ?? {}),
        }),
    i && Wi(i) && (n.resolve[dt] = i.title),
    n
  );
}
var he = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    get title() {
      return this.data?.[dt];
    }
    constructor(r, e, n, i, o, s, a, c, u) {
      (this.url = r),
        (this.params = e),
        (this.queryParams = n),
        (this.fragment = i),
        (this.data = o),
        (this.outlet = s),
        (this.component = a),
        (this.routeConfig = c),
        (this._resolve = u);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= fe(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= fe(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let r = this.url.map((n) => n.toString()).join("/"),
        e = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${r}', path:'${e}')`;
    }
  },
  at = class extends tr {
    url;
    constructor(r, e) {
      super(e), (this.url = r), on(this, e);
    }
    toString() {
      return Gi(this._root);
    }
  };
function on(t, r) {
  (r.value._routerState = t), r.children.forEach((e) => on(t, e));
}
function Gi(t) {
  let r = t.children.length > 0 ? ` { ${t.children.map(Gi).join(", ")} } ` : "";
  return `${t.value}${r}`;
}
function Br(t) {
  if (t.snapshot) {
    let r = t.snapshot,
      e = t._futureSnapshot;
    (t.snapshot = e),
      G(r.queryParams, e.queryParams) ||
        t.queryParamsSubject.next(e.queryParams),
      r.fragment !== e.fragment && t.fragmentSubject.next(e.fragment),
      G(r.params, e.params) || t.paramsSubject.next(e.params),
      fs(r.url, e.url) || t.urlSubject.next(e.url),
      G(r.data, e.data) || t.dataSubject.next(e.data);
  } else
    (t.snapshot = t._futureSnapshot),
      t.dataSubject.next(t._futureSnapshot.data);
}
function Zr(t, r) {
  let e = G(t.params, r.params) && vs(t.url, r.url),
    n = !t.parent != !r.parent;
  return e && !n && (!t.parent || Zr(t.parent, r.parent));
}
function Wi(t) {
  return typeof t.title == "string" || t.title === null;
}
var Xi = new C(""),
  sn = (() => {
    class t {
      activated = null;
      get activatedComponentRef() {
        return this.activated;
      }
      _activatedRoute = null;
      name = p;
      activateEvents = new we();
      deactivateEvents = new we();
      attachEvents = new we();
      detachEvents = new we();
      routerOutletData = Mn(void 0);
      parentContexts = h(ge);
      location = h(kn);
      changeDetector = h(Ar);
      inputBinder = h(ft, { optional: !0 });
      supportsBindingToComponentInputs = !0;
      ngOnChanges(e) {
        if (e.name) {
          let { firstChange: n, previousValue: i } = e.name;
          if (n) return;
          this.isTrackedInParentContexts(i) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(e) {
        return this.parentContexts.getContext(e)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let e = this.parentContexts.getContext(this.name);
        e?.route &&
          (e.attachRef
            ? this.attach(e.attachRef, e.route)
            : this.activateWith(e.route, e.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new T(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new T(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new T(4012, !1);
        this.location.detach();
        let e = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(e.instance),
          e
        );
      }
      attach(e, n) {
        (this.activated = e),
          (this._activatedRoute = n),
          this.location.insert(e.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(e.instance);
      }
      deactivate() {
        if (this.activated) {
          let e = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(e);
        }
      }
      activateWith(e, n) {
        if (this.isActivated) throw new T(4013, !1);
        this._activatedRoute = e;
        let i = this.location,
          s = e.snapshot.component,
          a = this.parentContexts.getOrCreateContext(this.name).children,
          c = new Kr(e, a, i.injector, this.routerOutletData);
        (this.activated = i.createComponent(s, {
          index: i.length,
          injector: c,
          environmentInjector: n,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵdir = Cr({
        type: t,
        selectors: [["router-outlet"]],
        inputs: { name: "name", routerOutletData: [1, "routerOutletData"] },
        outputs: {
          activateEvents: "activate",
          deactivateEvents: "deactivate",
          attachEvents: "attach",
          detachEvents: "detach",
        },
        exportAs: ["outlet"],
        features: [Rr],
      });
    }
    return t;
  })(),
  Kr = class {
    route;
    childContexts;
    parent;
    outletData;
    constructor(r, e, n, i) {
      (this.route = r),
        (this.childContexts = e),
        (this.parent = n),
        (this.outletData = i);
    }
    get(r, e) {
      return r === V
        ? this.route
        : r === ge
        ? this.childContexts
        : r === Xi
        ? this.outletData
        : this.parent.get(r, e);
    }
  },
  ft = new C(""),
  an = (() => {
    class t {
      outletDataSubscriptions = new Map();
      bindActivatedRouteToOutletComponent(e) {
        this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e);
      }
      unsubscribeFromRouteData(e) {
        this.outletDataSubscriptions.get(e)?.unsubscribe(),
          this.outletDataSubscriptions.delete(e);
      }
      subscribeToRouteData(e) {
        let { activatedRoute: n } = e,
          i = Rt([n.queryParams, n.params, n.data])
            .pipe(
              P(
                ([o, s, a], c) => (
                  (a = d(d(d({}, o), s), a)),
                  c === 0 ? f(a) : Promise.resolve(a)
                )
              )
            )
            .subscribe((o) => {
              if (
                !e.isActivated ||
                !e.activatedComponentRef ||
                e.activatedRoute !== n ||
                n.component === null
              ) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              let s = qn(n.component);
              if (!s) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              for (let { templateName: a } of s.inputs)
                e.activatedComponentRef.setInput(a, o[a]);
            });
        this.outletDataSubscriptions.set(e, i);
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = m({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  cn = (() => {
    class t {
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵcmp = jn({
        type: t,
        selectors: [["ng-component"]],
        exportAs: ["emptyRouterOutlet"],
        decls: 1,
        vars: 0,
        template: function (n, i) {
          n & 1 && Bn(0, "router-outlet");
        },
        dependencies: [sn],
        encapsulation: 2,
      });
    }
    return t;
  })();
function un(t) {
  let r = t.children && t.children.map(un),
    e = r ? N(d({}, t), { children: r }) : d({}, t);
  return (
    !e.component &&
      !e.loadComponent &&
      (r || e.loadChildren) &&
      e.outlet &&
      e.outlet !== p &&
      (e.component = cn),
    e
  );
}
function Fs(t, r, e) {
  let n = ct(t, r._root, e ? e._root : void 0);
  return new st(n, r);
}
function ct(t, r, e) {
  if (e && t.shouldReuseRoute(r.value, e.value.snapshot)) {
    let n = e.value;
    n._futureSnapshot = r.value;
    let i = zs(t, r, e);
    return new k(n, i);
  } else {
    if (t.shouldAttach(r.value)) {
      let o = t.retrieve(r.value);
      if (o !== null) {
        let s = o.route;
        return (
          (s.value._futureSnapshot = r.value),
          (s.children = r.children.map((a) => ct(t, a))),
          s
        );
      }
    }
    let n = Bs(r.value),
      i = r.children.map((o) => ct(t, o));
    return new k(n, i);
  }
}
function zs(t, r, e) {
  return r.children.map((n) => {
    for (let i of e.children)
      if (t.shouldReuseRoute(n.value, i.value.snapshot)) return ct(t, n, i);
    return ct(t, n);
  });
}
function Bs(t) {
  return new V(
    new j(t.url),
    new j(t.params),
    new j(t.queryParams),
    new j(t.fragment),
    new j(t.data),
    t.outlet,
    t.component,
    t
  );
}
var Ue = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(r, e) {
      (this.redirectTo = r), (this.navigationBehaviorOptions = e);
    }
  },
  Ji = "ngNavigationCancelingError";
function nr(t, r) {
  let { redirectTo: e, navigationBehaviorOptions: n } = De(r)
      ? { redirectTo: r, navigationBehaviorOptions: void 0 }
      : r,
    i = Yi(!1, U.Redirect);
  return (i.url = e), (i.navigationBehaviorOptions = n), i;
}
function Yi(t, r) {
  let e = new Error(`NavigationCancelingError: ${t || ""}`);
  return (e[Ji] = !0), (e.cancellationCode = r), e;
}
function Vs(t) {
  return Zi(t) && De(t.url);
}
function Zi(t) {
  return !!t && t[Ji];
}
var Hs = (t, r, e, n) =>
    y(
      (i) => (
        new Qr(r, i.targetRouterState, i.currentRouterState, e, n).activate(t),
        i
      )
    ),
  Qr = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(r, e, n, i, o) {
      (this.routeReuseStrategy = r),
        (this.futureState = e),
        (this.currState = n),
        (this.forwardEvent = i),
        (this.inputBindingEnabled = o);
    }
    activate(r) {
      let e = this.futureState._root,
        n = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(e, n, r),
        Br(this.futureState.root),
        this.activateChildRoutes(e, n, r);
    }
    deactivateChildRoutes(r, e, n) {
      let i = Me(e);
      r.children.forEach((o) => {
        let s = o.value.outlet;
        this.deactivateRoutes(o, i[s], n), delete i[s];
      }),
        Object.values(i).forEach((o) => {
          this.deactivateRouteAndItsChildren(o, n);
        });
    }
    deactivateRoutes(r, e, n) {
      let i = r.value,
        o = e ? e.value : null;
      if (i === o)
        if (i.component) {
          let s = n.getContext(i.outlet);
          s && this.deactivateChildRoutes(r, e, s.children);
        } else this.deactivateChildRoutes(r, e, n);
      else o && this.deactivateRouteAndItsChildren(e, n);
    }
    deactivateRouteAndItsChildren(r, e) {
      r.value.component &&
      this.routeReuseStrategy.shouldDetach(r.value.snapshot)
        ? this.detachAndStoreRouteSubtree(r, e)
        : this.deactivateRouteAndOutlet(r, e);
    }
    detachAndStoreRouteSubtree(r, e) {
      let n = e.getContext(r.value.outlet),
        i = n && r.value.component ? n.children : e,
        o = Me(r);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
      if (n && n.outlet) {
        let s = n.outlet.detach(),
          a = n.children.onOutletDeactivated();
        this.routeReuseStrategy.store(r.value.snapshot, {
          componentRef: s,
          route: r,
          contexts: a,
        });
      }
    }
    deactivateRouteAndOutlet(r, e) {
      let n = e.getContext(r.value.outlet),
        i = n && r.value.component ? n.children : e,
        o = Me(r);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
      n &&
        (n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated()),
        (n.attachRef = null),
        (n.route = null));
    }
    activateChildRoutes(r, e, n) {
      let i = Me(e);
      r.children.forEach((o) => {
        this.activateRoutes(o, i[o.value.outlet], n),
          this.forwardEvent(new Qt(o.value.snapshot));
      }),
        r.children.length && this.forwardEvent(new Zt(r.value.snapshot));
    }
    activateRoutes(r, e, n) {
      let i = r.value,
        o = e ? e.value : null;
      if ((Br(i), i === o))
        if (i.component) {
          let s = n.getOrCreateContext(i.outlet);
          this.activateChildRoutes(r, e, s.children);
        } else this.activateChildRoutes(r, e, n);
      else if (i.component) {
        let s = n.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
          let a = this.routeReuseStrategy.retrieve(i.snapshot);
          this.routeReuseStrategy.store(i.snapshot, null),
            s.children.onOutletReAttached(a.contexts),
            (s.attachRef = a.componentRef),
            (s.route = a.route.value),
            s.outlet && s.outlet.attach(a.componentRef, a.route.value),
            Br(a.route.value),
            this.activateChildRoutes(r, null, s.children);
        } else
          (s.attachRef = null),
            (s.route = i),
            s.outlet && s.outlet.activateWith(i, s.injector),
            this.activateChildRoutes(r, null, s.children);
      } else this.activateChildRoutes(r, null, n);
    }
  },
  ir = class {
    path;
    route;
    constructor(r) {
      (this.path = r), (this.route = this.path[this.path.length - 1]);
    }
  },
  Oe = class {
    component;
    route;
    constructor(r, e) {
      (this.component = r), (this.route = e);
    }
  };
function qs(t, r, e) {
  let n = t._root,
    i = r ? r._root : null;
  return et(n, i, e, [n.value]);
}
function Gs(t) {
  let r = t.routeConfig ? t.routeConfig.canActivateChild : null;
  return !r || r.length === 0 ? null : { node: t, guards: r };
}
function Le(t, r) {
  let e = Symbol(),
    n = r.get(t, e);
  return n === e ? (typeof t == "function" && !Cn(t) ? t : r.get(t)) : n;
}
function et(
  t,
  r,
  e,
  n,
  i = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let o = Me(r);
  return (
    t.children.forEach((s) => {
      Ws(s, o[s.value.outlet], e, n.concat([s.value]), i),
        delete o[s.value.outlet];
    }),
    Object.entries(o).forEach(([s, a]) => rt(a, e.getContext(s), i)),
    i
  );
}
function Ws(
  t,
  r,
  e,
  n,
  i = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let o = t.value,
    s = r ? r.value : null,
    a = e ? e.getContext(t.value.outlet) : null;
  if (s && o.routeConfig === s.routeConfig) {
    let c = Xs(s, o, o.routeConfig.runGuardsAndResolvers);
    c
      ? i.canActivateChecks.push(new ir(n))
      : ((o.data = s.data), (o._resolvedData = s._resolvedData)),
      o.component ? et(t, r, a ? a.children : null, n, i) : et(t, r, e, n, i),
      c &&
        a &&
        a.outlet &&
        a.outlet.isActivated &&
        i.canDeactivateChecks.push(new Oe(a.outlet.component, s));
  } else
    s && rt(r, a, i),
      i.canActivateChecks.push(new ir(n)),
      o.component
        ? et(t, null, a ? a.children : null, n, i)
        : et(t, null, e, n, i);
  return i;
}
function Xs(t, r, e) {
  if (typeof e == "function") return e(t, r);
  switch (e) {
    case "pathParamsChange":
      return !de(t.url, r.url);
    case "pathParamsOrQueryParamsChange":
      return !de(t.url, r.url) || !G(t.queryParams, r.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !Zr(t, r) || !G(t.queryParams, r.queryParams);
    case "paramsChange":
    default:
      return !Zr(t, r);
  }
}
function rt(t, r, e) {
  let n = Me(t),
    i = t.value;
  Object.entries(n).forEach(([o, s]) => {
    i.component
      ? r
        ? rt(s, r.children.getContext(o), e)
        : rt(s, null, e)
      : rt(s, r, e);
  }),
    i.component
      ? r && r.outlet && r.outlet.isActivated
        ? e.canDeactivateChecks.push(new Oe(r.outlet.component, i))
        : e.canDeactivateChecks.push(new Oe(null, i))
      : e.canDeactivateChecks.push(new Oe(null, i));
}
function pt(t) {
  return typeof t == "function";
}
function Js(t) {
  return typeof t == "boolean";
}
function Ys(t) {
  return t && pt(t.canLoad);
}
function Zs(t) {
  return t && pt(t.canActivate);
}
function Ks(t) {
  return t && pt(t.canActivateChild);
}
function Qs(t) {
  return t && pt(t.canDeactivate);
}
function ea(t) {
  return t && pt(t.canMatch);
}
function Ki(t) {
  return t instanceof Rn || t?.name === "EmptyError";
}
var Lt = Symbol("INITIAL_VALUE");
function ke() {
  return P((t) =>
    Rt(t.map((r) => r.pipe(ye(1), Tn(Lt)))).pipe(
      y((r) => {
        for (let e of r)
          if (e !== !0) {
            if (e === Lt) return Lt;
            if (e === !1 || ta(e)) return e;
          }
        return !0;
      }),
      q((r) => r !== Lt),
      ye(1)
    )
  );
}
function ta(t) {
  return De(t) || t instanceof Ue;
}
function ra(t, r) {
  return x((e) => {
    let {
      targetSnapshot: n,
      currentSnapshot: i,
      guards: { canActivateChecks: o, canDeactivateChecks: s },
    } = e;
    return s.length === 0 && o.length === 0
      ? f(N(d({}, e), { guardsResult: !0 }))
      : na(s, n, i, t).pipe(
          x((a) => (a && Js(a) ? ia(n, o, t, r) : f(a))),
          y((a) => N(d({}, e), { guardsResult: a }))
        );
  });
}
function na(t, r, e, n) {
  return O(t).pipe(
    x((i) => ua(i.component, i.route, e, r, n)),
    ne((i) => i !== !0, !0)
  );
}
function ia(t, r, e, n) {
  return O(r).pipe(
    Z((i) =>
      wn(
        sa(i.route.parent, n),
        oa(i.route, n),
        ca(t, i.path, e),
        aa(t, i.route, e)
      )
    ),
    ne((i) => i !== !0, !0)
  );
}
function oa(t, r) {
  return t !== null && r && r(new Kt(t)), f(!0);
}
function sa(t, r) {
  return t !== null && r && r(new Yt(t)), f(!0);
}
function aa(t, r, e) {
  let n = r.routeConfig ? r.routeConfig.canActivate : null;
  if (!n || n.length === 0) return f(!0);
  let i = n.map((o) =>
    gr(() => {
      let s = ht(r) ?? e,
        a = Le(o, s),
        c = Zs(a) ? a.canActivate(r, t) : $(s, () => a(r, t));
      return ue(c).pipe(ne());
    })
  );
  return f(i).pipe(ke());
}
function ca(t, r, e) {
  let n = r[r.length - 1],
    o = r
      .slice(0, r.length - 1)
      .reverse()
      .map((s) => Gs(s))
      .filter((s) => s !== null)
      .map((s) =>
        gr(() => {
          let a = s.guards.map((c) => {
            let u = ht(s.node) ?? e,
              l = Le(c, u),
              v = Ks(l) ? l.canActivateChild(n, t) : $(u, () => l(n, t));
            return ue(v).pipe(ne());
          });
          return f(a).pipe(ke());
        })
      );
  return f(o).pipe(ke());
}
function ua(t, r, e, n, i) {
  let o = r && r.routeConfig ? r.routeConfig.canDeactivate : null;
  if (!o || o.length === 0) return f(!0);
  let s = o.map((a) => {
    let c = ht(r) ?? i,
      u = Le(a, c),
      l = Qs(u) ? u.canDeactivate(t, r, e, n) : $(c, () => u(t, r, e, n));
    return ue(l).pipe(ne());
  });
  return f(s).pipe(ke());
}
function la(t, r, e, n) {
  let i = r.canLoad;
  if (i === void 0 || i.length === 0) return f(!0);
  let o = i.map((s) => {
    let a = Le(s, t),
      c = Ys(a) ? a.canLoad(r, e) : $(t, () => a(r, e));
    return ue(c);
  });
  return f(o).pipe(ke(), Qi(n));
}
function Qi(t) {
  return vn(
    D((r) => {
      if (typeof r != "boolean") throw nr(t, r);
    }),
    y((r) => r === !0)
  );
}
function da(t, r, e, n) {
  let i = r.canMatch;
  if (!i || i.length === 0) return f(!0);
  let o = i.map((s) => {
    let a = Le(s, t),
      c = ea(a) ? a.canMatch(r, e) : $(t, () => a(r, e));
    return ue(c);
  });
  return f(o).pipe(ke(), Qi(n));
}
var ut = class {
    segmentGroup;
    constructor(r) {
      this.segmentGroup = r || null;
    }
  },
  lt = class extends Error {
    urlTree;
    constructor(r) {
      super(), (this.urlTree = r);
    }
  };
function Ie(t) {
  return je(new ut(t));
}
function ha(t) {
  return je(new T(4e3, !1));
}
function fa(t) {
  return je(Yi(!1, U.GuardRejected));
}
var en = class {
    urlSerializer;
    urlTree;
    constructor(r, e) {
      (this.urlSerializer = r), (this.urlTree = e);
    }
    lineralizeSegments(r, e) {
      let n = [],
        i = e.root;
      for (;;) {
        if (((n = n.concat(i.segments)), i.numberOfChildren === 0)) return f(n);
        if (i.numberOfChildren > 1 || !i.children[p])
          return ha(`${r.redirectTo}`);
        i = i.children[p];
      }
    }
    applyRedirectCommands(r, e, n, i, o) {
      if (typeof e != "string") {
        let a = e,
          {
            queryParams: c,
            fragment: u,
            routeConfig: l,
            url: v,
            outlet: b,
            params: E,
            data: A,
            title: R,
          } = i,
          S = $(o, () =>
            a({
              params: E,
              data: A,
              queryParams: c,
              fragment: u,
              routeConfig: l,
              url: v,
              outlet: b,
              title: R,
            })
          );
        if (S instanceof X) throw new lt(S);
        e = S;
      }
      let s = this.applyRedirectCreateUrlTree(
        e,
        this.urlSerializer.parse(e),
        r,
        n
      );
      if (e[0] === "/") throw new lt(s);
      return s;
    }
    applyRedirectCreateUrlTree(r, e, n, i) {
      let o = this.createSegmentGroup(r, e.root, n, i);
      return new X(
        o,
        this.createQueryParams(e.queryParams, this.urlTree.queryParams),
        e.fragment
      );
    }
    createQueryParams(r, e) {
      let n = {};
      return (
        Object.entries(r).forEach(([i, o]) => {
          if (typeof o == "string" && o[0] === ":") {
            let a = o.substring(1);
            n[i] = e[a];
          } else n[i] = o;
        }),
        n
      );
    }
    createSegmentGroup(r, e, n, i) {
      let o = this.createSegments(r, e.segments, n, i),
        s = {};
      return (
        Object.entries(e.children).forEach(([a, c]) => {
          s[a] = this.createSegmentGroup(r, c, n, i);
        }),
        new w(o, s)
      );
    }
    createSegments(r, e, n, i) {
      return e.map((o) =>
        o.path[0] === ":" ? this.findPosParam(r, o, i) : this.findOrReturn(o, n)
      );
    }
    findPosParam(r, e, n) {
      let i = n[e.path.substring(1)];
      if (!i) throw new T(4001, !1);
      return i;
    }
    findOrReturn(r, e) {
      let n = 0;
      for (let i of e) {
        if (i.path === r.path) return e.splice(n), i;
        n++;
      }
      return r;
    }
  },
  tn = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function pa(t, r, e, n, i) {
  let o = eo(t, r, e);
  return o.matched
    ? ((n = Ls(r, n)),
      da(n, r, e, i).pipe(y((s) => (s === !0 ? o : d({}, tn)))))
    : f(o);
}
function eo(t, r, e) {
  if (r.path === "**") return ga(e);
  if (r.path === "")
    return r.pathMatch === "full" && (t.hasChildren() || e.length > 0)
      ? d({}, tn)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: e,
          parameters: {},
          positionalParamSegments: {},
        };
  let i = (r.matcher || Oi)(e, t, r);
  if (!i) return d({}, tn);
  let o = {};
  Object.entries(i.posParams ?? {}).forEach(([a, c]) => {
    o[a] = c.path;
  });
  let s =
    i.consumed.length > 0
      ? d(d({}, o), i.consumed[i.consumed.length - 1].parameters)
      : o;
  return {
    matched: !0,
    consumedSegments: i.consumed,
    remainingSegments: e.slice(i.consumed.length),
    parameters: s,
    positionalParamSegments: i.posParams ?? {},
  };
}
function ga(t) {
  return {
    matched: !0,
    parameters: t.length > 0 ? Pi(t).parameters : {},
    consumedSegments: t,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function Ii(t, r, e, n) {
  return e.length > 0 && ya(t, e, n)
    ? {
        segmentGroup: new w(r, va(n, new w(e, t.children))),
        slicedSegments: [],
      }
    : e.length === 0 && Ra(t, e, n)
    ? {
        segmentGroup: new w(t.segments, ma(t, e, n, t.children)),
        slicedSegments: e,
      }
    : { segmentGroup: new w(t.segments, t.children), slicedSegments: e };
}
function ma(t, r, e, n) {
  let i = {};
  for (let o of e)
    if (sr(t, r, o) && !n[z(o)]) {
      let s = new w([], {});
      i[z(o)] = s;
    }
  return d(d({}, n), i);
}
function va(t, r) {
  let e = {};
  e[p] = r;
  for (let n of t)
    if (n.path === "" && z(n) !== p) {
      let i = new w([], {});
      e[z(n)] = i;
    }
  return e;
}
function ya(t, r, e) {
  return e.some((n) => sr(t, r, n) && z(n) !== p);
}
function Ra(t, r, e) {
  return e.some((n) => sr(t, r, n));
}
function sr(t, r, e) {
  return (t.hasChildren() || r.length > 0) && e.pathMatch === "full"
    ? !1
    : e.path === "";
}
function wa(t, r, e) {
  return r.length === 0 && !t.children[e];
}
var rn = class {};
function Sa(t, r, e, n, i, o, s = "emptyOnly") {
  return new nn(t, r, e, n, i, s, o).recognize();
}
var ba = 31,
  nn = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(r, e, n, i, o, s, a) {
      (this.injector = r),
        (this.configLoader = e),
        (this.rootComponentType = n),
        (this.config = i),
        (this.urlTree = o),
        (this.paramsInheritanceStrategy = s),
        (this.urlSerializer = a),
        (this.applyRedirects = new en(this.urlSerializer, this.urlTree));
    }
    noMatchError(r) {
      return new T(4002, `'${r.segmentGroup}'`);
    }
    recognize() {
      let r = Ii(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(r).pipe(
        y(({ children: e, rootSnapshot: n }) => {
          let i = new k(n, e),
            o = new at("", i),
            s = Fi(n, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (s.queryParams = this.urlTree.queryParams),
            (o.url = this.urlSerializer.serialize(s)),
            { state: o, tree: s }
          );
        })
      );
    }
    match(r) {
      let e = new he(
        [],
        Object.freeze({}),
        Object.freeze(d({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        p,
        this.rootComponentType,
        null,
        {}
      );
      return this.processSegmentGroup(this.injector, this.config, r, p, e).pipe(
        y((n) => ({ children: n, rootSnapshot: e })),
        re((n) => {
          if (n instanceof lt)
            return (this.urlTree = n.urlTree), this.match(n.urlTree.root);
          throw n instanceof ut ? this.noMatchError(n) : n;
        })
      );
    }
    processSegmentGroup(r, e, n, i, o) {
      return n.segments.length === 0 && n.hasChildren()
        ? this.processChildren(r, e, n, o)
        : this.processSegment(r, e, n, n.segments, i, !0, o).pipe(
            y((s) => (s instanceof k ? [s] : []))
          );
    }
    processChildren(r, e, n, i) {
      let o = [];
      for (let s of Object.keys(n.children))
        s === "primary" ? o.unshift(s) : o.push(s);
      return O(o).pipe(
        Z((s) => {
          let a = n.children[s],
            c = js(e, s);
          return this.processSegmentGroup(r, c, a, s, i);
        }),
        bn((s, a) => (s.push(...a), s)),
        mr(null),
        Sn(),
        x((s) => {
          if (s === null) return Ie(n);
          let a = to(s);
          return Ta(a), f(a);
        })
      );
    }
    processSegment(r, e, n, i, o, s, a) {
      return O(e).pipe(
        Z((c) =>
          this.processSegmentAgainstRoute(
            c._injector ?? r,
            e,
            c,
            n,
            i,
            o,
            s,
            a
          ).pipe(
            re((u) => {
              if (u instanceof ut) return f(null);
              throw u;
            })
          )
        ),
        ne((c) => !!c),
        re((c) => {
          if (Ki(c)) return wa(n, i, o) ? f(new rn()) : Ie(n);
          throw c;
        })
      );
    }
    processSegmentAgainstRoute(r, e, n, i, o, s, a, c) {
      return z(n) !== s && (s === p || !sr(i, o, n))
        ? Ie(i)
        : n.redirectTo === void 0
        ? this.matchSegmentAgainstRoute(r, i, n, o, s, c)
        : this.allowRedirects && a
        ? this.expandSegmentAgainstRouteUsingRedirect(r, i, e, n, o, s, c)
        : Ie(i);
    }
    expandSegmentAgainstRouteUsingRedirect(r, e, n, i, o, s, a) {
      let {
        matched: c,
        parameters: u,
        consumedSegments: l,
        positionalParamSegments: v,
        remainingSegments: b,
      } = eo(e, i, o);
      if (!c) return Ie(e);
      typeof i.redirectTo == "string" &&
        i.redirectTo[0] === "/" &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > ba && (this.allowRedirects = !1));
      let E = new he(
          o,
          u,
          Object.freeze(d({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          Mi(i),
          z(i),
          i.component ?? i._loadedComponent ?? null,
          i,
          Ai(i)
        ),
        A = rr(E, a, this.paramsInheritanceStrategy);
      (E.params = Object.freeze(A.params)), (E.data = Object.freeze(A.data));
      let R = this.applyRedirects.applyRedirectCommands(
        l,
        i.redirectTo,
        v,
        E,
        r
      );
      return this.applyRedirects
        .lineralizeSegments(i, R)
        .pipe(x((S) => this.processSegment(r, n, e, S.concat(b), s, !1, a)));
    }
    matchSegmentAgainstRoute(r, e, n, i, o, s) {
      let a = pa(e, n, i, r, this.urlSerializer);
      return (
        n.path === "**" && (e.children = {}),
        a.pipe(
          P((c) =>
            c.matched
              ? ((r = n._injector ?? r),
                this.getChildConfig(r, n, i).pipe(
                  P(({ routes: u }) => {
                    let l = n._loadedInjector ?? r,
                      {
                        parameters: v,
                        consumedSegments: b,
                        remainingSegments: E,
                      } = c,
                      A = new he(
                        b,
                        v,
                        Object.freeze(d({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        Mi(n),
                        z(n),
                        n.component ?? n._loadedComponent ?? null,
                        n,
                        Ai(n)
                      ),
                      R = rr(A, s, this.paramsInheritanceStrategy);
                    (A.params = Object.freeze(R.params)),
                      (A.data = Object.freeze(R.data));
                    let { segmentGroup: S, slicedSegments: H } = Ii(e, b, E, u);
                    if (H.length === 0 && S.hasChildren())
                      return this.processChildren(l, u, S, A).pipe(
                        y((I) => new k(A, I))
                      );
                    if (u.length === 0 && H.length === 0)
                      return f(new k(A, []));
                    let vt = z(n) === o;
                    return this.processSegment(
                      l,
                      u,
                      S,
                      H,
                      vt ? p : o,
                      !0,
                      A
                    ).pipe(y((I) => new k(A, I instanceof k ? [I] : [])));
                  })
                ))
              : Ie(e)
          )
        )
      );
    }
    getChildConfig(r, e, n) {
      return e.children
        ? f({ routes: e.children, injector: r })
        : e.loadChildren
        ? e._loadedRoutes !== void 0
          ? f({ routes: e._loadedRoutes, injector: e._loadedInjector })
          : la(r, e, n, this.urlSerializer).pipe(
              x((i) =>
                i
                  ? this.configLoader.loadChildren(r, e).pipe(
                      D((o) => {
                        (e._loadedRoutes = o.routes),
                          (e._loadedInjector = o.injector);
                      })
                    )
                  : fa(e)
              )
            )
        : f({ routes: [], injector: r });
    }
  };
function Ta(t) {
  t.sort((r, e) =>
    r.value.outlet === p
      ? -1
      : e.value.outlet === p
      ? 1
      : r.value.outlet.localeCompare(e.value.outlet)
  );
}
function Ea(t) {
  let r = t.value.routeConfig;
  return r && r.path === "";
}
function to(t) {
  let r = [],
    e = new Set();
  for (let n of t) {
    if (!Ea(n)) {
      r.push(n);
      continue;
    }
    let i = r.find((o) => n.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...n.children), e.add(i)) : r.push(n);
  }
  for (let n of e) {
    let i = to(n.children);
    r.push(new k(n.value, i));
  }
  return r.filter((n) => !e.has(n));
}
function Mi(t) {
  return t.data || {};
}
function Ai(t) {
  return t.resolve || {};
}
function Ca(t, r, e, n, i, o) {
  return x((s) =>
    Sa(t, r, e, n, s.extractedUrl, i, o).pipe(
      y(({ state: a, tree: c }) =>
        N(d({}, s), { targetSnapshot: a, urlAfterRedirects: c })
      )
    )
  );
}
function Ia(t, r) {
  return x((e) => {
    let {
      targetSnapshot: n,
      guards: { canActivateChecks: i },
    } = e;
    if (!i.length) return f(e);
    let o = new Set(i.map((c) => c.route)),
      s = new Set();
    for (let c of o) if (!s.has(c)) for (let u of ro(c)) s.add(u);
    let a = 0;
    return O(s).pipe(
      Z((c) =>
        o.has(c)
          ? Ma(c, n, t, r)
          : ((c.data = rr(c, c.parent, t).resolve), f(void 0))
      ),
      D(() => a++),
      vr(1),
      x((c) => (a === s.size ? f(e) : Y))
    );
  });
}
function ro(t) {
  let r = t.children.map((e) => ro(e)).flat();
  return [t, ...r];
}
function Ma(t, r, e, n) {
  let i = t.routeConfig,
    o = t._resolve;
  return (
    i?.title !== void 0 && !Wi(i) && (o[dt] = i.title),
    Aa(o, t, r, n).pipe(
      y(
        (s) => (
          (t._resolvedData = s), (t.data = rr(t, t.parent, e).resolve), null
        )
      )
    )
  );
}
function Aa(t, r, e, n) {
  let i = qr(t);
  if (i.length === 0) return f({});
  let o = {};
  return O(i).pipe(
    x((s) =>
      Oa(t[s], r, e, n).pipe(
        ne(),
        D((a) => {
          if (a instanceof Ue) throw nr(new ae(), a);
          o[s] = a;
        })
      )
    ),
    vr(1),
    y(() => o),
    re((s) => (Ki(s) ? Y : je(s)))
  );
}
function Oa(t, r, e, n) {
  let i = ht(r) ?? n,
    o = Le(t, i),
    s = o.resolve ? o.resolve(r, e) : $(i, () => o(r, e));
  return ue(s);
}
function Vr(t) {
  return P((r) => {
    let e = t(r);
    return e ? O(e).pipe(y(() => r)) : f(r);
  });
}
var ln = (() => {
    class t {
      buildTitle(e) {
        let n,
          i = e.root;
        for (; i !== void 0; )
          (n = this.getResolvedTitleForRoute(i) ?? n),
            (i = i.children.find((o) => o.outlet === p));
        return n;
      }
      getResolvedTitleForRoute(e) {
        return e.data[dt];
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = m({ token: t, factory: () => h(no), providedIn: "root" });
    }
    return t;
  })(),
  no = (() => {
    class t extends ln {
      title;
      constructor(e) {
        super(), (this.title = e);
      }
      updateTitle(e) {
        let n = this.buildTitle(e);
        n !== void 0 && this.title.setTitle(n);
      }
      static ɵfac = function (n) {
        return new (n || t)(g(wi));
      };
      static ɵprov = m({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })(),
  me = new C("", { providedIn: "root", factory: () => ({}) }),
  ve = new C(""),
  ar = (() => {
    class t {
      componentLoaders = new WeakMap();
      childrenLoaders = new WeakMap();
      onLoadStartListener;
      onLoadEndListener;
      compiler = h(Vn);
      loadComponent(e) {
        if (this.componentLoaders.get(e)) return this.componentLoaders.get(e);
        if (e._loadedComponent) return f(e._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(e);
        let n = ue(e.loadComponent()).pipe(
            y(oo),
            D((o) => {
              this.onLoadEndListener && this.onLoadEndListener(e),
                (e._loadedComponent = o);
            }),
            Re(() => {
              this.componentLoaders.delete(e);
            })
          ),
          i = new fr(n, () => new te()).pipe(hr());
        return this.componentLoaders.set(e, i), i;
      }
      loadChildren(e, n) {
        if (this.childrenLoaders.get(n)) return this.childrenLoaders.get(n);
        if (n._loadedRoutes)
          return f({ routes: n._loadedRoutes, injector: n._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(n);
        let o = io(n, this.compiler, e, this.onLoadEndListener).pipe(
            Re(() => {
              this.childrenLoaders.delete(n);
            })
          ),
          s = new fr(o, () => new te()).pipe(hr());
        return this.childrenLoaders.set(n, s), s;
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = m({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })();
function io(t, r, e, n) {
  return ue(t.loadChildren()).pipe(
    y(oo),
    x((i) =>
      i instanceof Ln || Array.isArray(i) ? f(i) : O(r.compileModuleAsync(i))
    ),
    y((i) => {
      n && n(t);
      let o,
        s,
        a = !1;
      return (
        Array.isArray(i)
          ? ((s = i), (a = !0))
          : ((o = i.create(e).injector),
            (s = o.get(ve, [], { optional: !0, self: !0 }).flat())),
        { routes: s.map(un), injector: o }
      );
    })
  );
}
function Da(t) {
  return t && typeof t == "object" && "default" in t;
}
function oo(t) {
  return Da(t) ? t.default : t;
}
var cr = (() => {
    class t {
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = m({ token: t, factory: () => h(Pa), providedIn: "root" });
    }
    return t;
  })(),
  Pa = (() => {
    class t {
      shouldProcessUrl(e) {
        return !0;
      }
      extract(e) {
        return e;
      }
      merge(e, n) {
        return e;
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = m({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })(),
  dn = new C(""),
  hn = new C("");
function so(t, r, e) {
  let n = t.get(hn),
    i = t.get(_);
  return t.get(K).runOutsideAngular(() => {
    if (!i.startViewTransition || n.skipNextTransition)
      return (n.skipNextTransition = !1), new Promise((u) => setTimeout(u));
    let o,
      s = new Promise((u) => {
        o = u;
      }),
      a = i.startViewTransition(() => (o(), _a(t))),
      { onViewTransitionCreated: c } = n;
    return c && $(t, () => c({ transition: a, from: r, to: e })), s;
  });
}
function _a(t) {
  return new Promise((r) => {
    Nn({ read: () => setTimeout(r) }, { injector: t });
  });
}
var fn = new C(""),
  ur = (() => {
    class t {
      currentNavigation = null;
      currentTransition = null;
      lastSuccessfulNavigation = null;
      events = new te();
      transitionAbortSubject = new te();
      configLoader = h(ar);
      environmentInjector = h(ie);
      destroyRef = h(Sr);
      urlSerializer = h(pe);
      rootContexts = h(ge);
      location = h(Se);
      inputBindingEnabled = h(ft, { optional: !0 }) !== null;
      titleStrategy = h(ln);
      options = h(me, { optional: !0 }) || {};
      paramsInheritanceStrategy =
        this.options.paramsInheritanceStrategy || "emptyOnly";
      urlHandlingStrategy = h(cr);
      createViewTransition = h(dn, { optional: !0 });
      navigationErrorHandler = h(fn, { optional: !0 });
      navigationId = 0;
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      transitions;
      afterPreactivation = () => f(void 0);
      rootComponentType = null;
      destroyed = !1;
      constructor() {
        let e = (i) => this.events.next(new Xt(i)),
          n = (i) => this.events.next(new Jt(i));
        (this.configLoader.onLoadEndListener = n),
          (this.configLoader.onLoadStartListener = e),
          this.destroyRef.onDestroy(() => {
            this.destroyed = !0;
          });
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(e) {
        let n = ++this.navigationId;
        this.transitions?.next(
          N(d({}, e), {
            extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl),
            targetSnapshot: null,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
            id: n,
          })
        );
      }
      setupNavigations(e) {
        return (
          (this.transitions = new j(null)),
          this.transitions.pipe(
            q((n) => n !== null),
            P((n) => {
              let i = !1,
                o = !1;
              return f(n).pipe(
                P((s) => {
                  if (this.navigationId > n.id)
                    return (
                      this.cancelNavigationTransition(
                        n,
                        "",
                        U.SupersededByNewNavigation
                      ),
                      Y
                    );
                  (this.currentTransition = n),
                    (this.currentNavigation = {
                      id: s.id,
                      initialUrl: s.rawUrl,
                      extractedUrl: s.extractedUrl,
                      targetBrowserUrl:
                        typeof s.extras.browserUrl == "string"
                          ? this.urlSerializer.parse(s.extras.browserUrl)
                          : s.extras.browserUrl,
                      trigger: s.source,
                      extras: s.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? N(d({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null,
                          })
                        : null,
                    });
                  let a =
                      !e.navigated ||
                      this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    c = s.extras.onSameUrlNavigation ?? e.onSameUrlNavigation;
                  if (!a && c !== "reload") {
                    let u = "";
                    return (
                      this.events.next(
                        new J(
                          s.id,
                          this.urlSerializer.serialize(s.rawUrl),
                          u,
                          Pe.IgnoredSameUrlNavigation
                        )
                      ),
                      s.resolve(!1),
                      Y
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))
                    return f(s).pipe(
                      P(
                        (u) => (
                          this.events.next(
                            new ce(
                              u.id,
                              this.urlSerializer.serialize(u.extractedUrl),
                              u.source,
                              u.restoredState
                            )
                          ),
                          u.id !== this.navigationId ? Y : Promise.resolve(u)
                        )
                      ),
                      Ca(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        e.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy
                      ),
                      D((u) => {
                        (n.targetSnapshot = u.targetSnapshot),
                          (n.urlAfterRedirects = u.urlAfterRedirects),
                          (this.currentNavigation = N(
                            d({}, this.currentNavigation),
                            { finalUrl: u.urlAfterRedirects }
                          ));
                        let l = new it(
                          u.id,
                          this.urlSerializer.serialize(u.extractedUrl),
                          this.urlSerializer.serialize(u.urlAfterRedirects),
                          u.targetSnapshot
                        );
                        this.events.next(l);
                      })
                    );
                  if (
                    a &&
                    this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)
                  ) {
                    let {
                        id: u,
                        extractedUrl: l,
                        source: v,
                        restoredState: b,
                        extras: E,
                      } = s,
                      A = new ce(u, this.urlSerializer.serialize(l), v, b);
                    this.events.next(A);
                    let R = qi(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = n =
                        N(d({}, s), {
                          targetSnapshot: R,
                          urlAfterRedirects: l,
                          extras: N(d({}, E), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })),
                      (this.currentNavigation.finalUrl = l),
                      f(n)
                    );
                  } else {
                    let u = "";
                    return (
                      this.events.next(
                        new J(
                          s.id,
                          this.urlSerializer.serialize(s.extractedUrl),
                          u,
                          Pe.IgnoredByUrlHandlingStrategy
                        )
                      ),
                      s.resolve(!1),
                      Y
                    );
                  }
                }),
                D((s) => {
                  let a = new Ht(
                    s.id,
                    this.urlSerializer.serialize(s.extractedUrl),
                    this.urlSerializer.serialize(s.urlAfterRedirects),
                    s.targetSnapshot
                  );
                  this.events.next(a);
                }),
                y(
                  (s) => (
                    (this.currentTransition = n =
                      N(d({}, s), {
                        guards: qs(
                          s.targetSnapshot,
                          s.currentSnapshot,
                          this.rootContexts
                        ),
                      })),
                    n
                  )
                ),
                ra(this.environmentInjector, (s) => this.events.next(s)),
                D((s) => {
                  if (
                    ((n.guardsResult = s.guardsResult),
                    s.guardsResult && typeof s.guardsResult != "boolean")
                  )
                    throw nr(this.urlSerializer, s.guardsResult);
                  let a = new qt(
                    s.id,
                    this.urlSerializer.serialize(s.extractedUrl),
                    this.urlSerializer.serialize(s.urlAfterRedirects),
                    s.targetSnapshot,
                    !!s.guardsResult
                  );
                  this.events.next(a);
                }),
                q((s) =>
                  s.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(s, "", U.GuardRejected),
                      !1)
                ),
                Vr((s) => {
                  if (s.guards.canActivateChecks.length !== 0)
                    return f(s).pipe(
                      D((a) => {
                        let c = new Gt(
                          a.id,
                          this.urlSerializer.serialize(a.extractedUrl),
                          this.urlSerializer.serialize(a.urlAfterRedirects),
                          a.targetSnapshot
                        );
                        this.events.next(c);
                      }),
                      P((a) => {
                        let c = !1;
                        return f(a).pipe(
                          Ia(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector
                          ),
                          D({
                            next: () => (c = !0),
                            complete: () => {
                              c ||
                                this.cancelNavigationTransition(
                                  a,
                                  "",
                                  U.NoDataFromResolver
                                );
                            },
                          })
                        );
                      }),
                      D((a) => {
                        let c = new Wt(
                          a.id,
                          this.urlSerializer.serialize(a.extractedUrl),
                          this.urlSerializer.serialize(a.urlAfterRedirects),
                          a.targetSnapshot
                        );
                        this.events.next(c);
                      })
                    );
                }),
                Vr((s) => {
                  let a = (c) => {
                    let u = [];
                    c.routeConfig?.loadComponent &&
                      !c.routeConfig._loadedComponent &&
                      u.push(
                        this.configLoader.loadComponent(c.routeConfig).pipe(
                          D((l) => {
                            c.component = l;
                          }),
                          y(() => {})
                        )
                      );
                    for (let l of c.children) u.push(...a(l));
                    return u;
                  };
                  return Rt(a(s.targetSnapshot.root)).pipe(mr(null), ye(1));
                }),
                Vr(() => this.afterPreactivation()),
                P(() => {
                  let { currentSnapshot: s, targetSnapshot: a } = n,
                    c = this.createViewTransition?.(
                      this.environmentInjector,
                      s.root,
                      a.root
                    );
                  return c ? O(c).pipe(y(() => n)) : f(n);
                }),
                y((s) => {
                  let a = Fs(
                    e.routeReuseStrategy,
                    s.targetSnapshot,
                    s.currentRouterState
                  );
                  return (
                    (this.currentTransition = n =
                      N(d({}, s), { targetRouterState: a })),
                    (this.currentNavigation.targetRouterState = a),
                    n
                  );
                }),
                D(() => {
                  this.events.next(new ot());
                }),
                Hs(
                  this.rootContexts,
                  e.routeReuseStrategy,
                  (s) => this.events.next(s),
                  this.inputBindingEnabled
                ),
                ye(1),
                D({
                  next: (s) => {
                    (i = !0),
                      (this.lastSuccessfulNavigation = this.currentNavigation),
                      this.events.next(
                        new B(
                          s.id,
                          this.urlSerializer.serialize(s.extractedUrl),
                          this.urlSerializer.serialize(s.urlAfterRedirects)
                        )
                      ),
                      this.titleStrategy?.updateTitle(
                        s.targetRouterState.snapshot
                      ),
                      s.resolve(!0);
                  },
                  complete: () => {
                    i = !0;
                  },
                }),
                En(
                  this.transitionAbortSubject.pipe(
                    D((s) => {
                      throw s;
                    })
                  )
                ),
                Re(() => {
                  !i &&
                    !o &&
                    this.cancelNavigationTransition(
                      n,
                      "",
                      U.SupersededByNewNavigation
                    ),
                    this.currentTransition?.id === n.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                }),
                re((s) => {
                  if (this.destroyed) return n.resolve(!1), Y;
                  if (((o = !0), Zi(s)))
                    this.events.next(
                      new W(
                        n.id,
                        this.urlSerializer.serialize(n.extractedUrl),
                        s.message,
                        s.cancellationCode
                      )
                    ),
                      Vs(s)
                        ? this.events.next(
                            new xe(s.url, s.navigationBehaviorOptions)
                          )
                        : n.resolve(!1);
                  else {
                    let a = new _e(
                      n.id,
                      this.urlSerializer.serialize(n.extractedUrl),
                      s,
                      n.targetSnapshot ?? void 0
                    );
                    try {
                      let c = $(this.environmentInjector, () =>
                        this.navigationErrorHandler?.(a)
                      );
                      if (c instanceof Ue) {
                        let { message: u, cancellationCode: l } = nr(
                          this.urlSerializer,
                          c
                        );
                        this.events.next(
                          new W(
                            n.id,
                            this.urlSerializer.serialize(n.extractedUrl),
                            u,
                            l
                          )
                        ),
                          this.events.next(
                            new xe(c.redirectTo, c.navigationBehaviorOptions)
                          );
                      } else throw (this.events.next(a), s);
                    } catch (c) {
                      this.options.resolveNavigationPromiseOnError
                        ? n.resolve(!1)
                        : n.reject(c);
                    }
                  }
                  return Y;
                })
              );
            })
          )
        );
      }
      cancelNavigationTransition(e, n, i) {
        let o = new W(e.id, this.urlSerializer.serialize(e.extractedUrl), n, i);
        this.events.next(o), e.resolve(!1);
      }
      isUpdatingInternalState() {
        return (
          this.currentTransition?.extractedUrl.toString() !==
          this.currentTransition?.currentUrlTree.toString()
        );
      }
      isUpdatedBrowserUrl() {
        let e = this.urlHandlingStrategy.extract(
            this.urlSerializer.parse(this.location.path(!0))
          ),
          n =
            this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return (
          e.toString() !== n?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange
        );
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = m({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })();
function Na(t) {
  return t !== zt;
}
var ao = (() => {
    class t {
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = m({ token: t, factory: () => h(xa), providedIn: "root" });
    }
    return t;
  })(),
  or = class {
    shouldDetach(r) {
      return !1;
    }
    store(r, e) {}
    shouldAttach(r) {
      return !1;
    }
    retrieve(r) {
      return null;
    }
    shouldReuseRoute(r, e) {
      return r.routeConfig === e.routeConfig;
    }
  },
  xa = (() => {
    class t extends or {
      static ɵfac = (() => {
        let e;
        return function (i) {
          return (e || (e = wr(t)))(i || t);
        };
      })();
      static ɵprov = m({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })(),
  co = (() => {
    class t {
      urlSerializer = h(pe);
      options = h(me, { optional: !0 }) || {};
      canceledNavigationResolution =
        this.options.canceledNavigationResolution || "replace";
      location = h(Se);
      urlHandlingStrategy = h(cr);
      urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
      currentUrlTree = new X();
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      rawUrlTree = this.currentUrlTree;
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      createBrowserPath({ finalUrl: e, initialUrl: n, targetBrowserUrl: i }) {
        let o = e !== void 0 ? this.urlHandlingStrategy.merge(e, n) : n,
          s = i ?? o;
        return s instanceof X ? this.urlSerializer.serialize(s) : s;
      }
      commitTransition({ targetRouterState: e, finalUrl: n, initialUrl: i }) {
        n && e
          ? ((this.currentUrlTree = n),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(n, i)),
            (this.routerState = e))
          : (this.rawUrlTree = i);
      }
      routerState = qi(null);
      getRouterState() {
        return this.routerState;
      }
      stateMemento = this.createStateMemento();
      updateStateMemento() {
        this.stateMemento = this.createStateMemento();
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      resetInternalState({ finalUrl: e }) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            e ?? this.rawUrlTree
          ));
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = m({ token: t, factory: () => h(Ua), providedIn: "root" });
    }
    return t;
  })(),
  Ua = (() => {
    class t extends co {
      currentPageId = 0;
      lastSuccessfulId = -1;
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
      }
      registerNonRouterCurrentEntryChangeListener(e) {
        return this.location.subscribe((n) => {
          n.type === "popstate" &&
            setTimeout(() => {
              e(n.url, n.state, "popstate");
            });
        });
      }
      handleRouterEvent(e, n) {
        e instanceof ce
          ? this.updateStateMemento()
          : e instanceof J
          ? this.commitTransition(n)
          : e instanceof it
          ? this.urlUpdateStrategy === "eager" &&
            (n.extras.skipLocationChange ||
              this.setBrowserUrl(this.createBrowserPath(n), n))
          : e instanceof ot
          ? (this.commitTransition(n),
            this.urlUpdateStrategy === "deferred" &&
              !n.extras.skipLocationChange &&
              this.setBrowserUrl(this.createBrowserPath(n), n))
          : e instanceof W &&
            (e.code === U.GuardRejected || e.code === U.NoDataFromResolver)
          ? this.restoreHistory(n)
          : e instanceof _e
          ? this.restoreHistory(n, !0)
          : e instanceof B &&
            ((this.lastSuccessfulId = e.id),
            (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(e, { extras: n, id: i }) {
        let { replaceUrl: o, state: s } = n;
        if (this.location.isCurrentPathEqualTo(e) || o) {
          let a = this.browserPageId,
            c = d(d({}, s), this.generateNgRouterState(i, a));
          this.location.replaceState(e, "", c);
        } else {
          let a = d(
            d({}, s),
            this.generateNgRouterState(i, this.browserPageId + 1)
          );
          this.location.go(e, "", a);
        }
      }
      restoreHistory(e, n = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let i = this.browserPageId,
            o = this.currentPageId - i;
          o !== 0
            ? this.location.historyGo(o)
            : this.getCurrentUrlTree() === e.finalUrl &&
              o === 0 &&
              (this.resetInternalState(e), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (n && this.resetInternalState(e), this.resetUrlToCurrentUrlTree());
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.getRawUrlTree()),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)
        );
      }
      generateNgRouterState(e, n) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: e, ɵrouterPageId: n }
          : { navigationId: e };
      }
      static ɵfac = (() => {
        let e;
        return function (i) {
          return (e || (e = wr(t)))(i || t);
        };
      })();
      static ɵprov = m({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })();
function lr(t, r) {
  t.events
    .pipe(
      q(
        (e) =>
          e instanceof B || e instanceof W || e instanceof _e || e instanceof J
      ),
      y((e) =>
        e instanceof B || e instanceof J
          ? 0
          : (
              e instanceof W
                ? e.code === U.Redirect ||
                  e.code === U.SupersededByNewNavigation
                : !1
            )
          ? 2
          : 1
      ),
      q((e) => e !== 2),
      ye(1)
    )
    .subscribe(() => {
      r();
    });
}
var ka = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  La = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  ee = (() => {
    class t {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      disposed = !1;
      nonRouterCurrentEntryChangeSubscription;
      console = h($n);
      stateManager = h(co);
      options = h(me, { optional: !0 }) || {};
      pendingTasks = h(bt);
      urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
      navigationTransitions = h(ur);
      urlSerializer = h(pe);
      location = h(Se);
      urlHandlingStrategy = h(cr);
      _events = new te();
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      navigated = !1;
      routeReuseStrategy = h(ao);
      onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
      config = h(ve, { optional: !0 })?.flat() ?? [];
      componentInputBindingEnabled = !!h(ft, { optional: !0 });
      constructor() {
        this.resetConfig(this.config),
          this.navigationTransitions.setupNavigations(this).subscribe({
            error: (e) => {
              this.console.warn(e);
            },
          }),
          this.subscribeToNavigationEvents();
      }
      eventsSubscription = new mn();
      subscribeToNavigationEvents() {
        let e = this.navigationTransitions.events.subscribe((n) => {
          try {
            let i = this.navigationTransitions.currentTransition,
              o = this.navigationTransitions.currentNavigation;
            if (i !== null && o !== null) {
              if (
                (this.stateManager.handleRouterEvent(n, o),
                n instanceof W &&
                  n.code !== U.Redirect &&
                  n.code !== U.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (n instanceof B) this.navigated = !0;
              else if (n instanceof xe) {
                let s = n.navigationBehaviorOptions,
                  a = this.urlHandlingStrategy.merge(n.url, i.currentRawUrl),
                  c = d(
                    {
                      browserUrl: i.extras.browserUrl,
                      info: i.extras.info,
                      skipLocationChange: i.extras.skipLocationChange,
                      replaceUrl:
                        i.extras.replaceUrl ||
                        this.urlUpdateStrategy === "eager" ||
                        Na(i.source),
                    },
                    s
                  );
                this.scheduleNavigation(a, zt, null, c, {
                  resolve: i.resolve,
                  reject: i.reject,
                  promise: i.promise,
                });
              }
            }
            $a(n) && this._events.next(n);
          } catch (i) {
            this.navigationTransitions.transitionAbortSubject.next(i);
          }
        });
        this.eventsSubscription.add(e);
      }
      resetRootComponentType(e) {
        (this.routerState.root.component = e),
          (this.navigationTransitions.rootComponentType = e);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              zt,
              this.stateManager.restoredState()
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (e, n, i) => {
              this.navigateToSyncWithBrowser(e, i, n);
            }
          );
      }
      navigateToSyncWithBrowser(e, n, i) {
        let o = { replaceUrl: !0 },
          s = i?.navigationId ? i : null;
        if (i) {
          let c = d({}, i);
          delete c.navigationId,
            delete c.ɵrouterPageId,
            Object.keys(c).length !== 0 && (o.state = c);
        }
        let a = this.parseUrl(e);
        this.scheduleNavigation(a, n, s, o);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(e) {
        (this.config = e.map(un)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this._events.unsubscribe(),
          this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(e, n = {}) {
        let {
            relativeTo: i,
            queryParams: o,
            fragment: s,
            queryParamsHandling: a,
            preserveFragment: c,
          } = n,
          u = c ? this.currentUrlTree.fragment : s,
          l = null;
        switch (a ?? this.options.defaultQueryParamsHandling) {
          case "merge":
            l = d(d({}, this.currentUrlTree.queryParams), o);
            break;
          case "preserve":
            l = this.currentUrlTree.queryParams;
            break;
          default:
            l = o || null;
        }
        l !== null && (l = this.removeEmptyProps(l));
        let v;
        try {
          let b = i ? i.snapshot : this.routerState.snapshot.root;
          v = zi(b);
        } catch {
          (typeof e[0] != "string" || e[0][0] !== "/") && (e = []),
            (v = this.currentUrlTree.root);
        }
        return Bi(v, e, l, u ?? null);
      }
      navigateByUrl(e, n = { skipLocationChange: !1 }) {
        let i = De(e) ? e : this.parseUrl(e),
          o = this.urlHandlingStrategy.merge(i, this.rawUrlTree);
        return this.scheduleNavigation(o, zt, null, n);
      }
      navigate(e, n = { skipLocationChange: !1 }) {
        return ja(e), this.navigateByUrl(this.createUrlTree(e, n), n);
      }
      serializeUrl(e) {
        return this.urlSerializer.serialize(e);
      }
      parseUrl(e) {
        try {
          return this.urlSerializer.parse(e);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(e, n) {
        let i;
        if (
          (n === !0 ? (i = d({}, ka)) : n === !1 ? (i = d({}, La)) : (i = n),
          De(e))
        )
          return bi(this.currentUrlTree, e, i);
        let o = this.parseUrl(e);
        return bi(this.currentUrlTree, o, i);
      }
      removeEmptyProps(e) {
        return Object.entries(e).reduce(
          (n, [i, o]) => (o != null && (n[i] = o), n),
          {}
        );
      }
      scheduleNavigation(e, n, i, o, s) {
        if (this.disposed) return Promise.resolve(!1);
        let a, c, u;
        s
          ? ((a = s.resolve), (c = s.reject), (u = s.promise))
          : (u = new Promise((v, b) => {
              (a = v), (c = b);
            }));
        let l = this.pendingTasks.add();
        return (
          lr(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(l));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: n,
            restoredState: i,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: e,
            extras: o,
            resolve: a,
            reject: c,
            promise: u,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          u.catch((v) => Promise.reject(v))
        );
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = m({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })();
function ja(t) {
  for (let r = 0; r < t.length; r++) if (t[r] == null) throw new T(4008, !1);
}
function $a(t) {
  return !(t instanceof ot) && !(t instanceof xe);
}
var gt = class {},
  Fa = (() => {
    class t {
      preload(e, n) {
        return n().pipe(re(() => f(null)));
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵprov = m({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })();
var uo = (() => {
    class t {
      router;
      injector;
      preloadingStrategy;
      loader;
      subscription;
      constructor(e, n, i, o) {
        (this.router = e),
          (this.injector = n),
          (this.preloadingStrategy = i),
          (this.loader = o);
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            q((e) => e instanceof B),
            Z(() => this.preload())
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(e, n) {
        let i = [];
        for (let o of n) {
          o.providers &&
            !o._injector &&
            (o._injector = Tt(o.providers, e, `Route: ${o.path}`));
          let s = o._injector ?? e,
            a = o._loadedInjector ?? s;
          ((o.loadChildren && !o._loadedRoutes && o.canLoad === void 0) ||
            (o.loadComponent && !o._loadedComponent)) &&
            i.push(this.preloadConfig(s, o)),
            (o.children || o._loadedRoutes) &&
              i.push(this.processRoutes(a, o.children ?? o._loadedRoutes));
        }
        return O(i).pipe(pr());
      }
      preloadConfig(e, n) {
        return this.preloadingStrategy.preload(n, () => {
          let i;
          n.loadChildren && n.canLoad === void 0
            ? (i = this.loader.loadChildren(e, n))
            : (i = f(null));
          let o = i.pipe(
            x((s) =>
              s === null
                ? f(void 0)
                : ((n._loadedRoutes = s.routes),
                  (n._loadedInjector = s.injector),
                  this.processRoutes(s.injector ?? e, s.routes))
            )
          );
          if (n.loadComponent && !n._loadedComponent) {
            let s = this.loader.loadComponent(n);
            return O([o, s]).pipe(pr());
          } else return o;
        });
      }
      static ɵfac = function (n) {
        return new (n || t)(g(ee), g(ie), g(gt), g(ar));
      };
      static ɵprov = m({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })(),
  lo = new C(""),
  za = (() => {
    class t {
      urlSerializer;
      transitions;
      viewportScroller;
      zone;
      options;
      routerEventsSubscription;
      scrollEventsSubscription;
      lastId = 0;
      lastSource = "imperative";
      restoredId = 0;
      store = {};
      constructor(e, n, i, o, s = {}) {
        (this.urlSerializer = e),
          (this.transitions = n),
          (this.viewportScroller = i),
          (this.zone = o),
          (this.options = s),
          (s.scrollPositionRestoration ||= "disabled"),
          (s.anchorScrolling ||= "disabled");
      }
      init() {
        this.options.scrollPositionRestoration !== "disabled" &&
          this.viewportScroller.setHistoryScrollRestoration("manual"),
          (this.routerEventsSubscription = this.createScrollEvents()),
          (this.scrollEventsSubscription = this.consumeScrollEvents());
      }
      createScrollEvents() {
        return this.transitions.events.subscribe((e) => {
          e instanceof ce
            ? ((this.store[this.lastId] =
                this.viewportScroller.getScrollPosition()),
              (this.lastSource = e.navigationTrigger),
              (this.restoredId = e.restoredState
                ? e.restoredState.navigationId
                : 0))
            : e instanceof B
            ? ((this.lastId = e.id),
              this.scheduleScrollEvent(
                e,
                this.urlSerializer.parse(e.urlAfterRedirects).fragment
              ))
            : e instanceof J &&
              e.code === Pe.IgnoredSameUrlNavigation &&
              ((this.lastSource = void 0),
              (this.restoredId = 0),
              this.scheduleScrollEvent(
                e,
                this.urlSerializer.parse(e.url).fragment
              ));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe((e) => {
          e instanceof Ne &&
            (e.position
              ? this.options.scrollPositionRestoration === "top"
                ? this.viewportScroller.scrollToPosition([0, 0])
                : this.options.scrollPositionRestoration === "enabled" &&
                  this.viewportScroller.scrollToPosition(e.position)
              : e.anchor && this.options.anchorScrolling === "enabled"
              ? this.viewportScroller.scrollToAnchor(e.anchor)
              : this.options.scrollPositionRestoration !== "disabled" &&
                this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(e, n) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.zone.run(() => {
              this.transitions.events.next(
                new Ne(
                  e,
                  this.lastSource === "popstate"
                    ? this.store[this.restoredId]
                    : null,
                  n
                )
              );
            });
          }, 0);
        });
      }
      ngOnDestroy() {
        this.routerEventsSubscription?.unsubscribe(),
          this.scrollEventsSubscription?.unsubscribe();
      }
      static ɵfac = function (n) {
        Un();
      };
      static ɵprov = m({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function Ba(t, ...r) {
  return wt([
    { provide: ve, multi: !0, useValue: t },
    [],
    { provide: V, useFactory: ho, deps: [ee] },
    { provide: Mr, multi: !0, useFactory: fo },
    r.map((e) => e.ɵproviders),
  ]);
}
function ho(t) {
  return t.routerState.root;
}
function mt(t, r) {
  return { ɵkind: t, ɵproviders: r };
}
function fo() {
  let t = h(St);
  return (r) => {
    let e = t.get(zn);
    if (r !== e.components[0]) return;
    let n = t.get(ee),
      i = t.get(po);
    t.get(gn) === 1 && n.initialNavigation(),
      t.get(vo, null, yr.Optional)?.setUpPreloading(),
      t.get(lo, null, yr.Optional)?.init(),
      n.resetRootComponentType(e.componentTypes[0]),
      i.closed || (i.next(), i.complete(), i.unsubscribe());
  };
}
var po = new C("", { factory: () => new te() }),
  gn = new C("", { providedIn: "root", factory: () => 1 });
function go() {
  let t = [
    { provide: gn, useValue: 0 },
    Ir(() => {
      let r = h(St);
      return r.get(Xn, Promise.resolve()).then(
        () =>
          new Promise((n) => {
            let i = r.get(ee),
              o = r.get(po);
            lr(i, () => {
              n(!0);
            }),
              (r.get(ur).afterPreactivation = () => (
                n(!0), o.closed ? f(void 0) : o
              )),
              i.initialNavigation();
          })
      );
    }),
  ];
  return mt(2, t);
}
function mo() {
  let t = [
    Ir(() => {
      h(ee).setUpLocationChangeListener();
    }),
    { provide: gn, useValue: 2 },
  ];
  return mt(3, t);
}
var vo = new C("");
function yo(t) {
  return mt(0, [
    { provide: vo, useExisting: uo },
    { provide: gt, useExisting: t },
  ]);
}
function Ro() {
  return mt(8, [an, { provide: ft, useExisting: an }]);
}
function wo(t) {
  _n("NgRouterViewTransitions");
  let r = [
    { provide: dn, useValue: so },
    {
      provide: hn,
      useValue: d({ skipNextTransition: !!t?.skipInitialTransition }, t),
    },
  ];
  return mt(9, r);
}
var So = [
    Se,
    { provide: pe, useClass: ae },
    ee,
    ge,
    { provide: V, useFactory: ho, deps: [ee] },
    ar,
    [],
  ],
  Va = (() => {
    class t {
      constructor() {}
      static forRoot(e, n) {
        return {
          ngModule: t,
          providers: [
            So,
            [],
            { provide: ve, multi: !0, useValue: e },
            [],
            n?.errorHandler ? { provide: fn, useValue: n.errorHandler } : [],
            { provide: me, useValue: n || {} },
            n?.useHash ? qa() : Ga(),
            Ha(),
            n?.preloadingStrategy ? yo(n.preloadingStrategy).ɵproviders : [],
            n?.initialNavigation ? Wa(n) : [],
            n?.bindToComponentInputs ? Ro().ɵproviders : [],
            n?.enableViewTransitions ? wo().ɵproviders : [],
            Xa(),
          ],
        };
      }
      static forChild(e) {
        return {
          ngModule: t,
          providers: [{ provide: ve, multi: !0, useValue: e }],
        };
      }
      static ɵfac = function (n) {
        return new (n || t)();
      };
      static ɵmod = Ve({ type: t });
      static ɵinj = $e({});
    }
    return t;
  })();
function Ha() {
  return {
    provide: lo,
    useFactory: () => {
      let t = h(Kn),
        r = h(K),
        e = h(me),
        n = h(ur),
        i = h(pe);
      return (
        e.scrollOffset && t.setOffset(e.scrollOffset), new za(i, n, t, r, e)
      );
    },
  };
}
function qa() {
  return { provide: Or, useClass: Yn };
}
function Ga() {
  return { provide: Or, useClass: Jn };
}
function Wa(t) {
  return [
    t.initialNavigation === "disabled" ? mo().ɵproviders : [],
    t.initialNavigation === "enabledBlocking" ? go().ɵproviders : [],
  ];
}
var pn = new C("");
function Xa() {
  return [
    { provide: pn, useFactory: fo },
    { provide: Mr, multi: !0, useExisting: pn },
  ];
}
var bo = class t {
  constructor(r, e) {
    this.http = r;
    this.route = e;
  }
  subformPedidosInvitado = An({ noPartidaA: 0, noPedidoN: 0 });
  set(r) {
    this.subformPedidosInvitado.set(r);
  }
  get() {
    return this.subformPedidosInvitado;
  }
  id = null;
  getApi() {
    return (
      this.route.queryParamMap.subscribe((r) => {
        this.id = r.get("id");
      }),
      this.http.get(F + "SubformPedidosInvitado/recuperar?id=" + this.id)
    );
  }
  getApiByFather() {
    return this.route.queryParamMap.pipe(
      y((r) => r.get("id")),
      P((r) =>
        r
          ? this.http.get(
              `${F}SubformPedidosInvitado/listarPorPadre?InCbPadre=${r}`
            )
          : new yt((e) => {
              e.next([]), e.complete();
            })
      )
    );
  }
  getLeaderboardTrivia() {
    return this.http.get(
      F + "SubformPedidosInvitado/listarLeaderboardTrivia?noPedidoN=" + Si
    );
  }
  decline(r) {
    return this.http.put(
      `${F}SubformPedidosInvitado/${r}`,
      { inInvitadoPases: 0, cbNvStatusConfirmacion: "Declinado" },
      { responseType: "text" }
    );
  }
  getHijosPorPadre(r) {
    return this.http.get(
      F + "SubformPedidosInvitado/listarPorPadre?InCbPadre=" + r
    );
  }
  confirm(r, e) {
    return this.http.put(`${F}SubformPedidosInvitado/${r}`, {
      inInvitadoPases: e,
      cbNvStatusConfirmacion: "Confirmado",
    });
  }
  triviaResultsSave(r, e) {
    return this.http.put(`${F}SubformPedidosInvitado/${r}`, {
      inRespuestasCorrectas: e,
      biTriviaContestada: !0,
    });
  }
  actualizarStatus(r, e) {
    return this.http.post(`${F}SubformPedidosInvitado/${r}`, {
      cbNvStatusConfirmacion: e,
    });
  }
  getPadreEHyHijosPorHijo(r) {
    return this.http.get(
      `${F}SubformPedidosInvitado/getPadreEHyHijosPorHijo?hijoId=${r}`
    );
  }
  updateStatus(r, e) {
    return this.http.put(`${F}SubformPedidosInvitado/${r}/estado`, {
      estado: e,
    });
  }
  updatePreguntasAdicionales(r, e) {
    return this.http.put(`${F}SubformPedidosInvitado/${r}`, e, {
      responseType: "text",
    });
  }
  static ɵfac = function (e) {
    return new (e || t)(g(Ut), g(V));
  };
  static ɵprov = m({ token: t, factory: t.ɵfac, providedIn: "root" });
};
export {
  Lo as a,
  Ut as b,
  ls as c,
  V as d,
  Fa as e,
  Ba as f,
  yo as g,
  Ro as h,
  Va as i,
  F as j,
  Si as k,
  bo as l,
};
