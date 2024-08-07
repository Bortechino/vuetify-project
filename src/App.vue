<template>
  <v-app id="inspire">
    <v-main>
      <v-img :aspect-ratio="2" src="./assets/jess-bailey-q10VITrVYUM-unsplash.jpg" cover>
        <div>

          <v-container fluid id="front-container">
            <navigation :color="color" :flat="flat" />


            <v-container id="card-container" class="  mt-8">
              <cards />
            </v-container>

          </v-container>

        </div>


        <v-container id="about-container" class="  mt-2  " color="transparent">
          <v-row justify="center" class="mt-2 " no-gutters>

            <v-col cols="12" sm="6" md="6" lg="8" class="  mt-2" max-height>
              <v-card justify="center" align="ceter" width="100%" class="mx-auto my-8  h-90 rounded-xl"
                color="brown-lighten-4" evalated="16">

                <v-card-title class="text-h6 text-center   mt-8" text-color="brown-darken-4">
                  Обо мне
                </v-card-title>
                <v-card-text color="transparent" class="text-justify text-body-2 mt-8">
                  <p>Если есть что-то, о чем я напоминаю своим клиентам
                    во время нашего первого сеанса, так это следующее. Вы можете не выбирать свои жизненные
                    обстоятельства, но вы всегда выбираете, как реагировать на каждое из них.Теперь
                    это означает, что вы ВСЕГДА делали все, что хотели. И конечно, то, что вы получили взамен, может
                    не соответствовать тому, что вы искали, поэтому вы накопили проблемы и стали недовольны своими
                    отношениями, своей работой или любой другой сферой жизни. Но более 450 часов терапии убедили меня,
                    что
                    любая внешняя проблема, с которой мы можем столкнуться в жизни, требует внутреннего ресурса, к
                    которому мы
                    можем обратиться. Поэтому, если ваше будущее имеет позитивную альтернативу, вы должны знать, что оно
                    зависит от каждого выбора и действия, которые вы совершаете сейчас.</p>

                  <p> Увлеченная психологией и убежденная в нашей индивидуальной
                    способности достигать своей
                    самореализации,
                    моя миссия состоит в том, чтобы помочь вам найти ресурсы, которые позволят вам достичь ваших
                    личных
                    и
                    профессиональных целей. На своих курсах и сеансах терапии я предлагаю подход, направленный на
                    то,
                    чтобы
                    помочь вам понять и преодолеть вашу тревожность, токсичные отношения, оскорбительную рабочую
                    среду,
                    прокрастинацию или проблемы с самооценкой и многое другое. Благодаря структурированной и чуткой
                    практике
                    вы сможете тщательно пересмотреть свои мыслительные процессы и вытекающие из них привычки,
                    которые
                    пагубно
                    сказываются на вашей
                    жизни.</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="6" md="6" lg="3" class="  mt-8" max-height>
              <v-card :height="auto" :width="auto" color="brown-lighten-4" evalated="16"
                class="ma-3 text-xs-center rounded-xl">
                <v-img color="surface-variant" :width="300" aspect-ratio="16/9" class="mx-auto"
                  src="./assets/GuiGLhq8.jpeg"></v-img>
                <v-card-title class="text-h6 text-center mt-8" text-color="brown-darken-4">
                  Виктория Зарини<br>
                </v-card-title>
                <v-card-subtitle class="text-h6 text-center">Коуч ICTA</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-main>



    <foote />
  </v-app>
</template>

<script setup>
import navigation from "./components/Navigation";
import foote from "./components/Footer";
import {
  ref
} from 'vue'

const drawer = ref(null)
const dialog = ref(false)
</script>

<script>
import navigation from "./components/Navigation";
import foote from "./components/Footer";
import cards from "./components/Cards.vue";


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
