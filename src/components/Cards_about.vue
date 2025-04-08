<template>
    <v-row justify="center" class="mt-2" no-gutters>
        <v-col cols="12" sm="12" md="12" lg="8" class="mt-2">
            <v-card class="mx-auto my-8 h-90 rounded-xl" color="brown-lighten-4" elevated="16">
                <v-card-title class="text-h6 text-center mt-8" text-color="brown-darken-4">
                    {{ titles }}
                </v-card-title>
                <v-card-subtitle class="text-center roboto-condensed text-subtitle-1 mt-8">IT | БИЗНЕС | КОУЧИНГ |
                    ЭЗОТЕРИКА</v-card-subtitle>
                <v-card-text class="text-justify text-body-2 mt-8">
                    <p v-for="(paragraph, index) in paragraphs" :key="index">
                        {{ paragraph }}
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
        <v-spacer></v-spacer>

        <v-col cols="12" sm="6" md="6" lg="3" class="mt-8">
            <v-sheet class="mx-auto text-xs-center border rounded-xl"><v-img :width="300" aspect-ratio="16/9"
                    class="mx-auto" :src="_imports_0" alt="Photo" /></v-sheet>
            <!--v-card color="brown-lighten-4" elevated="16" class="ma-3 text-xs-center rounded-xl">
        <v-img :width="300" aspect-ratio="16/9" class="mx-auto" :src="_imports_0" alt="Photo" />

        <v-card-title class="text-h6 text-center mt-8" text-color="brown-darken-4">
          {{ name }}<br>
        </v-card-title>
        <v-card-subtitle class="text-h6 text-center">{{ profession }}</v-card-subtitle>
      </v-card-->
        </v-col>
    </v-row>
</template>

<script setup>
import { ref } from 'vue'


const titles = ref('Обо мне')

const paragraphs = ref([


    '• Программист (cоздала свою IT компанию, которая работает со всем миром )',
    '• Предпринматель (первый свой бизнес открыла в 18 лет), а первые свои деньги заработала в 12 лет, организовав в школе кружок для рукодельниц.)',
    '• Коуч  ICTA (была одной из лучщих слушателей курса, уже во время обучения брала клиентов и доводила их до результата. Большинство вопросов клиентов может решить за одну консультацию)',
    '• Экономист-маркетолог  (получила высшее экономическое образование, около 10 лет работала с предпренимателями в качестве маркетолога-копирайтера)',
    '• Эзотерический коуч (в своей работе совмещает знания из коучинга и эзотерические знания. Иногда человеку необходима некая магическая помощь помимо коуч-сессии, которая помогает быстрее прийти из точки настоящего в желаемую точку Вашего счастливого будушего.)',

])

const name = ref('Виктория Зарини')
const profession = ref('Коуч ICTA')

const img_url = ref(import('@/assets/diploma1.png'))
import _imports_0 from '@/assets/diploma1.png'


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