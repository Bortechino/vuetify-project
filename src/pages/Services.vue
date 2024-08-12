<template>
    <v-app id="inspire">
        <v-main>
            <v-img :aspect-ratio="2" src="@/assets/office-581131_1920.jpg" cover>
                <div>
                    <v-container fluid id="front-container">

                        <navigation :color="color" :flat="flat" />



                        <cards />


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
import cards from "@/components/Cards_Services.vue";

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