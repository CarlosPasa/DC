import { j as b, m as E } from "./chunk-AEQ62QCG.js";
import {
  Ca as u,
  Hb as g,
  Ma as C,
  Ra as y,
  _a as c,
  aa as _,
  ba as f,
  db as T,
  e as r,
  eb as x,
  fb as w,
  gb as o,
  hb as d,
  ia as v,
  lb as D,
  mb as I,
  na as l,
  qb as m,
  rb as h,
  xb as p,
} from "./chunk-CLQWJLWL.js";
var k = (a, t, n, e, i) => ({
    "-translate-x-full opacity-0 transition-all duration-500 ease-in-out": a,
    " translate-x-full opacity-0 transition-all  duration-100 ease-in-out": t,
    " transition-all  duration-200 ease-in-out": n,
    "translate-x-full opacity-0 transition-all duration-500 ease-in-out": e,
    " -translate-x-full opacity-0 transition-all  duration-100 ease-in-out": i,
  }),
  P = (a, t, n, e, i) => [a, t, n, e, i];
function A(a, t) {
  a & 1 && D(0);
}
function M(a, t) {
  if (a & 1) {
    let n = I();
    o(0, "button", 8),
      m("click", function () {
        let i = _(n).$index,
          s = h();
        return f(s.goToSlide(i));
      }),
      p(1, " \u2022 "),
      d();
  }
  if (a & 2) {
    let n = t.$index,
      e = h();
    c(
      "ngClass",
      g(
        1,
        P,
        e.dotClass,
        n === e.currentIndex() ? e.activeDotClass : "",
        n === e.currentIndex() && e.dark ? "text-primary-100 text-5xl" : "",
        n === e.currentIndex() && !e.dark ? "text-primary-500 text-5xl" : "",
        n !== e.currentIndex() ? "text-primary-400" : ""
      )
    );
  }
}
var S = class a {
  arrowClass = "";
  dotClass = "";
  activeDotClass = "";
  slideChange = new v();
  slides = [];
  autoplay = !1;
  duration = 3e3;
  dark = !1;
  currentIndex = l(0);
  intervalId;
  isDragging = !1;
  startX = 0;
  currentTranslate = 0;
  animate = l(!1);
  animate2 = l(!1);
  animate3 = l(!1);
  prev = l(!1);
  ngAfterViewInit() {
    this.autoplay && this.startAutoplay();
  }
  startAutoplay() {
    this.intervalId = setInterval(() => {
      this.goToNextSlide();
    }, this.duration);
  }
  stopAutoplay() {
    clearInterval(this.intervalId);
  }
  goToSlide(t) {
    return r(this, null, function* () {
      t != this.currentIndex() &&
        (t > this.currentIndex() ? this.prev.set(!1) : this.prev.set(!0),
        yield this.animationProcess(t));
    });
  }
  goToNextSlide() {
    return r(this, null, function* () {
      this.prev.set(!1),
        yield this.animationProcess(
          (this.currentIndex() + 1) % this.slides.length
        );
    });
  }
  goToPrevSlide() {
    return r(this, null, function* () {
      this.prev.set(!0),
        yield this.animationProcess(
          this.currentIndex() === 0
            ? this.slides.length - 1
            : this.currentIndex() - 1
        );
    });
  }
  animationProcess(t) {
    return r(this, null, function* () {
      yield this.doAnimation(),
        yield this.doAnimation2(),
        this.currentIndex.set(t),
        this.slideChange.emit(t),
        yield this.doAnimation3();
    });
  }
  doAnimation() {
    return r(this, null, function* () {
      return (
        this.animate.set(!0),
        new Promise((t) => {
          setTimeout(() => {
            this.animate.set(!1), t();
          }, 400);
        })
      );
    });
  }
  doAnimation2() {
    return r(this, null, function* () {
      return (
        this.animate2.set(!0),
        new Promise((t) => {
          setTimeout(() => {
            this.animate2.set(!1), t();
          }, 100);
        })
      );
    });
  }
  doAnimation3() {
    return r(this, null, function* () {
      return (
        this.animate3.set(!0),
        new Promise((t) => {
          setTimeout(() => {
            this.animate3.set(!1), t();
          }, 500);
        })
      );
    });
  }
  onDragStart(t) {
    (this.isDragging = !0),
      (this.startX = this.getPositionX(t)),
      this.intervalId && this.stopAutoplay();
  }
  onDragMove(t) {
    if (!this.isDragging) return;
    let n = this.getPositionX(t);
    this.currentTranslate = n - this.startX;
  }
  onDragEnd() {
    this.isDragging &&
      ((this.isDragging = !1),
      this.currentTranslate > 50
        ? this.goToPrevSlide()
        : this.currentTranslate < -50 && this.goToNextSlide(),
      (this.currentTranslate = 0),
      this.autoplay && this.startAutoplay());
  }
  getPositionX(t) {
    return t instanceof MouseEvent ? t.clientX : t.touches[0].clientX;
  }
  static ɵfac = function (n) {
    return new (n || a)();
  };
  static ɵcmp = C({
    type: a,
    selectors: [["Carousel"]],
    inputs: {
      arrowClass: "arrowClass",
      dotClass: "dotClass",
      activeDotClass: "activeDotClass",
      slides: "slides",
      autoplay: "autoplay",
      duration: "duration",
      dark: "dark",
    },
    outputs: { slideChange: "slideChange" },
    decls: 11,
    vars: 10,
    consts: [
      [
        1,
        "relative",
        "w-full",
        "h-auto",
        "z-10",
        "mx-auto",
        "pb-8",
        "overflow-hidden",
        3,
        "mousedown",
        "mousemove",
        "mouseup",
        "mouseleave",
        "touchstart",
        "touchmove",
        "touchend",
      ],
      [
        1,
        "absolute",
        "left-2",
        "top-1/2",
        "transform",
        "-translate-y-1/2",
        "z-40",
        "text-3xl",
        3,
        "click",
        "ngClass",
      ],
      [
        1,
        "flex",
        "justify-center",
        "items-center",
        "w-full",
        "h-auto",
        "py-2",
        "mb-2",
        3,
        "ngClass",
      ],
      [4, "ngTemplateOutlet"],
      [
        1,
        "absolute",
        "right-2",
        "top-1/2",
        "transform",
        "-translate-y-1/2",
        "z-40",
        "text-3xl",
        3,
        "click",
        "ngClass",
      ],
      [1, "absolute", "inset-x-0", "bottom-2"],
      [1, "flex", "justify-center", "space-x-1"],
      [1, "text-4xl", 3, "ngClass"],
      [1, "text-4xl", 3, "click", "ngClass"],
    ],
    template: function (n, e) {
      n & 1 &&
        (o(0, "div", 0),
        m("mousedown", function (s) {
          return e.onDragStart(s);
        })("mousemove", function (s) {
          return e.onDragMove(s);
        })("mouseup", function () {
          return e.onDragEnd();
        })("mouseleave", function () {
          return e.onDragEnd();
        })("touchstart", function (s) {
          return e.onDragStart(s);
        })("touchmove", function (s) {
          return e.onDragMove(s);
        })("touchend", function () {
          return e.onDragEnd();
        }),
        o(1, "button", 1),
        m("click", function () {
          return e.goToPrevSlide();
        }),
        p(2, " \u276E "),
        d(),
        o(3, "div", 2),
        y(4, A, 1, 0, "ng-container", 3),
        d(),
        o(5, "button", 4),
        m("click", function () {
          return e.goToNextSlide();
        }),
        p(6, " \u276F "),
        d(),
        o(7, "div", 5)(8, "div", 6),
        x(9, M, 2, 7, "button", 7, T),
        d()()()),
        n & 2 &&
          (u(),
          c("ngClass", e.arrowClass),
          u(2),
          c(
            "ngClass",
            g(
              4,
              k,
              e.animate() && !e.prev(),
              e.animate2() && !e.prev(),
              e.animate3(),
              e.animate() && e.prev(),
              e.animate2() && e.prev()
            )
          ),
          u(),
          c("ngTemplateOutlet", e.slides[e.currentIndex()].content),
          u(),
          c("ngClass", e.arrowClass),
          u(4),
          w(e.slides));
    },
    dependencies: [b, E],
    encapsulation: 2,
  });
};
export { S as a };
