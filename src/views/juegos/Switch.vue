<template>
	<div>
		<Portada
			imageUrl="/img/games/switch/octopath wallpaper.jpg"
			description="Octopath Traveler"
			logoUrl="/img/navbar/logo-nintendo.png"
			console="Nintendo"
			message="No te pierdas los mejores juegos de Nintendo"
		/>

		<div>
			<TitleH2 title="Juegos extraordinarios para Switch" class="w-screen md:w-112 mt-10 mb-12 md:ml-2" />
			<div>
				<CardJuego image="/img/games/switch/fifa 22 switch.jpeg" name="FIFA 22 Legacy Edition" :row="true">
					<template v-slot:description>
						<p class="mt-4">
							Desarrollado por Football ™, EA SPORTS ™ FIFA 22 Legacy Edition en Nintendo Switch ™ presenta los
							últimos kits, clubes y escuadrones de algunas de las mejores ligas de todo el mundo. También contará
							con algunos de los estadios más famosos del mundo, incluidos algunos nuevos en FIFA 22. Las funciones y
							modos de juego tendrán paridad con FIFA 21 en Nintendo Switch.
						</p>
					</template>
				</CardJuego>
			</div>
			<div id="horizon" class="bg-mh">
				<CardJuego
					image="/img/games/switch/mh.jpg"
					class="text-white"
					name="monster hunter stories 2"
					:row="true"
				>
					<template v-slot:description>
						<p class="mt-4">
							Nueva aventura en la segunda entrega de esta serie de juegos de rol por turnos ambientada en el mundo
							de Monster Hunter. Conviértete en un Rider y únete a monstruos amistosos para luchar a su lado
							embarcándote en una historia épica.
						</p>
					</template>
				</CardJuego>
			</div>
			<div>
				<CardJuego image="/img/games/switch/bravely default.jpeg" name="Bravely Default II" :row="true">
					<template v-slot:description>
						<p class="mt-4">
							Explora un mundo nuevo mientras luchas por sobrevivir con tu equipo personalizado de héroes en Bravely
							El juego Default II, una aventura de rol sorprendentemente hermosa. Equilibra el riesgo y la recompensa
							en batallas por turnos con los comandos Brave y Default.
						</p>
					</template>
				</CardJuego>
			</div>
			<div class="bg-little bg-cover">
				<CardJuego
					image="/img/games/switch/little nightmares II.jpg"
					class="text-white"
					name="Little Nightmares II"
					:row="true"
				>
					<template v-slot:description>
						<p class="mt-4">
							Es un juego de aventuras y suspenso en el que juegas como Mono, un niño atrapado en un mundo que ha
							sido distorsionado por la transmisión del zumbido de una torre lejana.
						</p>
					</template>
				</CardJuego>
			</div>
		</div>

		<div>
			<TitleH2 title="Juegos exclusivos de Nintedo" class="w-screen md:w-108 mt-10 mb-12 md:ml-2" />
			<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 border-b-2 border-gray-300">
				<CardJuego image="/img/games/switch/no more heroes.jpg" name="no more hero III">
					<template v-slot:description>
						<p class="mt-4">
							El legendario asesino Travis Touchdown hace su glorioso regreso a la locura en el juego No More Heroes
							III, ¡exclusivamente para el sistema Nintendo Switch ™!
						</p>
					</template>
				</CardJuego>
				<CardJuego image="/img/games/switch/mario party superstars.jpg" name="Mario party superstars">
					<template v-slot:description>
						<p class="mt-4">
							¡Llamando a todas las superestrellas! La Mario Party serie ™ está de vuelta con 5 tableros clásicos de
							los juegos Nintendo 64 Mario Party.
						</p>
					</template>
				</CardJuego>
				<CardJuego image="/img/games/switch/warioware.jpg" name="WarioWare: Get It Together">
					<template v-slot:description>
						<p class="mt-4">
							Wario está de vuelta en el mundo de los microjuegos,Enfréntate a más de 200 microjuegos rápidos y
							extravagantes, minijuegos ultrarrápidos llenos de diversión frenética, solo o con un amigo.
						</p>
					</template>
				</CardJuego>
				<CardJuego image="/img/games/switch/metroid dread.jpg" name="metroid dread">
					<template v-slot:description>
						<p class="mt-4">
							Únete al cazarrecompensas Samus Aran mientras intenta escapar de un mundo alienígena mortal plagado por
							una amenaza mecánica.
						</p>
					</template>
				</CardJuego>
			</div>
		</div>

		<div class="container w-full mt-10">
			<div class="flex justify-between items-center">
				<div class="ml-2">
					<TitleH2 title="Elige tu juego de Nintendo Switch" class="w-screen md:w-110 my-12" id="up" />
				</div>

				<!-- PAGINACION -->
				<div class="hidden lg:flex mr-3">
					<button
						class="rounded-full hover:ring-2 ring-red-700 p-0.5 flex items-center justify-center mr-2 "
						:class="{ 'opacity-25 cursor-default': gamesSwitch.meta.current_page === 1 }"
						:disabled="gamesSwitch.meta.current_page === 1"
						@click="showPrevGames"
					>
						<ChevronLeftIcon class="fill-current bg-red-700 rounded-full text-white w-10 h-10" />
					</button>

					<button
						class="rounded-full hover:ring-2 ring-red-700 p-0.5 flex items-center justify-center mr-2"
						:class="{ 'opacity-25 cursor-default': gamesSwitch.meta.current_page === gamesSwitch.meta.last_page }"
						:disabled="gamesSwitch.meta.current_page === gamesSwitch.meta.last_page"
						@click="showNextGames"
					>
						<ChevronRightIcon class="fill-current bg-red-700 rounded-full text-white w-10 h-10" />
					</button>
				</div>
			</div>
			<div
				class="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 my-10 justify-items-center"
			>
				<CardProductos v-for="game in gamesSwitch.data" :key="game.id" :game="game" />
			</div>
		</div>

		<!-- PAGINACION RESPONSIVE -->
		<div class="flex justify-around mt-8 lg:hidden mr-3">
			<a
				class="rounded-full active:ring-2 ring-red-700 p-0.5 flex items-center justify-center mr-2 "
				:class="{ 'opacity-25 cursor-default': gamesSwitch.meta.current_page === 1 }"
				:disabled="gamesSwitch.meta.current_page === 1"
				@click="showPrevGames"
				href="#up"
			>
				<ChevronLeftIcon class="fill-current bg-red-700 rounded-full text-white w-10 h-10" />
			</a>

			<a
				class="rounded-full active:ring-2 ring-red-700 p-0.5 flex items-center justify-center mr-2"
				:class="{ 'opacity-25 cursor-default': gamesSwitch.meta.current_page === gamesSwitch.meta.last_page }"
				:disabled="gamesSwitch.meta.current_page === gamesSwitch.meta.last_page"
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
		Portada,
		ChevronLeftIcon,
		ChevronRightIcon,
		TitleH2,
	},

	setup() {
		const store = useStore();
		onMounted(() => {
			store.dispatch('fetchDataGamesSwitch');
		});

		const gamesSwitch = computed(() => store.state.gamesSwitch);
		const cart = computed(() => store.state.cart);

		function showNextGames() {
			store.dispatch('fetchDataGamesSwitch', {
				page: gamesSwitch.value.meta.current_page + 1,
			});
		}

		function showPrevGames() {
			store.dispatch('fetchDataGamesSwitch', {
				page: gamesSwitch.value.meta.current_page - 1,
			});
		}

		return {
			gamesSwitch,
			cart,
			showNextGames,
			showPrevGames,
		};
	},
};
</script>
