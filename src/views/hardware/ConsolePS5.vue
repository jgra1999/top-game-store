<template>
	<div class="lg:block w-full h-14"></div>
	<div>
		<Portada
			imageUrl="/img/hardware/ps5/ps5-wallpaper.jpg"
			description="Horizon Forbbiden West"
			logoUrl="/img/games/ps5/ps5-logo-completo.png"
			console="PS5"
			message="Play Has No Limits"
		/>

		<!-- PS5  -->
		<div class="flex flex-col lg:flex-row justify-around items-center bg-gray-300">
			<div>
				<img src="/img/hardware/ps5/ps5 juegos fisicos 2.png" lazy="loading" alt="" class="h-80 lg:h-112" />
			</div>

			<div class="ml-5 lg:w-2/4">
				<h2 class="text-5xl font-bold">Playstation 5</h2>
				<p class="text-lg md:text-xl my-5">
					Juega títulos de PS5 y PS4 en discos Blu-ray. También puedes descargar juegos digitales de PS5 y PS4
					desde PlayStation® Store.
				</p>
				<BtnConsoles
					console="Hola buenas tardes, estoy interesado en la PS5?"
					border="ring-red-700"
					button="text-white bg-red-700"
				/>
			</div>
		</div>

		<!-- PS5 DIGITAL -->
		<div class="flex flex-col lg:flex-row justify-around items-center bg-gray-300">
			<div class="ml-5 mt-10 lg:mt-0 lg:w-2/4 order-2 lg:order-1">
				<h2 class="text-5xl font-bold">PS5 Edición Digital</h2>
				<p class="text-lg md:text-xl my-5">
					Una versión completamente digital de la consola PS5 que no trae unidad de disco. Inicia sesión en tu
					cuenta de PlayStation Network y ve a PlayStation Store para comprar y descargar juegos digitales de PS5 y
					PS4.
				</p>
				<BtnConsoles
					console="Hola buenas tardes, estoy interesado en la PS5 digital?"
					border="ring-red-700"
					button="text-white bg-red-700"
				/>
			</div>

			<div class="order-1 lg:order-2">
				<img src="/img/hardware/ps5/ps5.png" lazy="loading" alt="" class="h-80 lg:h-112" />
			</div>
		</div>

		<div class=" flex flex-col items-center justify-center bg-ghost bg-center md:bg-cover w-full h-112">
			<div
				class="grid grid-col-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white sm:w-100 md:w-108 lg:w-2/4 p-3 items-center bg-black bg-opacity-50"
			>
				<div>
					<h4 class="text-3xl lg:text-5xl text-white mb-16">
						Disfruta de más de 4000 juegos de PS4™ en tu consola PS5.
					</h4>
					<p class="text-white text-md lg:text-xl mb-4 md:mb-0">
						Vuelve a tus títulos favoritos de PS4 y PS VR con la retrocompatibilidad.
					</p>
				</div>
				<div>
					<h4 class="text-3xl lg:text-5xl text-white mb-16 mt-4 md:mt-0 md:ml-4">
						Vuelve a ver éxitos mejorados.
					</h4>
					<p class="text-white text-md lg:text-xl ml-4">
						Game Boost permite velocidades de fotogramas más rápidas y fluidas en juegos específicos de PS4 y PS VR.
					</p>
				</div>
			</div>
			<div class="lg:bg-black lg:bg-opacity-50 lg:w-2/4 text-center pb-3">
				<router-link to="/juegos-playstation-4">
					<button class="rounded-full hover:ring-2 ring-white p-1 mt-4">
						<p class="rounded-full font-bold py-2 px-5 bg-white text-md md:text-lg">
							Ver Juegos
						</p>
					</button>
				</router-link>
			</div>
		</div>

		<!-- CONTROL DUALSENSE -->
		<div class="flex flex-col lg:flex-row justify-around items-center">
			<div class="ml-5 mt-10 lg:mt-0 lg:w-2/4">
				<h2 class="text-5xl font-bold">Control inalámbrico DualSense</h2>
				<p class="text-xl my-5">
					El control inalámbrico DualSense para PS5 ofrece respuesta háptica inmersiva2, gatillos adaptativos
					dinámicos y un micrófono integrado, todo en un diseño icónico.
				</p>
				<router-link to="/accesorios">
					<button class="rounded-full hover:ring-2 ring-red-700 p-1 mt-4">
						<p class="rounded-full font-bold text-white py-2 px-5 bg-red-700 text-sm md:text-lg">
							Mas información
						</p>
					</button>
				</router-link>
			</div>

			<div>
				<img src="/img/hardware/ps5/dualsense.png" lazy="loading" alt="" class="h-80 lg:h-104" />
			</div>
		</div>
	</div>
</template>

<script>
import Portada from '@/components/Utilidades/Portada.vue';
import BtnConsoles from '@/components/buttons/BtnConsoles.vue';

export default {
	components: {
		Portada,
		BtnConsoles,
	},
};
</script>

<style></style>
