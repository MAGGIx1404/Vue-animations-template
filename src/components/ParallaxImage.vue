<template>
  <figure :class="['image-wrapper', wrapperClassName]">
    <img :src="image" :alt="alt" :class="['image', className]" ref="parallax" />
  </figure>
</template>

<script>
import Parallax from "@/Animations/Parallax";
export default {
  name: "ParallaxImage",
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    className: {
      type: String,
      default: ""
    },
    wrapperClassName: {
      type: String,
      default: ""
    },
    speed: {
      type: Number,
      default: 1.5
    },
    scale: {
      type: Number,
      default: 1.2
    }
  },
  computed: {
    image() {
      return require(`@/assets/images/${this.src}`);
    }
  },
  methods: {
    createParallax() {
      new Parallax({
        element: this.$refs.parallax,
        speed: this.speed,
        scale: this.scale
      });
    }
  },
  mounted() {
    this.createParallax();
  }
};
</script>

<style lang="scss" scoped></style>
