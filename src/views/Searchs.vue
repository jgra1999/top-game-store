<template>
	<div class="w-full h-14 xl:h-4"></div>
	<div>
		<img src="/img/search.jpg" loading="lazy" alt="El juego que tanto has buscado" class="xl:h-110 w-full" />
	</div>

	<div class="container my-10 flex flex-col items-center">
		<div class="flex justify-center">
			<form method="get" class="flex items-center">
				<!-- Buscador de juegos -->
				<div class="flex justify-center mx-auto w-screen md:w-11/12 px-5">
					<input
						type="text"
						placeholder="¿Que juego Buscas?"
						class="bg-transparent p-2 w-full text-lg  md:text-2xl border-b-2 focus:outline-none focus:border-red-700 "
						v-model="search.name"
					/>
					<button type="submit" @click.enter.prevent="searchGame(search.name)">
						<SearchIcon class="text-gray-400 hover:text-red-700 w-7 h-7" />
					</button>
				</div>
			</form>
		</div>

		<div>
			<div class="mt-10 flex flex-wrap justify-center gap-10">
				<CardSearch v-for="game of games.data" :key="game.id" :game="game" />
			</div>
		</div>

		<!-- 
		<div v-if="typeSearch == 'consolas'">
			<div class="mt-10 flex flex-wrap justify-center gap-10">
				<CardSearch
					v-for="console in consoles.data"
					:key="console.id"
					:imageUrl="console.image_url"
					:name="console.name"
					:price="console.price"
				/>
			</div>
		</div>

		<div v-if="typeSearch == 'accesorios'">
			<div class="mt-10 flex flex-wrap justify-center gap-10">
				<CardSearch
					v-for="accesory in accesories.data"
					:key="accesory.id"
					:imageUrl="accesory.image_url"
					:name="accesory.name"
					:price="accesory.price"
				/>
			</div>
		</div> -->
	</div>
</template>

<script>
import Portada from '@/components/Utilidades/Portada.vue';
import CardSearch from '@/components/Cards/CardSearch.vue';

import { SearchIcon } from '@heroicons/vue/solid';

import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
	components: {
		Portada,
		SearchIcon,
		CardSearch,
	},

	data() {
		return {
			search: {
				name: '',
			},
		};
	},

	methods: {
		selectSearch() {
			let selectType = document.getElementById('selectType');
			let type = selectType.value;

			this.typeSearch = type;
		},
	},

	setup() {
		const store = useStore();
		onMounted(() => {
			store.dispatch('fetchDataGames');
		});

		const games = computed(() => store.state.games);
		const cart = computed(() => store.state.cart);

		function searchGame(name) {
			store.dispatch('fetchDataGames', {
				name: name,
			});
		}

		return {
			games,
			cart,
			searchGame,
		};
	},
};
</script>

<style></style>
