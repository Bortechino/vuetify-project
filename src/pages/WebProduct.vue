<template>
    <v-app id="inspire">
        <v-main>
            <v-img :aspect-ratio="2" src="@/assets/image-asset.jpeg" cover>
                <div>

                    <v-container fluid id="front-container">
                        <navigation :color="color" :flat="flat" />


                        <v-container id="card-container" class="  mt-8">
                            <cards />
                        </v-container>

                    </v-container>

                </div>


                <v-container id="about-container" class="  mt-2  " color="transparent">


                </v-container>
            </v-img>
        </v-main>



        <foote />
    </v-app>
</template>

<script setup>
import navigation from "@/components/Navigation";
import foote from "@/components/Footer";
import cards from "@/components/Cards_Web.vue";

import {
    ref
} from 'vue'
const drawer = ref(null)
const dialog = ref(false)
</script>

<script>


export default {
    name: "App",

    components: {
        navigation,
        foote,
        cards,


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

@media (max-width: 850px) {
    .v-card {

        margin: 8px;
        gap: 10px;
    }
}
</style>