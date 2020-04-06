import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import AppHeader from "@/components/header/header.vue";
import { routes } from "@/router/index.js";

describe("In app-header Component", () => {
  let appHeaderWrapper;
  const router = new VueRouter({ routes });
  beforeEach(() => {
    const headerMainTitle = "HOT-FOOD";
    const defaultPageUrl = "/";
    Vue.use(Vuetify);
    Vue.use(VueRouter);
    appHeaderWrapper = shallowMount(AppHeader, {
      Vue,
      router,
      propsData: {
        headerMainTitle: headerMainTitle,
        defaultPageUrl: defaultPageUrl
      }
    });
  });

  afterEach(() => {
    appHeaderWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(appHeaderWrapper.isVueInstance).toBeTruthy();
  });
  it("it should have a <v-app-bar> element", () => {
    expect(appHeaderWrapper.contains("v-app-bar-stub")).toBe(true);
  });
  it("it should have a <router-link> element", () => {
    expect(appHeaderWrapper.contains("router-link-stub")).toBe(true);
  });
  it("it should have a <v-toolbar-title> element", () => {
    expect(appHeaderWrapper.contains("v-toolbar-title-stub")).toBe(true);
  });
});
