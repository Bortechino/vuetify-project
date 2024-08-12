<template>

	<v-container fluid id="card-container" class="  mt-8 align-center justify-center">
		<v-divider class="mx-2" vertical></v-divider>
		<v-card class="mx-auto my-8 rounded-xl h-90" max-width="800" outlined justify="center" align="center"
			width="100%" color="brown-lighten-4" evalated="16">
			<v-card-title class="text-lg-center">
				Коуч — сессия
			</v-card-title>
			<v-card-subtitle>
				онлайн-консультация
			</v-card-subtitle>
			<v-card-text class="text-lg-left">
				<p>
					Коуч—сессия онлайн 50 минут от сертифицированного коуча ICTA.</p>

				<p><b>Я работаю с вопросами:</b></p>
				<ul class="text-lg-left">
					<li> Как достичь поставленной цели.</li>
					<li> Как справиться с внутренними страхами, ограничивающими убеждениями и комплексами.</li>
					<li>Как принять себя, раскрыть внутренние ресурсы, восстановить энергию и баланс в жизни.</li>
					<li>Проработка взаимоотношений с окружающим миром.</li>
					<li> Проработка эмоций, эмоциональный интеллект и выход в ресурсное состояние.</li>
					<li>Найти свою суперсилу, призвание и любимое дело.</li>
					<li>Как найти свои истинные мечты и желания и воплатить их в реальность.</li>
				</ul>


			</v-card-text>
			<v-card-actions>
				<v-btn color="primary" @click="openDialog">Записаться</v-btn>
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
