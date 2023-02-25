export default class Loader {
  constructor({ images, onLoaded }) {
    this.images = images;
    this.onLoaded = onLoaded;
    this.loaded = 0;

    this.createLoader();
  }

  createLoader() {
    this.images.forEach((image) => {
      image.src = image.getAttribute("src");
      image.onload = () => {
        image.classList.add("loaded");
        this.onAssetLoaded();
      };
    });
  }

  onAssetLoaded() {
    this.loaded++;

    const percent = this.loaded / this.images.length;

    if (percent === 1) {
      this.onLoaded();
    }
  }
}
