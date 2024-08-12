<template>

	<v-container fluid id="card-container" class="  mt-8 align-center justify-center">
		<v-divider class="mx-2" vertical></v-divider>
		<v-card class="mx-auto my-8 rounded-xl h-90" max-width="800" outlined justify="center" align="center"
			width="100%" color="brown-lighten-4" evalated="16">
			<v-card-title class="text-lg-center">
				Электронная библиотека по психологии и коучингу
			</v-card-title>
			<v-card-subtitle>
				Пожизненная подписка
			</v-card-subtitle>
			<v-card-text class="text-lg-left">
				Библиотека электронных книг по психологии и коучингу, которые можно скачать в любое удобное время.

				Удобный формат закрытого телеграм-канала. Книги будут всегда под рукой в Вашем телефоне.

				Библиотека постоянно пополняется. К каждой книге имеется описание. Файлы книг в pdf-формате.


			</v-card-text>
			<v-card-actions>
				<v-btn color="primary" @click="openDialog">Получить</v-btn>
			</v-card-actions>
		</v-card>
	</v-container>
</template>

<script>
import {
	ref
} from 'vue'

const drawer = ref(null)
const dialog = ref(false)
</script>

<style>
.v-card-title {
	color: brown;
	text-align: center;
}

.v-card-text {
	text-align: left;
}
</style>
