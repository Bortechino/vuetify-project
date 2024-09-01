<template>
  <v-row justify="center" class="mt-2" no-gutters>
    <v-col cols="12" sm="6" md="6" lg="8" class="mt-2">
      <v-card class="mx-auto my-8 h-90 rounded-xl" color="brown-lighten-4" elevated="16">
        <v-card-title class="text-h6 text-center mt-8" text-color="brown-darken-4">
          {{ titles }}
        </v-card-title>
        <v-card-text class="text-justify text-body-2 mt-8">
          <p v-for="(paragraph, index) in paragraphs" :key="index">
            {{ paragraph }}
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-spacer></v-spacer>

    <v-col cols="12" sm="6" md="6" lg="3" class="mt-8">

      <v-card color="brown-lighten-4" elevated="16" class="ma-3 text-xs-center rounded-xl">
        <v-img :width="300" aspect-ratio="16/9" class="mx-auto" :src="_imports_0" alt="Photo" />

        <v-card-title class="text-h6 text-center mt-8" text-color="brown-darken-4">
          {{ name }}<br>
        </v-card-title>
        <v-card-subtitle class="text-h6 text-center">{{ profession }}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'


const titles = ref('Обо мне')

const paragraphs = ref([
  'Если есть что-то, о чем я напоминаю своим клиентам во время нашего первого сеанса, так это следующее. Вы можете не выбирать свои жизненные обстоятельства, но вы всегда выбираете, как реагировать на каждое из них.',
  'Теперь это означает, что вы ВСЕГДА делали все, что хотели. И конечно, то, что вы получили взамен, может не соответствовать тому, что вы искали, поэтому вы накопили проблемы и стали недовольны своими отношениями, своей работой или любой другой сферой жизни.',
  'Но более 450 часов терапии убедили меня, что любая внешняя проблема, с которой мы можем столкнуться в жизни, требует внутреннего ресурса, к которому мы можем обратиться.',
  'Поэтому, если ваше будущее имеет позитивную альтернативу, вы должны знать, что оно зависит от каждого выбора и действия, которые вы совершаете сейчас.',
  'Увлеченная психологией и убежденная в нашей индивидуальной способности достигать своей самореализации, моя миссия состоит в том, чтобы помочь вам найти ресурсы, которые позволят вам достичь ваших личных и профессиональных целей.',
  'На своих курсах и сеансах терапии я предлагаю подход, направленный на то, чтобы помочь вам понять и преодолеть вашу тревожность, токсичные отношения, оскорбительную рабочую среду, прокрастинацию или проблемы с самооценкой и многое другое.',
  'Благодаря структурированной и чуткой практике вы сможете тщательно пересмотреть свои мыслительные процессы и вытекающие из них привычки, которые пагубно сказываются на вашей жизни.',
])

const name = ref('Виктория Зарини')
const profession = ref('Коуч ICTA')

const img_url = ref(import('@/assets/photo.jpg'))
import _imports_0 from '@/assets/photo.jpg'


</script>



<style scoped>
.v-card-title {
  color: brown;
}

.v-card {
  min-height: 90%;
  align-items: center;
  justify-content: center;
}
</style>