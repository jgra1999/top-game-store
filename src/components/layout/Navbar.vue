<template>
	<nav class="fixed z-20 flex items-center justify-between bg-red-700 w-screen h-14  ">
		<div class="flex items-center">
			<!-- LOGO -->
			<div @click="sideBar" class="ml-1">
				<button class="lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-7 w-7 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 17h16" />
					</svg>
				</button>

				<!-- <button class="lg:hidden" v-show="isVisible">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-7 w-7 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button> -->
			</div>
			<router-link to="/">
				<!-- bg-red-700 md:w-32 md:h-32 mt-3 -->
				<img src="img/topgames.png" alt="logo top games" class="w-24 h-24 md:w-32 md:h-32 mt-3 md:ml-3" />

				<!-- <span class="text-3xl font-bold text-white mx-5">LOGO</span> -->
			</router-link>

			<!-- CATEGORIAS -->
			<ul class="text-white hidden lg:flex items-center ">
				<li class="ml-5 mt-2 cursor-pointer hover:border-b-2 h-8">
					<button class="flex items-center" @click="dropMenu" id="categoriaJuegos">
						Juegos
						<ChevronDownIcon class="fill-current text-white w-5 h-5" />
					</button>
				</li>
				<li class="ml-5 mt-2 cursor-pointer hover:border-b-2 h-8">
					<button class="flex items-center" @click="dropMenu" id="categoriaHardware">
						Hardware
						<ChevronDownIcon class="fill-current text-white w-5 h-5" />
					</button>
				</li>
				<li class="ml-5 mt-2 cursor-pointer hover:border-b-2 h-8">
					<router-link to="/accesorios" class="flex items-center" @click="CloseDropMenu">
						Accesorios
					</router-link>
				</li>
				<!-- <li class="ml-5 mt-2 cursor-pointer hover:border-b-2 h-8">
					<router-link to="/noticias-y-analisis" class="flex items-center">
						Noticias
					</router-link>
				</li> -->
			</ul>
		</div>

		<!-- LOGIN, SEARCH, CARRITO -->
		<div class="flex items-center mr-7 ">
			<div>
				<router-link
					to="/crear-cuenta"
					class=" rounded-full font-bold text-xs md:text-base text-white py-1 px-5 border-2 active:bg-white active:text-red-700 lg:hover:bg-white lg:hover:text-red-700 lg:duration-300  "
					>Sign up</router-link
				>
			</div>

			<router-link to="/carrito-de-compras" id="carrito">
				<ShoppingCartIcon class="text-gray-200 hover:text-white w-5 h-5 mx-4" />
			</router-link>

			<router-link to="/buscar">
				<SearchIcon class="text-gray-200 hover:text-white w-5 h-5" />
			</router-link>
		</div>
	</nav>

	<!-- DROP MENU DE JUEGOS -->
	<div class=" w-full bg-red-700 fixed z-10 h-0 overflow-hidden menu" id="dropJuegos">
		<div class="container mt-24 mb-6 flex justify-around items-end ">
			<div class="text-center">
				<router-link to="/juegos-playstation-5" @click="CloseDropMenu">
					<img src="img/navbar/logo-ps5.png" loading="lazy" alt="icono ps5" class=" w-48 xl:w-60" />
					<p class="mt-4 text-white font-bold">Juegos de PS5</p>
				</router-link>
			</div>
			<div class="text-center">
				<router-link to="/juegos-playstation-4" @click="CloseDropMenu">
					<img src="img/navbar/logo-ps4.png" loading="lazy" alt="icono ps4" class=" w-48 xl:w-64" />
					<p class="mt-4 text-white font-bold">Juegos de PS4</p>
				</router-link>
			</div>
			<div>
				<router-link to="/juegos-nintendo-switch" @click="CloseDropMenu" class="flex flex-col items-center">
					<img src="img/navbar/logo-nintendo.png" loading="lazy" alt="icono switch" class=" w-48 xl:w-60" />
					<p class="mt-4 text-white font-bold">Juegos de Switch</p>
				</router-link>
			</div>
		</div>
	</div>

	<!-- DROP MENU DE HARDWARE -->
	<div class=" w-full bg-red-700 fixed z-10 h-0 overflow-hidden menu" id="dropHardware">
		<div class="container mt-24 mb-6 flex justify-around items-end ">
			<div class="text-center p-2">
				<router-link to="/consola-playstation-5" @click="CloseDropMenu">
					<img src="img/navbar/iconPS5.png" alt="icon ps5" loading="lazy" />
					<p class="mt-4 text-white font-bold">PS5</p>
				</router-link>
			</div>

			<router-link to="/consola-playstation-4" class="text-center" @click="CloseDropMenu">
				<svg
					version="1.1"
					id="Capa_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					width="104.535px"
					height="104.535px"
					viewBox="0 0 104.535 104.535"
					style="enable-background:new 0 0 104.535 104.535;"
					xml:space="preserve"
					class="fill-current text-white w-28 h-28"
				>
					<path
						d="M24.988,33.651h6.845v70.884l-13.921-0.021l7.076-6.288V33.651z M24.988,31.196l6.845,0.009V0h-6.845V31.196z
		 M86.624,104.512l-52.701,0.023V33.651l6.162,0.5l41.269,8.49v56.237L86.624,104.512z M37.268,88.285
		c0,0.041,0.018,0.057,0.062,0.067c0.235,0.064,0.47,0.132,0.705,0.196c0.07,0.02,0.141,0.039,0.211,0.064
		c0.197,0.072,0.381,0.235,0.378,0.457c-0.007,0.644-0.003,1.289-0.002,1.935c0,0.069,0,0.14,0.009,0.21
		c0.028,0.222,0.133,0.426,0.365,0.597c0.162,0.12,0.337,0.185,0.518,0.222c0.381,0.084,0.667-0.097,0.667-0.418
		c0-0.977,0-1.953,0-2.93c0-0.02,0-0.039,0-0.066c-0.082-0.021-0.154-0.038-0.226-0.062c-0.059-0.02-0.072-0.005-0.072,0.042
		c0.002,0.523,0.001,1.046,0.001,1.569c0,0.365,0,0.732,0,1.098c0,0.182-0.104,0.27-0.31,0.248
		c-0.088-0.009-0.184-0.033-0.273-0.066c-0.252-0.1-0.366-0.248-0.366-0.461c0-0.696-0.005-1.396,0.002-2.092
		c0.004-0.348-0.308-0.678-0.682-0.801c-0.31-0.102-0.622-0.18-0.933-0.27c-0.04-0.012-0.056-0.004-0.055,0.031
		C37.271,88,37.271,88.144,37.268,88.285z M37.27,92.238c0.001,0.146,0.035,0.297,0.132,0.446c0.15,0.231,0.372,0.371,0.632,0.445
		c0.447,0.128,0.893,0.249,1.339,0.374c0.056,0.018,0.113,0.036,0.169,0.058c0.168,0.066,0.292,0.188,0.327,0.325
		c0.012,0.045,0.015,0.089,0.015,0.132c0.001,0.447,0.001,0.896,0.001,1.343c0,0.011-0.005,0.022,0.001,0.033
		c0.01,0.016,0.025,0.041,0.04,0.045c0.082,0.026,0.164,0.049,0.255,0.073c0-0.019,0-0.028,0-0.041c0-0.563,0.005-1.123-0.003-1.688
		c-0.002-0.188-0.101-0.375-0.286-0.541c-0.139-0.123-0.299-0.202-0.469-0.25c-0.46-0.129-0.92-0.254-1.38-0.385
		c-0.27-0.076-0.467-0.242-0.461-0.514c0.01-0.464,0.003-0.934,0.003-1.398c0-0.014-0.001-0.023,0-0.035
		c0.002-0.03-0.012-0.049-0.051-0.06c-0.068-0.017-0.137-0.034-0.206-0.056c-0.047-0.016-0.059-0.003-0.059,0.033
		C37.27,91.135,37.268,91.687,37.27,92.238z M40.182,97.701c0.009-0.098-0.037-0.192-0.097-0.289
		c-0.179-0.295-0.358-0.588-0.537-0.881c-0.532-0.875-1.065-1.75-1.598-2.623c-0.028-0.045-0.061-0.092-0.099-0.131
		c-0.107-0.11-0.222-0.11-0.253,0c-0.012,0.043-0.014,0.09-0.014,0.138c-0.001,0.891-0.001,1.78,0,2.672
		c0,0.04-0.014,0.051-0.063,0.035c-0.08-0.025-0.16-0.046-0.246-0.069c0,0.178,0,0.35,0,0.527c0.082,0.021,0.16,0.047,0.238,0.064
		c0.054,0.014,0.071,0.032,0.07,0.079c-0.003,0.138-0.002,0.278,0,0.42c0,0.017,0.016,0.048,0.025,0.052
		c0.093,0.028,0.187,0.054,0.284,0.08c0.001-0.023,0.003-0.041,0.003-0.06c0-0.133,0.003-0.267-0.001-0.399
		c0-0.051,0.013-0.063,0.075-0.045c0.63,0.178,1.261,0.354,1.891,0.526c0.062,0.017,0.126,0.026,0.185,0.028
		C40.14,97.83,40.175,97.783,40.182,97.701z M37.958,94.436c-0.011-0.018-0.025-0.033-0.038-0.051c-0.007,0-0.013,0-0.019,0.001
		c0,0.78,0,1.56,0,2.341c0.017,0.006,0.029,0.012,0.04,0.014c0.542,0.151,1.085,0.303,1.627,0.453
		c0.067,0.02,0.076,0.008,0.039-0.055C39.059,96.238,38.509,95.336,37.958,94.436z M81.353,40.654V13.448L41.01,0h-7.087v31.206
		l6.394,0.557L81.353,40.654z"
					/>
				</svg>
				<p class="mt-4 text-white font-bold">PS4</p>
			</router-link>

			<router-link to="/consola-nintendo-switch" class="flex flex-col items-center" @click="CloseDropMenu">
				<svg
					height="512pt"
					viewBox="0 -96 512 512"
					width="512pt"
					xmlns="http://www.w3.org/2000/svg"
					class="fill-current text-white w-28 h-28"
				>
					<path
						d="m482 191.734375c0-18.308594-14.894531-33.203125-33.199219-33.203125-18.308593 0-33.199219 14.894531-33.199219 33.203125 0 18.304687 14.890626 33.199219 33.199219 33.199219 18.304688 0 33.199219-14.894532 33.199219-33.199219zm0 0"
					/>
					<path
						d="m30 127.46875c0 18.304688 14.894531 33.199219 33.199219 33.199219 18.308593 0 33.199219-14.894531 33.199219-33.199219 0-18.308594-14.890626-33.203125-33.199219-33.203125-18.304688 0-33.199219 14.894531-33.199219 33.203125zm0 0"
					/>
					<path
						d="m482 245.480469c-9.65625 5.984375-21.027344 9.453125-33.199219 9.453125s-23.546875-3.46875-33.199219-9.453125v73.71875h41.234376c30.417968 0 55.164062-24.746094 55.164062-55.164063v-72.300781c0 15.546875-5.652344 29.792969-15 40.8125-4.285156 5.054687-9.34375 9.425781-15 12.933594zm0 0"
					/>
					<path
						d="m55.167969 319.199219h41.230469v-137.984375c-9.652344 5.984375-21.027344 9.453125-33.199219 9.453125s-23.542969-3.46875-33.199219-9.453125c-5.65625-3.507813-10.714844-7.882813-15-12.933594-9.347656-11.023438-15-25.265625-15-40.816406v136.566406c0 30.421875 24.746094 55.167969 55.167969 55.167969zm0 0"
					/>
					<path
						d="m456.835938 0h-41.234376v137.988281c9.652344-5.988281 21.027344-9.457031 33.199219-9.457031s23.542969 3.46875 33.199219 9.457031c5.65625 3.503907 10.714844 7.878907 15 12.933594 9.347656 11.019531 15 25.265625 15 40.8125v-136.566406c0-30.421875-24.746094-55.167969-55.164062-55.167969zm0 0"
					/>
					<path
						d="m126.398438 127.46875v191.730469h259.203124v-319.199219h-259.203124zm204.476562 13.492188c5.855469 5.855468 5.855469 15.355468 0 21.210937l-72.300781 72.300781c-2.929688 2.929688-6.769531 4.394532-10.605469 4.394532-3.839844 0-7.679688-1.464844-10.609375-4.394532-5.855469-5.855468-5.855469-15.355468 0-21.210937l72.300781-72.300781c5.859375-5.859376 15.355469-5.859376 21.214844 0zm-149.746094 16.066406 72.296875-72.300782c5.859375-5.859374 15.355469-5.859374 21.214844 0 5.855469 5.855469 5.855469 15.355469 0 21.210938l-72.300781 72.300781c-2.929688 2.929688-6.765625 4.394531-10.605469 4.394531s-7.679687-1.464843-10.605469-4.394531c-5.859375-5.855469-5.859375-15.351562 0-21.210937zm0 0"
					/>
					<path
						d="m0 55.167969v72.300781c0-15.550781 5.652344-29.792969 15-40.816406 4.285156-5.050782 9.34375-9.425782 15-12.933594 9.65625-5.984375 21.027344-9.453125 33.199219-9.453125s23.546875 3.46875 33.199219 9.453125v-73.71875h-41.230469c-30.421875 0-55.167969 24.746094-55.167969 55.167969zm0 0"
					/>
				</svg>
				<p class="mt-4 text-white font-bold">Nintendo Switch</p>
			</router-link>
		</div>
	</div>

	<!--MENU LATERAL -->
	<Sidebar />

	<router-view />
</template>

<script>
import Sidebar from './Sidebar.vue';

import { ChevronDownIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/vue/solid';

import Button from '../Button.vue';

export default {
	name: 'Navbar',
	data() {
		return {
			isVisible: false,
		};
	},
	components: { Sidebar, ChevronDownIcon, Button, SearchIcon, ShoppingCartIcon },
	methods: {
		/**
		 * dropMenu es una funcion con la que se despliega los menu desplegables, usa el objeto del evento para saber cual de los elementos li fue en el que se produce el evento click
		 */
		dropMenu(event) {
			if (event.target.id == 'categoriaJuegos') {
				const dropJuegos = document.querySelector('#dropJuegos');

				setTimeout(() => {
					dropJuegos.classList.toggle('h-72');
				}, 200);
			} else {
				dropJuegos.classList.remove('h-72');
			}
			if (event.target.id == 'categoriaHardware') {
				const dropHardware = document.querySelector('#dropHardware');

				setTimeout(() => {
					dropHardware.classList.toggle('h-72');
				}, 200);
			} else {
				dropHardware.classList.remove('h-72');
			}
		},

		sideBar() {
			const sidebarDesplegar = document.getElementById('sidebar');

			sidebarDesplegar.classList.toggle('w-screen');
		},

		CloseDropMenu() {
			const dropJuegos = document.querySelector('#dropJuegos');
			const dropHardware = document.querySelector('#dropHardware');

			dropJuegos.classList.remove('h-72');
			dropHardware.classList.remove('h-72');
		},
	},
};
</script>

<style>
#dropJuegos,
#dropHardware,
#dropAccesorios {
	transition: 0.5s ease all;
}
</style>
