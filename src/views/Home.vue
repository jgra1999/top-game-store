<template>
	<div class="bg-gray-100 relative">
		<Slider />
		<SliderPhone />

		<!-- NOTICIAS -->
		<div class="container mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-4  justify-items-center">
			<router-link
				to="/MH-analisis"
				class="w-64 h-52 border-b-2 border-red-700 hover:border-yellow-400 duration-300"
			>
				<img src="../assets/MH.jpg" alt="Monster Hunter stories 2 imagen" class="rounded-lg w-full h-32" />
				<div>
					<p class="font-bold text-base md:text-lg my-3">Análisis</p>
					<p class="text-xs font-normal">Nintendo Switch</p>
				</div>
			</router-link>

			<div class="w-80 h-64 border-b-2 border-red-700 hidden md:block">
				<img src="../assets/NBA.jpg" alt="NBA 2K22 imagen" class="rounded-lg w-full h-40" />
				<div>
					<p class="font-bold text-lg my-5">Proximamente el 10-09-21</p>
					<p class="text-xs font-normal">Playstation 4. Playstation 5</p>
				</div>
			</div>

			<div class="w-80 h-64 border-b-2 border-red-700 hidden md:block">
				<img src="../assets/formula-1.jpg" alt="Formula 1 2021 imagen" class="rounded-lg w-full h-40" />
				<div>
					<p class="font-bold text-lg my-5">Análisis</p>
					<p class="text-xs font-normal">Playstation 4. Playstation 5</p>
				</div>
			</div>

			<div class="w-80 h-64 border-b-2 border-red-700 hidden md:block">
				<img src="../assets/mario-golf.jpg" alt="Mario golf imagen" class="rounded-lg w-full h-40" />
				<div>
					<p class="font-bold text-lg my-5">Análisis</p>
					<p class="text-xs font-normal">Nintendo Switch</p>
				</div>
			</div>
		</div>

		<!-- PROXIMO LANZAMIENTO -->
		<div class="mt-10 relative">
			<img src="../assets/fondo-hades.jpg" alt="" class="hidden md:block" />
			<img src="../assets/fondo-hades-phone.jpg" alt="" class="md:hidden" />
			<div class="absolute bottom-12 w-96 left-5 lg:w-102 lg:h-80 lg:top-32 lg:left-16">
				<h2 class="text-white text-4xl lg:text-6xl font-bold">HADES</h2>
				<h3 class="text-white text-lg lg:text-4xl font-normal mt-5">PROXIMO LANZAMIENTO</h3>
				<p class="text-xs text-white my-8">
					Desarrollado y editado por Supergiant Games para PC, Switch, PlayStation 4, Xbox One, PlayStation 5
					y Xbox Series, es una aventura de acción tipo roguelike ambientada en la antigua Grecia, en la que
					deberemos escapar del inframundo enfrentándonos a toda clase de monstruos.
				</p>

				<button class="rounded-full hover:ring-2 ring-white py-2.5 px-1 duration-300 ">
					<a href="#" class="rounded-full font-bold text-xs md:text-base text-black py-2 px-5 bg-white">
						Más información
					</a>
				</button>
			</div>

			<div class="md:grid md:grid-cols-3 gap-5 justify-items-center w-full absolute md:-bottom-32 hidden">
				<div class=" text-center ">
					<img
						src="../assets/recomendaciones.jpg"
						alt=""
						class="rounded-xl mb-4 w-96 h-52 shadow-2xl hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
					/>
					<p class="text-lg">Nuestras recomendaciones</p>
				</div>

				<div class=" text-center ">
					<img
						src="../assets/BR.jpg"
						alt=""
						class="rounded-xl mb-4 w-96 h-52 shadow-2xl hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
					/>
					<p class="text-lg">Mejores Battle Royals</p>
				</div>

				<div class=" text-center ">
					<img
						src="../assets/mejores-switch.jpg"
						alt=""
						class="rounded-xl mb-4 w-96 h-52 shadow-2xl  hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
					/>
					<p class="text-lg">Mejores juegos de Nintendo Switch</p>
				</div>
			</div>
		</div>

		<div class="flex flex-col items-center w-full mt-10 md:hidden">
			<div class=" text-center ">
				<img
					src="../assets/recomendaciones.jpg"
					alt=""
					class="rounded-xl mb-4 w-80 h-44 shadow-2xl hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
				/>
				<p class="text-base">Nuestras recomendaciones</p>
			</div>

			<div class=" text-center my-5 ">
				<img
					src="../assets/BR.jpg"
					alt=""
					class="rounded-xl mb-4 w-80 h-44 shadow-2xl hover:shadow-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 
						hover:scale-110 cursor-pointer"
				/>
				<p class="text-base">Mejores Battle Royals</p>
			</div>

			<div class=" text-center ">
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
			<h2 class="text-xl md:text-3xl font-medium">Elige tu consola para jugar</h2>
			<div class="flex justify-around mt-10 items-end">
				<div class=" w-40 text-center p-4 cursor-pointer hover:shadow-xl duration-300">
					<img src="../assets/ps5.png" alt="PS5" class="h-40" />
					<p class="mt-5">PlayStation 5</p>
				</div>
				<div class=" w-40 text-center p-4 cursor-pointer hover:shadow-xl duration-300 hidden">
					<img src="../assets/ps4-pro.png" alt="PS5" class="h-40" />
					<p class="mt-5">PlayStation 4 pro</p>
				</div>
				<div class=" w-40 text-center p-4 cursor-pointer hover:shadow-xl duration-300 hidden ">
					<img src="../assets/ps4.png" alt="PS5" class="h-40" />
					<p class="mt-5">PlayStation 4</p>
				</div>
				<div class=" w-40 text-center p-4 cursor-pointer hover:shadow-xl duration-300 hidden">
					<img src="../assets/switch.png" alt="PS5" class="h-32 w-40" />
					<p class="mt-5">Nintendo Switch</p>
				</div>
			</div>
		</div>

		<!-- NUEVOS LANZAMIENTOS -->
		<div class="container mt-5">
			<div class="flex justify-between items-center">
				<div>
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

			<div class="grid grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-5 justify-items-center mt-12">
				<Producto juego="./img/playstation/HZD.jpg" />
				<Producto juego="./img/playstation/miles morales.jpg" />
				<Producto juego="./img/destacados/tlou.png" />
				<Producto juego="./img/switch/zelda.jpg" />
				<Producto juego="./img/switch/ssb ultimate.png" />
				<Producto juego="./img/switch/luigis mansion.jpg" />
				<Producto juego="./img/destacados/fifa.png" />
				<Producto juego="./img/destacados/ratched.jpg" />
				<Producto juego="./img/playstation/god of war.jpg" />
				<Producto juego="./img/ofertas/dark-souls.jpg" />
			</div>
		</div>

		<Footer />
	</div>
	<router-view />
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue';
import SliderPhone from '@/components/SliderPhone.vue';
import Producto from '@/components/Producto.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'Home',
	components: {
		Slider,
		SliderPhone,
		Producto,
		Footer,
	},
};
</script>
