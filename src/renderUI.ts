import singleSpaVue from "single-spa-vue";
import { createApp, h } from "vue";

export const errorParcel = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h("div", { class: "text-red-800" }, "Something went wrong!");
    },
  },
});

export const loadingParcel = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h("div", { class: "text-red-800" }, "Loading...");
    },
  },
});
