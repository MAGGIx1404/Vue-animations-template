import Animation from "textify.js";

const { Textify, TextifyTitle } = Animation;

export default class Text {
  constructor() {
    this.textsAnimation = null;
    this.titlesAnimation = null;

    this.init();
  }

  init() {
    this.textsAnimation = new Textify(); // create multiple instances for different animations
    this.titlesAnimation = new TextifyTitle(); // create multiple instances for different animations
  }

  show() {
    this.textsAnimation.show();
    this.titlesAnimation.show();
  }

  hide() {
    this.textsAnimation.hide();
    this.titlesAnimation.hide();
  }
}
