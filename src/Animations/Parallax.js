import Ukiyo from "ukiyojs";

export default class Parallax {
  constructor({ element, speed, scale }) {
    this.element = element;
    this.speed = speed;
    this.scale = scale;
    this.parallax = null;

    this.init();
  }

  init() {
    this.parallax = new Ukiyo(this.element, {
      scale: this.speed, // 1~2 is recommended
      speed: this.scale, // 1~2 is recommended
      willChange: true, // This may not be valid in all cases
      wrapperClass: "parallax-wrapper", // This is the class name of the wrapper
      externalRAF: false
    });
  }

  destroy() {
    this.parallax.destroy();
  }
}
