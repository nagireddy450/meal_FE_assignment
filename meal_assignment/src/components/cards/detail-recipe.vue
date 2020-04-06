<template>
  <v-card class="mx-auto">
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          class="white--text align-end"
          height="400px"
          lazy-src="../../assets/images/no-image.png"
          :src="mealDetails.strMealThumb"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <div class=" youtube-tittle title font-weight-black pa-3">
          Watch it on YouTube..!!
        </div>
        <v-img
          class="white--text align-end"
          height="300px"
          @click="youtubeNavigation"
          src="../../assets/images/youtube_recipe.jpg"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-card-text
          class="recipe-name text-capitalize text-no-wrap d-inline-block text-truncate"
          >{{ mealDetails.strMeal }}</v-card-text
        >
      </v-col>
      <v-col cols="4">
        <template>
          <div class="text-center">
            <v-chip class="ma-2" color="error" outlined pill>
              {{ mealDetails.strArea }}
              <v-icon right>mdi-map-marker-radius</v-icon>
            </v-chip>

            <v-chip class="ma-2" color="indigo darken-3" outlined>
              <v-icon left>mdi-food-variant</v-icon>
              {{ mealDetails.strCategory }}
            </v-chip>
          </div>
        </template>
      </v-col>
    </v-row>
    <v-card-text>
      <v-row class="recipe-details">
        <v-col cols="12" md="6" lg="3">
          <div class="title font-weight-black">Ingredients</div>
          <ul v-for="(n, index) in 20" :key="index">
            <li v-if="mealDetailList('strIngredient', n)">
              {{ mealDetailList("strIngredient", n) }}
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="6" lg="3">
          <div class="title font-weight-black">Measure</div>
          <ul v-for="(n, index) in 20" :key="index">
            <li v-if="mealDetailList('strMeasure', n)">
              {{ mealDetailList("strMeasure", n) }}
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="12" lg="6">
          <div class="title font-weight-black">Instructions</div>
          <div v-if="mealDetails.strInstructions">
            {{ mealDetails.strInstructions }}
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "AppDetailCard",
  data() {
    return {};
  },
  props: {
    mealDetails: {
      type: Object
    },
    items: {
      type: [Array, Object]
    }
  },
  methods: {
    mealDetailList(type, number) {
      let recipeResult = this.items[0];
      let ingredient = type + number;
      if (this.isSpaceOrNull(recipeResult[ingredient])) {
        return "";
      }
      return recipeResult[ingredient];
    },
    isSpaceOrNull(str) {
      return str === null || str.match(/^ *$/) !== null;
    },
    youtubeNavigation() {
      window.open(this.mealDetails.strYoutube, "_blank");
    }
  }
};
</script>
<style>
.youtube-tittle {
  text-align: center;
}
.recipe-details {
  background-color: #d0e8d1;
  color: black;
}
.recipe-name {
  color: #b48608 !important;
  font-family: "Droid serif", serif;
  font-size: 36px !important;
  font-weight: 400;
  font-style: italic;
  margin: 0 0 12px;
}
</style>
