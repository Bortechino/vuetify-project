<template>

	<v-container fluid id="card-container" class="  mt-8 align-center justify-center">
		<v-divider class="mx-2" vertical></v-divider>
		<v-row>
			<v-col cols="12" sm="6" md="6" class="mb-4">
				<v-card class="mx-auto my-8 rounded-xl h-90" max-width="800" outlined justify="center" align="center"
					width="100%" color="brown-lighten-4" evalated="16">
					<v-card-title class="text-lg-center">
						Коуч — сессия
					</v-card-title>
					<v-card-subtitle>
						онлайн-консультация
					</v-card-subtitle>
					<v-card-text class="text-lg-left">
						<br>
						<p>
							Коуч—сессия онлайн 50 минут от сертифицированного коуча ICTA.</p>
						<br>
						<p><b>Я работаю с вопросами:</b></p>
						<br>
						<ul class="text-lg-left">
							<li> Как достичь поставленной цели.</li>
							<li> Как справиться с внутренними страхами, ограничивающими убеждениями и комплексами.</li>
							<li>Как принять себя, раскрыть внутренние ресурсы, восстановить энергию и баланс в жизни.
							</li>
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
			</v-col>
			<v-spacer></v-spacer>
			<v-col cols="12" sm="6" md="6" class="mb-4">
				<v-card class="mx-auto my-8 rounded-xl h-90" max-width="800" outlined justify="center" align="center"
					width="100%" color="brown-lighten-4" evalated="16">
					<v-card-title class="text-lg-center">
						Эзотерический коучинг
					</v-card-title>
					<v-card-subtitle>
						онлайн-консультация
					</v-card-subtitle>
					<v-card-text class="text-lg-left">
						<p>
							Эзотерический коучинг — это комплексная профессиональная эзотерическая помощь в достижении
							жизненных целей.На сессии мы найдём максимально эффективный путь для достижения желаемого
							результата.</p>

						<p><b>Возможности эзотерического коучинга:</b></p>
						<ul class="text-lg-left">
							<li> Помощь в осознании истинных потребностей</li>
							<li> Выявление причин, блокирующих достижение желаемого результата</li>
							<li> Устраниение блоков.</li>
							<li>Определение и постановка новых целей и разработка плана.
							</li>
							<li>Создание всех возможностей для достижения желаемого результата.</li>
							<li> Проработка эмоций, эмоциональный интеллект и выход в ресурсное состояние.</li>
							<li>Анализ всех вероятностей при моделировании будущих событий.</li>
							<li>Рекомендации по выбору наиболее эффективных путей к достижению желаемого результата.
							</li>
						</ul>


					</v-card-text>
					<v-card-actions>
						<v-btn color="primary" @click="openDialog">Записаться</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
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
