<template>
	<v-row justify="space-around" class="mt-8" no-gutters>
		<v-col v-for="service in services" :key="service.title" cols="12" sm="6" md="4" lg="3" class="mt-16" max-height>
			<v-card justify="center" align="center" width="100%" class="mx-auto my-8 rounded-xl h-90"
				color="brown-lighten-4" evalated="16">
				<v-card-title class="text-h6 text-center mt-8" text-color="brown-darken-4">{{ service.title
					}}</v-card-title>
				<v-card-subtitle class="text-center roboto-condensed text-subtitle-1 mt-8">{{ service.subtitle
					}}</v-card-subtitle>
				<v-card-text class="text-justify text-body-2 mt-8">{{ service.description }}</v-card-text>
				<v-divider class="mx-2" vertical></v-divider>
				<v-card-actions>
					<v-btn class="flex-grow-1" height="48" variant="outlined" rounded @click="navigateTo(service.load)">
						Узнать подробнее
					</v-btn>
				</v-card-actions>
			</v-card>

		</v-col>
	</v-row>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const navigateTo = (path) => {
	router.push(path)
}

const services = ref([
	{
		title: 'Менторинг',
		subtitle: 'Зaкажите сессию сегодня',
		description: 'Наставничество для преодоления трудностей и принятия мер по личному совершенствованию',
		load: "/Contacts"
	},
	{
		title: 'Онлайн продукты',
		subtitle: 'Реализуйте свой потенциал',
		description: 'Онлайн продукты для вашего карьерного роста, личной самореализации и благополучия.',
		load: "/WebProduct"
	},
	{
		title: 'Консультации',
		subtitle: 'Развивайте свои таланты',
		description: 'Улучшите психическое здоровье и повысьте производительность ваших сотрудников',
		load: "/Contacts"
	},
])

const drawer = ref(null)
const dialog = ref(false)
</script>
<style>
.v-card-title {
	color: brown;
}

.v-card {
	min-height: 90%;
	align-items: center;
	justify-content: center;
}
</style>