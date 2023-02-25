import Lenis from "@studio-freight/lenis";

export default class Scroll {
  constructor() {
    this.scroll = null;
    this.config = {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false
    };

    this.init();
    window.requestAnimationFrame(this.raf.bind(this));
  }

  init() {
    this.scroll = new Lenis(this.config);
  }

  raf(time) {
    this.scroll.raf(time);
    requestAnimationFrame(this.raf.bind(this));
  }
}
