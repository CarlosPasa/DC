import { a as _ } from "./chunk-G37QBTU2.js";
import "./chunk-AEQ62QCG.js";
import {
  Ca as p,
  Eb as o,
  Fb as f,
  Ma as d,
  Mb as s,
  Ra as c,
  _a as x,
  gb as i,
  hb as t,
  ib as u,
  wb as n,
  xb as a,
} from "./chunk-CLQWJLWL.js";
var m = (e) => ({ content: e }),
  E = (e, l, r) => [e, l, r];
function v(e, l) {
  e & 1 &&
    (i(0, "div", 6)(1, "h3", 7),
    a(2, "Quinta Dorada Hotel & Suites"),
    t(),
    i(3, "h3", 8),
    a(4, " Perif. Luis Echeverr\xEDa 1416, Guanajuato Oriente, Saltillo "),
    t(),
    i(5, "a", 9),
    a(6, " Abrir en Google Maps "),
    t()());
}
function y(e, l) {
  e & 1 &&
    (i(0, "div", 6)(1, "h3", 7),
    a(2, "Hotel Colonial San Miguel"),
    t(),
    i(3, "h3", 8),
    a(4, " Gral. Victoriano Cepeda Sur 410, Zona Centro, Saltillo "),
    t(),
    i(5, "a", 10),
    a(6, " Abrir en Google Maps "),
    t()());
}
function C(e, l) {
  e & 1 &&
    (i(0, "div", 6)(1, "h3", 7),
    a(2, "City Express Saltillo Sur"),
    t(),
    i(3, "h3", 8),
    a(4, " Perif. Luis Echeverr\xEDa No. 350-A, Lourdes, Saltillo "),
    t(),
    i(5, "a", 11),
    a(6, " Abrir en Google Maps "),
    t()());
}
var b = class e {
  constructor() {}
  ngOnInit() {}
  static ɵfac = function (r) {
    return new (r || e)();
  };
  static ɵcmp = d({
    type: e,
    selectors: [["H_1_Timeless"]],
    decls: 10,
    vars: 16,
    consts: [
      ["slide1", ""],
      ["slide2", ""],
      ["slide3", ""],
      ["id", "Hospedaje", 1, "w-full"],
      [1, "text-center", "mb-6", "pt-7"],
      [
        3,
        "dark",
        "slides",
        "arrowClass",
        "dotClass",
        "activeDotClass",
        "autoplay",
      ],
      [1, "text-center", "p-6"],
      [1, "text-xl", "font-semibold", "mb-2"],
      [1, "text-sm", "mb-4", "px-4"],
      [
        "href",
        "https://www.google.com/maps/place/Quinta+Dorada+Hotel+%26+Suites/@25.4751989,-100.9781964,17z/data=!3m1!4b1!4m6!3m5!1s0x86886d4b0ec61f81:0x9e3b8e378ebc1861!8m2!3d25.4751989!4d-100.9756215!16s%2Fg%2F11c0q8q8q7",
        "target",
        "_blank",
        1,
        "font-serif1",
        "text-primary-500",
        "border-primary-500",
        "border",
        "relative",
        "sm:text-2xl",
        "text-xl",
        "hover:shadow-2xl",
        "p-1",
        "px-2",
        "sm:px-2",
      ],
      [
        "href",
        "https://www.google.com/maps/place/Hotel+Colonial+San+Miguel/@25.468624,-100.9834568,17z/data=!3m1!4b1!4m6!3m5!1s0x86886da9b16b0f0f:0xf02d2537086bcb5b!8m2!3d25.468624!4d-100.9808819!16s%2Fg%2F11c0q8q8q6",
        "target",
        "_blank",
        1,
        "font-serif1",
        "text-primary-500",
        "border-primary-500",
        "border",
        "relative",
        "sm:text-2xl",
        "text-xl",
        "hover:shadow-2xl",
        "p-1",
        "px-2",
        "sm:px-2",
      ],
      [
        "href",
        "https://www.google.com/maps/place/City+Express+Saltillo+Sur/@25.4669,-100.975,17z/data=!3m1!4b1!4m6!3m5!1s0x86886dc02f9d3123:0x4d9b6a67e645ef08!8m2!3d25.4669!4d-100.972425!16s%2Fg%2F11c0q8q8q5",
        "target",
        "_blank",
        1,
        "font-serif1",
        "text-primary-500",
        "border-primary-500",
        "border",
        "relative",
        "sm:text-2xl",
        "text-xl",
        "hover:shadow-2xl",
        "p-1",
        "px-2",
        "sm:px-2",
      ],
    ],
    template: function (r, w) {
      if (
        (r & 1 &&
          (i(0, "div", 3)(1, "h2", 4),
          a(2, "Sugerencia de Hospedaje"),
          t(),
          u(3, "Carousel", 5),
          c(4, v, 7, 0, "ng-template", null, 0, s)(
            6,
            y,
            7,
            0,
            "ng-template",
            null,
            1,
            s
          )(8, C, 7, 0, "ng-template", null, 2, s),
          t()),
        r & 2)
      ) {
        let g = n(5),
          h = n(7),
          S = n(9);
        p(3),
          x("dark", !0)(
            "slides",
            f(12, E, o(6, m, g), o(8, m, h), o(10, m, S))
          )("arrowClass", "text-primary-200")(
            "dotClass",
            "text-primary-200 opacity-40"
          )("activeDotClass", "!opacity-100")("autoplay", !1);
      }
    },
    dependencies: [_],
    encapsulation: 2,
  });
};
export { b as H_1_Timeless };
