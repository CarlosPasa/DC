import { o as x } from "./chunk-AEQ62QCG.js";
import {
  Aa as d,
  Ca as m,
  Ma as o,
  _a as r,
  gb as e,
  hb as t,
  ib as n,
  na as l,
  xb as a,
} from "./chunk-CLQWJLWL.js";
var p = class s {
  padres_x1 = "assets/images/Padres_x1.jpg";
  padres_x2 = "assets/images/Padres_x1.jpg";
  textureUrl = "assets/images/texture.jpg";
  SelloLisa = "assets/images/SelloLisa.png";
  padresUrl = l(this.padres_x2);
  ngOnInit() {
    typeof window < "u" &&
      (window.matchMedia("(max-width: 600px)").matches
        ? this.padresUrl.set(this.padres_x1)
        : this.padresUrl.set(this.padres_x2));
  }
  static ɵfac = function (i) {
    return new (i || s)();
  };
  static ɵcmp = o({
    type: s,
    selectors: [["PS_5_Timeless"]],
    decls: 31,
    vars: 1,
    consts: [
      [1, "my-8", "py-2"],
      ["data-aos", "zoom-in"],
      [1, "text-center", "absolute", "-top-32", "left-0", "right-0"],
      [
        "alt",
        "Sello Lisa",
        1,
        "mx-auto",
        "object-contain",
        "h-32",
        "w-32",
        3,
        "src",
      ],
      ["data-aos", "fade-down", 1, "mt-4"],
      [1, "my-4"],
      [
        "data-aos",
        "fade-down",
        1,
        "text-5xl",
        "sm:text-2xl",
        "text-center",
        "-translate-x-1",
      ],
      ["data-aos", "fade-down", 1, "text-4xl", "sm:text-2xl", "text-center"],
      ["data-aos", "fade-down"],
      ["data-aos", "fade-up"],
      [1, "text-center"],
      [1, "my-4", "text-2xl", "font-bold"],
      [1, "text-2xl"],
    ],
    template: function (i, S) {
      i & 1 &&
        (e(0, "div", 0)(1, "div", 1)(2, "div", 2),
        n(3, "img", 3),
        t(),
        e(4, "h3", 4),
        a(5, " NOSOTROS "),
        t(),
        e(6, "div", 5)(7, "h2", 6),
        a(8, " Diana Zapata "),
        t(),
        e(9, "h2", 7),
        a(10, " & "),
        t(),
        e(11, "h2", 6),
        a(12, " Carlos Pasache "),
        t()(),
        e(13, "h3", 8),
        a(14, " Con la Bendici\xF3n "),
        n(15, "br"),
        a(16, " de Nuestros Padres "),
        t()(),
        e(17, "div", 9)(18, "div", 10)(19, "h3", 11),
        a(20, "Padres de la novia"),
        t(),
        e(21, "h3", 12),
        a(22, "Reyna Guerrero"),
        t(),
        e(23, "h3", 12),
        a(24, "Carlos Zapata"),
        t(),
        e(25, "h3", 11),
        a(26, "Padres del novio"),
        t(),
        e(27, "h3", 12),
        a(28, "Ernestina Ordinola"),
        t(),
        e(29, "h3", 12),
        a(30, "Carlos Pasache"),
        t()()()()),
        i & 2 && (m(3), r("src", S.SelloLisa, d));
    },
    dependencies: [x],
    encapsulation: 2,
  });
};
export { p as PS_5_Timeless };
