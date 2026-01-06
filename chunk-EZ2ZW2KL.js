import { l as j } from "./chunk-X3YTVJDK.js";
import { o as E } from "./chunk-AEQ62QCG.js";
import {
  Ca as o,
  Ma as _,
  N as v,
  Ra as D,
  V as f,
  Wb as k,
  _ as x,
  cb as I,
  eb as S,
  fb as w,
  ga as b,
  gb as u,
  hb as c,
  na as m,
  rb as p,
  xb as d,
  zb as l,
} from "./chunk-CLQWJLWL.js";
function y(n, e) {
  let t = !e?.manualCleanup;
  t && !e?.injector && x(y);
  let r = t ? e?.injector?.get(b) ?? f(b) : null,
    s = T(e?.equal),
    a;
  e?.requireSync
    ? (a = m({ kind: 0 }, { equal: s }))
    : (a = m({ kind: 1, value: e?.initialValue }, { equal: s }));
  let g,
    h = n.subscribe({
      next: (i) => a.set({ kind: 1, value: i }),
      error: (i) => {
        if (e?.rejectErrors) throw i;
        a.set({ kind: 2, error: i });
      },
      complete: () => {
        g?.();
      },
    });
  if (e?.requireSync && a().kind === 0) throw new v(601, !1);
  return (
    (g = r?.onDestroy(h.unsubscribe.bind(h))),
    k(
      () => {
        let i = a();
        switch (i.kind) {
          case 1:
            return i.value;
          case 2:
            throw i.error;
          case 0:
            throw new v(601, !1);
        }
      },
      { equal: e?.equal }
    )
  );
}
function T(n = Object.is) {
  return (e, t) => e.kind === 1 && t.kind === 1 && n(e.value, t.value);
}
var O = (n, e) => e.nvInvitadoNombre;
function N(n, e) {
  if ((n & 1 && (u(0, "h3", 4), d(1), c()), n & 2)) {
    let t,
      r = e.$implicit;
    o(),
      l(
        " ",
        (t = r.nvInvitadoNombre) !== null && t !== void 0
          ? t
          : "Invitado sin nombre",
        " "
      );
  }
}
function M(n, e) {
  if ((n & 1 && (u(0, "h3", 2), d(1), c(), S(2, N, 2, 1, "h3", 4, O)), n & 2)) {
    let t,
      r = p();
    o(),
      l(
        " ",
        (t = r.subformData().nvInvitadoNombre) !== null && t !== void 0
          ? t
          : "Aqu\xED va el nombre de tus invitados",
        " "
      ),
      o(),
      w(r.subformDataByFather());
  }
}
function q(n, e) {
  if ((n & 1 && (u(0, "h3", 2), d(1), c()), n & 2)) {
    let t,
      r = p();
    o(),
      l(
        " ",
        (t = r.subformData().nvInvitadoNombre) !== null && t !== void 0
          ? t
          : "Aqu\xED va el nombre de tus invitados",
        " "
      );
  }
}
var C = class n {
  textureUrl = "assets/images/texture.jpg";
  ngOnInit() {
    this.getSubformData();
  }
  subformPedidosInvitadoService = f(j);
  subformData = this.subformPedidosInvitadoService.get();
  subformDataByFather = y(this.subformPedidosInvitadoService.getApiByFather(), {
    initialValue: [],
  });
  getSubformData() {
    this.subformPedidosInvitadoService.getApi().subscribe((e) => {
      console.log(e), this.subformData.set(e), this.varS.set(!0);
    });
  }
  varS = m(!1);
  static ɵfac = function (t) {
    return new (t || n)();
  };
  static ɵcmp = _({
    type: n,
    selectors: [["NombreDeInvitados_5_Timeless"]],
    decls: 8,
    vars: 3,
    consts: [
      [
        "id",
        "ConfirmaAsistencia",
        1,
        "min-h-auto",
        "relative",
        "flex",
        "flex-col",
      ],
      ["data-aos", "fade-right", 1, "sm:py-2", "py-2"],
      ["data-aos", "fade-right", 1, "sm:py-2", "py-1", "text-2xl", "font-bold"],
      ["data-aos", "fade-right", 1, "sm:py-2", "py-1", "text-xl"],
      [
        "data-aos",
        "fade-right",
        1,
        "sm:py-2",
        "py-1",
        "text-primary-400",
        "text-2xl",
      ],
    ],
    template: function (t, r) {
      if (
        (t & 1 &&
          (u(0, "div", 0)(1, "div")(2, "h2", 1),
          d(3),
          c()(),
          D(4, M, 4, 1)(5, q, 2, 1, "h3", 2),
          u(6, "h3", 3),
          d(7),
          c()()),
        t & 2)
      ) {
        let s;
        o(3),
          l(
            " ",
            r.subformData().inInvitadoPases === 1
              ? "Es un placer Invitarte"
              : "Es un placer Invitarlos",
            " "
          ),
          o(),
          I(r.subformData().biPasesIndividualesPadre == !0 ? 4 : 5),
          o(3),
          l(
            " ",
            (s = r.subformData().txInvitadoMensajeEspecial) !== null &&
              s !== void 0
              ? s
              : "Aqu\xED va el mensaje a tus invitados",
            " "
          );
      }
    },
    dependencies: [E],
    encapsulation: 2,
  });
};
export { C as NombreDeInvitados_5_Timeless };
