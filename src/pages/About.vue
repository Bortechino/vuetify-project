<template>
  <v-app id="inspire">
    <v-main>
      <v-img :aspect-ratio="2" src="@/assets/unsplash-image-DJ7bWa-Gwks.jpg" cover>
        <div>

          <v-container fluid id="front-container">
            <navigation :color="color" :flat="flat" />
            <v-container id="card-container" class="  mt-8">
              <cards_about />
            </v-container>
            <v-container fluid id="serts">
              <v-row>
                <v-col cols="12" sm="6" md="4" class="mb-4">
                  <v-sheet><v-img src="@/assets/VZarini.png" /> </v-sheet>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="mb-4">
                  <v-sheet><v-sheet><v-img src="@/assets/2.png" /> </v-sheet></v-sheet>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="mb-4">
                  <v-sheet><v-sheet><v-img src="@/assets/3.png" /> </v-sheet></v-sheet>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="4" class="mb-4">
                  <v-sheet><v-img src="@/assets/4.png" /> </v-sheet>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="mb-4">
                  <v-sheet><v-sheet><v-img src="@/assets/5.png" /> </v-sheet></v-sheet>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="mb-4">
                  <v-sheet><v-sheet><v-img src="@/assets/1.png" /> </v-sheet></v-sheet>
                </v-col>
              </v-row>
            </v-container>

          </v-container>

        </div>
      </v-img>
    </v-main>



    <foote />
  </v-app>
</template>

<script setup>

import navigation from "@/components/Navigation";
import foote from "@/components/Footer";
import cards from "@/components/Cards.vue";
import cards_about from "@/components/Cards_about.vue";
import {
  ref
} from 'vue'

const drawer = ref(null)
const dialog = ref(false)

</script>

<script>
/*import navigation from "./components/Navigation";
import foote from "./components/Footer";
import cards from "./components/Cards.vue";
import cards2 from "./components/Cards2.vue";*/

export default {
  name: "App",

  components: {
    navigation,
    foote,
    cards,
    cards_about,

  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),
};

</script>



<style scoped>
* {
  font-family: 'Lato', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

#bg-image {
  aspect-ratio: 1;
  background-image: url("./assets/jess-bailey-q10VITrVYUM-unsplash.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

#card-container {
  width: 100%;

}

.v-card-title {
  color: brown;
}

.v-card {
  min-height: 90%;
  align-items: center;
  justify-content: center;


}

.zoom-efect {
  transform: scale(1.1);
}

@media (max-width: 850px) {
  .v-card {

    margin: 8px;
    gap: 10px;
  }
}
</style>
