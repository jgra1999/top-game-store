<template>
	<div class="bg-gray-100 relative">
		<Slider />
		<SliderPhone />

		<!-- NOTICIAS -->

		<div class="mt-10">
			<div class="relative w-screen lg:w-11/12 mx-auto flex items-center justify-around lg:block">
				<button class="left-arrow xl:hidden">
					<ChevronLeftIcon
						class=" h-12 w-12 md:h-20 md:w-20 text-gray-400 hover:text-red-700 lg:absolute inset-y-2/4 -left-16"
					/>
				</button>

				<div id="carousel__lista" class="overflow-hidden">
					<NewsElement
						url="/noticia-juego-multiversus"
						title="Multiversus"
						console="Playstation, Xbox, PC"
						img="./img/news/MultiVersus.jpg"
					/>

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
				</div>
				<button class="right-arrow xl:hidden">
					<ChevronRightIcon
						class=" h-12 w-12 md:h-20 md:w-20 text-gray-400 hover:text-red-700 lg:absolute inset-y-2/4 -right-16"
					/>
				</button>
			</div>
		</div>

		<!-- PROXIMO LANZAMIENTO -->
		<div class="mt-10 relative">
			<img src="/img/mounth/gta.jpg" alt="" class="hidden md:block" />
			<img src="/img/mounth/gta mobile.jpg" alt="" class="md:hidden" />
			<div
				class="absolute bottom-6 sm:bottom-36 left-4 sm:left-20 md:left-4 md:bottom-24 w-94 sm:w-102 md:w-64 lg:w-96 xl:w-100 2xl:w-104 lg:top-12 xl:top-24"
			>
				<h2 class="text-white text-4xl sm:text-5xl md:text-3xl lg:text-5xl xl:text-6xl font-bold">
					GTA TRILOGY REMASTERED
				</h2>
				<h3 class="text-white text-lg sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-normal mt-5">
					LANZAMIENTO DEL MES
				</h3>
				<p class="text-xs sm:text-lg md:text-xs xl:text-base text-white my-8">
					Es una compilación 2021 de tres juegos de acción y aventura en los Grand Theft Auto serie: Grand Theft
					Auto III, Grand Theft Auto: Vice City, y Grand Theft Auto: San Andreas. Fue desarrollado por Grove Street
					Games y publicado por Rockstar Games . Los tres juegos han sido remasterizados , con mejoras visuales y
					mejoras en la jugabilidad.
				</p>

				<router-link
					to="/noticia-gta-trilogy-switch"
					class="rounded-full hover:ring-2 ring-white pt-1.5 pb-2.5 lg:py-3 px-1"
				>
					<a href="#" class="rounded-full font-bold text-xs lg:text-base text-black py-2 px-5 bg-white">
						Más información
					</a>
				</router-link>
			</div>

			<div class="lg:grid lg:grid-cols-3 gap-5 justify-items-center w-full absolute lg:-bottom-32 hidden">
				<router-link to="/top-juegos-rpg-nintendo-switch" class=" text-center ">
					<img
						src="/img/blog/post1/top switch.jpg"
						alt="imagen top 6 juegos de nintendo swtich"
						class="rounded-xl mb-4 w-94 h-44 xl:w-96 xl:h-48 shadow-2xl hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
					/>
					<p class="lg:text-md xl:text-lg font-semibold">Top 6 juegos RPG de Switch</p>
				</router-link>

				<router-link to="/mejores-consolas-2021" class=" text-center ">
					<img
						src="/img/blog/post2/consolas.jpg"
						alt=""
						class="rounded-xl mb-4 w-94 h-44 xl:w-96 xl:h-48 shadow-2xl hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
					/>
					<p class="lg:text-md xl:text-lg font-semibold">Mejores consolas de este 2021</p>
				</router-link>

				<router-link to="/mejores-juegos-en-oferta-de-playstation" class=" text-center ">
					<img
						src="/img/blog/post3/ofertas ps.jpg"
						alt=""
						class="rounded-xl mb-4 w-94 h-44 xl:w-96 xl:h-48 shadow-2xl  hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
					/>
					<p class="lg:text-md xl:text-lg font-semibold">Mejores Ofertas de Playstation Noviembre</p>
				</router-link>
			</div>
		</div>
		<!-- blog responsive -->
		<div class="flex flex-col items-center w-full mt-10 lg:hidden">
			<router-link to="/top-juegos-rpg-nintendo-switch" class=" text-center mb-4">
				<img
					src="/img/blog/post1/top switch.jpg"
					alt=""
					class="rounded-xl mb-4 w-80 h-44 xl:w-96 xl:h-52 shadow-2xl hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
				/>
				<p class="font-semibold">Top 6 juegos RPG de Switch</p>
			</router-link>

			<router-link to="/mejores-consolas-2021" class="text-center mb-4">
				<img
					src="/img/blog/post2/consolas.jpg"
					alt=""
					class="rounded-xl mb-4 w-80 h-44 shadow-2xl hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
				/>
				<p class="font-semibold">Mejores consolas de este 2021</p>
			</router-link>

			<router-link to="/mejores-juegos-en-oferta-de-playstation" class=" text-center mb-4">
				<img
					src="/img/blog/post3/ofertas ps.jpg"
					alt=""
					class="rounded-xl mb-4 w-80 h-44 shadow-2xl  hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
				/>
				<p class="font-semibold">Mejores Ofertas de Playstation Noviembre</p>
			</router-link>
		</div>

		<!-- GIFT CARDS -->
		<div class="container w-full mt-24 lg:mt-48 border-t-2 border-b-2 border-gray-300 py-6">
			<TitleH2 title="Consigue tu Gift Cards" class="w-80 md:w-100" />
			<div
				class="mt-10 grid justify-items-center gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-x-20 2xl:px-10"
			>
				<div class="flex flex-col items-center bg-white rounded-xl shadow-lg p-3 w-80 h-96">
					<img
						src="/img/gift cards/ps gift cards.png"
						alt="Playstation gift card"
						loading="lazy"
						class="w-4/5 h-64 rounded-xl"
					/>

					<div class="text-left w-4/5 mt-3">
						<p class="text-lg font-semibold">Playstation Store Gift Card</p>
						<p class="text-red-700 font-bold">10$ - 100$</p>
					</div>

					<BtnGiftCards card="Hola buenas, quisiera comprar una gift card de Playstation Store" />
				</div>

				<div class="flex flex-col items-center bg-white rounded-xl shadow-lg p-3 w-80 h-96">
					<img
						src="/img/gift cards/nintendo gift cards.png"
						alt="Playstation gift card"
						loading="lazy"
						class="w-4/5 h-64 rounded-xl"
					/>

					<div class="text-left w-4/5 mt-3">
						<p class="text-lg font-semibold ">Nintedo eShop Gift Card</p>
						<p class="text-red-700 font-bold">10$ - 100$</p>
					</div>

					<BtnGiftCards card="Hola buenas, quisiera comprar una gift card de Nintedo " />
				</div>

				<div class="flex flex-col items-center bg-white rounded-xl shadow-lg p-3 w-80 h-96">
					<img
						src="/img/gift cards/ps plus gift cards.png"
						alt="Playstation gift card"
						loading="lazy"
						class="w-4/5 h-52 rounded-xl mt-6"
					/>

					<div class="text-left w-4/5 mt-4">
						<p class="text-lg font-semibold">Playstation Plus Gift Card</p>
						<p class="text-red-700 font-bold">1 mes - 3 meses - 12 meses</p>
					</div>

					<BtnGiftCards card="Hola buenas, quisiera comprar una gift card de Playstation Plus" />
				</div>

				<div class="flex flex-col items-center bg-white rounded-xl shadow-lg p-3 w-80 h-96">
					<img
						src="/img/gift cards/nintendo membership.png"
						alt="Playstation gift card"
						loading="lazy"
						class="w-4/5 h-48 rounded-xl mt-6"
					/>

					<div class="text-left w-4/5 mt-8">
						<p class="text-lg font-semibold">Nintendo Membership</p>
						<p class="text-red-700 font-bold">3 meses - 12 meses</p>
					</div>

					<BtnGiftCards card="Hola buenas, quisiera comprar una membresia online de Nintendo" />
				</div>
			</div>
		</div>

		<!-- NUEVOS LANZAMIENTOS -->
		<div class="container my-5">
			<div class="flex justify-between items-center">
				<div class="ml-2">
					<TitleH2 title="Nuevos Lanzamientos" class="w-80 md:w-100" />
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
import TitleH2 from '@/components/Utilidades/TitleH2.vue';
import BtnGiftCards from '@/components/buttons/BtnGiftCards.vue';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
	name: 'Home',

	components: {
		Slider,
		SliderPhone,
		Producto,
		NewsElement,
		ChevronLeftIcon,
		ChevronRightIcon,
		TitleH2,
		BtnGiftCards,
	},

	setup() {
		const store = useStore();
		onMounted(() => {
			store.dispatch('fetchDataGames');
		});

		const games = computed(() => store.state.games);

		function showNextGames() {
			store.dispatch('fetchDataGames', {
				page: games.value.meta.current_page + 1,
			});
		}

		function showPrevGames() {
			store.dispatch('fetchDataGames', {
				page: games.value.meta.current_page - 1,
			});
		}

		/* let { fetchGames, games } = useGames();

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
		} */

		onMounted(() => {
			new Glider(document.querySelector('#carousel__lista'), {
				slidesToShow: 1,
				slidesToScroll: 1,
				draggable: true,
				arrows: {
					prev: '.left-arrow',
					next: '.right-arrow',
				},
				responsive: [
					{
						// screens greater than >= 775px
						breakpoint: 640,
						settings: {
							// Set to `auto` and provide item width to adjust to viewport
							slidesToShow: 2,
							slidesToScroll: 1,
							draggable: true,
							arrows: {
								prev: '.left-arrow',
								next: '.right-arrow',
							},
						},
					},
					{
						// screens greater than >= 1024px
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							draggable: true,
							arrows: {
								prev: '.left-arrow',
								next: '.right-arrow',
							},
						},
					},
					{
						// screens greater than >= 1280px
						breakpoint: 1280,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
							draggable: true,
							arrows: {
								prev: '.left-arrow',
								next: '.right-arrow',
							},
						},
					},
				],
			});
		});

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
