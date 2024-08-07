<template>
  <div>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed temporary app>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/favicon/apple-touch-icon.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Виктория Зарини</v-list-item-title>
            <v-list-item-subtitle>Коуч</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item v-for="([icon, text, link], i) in items" :key="i" link @click="$vuetify.goTo(link)">
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
              }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar app class="mb-16" scroll-behavior="elevate fade-image inverted" color="transparent" width="75" clearable>
      <v-app-bar-title>Виктория Зарини Коуч ICTA</v-app-bar-title>
      <!--v-app-bar-nav-icon @click="drawer = !drawer" v-if="isXs" /-->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-4" v-if="isXs" />
      <div v-else>
        <v-btn href="/index.html">
          Начало
        </v-btn>
        <v-btn href="#curses">
          Онлайн продукты
        </v-btn>
        <v-btn href="#">
          Услуги
        </v-btn>
        <v-btn href="#contacts">
          Контакты
        </v-btn>

      </div>
    </v-app-bar>

  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Начало", "/index.html"],
      ["mdi-information-outline", "Обо мне", "#features"],
      ["mdi-download-box-outline", "Онлайн продукты", "#download"],
      ["mdi-currency-usd", "Услуги", "#pricing"],
      ["mdi-email-outline", "Контакты", "#contact"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
