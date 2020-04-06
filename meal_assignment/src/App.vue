<template>
  <v-app>
    <app-header
      :defaultPageUrl="defaultPageUrl"
      :headerMainTitle="headerMainTitle"
    />
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer v-bind:footerDescription="footerDescription" />
  </v-app>
</template>
<script>
import { AppHeader, AppFooter } from "@/components";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      showNavLink: true,
      footerDescription: "Enjoy your own recipe..!!",
      headerMainTitle: "HOT-FOOD",
      defaultPageUrl: "/"
    };
  }
};
</script>
