<template>
  <v-app id="inspire">
    <v-main>
      <v-img :aspect-ratio="2" src="@/assets/unsplash-image-DJ7bWa-Gwks.jpg" cover>
        <v-container fluid id="front-container">
          <navigation :color="color" :flat="flat" />
          <v-container id="card-container" class="mt-8">
            <cards-about />
          </v-container>
          <v-container>
            <v-card class="mx-auto my-8 h-90 rounded-xl" width="550" high="350" max-width="550" max-height="350"
              color="brown-lighten-4" elevated="16">
              <v-sheet class="mx-auto text-xs-center border rounded-xl" border="lg opacity-12" max-width="550"
                max-height="350">
                <v-carousel id="about-carousel" :continuous="false" :show-arrows="false" delimiter-icon="mdi-square"
                  height="auto" hide-delimiter-background cycle multiple>
                  <v-carousel-item v-for="(item, i) in carouselItems" :key="i" :src="item.src" cover height="auto"
                    style="image-rendering: auto;"></v-carousel-item>

                </v-carousel>
              </v-sheet>
            </v-card>
          </v-container>
        </v-container>



      </v-img>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import Navigation from "@/components/Navigation.vue"
import AppFooter from "@/components/Footer.vue"
import CardsAbout from "@/components/Cards_about.vue"
import _imports_s0 from '@/assets/VZarini.png'
import _imports_s1 from '@/assets/1.png'
import _imports_s2 from '@/assets/2.png'
import _imports_s3 from '@/assets/3.png'
import _imports_s4 from '@/assets/4.png'
import _imports_s5 from '@/assets/image1.png'

const color = ref("")
const flat = ref(null)

const carouselItems = [
  { src: _imports_s0, },// <--- import image here
  { src: _imports_s1, },
  { src: _imports_s2, },
  { src: _imports_s3, },
  { src: _imports_s4, },
  { src: _imports_s5, },
]
</script>
<!--script>
export default {
  data() {
    return {
      carouselItems: [
        { src: _imports_s0, },// <--- import image here
        { src: _imports_s1, },
        { src: _imports_s2, },
        { src: _imports_s3, },
        { src: _imports_s4, },
        { src: _imports_s5, },
      ]
    }
  }
} */
</script -->


<style scoped>
* {
  font-family: 'Lato', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
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

.zoom-effect {
  transform: scale(1.1);
}

#about-carousel {
  width: 100%;
}

#about-carousel image {
  width: 100%;
  height: inherit;
}

@media (max-width: 850px) {
  .v-card {
    margin: 8px;
    gap: 10px;
  }
}
</style>