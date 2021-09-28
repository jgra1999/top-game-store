<template>
	<Portada
		imageUrl="/img/games/ps5/horizon-forbidden-west-fondo-2.jpg"
		description="Horizon Forbbiden West"
		logoUrl="/img/logo-original.png"
		console="PS5"
		message="Busca tus juegos y consolas favoritos."
	/>

	<div class="container my-10 flex flex-col items-center">
		<div class="flex justify-center">
			<form action="" method="get" class="flex items-center">
				<select
					@change="selectSearch"
					name=""
					id="selectType"
					class="bg-transparent border-2 focus:outline-none focus:border-red-700 p-2 mr-5"
				>
					<option value="juegos">Juegos</option>
					<option value="consolas">Consolas</option>
					<option value="accesorios">Accesorios</option>
				</select>

				<!-- Buscador de juegos -->
				<div v-if="typeSearch == 'juegos'">
					<input
						type="text"
						placeholder="¿Que juego estas Buscando?"
						class="bg-transparent p-2 text-2xl border-b-2 focus:outline-none focus:border-red-700 "
						v-model="search.name"
					/>
					<button type="submit" @click.enter.prevent="searchGame(search.name)">
						<SearchIcon class="text-gray-400 hover:text-red-700 w-7 h-7" />
					</button>
				</div>

				<!-- Buscador de consolas -->
				<div v-if="typeSearch == 'consolas'">
					<input
						type="text"
						placeholder="¿Que consola estas Buscando?"
						class="bg-transparent w-96 p-2 text-2xl border-b-2 focus:outline-none focus:border-red-700 "
						v-model="search.name"
					/>
					<button type="submit" @click.enter.prevent="searchConsole(search.name)">
						<SearchIcon class="text-gray-400 hover:text-red-700 w-7 h-7" />
					</button>
				</div>

				<!-- Buscador de accesorios -->
				<div v-if="typeSearch == 'accesorios'">
					<input
						type="text"
						placeholder="¿Que accesorios estas Buscando?"
						class="bg-transparent w-96 p-2 text-2xl border-b-2 focus:outline-none focus:border-red-700 "
						v-model="search.name"
					/>
					<button type="submit" @click.enter.prevent="searchAccesories(search.name)">
						<SearchIcon class="text-gray-400 hover:text-red-700 w-7 h-7" />
					</button>
				</div>
			</form>
		</div>

		<!-- Resultado juegos -->
		<div v-if="typeSearch == 'juegos'">
			<div class="mt-10 flex flex-wrap justify-center gap-10">
				<CardSearch
					v-for="game in games.data"
					:key="game.id"
					:imageUrl="game.image_url"
					:name="game.name"
					:price="game.price"
				/>
			</div>
		</div>

		<!-- Resultado consolas -->
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

		<!-- Resultado accesorios -->
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
		</div>
	</div>
</template>

<script>
import Portada from '@/components/Utilidades/Portada.vue';
import CardSearch from '@/components/Cards/CardSearch.vue';

import { SearchIcon } from '@heroicons/vue/solid';

import useGames from '@/composables/useGames.js';
import useConsoles from '@/composables/useConsoles.js';
// import useAccesories from '@/composables/useAccesories.js';

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
			typeSearch: 'juegos',
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
		let { fetchGames, games } = useGames();
		let { fetchConsoles, consoles } = useConsoles();
		// let { fetchAccesories, accesories } = useAccesories();

		fetchGames();
		fetchConsoles();

		function searchGame(name) {
			fetchGames({
				search: true,
				name: name,
			});
		}

		function searchConsole(name) {
			fetchConsoles({
				search: true,
				name: name,
			});
		}

		// function searchAccesories(name) {
		// 	fetchAccesories({
		// 		search: true,
		// 		name: name,
		// 	});
		// }

		return {
			games,
			consoles,
			// accesories,
			searchGame,
			searchConsole,
			// searchAccesories,
		};
	},
};
</script>

<style></style>
