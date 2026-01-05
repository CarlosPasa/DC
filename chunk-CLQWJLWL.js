var ed = Object.create;
var ao = Object.defineProperty,
  td = Object.defineProperties,
  nd = Object.getOwnPropertyDescriptor,
  rd = Object.getOwnPropertyDescriptors,
  od = Object.getOwnPropertyNames,
  Qs = Object.getOwnPropertySymbols,
  id = Object.getPrototypeOf,
  Ys = Object.prototype.hasOwnProperty,
  sd = Object.prototype.propertyIsEnumerable;
var Zs = (e, t, n) =>
    t in e
      ? ao(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  K = (e, t) => {
    for (var n in (t ||= {})) Ys.call(t, n) && Zs(e, n, t[n]);
    if (Qs) for (var n of Qs(t)) sd.call(t, n) && Zs(e, n, t[n]);
    return e;
  },
  X = (e, t) => td(e, rd(t));
var Hv = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var ad = (e, t, n, r) => {
  if ((t && typeof t == "object") || typeof t == "function")
    for (let o of od(t))
      !Ys.call(e, o) &&
        o !== n &&
        ao(e, o, {
          get: () => t[o],
          enumerable: !(r = nd(t, o)) || r.enumerable,
        });
  return e;
};
var Bv = (e, t, n) => (
  (n = e != null ? ed(id(e)) : {}),
  ad(
    t || !e || !e.__esModule
      ? ao(n, "default", { value: e, enumerable: !0 })
      : n,
    e
  )
);
var Js = (e, t, n) =>
  new Promise((r, o) => {
    var i = (c) => {
        try {
          a(n.next(c));
        } catch (l) {
          o(l);
        }
      },
      s = (c) => {
        try {
          a(n.throw(c));
        } catch (l) {
          o(l);
        }
      },
      a = (c) => (c.done ? r(c.value) : Promise.resolve(c.value).then(i, s));
    a((n = n.apply(e, t)).next());
  });
function fo(e, t) {
  return Object.is(e, t);
}
var L = null,
  En = !1,
  po = 1,
  ne = Symbol("SIGNAL");
function D(e) {
  let t = L;
  return (L = e), t;
}
function ho() {
  return L;
}
var it = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  kind: "unknown",
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function Pt(e) {
  if (En) throw new Error("");
  if (L === null) return;
  L.consumerOnSignalRead(e);
  let t = L.nextProducerIndex++;
  if ((Cn(L), t < L.producerNode.length && L.producerNode[t] !== e && At(L))) {
    let n = L.producerNode[t];
    Mn(n, L.producerIndexOfThis[t]);
  }
  L.producerNode[t] !== e &&
    ((L.producerNode[t] = e),
    (L.producerIndexOfThis[t] = At(L) ? Xs(e, L, t) : 0)),
    (L.producerLastReadVersion[t] = e.version);
}
function Ks() {
  po++;
}
function go(e) {
  if (!(At(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === po)) {
    if (!e.producerMustRecompute(e) && !bn(e)) {
      uo(e);
      return;
    }
    e.producerRecomputeValue(e), uo(e);
  }
}
function mo(e) {
  if (e.liveConsumerNode === void 0) return;
  let t = En;
  En = !0;
  try {
    for (let n of e.liveConsumerNode) n.dirty || cd(n);
  } finally {
    En = t;
  }
}
function yo() {
  return L?.consumerAllowSignalWrites !== !1;
}
function cd(e) {
  (e.dirty = !0), mo(e), e.consumerMarkedDirty?.(e);
}
function uo(e) {
  (e.dirty = !1), (e.lastCleanEpoch = po);
}
function Lt(e) {
  return e && (e.nextProducerIndex = 0), D(e);
}
function wn(e, t) {
  if (
    (D(t),
    !(
      !e ||
      e.producerNode === void 0 ||
      e.producerIndexOfThis === void 0 ||
      e.producerLastReadVersion === void 0
    ))
  ) {
    if (At(e))
      for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
        Mn(e.producerNode[n], e.producerIndexOfThis[n]);
    for (; e.producerNode.length > e.nextProducerIndex; )
      e.producerNode.pop(),
        e.producerLastReadVersion.pop(),
        e.producerIndexOfThis.pop();
  }
}
function bn(e) {
  Cn(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let n = e.producerNode[t],
      r = e.producerLastReadVersion[t];
    if (r !== n.version || (go(n), r !== n.version)) return !0;
  }
  return !1;
}
function Ft(e) {
  if ((Cn(e), At(e)))
    for (let t = 0; t < e.producerNode.length; t++)
      Mn(e.producerNode[t], e.producerIndexOfThis[t]);
  (e.producerNode.length =
    e.producerLastReadVersion.length =
    e.producerIndexOfThis.length =
      0),
    e.liveConsumerNode &&
      (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function Xs(e, t, n) {
  if ((ea(e), e.liveConsumerNode.length === 0 && ta(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      e.producerIndexOfThis[r] = Xs(e.producerNode[r], e, r);
  return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function Mn(e, t) {
  if ((ea(e), e.liveConsumerNode.length === 1 && ta(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      Mn(e.producerNode[r], e.producerIndexOfThis[r]);
  let n = e.liveConsumerNode.length - 1;
  if (
    ((e.liveConsumerNode[t] = e.liveConsumerNode[n]),
    (e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n]),
    e.liveConsumerNode.length--,
    e.liveConsumerIndexOfThis.length--,
    t < e.liveConsumerNode.length)
  ) {
    let r = e.liveConsumerIndexOfThis[t],
      o = e.liveConsumerNode[t];
    Cn(o), (o.producerIndexOfThis[r] = t);
  }
}
function At(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function Cn(e) {
  (e.producerNode ??= []),
    (e.producerIndexOfThis ??= []),
    (e.producerLastReadVersion ??= []);
}
function ea(e) {
  (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
}
function ta(e) {
  return e.producerNode !== void 0;
}
function vo(e, t) {
  let n = Object.create(ld);
  (n.computation = e), t !== void 0 && (n.equal = t);
  let r = () => {
    if ((go(n), Pt(n), n.value === Dn)) throw n.error;
    return n.value;
  };
  return (r[ne] = n), r;
}
var co = Symbol("UNSET"),
  lo = Symbol("COMPUTING"),
  Dn = Symbol("ERRORED"),
  ld = X(K({}, it), {
    value: co,
    dirty: !0,
    error: null,
    equal: fo,
    kind: "computed",
    producerMustRecompute(e) {
      return e.value === co || e.value === lo;
    },
    producerRecomputeValue(e) {
      if (e.value === lo) throw new Error("Detected cycle in computations.");
      let t = e.value;
      e.value = lo;
      let n = Lt(e),
        r,
        o = !1;
      try {
        (r = e.computation()),
          D(null),
          (o = t !== co && t !== Dn && r !== Dn && e.equal(t, r));
      } catch (i) {
        (r = Dn), (e.error = i);
      } finally {
        wn(e, n);
      }
      if (o) {
        e.value = t;
        return;
      }
      (e.value = r), e.version++;
    },
  });
function ud() {
  throw new Error();
}
var na = ud;
function ra(e) {
  na(e);
}
function Io(e) {
  na = e;
}
var dd = null;
function Eo(e, t) {
  let n = Object.create(_n);
  (n.value = e), t !== void 0 && (n.equal = t);
  let r = () => (Pt(n), n.value);
  return (r[ne] = n), r;
}
function jt(e, t) {
  yo() || ra(e), e.equal(e.value, t) || ((e.value = t), fd(e));
}
function Do(e, t) {
  yo() || ra(e), jt(e, t(e.value));
}
var _n = X(K({}, it), { equal: fo, value: void 0, kind: "signal" });
function fd(e) {
  e.version++, Ks(), mo(e), dd?.();
}
function wo(e) {
  let t = D(null);
  try {
    return e();
  } finally {
    D(t);
  }
}
var bo;
function Vt() {
  return bo;
}
function ve(e) {
  let t = bo;
  return (bo = e), t;
}
var Tn = Symbol("NotFound");
function I(e) {
  return typeof e == "function";
}
function st(e) {
  let n = e((r) => {
    Error.call(r), (r.stack = new Error().stack);
  });
  return (
    (n.prototype = Object.create(Error.prototype)),
    (n.prototype.constructor = n),
    n
  );
}
var xn = st(
  (e) =>
    function (n) {
      e(this),
        (this.message = n
          ? `${n.length} errors occurred during unsubscription:
${n.map((r, o) => `${o + 1}) ${r.toString()}`).join(`
  `)}`
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = n);
    }
);
function Ht(e, t) {
  if (e) {
    let n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var B = class e {
  constructor(t) {
    (this.initialTeardown = t),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  unsubscribe() {
    let t;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: n } = this;
      if (n)
        if (((this._parentage = null), Array.isArray(n)))
          for (let i of n) i.remove(this);
        else n.remove(this);
      let { initialTeardown: r } = this;
      if (I(r))
        try {
          r();
        } catch (i) {
          t = i instanceof xn ? i.errors : [i];
        }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o)
          try {
            oa(i);
          } catch (s) {
            (t = t ?? []),
              s instanceof xn ? (t = [...t, ...s.errors]) : t.push(s);
          }
      }
      if (t) throw new xn(t);
    }
  }
  add(t) {
    var n;
    if (t && t !== this)
      if (this.closed) oa(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this)) return;
          t._addParent(this);
        }
        (this._finalizers =
          (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }
  _hasParent(t) {
    let { _parentage: n } = this;
    return n === t || (Array.isArray(n) && n.includes(t));
  }
  _addParent(t) {
    let { _parentage: n } = this;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }
  _removeParent(t) {
    let { _parentage: n } = this;
    n === t ? (this._parentage = null) : Array.isArray(n) && Ht(n, t);
  }
  remove(t) {
    let { _finalizers: n } = this;
    n && Ht(n, t), t instanceof e && t._removeParent(this);
  }
};
B.EMPTY = (() => {
  let e = new B();
  return (e.closed = !0), e;
})();
var Mo = B.EMPTY;
function Nn(e) {
  return (
    e instanceof B ||
    (e && "closed" in e && I(e.remove) && I(e.add) && I(e.unsubscribe))
  );
}
function oa(e) {
  I(e) ? e() : e.unsubscribe();
}
var ie = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var at = {
  setTimeout(e, t, ...n) {
    let { delegate: r } = at;
    return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n);
  },
  clearTimeout(e) {
    let { delegate: t } = at;
    return (t?.clearTimeout || clearTimeout)(e);
  },
  delegate: void 0,
};
function Sn(e) {
  at.setTimeout(() => {
    let { onUnhandledError: t } = ie;
    if (t) t(e);
    else throw e;
  });
}
function Bt() {}
var ia = Co("C", void 0, void 0);
function sa(e) {
  return Co("E", void 0, e);
}
function aa(e) {
  return Co("N", e, void 0);
}
function Co(e, t, n) {
  return { kind: e, value: t, error: n };
}
var Pe = null;
function ct(e) {
  if (ie.useDeprecatedSynchronousErrorHandling) {
    let t = !Pe;
    if ((t && (Pe = { errorThrown: !1, error: null }), e(), t)) {
      let { errorThrown: n, error: r } = Pe;
      if (((Pe = null), n)) throw r;
    }
  } else e();
}
function ca(e) {
  ie.useDeprecatedSynchronousErrorHandling &&
    Pe &&
    ((Pe.errorThrown = !0), (Pe.error = e));
}
var Le = class extends B {
    constructor(t) {
      super(),
        (this.isStopped = !1),
        t
          ? ((this.destination = t), Nn(t) && t.add(this))
          : (this.destination = vd);
    }
    static create(t, n, r) {
      return new lt(t, n, r);
    }
    next(t) {
      this.isStopped ? To(aa(t), this) : this._next(t);
    }
    error(t) {
      this.isStopped
        ? To(sa(t), this)
        : ((this.isStopped = !0), this._error(t));
    }
    complete() {
      this.isStopped ? To(ia, this) : ((this.isStopped = !0), this._complete());
    }
    unsubscribe() {
      this.closed ||
        ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
    }
    _next(t) {
      this.destination.next(t);
    }
    _error(t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  md = Function.prototype.bind;
function _o(e, t) {
  return md.call(e, t);
}
var xo = class {
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      let { partialObserver: n } = this;
      if (n.next)
        try {
          n.next(t);
        } catch (r) {
          kn(r);
        }
    }
    error(t) {
      let { partialObserver: n } = this;
      if (n.error)
        try {
          n.error(t);
        } catch (r) {
          kn(r);
        }
      else kn(t);
    }
    complete() {
      let { partialObserver: t } = this;
      if (t.complete)
        try {
          t.complete();
        } catch (n) {
          kn(n);
        }
    }
  },
  lt = class extends Le {
    constructor(t, n, r) {
      super();
      let o;
      if (I(t) || !t)
        o = { next: t ?? void 0, error: n ?? void 0, complete: r ?? void 0 };
      else {
        let i;
        this && ie.useDeprecatedNextContext
          ? ((i = Object.create(t)),
            (i.unsubscribe = () => this.unsubscribe()),
            (o = {
              next: t.next && _o(t.next, i),
              error: t.error && _o(t.error, i),
              complete: t.complete && _o(t.complete, i),
            }))
          : (o = t);
      }
      this.destination = new xo(o);
    }
  };
function kn(e) {
  ie.useDeprecatedSynchronousErrorHandling ? ca(e) : Sn(e);
}
function yd(e) {
  throw e;
}
function To(e, t) {
  let { onStoppedNotification: n } = ie;
  n && at.setTimeout(() => n(e, t));
}
var vd = { closed: !0, next: Bt, error: yd, complete: Bt };
var ut = (typeof Symbol == "function" && Symbol.observable) || "@@observable";
function ee(e) {
  return e;
}
function Id(...e) {
  return No(e);
}
function No(e) {
  return e.length === 0
    ? ee
    : e.length === 1
    ? e[0]
    : function (n) {
        return e.reduce((r, o) => o(r), n);
      };
}
var N = (() => {
  class e {
    constructor(n) {
      n && (this._subscribe = n);
    }
    lift(n) {
      let r = new e();
      return (r.source = this), (r.operator = n), r;
    }
    subscribe(n, r, o) {
      let i = Dd(n) ? n : new lt(n, r, o);
      return (
        ct(() => {
          let { operator: s, source: a } = this;
          i.add(
            s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i)
          );
        }),
        i
      );
    }
    _trySubscribe(n) {
      try {
        return this._subscribe(n);
      } catch (r) {
        n.error(r);
      }
    }
    forEach(n, r) {
      return (
        (r = la(r)),
        new r((o, i) => {
          let s = new lt({
            next: (a) => {
              try {
                n(a);
              } catch (c) {
                i(c), s.unsubscribe();
              }
            },
            error: i,
            complete: o,
          });
          this.subscribe(s);
        })
      );
    }
    _subscribe(n) {
      var r;
      return (r = this.source) === null || r === void 0
        ? void 0
        : r.subscribe(n);
    }
    [ut]() {
      return this;
    }
    pipe(...n) {
      return No(n)(this);
    }
    toPromise(n) {
      return (
        (n = la(n)),
        new n((r, o) => {
          let i;
          this.subscribe(
            (s) => (i = s),
            (s) => o(s),
            () => r(i)
          );
        })
      );
    }
  }
  return (e.create = (t) => new e(t)), e;
})();
function la(e) {
  var t;
  return (t = e ?? ie.Promise) !== null && t !== void 0 ? t : Promise;
}
function Ed(e) {
  return e && I(e.next) && I(e.error) && I(e.complete);
}
function Dd(e) {
  return (e && e instanceof Le) || (Ed(e) && Nn(e));
}
function So(e) {
  return I(e?.lift);
}
function _(e) {
  return (t) => {
    if (So(t))
      return t.lift(function (n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function M(e, t, n, r, o) {
  return new ko(e, t, n, r, o);
}
var ko = class extends Le {
  constructor(t, n, r, o, i, s) {
    super(t),
      (this.onFinalize = i),
      (this.shouldUnsubscribe = s),
      (this._next = n
        ? function (a) {
            try {
              n(a);
            } catch (c) {
              t.error(c);
            }
          }
        : super._next),
      (this._error = o
        ? function (a) {
            try {
              o(a);
            } catch (c) {
              t.error(c);
            } finally {
              this.unsubscribe();
            }
          }
        : super._error),
      (this._complete = r
        ? function () {
            try {
              r();
            } catch (a) {
              t.error(a);
            } finally {
              this.unsubscribe();
            }
          }
        : super._complete);
  }
  unsubscribe() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: n } = this;
      super.unsubscribe(),
        !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }
};
function Ro() {
  return _((e, t) => {
    let n = null;
    e._refCount++;
    let r = M(t, void 0, void 0, void 0, () => {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        n = null;
        return;
      }
      let o = e._connection,
        i = n;
      (n = null), o && (!i || o === i) && o.unsubscribe(), t.unsubscribe();
    });
    e.subscribe(r), r.closed || (n = e.connect());
  });
}
var Oo = class extends N {
  constructor(t, n) {
    super(),
      (this.source = t),
      (this.subjectFactory = n),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      So(t) && (this.lift = t.lift);
  }
  _subscribe(t) {
    return this.getSubject().subscribe(t);
  }
  getSubject() {
    let t = this._subject;
    return (
      (!t || t.isStopped) && (this._subject = this.subjectFactory()),
      this._subject
    );
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: t } = this;
    (this._subject = this._connection = null), t?.unsubscribe();
  }
  connect() {
    let t = this._connection;
    if (!t) {
      t = this._connection = new B();
      let n = this.getSubject();
      t.add(
        this.source.subscribe(
          M(
            n,
            void 0,
            () => {
              this._teardown(), n.complete();
            },
            (r) => {
              this._teardown(), n.error(r);
            },
            () => this._teardown()
          )
        )
      ),
        t.closed && ((this._connection = null), (t = B.EMPTY));
    }
    return t;
  }
  refCount() {
    return Ro()(this);
  }
};
var ua = st(
  (e) =>
    function () {
      e(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    }
);
var Me = (() => {
    class e extends N {
      constructor() {
        super(),
          (this.closed = !1),
          (this.currentObservers = null),
          (this.observers = []),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null);
      }
      lift(n) {
        let r = new Rn(this, this);
        return (r.operator = n), r;
      }
      _throwIfClosed() {
        if (this.closed) throw new ua();
      }
      next(n) {
        ct(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let r of this.currentObservers) r.next(n);
          }
        });
      }
      error(n) {
        ct(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = n);
            let { observers: r } = this;
            for (; r.length; ) r.shift().error(n);
          }
        });
      }
      complete() {
        ct(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.isStopped = !0;
            let { observers: n } = this;
            for (; n.length; ) n.shift().complete();
          }
        });
      }
      unsubscribe() {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }
      get observed() {
        var n;
        return (
          ((n = this.observers) === null || n === void 0 ? void 0 : n.length) >
          0
        );
      }
      _trySubscribe(n) {
        return this._throwIfClosed(), super._trySubscribe(n);
      }
      _subscribe(n) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(n),
          this._innerSubscribe(n)
        );
      }
      _innerSubscribe(n) {
        let { hasError: r, isStopped: o, observers: i } = this;
        return r || o
          ? Mo
          : ((this.currentObservers = null),
            i.push(n),
            new B(() => {
              (this.currentObservers = null), Ht(i, n);
            }));
      }
      _checkFinalizedStatuses(n) {
        let { hasError: r, thrownError: o, isStopped: i } = this;
        r ? n.error(o) : i && n.complete();
      }
      asObservable() {
        let n = new N();
        return (n.source = this), n;
      }
    }
    return (e.create = (t, n) => new Rn(t, n)), e;
  })(),
  Rn = class extends Me {
    constructor(t, n) {
      super(), (this.destination = t), (this.source = n);
    }
    next(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.next) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    error(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.error) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    complete() {
      var t, n;
      (n =
        (t = this.destination) === null || t === void 0
          ? void 0
          : t.complete) === null ||
        n === void 0 ||
        n.call(t);
    }
    _subscribe(t) {
      var n, r;
      return (r =
        (n = this.source) === null || n === void 0
          ? void 0
          : n.subscribe(t)) !== null && r !== void 0
        ? r
        : Mo;
    }
  };
var $t = class extends Me {
  constructor(t) {
    super(), (this._value = t);
  }
  get value() {
    return this.getValue();
  }
  _subscribe(t) {
    let n = super._subscribe(t);
    return !n.closed && t.next(this._value), n;
  }
  getValue() {
    let { hasError: t, thrownError: n, _value: r } = this;
    if (t) throw n;
    return this._throwIfClosed(), r;
  }
  next(t) {
    super.next((this._value = t));
  }
};
var Ut = new N((e) => e.complete());
function da(e) {
  return e && I(e.schedule);
}
function fa(e) {
  return e[e.length - 1];
}
function On(e) {
  return I(fa(e)) ? e.pop() : void 0;
}
function Ce(e) {
  return da(fa(e)) ? e.pop() : void 0;
}
function ha(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (s) {
          s(i);
        });
  }
  return new (n || (n = Promise))(function (i, s) {
    function a(u) {
      try {
        l(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function l(u) {
      u.done ? i(u.value) : o(u.value).then(a, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}
function pa(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function Fe(e) {
  return this instanceof Fe ? ((this.v = e), this) : new Fe(e);
}
function ga(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []),
    o,
    i = [];
  return (
    (o = Object.create(
      (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype
    )),
    a("next"),
    a("throw"),
    a("return", s),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function s(d) {
    return function (h) {
      return Promise.resolve(h).then(d, f);
    };
  }
  function a(d, h) {
    r[d] &&
      ((o[d] = function (g) {
        return new Promise(function (x, C) {
          i.push([d, g, x, C]) > 1 || c(d, g);
        });
      }),
      h && (o[d] = h(o[d])));
  }
  function c(d, h) {
    try {
      l(r[d](h));
    } catch (g) {
      p(i[0][3], g);
    }
  }
  function l(d) {
    d.value instanceof Fe
      ? Promise.resolve(d.value.v).then(u, f)
      : p(i[0][2], d);
  }
  function u(d) {
    c("next", d);
  }
  function f(d) {
    c("throw", d);
  }
  function p(d, h) {
    d(h), i.shift(), i.length && c(i[0][0], i[0][1]);
  }
}
function ma(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof pa == "function" ? pa(e) : e[Symbol.iterator]()),
      (n = {}),
      r("next"),
      r("throw"),
      r("return"),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(i) {
    n[i] =
      e[i] &&
      function (s) {
        return new Promise(function (a, c) {
          (s = e[i](s)), o(a, c, s.done, s.value);
        });
      };
  }
  function o(i, s, a, c) {
    Promise.resolve(c).then(function (l) {
      i({ value: l, done: a });
    }, s);
  }
}
var An = (e) => e && typeof e.length == "number" && typeof e != "function";
function Pn(e) {
  return I(e?.then);
}
function Ln(e) {
  return I(e[ut]);
}
function Fn(e) {
  return Symbol.asyncIterator && I(e?.[Symbol.asyncIterator]);
}
function jn(e) {
  return new TypeError(
    `You provided ${
      e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`
    } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
  );
}
function wd() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var Vn = wd();
function Hn(e) {
  return I(e?.[Vn]);
}
function Bn(e) {
  return ga(this, arguments, function* () {
    let n = e.getReader();
    try {
      for (;;) {
        let { value: r, done: o } = yield Fe(n.read());
        if (o) return yield Fe(void 0);
        yield yield Fe(r);
      }
    } finally {
      n.releaseLock();
    }
  });
}
function $n(e) {
  return I(e?.getReader);
}
function P(e) {
  if (e instanceof N) return e;
  if (e != null) {
    if (Ln(e)) return bd(e);
    if (An(e)) return Md(e);
    if (Pn(e)) return Cd(e);
    if (Fn(e)) return ya(e);
    if (Hn(e)) return _d(e);
    if ($n(e)) return Td(e);
  }
  throw jn(e);
}
function bd(e) {
  return new N((t) => {
    let n = e[ut]();
    if (I(n.subscribe)) return n.subscribe(t);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable"
    );
  });
}
function Md(e) {
  return new N((t) => {
    for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}
function Cd(e) {
  return new N((t) => {
    e.then(
      (n) => {
        t.closed || (t.next(n), t.complete());
      },
      (n) => t.error(n)
    ).then(null, Sn);
  });
}
function _d(e) {
  return new N((t) => {
    for (let n of e) if ((t.next(n), t.closed)) return;
    t.complete();
  });
}
function ya(e) {
  return new N((t) => {
    xd(e, t).catch((n) => t.error(n));
  });
}
function Td(e) {
  return ya(Bn(e));
}
function xd(e, t) {
  var n, r, o, i;
  return ha(this, void 0, void 0, function* () {
    try {
      for (n = ma(e); (r = yield n.next()), !r.done; ) {
        let s = r.value;
        if ((t.next(s), t.closed)) return;
      }
    } catch (s) {
      o = { error: s };
    } finally {
      try {
        r && !r.done && (i = n.return) && (yield i.call(n));
      } finally {
        if (o) throw o.error;
      }
    }
    t.complete();
  });
}
function z(e, t, n, r = 0, o = !1) {
  let i = t.schedule(function () {
    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if ((e.add(i), !o)) return i;
}
function Un(e, t = 0) {
  return _((n, r) => {
    n.subscribe(
      M(
        r,
        (o) => z(r, e, () => r.next(o), t),
        () => z(r, e, () => r.complete(), t),
        (o) => z(r, e, () => r.error(o), t)
      )
    );
  });
}
function qn(e, t = 0) {
  return _((n, r) => {
    r.add(e.schedule(() => n.subscribe(r), t));
  });
}
function va(e, t) {
  return P(e).pipe(qn(t), Un(t));
}
function Ia(e, t) {
  return P(e).pipe(qn(t), Un(t));
}
function Ea(e, t) {
  return new N((n) => {
    let r = 0;
    return t.schedule(function () {
      r === e.length
        ? n.complete()
        : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function Da(e, t) {
  return new N((n) => {
    let r;
    return (
      z(n, t, () => {
        (r = e[Vn]()),
          z(
            n,
            t,
            () => {
              let o, i;
              try {
                ({ value: o, done: i } = r.next());
              } catch (s) {
                n.error(s);
                return;
              }
              i ? n.complete() : n.next(o);
            },
            0,
            !0
          );
      }),
      () => I(r?.return) && r.return()
    );
  });
}
function Wn(e, t) {
  if (!e) throw new Error("Iterable cannot be null");
  return new N((n) => {
    z(n, t, () => {
      let r = e[Symbol.asyncIterator]();
      z(
        n,
        t,
        () => {
          r.next().then((o) => {
            o.done ? n.complete() : n.next(o.value);
          });
        },
        0,
        !0
      );
    });
  });
}
function wa(e, t) {
  return Wn(Bn(e), t);
}
function ba(e, t) {
  if (e != null) {
    if (Ln(e)) return va(e, t);
    if (An(e)) return Ea(e, t);
    if (Pn(e)) return Ia(e, t);
    if (Fn(e)) return Wn(e, t);
    if (Hn(e)) return Da(e, t);
    if ($n(e)) return wa(e, t);
  }
  throw jn(e);
}
function _e(e, t) {
  return t ? ba(e, t) : P(e);
}
function Nd(...e) {
  let t = Ce(e);
  return _e(e, t);
}
function Sd(e, t) {
  let n = I(e) ? e : () => e,
    r = (o) => o.error(n());
  return new N(t ? (o) => t.schedule(r, 0, o) : r);
}
function kd(e) {
  return !!e && (e instanceof N || (I(e.lift) && I(e.subscribe)));
}
var je = st(
  (e) =>
    function () {
      e(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    }
);
function Ve(e, t) {
  return _((n, r) => {
    let o = 0;
    n.subscribe(
      M(r, (i) => {
        r.next(e.call(t, i, o++));
      })
    );
  });
}
var { isArray: Rd } = Array;
function Od(e, t) {
  return Rd(t) ? e(...t) : e(t);
}
function zn(e) {
  return Ve((t) => Od(e, t));
}
var { isArray: Ad } = Array,
  { getPrototypeOf: Pd, prototype: Ld, keys: Fd } = Object;
function Gn(e) {
  if (e.length === 1) {
    let t = e[0];
    if (Ad(t)) return { args: t, keys: null };
    if (jd(t)) {
      let n = Fd(t);
      return { args: n.map((r) => t[r]), keys: n };
    }
  }
  return { args: e, keys: null };
}
function jd(e) {
  return e && typeof e == "object" && Pd(e) === Ld;
}
function Qn(e, t) {
  return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
}
function Vd(...e) {
  let t = Ce(e),
    n = On(e),
    { args: r, keys: o } = Gn(e);
  if (r.length === 0) return _e([], t);
  let i = new N(Hd(r, t, o ? (s) => Qn(o, s) : ee));
  return n ? i.pipe(zn(n)) : i;
}
function Hd(e, t, n = ee) {
  return (r) => {
    Ma(
      t,
      () => {
        let { length: o } = e,
          i = new Array(o),
          s = o,
          a = o;
        for (let c = 0; c < o; c++)
          Ma(
            t,
            () => {
              let l = _e(e[c], t),
                u = !1;
              l.subscribe(
                M(
                  r,
                  (f) => {
                    (i[c] = f), u || ((u = !0), a--), a || r.next(n(i.slice()));
                  },
                  () => {
                    --s || r.complete();
                  }
                )
              );
            },
            r
          );
      },
      r
    );
  };
}
function Ma(e, t, n) {
  e ? z(n, e, t) : t();
}
function Ca(e, t, n, r, o, i, s, a) {
  let c = [],
    l = 0,
    u = 0,
    f = !1,
    p = () => {
      f && !c.length && !l && t.complete();
    },
    d = (g) => (l < r ? h(g) : c.push(g)),
    h = (g) => {
      i && t.next(g), l++;
      let x = !1;
      P(n(g, u++)).subscribe(
        M(
          t,
          (C) => {
            o?.(C), i ? d(C) : t.next(C);
          },
          () => {
            x = !0;
          },
          void 0,
          () => {
            if (x)
              try {
                for (l--; c.length && l < r; ) {
                  let C = c.shift();
                  s ? z(t, s, () => h(C)) : h(C);
                }
                p();
              } catch (C) {
                t.error(C);
              }
          }
        )
      );
    };
  return (
    e.subscribe(
      M(t, d, () => {
        (f = !0), p();
      })
    ),
    () => {
      a?.();
    }
  );
}
function He(e, t, n = 1 / 0) {
  return I(t)
    ? He((r, o) => Ve((i, s) => t(r, i, o, s))(P(e(r, o))), n)
    : (typeof t == "number" && (n = t), _((r, o) => Ca(r, o, e, n)));
}
function Ao(e = 1 / 0) {
  return He(ee, e);
}
function _a() {
  return Ao(1);
}
function Zn(...e) {
  return _a()(_e(e, Ce(e)));
}
function Bd(e) {
  return new N((t) => {
    P(e()).subscribe(t);
  });
}
function $d(...e) {
  let t = On(e),
    { args: n, keys: r } = Gn(e),
    o = new N((i) => {
      let { length: s } = n;
      if (!s) {
        i.complete();
        return;
      }
      let a = new Array(s),
        c = s,
        l = s;
      for (let u = 0; u < s; u++) {
        let f = !1;
        P(n[u]).subscribe(
          M(
            i,
            (p) => {
              f || ((f = !0), l--), (a[u] = p);
            },
            () => c--,
            void 0,
            () => {
              (!c || !f) && (l || i.next(r ? Qn(r, a) : a), i.complete());
            }
          )
        );
      }
    });
  return t ? o.pipe(zn(t)) : o;
}
function qt(e, t) {
  return _((n, r) => {
    let o = 0;
    n.subscribe(M(r, (i) => e.call(t, i, o++) && r.next(i)));
  });
}
function Ta(e) {
  return _((t, n) => {
    let r = null,
      o = !1,
      i;
    (r = t.subscribe(
      M(n, void 0, void 0, (s) => {
        (i = P(e(s, Ta(e)(t)))),
          r ? (r.unsubscribe(), (r = null), i.subscribe(n)) : (o = !0);
      })
    )),
      o && (r.unsubscribe(), (r = null), i.subscribe(n));
  });
}
function xa(e, t, n, r, o) {
  return (i, s) => {
    let a = n,
      c = t,
      l = 0;
    i.subscribe(
      M(
        s,
        (u) => {
          let f = l++;
          (c = a ? e(c, u, f) : ((a = !0), u)), r && s.next(c);
        },
        o &&
          (() => {
            a && s.next(c), s.complete();
          })
      )
    );
  };
}
function Ud(e, t) {
  return I(t) ? He(e, t, 1) : He(e, 1);
}
function Wt(e) {
  return _((t, n) => {
    let r = !1;
    t.subscribe(
      M(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => {
          r || n.next(e), n.complete();
        }
      )
    );
  });
}
function Po(e) {
  return e <= 0
    ? () => Ut
    : _((t, n) => {
        let r = 0;
        t.subscribe(
          M(n, (o) => {
            ++r <= e && (n.next(o), e <= r && n.complete());
          })
        );
      });
}
function Yn(e = qd) {
  return _((t, n) => {
    let r = !1;
    t.subscribe(
      M(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => (r ? n.complete() : n.error(e()))
      )
    );
  });
}
function qd() {
  return new je();
}
function Wd(e) {
  return _((t, n) => {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function zd(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? qt((o, i) => e(o, i, r)) : ee,
      Po(1),
      n ? Wt(t) : Yn(() => new je())
    );
}
function Lo(e) {
  return e <= 0
    ? () => Ut
    : _((t, n) => {
        let r = [];
        t.subscribe(
          M(
            n,
            (o) => {
              r.push(o), e < r.length && r.shift();
            },
            () => {
              for (let o of r) n.next(o);
              n.complete();
            },
            void 0,
            () => {
              r = null;
            }
          )
        );
      });
}
function Gd(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? qt((o, i) => e(o, i, r)) : ee,
      Lo(1),
      n ? Wt(t) : Yn(() => new je())
    );
}
function Qd(e, t) {
  return _(xa(e, t, arguments.length >= 2, !0));
}
function Zd(...e) {
  let t = Ce(e);
  return _((n, r) => {
    (t ? Zn(e, n, t) : Zn(e, n)).subscribe(r);
  });
}
function Yd(e, t) {
  return _((n, r) => {
    let o = null,
      i = 0,
      s = !1,
      a = () => s && !o && r.complete();
    n.subscribe(
      M(
        r,
        (c) => {
          o?.unsubscribe();
          let l = 0,
            u = i++;
          P(e(c, u)).subscribe(
            (o = M(
              r,
              (f) => r.next(t ? t(c, f, u, l++) : f),
              () => {
                (o = null), a();
              }
            ))
          );
        },
        () => {
          (s = !0), a();
        }
      )
    );
  });
}
function Jd(e) {
  return _((t, n) => {
    P(e).subscribe(M(n, () => n.complete(), Bt)), !n.closed && t.subscribe(n);
  });
}
function Kd(e, t, n) {
  let r = I(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r
    ? _((o, i) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        o.subscribe(
          M(
            i,
            (c) => {
              var l;
              (l = r.next) === null || l === void 0 || l.call(r, c), i.next(c);
            },
            () => {
              var c;
              (a = !1),
                (c = r.complete) === null || c === void 0 || c.call(r),
                i.complete();
            },
            (c) => {
              var l;
              (a = !1),
                (l = r.error) === null || l === void 0 || l.call(r, c),
                i.error(c);
            },
            () => {
              var c, l;
              a && ((c = r.unsubscribe) === null || c === void 0 || c.call(r)),
                (l = r.finalize) === null || l === void 0 || l.call(r);
            }
          )
        );
      })
    : ee;
}
var vc =
    "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",
  T = class extends Error {
    code;
    constructor(t, n) {
      super(ef(t, n)), (this.code = t);
    }
  };
function Xd(e) {
  return `NG0${Math.abs(e)}`;
}
function ef(e, t) {
  return `${Xd(e)}${t ? ": " + t : ""}`;
}
var Ic = Symbol("InputSignalNode#UNSET"),
  tf = X(K({}, _n), {
    transformFn: void 0,
    applyValueToInputSignal(e, t) {
      jt(e, t);
    },
  });
function Ec(e, t) {
  let n = Object.create(tf);
  (n.value = e), (n.transformFn = t?.transform);
  function r() {
    if ((Pt(n), n.value === Ic)) {
      let o = null;
      throw new T(-950, o);
    }
    return n.value;
  }
  return (r[ne] = n), r;
}
function fn(e) {
  return { toString: e }.toString();
}
var Jn = "__parameters__";
function nf(e) {
  return function (...n) {
    if (e) {
      let r = e(...n);
      for (let o in r) this[o] = r[o];
    }
  };
}
function Dc(e, t, n) {
  return fn(() => {
    let r = nf(t);
    function o(...i) {
      if (this instanceof o) return r.apply(this, i), this;
      let s = new o(...i);
      return (a.annotation = s), a;
      function a(c, l, u) {
        let f = c.hasOwnProperty(Jn)
          ? c[Jn]
          : Object.defineProperty(c, Jn, { value: [] })[Jn];
        for (; f.length <= u; ) f.push(null);
        return (f[u] = f[u] || []).push(s), c;
      }
    }
    return (o.prototype.ngMetadataName = e), (o.annotationCls = o), o;
  });
}
var dt = globalThis;
function R(e) {
  for (let t in e) if (e[t] === R) return t;
  throw Error("Could not find renamed property on target object.");
}
function rf(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function Y(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return `[${e.map(Y).join(", ")}]`;
  if (e == null) return "" + e;
  let t = e.overriddenName || e.name;
  if (t) return `${t}`;
  let n = e.toString();
  if (n == null) return "" + n;
  let r = n.indexOf(`
`);
  return r >= 0 ? n.slice(0, r) : n;
}
function Xo(e, t) {
  return e ? (t ? `${e} ${t}` : e) : t || "";
}
var of = R({ __forward_ref__: R });
function wc(e) {
  return (
    (e.__forward_ref__ = wc),
    (e.toString = function () {
      return Y(this());
    }),
    e
  );
}
function W(e) {
  return bc(e) ? e() : e;
}
function bc(e) {
  return (
    typeof e == "function" && e.hasOwnProperty(of) && e.__forward_ref__ === wc
  );
}
function H(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function HM(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function Fr(e) {
  return Na(e, Mc) || Na(e, Cc);
}
function BM(e) {
  return Fr(e) !== null;
}
function Na(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function sf(e) {
  let t = e && (e[Mc] || e[Cc]);
  return t || null;
}
function Sa(e) {
  return e && (e.hasOwnProperty(ka) || e.hasOwnProperty(af)) ? e[ka] : null;
}
var Mc = R({ ɵprov: R }),
  ka = R({ ɵinj: R }),
  Cc = R({ ngInjectableDef: R }),
  af = R({ ngInjectorDef: R }),
  k = class {
    _desc;
    ngMetadataName = "InjectionToken";
    ɵprov;
    constructor(t, n) {
      (this._desc = t),
        (this.ɵprov = void 0),
        typeof n == "number"
          ? (this.__NG_ELEMENT_ID__ = n)
          : n !== void 0 &&
            (this.ɵprov = H({
              token: this,
              providedIn: n.providedIn || "root",
              factory: n.factory,
            }));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };
function _c(e) {
  return e && !!e.ɵproviders;
}
var cf = R({ ɵcmp: R }),
  lf = R({ ɵdir: R }),
  uf = R({ ɵpipe: R }),
  df = R({ ɵmod: R }),
  ar = R({ ɵfac: R }),
  Zt = R({ __NG_ELEMENT_ID__: R }),
  Ra = R({ __NG_ENV_ID__: R });
function jr(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}
function ff(e) {
  return typeof e == "function"
    ? e.name || e.toString()
    : typeof e == "object" && e != null && typeof e.type == "function"
    ? e.type.name || e.type.toString()
    : jr(e);
}
function Tc(e, t) {
  throw new T(-200, e);
}
function ns(e, t) {
  throw new T(-201, !1);
}
var w = (function (e) {
    return (
      (e[(e.Default = 0)] = "Default"),
      (e[(e.Host = 1)] = "Host"),
      (e[(e.Self = 2)] = "Self"),
      (e[(e.SkipSelf = 4)] = "SkipSelf"),
      (e[(e.Optional = 8)] = "Optional"),
      e
    );
  })(w || {}),
  ei;
function xc() {
  return ei;
}
function G(e) {
  let t = ei;
  return (ei = e), t;
}
function Nc(e, t, n) {
  let r = Fr(e);
  if (r && r.providedIn == "root")
    return r.value === void 0 ? (r.value = r.factory()) : r.value;
  if (n & w.Optional) return null;
  if (t !== void 0) return t;
  ns(e, "Injector");
}
var pf = {},
  Ue = pf,
  ti = "__NG_DI_FLAG__",
  cr = class {
    injector;
    constructor(t) {
      this.injector = t;
    }
    retrieve(t, n) {
      let r = n;
      return this.injector.get(t, r.optional ? Tn : Ue, r);
    }
  },
  lr = "ngTempTokenPath",
  hf = "ngTokenPath",
  gf = /\n/gm,
  mf = "\u0275",
  Oa = "__source";
function yf(e, t = w.Default) {
  if (Vt() === void 0) throw new T(-203, !1);
  if (Vt() === null) return Nc(e, void 0, t);
  {
    let n = Vt(),
      r;
    return (
      n instanceof cr ? (r = n.injector) : (r = n),
      r.get(e, t & w.Optional ? null : void 0, t)
    );
  }
}
function Se(e, t = w.Default) {
  return (xc() || yf)(W(e), t);
}
function b(e, t = w.Default) {
  return Se(e, Vr(t));
}
function Vr(e) {
  return typeof e > "u" || typeof e == "number"
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function ni(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = W(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0) throw new T(900, !1);
      let o,
        i = w.Default;
      for (let s = 0; s < r.length; s++) {
        let a = r[s],
          c = vf(a);
        typeof c == "number" ? (c === -1 ? (o = a.token) : (i |= c)) : (o = a);
      }
      t.push(Se(o, i));
    } else t.push(Se(r));
  }
  return t;
}
function Sc(e, t) {
  return (e[ti] = t), (e.prototype[ti] = t), e;
}
function vf(e) {
  return e[ti];
}
function If(e, t, n, r) {
  let o = e[lr];
  throw (
    (t[Oa] && o.unshift(t[Oa]),
    (e.message = Ef(
      `
` + e.message,
      o,
      n,
      r
    )),
    (e[hf] = o),
    (e[lr] = null),
    e)
  );
}
function Ef(e, t, n, r = null) {
  e =
    e &&
    e.charAt(0) ===
      `
` &&
    e.charAt(1) == mf
      ? e.slice(2)
      : e;
  let o = Y(t);
  if (Array.isArray(t)) o = t.map(Y).join(" -> ");
  else if (typeof t == "object") {
    let i = [];
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        let a = t[s];
        i.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : Y(a)));
      }
    o = `{${i.join(", ")}}`;
  }
  return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
    gf,
    `
  `
  )}`;
}
var Df = Sc(Dc("Optional"), 8);
var wf = Sc(Dc("SkipSelf"), 4);
function We(e, t) {
  let n = e.hasOwnProperty(ar);
  return n ? e[ar] : null;
}
function bf(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r],
      i = t[r];
    if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
  }
  return !0;
}
function Mf(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function rs(e, t) {
  e.forEach((n) => (Array.isArray(n) ? rs(n, t) : t(n)));
}
function kc(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function ur(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function Cf(e, t, n, r) {
  let o = e.length;
  if (o == t) e.push(n, r);
  else if (o === 1) e.push(r, e[0]), (e[0] = n);
  else {
    for (o--, e.push(e[o - 1], e[o]); o > t; ) {
      let i = o - 2;
      (e[o] = e[i]), o--;
    }
    (e[t] = n), (e[t + 1] = r);
  }
}
function os(e, t, n) {
  let r = pn(e, t);
  return r >= 0 ? (e[r | 1] = n) : ((r = ~r), Cf(e, r, t, n)), r;
}
function Fo(e, t) {
  let n = pn(e, t);
  if (n >= 0) return e[n | 1];
}
function pn(e, t) {
  return _f(e, t, 1);
}
function _f(e, t, n) {
  let r = 0,
    o = e.length >> n;
  for (; o !== r; ) {
    let i = r + ((o - r) >> 1),
      s = e[i << n];
    if (t === s) return i << n;
    s > t ? (o = i) : (r = i + 1);
  }
  return ~(o << n);
}
var ze = {},
  Z = [],
  dr = new k(""),
  Rc = new k("", -1),
  Oc = new k(""),
  fr = class {
    get(t, n = Ue) {
      if (n === Ue) {
        let r = new Error(`NullInjectorError: No provider for ${Y(t)}!`);
        throw ((r.name = "NullInjectorError"), r);
      }
      return n;
    }
  };
function Ac(e, t) {
  let n = e[df] || null;
  if (!n && t === !0)
    throw new Error(`Type ${Y(e)} does not have '\u0275mod' property.`);
  return n;
}
function ke(e) {
  return e[cf] || null;
}
function Pc(e) {
  return e[lf] || null;
}
function Lc(e) {
  return e[uf] || null;
}
function Fc(e) {
  return { ɵproviders: e };
}
function Tf(...e) {
  return { ɵproviders: is(!0, e), ɵfromNgModule: !0 };
}
function is(e, ...t) {
  let n = [],
    r = new Set(),
    o,
    i = (s) => {
      n.push(s);
    };
  return (
    rs(t, (s) => {
      let a = s;
      ri(a, i, [], r) && ((o ||= []), o.push(a));
    }),
    o !== void 0 && jc(o, i),
    n
  );
}
function jc(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    ss(o, (i) => {
      t(i, r);
    });
  }
}
function ri(e, t, n, r) {
  if (((e = W(e)), !e)) return !1;
  let o = null,
    i = Sa(e),
    s = !i && ke(e);
  if (!i && !s) {
    let c = e.ngModule;
    if (((i = Sa(c)), i)) o = c;
    else return !1;
  } else {
    if (s && !s.standalone) return !1;
    o = e;
  }
  let a = r.has(o);
  if (s) {
    if (a) return !1;
    if ((r.add(o), s.dependencies)) {
      let c =
        typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
      for (let l of c) ri(l, t, n, r);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      r.add(o);
      let l;
      try {
        rs(i.imports, (u) => {
          ri(u, t, n, r) && ((l ||= []), l.push(u));
        });
      } finally {
      }
      l !== void 0 && jc(l, t);
    }
    if (!a) {
      let l = We(o) || (() => new o());
      t({ provide: o, useFactory: l, deps: Z }, o),
        t({ provide: Oc, useValue: o, multi: !0 }, o),
        t({ provide: dr, useValue: () => Se(o), multi: !0 }, o);
    }
    let c = i.providers;
    if (c != null && !a) {
      let l = e;
      ss(c, (u) => {
        t(u, l);
      });
    }
  } else return !1;
  return o !== e && e.providers !== void 0;
}
function ss(e, t) {
  for (let n of e)
    _c(n) && (n = n.ɵproviders), Array.isArray(n) ? ss(n, t) : t(n);
}
var xf = R({ provide: String, useValue: R });
function Vc(e) {
  return e !== null && typeof e == "object" && xf in e;
}
function Nf(e) {
  return !!(e && e.useExisting);
}
function Sf(e) {
  return !!(e && e.useFactory);
}
function It(e) {
  return typeof e == "function";
}
function kf(e) {
  return !!e.useClass;
}
var Hc = new k(""),
  er = {},
  Aa = {},
  jo;
function as() {
  return jo === void 0 && (jo = new fr()), jo;
}
var Ie = class {},
  Jt = class extends Ie {
    parent;
    source;
    scopes;
    records = new Map();
    _ngOnDestroyHooks = new Set();
    _onDestroyHooks = [];
    get destroyed() {
      return this._destroyed;
    }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, r, o) {
      super(),
        (this.parent = n),
        (this.source = r),
        (this.scopes = o),
        ii(t, (s) => this.processProvider(s)),
        this.records.set(Rc, ft(void 0, this)),
        o.has("environment") && this.records.set(Ie, ft(void 0, this));
      let i = this.records.get(Hc);
      i != null && typeof i.value == "string" && this.scopes.add(i.value),
        (this.injectorDefTypes = new Set(this.get(Oc, Z, w.Self)));
    }
    retrieve(t, n) {
      let r = n;
      return this.get(t, r.optional ? Tn : Ue, r);
    }
    destroy() {
      Gt(this), (this._destroyed = !0);
      let t = D(null);
      try {
        for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of n) r();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          D(t);
      }
    }
    onDestroy(t) {
      return (
        Gt(this), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t)
      );
    }
    runInContext(t) {
      Gt(this);
      let n = ve(this),
        r = G(void 0),
        o;
      try {
        return t();
      } finally {
        ve(n), G(r);
      }
    }
    get(t, n = Ue, r = w.Default) {
      if ((Gt(this), t.hasOwnProperty(Ra))) return t[Ra](this);
      r = Vr(r);
      let o,
        i = ve(this),
        s = G(void 0);
      try {
        if (!(r & w.SkipSelf)) {
          let c = this.records.get(t);
          if (c === void 0) {
            let l = Lf(t) && Fr(t);
            l && this.injectableDefInScope(l)
              ? (c = ft(oi(t), er))
              : (c = null),
              this.records.set(t, c);
          }
          if (c != null) return this.hydrate(t, c, r);
        }
        let a = r & w.Self ? as() : this.parent;
        return (n = r & w.Optional && n === Ue ? null : n), a.get(t, n);
      } catch (a) {
        if (a.name === "NullInjectorError") {
          if (((a[lr] = a[lr] || []).unshift(Y(t)), i)) throw a;
          return If(a, t, "R3InjectorError", this.source);
        } else throw a;
      } finally {
        G(s), ve(i);
      }
    }
    resolveInjectorInitializers() {
      let t = D(null),
        n = ve(this),
        r = G(void 0),
        o;
      try {
        let i = this.get(dr, Z, w.Self);
        for (let s of i) s();
      } finally {
        ve(n), G(r), D(t);
      }
    }
    toString() {
      let t = [],
        n = this.records;
      for (let r of n.keys()) t.push(Y(r));
      return `R3Injector[${t.join(", ")}]`;
    }
    processProvider(t) {
      t = W(t);
      let n = It(t) ? t : W(t && t.provide),
        r = Of(t);
      if (!It(t) && t.multi === !0) {
        let o = this.records.get(n);
        o ||
          ((o = ft(void 0, er, !0)),
          (o.factory = () => ni(o.multi)),
          this.records.set(n, o)),
          (n = t),
          o.multi.push(t);
      }
      this.records.set(n, r);
    }
    hydrate(t, n, r) {
      let o = D(null);
      try {
        return (
          n.value === Aa
            ? Tc(Y(t))
            : n.value === er &&
              ((n.value = Aa), (n.value = n.factory(void 0, r))),
          typeof n.value == "object" &&
            n.value &&
            Pf(n.value) &&
            this._ngOnDestroyHooks.add(n.value),
          n.value
        );
      } finally {
        D(o);
      }
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let n = W(t.providedIn);
      return typeof n == "string"
        ? n === "any" || this.scopes.has(n)
        : this.injectorDefTypes.has(n);
    }
    removeOnDestroy(t) {
      let n = this._onDestroyHooks.indexOf(t);
      n !== -1 && this._onDestroyHooks.splice(n, 1);
    }
  };
function oi(e) {
  let t = Fr(e),
    n = t !== null ? t.factory : We(e);
  if (n !== null) return n;
  if (e instanceof k) throw new T(204, !1);
  if (e instanceof Function) return Rf(e);
  throw new T(204, !1);
}
function Rf(e) {
  if (e.length > 0) throw new T(204, !1);
  let n = sf(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function Of(e) {
  if (Vc(e)) return ft(void 0, e.useValue);
  {
    let t = Bc(e);
    return ft(t, er);
  }
}
function Bc(e, t, n) {
  let r;
  if (It(e)) {
    let o = W(e);
    return We(o) || oi(o);
  } else if (Vc(e)) r = () => W(e.useValue);
  else if (Sf(e)) r = () => e.useFactory(...ni(e.deps || []));
  else if (Nf(e))
    r = (o, i) =>
      Se(
        W(e.useExisting),
        i !== void 0 && i & w.Optional ? w.Optional : void 0
      );
  else {
    let o = W(e && (e.useClass || e.provide));
    if (Af(e)) r = () => new o(...ni(e.deps));
    else return We(o) || oi(o);
  }
  return r;
}
function Gt(e) {
  if (e.destroyed) throw new T(205, !1);
}
function ft(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}
function Af(e) {
  return !!e.deps;
}
function Pf(e) {
  return (
    e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
  );
}
function Lf(e) {
  return typeof e == "function" || (typeof e == "object" && e instanceof k);
}
function ii(e, t) {
  for (let n of e)
    Array.isArray(n) ? ii(n, t) : n && _c(n) ? ii(n.ɵproviders, t) : t(n);
}
function $c(e, t) {
  let n;
  e instanceof Jt ? (Gt(e), (n = e)) : (n = new cr(e));
  let r,
    o = ve(n),
    i = G(void 0);
  try {
    return t();
  } finally {
    ve(o), G(i);
  }
}
function Uc() {
  return xc() !== void 0 || Vt() != null;
}
function qc(e) {
  if (!Uc()) throw new T(-203, !1);
}
function Ff(e) {
  return typeof e == "function";
}
var we = 0,
  m = 1,
  v = 2,
  $ = 3,
  ce = 4,
  ue = 5,
  Kt = 6,
  pr = 7,
  j = 8,
  oe = 9,
  Ee = 10,
  O = 11,
  Xt = 12,
  Pa = 13,
  Ct = 14,
  le = 15,
  Ge = 16,
  pt = 17,
  De = 18,
  Hr = 19,
  Wc = 20,
  xe = 21,
  Vo = 22,
  Qe = 23,
  re = 24,
  mt = 25,
  V = 26,
  zc = 1,
  en = 6,
  Ze = 7,
  hr = 8,
  Et = 9,
  U = 10;
function Ne(e) {
  return Array.isArray(e) && typeof e[zc] == "object";
}
function be(e) {
  return Array.isArray(e) && e[zc] === !0;
}
function cs(e) {
  return (e.flags & 4) !== 0;
}
function _t(e) {
  return e.componentOffset > -1;
}
function Br(e) {
  return (e.flags & 1) === 1;
}
function pe(e) {
  return !!e.template;
}
function gr(e) {
  return (e[v] & 512) !== 0;
}
function nt(e) {
  return (e[v] & 256) === 256;
}
var si = class {
  previousValue;
  currentValue;
  firstChange;
  constructor(t, n, r) {
    (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function Gc(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : (e[n] = r);
}
var $M = (() => {
  let e = () => Qc;
  return (e.ngInherit = !0), e;
})();
function Qc(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = Vf), jf;
}
function jf() {
  let e = Yc(this),
    t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === ze) e.previous = t;
    else for (let r in t) n[r] = t[r];
    (e.current = null), this.ngOnChanges(t);
  }
}
function Vf(e, t, n, r, o) {
  let i = this.declaredInputs[r],
    s = Yc(e) || Hf(e, { previous: ze, current: null }),
    a = s.current || (s.current = {}),
    c = s.previous,
    l = c[i];
  (a[i] = new si(l && l.currentValue, n, c === ze)), Gc(e, t, o, n);
}
var Zc = "__ngSimpleChanges__";
function Yc(e) {
  return e[Zc] || null;
}
function Hf(e, t) {
  return (e[Zc] = t);
}
var La = null;
var S = function (e, t = null, n) {
    La?.(e, t, n);
  },
  Jc = "svg",
  Bf = "math";
function he(e) {
  for (; Array.isArray(e); ) e = e[we];
  return e;
}
function Kc(e, t) {
  return he(t[e]);
}
function me(e, t) {
  return he(t[e.index]);
}
function hn(e, t) {
  return e.data[t];
}
function Xc(e, t) {
  return e[t];
}
function $f(e, t, n, r) {
  n >= e.data.length && ((e.data[n] = null), (e.blueprint[n] = null)),
    (t[n] = r);
}
function ge(e, t) {
  let n = t[e];
  return Ne(n) ? n : n[we];
}
function Uf(e) {
  return (e[v] & 4) === 4;
}
function ls(e) {
  return (e[v] & 128) === 128;
}
function qf(e) {
  return be(e[$]);
}
function Re(e, t) {
  return t == null ? null : e[t];
}
function el(e) {
  e[pt] = 0;
}
function tl(e) {
  e[v] & 1024 || ((e[v] |= 1024), ls(e) && Tt(e));
}
function Wf(e, t) {
  for (; e > 0; ) (t = t[Ct]), e--;
  return t;
}
function $r(e) {
  return !!(e[v] & 9216 || e[re]?.dirty);
}
function ai(e) {
  e[Ee].changeDetectionScheduler?.notify(8),
    e[v] & 64 && (e[v] |= 1024),
    $r(e) && Tt(e);
}
function Tt(e) {
  e[Ee].changeDetectionScheduler?.notify(0);
  let t = Ye(e);
  for (; t !== null && !(t[v] & 8192 || ((t[v] |= 8192), !ls(t))); ) t = Ye(t);
}
function us(e, t) {
  if (nt(e)) throw new T(911, !1);
  e[xe] === null && (e[xe] = []), e[xe].push(t);
}
function nl(e, t) {
  if (e[xe] === null) return;
  let n = e[xe].indexOf(t);
  n !== -1 && e[xe].splice(n, 1);
}
function Ye(e) {
  let t = e[$];
  return be(t) ? t[$] : t;
}
function ds(e) {
  return (e[pr] ??= []);
}
function fs(e) {
  return (e.cleanup ??= []);
}
function zf(e, t, n, r) {
  let o = ds(t);
  o.push(n), e.firstCreatePass && fs(e).push(r, o.length - 1);
}
var E = { lFrame: ul(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var ci = !1;
function Gf() {
  return E.lFrame.elementDepthCount;
}
function Qf() {
  E.lFrame.elementDepthCount++;
}
function Zf() {
  E.lFrame.elementDepthCount--;
}
function ps() {
  return E.bindingsEnabled;
}
function Yf() {
  return E.skipHydrationRootTNode !== null;
}
function Jf(e) {
  return E.skipHydrationRootTNode === e;
}
function Kf() {
  E.skipHydrationRootTNode = null;
}
function y() {
  return E.lFrame.lView;
}
function A() {
  return E.lFrame.tView;
}
function UM(e) {
  return (E.lFrame.contextLView = e), e[j];
}
function qM(e) {
  return (E.lFrame.contextLView = null), e;
}
function q() {
  let e = rl();
  for (; e !== null && e.type === 64; ) e = e.parent;
  return e;
}
function rl() {
  return E.lFrame.currentTNode;
}
function Xf() {
  let e = E.lFrame,
    t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function rt(e, t) {
  let n = E.lFrame;
  (n.currentTNode = e), (n.isParent = t);
}
function hs() {
  return E.lFrame.isParent;
}
function ol() {
  E.lFrame.isParent = !1;
}
function ep() {
  return E.lFrame.contextLView;
}
function il() {
  return ci;
}
function mr(e) {
  let t = ci;
  return (ci = e), t;
}
function ot() {
  let e = E.lFrame,
    t = e.bindingRootIndex;
  return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t;
}
function tp(e) {
  return (E.lFrame.bindingIndex = e);
}
function xt() {
  return E.lFrame.bindingIndex++;
}
function sl(e) {
  let t = E.lFrame,
    n = t.bindingIndex;
  return (t.bindingIndex = t.bindingIndex + e), n;
}
function np() {
  return E.lFrame.inI18n;
}
function rp(e, t) {
  let n = E.lFrame;
  (n.bindingIndex = n.bindingRootIndex = e), li(t);
}
function op() {
  return E.lFrame.currentDirectiveIndex;
}
function li(e) {
  E.lFrame.currentDirectiveIndex = e;
}
function ip(e) {
  let t = E.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function al() {
  return E.lFrame.currentQueryIndex;
}
function gs(e) {
  E.lFrame.currentQueryIndex = e;
}
function sp(e) {
  let t = e[m];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[ue] : null;
}
function cl(e, t, n) {
  if (n & w.SkipSelf) {
    let o = t,
      i = e;
    for (; (o = o.parent), o === null && !(n & w.Host); )
      if (((o = sp(i)), o === null || ((i = i[Ct]), o.type & 10))) break;
    if (o === null) return !1;
    (t = o), (e = i);
  }
  let r = (E.lFrame = ll());
  return (r.currentTNode = t), (r.lView = e), !0;
}
function ms(e) {
  let t = ll(),
    n = e[m];
  (E.lFrame = t),
    (t.currentTNode = n.firstChild),
    (t.lView = e),
    (t.tView = n),
    (t.contextLView = e),
    (t.bindingIndex = n.bindingStartIndex),
    (t.inI18n = !1);
}
function ll() {
  let e = E.lFrame,
    t = e === null ? null : e.child;
  return t === null ? ul(e) : t;
}
function ul(e) {
  let t = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: e,
    child: null,
    inI18n: !1,
  };
  return e !== null && (e.child = t), t;
}
function dl() {
  let e = E.lFrame;
  return (E.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
}
var fl = dl;
function ys() {
  let e = dl();
  (e.isParent = !0),
    (e.tView = null),
    (e.selectedIndex = -1),
    (e.contextLView = null),
    (e.elementDepthCount = 0),
    (e.currentDirectiveIndex = -1),
    (e.currentNamespace = null),
    (e.bindingRootIndex = -1),
    (e.bindingIndex = -1),
    (e.currentQueryIndex = 0);
}
function ap(e) {
  return (E.lFrame.contextLView = Wf(e, E.lFrame.contextLView))[j];
}
function Ae() {
  return E.lFrame.selectedIndex;
}
function Je(e) {
  E.lFrame.selectedIndex = e;
}
function Ur() {
  let e = E.lFrame;
  return hn(e.tView, e.selectedIndex);
}
function WM() {
  E.lFrame.currentNamespace = Jc;
}
function zM() {
  cp();
}
function cp() {
  E.lFrame.currentNamespace = null;
}
function lp() {
  return E.lFrame.currentNamespace;
}
var pl = !0;
function qr() {
  return pl;
}
function Wr(e) {
  pl = e;
}
function up(e, t, n) {
  let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
  if (r) {
    let s = Qc(t);
    (n.preOrderHooks ??= []).push(e, s),
      (n.preOrderCheckHooks ??= []).push(e, s);
  }
  o && (n.preOrderHooks ??= []).push(0 - e, o),
    i &&
      ((n.preOrderHooks ??= []).push(e, i),
      (n.preOrderCheckHooks ??= []).push(e, i));
}
function vs(e, t) {
  for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    let i = e.data[n].type.prototype,
      {
        ngAfterContentInit: s,
        ngAfterContentChecked: a,
        ngAfterViewInit: c,
        ngAfterViewChecked: l,
        ngOnDestroy: u,
      } = i;
    s && (e.contentHooks ??= []).push(-n, s),
      a &&
        ((e.contentHooks ??= []).push(n, a),
        (e.contentCheckHooks ??= []).push(n, a)),
      c && (e.viewHooks ??= []).push(-n, c),
      l &&
        ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)),
      u != null && (e.destroyHooks ??= []).push(n, u);
  }
}
function tr(e, t, n) {
  hl(e, t, 3, n);
}
function nr(e, t, n, r) {
  (e[v] & 3) === n && hl(e, t, n, r);
}
function Ho(e, t) {
  let n = e[v];
  (n & 3) === t && ((n &= 16383), (n += 1), (e[v] = n));
}
function hl(e, t, n, r) {
  let o = r !== void 0 ? e[pt] & 65535 : 0,
    i = r ?? -1,
    s = t.length - 1,
    a = 0;
  for (let c = o; c < s; c++)
    if (typeof t[c + 1] == "number") {
      if (((a = t[c]), r != null && a >= r)) break;
    } else
      t[c] < 0 && (e[pt] += 65536),
        (a < i || i == -1) &&
          (dp(e, n, t, c), (e[pt] = (e[pt] & 4294901760) + c + 2)),
        c++;
}
function Fa(e, t) {
  S(4, e, t);
  let n = D(null);
  try {
    t.call(e);
  } finally {
    D(n), S(5, e, t);
  }
}
function dp(e, t, n, r) {
  let o = n[r] < 0,
    i = n[r + 1],
    s = o ? -n[r] : n[r],
    a = e[s];
  o
    ? e[v] >> 14 < e[pt] >> 16 &&
      (e[v] & 3) === t &&
      ((e[v] += 16384), Fa(a, i))
    : Fa(a, i);
}
var yt = -1,
  Ke = class {
    factory;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, r) {
      (this.factory = t), (this.canSeeViewProviders = n), (this.injectImpl = r);
    }
  };
function fp(e) {
  return (e.flags & 8) !== 0;
}
function pp(e) {
  return (e.flags & 16) !== 0;
}
function hp(e, t, n) {
  let r = 0;
  for (; r < n.length; ) {
    let o = n[r];
    if (typeof o == "number") {
      if (o !== 0) break;
      r++;
      let i = n[r++],
        s = n[r++],
        a = n[r++];
      e.setAttribute(t, s, a, i);
    } else {
      let i = o,
        s = n[++r];
      mp(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
    }
  }
  return r;
}
function gp(e) {
  return e === 3 || e === 4 || e === 6;
}
function mp(e) {
  return e.charCodeAt(0) === 64;
}
function Dt(e, t) {
  if (!(t === null || t.length === 0))
    if (e === null || e.length === 0) e = t.slice();
    else {
      let n = -1;
      for (let r = 0; r < t.length; r++) {
        let o = t[r];
        typeof o == "number"
          ? (n = o)
          : n === 0 ||
            (n === -1 || n === 2
              ? ja(e, n, o, null, t[++r])
              : ja(e, n, o, null, null));
      }
    }
  return e;
}
function ja(e, t, n, r, o) {
  let i = 0,
    s = e.length;
  if (t === -1) s = -1;
  else
    for (; i < e.length; ) {
      let a = e[i++];
      if (typeof a == "number") {
        if (a === t) {
          s = -1;
          break;
        } else if (a > t) {
          s = i - 1;
          break;
        }
      }
    }
  for (; i < e.length; ) {
    let a = e[i];
    if (typeof a == "number") break;
    if (a === n) {
      o !== null && (e[i + 1] = o);
      return;
    }
    i++, o !== null && i++;
  }
  s !== -1 && (e.splice(s, 0, t), (i = s + 1)),
    e.splice(i++, 0, n),
    o !== null && e.splice(i++, 0, o);
}
function gl(e) {
  return e !== yt;
}
function yr(e) {
  return e & 32767;
}
function yp(e) {
  return e >> 16;
}
function vr(e, t) {
  let n = yp(e),
    r = t;
  for (; n > 0; ) (r = r[Ct]), n--;
  return r;
}
var ui = !0;
function Ir(e) {
  let t = ui;
  return (ui = e), t;
}
var vp = 256,
  ml = vp - 1,
  yl = 5,
  Ip = 0,
  fe = {};
function Ep(e, t, n) {
  let r;
  typeof n == "string"
    ? (r = n.charCodeAt(0) || 0)
    : n.hasOwnProperty(Zt) && (r = n[Zt]),
    r == null && (r = n[Zt] = Ip++);
  let o = r & ml,
    i = 1 << o;
  t.data[e + (o >> yl)] |= i;
}
function Er(e, t) {
  let n = vl(e, t);
  if (n !== -1) return n;
  let r = t[m];
  r.firstCreatePass &&
    ((e.injectorIndex = t.length),
    Bo(r.data, e),
    Bo(t, null),
    Bo(r.blueprint, null));
  let o = Is(e, t),
    i = e.injectorIndex;
  if (gl(o)) {
    let s = yr(o),
      a = vr(o, t),
      c = a[m].data;
    for (let l = 0; l < 8; l++) t[i + l] = a[s + l] | c[s + l];
  }
  return (t[i + 8] = o), i;
}
function Bo(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function vl(e, t) {
  return e.injectorIndex === -1 ||
    (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
    t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function Is(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0,
    r = null,
    o = t;
  for (; o !== null; ) {
    if (((r = bl(o)), r === null)) return yt;
    if ((n++, (o = o[Ct]), r.injectorIndex !== -1))
      return r.injectorIndex | (n << 16);
  }
  return yt;
}
function di(e, t, n) {
  Ep(e, t, n);
}
function Il(e, t, n) {
  if (n & w.Optional || e !== void 0) return e;
  ns(t, "NodeInjector");
}
function El(e, t, n, r) {
  if (
    (n & w.Optional && r === void 0 && (r = null),
    (n & (w.Self | w.Host)) === 0)
  ) {
    let o = e[oe],
      i = G(void 0);
    try {
      return o ? o.get(t, r, n & w.Optional) : Nc(t, r, n & w.Optional);
    } finally {
      G(i);
    }
  }
  return Il(r, t, n);
}
function Dl(e, t, n, r = w.Default, o) {
  if (e !== null) {
    if (t[v] & 2048 && !(r & w.Self)) {
      let s = Mp(e, t, n, r, fe);
      if (s !== fe) return s;
    }
    let i = wl(e, t, n, r, fe);
    if (i !== fe) return i;
  }
  return El(t, n, r, o);
}
function wl(e, t, n, r, o) {
  let i = wp(n);
  if (typeof i == "function") {
    if (!cl(t, e, r)) return r & w.Host ? Il(o, n, r) : El(t, n, r, o);
    try {
      let s;
      if (((s = i(r)), s == null && !(r & w.Optional))) ns(n);
      else return s;
    } finally {
      fl();
    }
  } else if (typeof i == "number") {
    let s = null,
      a = vl(e, t),
      c = yt,
      l = r & w.Host ? t[le][ue] : null;
    for (
      (a === -1 || r & w.SkipSelf) &&
      ((c = a === -1 ? Is(e, t) : t[a + 8]),
      c === yt || !Ha(r, !1)
        ? (a = -1)
        : ((s = t[m]), (a = yr(c)), (t = vr(c, t))));
      a !== -1;

    ) {
      let u = t[m];
      if (Va(i, a, u.data)) {
        let f = Dp(a, t, n, s, r, l);
        if (f !== fe) return f;
      }
      (c = t[a + 8]),
        c !== yt && Ha(r, t[m].data[a + 8] === l) && Va(i, a, t)
          ? ((s = u), (a = yr(c)), (t = vr(c, t)))
          : (a = -1);
    }
  }
  return o;
}
function Dp(e, t, n, r, o, i) {
  let s = t[m],
    a = s.data[e + 8],
    c = r == null ? _t(a) && ui : r != s && (a.type & 3) !== 0,
    l = o & w.Host && i === a,
    u = rr(a, s, n, c, l);
  return u !== null ? tn(t, s, u, a, o) : fe;
}
function rr(e, t, n, r, o) {
  let i = e.providerIndexes,
    s = t.data,
    a = i & 1048575,
    c = e.directiveStart,
    l = e.directiveEnd,
    u = i >> 20,
    f = r ? a : a + u,
    p = o ? a + u : l;
  for (let d = f; d < p; d++) {
    let h = s[d];
    if ((d < c && n === h) || (d >= c && h.type === n)) return d;
  }
  if (o) {
    let d = s[c];
    if (d && pe(d) && d.type === n) return c;
  }
  return null;
}
function tn(e, t, n, r, o) {
  let i = e[n],
    s = t.data;
  if (i instanceof Ke) {
    let a = i;
    a.resolving && Tc(ff(s[n]));
    let c = Ir(a.canSeeViewProviders);
    a.resolving = !0;
    let l,
      u = a.injectImpl ? G(a.injectImpl) : null,
      f = cl(e, r, w.Default);
    try {
      (i = e[n] = a.factory(void 0, o, s, e, r)),
        t.firstCreatePass && n >= r.directiveStart && up(n, s[n], t);
    } finally {
      u !== null && G(u), Ir(c), (a.resolving = !1), fl();
    }
  }
  return i;
}
function wp(e) {
  if (typeof e == "string") return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(Zt) ? e[Zt] : void 0;
  return typeof t == "number" ? (t >= 0 ? t & ml : bp) : t;
}
function Va(e, t, n) {
  let r = 1 << e;
  return !!(n[t + (e >> yl)] & r);
}
function Ha(e, t) {
  return !(e & w.Self) && !(e & w.Host && t);
}
var qe = class {
  _tNode;
  _lView;
  constructor(t, n) {
    (this._tNode = t), (this._lView = n);
  }
  get(t, n, r) {
    return Dl(this._tNode, this._lView, t, Vr(r), n);
  }
};
function bp() {
  return new qe(q(), y());
}
function GM(e) {
  return fn(() => {
    let t = e.prototype.constructor,
      n = t[ar] || fi(t),
      r = Object.prototype,
      o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== r; ) {
      let i = o[ar] || fi(o);
      if (i && i !== n) return i;
      o = Object.getPrototypeOf(o);
    }
    return (i) => new i();
  });
}
function fi(e) {
  return bc(e)
    ? () => {
        let t = fi(W(e));
        return t && t();
      }
    : We(e);
}
function Mp(e, t, n, r, o) {
  let i = e,
    s = t;
  for (; i !== null && s !== null && s[v] & 2048 && !gr(s); ) {
    let a = wl(i, s, n, r | w.Self, fe);
    if (a !== fe) return a;
    let c = i.parent;
    if (!c) {
      let l = s[Wc];
      if (l) {
        let u = l.get(n, fe, r);
        if (u !== fe) return u;
      }
      (c = bl(s)), (s = s[Ct]);
    }
    i = c;
  }
  return o;
}
function bl(e) {
  let t = e[m],
    n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[ue] : null;
}
function Ba(e, t = null, n = null, r) {
  let o = Ml(e, t, n, r);
  return o.resolveInjectorInitializers(), o;
}
function Ml(e, t = null, n = null, r, o = new Set()) {
  let i = [n || Z, Tf(e)];
  return (
    (r = r || (typeof e == "object" ? void 0 : Y(e))),
    new Jt(i, t || as(), r || null, o)
  );
}
var Xe = class e {
  static THROW_IF_NOT_FOUND = Ue;
  static NULL = new fr();
  static create(t, n) {
    if (Array.isArray(t)) return Ba({ name: "" }, n, t, "");
    {
      let r = t.name ?? "";
      return Ba({ name: r }, t.parent, t.providers, r);
    }
  }
  static ɵprov = H({ token: e, providedIn: "any", factory: () => Se(Rc) });
  static __NG_ELEMENT_ID__ = -1;
};
var Cp = new k("");
Cp.__NG_ELEMENT_ID__ = (e) => {
  let t = q();
  if (t === null) throw new T(204, !1);
  if (t.type & 2) return t.value;
  if (e & w.Optional) return null;
  throw new T(204, !1);
};
var Cl = !1,
  zr = (() => {
    class e {
      static __NG_ELEMENT_ID__ = _p;
      static __NG_ENV_ID__ = (n) => n;
    }
    return e;
  })(),
  Dr = class extends zr {
    _lView;
    constructor(t) {
      super(), (this._lView = t);
    }
    onDestroy(t) {
      let n = this._lView;
      return nt(n) ? (t(), () => {}) : (us(n, t), () => nl(n, t));
    }
  };
function _p() {
  return new Dr(y());
}
var Oe = class {},
  Es = new k("", { providedIn: "root", factory: () => !1 });
var _l = new k(""),
  Tl = new k(""),
  gn = (() => {
    class e {
      taskId = 0;
      pendingTasks = new Set();
      get _hasPendingTasks() {
        return this.hasPendingTasks.value;
      }
      hasPendingTasks = new $t(!1);
      add() {
        this._hasPendingTasks || this.hasPendingTasks.next(!0);
        let n = this.taskId++;
        return this.pendingTasks.add(n), n;
      }
      has(n) {
        return this.pendingTasks.has(n);
      }
      remove(n) {
        this.pendingTasks.delete(n),
          this.pendingTasks.size === 0 &&
            this._hasPendingTasks &&
            this.hasPendingTasks.next(!1);
      }
      ngOnDestroy() {
        this.pendingTasks.clear(),
          this._hasPendingTasks && this.hasPendingTasks.next(!1);
      }
      static ɵprov = H({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })(),
  Tp = (() => {
    class e {
      internalPendingTasks = b(gn);
      scheduler = b(Oe);
      add() {
        let n = this.internalPendingTasks.add();
        return () => {
          this.internalPendingTasks.has(n) &&
            (this.scheduler.notify(11), this.internalPendingTasks.remove(n));
        };
      }
      run(n) {
        return Js(this, null, function* () {
          let r = this.add();
          try {
            return yield n();
          } finally {
            r();
          }
        });
      }
      static ɵprov = H({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })(),
  pi = class extends Me {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) {
      super(),
        (this.__isAsync = t),
        Uc() &&
          ((this.destroyRef = b(zr, { optional: !0 }) ?? void 0),
          (this.pendingTasks = b(gn, { optional: !0 }) ?? void 0));
    }
    emit(t) {
      let n = D(null);
      try {
        super.next(t);
      } finally {
        D(n);
      }
    }
    subscribe(t, n, r) {
      let o = t,
        i = n || (() => null),
        s = r;
      if (t && typeof t == "object") {
        let c = t;
        (o = c.next?.bind(c)),
          (i = c.error?.bind(c)),
          (s = c.complete?.bind(c));
      }
      this.__isAsync &&
        ((i = this.wrapInTimeout(i)),
        o && (o = this.wrapInTimeout(o)),
        s && (s = this.wrapInTimeout(s)));
      let a = super.subscribe({ next: o, error: i, complete: s });
      return t instanceof B && t.add(a), a;
    }
    wrapInTimeout(t) {
      return (n) => {
        let r = this.pendingTasks?.add();
        setTimeout(() => {
          try {
            t(n);
          } finally {
            r !== void 0 && this.pendingTasks?.remove(r);
          }
        });
      };
    }
  },
  Te = pi;
function nn(...e) {}
function xl(e) {
  let t, n;
  function r() {
    e = nn;
    try {
      n !== void 0 &&
        typeof cancelAnimationFrame == "function" &&
        cancelAnimationFrame(n),
        t !== void 0 && clearTimeout(t);
    } catch {}
  }
  return (
    (t = setTimeout(() => {
      e(), r();
    })),
    typeof requestAnimationFrame == "function" &&
      (n = requestAnimationFrame(() => {
        e(), r();
      })),
    () => r()
  );
}
function $a(e) {
  return (
    queueMicrotask(() => e()),
    () => {
      e = nn;
    }
  );
}
var Ds = "isAngularZone",
  wr = Ds + "_ID",
  xp = 0,
  J = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new Te(!1);
    onMicrotaskEmpty = new Te(!1);
    onStable = new Te(!1);
    onError = new Te(!1);
    constructor(t) {
      let {
        enableLongStackTrace: n = !1,
        shouldCoalesceEventChangeDetection: r = !1,
        shouldCoalesceRunChangeDetection: o = !1,
        scheduleInRootZone: i = Cl,
      } = t;
      if (typeof Zone > "u") throw new T(908, !1);
      Zone.assertZonePatched();
      let s = this;
      (s._nesting = 0),
        (s._outer = s._inner = Zone.current),
        Zone.TaskTrackingZoneSpec &&
          (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec())),
        n &&
          Zone.longStackTraceZoneSpec &&
          (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
        (s.shouldCoalesceEventChangeDetection = !o && r),
        (s.shouldCoalesceRunChangeDetection = o),
        (s.callbackScheduled = !1),
        (s.scheduleInRootZone = i),
        kp(s);
    }
    static isInAngularZone() {
      return typeof Zone < "u" && Zone.current.get(Ds) === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new T(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new T(909, !1);
    }
    run(t, n, r) {
      return this._inner.run(t, n, r);
    }
    runTask(t, n, r, o) {
      let i = this._inner,
        s = i.scheduleEventTask("NgZoneEvent: " + o, t, Np, nn, nn);
      try {
        return i.runTask(s, n, r);
      } finally {
        i.cancelTask(s);
      }
    }
    runGuarded(t, n, r) {
      return this._inner.runGuarded(t, n, r);
    }
    runOutsideAngular(t) {
      return this._outer.run(t);
    }
  },
  Np = {};
function ws(e) {
  if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
      e._nesting++, e.onMicrotaskEmpty.emit(null);
    } finally {
      if ((e._nesting--, !e.hasPendingMicrotasks))
        try {
          e.runOutsideAngular(() => e.onStable.emit(null));
        } finally {
          e.isStable = !0;
        }
    }
}
function Sp(e) {
  if (e.isCheckStableRunning || e.callbackScheduled) return;
  e.callbackScheduled = !0;
  function t() {
    xl(() => {
      (e.callbackScheduled = !1),
        hi(e),
        (e.isCheckStableRunning = !0),
        ws(e),
        (e.isCheckStableRunning = !1);
    });
  }
  e.scheduleInRootZone
    ? Zone.root.run(() => {
        t();
      })
    : e._outer.run(() => {
        t();
      }),
    hi(e);
}
function kp(e) {
  let t = () => {
      Sp(e);
    },
    n = xp++;
  e._inner = e._inner.fork({
    name: "angular",
    properties: { [Ds]: !0, [wr]: n, [wr + n]: !0 },
    onInvokeTask: (r, o, i, s, a, c) => {
      if (Rp(c)) return r.invokeTask(i, s, a, c);
      try {
        return Ua(e), r.invokeTask(i, s, a, c);
      } finally {
        ((e.shouldCoalesceEventChangeDetection && s.type === "eventTask") ||
          e.shouldCoalesceRunChangeDetection) &&
          t(),
          qa(e);
      }
    },
    onInvoke: (r, o, i, s, a, c, l) => {
      try {
        return Ua(e), r.invoke(i, s, a, c, l);
      } finally {
        e.shouldCoalesceRunChangeDetection &&
          !e.callbackScheduled &&
          !Op(c) &&
          t(),
          qa(e);
      }
    },
    onHasTask: (r, o, i, s) => {
      r.hasTask(i, s),
        o === i &&
          (s.change == "microTask"
            ? ((e._hasPendingMicrotasks = s.microTask), hi(e), ws(e))
            : s.change == "macroTask" &&
              (e.hasPendingMacrotasks = s.macroTask));
    },
    onHandleError: (r, o, i, s) => (
      r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1
    ),
  });
}
function hi(e) {
  e._hasPendingMicrotasks ||
  ((e.shouldCoalesceEventChangeDetection ||
    e.shouldCoalesceRunChangeDetection) &&
    e.callbackScheduled === !0)
    ? (e.hasPendingMicrotasks = !0)
    : (e.hasPendingMicrotasks = !1);
}
function Ua(e) {
  e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
}
function qa(e) {
  e._nesting--, ws(e);
}
var gi = class {
  hasPendingMicrotasks = !1;
  hasPendingMacrotasks = !1;
  isStable = !0;
  onUnstable = new Te();
  onMicrotaskEmpty = new Te();
  onStable = new Te();
  onError = new Te();
  run(t, n, r) {
    return t.apply(n, r);
  }
  runGuarded(t, n, r) {
    return t.apply(n, r);
  }
  runOutsideAngular(t) {
    return t();
  }
  runTask(t, n, r, o) {
    return t.apply(n, r);
  }
};
function Rp(e) {
  return Nl(e, "__ignore_ng_zone__");
}
function Op(e) {
  return Nl(e, "__scheduler_tick__");
}
function Nl(e, t) {
  return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0;
}
var et = class {
    _console = console;
    handleError(t) {
      this._console.error("ERROR", t);
    }
  },
  Ap = new k("", {
    providedIn: "root",
    factory: () => {
      let e = b(J),
        t = b(et);
      return (n) => e.runOutsideAngular(() => t.handleError(n));
    },
  });
function Wa(e, t) {
  return Ec(e, t);
}
function Pp(e) {
  return Ec(Ic, e);
}
var QM = ((Wa.required = Pp), Wa);
function Lp() {
  return Nt(q(), y());
}
function Nt(e, t) {
  return new Gr(me(e, t));
}
var Gr = (() => {
  class e {
    nativeElement;
    constructor(n) {
      this.nativeElement = n;
    }
    static __NG_ELEMENT_ID__ = Lp;
  }
  return e;
})();
function Fp(e) {
  return e instanceof Gr ? e.nativeElement : e;
}
function jp(e) {
  return typeof e == "function" && e[ne] !== void 0;
}
function ZM(e, t) {
  let n = Eo(e, t?.equal),
    r = n[ne];
  return (
    (n.set = (o) => jt(r, o)),
    (n.update = (o) => Do(r, o)),
    (n.asReadonly = Vp.bind(n)),
    n
  );
}
function Vp() {
  let e = this[ne];
  if (e.readonlyFn === void 0) {
    let t = () => this();
    (t[ne] = e), (e.readonlyFn = t);
  }
  return e.readonlyFn;
}
function Sl(e) {
  return jp(e) && typeof e.set == "function";
}
function Hp() {
  return this._results[Symbol.iterator]();
}
var mi = class {
  _emitDistinctChangesOnly;
  dirty = !0;
  _onDirty = void 0;
  _results = [];
  _changesDetected = !1;
  _changes = void 0;
  length = 0;
  first = void 0;
  last = void 0;
  get changes() {
    return (this._changes ??= new Me());
  }
  constructor(t = !1) {
    this._emitDistinctChangesOnly = t;
  }
  get(t) {
    return this._results[t];
  }
  map(t) {
    return this._results.map(t);
  }
  filter(t) {
    return this._results.filter(t);
  }
  find(t) {
    return this._results.find(t);
  }
  reduce(t, n) {
    return this._results.reduce(t, n);
  }
  forEach(t) {
    this._results.forEach(t);
  }
  some(t) {
    return this._results.some(t);
  }
  toArray() {
    return this._results.slice();
  }
  toString() {
    return this._results.toString();
  }
  reset(t, n) {
    this.dirty = !1;
    let r = Mf(t);
    (this._changesDetected = !bf(this._results, r, n)) &&
      ((this._results = r),
      (this.length = r.length),
      (this.last = r[this.length - 1]),
      (this.first = r[0]));
  }
  notifyOnChanges() {
    this._changes !== void 0 &&
      (this._changesDetected || !this._emitDistinctChangesOnly) &&
      this._changes.next(this);
  }
  onDirty(t) {
    this._onDirty = t;
  }
  setDirty() {
    (this.dirty = !0), this._onDirty?.();
  }
  destroy() {
    this._changes !== void 0 &&
      (this._changes.complete(), this._changes.unsubscribe());
  }
  [Symbol.iterator] = Hp;
};
function kl(e) {
  return (e.flags & 128) === 128;
}
var Rl = (function (e) {
    return (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e;
  })(Rl || {}),
  Ol = new Map(),
  Bp = 0;
function $p() {
  return Bp++;
}
function Up(e) {
  Ol.set(e[Hr], e);
}
function yi(e) {
  Ol.delete(e[Hr]);
}
var za = "__ngContext__";
function St(e, t) {
  Ne(t) ? ((e[za] = t[Hr]), Up(t)) : (e[za] = t);
}
function Al(e) {
  return Ll(e[Xt]);
}
function Pl(e) {
  return Ll(e[ce]);
}
function Ll(e) {
  for (; e !== null && !be(e); ) e = e[ce];
  return e;
}
var vi;
function YM(e) {
  vi = e;
}
function qp() {
  if (vi !== void 0) return vi;
  if (typeof document < "u") return document;
  throw new T(210, !1);
}
var JM = new k("", { providedIn: "root", factory: () => Wp }),
  Wp = "ng",
  zp = new k(""),
  KM = new k("", { providedIn: "platform", factory: () => "unknown" });
var XM = new k("", {
    providedIn: "root",
    factory: () =>
      qp().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") ||
      null,
  }),
  Gp = {
    breakpoints: [
      16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048,
      3840,
    ],
    placeholderResolution: 30,
    disableImageSizeWarning: !1,
    disableImageLazyLoadWarning: !1,
  },
  eC = new k("", { providedIn: "root", factory: () => Gp });
var Qp = "h",
  Zp = "b";
var Yp = "di",
  Fl = "s";
var jl = !1,
  Jp = new k("", { providedIn: "root", factory: () => jl });
var Kp = new k("");
var bs = (function (e) {
    return (
      (e[(e.CHANGE_DETECTION = 0)] = "CHANGE_DETECTION"),
      (e[(e.AFTER_NEXT_RENDER = 1)] = "AFTER_NEXT_RENDER"),
      e
    );
  })(bs || {}),
  Qr = new k(""),
  Ga = new Set();
function kt(e) {
  Ga.has(e) ||
    (Ga.add(e),
    performance?.mark?.("mark_feature_usage", { detail: { feature: e } }));
}
var Ms = (() => {
  class e {
    view;
    node;
    constructor(n, r) {
      (this.view = n), (this.node = r);
    }
    static __NG_ELEMENT_ID__ = Xp;
  }
  return e;
})();
function Xp() {
  return new Ms(y(), q());
}
var ht = (function (e) {
    return (
      (e[(e.EarlyRead = 0)] = "EarlyRead"),
      (e[(e.Write = 1)] = "Write"),
      (e[(e.MixedReadWrite = 2)] = "MixedReadWrite"),
      (e[(e.Read = 3)] = "Read"),
      e
    );
  })(ht || {}),
  Vl = (() => {
    class e {
      impl = null;
      execute() {
        this.impl?.execute();
      }
      static ɵprov = H({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })(),
  eh = [ht.EarlyRead, ht.Write, ht.MixedReadWrite, ht.Read],
  th = (() => {
    class e {
      ngZone = b(J);
      scheduler = b(Oe);
      errorHandler = b(et, { optional: !0 });
      sequences = new Set();
      deferredRegistrations = new Set();
      executing = !1;
      constructor() {
        b(Qr, { optional: !0 });
      }
      execute() {
        let n = this.sequences.size > 0;
        n && S(16), (this.executing = !0);
        for (let r of eh)
          for (let o of this.sequences)
            if (!(o.erroredOrDestroyed || !o.hooks[r]))
              try {
                o.pipelinedValue = this.ngZone.runOutsideAngular(() =>
                  this.maybeTrace(() => {
                    let i = o.hooks[r];
                    return i(o.pipelinedValue);
                  }, o.snapshot)
                );
              } catch (i) {
                (o.erroredOrDestroyed = !0), this.errorHandler?.handleError(i);
              }
        this.executing = !1;
        for (let r of this.sequences)
          r.afterRun(), r.once && (this.sequences.delete(r), r.destroy());
        for (let r of this.deferredRegistrations) this.sequences.add(r);
        this.deferredRegistrations.size > 0 && this.scheduler.notify(7),
          this.deferredRegistrations.clear(),
          n && S(17);
      }
      register(n) {
        let { view: r } = n;
        r !== void 0
          ? ((r[mt] ??= []).push(n), Tt(r), (r[v] |= 8192))
          : this.executing
          ? this.deferredRegistrations.add(n)
          : this.addSequence(n);
      }
      addSequence(n) {
        this.sequences.add(n), this.scheduler.notify(7);
      }
      unregister(n) {
        this.executing && this.sequences.has(n)
          ? ((n.erroredOrDestroyed = !0),
            (n.pipelinedValue = void 0),
            (n.once = !0))
          : (this.sequences.delete(n), this.deferredRegistrations.delete(n));
      }
      maybeTrace(n, r) {
        return r ? r.run(bs.AFTER_NEXT_RENDER, n) : n();
      }
      static ɵprov = H({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })(),
  Ii = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, r, o, i, s = null) {
      (this.impl = t),
        (this.hooks = n),
        (this.view = r),
        (this.once = o),
        (this.snapshot = s),
        (this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()));
    }
    afterRun() {
      (this.erroredOrDestroyed = !1),
        (this.pipelinedValue = void 0),
        this.snapshot?.dispose(),
        (this.snapshot = null);
    }
    destroy() {
      this.impl.unregister(this), this.unregisterOnDestroy?.();
      let t = this.view?.[mt];
      t && (this.view[mt] = t.filter((n) => n !== this));
    }
  };
function nh(e, t) {
  !t?.injector && qc(nh);
  let n = t?.injector ?? b(Xe);
  return kt("NgAfterNextRender"), oh(e, n, t, !0);
}
function rh(e, t) {
  if (e instanceof Function) {
    let n = [void 0, void 0, void 0, void 0];
    return (n[t] = e), n;
  } else return [e.earlyRead, e.write, e.mixedReadWrite, e.read];
}
function oh(e, t, n, r) {
  let o = t.get(Vl);
  o.impl ??= t.get(th);
  let i = t.get(Qr, null, { optional: !0 }),
    s = n?.phase ?? ht.MixedReadWrite,
    a = n?.manualCleanup !== !0 ? t.get(zr) : null,
    c = t.get(Ms, null, { optional: !0 }),
    l = new Ii(o.impl, rh(e, s), c?.view, r, a, i?.snapshot(null));
  return o.impl.register(l), l;
}
var Q = (function (e) {
    return (
      (e[(e.NOT_STARTED = 0)] = "NOT_STARTED"),
      (e[(e.IN_PROGRESS = 1)] = "IN_PROGRESS"),
      (e[(e.COMPLETE = 2)] = "COMPLETE"),
      (e[(e.FAILED = 3)] = "FAILED"),
      e
    );
  })(Q || {}),
  Qa = 0,
  ih = 1,
  F = (function (e) {
    return (
      (e[(e.Placeholder = 0)] = "Placeholder"),
      (e[(e.Loading = 1)] = "Loading"),
      (e[(e.Complete = 2)] = "Complete"),
      (e[(e.Error = 3)] = "Error"),
      e
    );
  })(F || {}),
  Hl = (function (e) {
    return (e[(e.Initial = -1)] = "Initial"), e;
  })(Hl || {}),
  sh = 0,
  Cs = 1;
var ah = 4,
  ch = 5,
  lh = 6,
  uh = 7,
  $o = 8,
  dh = 9,
  Bl = (function (e) {
    return (
      (e[(e.Manual = 0)] = "Manual"),
      (e[(e.Playthrough = 1)] = "Playthrough"),
      e
    );
  })(Bl || {});
function $l(e, t, n) {
  let r = ql(e);
  t[r] === null && (t[r] = []), t[r].push(n);
}
function or(e, t) {
  let n = ql(e),
    r = t[n];
  if (r !== null) {
    for (let o of r) o();
    t[n] = null;
  }
}
function Ul(e) {
  or(1, e), or(0, e), or(2, e);
}
function ql(e) {
  let t = ah;
  return e === 1 ? (t = ch) : e === 2 && (t = dh), t;
}
function Zr(e) {
  return e + 1;
}
function mn(e, t) {
  let n = e[m],
    r = Zr(t.index);
  return e[r];
}
function fh(e, t, n) {
  let r = e[m],
    o = Zr(t);
  e[o] = n;
}
function yn(e, t) {
  let n = Zr(t.index);
  return e.data[n];
}
function ph(e, t, n) {
  let r = Zr(t);
  e.data[r] = n;
}
function hh(e, t, n) {
  let r = t[m],
    o = yn(r, n);
  switch (e) {
    case F.Complete:
      return o.primaryTmplIndex;
    case F.Loading:
      return o.loadingTmplIndex;
    case F.Error:
      return o.errorTmplIndex;
    case F.Placeholder:
      return o.placeholderTmplIndex;
    default:
      return null;
  }
}
function Za(e, t) {
  return t === F.Placeholder
    ? e.placeholderBlockConfig?.[Qa] ?? null
    : t === F.Loading
    ? e.loadingBlockConfig?.[Qa] ?? null
    : null;
}
function gh(e) {
  return e.loadingBlockConfig?.[ih] ?? null;
}
function Ya(e, t) {
  if (!e || e.length === 0) return t;
  let n = new Set(e);
  for (let r of t) n.add(r);
  return e.length === n.size ? e : Array.from(n);
}
function mh(e, t) {
  let n = t.primaryTmplIndex + V;
  return hn(e, n);
}
var yh = (e, t, n, r) => {};
function vh(e, t, n, r) {
  yh(e, t, n, r);
}
var Ih = new k("");
var Eh = () => null;
function Wl(e, t, n = !1) {
  return Eh(e, t, n);
}
function Dh(e) {
  return e.get(Kp, !1, { optional: !0 });
}
function zl(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let r = D(null);
    try {
      for (let o = 0; o < n.length; o += 2) {
        let i = n[o],
          s = n[o + 1];
        if (s !== -1) {
          let a = e.data[s];
          gs(i), a.contentQueries(2, t[s], s);
        }
      }
    } finally {
      D(r);
    }
  }
}
function Ei(e, t, n) {
  gs(0);
  let r = D(null);
  try {
    t(e, n);
  } finally {
    D(r);
  }
}
function _s(e, t, n) {
  if (cs(t)) {
    let r = D(null);
    try {
      let o = t.directiveStart,
        i = t.directiveEnd;
      for (let s = o; s < i; s++) {
        let a = e.data[s];
        if (a.contentQueries) {
          let c = n[s];
          a.contentQueries(1, c, s);
        }
      }
    } finally {
      D(r);
    }
  }
}
var rn = (function (e) {
    return (
      (e[(e.Emulated = 0)] = "Emulated"),
      (e[(e.None = 2)] = "None"),
      (e[(e.ShadowDom = 3)] = "ShadowDom"),
      e
    );
  })(rn || {}),
  Kn;
function wh() {
  if (Kn === void 0 && ((Kn = null), dt.trustedTypes))
    try {
      Kn = dt.trustedTypes.createPolicy("angular", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return Kn;
}
function bh(e) {
  return wh()?.createScriptURL(e) || e;
}
var br = class {
  changingThisBreaksApplicationSecurity;
  constructor(t) {
    this.changingThisBreaksApplicationSecurity = t;
  }
  toString() {
    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${vc})`;
  }
};
function Ts(e) {
  return e instanceof br ? e.changingThisBreaksApplicationSecurity : e;
}
function Mh(e, t) {
  let n = Ch(e);
  if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL") return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${vc})`);
  }
  return n === t;
}
function Ch(e) {
  return (e instanceof br && e.getTypeName()) || null;
}
var _h = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Th(e) {
  return (e = String(e)), e.match(_h) ? e : "unsafe:" + e;
}
var Gl = (function (e) {
  return (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.HTML = 1)] = "HTML"),
    (e[(e.STYLE = 2)] = "STYLE"),
    (e[(e.SCRIPT = 3)] = "SCRIPT"),
    (e[(e.URL = 4)] = "URL"),
    (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
    e
  );
})(Gl || {});
function tC(e) {
  let t = xh();
  return t ? t.sanitize(Gl.URL, e) || "" : Mh(e, "URL") ? Ts(e) : Th(jr(e));
}
function nC(e) {
  return bh(e[0]);
}
function xh() {
  let e = y();
  return e && e[Ee].sanitizer;
}
var Nh = /^>|^->|<!--|-->|--!>|<!-$/g,
  Sh = /(<|>)/g,
  kh = "\u200B$1\u200B";
function Rh(e) {
  return e.replace(Nh, (t) => t.replace(Sh, kh));
}
function Ql(e) {
  return e instanceof Function ? e() : e;
}
function Oh(e, t, n) {
  let r = e.length;
  for (;;) {
    let o = e.indexOf(t, n);
    if (o === -1) return o;
    if (o === 0 || e.charCodeAt(o - 1) <= 32) {
      let i = t.length;
      if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
    }
    n = o + 1;
  }
}
var Zl = "ng-template";
function Ah(e, t, n, r) {
  let o = 0;
  if (r) {
    for (; o < t.length && typeof t[o] == "string"; o += 2)
      if (t[o] === "class" && Oh(t[o + 1].toLowerCase(), n, 0) !== -1)
        return !0;
  } else if (xs(e)) return !1;
  if (((o = t.indexOf(1, o)), o > -1)) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == "string"; )
      if (i.toLowerCase() === n) return !0;
  }
  return !1;
}
function xs(e) {
  return e.type === 4 && e.value !== Zl;
}
function Ph(e, t, n) {
  let r = e.type === 4 && !n ? Zl : e.value;
  return t === r;
}
function Lh(e, t, n) {
  let r = 4,
    o = e.attrs,
    i = o !== null ? Vh(o) : 0,
    s = !1;
  for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
      if (!s && !se(r) && !se(c)) return !1;
      if (s && se(c)) continue;
      (s = !1), (r = c | (r & 1));
      continue;
    }
    if (!s)
      if (r & 4) {
        if (
          ((r = 2 | (r & 1)),
          (c !== "" && !Ph(e, c, n)) || (c === "" && t.length === 1))
        ) {
          if (se(r)) return !1;
          s = !0;
        }
      } else if (r & 8) {
        if (o === null || !Ah(e, o, c, n)) {
          if (se(r)) return !1;
          s = !0;
        }
      } else {
        let l = t[++a],
          u = Fh(c, o, xs(e), n);
        if (u === -1) {
          if (se(r)) return !1;
          s = !0;
          continue;
        }
        if (l !== "") {
          let f;
          if (
            (u > i ? (f = "") : (f = o[u + 1].toLowerCase()), r & 2 && l !== f)
          ) {
            if (se(r)) return !1;
            s = !0;
          }
        }
      }
  }
  return se(r) || s;
}
function se(e) {
  return (e & 1) === 0;
}
function Fh(e, t, n, r) {
  if (t === null) return -1;
  let o = 0;
  if (r || !n) {
    let i = !1;
    for (; o < t.length; ) {
      let s = t[o];
      if (s === e) return o;
      if (s === 3 || s === 6) i = !0;
      else if (s === 1 || s === 2) {
        let a = t[++o];
        for (; typeof a == "string"; ) a = t[++o];
        continue;
      } else {
        if (s === 4) break;
        if (s === 0) {
          o += 4;
          continue;
        }
      }
      o += i ? 1 : 2;
    }
    return -1;
  } else return Hh(t, e);
}
function jh(e, t, n = !1) {
  for (let r = 0; r < t.length; r++) if (Lh(e, t[r], n)) return !0;
  return !1;
}
function Vh(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (gp(n)) return t;
  }
  return e.length;
}
function Hh(e, t) {
  let n = e.indexOf(4);
  if (n > -1)
    for (n++; n < e.length; ) {
      let r = e[n];
      if (typeof r == "number") return -1;
      if (r === t) return n;
      n++;
    }
  return -1;
}
function Ja(e, t) {
  return e ? ":not(" + t.trim() + ")" : t;
}
function Bh(e) {
  let t = e[0],
    n = 1,
    r = 2,
    o = "",
    i = !1;
  for (; n < e.length; ) {
    let s = e[n];
    if (typeof s == "string")
      if (r & 2) {
        let a = e[++n];
        o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
      } else r & 8 ? (o += "." + s) : r & 4 && (o += " " + s);
    else
      o !== "" && !se(s) && ((t += Ja(i, o)), (o = "")),
        (r = s),
        (i = i || !se(r));
    n++;
  }
  return o !== "" && (t += Ja(i, o)), t;
}
function $h(e) {
  return e.map(Bh).join(",");
}
function Uh(e) {
  let t = [],
    n = [],
    r = 1,
    o = 2;
  for (; r < e.length; ) {
    let i = e[r];
    if (typeof i == "string")
      o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
    else {
      if (!se(o)) break;
      o = i;
    }
    r++;
  }
  return n.length && t.push(1, ...n), t;
}
var de = {};
function qh(e, t) {
  return e.createText(t);
}
function Wh(e, t, n) {
  e.setValue(t, n);
}
function zh(e, t) {
  return e.createComment(Rh(t));
}
function Yl(e, t, n) {
  return e.createElement(t, n);
}
function Mr(e, t, n, r, o) {
  e.insertBefore(t, n, r, o);
}
function Jl(e, t, n) {
  e.appendChild(t, n);
}
function Ka(e, t, n, r, o) {
  r !== null ? Mr(e, t, n, r, o) : Jl(e, t, n);
}
function Gh(e, t, n) {
  e.removeChild(null, t, n);
}
function Qh(e, t, n) {
  e.setAttribute(t, "style", n);
}
function Zh(e, t, n) {
  n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n);
}
function Kl(e, t, n) {
  let { mergedAttrs: r, classes: o, styles: i } = n;
  r !== null && hp(e, t, r),
    o !== null && Zh(e, t, o),
    i !== null && Qh(e, t, i);
}
function Ns(e, t, n, r, o, i, s, a, c, l, u) {
  let f = V + r,
    p = f + o,
    d = Yh(f, p),
    h = typeof l == "function" ? l() : l;
  return (d[m] = {
    type: e,
    blueprint: d,
    template: n,
    queries: null,
    viewQuery: a,
    declTNode: t,
    data: d.slice().fill(null, f),
    bindingStartIndex: f,
    expandoStartIndex: p,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof i == "function" ? i() : i,
    pipeRegistry: typeof s == "function" ? s() : s,
    firstChild: null,
    schemas: c,
    consts: h,
    incompleteFirstPass: !1,
    ssrId: u,
  });
}
function Yh(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push(r < e ? null : de);
  return n;
}
function Jh(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? (e.tView = Ns(
        1,
        null,
        e.template,
        e.decls,
        e.vars,
        e.directiveDefs,
        e.pipeDefs,
        e.viewQuery,
        e.schemas,
        e.consts,
        e.id
      ))
    : t;
}
function Ss(e, t, n, r, o, i, s, a, c, l, u) {
  let f = t.blueprint.slice();
  return (
    (f[we] = o),
    (f[v] = r | 4 | 128 | 8 | 64 | 1024),
    (l !== null || (e && e[v] & 2048)) && (f[v] |= 2048),
    el(f),
    (f[$] = f[Ct] = e),
    (f[j] = n),
    (f[Ee] = s || (e && e[Ee])),
    (f[O] = a || (e && e[O])),
    (f[oe] = c || (e && e[oe]) || null),
    (f[ue] = i),
    (f[Hr] = $p()),
    (f[Kt] = u),
    (f[Wc] = l),
    (f[le] = t.type == 2 ? e[le] : f),
    f
  );
}
function Kh(e, t, n) {
  let r = me(t, e),
    o = Jh(n),
    i = e[Ee].rendererFactory,
    s = ks(
      e,
      Ss(
        e,
        o,
        null,
        Xl(n),
        r,
        t,
        null,
        i.createRenderer(r, n),
        null,
        null,
        null
      )
    );
  return (e[t.index] = s);
}
function Xl(e) {
  let t = 16;
  return e.signals ? (t = 4096) : e.onPush && (t = 64), t;
}
function eu(e, t, n, r) {
  if (n === 0) return -1;
  let o = t.length;
  for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
  return o;
}
function ks(e, t) {
  return e[Xt] ? (e[Pa][ce] = t) : (e[Xt] = t), (e[Pa] = t), t;
}
function rC(e = 1) {
  tu(A(), y(), Ae() + e, !1);
}
function tu(e, t, n, r) {
  if (!r)
    if ((t[v] & 3) === 3) {
      let i = e.preOrderCheckHooks;
      i !== null && tr(t, i, n);
    } else {
      let i = e.preOrderHooks;
      i !== null && nr(t, i, 0, n);
    }
  Je(n);
}
var Yr = (function (e) {
  return (
    (e[(e.None = 0)] = "None"),
    (e[(e.SignalBased = 1)] = "SignalBased"),
    (e[(e.HasDecoratorInputTransform = 2)] = "HasDecoratorInputTransform"),
    e
  );
})(Yr || {});
function Di(e, t, n, r) {
  let o = D(null);
  try {
    let [i, s, a] = e.inputs[n],
      c = null;
    (s & Yr.SignalBased) !== 0 && (c = t[i][ne]),
      c !== null && c.transformFn !== void 0
        ? (r = c.transformFn(r))
        : a !== null && (r = a.call(t, r)),
      e.setInput !== null ? e.setInput(t, c, r, n, i) : Gc(t, c, i, r);
  } finally {
    D(o);
  }
}
function nu(e, t, n, r, o) {
  let i = Ae(),
    s = r & 2;
  try {
    Je(-1), s && t.length > V && tu(e, t, V, !1), S(s ? 2 : 0, o), n(r, o);
  } finally {
    Je(i), S(s ? 3 : 1, o);
  }
}
function Jr(e, t, n) {
  og(e, t, n), (n.flags & 64) === 64 && ig(e, t, n);
}
function Rs(e, t, n = me) {
  let r = t.localNames;
  if (r !== null) {
    let o = t.index + 1;
    for (let i = 0; i < r.length; i += 2) {
      let s = r[i + 1],
        a = s === -1 ? n(t, e) : e[s];
      e[o++] = a;
    }
  }
}
function Xh(e, t, n, r) {
  let i = r.get(Jp, jl) || n === rn.ShadowDom,
    s = e.selectRootElement(t, i);
  return eg(s), s;
}
function eg(e) {
  tg(e);
}
var tg = () => null;
function ng(e) {
  return e === "class"
    ? "className"
    : e === "for"
    ? "htmlFor"
    : e === "formaction"
    ? "formAction"
    : e === "innerHtml"
    ? "innerHTML"
    : e === "readonly"
    ? "readOnly"
    : e === "tabindex"
    ? "tabIndex"
    : e;
}
function Os(e, t, n, r, o, i, s, a) {
  if (!a && Ls(t, e, n, r, o)) {
    _t(t) && rg(n, t.index);
    return;
  }
  if (t.type & 3) {
    let c = me(t, n);
    (r = ng(r)),
      (o = s != null ? s(o, t.value || "", r) : o),
      i.setProperty(c, r, o);
  } else t.type & 12;
}
function rg(e, t) {
  let n = ge(t, e);
  n[v] & 16 || (n[v] |= 64);
}
function og(e, t, n) {
  let r = n.directiveStart,
    o = n.directiveEnd;
  _t(n) && Kh(t, n, e.data[r + n.componentOffset]),
    e.firstCreatePass || Er(n, t);
  let i = n.initialInputs;
  for (let s = r; s < o; s++) {
    let a = e.data[s],
      c = tn(t, e, s, n);
    if ((St(c, t), i !== null && lg(t, s - r, c, a, n, i), pe(a))) {
      let l = ge(n.index, t);
      l[j] = tn(t, e, s, n);
    }
  }
}
function ig(e, t, n) {
  let r = n.directiveStart,
    o = n.directiveEnd,
    i = n.index,
    s = op();
  try {
    Je(i);
    for (let a = r; a < o; a++) {
      let c = e.data[a],
        l = t[a];
      li(a),
        (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) &&
          sg(c, l);
    }
  } finally {
    Je(-1), li(s);
  }
}
function sg(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function As(e, t) {
  let n = e.directiveRegistry,
    r = null;
  if (n)
    for (let o = 0; o < n.length; o++) {
      let i = n[o];
      jh(t, i.selectors, !1) && ((r ??= []), pe(i) ? r.unshift(i) : r.push(i));
    }
  return r;
}
function ag(e, t, n, r, o, i) {
  let s = me(e, t);
  cg(t[O], s, i, e.value, n, r, o);
}
function cg(e, t, n, r, o, i, s) {
  if (i == null) e.removeAttribute(t, o, n);
  else {
    let a = s == null ? jr(i) : s(i, r || "", o);
    e.setAttribute(t, o, a, n);
  }
}
function lg(e, t, n, r, o, i) {
  let s = i[t];
  if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
      let c = s[a],
        l = s[a + 1];
      Di(r, n, c, l);
    }
}
function Ps(e, t) {
  let n = e[oe],
    r = n ? n.get(et, null) : null;
  r && r.handleError(t);
}
function Ls(e, t, n, r, o) {
  let i = e.inputs?.[r],
    s = e.hostDirectiveInputs?.[r],
    a = !1;
  if (s)
    for (let c = 0; c < s.length; c += 2) {
      let l = s[c],
        u = s[c + 1],
        f = t.data[l];
      Di(f, n[l], u, o), (a = !0);
    }
  if (i)
    for (let c of i) {
      let l = n[c],
        u = t.data[c];
      Di(u, l, r, o), (a = !0);
    }
  return a;
}
function ug(e, t) {
  let n = ge(t, e),
    r = n[m];
  dg(r, n);
  let o = n[we];
  o !== null && n[Kt] === null && (n[Kt] = Wl(o, n[oe])),
    S(18),
    Fs(r, n, n[j]),
    S(19, n[j]);
}
function dg(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}
function Fs(e, t, n) {
  ms(t);
  try {
    let r = e.viewQuery;
    r !== null && Ei(1, r, n);
    let o = e.template;
    o !== null && nu(e, t, o, 1, n),
      e.firstCreatePass && (e.firstCreatePass = !1),
      t[De]?.finishViewCreation(e),
      e.staticContentQueries && zl(e, t),
      e.staticViewQueries && Ei(2, e.viewQuery, n);
    let i = e.components;
    i !== null && fg(t, i);
  } catch (r) {
    throw (
      (e.firstCreatePass &&
        ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
      r)
    );
  } finally {
    (t[v] &= -5), ys();
  }
}
function fg(e, t) {
  for (let n = 0; n < t.length; n++) ug(e, t[n]);
}
function vn(e, t, n, r) {
  let o = D(null);
  try {
    let i = t.tView,
      a = e[v] & 4096 ? 4096 : 16,
      c = Ss(
        e,
        i,
        n,
        a,
        null,
        t,
        null,
        null,
        r?.injector ?? null,
        r?.embeddedViewInjector ?? null,
        r?.dehydratedView ?? null
      ),
      l = e[t.index];
    c[Ge] = l;
    let u = e[De];
    return u !== null && (c[De] = u.createEmbeddedView(i)), Fs(i, c, n), c;
  } finally {
    D(o);
  }
}
function wt(e, t) {
  return !t || t.firstChild === null || kl(e);
}
var pg;
function js(e, t) {
  return pg(e, t);
}
var wi = (function (e) {
  return (
    (e[(e.Important = 1)] = "Important"), (e[(e.DashCase = 2)] = "DashCase"), e
  );
})(wi || {});
function ru(e) {
  return (e.flags & 32) === 32;
}
function gt(e, t, n, r, o) {
  if (r != null) {
    let i,
      s = !1;
    be(r) ? (i = r) : Ne(r) && ((s = !0), (r = r[we]));
    let a = he(r);
    e === 0 && n !== null
      ? o == null
        ? Jl(t, n, a)
        : Mr(t, n, a, o || null, !0)
      : e === 1 && n !== null
      ? Mr(t, n, a, o || null, !0)
      : e === 2
      ? Gh(t, a, s)
      : e === 3 && t.destroyNode(a),
      i != null && Cg(t, e, i, n, o);
  }
}
function hg(e, t) {
  ou(e, t), (t[we] = null), (t[ue] = null);
}
function gg(e, t, n, r, o, i) {
  (r[we] = o), (r[ue] = t), eo(e, r, n, 1, o, i);
}
function ou(e, t) {
  t[Ee].changeDetectionScheduler?.notify(9), eo(e, t, t[O], 2, null, null);
}
function mg(e) {
  let t = e[Xt];
  if (!t) return Uo(e[m], e);
  for (; t; ) {
    let n = null;
    if (Ne(t)) n = t[Xt];
    else {
      let r = t[U];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[ce] && t !== e; ) Ne(t) && Uo(t[m], t), (t = t[$]);
      t === null && (t = e), Ne(t) && Uo(t[m], t), (n = t && t[ce]);
    }
    t = n;
  }
}
function Vs(e, t) {
  let n = e[Et],
    r = n.indexOf(t);
  n.splice(r, 1);
}
function Kr(e, t) {
  if (nt(t)) return;
  let n = t[O];
  n.destroyNode && eo(e, t, n, 3, null, null), mg(t);
}
function Uo(e, t) {
  if (nt(t)) return;
  let n = D(null);
  try {
    (t[v] &= -129),
      (t[v] |= 256),
      t[re] && Ft(t[re]),
      vg(e, t),
      yg(e, t),
      t[m].type === 1 && t[O].destroy();
    let r = t[Ge];
    if (r !== null && be(t[$])) {
      r !== t[$] && Vs(r, t);
      let o = t[De];
      o !== null && o.detachView(e);
    }
    yi(t);
  } finally {
    D(n);
  }
}
function yg(e, t) {
  let n = e.cleanup,
    r = t[pr];
  if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
      if (typeof n[s] == "string") {
        let a = n[s + 3];
        a >= 0 ? r[a]() : r[-a].unsubscribe(), (s += 2);
      } else {
        let a = r[n[s + 1]];
        n[s].call(a);
      }
  r !== null && (t[pr] = null);
  let o = t[xe];
  if (o !== null) {
    t[xe] = null;
    for (let s = 0; s < o.length; s++) {
      let a = o[s];
      a();
    }
  }
  let i = t[Qe];
  if (i !== null) {
    t[Qe] = null;
    for (let s of i) s.destroy();
  }
}
function vg(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
      let o = t[n[r]];
      if (!(o instanceof Ke)) {
        let i = n[r + 1];
        if (Array.isArray(i))
          for (let s = 0; s < i.length; s += 2) {
            let a = o[i[s]],
              c = i[s + 1];
            S(4, a, c);
            try {
              c.call(a);
            } finally {
              S(5, a, c);
            }
          }
        else {
          S(4, o, i);
          try {
            i.call(o);
          } finally {
            S(5, o, i);
          }
        }
      }
    }
}
function Ig(e, t, n) {
  return Eg(e, t.parent, n);
}
function Eg(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 168; ) (t = r), (r = t.parent);
  if (r === null) return n[we];
  if (_t(r)) {
    let { encapsulation: o } = e.data[r.directiveStart + r.componentOffset];
    if (o === rn.None || o === rn.Emulated) return null;
  }
  return me(r, n);
}
function Dg(e, t, n) {
  return bg(e, t, n);
}
function wg(e, t, n) {
  return e.type & 40 ? me(e, n) : null;
}
var bg = wg,
  Xa;
function Xr(e, t, n, r) {
  let o = Ig(e, r, t),
    i = t[O],
    s = r.parent || t[ue],
    a = Dg(s, r, t);
  if (o != null)
    if (Array.isArray(n))
      for (let c = 0; c < n.length; c++) Ka(i, o, n[c], a, !1);
    else Ka(i, o, n, a, !1);
  Xa !== void 0 && Xa(i, r, t, n, o);
}
function Qt(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return me(t, e);
    if (n & 4) return bi(-1, e[t.index]);
    if (n & 8) {
      let r = t.child;
      if (r !== null) return Qt(e, r);
      {
        let o = e[t.index];
        return be(o) ? bi(-1, o) : he(o);
      }
    } else {
      if (n & 128) return Qt(e, t.next);
      if (n & 32) return js(t, e)() || he(e[t.index]);
      {
        let r = iu(e, t);
        if (r !== null) {
          if (Array.isArray(r)) return r[0];
          let o = Ye(e[le]);
          return Qt(o, r);
        } else return Qt(e, t.next);
      }
    }
  }
  return null;
}
function iu(e, t) {
  if (t !== null) {
    let r = e[le][ue],
      o = t.projection;
    return r.projection[o];
  }
  return null;
}
function bi(e, t) {
  let n = U + e + 1;
  if (n < t.length) {
    let r = t[n],
      o = r[m].firstChild;
    if (o !== null) return Qt(r, o);
  }
  return t[Ze];
}
function Hs(e, t, n, r, o, i, s) {
  for (; n != null; ) {
    if (n.type === 128) {
      n = n.next;
      continue;
    }
    let a = r[n.index],
      c = n.type;
    if ((s && t === 0 && (a && St(he(a), r), (n.flags |= 2)), !ru(n)))
      if (c & 8) Hs(e, t, n.child, r, o, i, !1), gt(t, e, o, a, i);
      else if (c & 32) {
        let l = js(n, r),
          u;
        for (; (u = l()); ) gt(t, e, o, u, i);
        gt(t, e, o, a, i);
      } else c & 16 ? Mg(e, t, r, n, o, i) : gt(t, e, o, a, i);
    n = s ? n.projectionNext : n.next;
  }
}
function eo(e, t, n, r, o, i) {
  Hs(n, r, e.firstChild, t, o, i, !1);
}
function Mg(e, t, n, r, o, i) {
  let s = n[le],
    c = s[ue].projection[r.projection];
  if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
      let u = c[l];
      gt(t, e, o, u, i);
    }
  else {
    let l = c,
      u = s[$];
    kl(r) && (l.flags |= 128), Hs(e, t, l, u, o, i, !0);
  }
}
function Cg(e, t, n, r, o) {
  let i = n[Ze],
    s = he(n);
  i !== s && gt(t, e, r, i, o);
  for (let a = U; a < n.length; a++) {
    let c = n[a];
    eo(c[m], c, e, t, r, i);
  }
}
function _g(e, t, n, r, o) {
  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
  else {
    let i = r.indexOf("-") === -1 ? void 0 : wi.DashCase;
    o == null
      ? e.removeStyle(n, r, i)
      : (typeof o == "string" &&
          o.endsWith("!important") &&
          ((o = o.slice(0, -10)), (i |= wi.Important)),
        e.setStyle(n, r, o, i));
  }
}
function Cr(e, t, n, r, o = !1) {
  for (; n !== null; ) {
    if (n.type === 128) {
      n = o ? n.projectionNext : n.next;
      continue;
    }
    let i = t[n.index];
    i !== null && r.push(he(i)), be(i) && Tg(i, r);
    let s = n.type;
    if (s & 8) Cr(e, t, n.child, r);
    else if (s & 32) {
      let a = js(n, t),
        c;
      for (; (c = a()); ) r.push(c);
    } else if (s & 16) {
      let a = iu(t, n);
      if (Array.isArray(a)) r.push(...a);
      else {
        let c = Ye(t[le]);
        Cr(c[m], c, a, r, !0);
      }
    }
    n = o ? n.projectionNext : n.next;
  }
  return r;
}
function Tg(e, t) {
  for (let n = U; n < e.length; n++) {
    let r = e[n],
      o = r[m].firstChild;
    o !== null && Cr(r[m], r, o, t);
  }
  e[Ze] !== e[we] && t.push(e[Ze]);
}
function su(e) {
  if (e[mt] !== null) {
    for (let t of e[mt]) t.impl.addSequence(t);
    e[mt].length = 0;
  }
}
var au = [];
function xg(e) {
  return e[re] ?? Ng(e);
}
function Ng(e) {
  let t = au.pop() ?? Object.create(kg);
  return (t.lView = e), t;
}
function Sg(e) {
  e.lView[re] !== e && ((e.lView = null), au.push(e));
}
var kg = X(K({}, it), {
  consumerIsAlwaysLive: !0,
  kind: "template",
  consumerMarkedDirty: (e) => {
    Tt(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[re] = this;
  },
});
function Rg(e) {
  let t = e[re] ?? Object.create(Og);
  return (t.lView = e), t;
}
var Og = X(K({}, it), {
  consumerIsAlwaysLive: !0,
  kind: "template",
  consumerMarkedDirty: (e) => {
    let t = Ye(e.lView);
    for (; t && !cu(t[m]); ) t = Ye(t);
    t && tl(t);
  },
  consumerOnSignalRead() {
    this.lView[re] = this;
  },
});
function cu(e) {
  return e.type !== 2;
}
function lu(e) {
  if (e[Qe] === null) return;
  let t = !0;
  for (; t; ) {
    let n = !1;
    for (let r of e[Qe])
      r.dirty &&
        ((n = !0),
        r.zone === null || Zone.current === r.zone
          ? r.run()
          : r.zone.run(() => r.run()));
    t = n && !!(e[v] & 8192);
  }
}
var Ag = 100;
function uu(e, t = !0, n = 0) {
  let o = e[Ee].rendererFactory,
    i = !1;
  i || o.begin?.();
  try {
    Pg(e, n);
  } catch (s) {
    throw (t && Ps(e, s), s);
  } finally {
    i || o.end?.();
  }
}
function Pg(e, t) {
  let n = il();
  try {
    mr(!0), Mi(e, t);
    let r = 0;
    for (; $r(e); ) {
      if (r === Ag) throw new T(103, !1);
      r++, Mi(e, 1);
    }
  } finally {
    mr(n);
  }
}
function Lg(e, t, n, r) {
  if (nt(t)) return;
  let o = t[v],
    i = !1,
    s = !1;
  ms(t);
  let a = !0,
    c = null,
    l = null;
  i ||
    (cu(e)
      ? ((l = xg(t)), (c = Lt(l)))
      : ho() === null
      ? ((a = !1), (l = Rg(t)), (c = Lt(l)))
      : t[re] && (Ft(t[re]), (t[re] = null)));
  try {
    el(t), tp(e.bindingStartIndex), n !== null && nu(e, t, n, 2, r);
    let u = (o & 3) === 3;
    if (!i)
      if (u) {
        let d = e.preOrderCheckHooks;
        d !== null && tr(t, d, null);
      } else {
        let d = e.preOrderHooks;
        d !== null && nr(t, d, 0, null), Ho(t, 0);
      }
    if (
      (s || Fg(t), lu(t), du(t, 0), e.contentQueries !== null && zl(e, t), !i)
    )
      if (u) {
        let d = e.contentCheckHooks;
        d !== null && tr(t, d);
      } else {
        let d = e.contentHooks;
        d !== null && nr(t, d, 1), Ho(t, 1);
      }
    Vg(e, t);
    let f = e.components;
    f !== null && pu(t, f, 0);
    let p = e.viewQuery;
    if ((p !== null && Ei(2, p, r), !i))
      if (u) {
        let d = e.viewCheckHooks;
        d !== null && tr(t, d);
      } else {
        let d = e.viewHooks;
        d !== null && nr(t, d, 2), Ho(t, 2);
      }
    if ((e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[Vo])) {
      for (let d of t[Vo]) d();
      t[Vo] = null;
    }
    i || (su(t), (t[v] &= -73));
  } catch (u) {
    throw (i || Tt(t), u);
  } finally {
    l !== null && (wn(l, c), a && Sg(l)), ys();
  }
}
function du(e, t) {
  for (let n = Al(e); n !== null; n = Pl(n))
    for (let r = U; r < n.length; r++) {
      let o = n[r];
      fu(o, t);
    }
}
function Fg(e) {
  for (let t = Al(e); t !== null; t = Pl(t)) {
    if (!(t[v] & 2)) continue;
    let n = t[Et];
    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      tl(o);
    }
  }
}
function jg(e, t, n) {
  S(18);
  let r = ge(t, e);
  fu(r, n), S(19, r[j]);
}
function fu(e, t) {
  ls(e) && Mi(e, t);
}
function Mi(e, t) {
  let r = e[m],
    o = e[v],
    i = e[re],
    s = !!(t === 0 && o & 16);
  if (
    ((s ||= !!(o & 64 && t === 0)),
    (s ||= !!(o & 1024)),
    (s ||= !!(i?.dirty && bn(i))),
    (s ||= !1),
    i && (i.dirty = !1),
    (e[v] &= -9217),
    s)
  )
    Lg(r, e, r.template, e[j]);
  else if (o & 8192) {
    lu(e), du(e, 1);
    let a = r.components;
    a !== null && pu(e, a, 1), su(e);
  }
}
function pu(e, t, n) {
  for (let r = 0; r < t.length; r++) jg(e, t[r], n);
}
function Vg(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null)
    try {
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (o < 0) Je(~o);
        else {
          let i = o,
            s = n[++r],
            a = n[++r];
          rp(s, i);
          let c = t[i];
          S(24, c), a(2, c), S(25, c);
        }
      }
    } finally {
      Je(-1);
    }
}
function to(e, t) {
  let n = il() ? 64 : 1088;
  for (e[Ee].changeDetectionScheduler?.notify(t); e; ) {
    e[v] |= n;
    let r = Ye(e);
    if (gr(e) && !r) return e;
    e = r;
  }
  return null;
}
function hu(e, t, n, r) {
  return [e, !0, 0, t, null, r, null, n, null, null];
}
function gu(e, t) {
  let n = U + t;
  if (n < e.length) return e[n];
}
function In(e, t, n, r = !0) {
  let o = t[m];
  if ((Hg(o, t, e, n), r)) {
    let s = bi(n, e),
      a = t[O],
      c = a.parentNode(e[Ze]);
    c !== null && gg(o, e[ue], a, t, c, s);
  }
  let i = t[Kt];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function Bs(e, t) {
  let n = on(e, t);
  return n !== void 0 && Kr(n[m], n), n;
}
function on(e, t) {
  if (e.length <= U) return;
  let n = U + t,
    r = e[n];
  if (r) {
    let o = r[Ge];
    o !== null && o !== e && Vs(o, r), t > 0 && (e[n - 1][ce] = r[ce]);
    let i = ur(e, U + t);
    hg(r[m], r);
    let s = i[De];
    s !== null && s.detachView(i[m]),
      (r[$] = null),
      (r[ce] = null),
      (r[v] &= -129);
  }
  return r;
}
function Hg(e, t, n, r) {
  let o = U + r,
    i = n.length;
  r > 0 && (n[o - 1][ce] = t),
    r < i - U ? ((t[ce] = n[o]), kc(n, U + r, t)) : (n.push(t), (t[ce] = null)),
    (t[$] = n);
  let s = t[Ge];
  s !== null && n !== s && mu(s, t);
  let a = t[De];
  a !== null && a.insertView(e), ai(t), (t[v] |= 128);
}
function mu(e, t) {
  let n = e[Et],
    r = t[$];
  if (Ne(r)) e[v] |= 2;
  else {
    let o = r[$][le];
    t[le] !== o && (e[v] |= 2);
  }
  n === null ? (e[Et] = [t]) : n.push(t);
}
var sn = class {
  _lView;
  _cdRefInjectingView;
  notifyErrorHandler;
  _appRef = null;
  _attachedToViewContainer = !1;
  get rootNodes() {
    let t = this._lView,
      n = t[m];
    return Cr(n, t, n.firstChild, []);
  }
  constructor(t, n, r = !0) {
    (this._lView = t),
      (this._cdRefInjectingView = n),
      (this.notifyErrorHandler = r);
  }
  get context() {
    return this._lView[j];
  }
  set context(t) {
    this._lView[j] = t;
  }
  get destroyed() {
    return nt(this._lView);
  }
  destroy() {
    if (this._appRef) this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
      let t = this._lView[$];
      if (be(t)) {
        let n = t[hr],
          r = n ? n.indexOf(this) : -1;
        r > -1 && (on(t, r), ur(n, r));
      }
      this._attachedToViewContainer = !1;
    }
    Kr(this._lView[m], this._lView);
  }
  onDestroy(t) {
    us(this._lView, t);
  }
  markForCheck() {
    to(this._cdRefInjectingView || this._lView, 4);
  }
  detach() {
    this._lView[v] &= -129;
  }
  reattach() {
    ai(this._lView), (this._lView[v] |= 128);
  }
  detectChanges() {
    (this._lView[v] |= 1024), uu(this._lView, this.notifyErrorHandler);
  }
  checkNoChanges() {}
  attachToViewContainerRef() {
    if (this._appRef) throw new T(902, !1);
    this._attachedToViewContainer = !0;
  }
  detachFromAppRef() {
    this._appRef = null;
    let t = gr(this._lView),
      n = this._lView[Ge];
    n !== null && !t && Vs(n, this._lView), ou(this._lView[m], this._lView);
  }
  attachToAppRef(t) {
    if (this._attachedToViewContainer) throw new T(902, !1);
    this._appRef = t;
    let n = gr(this._lView),
      r = this._lView[Ge];
    r !== null && !n && mu(r, this._lView), ai(this._lView);
  }
};
var _r = (() => {
    class e {
      static __NG_ELEMENT_ID__ = Ug;
    }
    return e;
  })(),
  Bg = _r,
  $g = class extends Bg {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    constructor(t, n, r) {
      super(),
        (this._declarationLView = t),
        (this._declarationTContainer = n),
        (this.elementRef = r);
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(t, n) {
      return this.createEmbeddedViewImpl(t, n);
    }
    createEmbeddedViewImpl(t, n, r) {
      let o = vn(this._declarationLView, this._declarationTContainer, t, {
        embeddedViewInjector: n,
        dehydratedView: r,
      });
      return new sn(o);
    }
  };
function Ug() {
  return no(q(), y());
}
function no(e, t) {
  return e.type & 4 ? new $g(t, e, Nt(e, t)) : null;
}
function ro(e, t, n, r, o) {
  let i = e.data[t];
  if (i === null) (i = qg(e, t, n, r, o)), np() && (i.flags |= 32);
  else if (i.type & 64) {
    (i.type = n), (i.value = r), (i.attrs = o);
    let s = Xf();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return rt(i, !0), i;
}
function qg(e, t, n, r, o) {
  let i = rl(),
    s = hs(),
    a = s ? i : i && i.parent,
    c = (e.data[t] = zg(e, a, n, t, r, o));
  return Wg(e, c, i, s), c;
}
function Wg(e, t, n, r) {
  e.firstChild === null && (e.firstChild = t),
    n !== null &&
      (r
        ? n.child == null && t.parent !== null && (n.child = t)
        : n.next === null && ((n.next = t), (t.prev = n)));
}
function zg(e, t, n, r, o, i) {
  let s = t ? t.injectorIndex : -1,
    a = 0;
  return (
    Yf() && (a |= 128),
    {
      type: n,
      index: r,
      insertBeforeIndex: null,
      injectorIndex: s,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: a,
      providerIndexes: 0,
      value: o,
      attrs: i,
      mergedAttrs: null,
      localNames: null,
      initialInputs: null,
      inputs: null,
      hostDirectiveInputs: null,
      outputs: null,
      hostDirectiveOutputs: null,
      directiveToIndex: null,
      tView: null,
      next: null,
      prev: null,
      projectionNext: null,
      child: null,
      parent: t,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: void 0,
      classes: null,
      classesWithoutHost: null,
      residualClasses: void 0,
      classBindings: 0,
      styleBindings: 0,
    }
  );
}
var sC = new RegExp(`^(\\d+)*(${Zp}|${Qp})*(.*)`);
var Gg = () => null;
function an(e, t) {
  return Gg(e, t);
}
var Qg = class {},
  yu = class {},
  Ci = class {
    resolveComponentFactory(t) {
      throw Error(`No component factory found for ${Y(t)}.`);
    }
  },
  oo = class {
    static NULL = new Ci();
  },
  Tr = class {},
  uC = (() => {
    class e {
      destroyNode = null;
      static __NG_ELEMENT_ID__ = () => Zg();
    }
    return e;
  })();
function Zg() {
  let e = y(),
    t = q(),
    n = ge(t.index, e);
  return (Ne(n) ? n : e)[O];
}
var Yg = (() => {
  class e {
    static ɵprov = H({ token: e, providedIn: "root", factory: () => null });
  }
  return e;
})();
var qo = {},
  vt = class {
    injector;
    parentInjector;
    constructor(t, n) {
      (this.injector = t), (this.parentInjector = n);
    }
    get(t, n, r) {
      r = Vr(r);
      let o = this.injector.get(t, qo, r);
      return o !== qo || n === qo ? o : this.parentInjector.get(t, n, r);
    }
  };
function _i(e, t, n) {
  let r = n ? e.styles : null,
    o = n ? e.classes : null,
    i = 0;
  if (t !== null)
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (typeof a == "number") i = a;
      else if (i == 1) o = Xo(o, a);
      else if (i == 2) {
        let c = a,
          l = t[++s];
        r = Xo(r, c + ": " + l + ";");
      }
    }
  n ? (e.styles = r) : (e.stylesWithoutHost = r),
    n ? (e.classes = o) : (e.classesWithoutHost = o);
}
function io(e, t = w.Default) {
  let n = y();
  if (n === null) return Se(e, t);
  let r = q();
  return Dl(r, n, W(e), t);
}
function dC() {
  let e = "invalid";
  throw new Error(e);
}
function $s(e, t, n, r, o) {
  let i = r === null ? null : { "": -1 },
    s = o(e, n);
  if (s !== null) {
    let a,
      c = null,
      l = null,
      u = Kg(s);
    u === null ? (a = s) : ([a, c, l] = u), tm(e, t, n, a, i, c, l);
  }
  i !== null && r !== null && Jg(n, r, i);
}
function Jg(e, t, n) {
  let r = (e.localNames = []);
  for (let o = 0; o < t.length; o += 2) {
    let i = n[t[o + 1]];
    if (i == null) throw new T(-301, !1);
    r.push(t[o], i);
  }
}
function Kg(e) {
  let t = null,
    n = !1;
  for (let s = 0; s < e.length; s++) {
    let a = e[s];
    if ((s === 0 && pe(a) && (t = a), a.findHostDirectiveDefs !== null)) {
      n = !0;
      break;
    }
  }
  if (!n) return null;
  let r = null,
    o = null,
    i = null;
  for (let s of e)
    s.findHostDirectiveDefs !== null &&
      ((r ??= []), (o ??= new Map()), (i ??= new Map()), Xg(s, r, i, o)),
      s === t && ((r ??= []), r.push(s));
  return r !== null
    ? (r.push(...(t === null ? e : e.slice(1))), [r, o, i])
    : null;
}
function Xg(e, t, n, r) {
  let o = t.length;
  e.findHostDirectiveDefs(e, t, r), n.set(e, [o, t.length - 1]);
}
function em(e, t, n) {
  (t.componentOffset = n), (e.components ??= []).push(t.index);
}
function tm(e, t, n, r, o, i, s) {
  let a = r.length,
    c = !1;
  for (let p = 0; p < a; p++) {
    let d = r[p];
    !c && pe(d) && ((c = !0), em(e, n, p)), di(Er(n, t), e, d.type);
  }
  am(n, e.data.length, a);
  for (let p = 0; p < a; p++) {
    let d = r[p];
    d.providersResolver && d.providersResolver(d);
  }
  let l = !1,
    u = !1,
    f = eu(e, t, a, null);
  a > 0 && (n.directiveToIndex = new Map());
  for (let p = 0; p < a; p++) {
    let d = r[p];
    if (
      ((n.mergedAttrs = Dt(n.mergedAttrs, d.hostAttrs)),
      rm(e, n, t, f, d),
      sm(f, d, o),
      s !== null && s.has(d))
    ) {
      let [g, x] = s.get(d);
      n.directiveToIndex.set(d.type, [
        f,
        g + n.directiveStart,
        x + n.directiveStart,
      ]);
    } else (i === null || !i.has(d)) && n.directiveToIndex.set(d.type, f);
    d.contentQueries !== null && (n.flags |= 4),
      (d.hostBindings !== null || d.hostAttrs !== null || d.hostVars !== 0) &&
        (n.flags |= 64);
    let h = d.type.prototype;
    !l &&
      (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) &&
      ((e.preOrderHooks ??= []).push(n.index), (l = !0)),
      !u &&
        (h.ngOnChanges || h.ngDoCheck) &&
        ((e.preOrderCheckHooks ??= []).push(n.index), (u = !0)),
      f++;
  }
  nm(e, n, i);
}
function nm(e, t, n) {
  for (let r = t.directiveStart; r < t.directiveEnd; r++) {
    let o = e.data[r];
    if (n === null || !n.has(o)) ec(0, t, o, r), ec(1, t, o, r), nc(t, r, !1);
    else {
      let i = n.get(o);
      tc(0, t, i, r), tc(1, t, i, r), nc(t, r, !0);
    }
  }
}
function ec(e, t, n, r) {
  let o = e === 0 ? n.inputs : n.outputs;
  for (let i in o)
    if (o.hasOwnProperty(i)) {
      let s;
      e === 0 ? (s = t.inputs ??= {}) : (s = t.outputs ??= {}),
        (s[i] ??= []),
        s[i].push(r),
        vu(t, i);
    }
}
function tc(e, t, n, r) {
  let o = e === 0 ? n.inputs : n.outputs;
  for (let i in o)
    if (o.hasOwnProperty(i)) {
      let s = o[i],
        a;
      e === 0
        ? (a = t.hostDirectiveInputs ??= {})
        : (a = t.hostDirectiveOutputs ??= {}),
        (a[s] ??= []),
        a[s].push(r, i),
        vu(t, s);
    }
}
function vu(e, t) {
  t === "class" ? (e.flags |= 8) : t === "style" && (e.flags |= 16);
}
function nc(e, t, n) {
  let { attrs: r, inputs: o, hostDirectiveInputs: i } = e;
  if (r === null || (!n && o === null) || (n && i === null) || xs(e)) {
    (e.initialInputs ??= []), e.initialInputs.push(null);
    return;
  }
  let s = null,
    a = 0;
  for (; a < r.length; ) {
    let c = r[a];
    if (c === 0) {
      a += 4;
      continue;
    } else if (c === 5) {
      a += 2;
      continue;
    } else if (typeof c == "number") break;
    if (!n && o.hasOwnProperty(c)) {
      let l = o[c];
      for (let u of l)
        if (u === t) {
          (s ??= []), s.push(c, r[a + 1]);
          break;
        }
    } else if (n && i.hasOwnProperty(c)) {
      let l = i[c];
      for (let u = 0; u < l.length; u += 2)
        if (l[u] === t) {
          (s ??= []), s.push(l[u + 1], r[a + 1]);
          break;
        }
    }
    a += 2;
  }
  (e.initialInputs ??= []), e.initialInputs.push(s);
}
function rm(e, t, n, r, o) {
  e.data[r] = o;
  let i = o.factory || (o.factory = We(o.type, !0)),
    s = new Ke(i, pe(o), io);
  (e.blueprint[r] = s), (n[r] = s), om(e, t, r, eu(e, n, o.hostVars, de), o);
}
function om(e, t, n, r, o) {
  let i = o.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    im(s) != a && s.push(a), s.push(n, r, i);
  }
}
function im(e) {
  let t = e.length;
  for (; t > 0; ) {
    let n = e[--t];
    if (typeof n == "number" && n < 0) return n;
  }
  return 0;
}
function sm(e, t, n) {
  if (n) {
    if (t.exportAs)
      for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
    pe(t) && (n[""] = e);
  }
}
function am(e, t, n) {
  (e.flags |= 1),
    (e.directiveStart = t),
    (e.directiveEnd = t + n),
    (e.providerIndexes = t);
}
function Iu(e, t, n, r, o, i, s, a) {
  let c = t.consts,
    l = Re(c, s),
    u = ro(t, e, 2, r, l);
  return (
    i && $s(t, n, u, Re(c, a), o),
    (u.mergedAttrs = Dt(u.mergedAttrs, u.attrs)),
    u.attrs !== null && _i(u, u.attrs, !1),
    u.mergedAttrs !== null && _i(u, u.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, u),
    u
  );
}
function Eu(e, t) {
  vs(e, t), cs(t) && e.queries.elementEnd(t);
}
var xr = class extends oo {
  ngModule;
  constructor(t) {
    super(), (this.ngModule = t);
  }
  resolveComponentFactory(t) {
    let n = ke(t);
    return new bt(n, this.ngModule);
  }
};
function cm(e) {
  return Object.keys(e).map((t) => {
    let [n, r, o] = e[t],
      i = {
        propName: n,
        templateName: t,
        isSignal: (r & Yr.SignalBased) !== 0,
      };
    return o && (i.transform = o), i;
  });
}
function lm(e) {
  return Object.keys(e).map((t) => ({ propName: e[t], templateName: t }));
}
function um(e, t, n) {
  let r = t instanceof Ie ? t : t?.injector;
  return (
    r &&
      e.getStandaloneInjector !== null &&
      (r = e.getStandaloneInjector(r) || r),
    r ? new vt(n, r) : n
  );
}
function dm(e) {
  let t = e.get(Tr, null);
  if (t === null) throw new T(407, !1);
  let n = e.get(Yg, null),
    r = e.get(Oe, null);
  return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: r };
}
function fm(e, t) {
  let n = (e.selectors[0][0] || "div").toLowerCase();
  return Yl(t, n, n === "svg" ? Jc : n === "math" ? Bf : null);
}
var bt = class extends yu {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() {
      return (
        (this.cachedInputs ??= cm(this.componentDef.inputs)), this.cachedInputs
      );
    }
    get outputs() {
      return (
        (this.cachedOutputs ??= lm(this.componentDef.outputs)),
        this.cachedOutputs
      );
    }
    constructor(t, n) {
      super(),
        (this.componentDef = t),
        (this.ngModule = n),
        (this.componentType = t.type),
        (this.selector = $h(t.selectors)),
        (this.ngContentSelectors = t.ngContentSelectors ?? []),
        (this.isBoundToModule = !!n);
    }
    create(t, n, r, o) {
      S(22);
      let i = D(null);
      try {
        let s = this.componentDef,
          a = r
            ? ["ng-version", "19.2.14"]
            : Uh(this.componentDef.selectors[0]),
          c = Ns(0, null, null, 1, 0, null, null, null, null, [a], null),
          l = um(s, o || this.ngModule, t),
          u = dm(l),
          f = u.rendererFactory.createRenderer(null, s),
          p = r ? Xh(f, r, s.encapsulation, l) : fm(s, f),
          d = Ss(
            null,
            c,
            null,
            512 | Xl(s),
            null,
            null,
            u,
            f,
            l,
            null,
            Wl(p, l, !0)
          );
        (d[V] = p), ms(d);
        let h = null;
        try {
          let g = Iu(V, c, d, "#host", () => [this.componentDef], !0, 0);
          p && (Kl(f, p, g), St(p, d)),
            Jr(c, d, g),
            _s(c, g, d),
            Eu(c, g),
            n !== void 0 && pm(g, this.ngContentSelectors, n),
            (h = ge(g.index, d)),
            (d[j] = h[j]),
            Fs(c, d, null);
        } catch (g) {
          throw (h !== null && yi(h), yi(d), g);
        } finally {
          S(23), ys();
        }
        return new Ti(this.componentType, d);
      } finally {
        D(i);
      }
    }
  },
  Ti = class extends Qg {
    _rootLView;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n) {
      super(),
        (this._rootLView = n),
        (this._tNode = hn(n[m], V)),
        (this.location = Nt(this._tNode, n)),
        (this.instance = ge(this._tNode.index, n)[j]),
        (this.hostView = this.changeDetectorRef = new sn(n, void 0, !1)),
        (this.componentType = t);
    }
    setInput(t, n) {
      let r = this._tNode;
      if (
        ((this.previousInputValues ??= new Map()),
        this.previousInputValues.has(t) &&
          Object.is(this.previousInputValues.get(t), n))
      )
        return;
      let o = this._rootLView,
        i = Ls(r, o[m], o, t, n);
      this.previousInputValues.set(t, n);
      let s = ge(r.index, o);
      to(s, 1);
    }
    get injector() {
      return new qe(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(t) {
      this.hostView.onDestroy(t);
    }
  };
function pm(e, t, n) {
  let r = (e.projection = []);
  for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null && i.length ? Array.from(i) : null);
  }
}
var Us = (() => {
  class e {
    static __NG_ELEMENT_ID__ = hm;
  }
  return e;
})();
function hm() {
  let e = q();
  return wu(e, y());
}
var gm = Us,
  Du = class extends gm {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, r) {
      super(),
        (this._lContainer = t),
        (this._hostTNode = n),
        (this._hostLView = r);
    }
    get element() {
      return Nt(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new qe(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = Is(this._hostTNode, this._hostLView);
      if (gl(t)) {
        let n = vr(t, this._hostLView),
          r = yr(t),
          o = n[m].data[r + 8];
        return new qe(o, n);
      } else return new qe(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(t) {
      let n = rc(this._lContainer);
      return (n !== null && n[t]) || null;
    }
    get length() {
      return this._lContainer.length - U;
    }
    createEmbeddedView(t, n, r) {
      let o, i;
      typeof r == "number"
        ? (o = r)
        : r != null && ((o = r.index), (i = r.injector));
      let s = an(this._lContainer, t.ssrId),
        a = t.createEmbeddedViewImpl(n || {}, i, s);
      return this.insertImpl(a, o, wt(this._hostTNode, s)), a;
    }
    createComponent(t, n, r, o, i) {
      let s = t && !Ff(t),
        a;
      if (s) a = n;
      else {
        let h = n || {};
        (a = h.index),
          (r = h.injector),
          (o = h.projectableNodes),
          (i = h.environmentInjector || h.ngModuleRef);
      }
      let c = s ? t : new bt(ke(t)),
        l = r || this.parentInjector;
      if (!i && c.ngModule == null) {
        let g = (s ? l : this.parentInjector).get(Ie, null);
        g && (i = g);
      }
      let u = ke(c.componentType ?? {}),
        f = an(this._lContainer, u?.id ?? null),
        p = f?.firstChild ?? null,
        d = c.create(l, o, p, i);
      return this.insertImpl(d.hostView, a, wt(this._hostTNode, f)), d;
    }
    insert(t, n) {
      return this.insertImpl(t, n, !0);
    }
    insertImpl(t, n, r) {
      let o = t._lView;
      if (qf(o)) {
        let a = this.indexOf(t);
        if (a !== -1) this.detach(a);
        else {
          let c = o[$],
            l = new Du(c, c[ue], c[$]);
          l.detach(l.indexOf(t));
        }
      }
      let i = this._adjustIndex(n),
        s = this._lContainer;
      return In(s, o, i, r), t.attachToViewContainerRef(), kc(Wo(s), i, t), t;
    }
    move(t, n) {
      return this.insert(t, n);
    }
    indexOf(t) {
      let n = rc(this._lContainer);
      return n !== null ? n.indexOf(t) : -1;
    }
    remove(t) {
      let n = this._adjustIndex(t, -1),
        r = on(this._lContainer, n);
      r && (ur(Wo(this._lContainer), n), Kr(r[m], r));
    }
    detach(t) {
      let n = this._adjustIndex(t, -1),
        r = on(this._lContainer, n);
      return r && ur(Wo(this._lContainer), n) != null ? new sn(r) : null;
    }
    _adjustIndex(t, n = 0) {
      return t ?? this.length + n;
    }
  };
function rc(e) {
  return e[hr];
}
function Wo(e) {
  return e[hr] || (e[hr] = []);
}
function wu(e, t) {
  let n,
    r = t[e.index];
  return (
    be(r) ? (n = r) : ((n = hu(r, t, null, e)), (t[e.index] = n), ks(t, n)),
    ym(n, t, e, r),
    new Du(n, e, t)
  );
}
function mm(e, t) {
  let n = e[O],
    r = n.createComment(""),
    o = me(t, e),
    i = n.parentNode(o);
  return Mr(n, i, r, n.nextSibling(o), !1), r;
}
var ym = Im,
  vm = () => !1;
function bu(e, t, n) {
  return vm(e, t, n);
}
function Im(e, t, n, r) {
  if (e[Ze]) return;
  let o;
  n.type & 8 ? (o = he(r)) : (o = mm(t, n)), (e[Ze] = o);
}
var xi = class e {
    queryList;
    matches = null;
    constructor(t) {
      this.queryList = t;
    }
    clone() {
      return new e(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  },
  Ni = class e {
    queries;
    constructor(t = []) {
      this.queries = t;
    }
    createEmbeddedView(t) {
      let n = t.queries;
      if (n !== null) {
        let r = t.contentQueries !== null ? t.contentQueries[0] : n.length,
          o = [];
        for (let i = 0; i < r; i++) {
          let s = n.getByIndex(i),
            a = this.queries[s.indexInDeclarationView];
          o.push(a.clone());
        }
        return new e(o);
      }
      return null;
    }
    insertView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    detachView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    finishViewCreation(t) {
      this.dirtyQueriesWithMatches(t);
    }
    dirtyQueriesWithMatches(t) {
      for (let n = 0; n < this.queries.length; n++)
        qs(t, n).matches !== null && this.queries[n].setDirty();
    }
  },
  Si = class {
    flags;
    read;
    predicate;
    constructor(t, n, r = null) {
      (this.flags = n),
        (this.read = r),
        typeof t == "string" ? (this.predicate = Tm(t)) : (this.predicate = t);
    }
  },
  ki = class e {
    queries;
    constructor(t = []) {
      this.queries = t;
    }
    elementStart(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].elementStart(t, n);
    }
    elementEnd(t) {
      for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t);
    }
    embeddedTView(t) {
      let n = null;
      for (let r = 0; r < this.length; r++) {
        let o = n !== null ? n.length : 0,
          i = this.getByIndex(r).embeddedTView(t, o);
        i &&
          ((i.indexInDeclarationView = r), n !== null ? n.push(i) : (n = [i]));
      }
      return n !== null ? new e(n) : null;
    }
    template(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].template(t, n);
    }
    getByIndex(t) {
      return this.queries[t];
    }
    get length() {
      return this.queries.length;
    }
    track(t) {
      this.queries.push(t);
    }
  },
  Ri = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) {
      (this.metadata = t), (this._declarationNodeIndex = n);
    }
    elementStart(t, n) {
      this.isApplyingToNode(n) && this.matchTNode(t, n);
    }
    elementEnd(t) {
      this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
    }
    template(t, n) {
      this.elementStart(t, n);
    }
    embeddedTView(t, n) {
      return this.isApplyingToNode(t)
        ? ((this.crossesNgTemplate = !0),
          this.addMatch(-t.index, n),
          new e(this.metadata))
        : null;
    }
    isApplyingToNode(t) {
      if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex,
          r = t.parent;
        for (; r !== null && r.type & 8 && r.index !== n; ) r = r.parent;
        return n === (r !== null ? r.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(t, n) {
      let r = this.metadata.predicate;
      if (Array.isArray(r))
        for (let o = 0; o < r.length; o++) {
          let i = r[o];
          this.matchTNodeWithReadOption(t, n, Em(n, i)),
            this.matchTNodeWithReadOption(t, n, rr(n, t, i, !1, !1));
        }
      else
        r === _r
          ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1)
          : this.matchTNodeWithReadOption(t, n, rr(n, t, r, !1, !1));
    }
    matchTNodeWithReadOption(t, n, r) {
      if (r !== null) {
        let o = this.metadata.read;
        if (o !== null)
          if (o === Gr || o === Us || (o === _r && n.type & 4))
            this.addMatch(n.index, -2);
          else {
            let i = rr(n, t, o, !1, !1);
            i !== null && this.addMatch(n.index, i);
          }
        else this.addMatch(n.index, r);
      }
    }
    addMatch(t, n) {
      this.matches === null ? (this.matches = [t, n]) : this.matches.push(t, n);
    }
  };
function Em(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
  }
  return null;
}
function Dm(e, t) {
  return e.type & 11 ? Nt(e, t) : e.type & 4 ? no(e, t) : null;
}
function wm(e, t, n, r) {
  return n === -1 ? Dm(t, e) : n === -2 ? bm(e, t, r) : tn(e, e[m], n, t);
}
function bm(e, t, n) {
  if (n === Gr) return Nt(t, e);
  if (n === _r) return no(t, e);
  if (n === Us) return wu(t, e);
}
function Mu(e, t, n, r) {
  let o = t[De].queries[r];
  if (o.matches === null) {
    let i = e.data,
      s = n.matches,
      a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
      let l = s[c];
      if (l < 0) a.push(null);
      else {
        let u = i[l];
        a.push(wm(t, u, s[c + 1], n.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}
function Oi(e, t, n, r) {
  let o = e.queries.getByIndex(n),
    i = o.matches;
  if (i !== null) {
    let s = Mu(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
      let c = i[a];
      if (c > 0) r.push(s[a / 2]);
      else {
        let l = i[a + 1],
          u = t[-c];
        for (let f = U; f < u.length; f++) {
          let p = u[f];
          p[Ge] === p[$] && Oi(p[m], p, l, r);
        }
        if (u[Et] !== null) {
          let f = u[Et];
          for (let p = 0; p < f.length; p++) {
            let d = f[p];
            Oi(d[m], d, l, r);
          }
        }
      }
    }
  }
  return r;
}
function Mm(e, t) {
  return e[De].queries[t].queryList;
}
function Cm(e, t, n) {
  let r = new mi((n & 4) === 4);
  return (
    zf(e, t, r, r.destroy), (t[De] ??= new Ni()).queries.push(new xi(r)) - 1
  );
}
function _m(e, t, n) {
  let r = A();
  return (
    r.firstCreatePass &&
      (xm(r, new Si(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)),
    Cm(r, y(), t)
  );
}
function Tm(e) {
  return e.split(",").map((t) => t.trim());
}
function xm(e, t, n) {
  e.queries === null && (e.queries = new ki()), e.queries.track(new Ri(t, n));
}
function qs(e, t) {
  return e.queries.getByIndex(t);
}
function Nm(e, t) {
  let n = e[m],
    r = qs(n, t);
  return r.crossesNgTemplate ? Oi(n, e, t, []) : Mu(n, e, r, t);
}
var cn = class {},
  Sm = class {};
var Ai = class extends cn {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new xr(this);
    constructor(t, n, r, o = !0) {
      super(), (this.ngModuleType = t), (this._parent = n);
      let i = Ac(t);
      (this._bootstrapComponents = Ql(i.bootstrap)),
        (this._r3Injector = Ml(
          t,
          n,
          [
            { provide: cn, useValue: this },
            { provide: oo, useValue: this.componentFactoryResolver },
            ...r,
          ],
          Y(t),
          new Set(["environment"])
        )),
        o && this.resolveInjectorInitializers();
    }
    resolveInjectorInitializers() {
      this._r3Injector.resolveInjectorInitializers(),
        (this.instance = this._r3Injector.get(this.ngModuleType));
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let t = this._r3Injector;
      !t.destroyed && t.destroy(),
        this.destroyCbs.forEach((n) => n()),
        (this.destroyCbs = null);
    }
    onDestroy(t) {
      this.destroyCbs.push(t);
    }
  },
  Pi = class extends Sm {
    moduleType;
    constructor(t) {
      super(), (this.moduleType = t);
    }
    create(t) {
      return new Ai(this.moduleType, t, []);
    }
  };
var Nr = class extends cn {
  injector;
  componentFactoryResolver = new xr(this);
  instance = null;
  constructor(t) {
    super();
    let n = new Jt(
      [
        ...t.providers,
        { provide: cn, useValue: this },
        { provide: oo, useValue: this.componentFactoryResolver },
      ],
      t.parent || as(),
      t.debugName,
      new Set(["environment"])
    );
    (this.injector = n),
      t.runEnvironmentInitializers && n.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(t) {
    this.injector.onDestroy(t);
  }
};
function Cu(e, t, n = null) {
  return new Nr({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0,
  }).injector;
}
var km = (() => {
  class e {
    _injector;
    cachedInjectors = new Map();
    constructor(n) {
      this._injector = n;
    }
    getOrCreateStandaloneInjector(n) {
      if (!n.standalone) return null;
      if (!this.cachedInjectors.has(n)) {
        let r = is(!1, n.type),
          o =
            r.length > 0
              ? Cu([r], this._injector, `Standalone[${n.type.name}]`)
              : null;
        this.cachedInjectors.set(n, o);
      }
      return this.cachedInjectors.get(n);
    }
    ngOnDestroy() {
      try {
        for (let n of this.cachedInjectors.values()) n !== null && n.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
    static ɵprov = H({
      token: e,
      providedIn: "environment",
      factory: () => new e(Se(Ie)),
    });
  }
  return e;
})();
function gC(e) {
  return fn(() => {
    let t = _u(e),
      n = X(K({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === Rl.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (t.standalone && e.dependencies) || null,
        getStandaloneInjector: t.standalone
          ? (o) => o.get(km).getOrCreateStandaloneInjector(n)
          : null,
        getExternalStyles: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || rn.Emulated,
        styles: e.styles || Z,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: "",
      });
    t.standalone && kt("NgStandalone"), Tu(n);
    let r = e.dependencies;
    return (
      (n.directiveDefs = oc(r, !1)), (n.pipeDefs = oc(r, !0)), (n.id = Lm(n)), n
    );
  });
}
function Rm(e) {
  return ke(e) || Pc(e);
}
function Om(e) {
  return e !== null;
}
function mC(e) {
  return fn(() => ({
    type: e.type,
    bootstrap: e.bootstrap || Z,
    declarations: e.declarations || Z,
    imports: e.imports || Z,
    exports: e.exports || Z,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function Am(e, t) {
  if (e == null) return ze;
  let n = {};
  for (let r in e)
    if (e.hasOwnProperty(r)) {
      let o = e[r],
        i,
        s,
        a,
        c;
      Array.isArray(o)
        ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i), (c = o[3] || null))
        : ((i = o), (s = o), (a = Yr.None), (c = null)),
        (n[i] = [r, a, c]),
        (t[i] = s);
    }
  return n;
}
function Pm(e) {
  if (e == null) return ze;
  let t = {};
  for (let n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
  return t;
}
function yC(e) {
  return fn(() => {
    let t = _u(e);
    return Tu(t), t;
  });
}
function vC(e) {
  return {
    type: e.type,
    name: e.name,
    factory: null,
    pure: e.pure !== !1,
    standalone: e.standalone ?? !0,
    onDestroy: e.type.prototype.ngOnDestroy || null,
  };
}
function _u(e) {
  let t = {};
  return {
    type: e.type,
    providersResolver: null,
    factory: null,
    hostBindings: e.hostBindings || null,
    hostVars: e.hostVars || 0,
    hostAttrs: e.hostAttrs || null,
    contentQueries: e.contentQueries || null,
    declaredInputs: t,
    inputConfig: e.inputs || ze,
    exportAs: e.exportAs || null,
    standalone: e.standalone ?? !0,
    signals: e.signals === !0,
    selectors: e.selectors || Z,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: Am(e.inputs, t),
    outputs: Pm(e.outputs),
    debugInfo: null,
  };
}
function Tu(e) {
  e.features?.forEach((t) => t(e));
}
function oc(e, t) {
  if (!e) return null;
  let n = t ? Lc : Rm;
  return () => (typeof e == "function" ? e() : e).map((r) => n(r)).filter(Om);
}
function Lm(e) {
  let t = 0,
    n = typeof e.consts == "function" ? "" : e.consts,
    r = [
      e.selectors,
      e.ngContentSelectors,
      e.hostVars,
      e.hostAttrs,
      n,
      e.vars,
      e.decls,
      e.encapsulation,
      e.standalone,
      e.signals,
      e.exportAs,
      JSON.stringify(e.inputs),
      JSON.stringify(e.outputs),
      Object.getOwnPropertyNames(e.type.prototype),
      !!e.contentQueries,
      !!e.viewQuery,
    ];
  for (let i of r.join("|")) t = (Math.imul(31, t) + i.charCodeAt(0)) << 0;
  return (t += 2147483648), "c" + t;
}
function Fm(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function jm(e) {
  let t = Fm(e.type),
    n = !0,
    r = [e];
  for (; t; ) {
    let o;
    if (pe(e)) o = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new T(903, !1);
      o = t.ɵdir;
    }
    if (o) {
      if (n) {
        r.push(o);
        let s = e;
        (s.inputs = zo(e.inputs)),
          (s.declaredInputs = zo(e.declaredInputs)),
          (s.outputs = zo(e.outputs));
        let a = o.hostBindings;
        a && Um(e, a);
        let c = o.viewQuery,
          l = o.contentQueries;
        if (
          (c && Bm(e, c),
          l && $m(e, l),
          Vm(e, o),
          rf(e.outputs, o.outputs),
          pe(o) && o.data.animation)
        ) {
          let u = e.data;
          u.animation = (u.animation || []).concat(o.data.animation);
        }
      }
      let i = o.features;
      if (i)
        for (let s = 0; s < i.length; s++) {
          let a = i[s];
          a && a.ngInherit && a(e), a === jm && (n = !1);
        }
    }
    t = Object.getPrototypeOf(t);
  }
  Hm(r);
}
function Vm(e, t) {
  for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
    let r = t.inputs[n];
    r !== void 0 &&
      ((e.inputs[n] = r), (e.declaredInputs[n] = t.declaredInputs[n]));
  }
}
function Hm(e) {
  let t = 0,
    n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    (o.hostVars = t += o.hostVars),
      (o.hostAttrs = Dt(o.hostAttrs, (n = Dt(n, o.hostAttrs))));
  }
}
function zo(e) {
  return e === ze ? {} : e === Z ? [] : e;
}
function Bm(e, t) {
  let n = e.viewQuery;
  n
    ? (e.viewQuery = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.viewQuery = t);
}
function $m(e, t) {
  let n = e.contentQueries;
  n
    ? (e.contentQueries = (r, o, i) => {
        t(r, o, i), n(r, o, i);
      })
    : (e.contentQueries = t);
}
function Um(e, t) {
  let n = e.hostBindings;
  n
    ? (e.hostBindings = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.hostBindings = t);
}
function xu(e) {
  return Wm(e)
    ? Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e)
    : !1;
}
function qm(e, t) {
  if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);
  else {
    let n = e[Symbol.iterator](),
      r;
    for (; !(r = n.next()).done; ) t(r.value);
  }
}
function Wm(e) {
  return e !== null && (typeof e == "function" || typeof e == "object");
}
function Rt(e, t, n) {
  return (e[t] = n);
}
function Ws(e, t) {
  return e[t];
}
function te(e, t, n) {
  let r = e[t];
  return Object.is(r, n) ? !1 : ((e[t] = n), !0);
}
function Sr(e, t, n, r) {
  let o = te(e, t, n);
  return te(e, t + 1, r) || o;
}
function zm(e, t, n, r, o) {
  let i = Sr(e, t, n, r);
  return te(e, t + 2, o) || i;
}
function ln(e, t, n, r, o, i) {
  let s = Sr(e, t, n, r);
  return Sr(e, t + 2, o, i) || s;
}
function Gm(e, t, n, r, o, i, s, a, c) {
  let l = t.consts,
    u = ro(t, e, 4, s || null, a || null);
  ps() && $s(t, n, u, Re(l, c), As),
    (u.mergedAttrs = Dt(u.mergedAttrs, u.attrs)),
    vs(t, u);
  let f = (u.tView = Ns(
    2,
    u,
    r,
    o,
    i,
    t.directiveRegistry,
    t.pipeRegistry,
    null,
    t.schemas,
    l,
    null
  ));
  return (
    t.queries !== null &&
      (t.queries.template(t, u), (f.queries = t.queries.embeddedTView(u))),
    u
  );
}
function kr(e, t, n, r, o, i, s, a, c, l) {
  let u = n + V,
    f = t.firstCreatePass ? Gm(u, t, e, r, o, i, s, a, c) : t.data[u];
  rt(f, !1);
  let p = Zm(t, e, f, n);
  qr() && Xr(t, e, p, f), St(p, e);
  let d = hu(p, e, p, f);
  return (
    (e[u] = d),
    ks(e, d),
    bu(d, f, e),
    Br(f) && Jr(t, e, f),
    c != null && Rs(e, f, l),
    f
  );
}
function Qm(e, t, n, r, o, i, s, a) {
  let c = y(),
    l = A(),
    u = Re(l.consts, i);
  return kr(c, l, e, t, n, r, o, u, s, a), Qm;
}
var Zm = Ym;
function Ym(e, t, n, r) {
  return Wr(!0), t[O].createComment("");
}
function Jm(e, t) {
  let n = t.get(ey),
    r = () => n.remove(e);
  return n.add(e), r;
}
var Km = () =>
    typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout,
  Xm = () =>
    typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout,
  ey = (() => {
    class e {
      executingCallbacks = !1;
      idleId = null;
      current = new Set();
      deferred = new Set();
      ngZone = b(J);
      requestIdleCallbackFn = Km().bind(globalThis);
      cancelIdleCallbackFn = Xm().bind(globalThis);
      add(n) {
        (this.executingCallbacks ? this.deferred : this.current).add(n),
          this.idleId === null && this.scheduleIdleCallback();
      }
      remove(n) {
        let { current: r, deferred: o } = this;
        r.delete(n),
          o.delete(n),
          r.size === 0 && o.size === 0 && this.cancelIdleCallback();
      }
      scheduleIdleCallback() {
        let n = () => {
          this.cancelIdleCallback(), (this.executingCallbacks = !0);
          for (let r of this.current) r();
          if (
            (this.current.clear(),
            (this.executingCallbacks = !1),
            this.deferred.size > 0)
          ) {
            for (let r of this.deferred) this.current.add(r);
            this.deferred.clear(), this.scheduleIdleCallback();
          }
        };
        this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n));
      }
      cancelIdleCallback() {
        this.idleId !== null &&
          (this.cancelIdleCallbackFn(this.idleId), (this.idleId = null));
      }
      ngOnDestroy() {
        this.cancelIdleCallback(), this.current.clear(), this.deferred.clear();
      }
      static ɵprov = H({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })();
var ty = (() => {
  class e {
    cachedInjectors = new Map();
    getOrCreateInjector(n, r, o, i) {
      if (!this.cachedInjectors.has(n)) {
        let s = o.length > 0 ? Cu(o, r, i) : null;
        this.cachedInjectors.set(n, s);
      }
      return this.cachedInjectors.get(n);
    }
    ngOnDestroy() {
      try {
        for (let n of this.cachedInjectors.values()) n !== null && n.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
    static ɵprov = H({
      token: e,
      providedIn: "environment",
      factory: () => new e(),
    });
  }
  return e;
})();
var ny = new k("");
function Go(e, t, n) {
  return e.get(ty).getOrCreateInjector(t, e, n, "");
}
function ry(e, t, n) {
  if (e instanceof vt) {
    let o = e.injector,
      i = e.parentInjector,
      s = Go(i, t, n);
    return new vt(o, s);
  }
  let r = e.get(Ie);
  if (r !== e) {
    let o = Go(r, t, n);
    return new vt(e, o);
  }
  return Go(e, t, n);
}
function $e(e, t, n, r = !1) {
  let o = n[$],
    i = o[m];
  if (nt(o)) return;
  let s = mn(o, t),
    a = s[Cs],
    c = s[uh];
  if (!(c !== null && e < c) && ic(a, e) && ic(s[sh] ?? -1, e)) {
    let l = yn(i, t),
      f =
        !r &&
        !0 &&
        (gh(l) !== null || Za(l, F.Loading) !== null || Za(l, F.Placeholder))
          ? ay
          : iy;
    try {
      f(e, s, n, t, o);
    } catch (p) {
      Ps(o, p);
    }
  }
}
function oy(e, t) {
  let n = e[en]?.findIndex((o) => o.data[Fl] === t[Cs]) ?? -1;
  return { dehydratedView: n > -1 ? e[en][n] : null, dehydratedViewIx: n };
}
function iy(e, t, n, r, o) {
  S(20);
  let i = hh(e, o, r);
  if (i !== null) {
    t[Cs] = e;
    let s = o[m],
      a = i + V,
      c = hn(s, a),
      l = 0;
    Bs(n, l);
    let u;
    if (e === F.Complete) {
      let h = yn(s, r),
        g = h.providers;
      g && g.length > 0 && (u = ry(o[oe], h, g));
    }
    let { dehydratedView: f, dehydratedViewIx: p } = oy(n, t),
      d = vn(o, c, null, { injector: u, dehydratedView: f });
    if (
      (In(n, d, l, wt(c, f)),
      to(d, 2),
      p > -1 && n[en]?.splice(p, 1),
      (e === F.Complete || e === F.Error) && Array.isArray(t[$o]))
    ) {
      for (let h of t[$o]) h();
      t[$o] = null;
    }
  }
  S(21);
}
function ic(e, t) {
  return e < t;
}
function sy(e, t) {
  let n = e[t.index];
  $e(F.Placeholder, t, n);
}
function sc(e, t, n) {
  e.loadingPromise.then(() => {
    e.loadingState === Q.COMPLETE
      ? $e(F.Complete, t, n)
      : e.loadingState === Q.FAILED && $e(F.Error, t, n);
  });
}
var ay = null;
var IC = (() => {
  class e {
    log(n) {
      console.log(n);
    }
    warn(n) {
      console.warn(n);
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = H({ token: e, factory: e.ɵfac, providedIn: "platform" });
  }
  return e;
})();
var cy = new k("");
var Nu = (() => {
    class e {
      static ɵprov = H({
        token: e,
        providedIn: "root",
        factory: () => new Li(),
      });
    }
    return e;
  })(),
  Li = class {
    queuedEffectCount = 0;
    queues = new Map();
    schedule(t) {
      this.enqueue(t);
    }
    remove(t) {
      let n = t.zone,
        r = this.queues.get(n);
      r.has(t) && (r.delete(t), this.queuedEffectCount--);
    }
    enqueue(t) {
      let n = t.zone;
      this.queues.has(n) || this.queues.set(n, new Set());
      let r = this.queues.get(n);
      r.has(t) || (this.queuedEffectCount++, r.add(t));
    }
    flush() {
      for (; this.queuedEffectCount > 0; )
        for (let [t, n] of this.queues)
          t === null ? this.flushQueue(n) : t.run(() => this.flushQueue(n));
    }
    flushQueue(t) {
      for (let n of t) t.delete(n), this.queuedEffectCount--, n.run();
    }
  };
function Su(e) {
  return !!e && typeof e.then == "function";
}
function ly(e) {
  return !!e && typeof e.subscribe == "function";
}
var ku = new k("");
function EC(e) {
  return Fc([{ provide: ku, multi: !0, useValue: e }]);
}
var Ru = (() => {
    class e {
      resolve;
      reject;
      initialized = !1;
      done = !1;
      donePromise = new Promise((n, r) => {
        (this.resolve = n), (this.reject = r);
      });
      appInits = b(ku, { optional: !0 }) ?? [];
      injector = b(Xe);
      constructor() {}
      runInitializers() {
        if (this.initialized) return;
        let n = [];
        for (let o of this.appInits) {
          let i = $c(this.injector, o);
          if (Su(i)) n.push(i);
          else if (ly(i)) {
            let s = new Promise((a, c) => {
              i.subscribe({ complete: a, error: c });
            });
            n.push(s);
          }
        }
        let r = () => {
          (this.done = !0), this.resolve();
        };
        Promise.all(n)
          .then(() => {
            r();
          })
          .catch((o) => {
            this.reject(o);
          }),
          n.length === 0 && r(),
          (this.initialized = !0);
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = H({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })(),
  uy = new k("");
function dy() {
  Io(() => {
    throw new T(600, !1);
  });
}
function fy(e) {
  return e.isBoundToModule;
}
var py = 10;
var un = (() => {
  class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = b(Ap);
    afterRenderManager = b(Vl);
    zonelessEnabled = b(Es);
    rootEffectScheduler = b(Nu);
    dirtyFlags = 0;
    tracingSnapshot = null;
    externalTestViews = new Set();
    afterTick = new Me();
    get allViews() {
      return [...this.externalTestViews.keys(), ...this._views];
    }
    get destroyed() {
      return this._destroyed;
    }
    componentTypes = [];
    components = [];
    isStable = b(gn).hasPendingTasks.pipe(Ve((n) => !n));
    constructor() {
      b(Qr, { optional: !0 });
    }
    whenStable() {
      let n;
      return new Promise((r) => {
        n = this.isStable.subscribe({
          next: (o) => {
            o && r();
          },
        });
      }).finally(() => {
        n.unsubscribe();
      });
    }
    _injector = b(Ie);
    _rendererFactory = null;
    get injector() {
      return this._injector;
    }
    bootstrap(n, r) {
      return this.bootstrapImpl(n, r);
    }
    bootstrapImpl(n, r, o = Xe.NULL) {
      S(10);
      let i = n instanceof yu;
      if (!this._injector.get(Ru).done) {
        let d = "";
        throw new T(405, d);
      }
      let a;
      i ? (a = n) : (a = this._injector.get(oo).resolveComponentFactory(n)),
        this.componentTypes.push(a.componentType);
      let c = fy(a) ? void 0 : this._injector.get(cn),
        l = r || a.selector,
        u = a.create(o, [], l, c),
        f = u.location.nativeElement,
        p = u.injector.get(cy, null);
      return (
        p?.registerApplication(f),
        u.onDestroy(() => {
          this.detachView(u.hostView),
            ir(this.components, u),
            p?.unregisterApplication(f);
        }),
        this._loadComponent(u),
        S(11, u),
        u
      );
    }
    tick() {
      this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick();
    }
    _tick() {
      S(12),
        this.tracingSnapshot !== null
          ? this.tracingSnapshot.run(bs.CHANGE_DETECTION, this.tickImpl)
          : this.tickImpl();
    }
    tickImpl = () => {
      if (this._runningTick) throw new T(101, !1);
      let n = D(null);
      try {
        (this._runningTick = !0), this.synchronize();
      } catch (r) {
        this.internalErrorHandler(r);
      } finally {
        (this._runningTick = !1),
          this.tracingSnapshot?.dispose(),
          (this.tracingSnapshot = null),
          D(n),
          this.afterTick.next(),
          S(13);
      }
    };
    synchronize() {
      this._rendererFactory === null &&
        !this._injector.destroyed &&
        (this._rendererFactory = this._injector.get(Tr, null, {
          optional: !0,
        }));
      let n = 0;
      for (; this.dirtyFlags !== 0 && n++ < py; )
        S(14), this.synchronizeOnce(), S(15);
    }
    synchronizeOnce() {
      if (
        (this.dirtyFlags & 16 &&
          ((this.dirtyFlags &= -17), this.rootEffectScheduler.flush()),
        this.dirtyFlags & 7)
      ) {
        let n = !!(this.dirtyFlags & 1);
        (this.dirtyFlags &= -8), (this.dirtyFlags |= 8);
        for (let { _lView: r, notifyErrorHandler: o } of this.allViews)
          hy(r, o, n, this.zonelessEnabled);
        if (
          ((this.dirtyFlags &= -5),
          this.syncDirtyFlagsWithViews(),
          this.dirtyFlags & 23)
        )
          return;
      } else this._rendererFactory?.begin?.(), this._rendererFactory?.end?.();
      this.dirtyFlags & 8 &&
        ((this.dirtyFlags &= -9), this.afterRenderManager.execute()),
        this.syncDirtyFlagsWithViews();
    }
    syncDirtyFlagsWithViews() {
      if (this.allViews.some(({ _lView: n }) => $r(n))) {
        this.dirtyFlags |= 2;
        return;
      } else this.dirtyFlags &= -8;
    }
    attachView(n) {
      let r = n;
      this._views.push(r), r.attachToAppRef(this);
    }
    detachView(n) {
      let r = n;
      ir(this._views, r), r.detachFromAppRef();
    }
    _loadComponent(n) {
      this.attachView(n.hostView),
        this.tick(),
        this.components.push(n),
        this._injector.get(uy, []).forEach((o) => o(n));
    }
    ngOnDestroy() {
      if (!this._destroyed)
        try {
          this._destroyListeners.forEach((n) => n()),
            this._views.slice().forEach((n) => n.destroy());
        } finally {
          (this._destroyed = !0),
            (this._views = []),
            (this._destroyListeners = []);
        }
    }
    onDestroy(n) {
      return (
        this._destroyListeners.push(n), () => ir(this._destroyListeners, n)
      );
    }
    destroy() {
      if (this._destroyed) throw new T(406, !1);
      let n = this._injector;
      n.destroy && !n.destroyed && n.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = H({ token: e, factory: e.ɵfac, providedIn: "root" });
  }
  return e;
})();
function ir(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function hy(e, t, n, r) {
  if (!n && !$r(e)) return;
  uu(e, t, n && !r ? 0 : 1);
}
function gy(e) {
  let t = y(),
    n = q();
  if ((sy(t, n), !Ou(0, t))) return;
  let r = t[oe],
    o = mn(t, n),
    i = e(() => yy(0, t, n), r);
  $l(0, o, i);
}
function my(e, t, n) {
  let r = t[oe],
    o = t[m];
  if (e.loadingState !== Q.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve();
  let i = mn(t, n),
    s = mh(o, e);
  (e.loadingState = Q.IN_PROGRESS), or(1, i);
  let a = e.dependencyResolverFn,
    c = r.get(Tp).add();
  return a
    ? ((e.loadingPromise = Promise.allSettled(a()).then((l) => {
        let u = !1,
          f = [],
          p = [];
        for (let d of l)
          if (d.status === "fulfilled") {
            let h = d.value,
              g = ke(h) || Pc(h);
            if (g) f.push(g);
            else {
              let x = Lc(h);
              x && p.push(x);
            }
          } else {
            u = !0;
            break;
          }
        if (u) {
          if (((e.loadingState = Q.FAILED), e.errorTmplIndex === null)) {
            let d = "",
              h = new T(-750, !1);
            Ps(t, h);
          }
        } else {
          e.loadingState = Q.COMPLETE;
          let d = s.tView;
          if (f.length > 0) {
            d.directiveRegistry = Ya(d.directiveRegistry, f);
            let h = f.map((x) => x.type),
              g = is(!1, ...h);
            e.providers = g;
          }
          p.length > 0 && (d.pipeRegistry = Ya(d.pipeRegistry, p));
        }
      })),
      e.loadingPromise.finally(() => {
        (e.loadingPromise = null), c();
      }))
    : ((e.loadingPromise = Promise.resolve().then(() => {
        (e.loadingPromise = null), (e.loadingState = Q.COMPLETE), c();
      })),
      e.loadingPromise);
}
function Ou(e, t) {
  return t[oe].get(ny, null, { optional: !0 })?.behavior !== Bl.Manual;
}
function yy(e, t, n) {
  let r = t[m],
    o = t[n.index];
  if (!Ou(e, t)) return;
  let i = mn(t, n),
    s = yn(r, n);
  switch ((Ul(i), s.loadingState)) {
    case Q.NOT_STARTED:
      $e(F.Loading, n, o),
        my(s, t, n),
        s.loadingState === Q.IN_PROGRESS && sc(s, n, o);
      break;
    case Q.IN_PROGRESS:
      $e(F.Loading, n, o), sc(s, n, o);
      break;
    case Q.COMPLETE:
      $e(F.Complete, n, o);
      break;
    case Q.FAILED:
      $e(F.Error, n, o);
      break;
    default:
  }
}
function vy(e, t, n) {
  return e === 0 ? ac(t, n) : e === 2 ? !ac(t, n) : !0;
}
function ac(e, t) {
  let n = e[oe],
    r = yn(e[m], t),
    o = Dh(n),
    i = r.flags !== null && (r.flags & 1) === 1,
    a = mn(e, t)[lh] !== null;
  return !(i && a && o);
}
function DC(e, t, n, r, o, i, s, a, c, l) {
  let u = y(),
    f = A(),
    p = e + V,
    d = kr(u, f, e, null, 0, 0),
    h = u[oe];
  if (f.firstCreatePass) {
    kt("NgDefer");
    let Ot = {
      primaryTmplIndex: t,
      loadingTmplIndex: r ?? null,
      placeholderTmplIndex: o ?? null,
      errorTmplIndex: i ?? null,
      placeholderBlockConfig: null,
      loadingBlockConfig: null,
      dependencyResolverFn: n ?? null,
      loadingState: Q.NOT_STARTED,
      loadingPromise: null,
      providers: null,
      hydrateTriggers: null,
      debug: null,
      flags: l ?? 0,
    };
    c?.(f, Ot, a, s), ph(f, p, Ot);
  }
  let g = u[p];
  bu(g, d, u);
  let x = null,
    C = null;
  if (g[en]?.length > 0) {
    let Ot = g[en][0].data;
    (C = Ot[Yp] ?? null), (x = Ot[Fl]);
  }
  let ye = [null, Hl.Initial, null, null, null, null, C, x, null, null];
  fh(u, p, ye);
  let so = null;
  C !== null &&
    ((so = h.get(Ih)), so.add(C, { lView: u, tNode: d, lContainer: g }));
  let Gs = () => {
    Ul(ye), C !== null && so?.cleanup([C]);
  };
  $l(0, ye, () => nl(u, Gs)), us(u, Gs);
}
function wC() {
  let e = y(),
    t = q();
  vy(0, e, t) && gy(Jm);
}
function Iy(e, t, n, r) {
  let o = y(),
    i = xt();
  if (te(o, i, t)) {
    let s = A(),
      a = Ur();
    ag(a, o, e, t, n, r);
  }
  return Iy;
}
function Au(e, t, n, r) {
  return te(e, xt(), n) ? t + jr(n) + r : de;
}
function Xn(e, t) {
  return (e << 17) | (t << 2);
}
function tt(e) {
  return (e >> 17) & 32767;
}
function Ey(e) {
  return (e & 2) == 2;
}
function Dy(e, t) {
  return (e & 131071) | (t << 17);
}
function Fi(e) {
  return e | 2;
}
function Mt(e) {
  return (e & 131068) >> 2;
}
function Qo(e, t) {
  return (e & -131069) | (t << 2);
}
function wy(e) {
  return (e & 1) === 1;
}
function ji(e) {
  return e | 1;
}
function by(e, t, n, r, o, i) {
  let s = i ? t.classBindings : t.styleBindings,
    a = tt(s),
    c = Mt(s);
  e[r] = n;
  let l = !1,
    u;
  if (Array.isArray(n)) {
    let f = n;
    (u = f[1]), (u === null || pn(f, u) > 0) && (l = !0);
  } else u = n;
  if (o)
    if (c !== 0) {
      let p = tt(e[a + 1]);
      (e[r + 1] = Xn(p, a)),
        p !== 0 && (e[p + 1] = Qo(e[p + 1], r)),
        (e[a + 1] = Dy(e[a + 1], r));
    } else
      (e[r + 1] = Xn(a, 0)), a !== 0 && (e[a + 1] = Qo(e[a + 1], r)), (a = r);
  else
    (e[r + 1] = Xn(c, 0)),
      a === 0 ? (a = r) : (e[c + 1] = Qo(e[c + 1], r)),
      (c = r);
  l && (e[r + 1] = Fi(e[r + 1])),
    cc(e, u, r, !0),
    cc(e, u, r, !1),
    My(t, u, e, r, i),
    (s = Xn(a, c)),
    i ? (t.classBindings = s) : (t.styleBindings = s);
}
function My(e, t, n, r, o) {
  let i = o ? e.residualClasses : e.residualStyles;
  i != null &&
    typeof t == "string" &&
    pn(i, t) >= 0 &&
    (n[r + 1] = ji(n[r + 1]));
}
function cc(e, t, n, r) {
  let o = e[n + 1],
    i = t === null,
    s = r ? tt(o) : Mt(o),
    a = !1;
  for (; s !== 0 && (a === !1 || i); ) {
    let c = e[s],
      l = e[s + 1];
    Cy(c, t) && ((a = !0), (e[s + 1] = r ? ji(l) : Fi(l))),
      (s = r ? tt(l) : Mt(l));
  }
  a && (e[n + 1] = r ? Fi(o) : ji(o));
}
function Cy(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == "string"
    ? pn(e, t) >= 0
    : !1;
}
var ae = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function _y(e) {
  return e.substring(ae.key, ae.keyEnd);
}
function Ty(e) {
  return xy(e), Pu(e, Lu(e, 0, ae.textEnd));
}
function Pu(e, t) {
  let n = ae.textEnd;
  return n === t ? -1 : ((t = ae.keyEnd = Ny(e, (ae.key = t), n)), Lu(e, t, n));
}
function xy(e) {
  (ae.key = 0),
    (ae.keyEnd = 0),
    (ae.value = 0),
    (ae.valueEnd = 0),
    (ae.textEnd = e.length);
}
function Lu(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32; ) t++;
  return t;
}
function Ny(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32; ) t++;
  return t;
}
function Sy(e, t, n) {
  let r = y(),
    o = xt();
  if (te(r, o, t)) {
    let i = A(),
      s = Ur();
    Os(i, s, r, e, t, r[O], n, !1);
  }
  return Sy;
}
function Vi(e, t, n, r, o) {
  Ls(t, e, n, o ? "class" : "style", r);
}
function ky(e, t, n) {
  return Fu(e, t, n, !1), ky;
}
function Ry(e, t) {
  return Fu(e, t, null, !0), Ry;
}
function bC(e) {
  Ay(Hy, Oy, e, !0);
}
function Oy(e, t) {
  for (let n = Ty(t); n >= 0; n = Pu(t, n)) os(e, _y(t), !0);
}
function Fu(e, t, n, r) {
  let o = y(),
    i = A(),
    s = sl(2);
  if ((i.firstUpdatePass && Vu(i, e, s, r), t !== de && te(o, s, t))) {
    let a = i.data[Ae()];
    Hu(i, a, o, o[O], e, (o[s + 1] = $y(t, n)), r, s);
  }
}
function Ay(e, t, n, r) {
  let o = A(),
    i = sl(2);
  o.firstUpdatePass && Vu(o, null, i, r);
  let s = y();
  if (n !== de && te(s, i, n)) {
    let a = o.data[Ae()];
    if (Bu(a, r) && !ju(o, i)) {
      let c = r ? a.classesWithoutHost : a.stylesWithoutHost;
      c !== null && (n = Xo(c, n || "")), Vi(o, a, s, n, r);
    } else By(o, a, s, s[O], s[i + 1], (s[i + 1] = Vy(e, t, n)), r, i);
  }
}
function ju(e, t) {
  return t >= e.expandoStartIndex;
}
function Vu(e, t, n, r) {
  let o = e.data;
  if (o[n + 1] === null) {
    let i = o[Ae()],
      s = ju(e, n);
    Bu(i, r) && t === null && !s && (t = !1),
      (t = Py(o, i, t, r)),
      by(o, i, t, n, s, r);
  }
}
function Py(e, t, n, r) {
  let o = ip(e),
    i = r ? t.residualClasses : t.residualStyles;
  if (o === null)
    (r ? t.classBindings : t.styleBindings) === 0 &&
      ((n = Zo(null, e, t, n, r)), (n = dn(n, t.attrs, r)), (i = null));
  else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o)
      if (((n = Zo(o, e, t, n, r)), i === null)) {
        let c = Ly(e, t, r);
        c !== void 0 &&
          Array.isArray(c) &&
          ((c = Zo(null, e, t, c[1], r)),
          (c = dn(c, t.attrs, r)),
          Fy(e, t, r, c));
      } else i = jy(e, t, r);
  }
  return (
    i !== void 0 && (r ? (t.residualClasses = i) : (t.residualStyles = i)), n
  );
}
function Ly(e, t, n) {
  let r = n ? t.classBindings : t.styleBindings;
  if (Mt(r) !== 0) return e[tt(r)];
}
function Fy(e, t, n, r) {
  let o = n ? t.classBindings : t.styleBindings;
  e[tt(o)] = r;
}
function jy(e, t, n) {
  let r,
    o = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = dn(r, s, n);
  }
  return dn(r, t.attrs, n);
}
function Zo(e, t, n, r, o) {
  let i = null,
    s = n.directiveEnd,
    a = n.directiveStylingLast;
  for (
    a === -1 ? (a = n.directiveStart) : a++;
    a < s && ((i = t[a]), (r = dn(r, i.hostAttrs, o)), i !== e);

  )
    a++;
  return e !== null && (n.directiveStylingLast = a), r;
}
function dn(e, t, n) {
  let r = n ? 1 : 2,
    o = -1;
  if (t !== null)
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      typeof s == "number"
        ? (o = s)
        : o === r &&
          (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
          os(e, s, n ? !0 : t[++i]));
    }
  return e === void 0 ? null : e;
}
function Vy(e, t, n) {
  if (n == null || n === "") return Z;
  let r = [],
    o = Ts(n);
  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) e(r, o[i], !0);
  else if (typeof o == "object")
    for (let i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
  else typeof o == "string" && t(r, o);
  return r;
}
function Hy(e, t, n) {
  let r = String(t);
  r !== "" && !r.includes(" ") && os(e, r, n);
}
function By(e, t, n, r, o, i, s, a) {
  o === de && (o = Z);
  let c = 0,
    l = 0,
    u = 0 < o.length ? o[0] : null,
    f = 0 < i.length ? i[0] : null;
  for (; u !== null || f !== null; ) {
    let p = c < o.length ? o[c + 1] : void 0,
      d = l < i.length ? i[l + 1] : void 0,
      h = null,
      g;
    u === f
      ? ((c += 2), (l += 2), p !== d && ((h = f), (g = d)))
      : f === null || (u !== null && u < f)
      ? ((c += 2), (h = u))
      : ((l += 2), (h = f), (g = d)),
      h !== null && Hu(e, t, n, r, h, g, s, a),
      (u = c < o.length ? o[c] : null),
      (f = l < i.length ? i[l] : null);
  }
}
function Hu(e, t, n, r, o, i, s, a) {
  if (!(t.type & 3)) return;
  let c = e.data,
    l = c[a + 1],
    u = wy(l) ? lc(c, t, n, o, Mt(l), s) : void 0;
  if (!Rr(u)) {
    Rr(i) || (Ey(l) && (i = lc(c, null, n, o, a, s)));
    let f = Kc(Ae(), n);
    _g(r, s, f, o, i);
  }
}
function lc(e, t, n, r, o, i) {
  let s = t === null,
    a;
  for (; o > 0; ) {
    let c = e[o],
      l = Array.isArray(c),
      u = l ? c[1] : c,
      f = u === null,
      p = n[o + 1];
    p === de && (p = f ? Z : void 0);
    let d = f ? Fo(p, r) : u === r ? p : void 0;
    if ((l && !Rr(d) && (d = Fo(c, r)), Rr(d) && ((a = d), s))) return a;
    let h = e[o + 1];
    o = s ? tt(h) : Mt(h);
  }
  if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = Fo(c, r));
  }
  return a;
}
function Rr(e) {
  return e !== void 0;
}
function $y(e, t) {
  return (
    e == null ||
      e === "" ||
      (typeof t == "string"
        ? (e = e + t)
        : typeof e == "object" && (e = Y(Ts(e)))),
    e
  );
}
function Bu(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
var Hi = class {
  destroy(t) {}
  updateValue(t, n) {}
  swap(t, n) {
    let r = Math.min(t, n),
      o = Math.max(t, n),
      i = this.detach(o);
    if (o - r > 1) {
      let s = this.detach(r);
      this.attach(r, i), this.attach(o, s);
    } else this.attach(r, i);
  }
  move(t, n) {
    this.attach(n, this.detach(t));
  }
};
function Yo(e, t, n, r, o) {
  return e === n && Object.is(t, r) ? 1 : Object.is(o(e, t), o(n, r)) ? -1 : 0;
}
function Uy(e, t, n) {
  let r,
    o,
    i = 0,
    s = e.length - 1,
    a = void 0;
  if (Array.isArray(t)) {
    let c = t.length - 1;
    for (; i <= s && i <= c; ) {
      let l = e.at(i),
        u = t[i],
        f = Yo(i, l, i, u, n);
      if (f !== 0) {
        f < 0 && e.updateValue(i, u), i++;
        continue;
      }
      let p = e.at(s),
        d = t[c],
        h = Yo(s, p, c, d, n);
      if (h !== 0) {
        h < 0 && e.updateValue(s, d), s--, c--;
        continue;
      }
      let g = n(i, l),
        x = n(s, p),
        C = n(i, u);
      if (Object.is(C, x)) {
        let ye = n(c, d);
        Object.is(ye, g)
          ? (e.swap(i, s), e.updateValue(s, d), c--, s--)
          : e.move(s, i),
          e.updateValue(i, u),
          i++;
        continue;
      }
      if (((r ??= new Or()), (o ??= dc(e, i, s, n)), Bi(e, r, i, C)))
        e.updateValue(i, u), i++, s++;
      else if (o.has(C)) r.set(g, e.detach(i)), s--;
      else {
        let ye = e.create(i, t[i]);
        e.attach(i, ye), i++, s++;
      }
    }
    for (; i <= c; ) uc(e, r, n, i, t[i]), i++;
  } else if (t != null) {
    let c = t[Symbol.iterator](),
      l = c.next();
    for (; !l.done && i <= s; ) {
      let u = e.at(i),
        f = l.value,
        p = Yo(i, u, i, f, n);
      if (p !== 0) p < 0 && e.updateValue(i, f), i++, (l = c.next());
      else {
        (r ??= new Or()), (o ??= dc(e, i, s, n));
        let d = n(i, f);
        if (Bi(e, r, i, d)) e.updateValue(i, f), i++, s++, (l = c.next());
        else if (!o.has(d))
          e.attach(i, e.create(i, f)), i++, s++, (l = c.next());
        else {
          let h = n(i, u);
          r.set(h, e.detach(i)), s--;
        }
      }
    }
    for (; !l.done; ) uc(e, r, n, e.length, l.value), (l = c.next());
  }
  for (; i <= s; ) e.destroy(e.detach(s--));
  r?.forEach((c) => {
    e.destroy(c);
  });
}
function Bi(e, t, n, r) {
  return t !== void 0 && t.has(r)
    ? (e.attach(n, t.get(r)), t.delete(r), !0)
    : !1;
}
function uc(e, t, n, r, o) {
  if (Bi(e, t, r, n(r, o))) e.updateValue(r, o);
  else {
    let i = e.create(r, o);
    e.attach(r, i);
  }
}
function dc(e, t, n, r) {
  let o = new Set();
  for (let i = t; i <= n; i++) o.add(r(i, e.at(i)));
  return o;
}
var Or = class {
  kvMap = new Map();
  _vMap = void 0;
  has(t) {
    return this.kvMap.has(t);
  }
  delete(t) {
    if (!this.has(t)) return !1;
    let n = this.kvMap.get(t);
    return (
      this._vMap !== void 0 && this._vMap.has(n)
        ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n))
        : this.kvMap.delete(t),
      !0
    );
  }
  get(t) {
    return this.kvMap.get(t);
  }
  set(t, n) {
    if (this.kvMap.has(t)) {
      let r = this.kvMap.get(t);
      this._vMap === void 0 && (this._vMap = new Map());
      let o = this._vMap;
      for (; o.has(r); ) r = o.get(r);
      o.set(r, n);
    } else this.kvMap.set(t, n);
  }
  forEach(t) {
    for (let [n, r] of this.kvMap)
      if ((t(r, n), this._vMap !== void 0)) {
        let o = this._vMap;
        for (; o.has(r); ) (r = o.get(r)), t(r, n);
      }
  }
};
function MC(e, t) {
  kt("NgControlFlow");
  let n = y(),
    r = xt(),
    o = n[r] !== de ? n[r] : -1,
    i = o !== -1 ? Ar(n, V + o) : void 0,
    s = 0;
  if (te(n, r, e)) {
    let a = D(null);
    try {
      if ((i !== void 0 && Bs(i, s), e !== -1)) {
        let c = V + e,
          l = Ar(n, c),
          u = Wi(n[m], c),
          f = an(l, u.tView.ssrId),
          p = vn(n, u, t, { dehydratedView: f });
        In(l, p, s, wt(u, f));
      }
    } finally {
      D(a);
    }
  } else if (i !== void 0) {
    let a = gu(i, s);
    a !== void 0 && (a[j] = t);
  }
}
var $i = class {
  lContainer;
  $implicit;
  $index;
  constructor(t, n, r) {
    (this.lContainer = t), (this.$implicit = n), (this.$index = r);
  }
  get $count() {
    return this.lContainer.length - U;
  }
};
function CC(e, t) {
  return t;
}
var Ui = class {
  hasEmptyBlock;
  trackByFn;
  liveCollection;
  constructor(t, n, r) {
    (this.hasEmptyBlock = t), (this.trackByFn = n), (this.liveCollection = r);
  }
};
function _C(e, t, n, r, o, i, s, a, c, l, u, f, p) {
  kt("NgControlFlow");
  let d = y(),
    h = A(),
    g = c !== void 0,
    x = y(),
    C = a ? s.bind(x[le][j]) : s,
    ye = new Ui(g, C);
  (x[V + e] = ye),
    kr(d, h, e + 1, t, n, r, o, Re(h.consts, i)),
    g && kr(d, h, e + 2, c, l, u, f, Re(h.consts, p));
}
var qi = class extends Hi {
  lContainer;
  hostLView;
  templateTNode;
  operationsCounter = void 0;
  needsIndexUpdate = !1;
  constructor(t, n, r) {
    super(),
      (this.lContainer = t),
      (this.hostLView = n),
      (this.templateTNode = r);
  }
  get length() {
    return this.lContainer.length - U;
  }
  at(t) {
    return this.getLView(t)[j].$implicit;
  }
  attach(t, n) {
    let r = n[Kt];
    (this.needsIndexUpdate ||= t !== this.length),
      In(this.lContainer, n, t, wt(this.templateTNode, r));
  }
  detach(t) {
    return (
      (this.needsIndexUpdate ||= t !== this.length - 1), qy(this.lContainer, t)
    );
  }
  create(t, n) {
    let r = an(this.lContainer, this.templateTNode.tView.ssrId),
      o = vn(
        this.hostLView,
        this.templateTNode,
        new $i(this.lContainer, n, t),
        { dehydratedView: r }
      );
    return this.operationsCounter?.recordCreate(), o;
  }
  destroy(t) {
    Kr(t[m], t), this.operationsCounter?.recordDestroy();
  }
  updateValue(t, n) {
    this.getLView(t)[j].$implicit = n;
  }
  reset() {
    (this.needsIndexUpdate = !1), this.operationsCounter?.reset();
  }
  updateIndexes() {
    if (this.needsIndexUpdate)
      for (let t = 0; t < this.length; t++) this.getLView(t)[j].$index = t;
  }
  getLView(t) {
    return Wy(this.lContainer, t);
  }
};
function TC(e) {
  let t = D(null),
    n = Ae();
  try {
    let r = y(),
      o = r[m],
      i = r[n],
      s = n + 1,
      a = Ar(r, s);
    if (i.liveCollection === void 0) {
      let l = Wi(o, s);
      i.liveCollection = new qi(a, r, l);
    } else i.liveCollection.reset();
    let c = i.liveCollection;
    if ((Uy(c, e, i.trackByFn), c.updateIndexes(), i.hasEmptyBlock)) {
      let l = xt(),
        u = c.length === 0;
      if (te(r, l, u)) {
        let f = n + 2,
          p = Ar(r, f);
        if (u) {
          let d = Wi(o, f),
            h = an(p, d.tView.ssrId),
            g = vn(r, d, void 0, { dehydratedView: h });
          In(p, g, 0, wt(d, h));
        } else Bs(p, 0);
      }
    }
  } finally {
    D(t);
  }
}
function Ar(e, t) {
  return e[t];
}
function qy(e, t) {
  return on(e, t);
}
function Wy(e, t) {
  return gu(e, t);
}
function Wi(e, t) {
  return hn(e, t);
}
function $u(e, t, n, r) {
  let o = y(),
    i = A(),
    s = V + e,
    a = o[O],
    c = i.firstCreatePass ? Iu(s, i, o, t, As, ps(), n, r) : i.data[s],
    l = Gy(i, o, c, a, t, e);
  o[s] = l;
  let u = Br(c);
  return (
    rt(c, !0),
    Kl(a, l, c),
    !ru(c) && qr() && Xr(i, o, l, c),
    (Gf() === 0 || u) && St(l, o),
    Qf(),
    u && (Jr(i, o, c), _s(i, c, o)),
    r !== null && Rs(o, c),
    $u
  );
}
function Uu() {
  let e = q();
  hs() ? ol() : ((e = e.parent), rt(e, !1));
  let t = e;
  Jf(t) && Kf(), Zf();
  let n = A();
  return (
    n.firstCreatePass && Eu(n, t),
    t.classesWithoutHost != null &&
      fp(t) &&
      Vi(n, t, y(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null &&
      pp(t) &&
      Vi(n, t, y(), t.stylesWithoutHost, !1),
    Uu
  );
}
function zy(e, t, n, r) {
  return $u(e, t, n, r), Uu(), zy;
}
var Gy = (e, t, n, r, o, i) => (Wr(!0), Yl(r, o, lp()));
function Qy(e, t, n, r, o) {
  let i = t.consts,
    s = Re(i, r),
    a = ro(t, e, 8, "ng-container", s);
  s !== null && _i(a, s, !0);
  let c = Re(i, o);
  return (
    ps() && $s(t, n, a, c, As),
    (a.mergedAttrs = Dt(a.mergedAttrs, a.attrs)),
    t.queries !== null && t.queries.elementStart(t, a),
    a
  );
}
function qu(e, t, n) {
  let r = y(),
    o = A(),
    i = e + V,
    s = o.firstCreatePass ? Qy(i, o, r, t, n) : o.data[i];
  rt(s, !0);
  let a = Yy(o, r, s, e);
  return (
    (r[i] = a),
    qr() && Xr(o, r, a, s),
    St(a, r),
    Br(s) && (Jr(o, r, s), _s(o, s, r)),
    n != null && Rs(r, s),
    qu
  );
}
function Wu() {
  let e = q(),
    t = A();
  return (
    hs() ? ol() : ((e = e.parent), rt(e, !1)),
    t.firstCreatePass && (vs(t, e), cs(e) && t.queries.elementEnd(e)),
    Wu
  );
}
function Zy(e, t, n) {
  return qu(e, t, n), Wu(), Zy;
}
var Yy = (e, t, n, r) => (Wr(!0), zh(t[O], ""));
function xC() {
  return y();
}
var Be = void 0;
function Jy(e) {
  let t = Math.floor(Math.abs(e)),
    n = e.toString().replace(/^[^.]*\.?/, "").length;
  return t === 1 && n === 0 ? 1 : 5;
}
var Ky = [
    "en",
    [["a", "p"], ["AM", "PM"], Be],
    [["AM", "PM"], Be, Be],
    [
      ["S", "M", "T", "W", "T", "F", "S"],
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    ],
    Be,
    [
      ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    ],
    Be,
    [
      ["B", "A"],
      ["BC", "AD"],
      ["Before Christ", "Anno Domini"],
    ],
    0,
    [6, 0],
    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
    ["{1}, {0}", Be, "{1} 'at' {0}", Be],
    [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"],
    ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"],
    "USD",
    "$",
    "US Dollar",
    {},
    "ltr",
    Jy,
  ],
  Yt = {};
function NC(e, t, n) {
  typeof t != "string" && ((n = t), (t = e[zi.LocaleId])),
    (t = t.toLowerCase().replace(/_/g, "-")),
    (Yt[t] = e),
    n && (Yt[t][zi.ExtraData] = n);
}
function SC(e) {
  let t = Xy(e),
    n = fc(t);
  if (n) return n;
  let r = t.split("-")[0];
  if (((n = fc(r)), n)) return n;
  if (r === "en") return Ky;
  throw new T(701, !1);
}
function fc(e) {
  return (
    e in Yt ||
      (Yt[e] =
        dt.ng &&
        dt.ng.common &&
        dt.ng.common.locales &&
        dt.ng.common.locales[e]),
    Yt[e]
  );
}
var zi = (function (e) {
  return (
    (e[(e.LocaleId = 0)] = "LocaleId"),
    (e[(e.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
    (e[(e.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
    (e[(e.DaysFormat = 3)] = "DaysFormat"),
    (e[(e.DaysStandalone = 4)] = "DaysStandalone"),
    (e[(e.MonthsFormat = 5)] = "MonthsFormat"),
    (e[(e.MonthsStandalone = 6)] = "MonthsStandalone"),
    (e[(e.Eras = 7)] = "Eras"),
    (e[(e.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
    (e[(e.WeekendRange = 9)] = "WeekendRange"),
    (e[(e.DateFormat = 10)] = "DateFormat"),
    (e[(e.TimeFormat = 11)] = "TimeFormat"),
    (e[(e.DateTimeFormat = 12)] = "DateTimeFormat"),
    (e[(e.NumberSymbols = 13)] = "NumberSymbols"),
    (e[(e.NumberFormats = 14)] = "NumberFormats"),
    (e[(e.CurrencyCode = 15)] = "CurrencyCode"),
    (e[(e.CurrencySymbol = 16)] = "CurrencySymbol"),
    (e[(e.CurrencyName = 17)] = "CurrencyName"),
    (e[(e.Currencies = 18)] = "Currencies"),
    (e[(e.Directionality = 19)] = "Directionality"),
    (e[(e.PluralCase = 20)] = "PluralCase"),
    (e[(e.ExtraData = 21)] = "ExtraData"),
    e
  );
})(zi || {});
function Xy(e) {
  return e.toLowerCase().replace(/_/g, "-");
}
var Pr = "en-US";
var ev = Pr;
function tv(e) {
  typeof e == "string" && (ev = e.toLowerCase().replace(/_/g, "-"));
}
function pc(e, t, n) {
  return function r(o) {
    if (o === Function) return n;
    let i = _t(e) ? ge(e.index, t) : t;
    to(i, 5);
    let s = t[j],
      a = hc(t, s, n, o),
      c = r.__ngNextListenerFn__;
    for (; c; ) (a = hc(t, s, c, o) && a), (c = c.__ngNextListenerFn__);
    return a;
  };
}
function hc(e, t, n, r) {
  let o = D(null);
  try {
    return S(6, t, n), n(r) !== !1;
  } catch (i) {
    return nv(e, i), !1;
  } finally {
    S(7, t, n), D(o);
  }
}
function nv(e, t) {
  let n = e[oe],
    r = n ? n.get(et, null) : null;
  r && r.handleError(t);
}
function gc(e, t, n, r, o, i) {
  let s = t[n],
    a = t[m],
    l = a.data[n].outputs[r],
    u = s[l],
    f = a.firstCreatePass ? fs(a) : null,
    p = ds(t),
    d = u.subscribe(i),
    h = p.length;
  p.push(i, d), f && f.push(o, e.index, h, -(h + 1));
}
function rv(e, t, n, r) {
  let o = y(),
    i = A(),
    s = q();
  return zu(i, o, o[O], s, e, t, r), rv;
}
function ov(e, t, n, r) {
  let o = e.cleanup;
  if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
      let s = o[i];
      if (s === n && o[i + 1] === r) {
        let a = t[pr],
          c = o[i + 2];
        return a.length > c ? a[c] : null;
      }
      typeof s == "string" && (i += 2);
    }
  return null;
}
function zu(e, t, n, r, o, i, s) {
  let a = Br(r),
    l = e.firstCreatePass ? fs(e) : null,
    u = ds(t),
    f = !0;
  if (r.type & 3 || s) {
    let p = me(r, t),
      d = s ? s(p) : p,
      h = u.length,
      g = s ? (C) => s(he(C[r.index])) : r.index,
      x = null;
    if ((!s && a && (x = ov(e, t, o, r.index)), x !== null)) {
      let C = x.__ngLastListenerFn__ || x;
      (C.__ngNextListenerFn__ = i), (x.__ngLastListenerFn__ = i), (f = !1);
    } else {
      (i = pc(r, t, i)), vh(t, d, o, i);
      let C = n.listen(d, o, i);
      u.push(i, C), l && l.push(o, g, h, h + 1);
    }
  } else i = pc(r, t, i);
  if (f) {
    let p = r.outputs?.[o],
      d = r.hostDirectiveOutputs?.[o];
    if (d && d.length)
      for (let h = 0; h < d.length; h += 2) {
        let g = d[h],
          x = d[h + 1];
        gc(r, t, g, x, o, i);
      }
    if (p && p.length) for (let h of p) gc(r, t, h, o, o, i);
  }
}
function kC(e = 1) {
  return ap(e);
}
function iv(e, t, n, r, o) {
  let i = y(),
    s = Au(i, t, n, r);
  if (s !== de) {
    let a = A(),
      c = Ur();
    Os(a, c, i, e, s, i[O], o, !1);
  }
  return iv;
}
function RC(e, t, n) {
  _m(e, t, n);
}
function OC(e) {
  let t = y(),
    n = A(),
    r = al();
  gs(r + 1);
  let o = qs(n, r);
  if (e.dirty && Uf(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) e.reset([]);
    else {
      let i = Nm(t, r);
      e.reset(i, Fp), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function AC() {
  return Mm(y(), al());
}
function PC(e) {
  let t = ep();
  return Xc(t, V + e);
}
function LC(e, t = "") {
  let n = y(),
    r = A(),
    o = e + V,
    i = r.firstCreatePass ? ro(r, o, 1, t, null) : r.data[o],
    s = sv(r, n, i, t, e);
  (n[o] = s), qr() && Xr(r, n, s, i), rt(i, !1);
}
var sv = (e, t, n, r, o) => (Wr(!0), qh(t[O], r));
function av(e) {
  return Gu("", e, ""), av;
}
function Gu(e, t, n) {
  let r = y(),
    o = Au(r, e, t, n);
  return o !== de && cv(r, Ae(), o), Gu;
}
function cv(e, t, n) {
  let r = Kc(t, e);
  Wh(e[O], r, n);
}
function lv(e, t, n) {
  Sl(t) && (t = t());
  let r = y(),
    o = xt();
  if (te(r, o, t)) {
    let i = A(),
      s = Ur();
    Os(i, s, r, e, t, r[O], n, !1);
  }
  return lv;
}
function FC(e, t) {
  let n = Sl(e);
  return n && e.set(t), n;
}
function uv(e, t) {
  let n = y(),
    r = A(),
    o = q();
  return zu(r, n, n[O], o, e, t), uv;
}
function dv(e, t, n) {
  let r = A();
  if (r.firstCreatePass) {
    let o = pe(e);
    Gi(n, r.data, r.blueprint, o, !0), Gi(t, r.data, r.blueprint, o, !1);
  }
}
function Gi(e, t, n, r, o) {
  if (((e = W(e)), Array.isArray(e)))
    for (let i = 0; i < e.length; i++) Gi(e[i], t, n, r, o);
  else {
    let i = A(),
      s = y(),
      a = q(),
      c = It(e) ? e : W(e.provide),
      l = Bc(e),
      u = a.providerIndexes & 1048575,
      f = a.directiveStart,
      p = a.providerIndexes >> 20;
    if (It(e) || !e.multi) {
      let d = new Ke(l, o, io),
        h = Ko(c, t, o ? u : u + p, f);
      h === -1
        ? (di(Er(a, s), i, c),
          Jo(i, e, t.length),
          t.push(c),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(d),
          s.push(d))
        : ((n[h] = d), (s[h] = d));
    } else {
      let d = Ko(c, t, u + p, f),
        h = Ko(c, t, u, u + p),
        g = d >= 0 && n[d],
        x = h >= 0 && n[h];
      if ((o && !x) || (!o && !g)) {
        di(Er(a, s), i, c);
        let C = hv(o ? pv : fv, n.length, o, r, l);
        !o && x && (n[h].providerFactory = C),
          Jo(i, e, t.length, 0),
          t.push(c),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(C),
          s.push(C);
      } else {
        let C = Qu(n[o ? h : d], l, !o && r);
        Jo(i, e, d > -1 ? d : h, C);
      }
      !o && r && x && n[h].componentProviders++;
    }
  }
}
function Jo(e, t, n, r) {
  let o = It(t),
    i = kf(t);
  if (o || i) {
    let c = (i ? W(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
      let l = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        let u = l.indexOf(n);
        u === -1 ? l.push(n, [r, c]) : l[u + 1].push(r, c);
      } else l.push(n, c);
    }
  }
}
function Qu(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}
function Ko(e, t, n, r) {
  for (let o = n; o < r; o++) if (t[o] === e) return o;
  return -1;
}
function fv(e, t, n, r, o) {
  return Qi(this.multi, []);
}
function pv(e, t, n, r, o) {
  let i = this.multi,
    s;
  if (this.providerFactory) {
    let a = this.providerFactory.componentProviders,
      c = tn(r, r[m], this.providerFactory.index, o);
    (s = c.slice(0, a)), Qi(i, s);
    for (let l = a; l < c.length; l++) s.push(c[l]);
  } else (s = []), Qi(i, s);
  return s;
}
function Qi(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
  }
  return t;
}
function hv(e, t, n, r, o) {
  let i = new Ke(e, n, io);
  return (
    (i.multi = []),
    (i.index = t),
    (i.componentProviders = 0),
    Qu(i, o, r && !n),
    i
  );
}
function jC(e, t = []) {
  return (n) => {
    n.providersResolver = (r, o) => dv(r, o ? o(e) : e, t);
  };
}
function VC(e, t, n, r) {
  return gv(y(), ot(), e, t, n, r);
}
function HC(e, t, n, r, o, i) {
  return mv(y(), ot(), e, t, n, r, o, i);
}
function BC(e, t, n, r, o, i, s) {
  return Zu(y(), ot(), e, t, n, r, o, i, s);
}
function $C(e, t, n, r, o, i, s, a) {
  let c = ot() + e,
    l = y(),
    u = ln(l, c, n, r, o, i);
  return te(l, c + 4, s) || u
    ? Rt(l, c + 5, a ? t.call(a, n, r, o, i, s) : t(n, r, o, i, s))
    : Ws(l, c + 5);
}
function UC(e, t, n, r, o, i, s, a, c) {
  let l = ot() + e,
    u = y(),
    f = ln(u, l, n, r, o, i);
  return Sr(u, l + 4, s, a) || f
    ? Rt(u, l + 6, c ? t.call(c, n, r, o, i, s, a) : t(n, r, o, i, s, a))
    : Ws(u, l + 6);
}
function qC(e, t, n, r, o, i, s, a, c, l, u) {
  let f = ot() + e,
    p = y(),
    d = ln(p, f, n, r, o, i);
  return ln(p, f + 4, s, a, c, l) || d
    ? Rt(
        p,
        f + 8,
        u ? t.call(u, n, r, o, i, s, a, c, l) : t(n, r, o, i, s, a, c, l)
      )
    : Ws(p, f + 8);
}
function zs(e, t) {
  let n = e[t];
  return n === de ? void 0 : n;
}
function gv(e, t, n, r, o, i) {
  let s = t + n;
  return te(e, s, o) ? Rt(e, s + 1, i ? r.call(i, o) : r(o)) : zs(e, s + 1);
}
function mv(e, t, n, r, o, i, s, a) {
  let c = t + n;
  return zm(e, c, o, i, s)
    ? Rt(e, c + 3, a ? r.call(a, o, i, s) : r(o, i, s))
    : zs(e, c + 3);
}
function Zu(e, t, n, r, o, i, s, a, c) {
  let l = t + n;
  return ln(e, l, o, i, s, a)
    ? Rt(e, l + 4, c ? r.call(c, o, i, s, a) : r(o, i, s, a))
    : zs(e, l + 4);
}
function WC(e, t) {
  let n = A(),
    r,
    o = e + V;
  n.firstCreatePass
    ? ((r = yv(t, n.pipeRegistry)),
      (n.data[o] = r),
      r.onDestroy && (n.destroyHooks ??= []).push(o, r.onDestroy))
    : (r = n.data[o]);
  let i = r.factory || (r.factory = We(r.type, !0)),
    s,
    a = G(io);
  try {
    let c = Ir(!1),
      l = i();
    return Ir(c), $f(n, y(), o, l), l;
  } finally {
    G(a);
  }
}
function yv(e, t) {
  if (t)
    for (let n = t.length - 1; n >= 0; n--) {
      let r = t[n];
      if (e === r.name) return r;
    }
}
function zC(e, t, n, r, o, i) {
  let s = e + V,
    a = y(),
    c = Xc(a, s);
  return vv(a, s)
    ? Zu(a, ot(), t, c.transform, n, r, o, i, c)
    : c.transform(n, r, o, i);
}
function vv(e, t) {
  return e[m].data[t].pure;
}
function GC(e, t) {
  return no(e, t);
}
var Zi = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) {
      (this.ngModuleFactory = t), (this.componentFactories = n);
    }
  },
  QC = (() => {
    class e {
      compileModuleSync(n) {
        return new Pi(n);
      }
      compileModuleAsync(n) {
        return Promise.resolve(this.compileModuleSync(n));
      }
      compileModuleAndAllComponentsSync(n) {
        let r = this.compileModuleSync(n),
          o = Ac(n),
          i = Ql(o.declarations).reduce((s, a) => {
            let c = ke(a);
            return c && s.push(new bt(c)), s;
          }, []);
        return new Zi(r, i);
      }
      compileModuleAndAllComponentsAsync(n) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
      }
      clearCache() {}
      clearCacheFor(n) {}
      getModuleId(n) {}
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = H({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })();
var Iv = (() => {
    class e {
      zone = b(J);
      changeDetectionScheduler = b(Oe);
      applicationRef = b(un);
      _onMicrotaskEmptySubscription;
      initialize() {
        this._onMicrotaskEmptySubscription ||
          (this._onMicrotaskEmptySubscription =
            this.zone.onMicrotaskEmpty.subscribe({
              next: () => {
                this.changeDetectionScheduler.runningTick ||
                  this.zone.run(() => {
                    this.applicationRef.tick();
                  });
              },
            }));
      }
      ngOnDestroy() {
        this._onMicrotaskEmptySubscription?.unsubscribe();
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = H({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })(),
  Ev = new k("", { factory: () => !1 });
function Yu({
  ngZoneFactory: e,
  ignoreChangesOutsideZone: t,
  scheduleInRootZone: n,
}) {
  return (
    (e ??= () => new J(X(K({}, Ju()), { scheduleInRootZone: n }))),
    [
      { provide: J, useFactory: e },
      {
        provide: dr,
        multi: !0,
        useFactory: () => {
          let r = b(Iv, { optional: !0 });
          return () => r.initialize();
        },
      },
      {
        provide: dr,
        multi: !0,
        useFactory: () => {
          let r = b(Dv);
          return () => {
            r.initialize();
          };
        },
      },
      t === !0 ? { provide: _l, useValue: !0 } : [],
      { provide: Tl, useValue: n ?? Cl },
    ]
  );
}
function ZC(e) {
  let t = e?.ignoreChangesOutsideZone,
    n = e?.scheduleInRootZone,
    r = Yu({
      ngZoneFactory: () => {
        let o = Ju(e);
        return (
          (o.scheduleInRootZone = n),
          o.shouldCoalesceEventChangeDetection && kt("NgZone_CoalesceEvent"),
          new J(o)
        );
      },
      ignoreChangesOutsideZone: t,
      scheduleInRootZone: n,
    });
  return Fc([{ provide: Ev, useValue: !0 }, { provide: Es, useValue: !1 }, r]);
}
function Ju(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var Dv = (() => {
  class e {
    subscription = new B();
    initialized = !1;
    zone = b(J);
    pendingTasks = b(gn);
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let n = null;
      !this.zone.isStable &&
        !this.zone.hasPendingMacrotasks &&
        !this.zone.hasPendingMicrotasks &&
        (n = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(
            this.zone.onStable.subscribe(() => {
              J.assertNotInAngularZone(),
                queueMicrotask(() => {
                  n !== null &&
                    !this.zone.hasPendingMacrotasks &&
                    !this.zone.hasPendingMicrotasks &&
                    (this.pendingTasks.remove(n), (n = null));
                });
            })
          );
        }),
        this.subscription.add(
          this.zone.onUnstable.subscribe(() => {
            J.assertInAngularZone(), (n ??= this.pendingTasks.add());
          })
        );
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = H({ token: e, factory: e.ɵfac, providedIn: "root" });
  }
  return e;
})();
var wv = (() => {
  class e {
    appRef = b(un);
    taskService = b(gn);
    ngZone = b(J);
    zonelessEnabled = b(Es);
    tracing = b(Qr, { optional: !0 });
    disableScheduling = b(_l, { optional: !0 }) ?? !1;
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new B();
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(wr) : null;
    scheduleInRootZone =
      !this.zonelessEnabled &&
      this.zoneIsDefined &&
      (b(Tl, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() {
      this.subscriptions.add(
        this.appRef.afterTick.subscribe(() => {
          this.runningTick || this.cleanup();
        })
      ),
        this.subscriptions.add(
          this.ngZone.onUnstable.subscribe(() => {
            this.runningTick || this.cleanup();
          })
        ),
        (this.disableScheduling ||=
          !this.zonelessEnabled &&
          (this.ngZone instanceof gi || !this.zoneIsDefined));
    }
    notify(n) {
      if (!this.zonelessEnabled && n === 5) return;
      let r = !1;
      switch (n) {
        case 0: {
          this.appRef.dirtyFlags |= 2;
          break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
          this.appRef.dirtyFlags |= 4;
          break;
        }
        case 6: {
          (this.appRef.dirtyFlags |= 2), (r = !0);
          break;
        }
        case 12: {
          (this.appRef.dirtyFlags |= 16), (r = !0);
          break;
        }
        case 13: {
          (this.appRef.dirtyFlags |= 2), (r = !0);
          break;
        }
        case 11: {
          r = !0;
          break;
        }
        case 9:
        case 8:
        case 7:
        case 10:
        default:
          this.appRef.dirtyFlags |= 8;
      }
      if (
        ((this.appRef.tracingSnapshot =
          this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null),
        !this.shouldScheduleTick(r))
      )
        return;
      let o = this.useMicrotaskScheduler ? $a : xl;
      (this.pendingRenderTaskId = this.taskService.add()),
        this.scheduleInRootZone
          ? (this.cancelScheduledCallback = Zone.root.run(() =>
              o(() => this.tick())
            ))
          : (this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() =>
              o(() => this.tick())
            ));
    }
    shouldScheduleTick(n) {
      return !(
        (this.disableScheduling && !n) ||
        this.appRef.destroyed ||
        this.pendingRenderTaskId !== null ||
        this.runningTick ||
        this.appRef._runningTick ||
        (!this.zonelessEnabled &&
          this.zoneIsDefined &&
          Zone.current.get(wr + this.angularZoneId))
      );
    }
    tick() {
      if (this.runningTick || this.appRef.destroyed) return;
      if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
      }
      !this.zonelessEnabled &&
        this.appRef.dirtyFlags & 7 &&
        (this.appRef.dirtyFlags |= 1);
      let n = this.taskService.add();
      try {
        this.ngZone.run(
          () => {
            (this.runningTick = !0), this.appRef._tick();
          },
          void 0,
          this.schedulerTickApplyArgs
        );
      } catch (r) {
        throw (this.taskService.remove(n), r);
      } finally {
        this.cleanup();
      }
      (this.useMicrotaskScheduler = !0),
        $a(() => {
          (this.useMicrotaskScheduler = !1), this.taskService.remove(n);
        });
    }
    ngOnDestroy() {
      this.subscriptions.unsubscribe(), this.cleanup();
    }
    cleanup() {
      if (
        ((this.runningTick = !1),
        this.cancelScheduledCallback?.(),
        (this.cancelScheduledCallback = null),
        this.pendingRenderTaskId !== null)
      ) {
        let n = this.pendingRenderTaskId;
        (this.pendingRenderTaskId = null), this.taskService.remove(n);
      }
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = H({ token: e, factory: e.ɵfac, providedIn: "root" });
  }
  return e;
})();
function bv() {
  return (typeof $localize < "u" && $localize.locale) || Pr;
}
var Ku = new k("", {
  providedIn: "root",
  factory: () => b(Ku, w.Optional | w.SkipSelf) || bv(),
});
var Yi = new k(""),
  Mv = new k("");
function zt(e) {
  return !e.moduleRef;
}
function Cv(e) {
  let t = zt(e) ? e.r3Injector : e.moduleRef.injector,
    n = t.get(J);
  return n.run(() => {
    zt(e)
      ? e.r3Injector.resolveInjectorInitializers()
      : e.moduleRef.resolveInjectorInitializers();
    let r = t.get(et, null),
      o;
    if (
      (n.runOutsideAngular(() => {
        o = n.onError.subscribe({
          next: (i) => {
            r.handleError(i);
          },
        });
      }),
      zt(e))
    ) {
      let i = () => t.destroy(),
        s = e.platformInjector.get(Yi);
      s.add(i),
        t.onDestroy(() => {
          o.unsubscribe(), s.delete(i);
        });
    } else {
      let i = () => e.moduleRef.destroy(),
        s = e.platformInjector.get(Yi);
      s.add(i),
        e.moduleRef.onDestroy(() => {
          ir(e.allPlatformModules, e.moduleRef), o.unsubscribe(), s.delete(i);
        });
    }
    return Tv(r, n, () => {
      let i = t.get(Ru);
      return (
        i.runInitializers(),
        i.donePromise.then(() => {
          let s = t.get(Ku, Pr);
          if ((tv(s || Pr), !t.get(Mv, !0)))
            return zt(e)
              ? t.get(un)
              : (e.allPlatformModules.push(e.moduleRef), e.moduleRef);
          if (zt(e)) {
            let c = t.get(un);
            return (
              e.rootComponent !== void 0 && c.bootstrap(e.rootComponent), c
            );
          } else return _v(e.moduleRef, e.allPlatformModules), e.moduleRef;
        })
      );
    });
  });
}
function _v(e, t) {
  let n = e.injector.get(un);
  if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach((r) => n.bootstrap(r));
  else if (e.instance.ngDoBootstrap) e.instance.ngDoBootstrap(n);
  else throw new T(-403, !1);
  t.push(e);
}
function Tv(e, t, n) {
  try {
    let r = n();
    return Su(r)
      ? r.catch((o) => {
          throw (t.runOutsideAngular(() => e.handleError(o)), o);
        })
      : r;
  } catch (r) {
    throw (t.runOutsideAngular(() => e.handleError(r)), r);
  }
}
var sr = null;
function xv(e = [], t) {
  return Xe.create({
    name: t,
    providers: [
      { provide: Hc, useValue: "platform" },
      { provide: Yi, useValue: new Set([() => (sr = null)]) },
      ...e,
    ],
  });
}
function Nv(e = []) {
  if (sr) return sr;
  let t = xv(e);
  return (sr = t), dy(), Sv(t), t;
}
function Sv(e) {
  let t = e.get(zp, null);
  $c(e, () => {
    t?.forEach((n) => n());
  });
}
var YC = (() => {
  class e {
    static __NG_ELEMENT_ID__ = kv;
  }
  return e;
})();
function kv(e) {
  return Rv(q(), y(), (e & 16) === 16);
}
function Rv(e, t, n) {
  if (_t(e) && !n) {
    let r = ge(e.index, t);
    return new sn(r, r);
  } else if (e.type & 175) {
    let r = t[le];
    return new sn(r, t);
  }
  return null;
}
var Ji = class {
    constructor() {}
    supports(t) {
      return xu(t);
    }
    create(t) {
      return new Ki(t);
    }
  },
  Ov = (e, t) => t,
  Ki = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) {
      this._trackByFn = t || Ov;
    }
    forEachItem(t) {
      let n;
      for (n = this._itHead; n !== null; n = n._next) t(n);
    }
    forEachOperation(t) {
      let n = this._itHead,
        r = this._removalsHead,
        o = 0,
        i = null;
      for (; n || r; ) {
        let s = !r || (n && n.currentIndex < mc(r, o, i)) ? n : r,
          a = mc(s, o, i),
          c = s.currentIndex;
        if (s === r) o--, (r = r._nextRemoved);
        else if (((n = n._next), s.previousIndex == null)) o++;
        else {
          i || (i = []);
          let l = a - o,
            u = c - o;
          if (l != u) {
            for (let p = 0; p < l; p++) {
              let d = p < i.length ? i[p] : (i[p] = 0),
                h = d + p;
              u <= h && h < l && (i[p] = d + 1);
            }
            let f = s.previousIndex;
            i[f] = u - l;
          }
        }
        a !== c && t(s, a, c);
      }
    }
    forEachPreviousItem(t) {
      let n;
      for (n = this._previousItHead; n !== null; n = n._nextPrevious) t(n);
    }
    forEachAddedItem(t) {
      let n;
      for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n);
    }
    forEachMovedItem(t) {
      let n;
      for (n = this._movesHead; n !== null; n = n._nextMoved) t(n);
    }
    forEachRemovedItem(t) {
      let n;
      for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n);
    }
    forEachIdentityChange(t) {
      let n;
      for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n);
    }
    diff(t) {
      if ((t == null && (t = []), !xu(t))) throw new T(900, !1);
      return this.check(t) ? this : null;
    }
    onDestroy() {}
    check(t) {
      this._reset();
      let n = this._itHead,
        r = !1,
        o,
        i,
        s;
      if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
          (i = t[a]),
            (s = this._trackByFn(a, i)),
            n === null || !Object.is(n.trackById, s)
              ? ((n = this._mismatch(n, i, s, a)), (r = !0))
              : (r && (n = this._verifyReinsertion(n, i, s, a)),
                Object.is(n.item, i) || this._addIdentityChange(n, i)),
            (n = n._next);
      } else
        (o = 0),
          qm(t, (a) => {
            (s = this._trackByFn(o, a)),
              n === null || !Object.is(n.trackById, s)
                ? ((n = this._mismatch(n, a, s, o)), (r = !0))
                : (r && (n = this._verifyReinsertion(n, a, s, o)),
                  Object.is(n.item, a) || this._addIdentityChange(n, a)),
              (n = n._next),
              o++;
          }),
          (this.length = o);
      return this._truncate(n), (this.collection = t), this.isDirty;
    }
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._movesHead !== null ||
        this._removalsHead !== null ||
        this._identityChangesHead !== null
      );
    }
    _reset() {
      if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
          t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
          t.previousIndex = t.currentIndex;
        for (
          this._additionsHead = this._additionsTail = null, t = this._movesHead;
          t !== null;
          t = t._nextMoved
        )
          t.previousIndex = t.currentIndex;
        (this._movesHead = this._movesTail = null),
          (this._removalsHead = this._removalsTail = null),
          (this._identityChangesHead = this._identityChangesTail = null);
      }
    }
    _mismatch(t, n, r, o) {
      let i;
      return (
        t === null ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
        (t =
          this._unlinkedRecords === null
            ? null
            : this._unlinkedRecords.get(r, null)),
        t !== null
          ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
            this._reinsertAfter(t, i, o))
          : ((t =
              this._linkedRecords === null
                ? null
                : this._linkedRecords.get(r, o)),
            t !== null
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, o))
              : (t = this._addAfter(new Xi(n, r), i, o))),
        t
      );
    }
    _verifyReinsertion(t, n, r, o) {
      let i =
        this._unlinkedRecords === null
          ? null
          : this._unlinkedRecords.get(r, null);
      return (
        i !== null
          ? (t = this._reinsertAfter(i, t._prev, o))
          : t.currentIndex != o &&
            ((t.currentIndex = o), this._addToMoves(t, o)),
        t
      );
    }
    _truncate(t) {
      for (; t !== null; ) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), (t = n);
      }
      this._unlinkedRecords !== null && this._unlinkedRecords.clear(),
        this._additionsTail !== null && (this._additionsTail._nextAdded = null),
        this._movesTail !== null && (this._movesTail._nextMoved = null),
        this._itTail !== null && (this._itTail._next = null),
        this._removalsTail !== null && (this._removalsTail._nextRemoved = null),
        this._identityChangesTail !== null &&
          (this._identityChangesTail._nextIdentityChange = null);
    }
    _reinsertAfter(t, n, r) {
      this._unlinkedRecords !== null && this._unlinkedRecords.remove(t);
      let o = t._prevRemoved,
        i = t._nextRemoved;
      return (
        o === null ? (this._removalsHead = i) : (o._nextRemoved = i),
        i === null ? (this._removalsTail = o) : (i._prevRemoved = o),
        this._insertAfter(t, n, r),
        this._addToMoves(t, r),
        t
      );
    }
    _moveAfter(t, n, r) {
      return (
        this._unlink(t), this._insertAfter(t, n, r), this._addToMoves(t, r), t
      );
    }
    _addAfter(t, n, r) {
      return (
        this._insertAfter(t, n, r),
        this._additionsTail === null
          ? (this._additionsTail = this._additionsHead = t)
          : (this._additionsTail = this._additionsTail._nextAdded = t),
        t
      );
    }
    _insertAfter(t, n, r) {
      let o = n === null ? this._itHead : n._next;
      return (
        (t._next = o),
        (t._prev = n),
        o === null ? (this._itTail = t) : (o._prev = t),
        n === null ? (this._itHead = t) : (n._next = t),
        this._linkedRecords === null && (this._linkedRecords = new Lr()),
        this._linkedRecords.put(t),
        (t.currentIndex = r),
        t
      );
    }
    _remove(t) {
      return this._addToRemovals(this._unlink(t));
    }
    _unlink(t) {
      this._linkedRecords !== null && this._linkedRecords.remove(t);
      let n = t._prev,
        r = t._next;
      return (
        n === null ? (this._itHead = r) : (n._next = r),
        r === null ? (this._itTail = n) : (r._prev = n),
        t
      );
    }
    _addToMoves(t, n) {
      return (
        t.previousIndex === n ||
          (this._movesTail === null
            ? (this._movesTail = this._movesHead = t)
            : (this._movesTail = this._movesTail._nextMoved = t)),
        t
      );
    }
    _addToRemovals(t) {
      return (
        this._unlinkedRecords === null && (this._unlinkedRecords = new Lr()),
        this._unlinkedRecords.put(t),
        (t.currentIndex = null),
        (t._nextRemoved = null),
        this._removalsTail === null
          ? ((this._removalsTail = this._removalsHead = t),
            (t._prevRemoved = null))
          : ((t._prevRemoved = this._removalsTail),
            (this._removalsTail = this._removalsTail._nextRemoved = t)),
        t
      );
    }
    _addIdentityChange(t, n) {
      return (
        (t.item = n),
        this._identityChangesTail === null
          ? (this._identityChangesTail = this._identityChangesHead = t)
          : (this._identityChangesTail =
              this._identityChangesTail._nextIdentityChange =
                t),
        t
      );
    }
  },
  Xi = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) {
      (this.item = t), (this.trackById = n);
    }
  },
  es = class {
    _head = null;
    _tail = null;
    add(t) {
      this._head === null
        ? ((this._head = this._tail = t),
          (t._nextDup = null),
          (t._prevDup = null))
        : ((this._tail._nextDup = t),
          (t._prevDup = this._tail),
          (t._nextDup = null),
          (this._tail = t));
    }
    get(t, n) {
      let r;
      for (r = this._head; r !== null; r = r._nextDup)
        if ((n === null || n <= r.currentIndex) && Object.is(r.trackById, t))
          return r;
      return null;
    }
    remove(t) {
      let n = t._prevDup,
        r = t._nextDup;
      return (
        n === null ? (this._head = r) : (n._nextDup = r),
        r === null ? (this._tail = n) : (r._prevDup = n),
        this._head === null
      );
    }
  },
  Lr = class {
    map = new Map();
    put(t) {
      let n = t.trackById,
        r = this.map.get(n);
      r || ((r = new es()), this.map.set(n, r)), r.add(t);
    }
    get(t, n) {
      let r = t,
        o = this.map.get(r);
      return o ? o.get(t, n) : null;
    }
    remove(t) {
      let n = t.trackById;
      return this.map.get(n).remove(t) && this.map.delete(n), t;
    }
    get isEmpty() {
      return this.map.size === 0;
    }
    clear() {
      this.map.clear();
    }
  };
function mc(e, t, n) {
  let r = e.previousIndex;
  if (r === null) return r;
  let o = 0;
  return n && r < n.length && (o = n[r]), r + t + o;
}
function yc() {
  return new Av([new Ji()]);
}
var Av = (() => {
  class e {
    factories;
    static ɵprov = H({ token: e, providedIn: "root", factory: yc });
    constructor(n) {
      this.factories = n;
    }
    static create(n, r) {
      if (r != null) {
        let o = r.factories.slice();
        n = n.concat(o);
      }
      return new e(n);
    }
    static extend(n) {
      return {
        provide: e,
        useFactory: (r) => e.create(n, r || yc()),
        deps: [[e, new wf(), new Df()]],
      };
    }
    find(n) {
      let r = this.factories.find((o) => o.supports(n));
      if (r != null) return r;
      throw new T(901, !1);
    }
  }
  return e;
})();
function JC(e) {
  S(8);
  try {
    let { rootComponent: t, appProviders: n, platformProviders: r } = e,
      o = Nv(r),
      i = [Yu({}), { provide: Oe, useExisting: wv }, ...(n || [])],
      s = new Nr({
        providers: i,
        parent: o,
        debugName: "",
        runEnvironmentInitializers: !1,
      });
    return Cv({
      r3Injector: s.injector,
      platformInjector: o,
      rootComponent: t,
    });
  } catch (t) {
    return Promise.reject(t);
  } finally {
    S(9);
  }
}
function KC(e) {
  return typeof e == "boolean" ? e : e != null && e !== "false";
}
function XC(e, t = NaN) {
  return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t;
}
function e_(e) {
  return wo(e);
}
function t_(e, t) {
  return vo(e, t?.equal);
}
var ts = class {
  [ne];
  constructor(t) {
    this[ne] = t;
  }
  destroy() {
    this[ne].destroy();
  }
};
function Pv(e, t) {
  !t?.injector && qc(Pv);
  let n = t?.injector ?? b(Xe),
    r = t?.manualCleanup !== !0 ? n.get(zr) : null,
    o,
    i = n.get(Ms, null, { optional: !0 }),
    s = n.get(Oe);
  return (
    i !== null && !t?.forceRoot
      ? ((o = jv(i.view, s, e)),
        r instanceof Dr && r._lView === i.view && (r = null))
      : (o = Vv(e, n.get(Nu), s)),
    (o.injector = n),
    r !== null && (o.onDestroyFn = r.onDestroy(() => o.destroy())),
    new ts(o)
  );
}
var Xu = X(K({}, it), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !0,
    dirty: !0,
    hasRun: !1,
    cleanupFns: void 0,
    zone: null,
    kind: "effect",
    onDestroyFn: nn,
    run() {
      if (((this.dirty = !1), this.hasRun && !bn(this))) return;
      this.hasRun = !0;
      let e = (r) => (this.cleanupFns ??= []).push(r),
        t = Lt(this),
        n = mr(!1);
      try {
        this.maybeCleanup(), this.fn(e);
      } finally {
        mr(n), wn(this, t);
      }
    },
    maybeCleanup() {
      if (this.cleanupFns?.length)
        try {
          for (; this.cleanupFns.length; ) this.cleanupFns.pop()();
        } finally {
          this.cleanupFns = [];
        }
    },
  }),
  Lv = X(K({}, Xu), {
    consumerMarkedDirty() {
      this.scheduler.schedule(this), this.notifier.notify(12);
    },
    destroy() {
      Ft(this),
        this.onDestroyFn(),
        this.maybeCleanup(),
        this.scheduler.remove(this);
    },
  }),
  Fv = X(K({}, Xu), {
    consumerMarkedDirty() {
      (this.view[v] |= 8192), Tt(this.view), this.notifier.notify(13);
    },
    destroy() {
      Ft(this),
        this.onDestroyFn(),
        this.maybeCleanup(),
        this.view[Qe]?.delete(this);
    },
  });
function jv(e, t, n) {
  let r = Object.create(Fv);
  return (
    (r.view = e),
    (r.zone = typeof Zone < "u" ? Zone.current : null),
    (r.notifier = t),
    (r.fn = n),
    (e[Qe] ??= new Set()),
    e[Qe].add(r),
    r.consumerMarkedDirty(r),
    r
  );
}
function Vv(e, t, n) {
  let r = Object.create(Lv);
  return (
    (r.fn = e),
    (r.scheduler = t),
    (r.notifier = n),
    (r.zone = typeof Zone < "u" ? Zone.current : null),
    r.scheduler.schedule(r),
    r.notifier.notify(12),
    r
  );
}
function n_(e) {
  let t = ke(e);
  if (!t) return null;
  let n = new bt(t);
  return {
    get selector() {
      return n.selector;
    },
    get type() {
      return n.componentType;
    },
    get inputs() {
      return n.inputs;
    },
    get outputs() {
      return n.outputs;
    },
    get ngContentSelectors() {
      return n.ngContentSelectors;
    },
    get isStandalone() {
      return t.standalone;
    },
    get isSignal() {
      return t.signals;
    },
  };
}
export {
  K as a,
  X as b,
  Hv as c,
  Bv as d,
  Js as e,
  B as f,
  Id as g,
  N as h,
  Ro as i,
  Oo as j,
  Me as k,
  $t as l,
  Ut as m,
  _e as n,
  Nd as o,
  Sd as p,
  kd as q,
  je as r,
  Ve as s,
  Vd as t,
  He as u,
  Ao as v,
  Zn as w,
  Bd as x,
  $d as y,
  qt as z,
  Ta as A,
  Ud as B,
  Wt as C,
  Po as D,
  Wd as E,
  zd as F,
  Lo as G,
  Gd as H,
  Qd as I,
  Zd as J,
  Yd as K,
  Jd as L,
  Kd as M,
  T as N,
  wc as O,
  H as P,
  HM as Q,
  BM as R,
  k as S,
  w as T,
  Se as U,
  b as V,
  Fc as W,
  Hc as X,
  Ie as Y,
  $c as Z,
  qc as _,
  $M as $,
  UM as aa,
  qM as ba,
  WM as ca,
  zM as da,
  GM as ea,
  Xe as fa,
  zr as ga,
  gn as ha,
  Te as ia,
  J as ja,
  et as ka,
  QM as la,
  Gr as ma,
  ZM as na,
  YM as oa,
  JM as pa,
  zp as qa,
  KM as ra,
  XM as sa,
  Gp as ta,
  eC as ua,
  Qr as va,
  kt as wa,
  nh as xa,
  rn as ya,
  Ts as za,
  tC as Aa,
  nC as Ba,
  rC as Ca,
  wi as Da,
  _r as Ea,
  Tr as Fa,
  uC as Ga,
  io as Ha,
  dC as Ia,
  Us as Ja,
  Sm as Ka,
  Cu as La,
  gC as Ma,
  mC as Na,
  yC as Oa,
  vC as Pa,
  jm as Qa,
  Qm as Ra,
  IC as Sa,
  Su as Ta,
  EC as Ua,
  uy as Va,
  un as Wa,
  DC as Xa,
  wC as Ya,
  Iy as Za,
  Sy as _a,
  ky as $a,
  Ry as ab,
  bC as bb,
  MC as cb,
  CC as db,
  _C as eb,
  TC as fb,
  $u as gb,
  Uu as hb,
  zy as ib,
  qu as jb,
  Wu as kb,
  Zy as lb,
  xC as mb,
  NC as nb,
  SC as ob,
  zi as pb,
  rv as qb,
  kC as rb,
  iv as sb,
  RC as tb,
  OC as ub,
  AC as vb,
  PC as wb,
  LC as xb,
  av as yb,
  Gu as zb,
  lv as Ab,
  FC as Bb,
  uv as Cb,
  jC as Db,
  VC as Eb,
  HC as Fb,
  BC as Gb,
  $C as Hb,
  UC as Ib,
  qC as Jb,
  WC as Kb,
  zC as Lb,
  GC as Mb,
  QC as Nb,
  ZC as Ob,
  Ku as Pb,
  YC as Qb,
  Av as Rb,
  JC as Sb,
  KC as Tb,
  XC as Ub,
  e_ as Vb,
  t_ as Wb,
  Pv as Xb,
  n_ as Yb,
};
