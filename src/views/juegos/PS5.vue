<template>
	<div>
		<Portada
			imageUrl="/img/games/ps5/horizon-forbidden-west-fondo-2.jpg"
			description="Horizon Forbbiden West"
			logoUrl="/img/games/ps5/ps5-logo-completo.png"
			console="PS5"
			message="Experimenta tus juegos favoritos en consolas Next-Gen"
		/>

		<div>
			<TitleH2 title="Juegos extraordinarios para Playstation 5" class="w-screen md:w-114 mt-10 mb-12 md:ml-2" />
			<div>
				<CardJuego image="/img/games/ps5/nba.jpg" name="NBA 2K22" :row="true">
					<template v-slot:description>
						<p class="mt-4 text-lg">
							NBA 2K22 es el título más reciente de la serie de videojuegos de baloncesto NBA 2K más vendida y de
							renombre mundial. Crea tu propio legado en el asfalto.
						</p>
					</template>
				</CardJuego>
			</div>
			<div id="horizon" class="bg-horizon bg-cover">
				<CardJuego
					image="/img/games/ps5/horizon-forbidden-west.jpg"
					name="Horizon Forbidden West"
					class="text-white"
					:row="true"
				>
					<template v-slot:description>
						<p class="mt-4 text-lg">
							Únete a Aloy mientras desafía la Forbidden West, una frontera majestuosa, aunque peligrosa, en la que
							se ocultan nuevas y misteriosas amenazas.
						</p>
					</template>
				</CardJuego>
			</div>
			<div>
				<CardJuego image="/img/games/ps5/farcry 6.jpg" name="farcry 6" :row="true">
					<template v-slot:description>
						<p class="mt-4 text-lg">
							Bienvenido a Yara, un paraíso tropical congelado en el tiempo. Far Cry 6 sumerge a los jugadores en el
							mundo lleno de adrenalina de una revolución guerrillera moderna.
						</p>
					</template>
				</CardJuego>
			</div>
			<div class="bg-demons bg-cover">
				<CardJuego image="/img/games/ps5/demons-souls.jpg" name="Demons Souls" class="text-white" :row="true">
					<template v-slot:description>
						<p class="mt-4 text-lg">
							Completamente reconstruido desde cero, este remake te invita a experimentar la inquietante historia y
							el despiadado combate de Demon's Souls.
						</p>
					</template>
				</CardJuego>
			</div>
		</div>

		<div>
			<TitleH2 title="Juegos exclusivos de Playstation" class="w-screen md:w-110 my-12" />
			<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 border-b-2 border-gray-300">
				<CardJuego image="/img/games/ps5/kena.jpg" name="Kena: Bridge of Spirits">
					<template v-slot:description>
						<p class="mt-4 text-lg">
							Sumérjase en una historia de acción y aventura ambientada en un mundo encantador, rico en exploración y
							combates vertiginosos. Juega como Kena, una joven guía espiritual que viaja a un pueblo abandonado en
							busca del santuario sagrado de la montaña.
						</p>
					</template>
				</CardJuego>
				<CardJuego image="/img/games/ps5/returnal.jpg" name="Returnal">
					<template v-slot:description>
						<p class="mt-4 text-lg">
							Diseñado para una rejugabilidad extrema, el mundo procedimental de Returnal te invita a desempolvarte
							frente a la derrota y enfrentarte a nuevos desafíos en evolución con cada renacimiento.
						</p>
					</template>
				</CardJuego>
				<CardJuego image="/img/games/ps5/godfall.jpg" name="GodFall">
					<template v-slot:description>
						<p class="mt-4 text-lg">
							Embárcate en la aventura en un juego de rol de acción y fantasía que utiliza el combate cuerpo a cuerpo
							en tercera persona de alto impacto para involucrar a los jugadores mientras buscan botines. Enfréntate
							a misiones desafiantes que te recompensarán con un botín que te hará girar la cabeza mientras derrotas
							a los ejércitos que se enfrentan a ti.
						</p>
					</template>
				</CardJuego>
				<CardJuego image="/img/games/ps5/ratched-clank-fondo.jpg" name="Ratchet and Clank: Rift Apart">
					<template v-slot:description>
						<p class="mt-4 text-lg">
							Salta de dimensión con Ratchet y Clank mientras se enfrentan a un malvado emperador de otra realidad.
						</p>
					</template>
				</CardJuego>
			</div>
		</div>

		<div class="container w-full mt-10">
			<div class="flex justify-between items-center">
				<TitleH2 title="Elige tu juego de Playstation 5" class="w-screen md:w-108 my-12" id="up" />
				<!-- PAGINACION -->
				<div class="hidden lg:flex mr-3">
					<button
						class="rounded-full hover:ring-2 ring-red-700 p-0.5 flex items-center justify-center mr-2 "
						:class="{ 'opacity-25 cursor-default': gamesPS5.meta.current_page === 1 }"
						:disabled="gamesPS5.meta.current_page === 1"
						@click="showPrevGames"
					>
						<ChevronLeftIcon class="fill-current bg-red-700 rounded-full text-white w-10 h-10" />
					</button>

					<button
						class="rounded-full hover:ring-2 ring-red-700 p-0.5 flex items-center justify-center mr-2"
						:class="{ 'opacity-25 cursor-default': gamesPS5.meta.current_page === gamesPS5.meta.last_page }"
						:disabled="gamesPS5.meta.current_page === gamesPS5.meta.last_page"
						@click="showNextGames"
					>
						<ChevronRightIcon class="fill-current bg-red-700 rounded-full text-white w-10 h-10" />
					</button>
				</div>
			</div>

			<div
				class="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 my-10 justify-items-center"
			>
				<CardProductos v-for="game in gamesPS5.data" :key="game.id" :game="game" />
			</div>
		</div>
		<!-- PAGINACION RESPOSIVE -->
		<div class="flex justify-around mt-8 lg:hidden mr-3">
			<a
				class="rounded-full active:ring-2 ring-red-700 p-0.5 flex items-center justify-center mr-2 "
				:class="{ 'opacity-25 cursor-default': gamesPS5.meta.current_page === 1 }"
				:disabled="gamesPS5.meta.current_page === 1"
				@click="showPrevGames"
				href="#up"
			>
				<ChevronLeftIcon class="fill-current bg-red-700 rounded-full text-white w-10 h-10" />
			</a>

			<a
				class="rounded-full active:ring-2 ring-red-700 p-0.5 flex items-center justify-center mr-2"
				:class="{ 'opacity-25 cursor-default': gamesPS5.meta.current_page === gamesPS5.meta.last_page }"
				:disabled="gamesPS5.meta.current_page === gamesPS5.meta.last_page"
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
			store.dispatch('fetchDataGamesPS5');
		});

		const gamesPS5 = computed(() => store.state.gamesPS5);
		const cart = computed(() => store.state.cart);

		function showNextGames() {
			store.dispatch('fetchDataGamesPS5', {
				page: gamesPS5.value.meta.current_page + 1,
			});
		}

		function showPrevGames() {
			store.dispatch('fetchDataGamesPS5', {
				page: gamesPS5.value.meta.current_page - 1,
			});
		}

		return {
			gamesPS5,
			cart,
			showNextGames,
			showPrevGames,
		};
	},
};
</script>
