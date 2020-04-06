<template>
  <v-app-bar app color="green" dark>
    <router-link :to="defaultPageUrl">
      <v-toolbar-title color="brown lighten-4">
        <b class="red">{{ headerMainTitle }} </b><span> "Recipes"</span>
      </v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "app-header",
  components: {},
  props: {
    headerMainTitle: {
      type: String,
      required: true
    },
    defaultPageUrl: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.red {
  color: rgb(20, 1, 1) !important;
}
.v-application a {
  font-family: "Rouge Script", cursive;
  text-transform: uppercase;
  font-size: 0.875rem;
  text-decoration: none;
  font-weight: 300;
  color: #cef0d4;
  text-shadow: 1px 1px 2px #082b34;
}
</style>
