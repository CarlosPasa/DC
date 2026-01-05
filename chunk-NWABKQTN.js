import { a as S, b as w } from "./chunk-SMIUCQRM.js";
import {
  a as U,
  b as J,
  c as K,
  d as X,
  e as Y,
  f as Z,
  g as _,
} from "./chunk-VKERT6ZG.js";
import { b as G, j as y, k as h, l as Q } from "./chunk-X3YTVJDK.js";
import { l as q, o as $ } from "./chunk-AEQ62QCG.js";
import {
  $a as N,
  Ab as L,
  Bb as V,
  Ca as m,
  Cb as W,
  Ha as p,
  Ma as x,
  P as T,
  Ra as M,
  U as C,
  V as b,
  Xb as R,
  _a as I,
  aa as P,
  ba as j,
  cb as F,
  gb as i,
  hb as s,
  ib as f,
  jb as k,
  kb as H,
  mb as z,
  na as g,
  qb as u,
  rb as B,
  xb as l,
  yb as O,
  zb as A,
} from "./chunk-CLQWJLWL.js";
var v = class n {
  constructor(o) {
    this.http = o;
  }
  getData() {
    return this.http.get(
      `${y}SubformPedidosBuenosDeseo/listarFiltrado?Filtro_NoPedidoN=${h}`
    );
  }
  guardar(o) {
    return this.http.post(y + "SubformPedidosBuenosDeseo/guardar", o, {
      responseType: "text",
    });
  }
  static ɵfac = function (t) {
    return new (t || n)(C(G));
  };
  static ɵprov = T({ token: n, factory: n.ɵfac, providedIn: "root" });
};
var D = class n {
  constructor(o) {
    this.modalsStore = o;
  }
  TxInvitadoMensajeEspecial = "";
  txMensaje = "";
  message = "";
  api = b(v);
  hub = b(S);
  subformPedidosInvitadoService = b(Q);
  subformData = this.subformPedidosInvitadoService.get();
  ngOnInit() {
    console.log("Modal Enviar Buenos Deseos abierto");
  }
  cerrarModal() {
    this.modalsStore.hide();
  }
  submit() {
    let o = {
      noPartidaA: 0,
      noPedidoN: h ?? 0,
      nvInvitadoNombre: this.subformData().nvInvitadoNombre ?? "",
      txInvitadoMensajeEspecial: this.txMensaje,
    };
    console.log(o);
    function t(e) {
      let a = {},
        c = !1;
      return (
        Object.entries(e).forEach(([r, d]) => {
          r === "TxInvitadoMensajeEspecial" &&
            (w(d) || ((a[r] = `${r} can only have alphabets`), (c = !0))),
            r.slice(0, 2) === "in" &&
              (w(d) || ((a[r] = `${r} error`), (c = !0))),
            r.slice(0, 2) === "de"
              ? d === null && (e[r] = 0)
              : d === null && (e[r] = "");
        }),
        Object.keys(e).forEach((r) => {
          let d = e[r],
            E = r.slice(0, 2);
          E === "no" || E === "de"
            ? d == null && (e[r] = 0)
            : E === "sd"
            ? (d == null || d === "") && (e[r] = null)
            : d == null && (e[r] = "");
        }),
        { errors: a, error_flag: c }
      );
    }
    J("\xBFSeguro?", "\xBFQuieres enviar los Buenos Deseos?", "Enviar", () => {
      console.log("Buenos Deseos Enviados:", this.message),
        this.cerrarModal(),
        this.api.guardar(o).subscribe({
          next: (e) => {
            e !== "0"
              ? (U("Se guard\xF3 correctamente"), this.hub.start("hola"))
              : Error("Ocurri\xF3 un error");
          },
          error: () => Error("Error de conexi\xF3n con el servidor"),
        });
    });
  }
  static ɵfac = function (t) {
    return new (t || n)(p(_));
  };
  static ɵcmp = x({
    type: n,
    selectors: [["ModalEnviarBuenosDeseos"]],
    decls: 16,
    vars: 1,
    consts: [
      [
        1,
        "fixed",
        "inset-0",
        "z-20",
        "flex",
        "justify-center",
        "items-center",
        "bg-black",
        "bg-opacity-50",
      ],
      [
        1,
        "bg-white",
        "rounded-2xl",
        "shadow-2xl",
        "sm:w-10/12",
        "h-[60vh]",
        "relative",
        "p-6",
        "sm:p-10",
        "flex",
        "flex-col",
        "justify-between",
      ],
      [
        1,
        "absolute",
        "top-4",
        "right-4",
        "text-gray-400",
        "hover:text-gray-600",
        "transition",
        3,
        "click",
      ],
      [1, "text-3xl", "pl-5", "font-bold"],
      [1, "text-3xl", "font-semibold", "text-center", "mb-6"],
      [1, "overflow-y-auto"],
      [1, "max-w-3xl", "mx-auto", "px-2"],
      [
        "for",
        "TxInvitadoMensajeEspecial",
        1,
        "block",
        "text-xl",
        "font-bold",
        "mb-2",
        "text-center",
      ],
      [
        "id",
        "TxInvitadoMensajeEspecial",
        "rows",
        "",
        "placeholder",
        "Escribe aqu\xED tu mensaje...",
        1,
        "w-full",
        "p-4",
        "px-2",
        "rounded-lg",
        "border",
        "border-gray-300",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-emerald-400",
        "focus:border-transparent",
        "text-gray-700",
        "resize-none",
        "shadow-sm",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [1, "mt-6", "text-center"],
      [
        1,
        "bg-emerald-500",
        "hover:bg-emerald-600",
        "disabled:bg-emerald-300",
        "text-white",
        "font-semibold",
        "uppercase",
        "text-sm",
        "px-8",
        "py-3",
        "rounded-xl",
        "shadow",
        "transition",
        "duration-150",
        3,
        "click",
      ],
    ],
    template: function (t, e) {
      t & 1 &&
        (i(0, "div", 0)(1, "div", 1)(2, "button", 2),
        u("click", function () {
          return e.cerrarModal();
        }),
        i(3, "span", 3),
        l(4, "\xD7"),
        s()(),
        f(5, "br"),
        i(6, "h3", 4),
        l(7, " Enviar Buenos Deseos "),
        s(),
        i(8, "div", 5)(9, "div", 6)(10, "h3", 7),
        l(11, " Mensaje de buenos deseos: "),
        s(),
        i(12, "textarea", 8),
        W("ngModelChange", function (c) {
          return V(e.txMensaje, c) || (e.txMensaje = c), c;
        }),
        s()()(),
        i(13, "div", 9)(14, "button", 10),
        u("click", function () {
          return e.submit();
        }),
        l(15, " Enviar "),
        s()()()()),
        t & 2 && (m(12), L("ngModel", e.txMensaje));
    },
    dependencies: [Z, K, X, Y],
    encapsulation: 2,
  });
};
function re(n, o) {
  if (n & 1) {
    let t = z();
    k(0, 13),
      u("click", function () {
        P(t);
        let a = B();
        return j(a.avanzar());
      }),
      i(1, "h6"),
      l(2),
      s(),
      i(3, "h2", 14),
      l(4),
      s(),
      f(5, "lord-icon", 15),
      H();
  }
  if (n & 2) {
    let t = B();
    m(2),
      O(t.lista1()[t.count()].txInvitadoMensajeEspecial),
      m(2),
      A(" ", t.lista1()[t.count()].nvInvitadoNombre, " "),
      m(),
      N("width", t.altura)("height", t.ancho);
  }
}
function se(n, o) {
  n & 1 && (i(0, "p", 16), l(1, " No hay datos disponibles. "), s());
}
function ae(n, o) {
  n & 1 && f(0, "ModalEnviarBuenosDeseos");
}
var te = class n {
  constructor(o, t, e) {
    this.apiService = o;
    this.hubService = t;
    this.modalsStore = e;
    R(() => {
      let a = this.hubService.get()();
      console.log("Hub Signal actualizado:", a),
        (this.storeHubLocal = a),
        this.storeHubLocal === "hola" &&
          this.getSubformPedidosInvitado_listarCompleto();
    });
  }
  lista1 = g([]);
  viewBuenosDeseosToggle = g(!1);
  storeHubLocal = "";
  isBuenosDeseosModal = g(!1);
  count = g(0);
  texture_url = "assets/images/texture.jpg";
  altura = "30px";
  ancho = "30px";
  ngOnInit() {
    this.getSubformPedidosInvitado_listarCompleto();
  }
  toggleDeseos() {
    this.viewBuenosDeseosToggle.set(!this.viewBuenosDeseosToggle());
  }
  enviarBuenosDeseos() {
    this.modalsStore.show("BuenosDeseosModal");
  }
  avanzar() {
    let o = this.count(),
      t = this.lista1().length - 1;
    o < t ? this.count.set(o + 1) : this.count.set(0);
  }
  getSubformPedidosInvitado_listarCompleto() {
    this.apiService.getData().subscribe((o) => {
      console.log(o), this.lista1.set(o), console.log(this.lista1());
    });
  }
  static ɵfac = function (t) {
    return new (t || n)(p(v), p(S), p(_));
  };
  static ɵcmp = x({
    type: n,
    selectors: [["BD_5_Timeless"]],
    decls: 19,
    vars: 3,
    consts: [
      [1, "grid", "grid-cols-1", "justify-center", "w-3/4", "mx-auto", "px-4"],
      [
        "id",
        "BuenosDeseos",
        1,
        "h-full",
        "sm:py-5",
        "sm:bg-[left_calc(50%)_top_calc(40%)]",
        "bg-[left_calc(40%)_top_calc(40%)]",
        "sm:min-h-[30vh]",
        "min-h-[30vh]",
        "bg-cover",
        "relative",
      ],
      [1, "w-full"],
      ["data-aos", "fade-up", 1, "text-5xl"],
      ["data-aos", "fade-right", 1, "-translate-y-2", "text-3xl", "uppercase"],
      [
        1,
        "grid",
        "grid-cols-1",
        "justify-center",
        "items-center",
        "mx-auto",
        "sm:px-20",
      ],
      [1, "relative", 3, "click"],
      [1, "p-2", "mx-auto", "font-serif1", "sm:w-1/3", "w-5/6", "relative"],
      [3, "click", 4, "ngIf"],
      ["class", "text-primary-200 text-xl", 4, "ngIf"],
      [
        1,
        "flex",
        "justify-center",
        "items-center",
        "text-primary-100",
        "p-4",
        "sm:mb-8",
      ],
      [
        1,
        "border-primary-500",
        "border",
        "relative",
        "sm:text-2xl",
        "text-xl",
        "hover:shadow-2xl",
        "p-1",
        "px-2",
        "sm:px-2",
        3,
        "click",
      ],
      [
        "src",
        "https://cdn.lordicon.com/oidhrmxf.json",
        "trigger",
        "loop",
        "delay",
        "3000",
        "stroke",
        "light",
        "colors",
        "primary:#808080,secondary:#808080",
        1,
        "absolute",
        "-right-10",
        "-bottom-5",
        "-rotate-45",
        2,
        "width",
        "50px",
        "height",
        "50px",
      ],
      [3, "click"],
      [1, "sm:text-4xl", "text-3xl"],
      [
        "src",
        "https://cdn.lordicon.com/oidhrmxf.json",
        "trigger",
        "loop",
        "delay",
        "4000",
        "stroke",
        "light",
        "colors",
        "primary:#808080,secondary:#808080",
        1,
        "absolute",
        "right-0",
        "bottom-3",
        "-rotate-45",
      ],
      [1, "text-primary-200", "text-xl"],
    ],
    template: function (t, e) {
      t & 1 &&
        (i(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h2", 3),
        l(5, "Buenos"),
        s(),
        i(6, "h3", 4),
        l(7, "DESEOS"),
        s()(),
        i(8, "div", 5)(9, "button", 6),
        u("click", function () {
          return e.avanzar();
        }),
        i(10, "div", 7),
        M(11, re, 6, 6, "ng-container", 8)(12, se, 2, 0, "p", 9),
        s()()(),
        i(13, "div", 10)(14, "button", 11),
        u("click", function () {
          return e.enviarBuenosDeseos();
        }),
        i(15, "h6"),
        l(16, "Enviar buenos deseos"),
        s(),
        f(17, "lord-icon", 12),
        s()()()()(),
        M(18, ae, 1, 0, "ModalEnviarBuenosDeseos")),
        t & 2 &&
          (m(11),
          I("ngIf", e.lista1().length > 0 && e.lista1()[e.count()]),
          m(),
          I("ngIf", !(e.lista1().length > 0 && e.lista1()[e.count()])),
          m(6),
          F(e.modalsStore.value() === "BuenosDeseosModal" ? 18 : -1));
    },
    dependencies: [$, q, D],
    styles: [
      ".shadow-custom[_ngcontent-%COMP%]{box-shadow:0 10px 25px #00000026,0 4px 10px #0000001a}",
    ],
  });
};
export { te as BD_5_Timeless };
