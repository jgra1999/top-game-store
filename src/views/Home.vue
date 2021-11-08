<template>
	<div class="bg-gray-100 relative">
		<Slider />
		<SliderPhone />

		<!-- NOTICIAS -->

		<div class="container xl:w-11/12 mt-4 relative flex items-center sm:justify-center">
			<button id="left-arrow" @click="scrollLeft()" class="xl:hidden">
				<ChevronLeftIcon class="h-20 w-20 text-gray-400 hover:text-red-700 xl:absolute xl:top-24 xl:-left-16" />
			</button>

			<div class="w-full sm:w-96 md:w-full xl:full overflow-hidden" id="container__carousel">
				<div class="flex">
					<NewsElement
						url="/noticia-gta-trilogy-switch"
						title="GTA Trilogy Remastered"
						console="Nintendo Switch"
						img="./img/news/gta-trilogy.jpg"
					/>

					<NewsElement
						url="/noticia-new-world-estreno"
						title="Estreno de New World"
						console="PC"
						img="./img/news/new world.jpeg"
					/>

					<NewsElement
						url="/noticia-wolverine"
						title="Wolverine"
						console="Playstation 5"
						img="./img/news/wolverine.jpg"
					/>

					<NewsElement
						url="/noticia-god-of-war-ragnarok"
						title="God Of War Ragnarok"
						console="Playstation 4, Playstation 5"
						img="./img/news/gow ragnarok.jpeg"
					/>

					<NewsElement url="#" title="Análisis" console="Playstation 4. Playstation 5" img="./img/formula-1.jpg" />

					<NewsElement url="#" title="Análisis" console="Nintendo Switch" img="./img/mario-golf.jpg" />

					<NewsElement url="#" title="Análisis" console="Playstation 4. Playstation 5" img="./img/formula-1.jpg" />

					<NewsElement url="#" title="Análisis" console="Nintendo Switch" img="./img/mario-golf.jpg" />
				</div>
			</div>

			<button id="rightArrow" @click="scrollRight()" class="xl:hidden">
				<ChevronRightIcon class="h-20 w-20 text-gray-400 hover:text-red-700 xl:absolute xl:top-24 xl:-right-16" />
			</button>
		</div>

		<!-- PROXIMO LANZAMIENTO -->
		<div class="mt-10 relative">
			<img src="../assets/fondo-hades.jpg" alt="" class="hidden md:block" />
			<img src="../assets/fondo-hades-phone.jpg" alt="" class="md:hidden" />
			<div
				class="absolute bottom-12 sm:bottom-36 left-4 sm:left-20 md:left-4 md:bottom-24 w-94 sm:w-102 md:w-64 lg:w-96 xl:w-100 2xl:w-104 lg:top-12 xl:top-24"
			>
				<h2 class="text-white text-4xl sm:text-5xl md:text-3xl lg:text-5xl xl:text-6xl font-bold">HADES</h2>
				<h3 class="text-white text-lg sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-normal mt-5">
					PROXIMO LANZAMIENTO
				</h3>
				<p class="text-xs sm:text-lg md:text-xs xl:text-base text-white my-8">
					Desarrollado y editado por Supergiant Games para PC, Switch, PlayStation 4, Xbox One, PlayStation 5 y
					Xbox Series, es una aventura de acción tipo roguelike ambientada en la antigua Grecia, en la que
					deberemos escapar del inframundo enfrentándonos a toda clase de monstruos.
				</p>

				<button class="rounded-full hover:ring-2 ring-white pt-1.5 pb-2.5 lg:py-3 px-1">
					<a href="#" class="rounded-full font-bold text-xs lg:text-base text-black py-2 px-5 bg-white">
						Más información
					</a>
				</button>
			</div>

			<div class="lg:grid lg:grid-cols-3 gap-5 justify-items-center w-full absolute lg:-bottom-32 hidden">
				<div class=" text-center ">
					<img
						src="../assets/recomendaciones.jpg"
						alt=""
						class="rounded-xl mb-4 w-80 h-44 xl:w-96 xl:h-52 shadow-2xl hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
					/>
					<p class="lg:text-md xl:text-lg">Nuestras recomendaciones</p>
				</div>

				<router-link to="/top-juegos-rpg" class=" text-center ">
					<img
						src="../assets/top7.png"
						alt=""
						class="rounded-xl mb-4 w-80 h-44 xl:w-96 xl:h-52 shadow-2xl hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
					/>
					<p class="lg:text-md xl:text-lg">Top 6 juegos RPG</p>
				</router-link>

				<div class=" text-center ">
					<img
						src="../assets/mejores-switch.jpg"
						alt=""
						class="rounded-xl mb-4 w-80 h-44 xl:w-96 xl:h-52 shadow-2xl  hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
					/>
					<p class="lg:text-md xl:text-lg">Mejores juegos de Nintendo Switch</p>
				</div>
			</div>
		</div>

		<div class="flex flex-col items-center w-full mt-10 lg:hidden">
			<div class="text-center mb-4">
				<img
					src="../assets/recomendaciones.jpg"
					alt=""
					class="rounded-xl mb-4 w-80 h-44 shadow-2xl hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
				/>
				<p class="text-base">Nuestras recomendaciones</p>
			</div>

			<router-link to="/top-juegos-rpg" class=" text-center mb-4">
				<img
					src="../assets/top7.png"
					alt=""
					class="rounded-xl mb-4 w-80 h-44 xl:w-96 xl:h-52 shadow-2xl hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
				/>
				<p class="lg:text-md xl:text-lg">Top 6 juegos RPG</p>
			</router-link>

			<div class=" text-center mb-4">
				<img
					src="../assets/mejores-switch.jpg"
					alt=""
					class="rounded-xl mb-4 w-80 h-44 shadow-2xl  hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
				/>
				<p class="text-base">Mejores juegos de Nintendo Switch</p>
			</div>
		</div>

		<!-- ELIGE TU CONSOLA -->
		<div class="container w-full mt-24 lg:mt-48 border-t-2 border-b-2 border-gray-300 py-6">
			<TitleH2 title="Elige tu consola para jugar" class="w-104" />
			<div
				class="grid grid-cols-2 grid-row-2 mt-10 justify-items-center items-end gap-y-2 lg:grid-cols-4 grid-row-0"
			>
				<Consoles imageUrl="/img/consolas/ps5.png" name="Playstation 5" />
				<Consoles imageUrl="/img/consolas/ps4-pro.png" name="Playstation 4" />

				<div class=" w-48 text-center p-4 cursor-pointer hover:shadow-xl duration-300">
					<img src="/img/consolas/nintendo-switch.png" alt="image nintedo switch" class="h-28 w-full" />
					<p class="mt-5">Nintendo Switch</p>
				</div>

				<div class=" w-48 text-center p-4 cursor-pointer hover:shadow-xl duration-300">
					<img src="/img/consolas/nintendo-switch-lite.png" alt="image nintedo switch-lite" class="h-28 w-full" />
					<p class="mt-5">Nintendo Switch Lite</p>
				</div>
			</div>
		</div>

		<!-- NUEVOS LANZAMIENTOS -->
		<div class="container my-5">
			<div class="flex justify-between items-center">
				<div class="ml-2">
					<TitleH2 title="Nuevos Lanzamientos" />
				</div>

				<div class="hidden lg:flex mr-3">
					<button
						class="rounded-full hover:ring-2 ring-red-700 p-0.5 flex items-center justify-center mr-2 "
						:class="{ 'opacity-25 cursor-default': games.meta.current_page === 1 }"
						:disabled="games.meta.current_page === 1"
						@click="showPrevGames"
					>
						<ChevronLeftIcon class="fill-current bg-red-700 rounded-full text-white w-10 h-10" />
					</button>

					<button
						class="rounded-full hover:ring-2 ring-red-700 p-0.5 flex items-center justify-center mr-2"
						:class="{ 'opacity-25 cursor-default': games.meta.current_page === 3 }"
						:disabled="games.meta.current_page === 3"
						@click="showNextGames"
					>
						<ChevronRightIcon class="fill-current bg-red-700 rounded-full text-white w-10 h-10" />
					</button>
				</div>
			</div>

			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-5 justify-items-center my-12">
				<Producto v-for="game in games.data" :key="game.id" :imageUrl="game.image_url" />
			</div>
		</div>
	</div>
	<router-view />
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slideshow/Slider.vue';
import SliderPhone from '@/components/Slideshow/SliderPhone.vue';
import Producto from '@/components/Producto.vue';
import NewsElement from '@/components/carousel/Element.vue';
import Consoles from '@/components/Consoles.vue';
import TitleH2 from '@/components/Utilidades/TitleH2.vue';

import useGames from '@/composables/useGames.js';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid';

export default {
	name: 'Home',

	components: {
		Slider,
		SliderPhone,
		Producto,
		NewsElement,
		Consoles,
		ChevronLeftIcon,
		ChevronRightIcon,
		TitleH2,
	},

	methods: {
		scrollRight() {
			const carousel = document.getElementById('container__carousel');
			carousel.scrollLeft += carousel.scrollLeft = 350;
			if (window.innerWidth < 1024) {
				carousel.scrollLeft += carousel.offsetWidth;
			} else if (window.innerWidth > 1024 && window.innerWidth < 1280) {
				carousel.scrollLeft += carousel.scrollLeft = 312;
			} else if (window.innerWidth > 1280 && window.innerWidth < 1536) {
				carousel.scrollLeft += carousel.scrollLeft = 323;
			}
		},
		scrollLeft() {
			const carousel = document.getElementById('container__carousel');
			carousel.scrollLeft -= carousel.scrollLeft = 350;
			if (window.innerWidth < 1024) {
				carousel.scrollLeft -= carousel.offsetWidth;
			} else if (window.innerWidth > 1024 && window.innerWidth < 1280) {
				carousel.scrollLeft -= carousel.scrollLeft = 312;
			} else if (window.innerWidth > 1280 && window.innerWidth < 1536) {
				carousel.scrollLeft -= carousel.scrollLeft = 323;
			}
		},
	},

	setup() {
		let { fetchGames, games } = useGames();

		fetchGames();

		function showNextGames() {
			fetchGames({
				showNext: true,
				page: games.value.meta.current_page + 1,
			});
		}
		function showPrevGames() {
			fetchGames({
				showPrev: true,
				page: games.value.meta.current_page - 1,
			});
		}

		return {
			games,
			showNextGames,
			showPrevGames,
		};
	},
};
</script>

<style>
#container__carousel {
	scroll-behavior: smooth;
}
</style>
