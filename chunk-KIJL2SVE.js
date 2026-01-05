import { n as v, o as S, t as g } from "./chunk-AEQ62QCG.js";
import {
  Aa as f,
  Ca as n,
  Kb as b,
  Lb as M,
  Ma as _,
  Ra as p,
  _a as x,
  cb as m,
  db as h,
  eb as C,
  fb as E,
  gb as o,
  hb as a,
  ib as y,
  na as l,
  rb as c,
  xb as r,
  yb as D,
  zb as d,
} from "./chunk-CLQWJLWL.js";
function L(t) {
  let i = t,
    e = Math.floor(Math.abs(t)),
    s = t.toString().replace(/^[^.]*\.?/, "").length,
    u = parseInt(t.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  return i === 1
    ? 1
    : (u === 0 && e !== 0 && e % 1e6 === 0 && s === 0) || !(u >= 0 && u <= 5)
    ? 4
    : 5;
}
var T = [
  "es",
  [["a.\xA0m.", "p.\xA0m."], void 0, void 0],
  void 0,
  [
    ["D", "L", "M", "X", "J", "V", "S"],
    ["dom", "lun", "mar", "mi\xE9", "jue", "vie", "s\xE1b"],
    [
      "domingo",
      "lunes",
      "martes",
      "mi\xE9rcoles",
      "jueves",
      "viernes",
      "s\xE1bado",
    ],
    ["DO", "LU", "MA", "MI", "JU", "VI", "SA"],
  ],
  void 0,
  [
    ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sept",
      "oct",
      "nov",
      "dic",
    ],
    [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ],
  ],
  void 0,
  [["a. C.", "d. C."], void 0, ["antes de Cristo", "despu\xE9s de Cristo"]],
  1,
  [6, 0],
  ["d/M/yy", "d MMM y", "d 'de' MMMM 'de' y", "EEEE, d 'de' MMMM 'de' y"],
  ["H:mm", "H:mm:ss", "H:mm:ss z", "H:mm:ss (zzzz)"],
  ["{1}, {0}", void 0, void 0, void 0],
  [",", ".", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"],
  ["#,##0.###", "#,##0\xA0%", "#,##0.00\xA0\xA4", "#E0"],
  "EUR",
  "\u20AC",
  "euro",
  {
    AUD: [void 0, "$"],
    BRL: [void 0, "R$"],
    BYN: [void 0, "\u0440."],
    CAD: [void 0, "$"],
    CNY: [void 0, "\xA5"],
    EGP: [],
    ESP: ["\u20A7"],
    GBP: [void 0, "\xA3"],
    HKD: [void 0, "$"],
    ILS: [void 0, "\u20AA"],
    INR: [void 0, "\u20B9"],
    JPY: [void 0, "\xA5"],
    KRW: [void 0, "\u20A9"],
    MXN: [void 0, "$"],
    NZD: [void 0, "$"],
    PHP: [void 0, "\u20B1"],
    RON: [void 0, "L"],
    THB: ["\u0E3F"],
    TWD: [void 0, "NT$"],
    USD: ["US$", "$"],
    XAF: [],
    XCD: [void 0, "$"],
    XOF: [],
  },
  "ltr",
  L,
];
function I(t, i) {
  if (
    (t & 1 &&
      (o(0, "div", 1)(1, "h3"),
      r(2),
      b(3, "date"),
      a(),
      y(4, "img", 2),
      o(5, "h3"),
      r(6),
      a()()),
    t & 2)
  ) {
    let e = c().$implicit;
    n(2),
      d(" ", M(3, 4, e.date, "EEEE", "", "es-ES"), " "),
      n(2),
      x("src", e.day.condition.icon, f)("alt", e.day.condition.text),
      n(2),
      d(" ", e.day.avgtemp_c.toFixed(1), "\xB0C ");
  }
}
function N(t, i) {
  if ((t & 1 && p(0, I, 7, 9, "div", 1), t & 2)) {
    let e = i.$index;
    m(e < 5 ? 0 : -1);
  }
}
function w(t, i) {
  if (
    (t & 1 &&
      (o(0, "h3"),
      r(1),
      a(),
      o(2, "div", 0),
      C(3, N, 1, 1, null, null, h),
      a()),
    t & 2)
  ) {
    let e = c();
    n(),
      d(" Clima Actual ", e.weatherData().temp_c.toFixed(1), " \xB0C "),
      n(2),
      E(e.forecastData());
  }
}
function j(t, i) {
  if ((t & 1 && (o(0, "h3"), r(1), a()), t & 2)) {
    let e = c();
    n(), D(e.weatherError());
  }
}
var $ = class t {
  apiKey = "32294fb0263b465ab28175117251807";
  city = "Piura";
  weatherData = l(null);
  forecastData = l(null);
  weatherError = l(null);
  constructor() {
    g(T, "es-ES");
  }
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    let i = `https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${this.city}&days=5&lang=es`;
    fetch(i)
      .then((e) => e.json())
      .then((e) => {
        this.weatherData.set(e.current),
          this.forecastData.set(e.forecast.forecastday);
      })
      .catch((e) => {
        console.error("Error al obtener el clima:", e),
          this.weatherError.set(
            "No se pudo obtener el clima. Intenta m\xE1s tarde."
          );
      });
  }
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = _({
    type: t,
    selectors: [["CL_1_Timeless"]],
    decls: 5,
    vars: 2,
    consts: [
      [1, "flex", "flex-1", "items-center", "justify-center", "mb-6"],
      [1, "p-2", "m-2", "text-center"],
      [
        1,
        "flex",
        "items-center",
        "justify-center",
        "rounded-xl",
        "mx-auto",
        "mb-2",
        3,
        "src",
        "alt",
      ],
    ],
    template: function (e, s) {
      e & 1 &&
        (o(0, "div")(1, "h2"),
        r(2, "Clima de la semana"),
        a(),
        p(3, w, 5, 1)(4, j, 2, 1, "h3"),
        a()),
        e & 2 &&
          (n(3),
          m(s.weatherData() && s.forecastData() ? 3 : -1),
          n(),
          m(s.weatherError() ? 4 : -1));
    },
    dependencies: [S, v],
    styles: [
      ".shadow-custom[_ngcontent-%COMP%]{box-shadow:0 10px 25px #00000026,0 4px 10px #0000001a}",
    ],
  });
};
export { $ as CL_1_Timeless };
