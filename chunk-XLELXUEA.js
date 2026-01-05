import { a as C, b as N } from "./chunk-SMIUCQRM.js";
import {
  a as X,
  b as Y,
  c as Z,
  d as ee,
  e as te,
  f as ie,
  g as _,
} from "./chunk-VKERT6ZG.js";
import { b as J, j as P, k as x, l as K } from "./chunk-X3YTVJDK.js";
import { l as Q, o as U } from "./chunk-AEQ62QCG.js";
import {
  $a as O,
  Ab as V,
  Bb as B,
  Ca as d,
  Cb as q,
  Ha as g,
  Ma as h,
  P as S,
  Ra as w,
  U as D,
  V as v,
  Xb as $,
  _a as I,
  aa as F,
  ba as G,
  cb as z,
  gb as o,
  hb as a,
  ib as f,
  jb as A,
  kb as H,
  l as k,
  mb as L,
  na as u,
  qb as p,
  rb as T,
  xb as c,
  yb as W,
  zb as R,
} from "./chunk-CLQWJLWL.js";
var b = class n {
  constructor(i) {
    this.http = i;
  }
  getData() {
    return this.http.get(
      `${P}SubformPedidosSugerenciasCancione/listarFiltrado?Filtro_NoPedidoN=${x}`
    );
  }
  guardar(i) {
    return this.http.post(P + "SubformPedidosSugerenciasCancione/guardar", i, {
      responseType: "text",
    });
  }
  static ɵfac = function (t) {
    return new (t || n)(D(J));
  };
  static ɵprov = S({ token: n, factory: n.ɵfac, providedIn: "root" });
};
var M = class n {
  constructor(i) {
    this.modalsStore = i;
  }
  TxSugerenciaCancion = "";
  txMensaje = "";
  message = "";
  api = v(b);
  hub = v(C);
  subformPedidosInvitadoService = v(K);
  subformData = this.subformPedidosInvitadoService.get();
  ngOnInit() {
    console.log("Modal Enviar Buenos Deseos abierto");
  }
  cerrarModal() {
    this.modalsStore.hide();
  }
  submit() {
    let i = {
      noPartidaA: 0,
      noPedidoN: x ?? 0,
      nvInvitadoNombre: this.subformData().nvInvitadoNombre ?? "",
      txSugerenciaCancion: this.txMensaje,
    };
    console.log(i);
    function t(e) {
      let s = {},
        m = !1;
      return (
        Object.entries(e).forEach(([r, l]) => {
          r === "TxSugerenciaCancion" &&
            (N(l) || ((s[r] = `${r} can only have alphabets`), (m = !0))),
            r.slice(0, 2) === "in" &&
              (N(l) || ((s[r] = `${r} error`), (m = !0))),
            r.slice(0, 2) === "de"
              ? l === null && (e[r] = 0)
              : l === null && (e[r] = "");
        }),
        Object.keys(e).forEach((r) => {
          let l = e[r],
            E = r.slice(0, 2);
          E === "no" || E === "de"
            ? l == null && (e[r] = 0)
            : E === "sd"
            ? (l == null || l === "") && (e[r] = null)
            : l == null && (e[r] = "");
        }),
        { errors: s, error_flag: m }
      );
    }
    Y(
      "Seguro?",
      "\xBFQuieres enviar la Sugerencia de Cancion?",
      "Enviar",
      () => {
        console.log("Sugerencia de cancion enviada:", this.message),
          this.cerrarModal(),
          this.api.guardar(i).subscribe({
            next: (e) => {
              e !== "0"
                ? (X("Se guard\xF3 correctamente"), this.hub.start("hola"))
                : Error("Ocurri\xF3 un error");
            },
            error: () => Error("Error de conexi\xF3n con el servidor"),
          });
      }
    );
  }
  static ɵfac = function (t) {
    return new (t || n)(g(_));
  };
  static ɵcmp = h({
    type: n,
    selectors: [["ModalEnviarSugerenciaCancion"]],
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
        "mx-9",
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
        "TxSugerenciaCancion",
        1,
        "block",
        "text-xl",
        "font-bold",
        "mb-2",
        "text-center",
      ],
      [
        "id",
        "TxSugerenciaCancion",
        "rows",
        "",
        "placeholder",
        "Escribe aqu\xED tu sugerencia...",
        1,
        "w-[100%]",
        "py-2",
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
        (o(0, "div", 0)(1, "div", 1)(2, "button", 2),
        p("click", function () {
          return e.cerrarModal();
        }),
        o(3, "span", 3),
        c(4, "\xD7"),
        a()(),
        f(5, "br"),
        o(6, "h3", 4),
        c(7, " Enviar Sugerencia de Canci\xF3n "),
        a(),
        o(8, "div", 5)(9, "div", 6)(10, "h3", 7),
        c(11, " Sugerencia de canci\xF3n: "),
        a(),
        o(12, "textarea", 8),
        q("ngModelChange", function (m) {
          return B(e.txMensaje, m) || (e.txMensaje = m), m;
        }),
        a()()(),
        o(13, "div", 9)(14, "button", 10),
        p("click", function () {
          return e.submit();
        }),
        c(15, " Enviar "),
        a()()()()),
        t & 2 && (d(12), V("ngModel", e.txMensaje));
    },
    dependencies: [ie, Z, ee, te],
    encapsulation: 2,
  });
};
var Ne = new k({}),
  y = class n {
    modalGenericSignal = u("");
    show(i) {
      this.modalGenericSignal.set(i);
    }
    hide() {
      this.modalGenericSignal.set("");
    }
    get() {
      return this.modalGenericSignal;
    }
    modalGeneric() {
      return this.modalGenericSignal;
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵprov = S({ token: n, factory: n.ɵfac, providedIn: "root" });
  };
function ce(n, i) {
  if (n & 1) {
    let t = L();
    A(0, 13),
      p("click", function () {
        F(t);
        let s = T();
        return G(s.avanzar());
      }),
      o(1, "h6"),
      c(2),
      a(),
      o(3, "h2", 14),
      c(4),
      a(),
      f(5, "lord-icon", 15),
      H();
  }
  if (n & 2) {
    let t = T();
    d(2),
      W(t.lista1()[t.count()].txSugerenciaCancion),
      d(2),
      R(" ", t.lista1()[t.count()].nvInvitadoNombre, " "),
      d(),
      O("width", t.altura)("height", t.ancho);
  }
}
function le(n, i) {
  n & 1 && (o(0, "p", 16), c(1, " No hay sugerencias disponibles. "), a());
}
function de(n, i) {
  n & 1 && f(0, "ModalEnviarSugerenciaCancion");
}
var ne = class n {
  constructor(i, t, e, s) {
    this.apiService = i;
    this.hubService = t;
    this.modalService = e;
    this.modalsStore = s;
    $(() => {
      (this.storeHubLocal = this.hubService.get()()),
        this.storeHubLocal === "hola" &&
          this.getSubformPedidosInvitado_listarCompleto();
    });
  }
  lista1 = u([]);
  viewSugerenciaCancionesToggle = u(!1);
  isSugerenciasModal = u(!1);
  storeHubLocal = "";
  count = u(0);
  texture_url = "assets/images/texture.jpg";
  altura = "30px";
  ancho = "30px";
  ngOnInit() {
    this.getSugerencias();
  }
  getSubformPedidosInvitado_listarCompleto() {
    this.apiService.getData().subscribe((i) => {
      console.log(i), this.lista1.set(i);
    });
  }
  toggleSugerencias() {
    this.viewSugerenciaCancionesToggle.set(
      !this.viewSugerenciaCancionesToggle()
    );
  }
  enviarSugerenciaCanciones() {
    this.modalsStore.show("SugerenciasCancionModal");
  }
  getSugerencias() {
    this.apiService.getData().subscribe((i) => {
      let t = i
        .filter((e) => e.txSugerenciaCancion !== "")
        .sort((e, s) => s.id - e.id);
      this.lista1.set(t);
    });
  }
  avanzar() {
    let i = this.count(),
      t = this.lista1().length - 1;
    i < t ? this.count.set(i + 1) : this.count.set(0);
  }
  static ɵfac = function (t) {
    return new (t || n)(g(b), g(C), g(y), g(_));
  };
  static ɵcmp = h({
    type: n,
    selectors: [["SC_5_Timeless"]],
    decls: 19,
    vars: 3,
    consts: [
      [1, "grid", "grid-cols-1", "justify-center", "w-3/4", "mx-auto", "px-4"],
      [
        "id",
        "SugerenciaCanciones",
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
        (o(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h2", 3),
        c(5, "Sugerencia"),
        a(),
        o(6, "h3", 4),
        c(7, "CANCIONES"),
        a()(),
        o(8, "div", 5)(9, "button", 6),
        p("click", function () {
          return e.avanzar();
        }),
        o(10, "div", 7),
        w(11, ce, 6, 6, "ng-container", 8)(12, le, 2, 0, "p", 9),
        a()()(),
        o(13, "div", 10)(14, "button", 11),
        p("click", function () {
          return e.enviarSugerenciaCanciones();
        }),
        o(15, "h6"),
        c(16, "Enviar sugerencia"),
        a(),
        f(17, "lord-icon", 12),
        a()()()()(),
        w(18, de, 1, 0, "ModalEnviarSugerenciaCancion")),
        t & 2 &&
          (d(11),
          I("ngIf", e.lista1().length > 0 && e.lista1()[e.count()]),
          d(),
          I("ngIf", !(e.lista1().length > 0 && e.lista1()[e.count()])),
          d(6),
          z(e.modalsStore.value() === "SugerenciasCancionModal" ? 18 : -1));
    },
    dependencies: [U, Q, M],
    styles: [
      ".shadow-custom[_ngcontent-%COMP%]{box-shadow:0 10px 25px #00000026,0 4px 10px #0000001a}.brillo[_ngcontent-%COMP%]{background-color:#000;font-weight:900;background-image:linear-gradient(-75deg,transparent 0,transparent 5%,rgba(255,255,255,.5) 5%,rgba(255,255,255,.5) 10%,transparent 10%,transparent 100%);background-size:200% 100%;-webkit-text-fill-color:transparent;-webkit-background-clip:text;animation:brilloAnimacion 2s infinite}.fondo[_ngcontent-%COMP%]{background:url(/assets/images/dorado.jpg);-webkit-background-clip:text;background-size:contain;font-weight:900;color:transparent}",
    ],
  });
};
export { ne as SC_5_Timeless };
