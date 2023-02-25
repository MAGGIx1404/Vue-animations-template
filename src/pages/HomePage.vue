<template>
  <div class="banner section">
    <div class="container">
      <h1 class="title" data-textify-title>WELCOME!!!</h1>
      <h2 class="sub-title" data-textify>
        Vue 3 animation template with Text, Parallax &#38; Smooth-scroll
        (Lennis).
      </h2>
      <p class="paragraph" data-textify>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam
        necessitatibus quas quidem voluptatum quos. Quisquam, quae. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam
        necessitatibus quas quidem voluptatum quos. Quisquam, quae.
      </p>
    </div>
  </div>
  <div class="extra-section">
    <div class="container">
      <div class="section-content">
        <h1 class="sub-title" data-textify-title>
          Crafted with Vue 3 + Vue Router + SCSS
        </h1>
        <p class="paragraph" data-textify>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quas quidem voluptatum quos. Quisquam, quae. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quas quidem voluptatum quos. Quisquam, quae.
        </p>
        <p class="paragraph" data-textify>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quas quidem voluptatum quos. Quisquam, quae. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quas quidem voluptatum quos. Quisquam, quae.
        </p>
      </div>
      <div class="section-media">
        <ParallaxImage
          src="1.jpg"
          alt="Image"
          className="section-media-image"
          wrapperClassName="section-media-wrapper"
        />
      </div>
    </div>
  </div>
  <div class="center-section">
    <div class="container">
      <h1 class="title" data-textify-title>Scroll....</h1>
      <p class="paragraph" data-textify>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam
        necessitatibus quas quidem voluptatum quos. Quisquam, quae. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam
        necessitatibus quas quidem voluptatum quos. Quisquam, quae.
      </p>
    </div>
  </div>
  <div class="images-gallery">
    <div class="container">
      <ParallaxImage
        src="2.jpg"
        alt="Image"
        className="gallery-image"
        wrapperClassName="image-wrapper"
      />
      <ParallaxImage
        src="3.jpg"
        alt="Image"
        className="gallery-image"
        wrapperClassName="image-wrapper"
      />
      <ParallaxImage
        src="4.jpg"
        alt="Image"
        className="gallery-image"
        wrapperClassName="image-wrapper"
      />
      <ParallaxImage
        src="5.jpg"
        alt="Image"
        className="gallery-image"
        wrapperClassName="image-wrapper"
      />
      <ParallaxImage
        src="6.jpg"
        alt="Image"
        className="gallery-image"
        wrapperClassName="image-wrapper"
      />
    </div>
  </div>
  <div class="center-section">
    <div class="container">
      <h1 class="title" data-textify-title>Thanks for scrolling...</h1>
      <p class="paragraph" data-textify>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam
        necessitatibus quas quidem voluptatum quos. Quisquam, quae. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam
        necessitatibus quas quidem voluptatum quos. Quisquam, quae.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      images: null
    };
  },
  methods: {
    createLoader() {
      this.images = document.querySelectorAll("img");
      new this.$loader({
        images: this.images,
        onLoaded: () => {
          document.body.classList.add("loaded");
          new this.$textify(); // text animations
        }
      });
    }
  },
  mounted() {
    this.createLoader();
  }
};
</script>

<style lang="scss" scoped></style>
