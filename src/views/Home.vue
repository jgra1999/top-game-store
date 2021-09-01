<template>
	<div class="bg-gray-100 relative">
		<Slider />
		<SliderPhone />

		<!-- NOTICIAS -->
		<!-- <div class="container mt-10 relative flex justify-around">
			<NewsElement
				url="/monster-hunter-stories-analisis"
				title="Análisis"
				console="Nintendo Switch"
				img="./img/MH.jpg"
			/>

			<NewsElement
				url="#"
				title="Proximamente el 10-09-21"
				console="Playstation 4. Playstation 5"
				img="./img/NBA.jpg"
			/>

			<NewsElement url="#" title="Análisis" console="Playstation 4. Playstation 5" img="./img/formula-1.jpg" />

			<NewsElement url="#" title="Análisis" console="Nintendo Switch" img="./img/mario-golf.jpg" />
		</div> -->

		<div class="container mt-10 relative flex items-center sm:justify-center">
			<button id="left-arrow" @click="scrollLeft()">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-12 w-12 text-gray-400 hover:text-red-700  xl:absolute xl:-left-14"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<div class="w-full sm:w-96 md:w-full overflow-hidden" id="container__carousel">
				<div class="flex">
					<NewsElement
						url="/monster-hunter-stories-analisis"
						title="Análisis"
						console="Nintendo Switch"
						img="./img/MH.jpg"
					/>

					<NewsElement
						url="#"
						title="Proximamente el 10-09-21"
						console="Playstation 4. Playstation 5"
						img="./img/NBA.jpg"
					/>

					<NewsElement url="#" title="Análisis" console="Playstation 4. Playstation 5" img="./img/formula-1.jpg" />

					<NewsElement url="#" title="Análisis" console="Nintendo Switch" img="./img/mario-golf.jpg" />

					<NewsElement url="#" title="Análisis" console="Playstation 4. Playstation 5" img="./img/formula-1.jpg" />

					<NewsElement url="#" title="Análisis" console="Nintendo Switch" img="./img/mario-golf.jpg" />

					<NewsElement url="#" title="Análisis" console="Playstation 4. Playstation 5" img="./img/formula-1.jpg" />

					<NewsElement url="#" title="Análisis" console="Nintendo Switch" img="./img/mario-golf.jpg" />
				</div>
			</div>

			<button id="rightArrow" @click="scrollRight()">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-12 w-12 text-gray-400 hover:text-red-700  xl:absolute xl:-right-14"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>

		<!-- PROXIMO LANZAMIENTO -->
		<div class="mt-10 relative">
			<img src="../assets/fondo-hades.jpg" alt="" class="hidden md:block" />
			<img src="../assets/fondo-hades-phone.jpg" alt="" class="md:hidden" />
			<div
				class="absolute bottom-12 left-4 md:bottom-24 w-94 md:w-64 lg:w-96 xl:w-100 2xl:w-104 lg:top-12 xl:top-24"
			>
				<h2 class="text-white text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-bold">HADES</h2>
				<h3 class="text-white text-lg lg:text-3xl xl:text-4xl font-normal mt-5">PROXIMO LANZAMIENTO</h3>
				<p class="text-xs xl:text-base text-white my-8">
					Desarrollado y editado por Supergiant Games para PC, Switch, PlayStation 4, Xbox One, PlayStation 5 y
					Xbox Series, es una aventura de acción tipo roguelike ambientada en la antigua Grecia, en la que
					deberemos escapar del inframundo enfrentándonos a toda clase de monstruos.
				</p>

				<button class="rounded-full hover:ring-2 ring-white pt-1.5 pb-2.5 lg:py-3 px-1 duration-300 ">
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
			<h2 class="text-xl md:text-3xl font-medium ml-2">Elige tu consola para jugar</h2>
			<div
				class="grid grid-cols-2 grid-row-2 mt-10 justify-items-center items-end gap-y-2 lg:grid-cols-4 grid-row-0"
			>
				<div class=" w-40 text-center p-4 cursor-pointer hover:shadow-xl duration-300">
					<img src="../assets/ps5.png" alt="PS5" class="h-40" />
					<p class="mt-5">PlayStation 5</p>
				</div>
				<div class=" w-40 text-center p-4 cursor-pointer hover:shadow-xl duration-300 ">
					<img src="../assets/ps4-pro.png" alt="PS5" class="h-40" />
					<p class="mt-5">PlayStation 4 pro</p>
				</div>
				<div class=" w-40 text-center p-4 cursor-pointer hover:shadow-xl duration-300 ">
					<img src="../assets/ps4.png" alt="PS5" class="h-40" />
					<p class="mt-5">PlayStation 4</p>
				</div>
				<div class=" w-40 text-center p-4 cursor-pointer hover:shadow-xl duration-300">
					<img src="../assets/switch.png" alt="PS5" class="h-32 w-40" />
					<p class="mt-5">Nintendo Switch</p>
				</div>
			</div>
		</div>

		<!-- NUEVOS LANZAMIENTOS -->
		<div class="container my-5">
			<div class="flex justify-between items-center">
				<div class="ml-2">
					<h2 class="text-xl md:text-3xl font-medium mb-5">Nuevos lanzamientos</h2>
					<p class="text-xs md:text-sm">Excelentes juegos para Playstation y Nintedo</p>
				</div>

				<div class="hidden lg:flex">
					<button class="rounded-full h-12 w-12 flex items-center justify-center bg-red-700 mr-2">
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

					<button class="rounded-full h-12 w-12 flex items-center justify-center bg-red-700">
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

			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-5 justify-items-center mt-12">
				<Producto juego="./img/playstation/HZD.jpg" />
				<Producto juego="./img/playstation/miles morales.jpg" />
				<Producto juego="./img/destacados/tlou.png" />
				<Producto juego="./img/switch/zelda.jpg" />
				<Producto juego="./img/switch/ssb ultimate.png" />
				<Producto juego="./img/switch/luigis mansion.jpg" />
				<Producto juego="./img/destacados/fifa.png" class="hidden lg:block" />
				<Producto juego="./img/destacados/ratched.jpg" class="hidden lg:block" />
				<Producto juego="./img/playstation/god of war.jpg" class="hidden lg:block" />
				<Producto juego="./img/ofertas/dark-souls.jpg" class="hidden lg:block" />
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

export default {
	name: 'Home',

	components: {
		Slider,
		SliderPhone,
		Producto,
		NewsElement,
	},

	methods: {
		scrollRight() {
			const carousel = document.getElementById('container__carousel');
			// carousel.scrollLeft += carousel.scrollLeft = 388;
			if (window.innerWidth < 1024) {
				carousel.scrollLeft += carousel.offsetWidth;
			} else if (window.innerWidth > 1024 && window.innerWidth < 1280) {
				carousel.scrollLeft += carousel.scrollLeft = 312;
			} else if (window.innerWidth > 1280 && window.innerWidth < 1536) {
				carousel.scrollLeft += carousel.scrollLeft = 323;
			} else if (window.innerWidth > 1536) {
				carousel.scrollLeft += carousel.scrollLeft = 385;
			}
		},
		scrollLeft() {
			const carousel = document.getElementById('container__carousel');
			// carousel.scrollLeft -= carousel.scrollLeft = 388;
			if (window.innerWidth < 1024) {
				carousel.scrollLeft -= carousel.offsetWidth;
			} else if (window.innerWidth > 1024 && window.innerWidth < 1280) {
				carousel.scrollLeft -= carousel.scrollLeft = 312;
			} else if (window.innerWidth > 1280 && window.innerWidth < 1536) {
				carousel.scrollLeft -= carousel.scrollLeft = 323;
			} else if (window.innerWidth > 1536) {
				carousel.scrollLeft -= carousel.scrollLeft = 385;
			}
		},
	},
};
</script>

<style>
#container__carousel {
	scroll-behavior: smooth;
}
</style>
