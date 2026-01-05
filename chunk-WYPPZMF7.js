import { j as f, o as u } from "./chunk-AEQ62QCG.js";
import {
  Ma as a,
  Za as p,
  _a as d,
  ca as m,
  gb as s,
  hb as t,
  ib as o,
  xb as i,
} from "./chunk-CLQWJLWL.js";
var r = class n {
  size = "1em";
  classes = "";
  static ɵfac = function (e) {
    return new (e || n)();
  };
  static ɵcmp = a({
    type: n,
    selectors: [["CamaraLisa"]],
    inputs: { size: "size", classes: "classes" },
    decls: 10,
    vars: 2,
    consts: [
      ["fill", "currentColor", "viewBox", "0 0 500 500", 3, "ngClass"],
      [
        "d",
        "M112.46,176.29h275.08c6.34,0,11.48,5.15,11.48,11.48v150.5c0,6.34-5.15,11.48-11.48,11.48H112.46c-6.34,0-11.48-5.15-11.48-11.48v-150.5c0-6.34,5.15-11.48,11.48-11.48Z",
        1,
        "cls-1",
      ],
      [
        "d",
        "M129.37,200.57h41.42c3.23,0,5.85,2.62,5.85,5.85v24.2c0,3.23-2.62,5.85-5.85,5.85h-41.42c-3.23,0-5.85-2.62-5.85-5.85v-24.2c0-3.23,2.62-5.85,5.85-5.85Z",
        1,
        "cls-1",
      ],
      ["cx", "250", "cy", "268.14", "r", "54.9", 1, "cls-1"],
      [
        "d",
        "M250,307.55c-21.73,0-39.42-17.68-39.42-39.42s17.68-39.42,39.42-39.42,39.42,17.68,39.42,39.42-17.68,39.42-39.42,39.42Z",
        1,
        "cls-1",
      ],
      [
        "points",
        "314.63 176.29 185.37 176.29 195.6 150.24 304.4 150.24 314.63 176.29",
        1,
        "cls-1",
      ],
      [
        "d",
        "M368.54,176.29h-26.04v-13.02c0-7.19,5.83-13.02,13.02-13.02h0c7.19,0,13.02,5.83,13.02,13.02v13.02Z",
        1,
        "cls-1",
      ],
    ],
    template: function (e, c) {
      e & 1 &&
        (m(),
        s(0, "svg", 0)(1, "defs")(2, "style"),
        i(
          3,
          " .cls-1 { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 6.82px; } "
        ),
        t()(),
        o(4, "path", 1)(5, "path", 2)(6, "circle", 3)(7, "path", 4)(
          8,
          "polygon",
          5
        )(9, "path", 6),
        t()),
        e & 2 && (d("ngClass", c.classes), p("height", c.size));
    },
    dependencies: [f],
    styles: [
      ".cls-1[_ngcontent-%COMP%]{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:6.82px}",
    ],
  });
};
var g = class n {
  constructor() {}
  ngOnInit() {}
  static ɵfac = function (e) {
    return new (e || n)();
  };
  static ɵcmp = a({
    type: n,
    selectors: [["IG_5_Timeless"]],
    decls: 12,
    vars: 0,
    consts: [
      [1, "grid", "grid-cols-1", "justify-center", "w-full", "mx-auto"],
      [
        1,
        "sm:w-1/2",
        "sm:bg-[left_calc(50%)_top_calc(40%)]",
        "bg-[left_calc(40%)_top_calc(40%)]",
        "sm:min-h-[30vh]",
      ],
      [1, "grid", "grid-cols-1", "w-full", "content-center"],
      [1, "sm:p-5", "p-1"],
      [1, "text-5xl"],
      [
        1,
        "flex",
        "justify-center",
        "items-center",
        "text-[10rem]",
        "text-primary-200",
      ],
      [1, "sm:py-2", "py-1"],
    ],
    template: function (e, c) {
      e & 1 &&
        (s(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4),
        i(5, "#D&C14032026"),
        t(),
        s(6, "div", 5),
        o(7, "CamaraLisa"),
        t(),
        s(8, "h3", 6),
        i(9, " Comparte tus fotos "),
        o(10, "br"),
        i(11, " del evento con el hashtag "),
        t()()()()());
    },
    dependencies: [u, r],
    styles: [
      ".shadow-custom[_ngcontent-%COMP%]{box-shadow:0 10px 25px #00000026,0 4px 10px #0000001a}",
    ],
  });
};
export { g as IG_5_Timeless };
