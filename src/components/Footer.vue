<template>
  <v-footer dark padless align-center class="text-center align-center justify-center">

    <v-card id="foot" flat tile class="secondary white--text text-center align-center justify-center ">
      <img src="@/assets/stamp.png" alt="stamp" />
      <v-card-text class="text-center align-center justify-center">
        <v-btn v-for="(icon, i) in icons" :key="i" class="mx-4 white--text" :href="icon.link" target="_blank" icon>
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0 text-center align-center justify-center">
        How long are you going to wait before you demand the best for yourself?
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text text-center align-center justify-center">
        &COPY;{{ new Date().getFullYear() }} — <strong>Zarini</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "fa-brands fa-facebook",
        link: "",
      },
      {
        text: "fa-brands fa-x-twitter",
        link: "",
      },
      {
        text: "fa-brands fa-linkedin",
        link: "",
      },
      {
        text: "fa-brands fa-instagram",
        link: "https://instagram.com/joabson_arley/",
      },
    ],
  }),
};


</script>
<style>
#foot {
  justify-content: center;
  align-items: center;
}
</style>
