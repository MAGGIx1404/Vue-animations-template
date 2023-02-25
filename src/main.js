import { createApp } from "vue";

import router from "@/router";
import App from "./App.vue";

import Loader from "@/utils/Loader";
import Text from "@/Animations/Text";

const app = createApp(App);

app.config.globalProperties.$textify = Text;
app.config.globalProperties.$loader = Loader;

const requireComponent = require.context(
  "./components",
  false,
  /[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");
  app.component(componentName, componentConfig.default || componentConfig);
});

app.use(router);

app.mount("#app");
