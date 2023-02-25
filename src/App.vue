<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/default.vue";
import Scroll from "@/utils/Scroll";
export default {
  name: "App",
  components: {
    DefaultLayout
  },
  mounted() {
    new Scroll();
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
</style>
