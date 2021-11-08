<template>
	<div>
		<Portada
			imageUrl="/img/games/ps4/god of war portada.jpg"
			description="God of War"
			logoUrl="/img/games/ps4/ps4 logo completo.png"
			console="PS4"
			message="Disfruta de grandes juegos de Playstation Studios"
		/>

		<div>
			<TitleH2 title="Juegos extraordinarios para Playstation 4" class="w-screen md:w-114 mt-10 mb-12 md:ml-2" />
			<div>
				<CardJuego image="/img/games/ps4/guardians of the galaxy.jpg" name="guardians of the galaxy" :row="true">
					<template v-slot:description>
						<p class="mt-4 text-lg">
							Enciende las botas jet de Star-Lord para un viaje salvaje a través del cosmos en este juego de acción y
							aventuras en tercera persona, una nueva versión de Guardianes de la Galaxia de Marvel.
						</p>
					</template>
				</CardJuego>
			</div>
			<div id="horizon" class="bg-ashes bg-cover">
				<CardJuego image="/img/games/ps4/house of ashes.jpg" name="house of ashes" class="text-white" :row="true">
					<template v-slot:description>
						<p class="mt-4 text-lg">
							Una unidad militar que busca armas químicas descubre algo mucho más letal. En las ruinas de un templo
							sumerio enterrado en las profundidades del desierto de Arabia, algo maligno se despierta.
						</p>
					</template>
				</CardJuego>
			</div>
			<div>
				<CardJuego image="/img/games/ps4/riders republic.jpg" name="riders republic" :row="true">
					<template v-slot:description>
						<p class="mt-4 text-lg">
							¡Salta al enorme campo de juegos multijugador de Riders Republic ™! Toma tu bicicleta, esquís, tabla de
							snowboard o traje de alas y explora un paraíso deportivo de mundo abierto donde las reglas son tuyas
							para hacerlas o romperlas.
						</p>
					</template>
				</CardJuego>
			</div>
			<div class="bg-black4blood bg-cover">
				<CardJuego image="/img/games/ps4/black 4 blood.jpg" name="black 4 blood" class="text-white" :row="true">
					<template v-slot:description>
						<p class="mt-4 text-lg">
							Únete a la guerra contra los Ridden en un emocionante juego de disparos en primera persona cooperativo
							de los creadores de Left 4 Dead.
						</p>
					</template>
				</CardJuego>
			</div>
		</div>

		<div>
			<TitleH2 title="Juegos exclusivos de Playstation" class="w-screen md:w-110 my-12" />
			<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 border-b-2 border-gray-300">
				<CardJuego image="/img/games/ps4/ghost of tushima.jpg" name="ghost of tushima">
					<template v-slot:description>
						<p class="mt-4 text-lg">
							Forja un nuevo camino y emplea tácticas de guerra poco convencionales para liberar Tsushima. Desafía a
							tus enemigos con tu katana, domina el arco para eliminar las amenazas lejanas, aprende tácticas de
							sigilo para emboscar a los enemigos y explora una nueva historia en la Isla Iki.
						</p>
					</template>
				</CardJuego>
				<CardJuego image="/img/games/ps4/sackboy.jpg" name="sackboy">
					<template v-slot:description>
						<p class="mt-4 text-lg">
							El icónico héroe de PlayStation®, Sackboy, regresa a la acción impresionante con una enorme, divertida
							y frenética aventura de plataformas multijugador en 3D, ¡y una nueva y atrevida saquedad.!
						</p>
					</template>
				</CardJuego>
				<CardJuego image="/img/games/ps4/miles morales.jpg" name="spider-man: miles morales">
					<template v-slot:description>
						<p class="mt-4 text-lg">
							Experimenta el ascenso de Miles Morales y sé testigo de cómo el nuevo héroe domina nuevos poderes
							increíbles y explosivos para convertirse en su propia versión de Spider-Man.
						</p>
					</template>
				</CardJuego>
				<CardJuego image="/img/games/ps4/god of war.jpg" name="God of war">
					<template v-slot:description>
						<p class="mt-4 text-lg">
							Kratos vuelve a ser padre. Como mentor y protector de Atreus, un hijo decidido a ganarse su respeto, se
							ve obligado a lidiar y controlar la rabia que lo ha definido durante mucho tiempo mientras se encuentra
							en un mundo muy peligroso con su hijo.
						</p>
					</template>
				</CardJuego>
			</div>
		</div>

		<div class="container w-full mt-10">
			<div class="flex justify-between items-center">
				<div>
					<TitleH2 title="Elige tu juego de Playstation 4" class="w-screen md:w-108 my-12" id="up" />
				</div>
				<!-- PAGINACION -->
				<div class="hidden lg:flex mr-3">
					<button
						class="rounded-full hover:ring-2 ring-red-700 p-0.5 flex items-center justify-center mr-2 "
						:class="{ 'opacity-25 cursor-default': gamesPS4.meta.current_page === 1 }"
						:disabled="gamesPS4.meta.current_page === 1"
						@click="showPrevGames"
					>
						<ChevronLeftIcon class="fill-current bg-red-700 rounded-full text-white w-10 h-10" />
					</button>

					<button
						class="rounded-full hover:ring-2 ring-red-700 p-0.5 flex items-center justify-center mr-2"
						:class="{ 'opacity-25 cursor-default': gamesPS4.meta.current_page === gamesPS4.meta.last_page }"
						:disabled="gamesPS4.meta.current_page === gamesPS4.meta.last_page"
						@click="showNextGames"
					>
						<ChevronRightIcon class="fill-current bg-red-700 rounded-full text-white w-10 h-10" />
					</button>
				</div>
			</div>

			<div
				class="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 my-10 justify-items-center"
			>
				<CardProductos v-for="game in gamesPS4.data" :key="game.id" :game="game" />
			</div>
		</div>

		<!-- PAGINACION RESPOSIVE -->
		<div class="flex justify-around mt-8 lg:hidden mr-3">
			<a
				class="rounded-full active:ring-2 ring-red-700 p-0.5 flex items-center justify-center mr-2 "
				:class="{ 'opacity-25 cursor-default': gamesPS4.meta.current_page === 1 }"
				:disabled="gamesPS4.meta.current_page === 1"
				@click="showPrevGames"
				href="#up"
			>
				<ChevronLeftIcon class="fill-current bg-red-700 rounded-full text-white w-10 h-10" />
			</a>

			<a
				class="rounded-full active:ring-2 ring-red-700 p-0.5 flex items-center justify-center mr-2"
				:class="{ 'opacity-25 cursor-default': gamesPS4.meta.current_page === gamesPS4.meta.last_page }"
				:disabled="gamesPS4.meta.current_page === gamesPS4.meta.last_page"
				@click="showNextGames"
				href="#up"
			>
				<ChevronRightIcon class="fill-current bg-red-700 rounded-full text-white w-10 h-10" />
			</a>
		</div>
	</div>
</template>

<script>
import CardProductos from '@/components/Cards/CardProductos.vue';
import CardJuego from '@/components/Cards/CardJuego.vue';
import Portada from '@/components/Utilidades/Portada.vue';
import TitleH2 from '@/components/Utilidades/TitleH2.vue';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid';

import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
	components: {
		CardProductos,
		CardJuego,
		ChevronLeftIcon,
		ChevronRightIcon,
		Portada,
		TitleH2,
	},

	setup() {
		const store = useStore();
		onMounted(() => {
			store.dispatch('fetchDataGamesPS4');
		});

		const gamesPS4 = computed(() => store.state.gamesPS4);
		const cart = computed(() => store.state.cart);

		function showNextGames() {
			store.dispatch('fetchDataGamesPS4', {
				page: gamesPS4.value.meta.current_page + 1,
			});
		}

		function showPrevGames() {
			store.dispatch('fetchDataGamesPS4', {
				page: gamesPS4.value.meta.current_page - 1,
			});
		}

		return {
			gamesPS4,
			cart,
			showNextGames,
			showPrevGames,
		};
	},
};
</script>
