<template>
	<div>
		<Portada
			imageUrl="/img/switch/octopath wallpaper.jpg"
			description="Octopath Traveler"
			logoUrl="/img/navbar/logo-nintendo.png"
			console="Nintendo"
			message="No te pierdas los mejores juegos de Nintendo"
		/>

		<div>
			<h2 class="text-2xl sm:text-3xl md:text-4xl mx-2 lg:ml-5 my-12 font-bold text-red-700">
				Juegos extraordinarios para Playstation 5
			</h2>
			<div>
				<CardJuego image="/img/ps5/nba.jpg" name="NBA 2K22" :row="true">
					<template v-slot:description>
						<p class="mt-4">
							NBA 2K22 es el título más reciente de la serie de videojuegos de baloncesto NBA 2K más vendida y de
							renombre mundial. Crea tu propio legado en el asfalto.
						</p>
					</template>
				</CardJuego>
			</div>
			<div id="horizon" class="bg-horizon bg-cover">
				<CardJuego image="/img/ps5/horizon-forbidden-west.jpg" name="Horizon Forbidden West" :row="true">
					<template v-slot:description>
						<p class="mt-4">
							Únete a Aloy mientras desafía la Forbidden West, una frontera majestuosa, aunque peligrosa, en la que
							se ocultan nuevas y misteriosas amenazas.
						</p>
					</template>
				</CardJuego>
			</div>
			<div>
				<CardJuego image="/img/ps5/godfall.jpg" name="GodFall" :row="true">
					<template v-slot:description>
						<p class="mt-4">
							Embárcate en la aventura en un juego de rol de acción y fantasía que utiliza el combate cuerpo a cuerpo
							en tercera persona de alto impacto para involucrar a los jugadores mientras buscan botines. Enfréntate
							a misiones desafiantes que te recompensarán con un botín que te hará girar la cabeza mientras derrotas
							a los ejércitos que se enfrentan a ti.
						</p>
					</template>
				</CardJuego>
			</div>
			<div class="bg-demons bg-cover">
				<CardJuego image="/img/ps5/demons-souls.jpg" name="Demons Souls" :row="true">
					<template v-slot:description>
						<p class="mt-4">
							Completamente reconstruido desde cero, este remake te invita a experimentar la inquietante historia y
							el despiadado combate de Demon's Souls.
						</p>
					</template>
				</CardJuego>
			</div>
		</div>

		<div>
			<h2 class="text-2xl sm:text-3xl md:text-4xl mx-2 lg:ml-5 my-12 font-bold text-red-700">
				Juegos exclusivos de Playstation
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 border-b-2 border-gray-300">
				<CardJuego image="/img/ps5/immortals.jpeg" name="Immortals Fenyx Rising">
					<template v-slot:description>
						<p class="mt-4">
							Un juego de mundo abierto ambientado en la mitología griega que ofrece una increíble libertad de
							exploración, personajes cargados de magia, los mejores puzles que hemos visto en mucho tiempo... y un
							inevitable parecido con Zelda Breath of the Wild.
						</p>
					</template>
				</CardJuego>
				<CardJuego image="/img/ps5/returnal.jpg" name="Returnal">
					<template v-slot:description>
						<p class="mt-4">
							Diseñado para una rejugabilidad extrema, el mundo procedimental de Returnal te invita a desempolvarte
							frente a la derrota y enfrentarte a nuevos desafíos en evolución con cada renacimiento.
						</p>
					</template>
				</CardJuego>
				<CardJuego image="/img/ps5/village.jpg" name="Resident Evil 8: Village">
					<template v-slot:description>
						<p class="mt-4">
							Experimente el survival horror como nunca antes en la octava entrega principal de la histórica
							franquicia Resident Evil.
						</p>
					</template>
				</CardJuego>
				<CardJuego image="/img/ps5/ratched-clank-fondo.jpg" name="Ratchet and Clank: Rift Apart">
					<template v-slot:description>
						<p class="mt-4">
							Salta de dimensión con Ratchet y Clank mientras se enfrentan a un malvado emperador de otra realidad.
						</p>
					</template>
				</CardJuego>
			</div>
		</div>

		<div class="container w-full mt-10">
			<div class="flex justify-between items-center">
				<div class="ml-2">
					<h2 class="text-2xl sm:text-3xl md:text-4xl mx-2 lg:ml-5 my-12 font-bold text-red-700" id="up">
						Nuevos lanzamientos
					</h2>
				</div>

				<!-- PAGINACION -->
				<div class="hidden lg:flex mr-3">
					<button
						class="rounded-full h-10 w-10 flex items-center justify-center bg-red-700 mr-2 "
						:class="{ 'opacity-25 cursor-default': gamesSwitch.meta.current_page === 1 }"
						:disabled="gamesSwitch.meta.current_page === 1"
						@click="showPrevGames"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							class="fill-current text-white"
						>
							<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
						</svg>
					</button>

					<button
						class="rounded-full h-10 w-10 flex items-center justify-center bg-red-700"
						:class="{ 'opacity-25 cursor-default': gamesSwitch.meta.current_page === gamesSwitch.meta.last_page }"
						:disabled="gamesSwitch.meta.current_page === gamesSwitch.meta.last_page"
						@click="showNextGames"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							class="fill-current text-white"
						>
							<path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
						</svg>
					</button>
				</div>
			</div>
			<div
				class="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 mt-10 justify-items-center"
			>
				<CardProductos
					v-for="game in gamesSwitch.data"
					:key="game.id"
					:imageUrl="game.image_url"
					:price="game.price"
					:name="game.name"
				/>
			</div>
		</div>

		<!-- PAGINACION RESPONSIVE -->
		<div class="flex justify-around mt-8 lg:hidden mr-3">
			<a
				class="rounded-full h-10 w-10 flex items-center justify-center bg-red-700 mr-2 "
				:class="{ 'opacity-25 cursor-default': gamesSwitch.meta.current_page === 1 }"
				:disabled="gamesSwitch.meta.current_page === 1"
				@click="showPrevGames"
				href="#up"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					class="fill-current text-white"
				>
					<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
				</svg>
			</a>

			<a
				class="rounded-full h-10 w-10 flex items-center justify-center bg-red-700"
				:class="{ 'opacity-25 cursor-default': gamesSwitch.meta.current_page === gamesSwitch.meta.last_page }"
				:disabled="gamesSwitch.meta.current_page === gamesSwitch.meta.last_page"
				@click="showNextGames"
				href="#up"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					class="fill-current text-white"
				>
					<path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
				</svg>
			</a>
		</div>
	</div>
</template>

<script>
import CardProductos from '@/components/Cards/CardProductos.vue';
import CardJuego from '@/components/Cards/CardJuego.vue';
import Portada from '@/components/Utilidades/Portada.vue';

import useGamesSwitch from '@/composables/games/useGamesSwitch.js';

export default {
	components: {
		CardProductos,
		CardJuego,
		Portada,
	},

	setup() {
		let { fetchGamesSwitch, gamesSwitch } = useGamesSwitch();

		fetchGamesSwitch();

		function showNextGames() {
			fetchGamesSwitch({
				showNext: true,
				page: gamesSwitch.value.meta.current_page + 1,
			});
		}
		function showPrevGames() {
			fetchGamesSwitch({
				showPrev: true,
				page: gamesSwitch.value.meta.current_page - 1,
			});
		}

		return {
			gamesSwitch,
			showNextGames,
			showPrevGames,
		};
	},
};
</script>
