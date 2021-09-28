<template>
	<!-- DUALSENSE -->
	<div class="bg-dualsense bg-cover w-full h-112 flex items-center justify-center p-4">
		<div class="bg-white bg-opacity-50 p-4 text-center">
			<h2 class="text-4xl lg:text-5xl font-bold">Dualsense Wirelless Controller</h2>
			<p class="mt-10 text-lg lg:text-xl">
				Descubre una experiencia de juego más intensa con el nuevo e innovador control de PS5™.
			</p>
		</div>
	</div>

	<div class="container p-5">
		<div class="flex flex-col items-center p-2 mt-10">
			<h3 class="font-semibold text-3xl lg:text-5xl">Eleva tus sentidos</h3>
			<p class="mt-4 lg:mt-10 lg:text-lg xl:w-2/4 text-center">
				El control inalámbrico DualSense para PS5 ofrece respuesta háptica inmersiva , gatillos adaptativos
				dinámicos y un micrófono integrado, todo en un diseño icónico.
			</p>

			<div class="w-full xl:w-3/4 mx-auto h-64 sm:h-72 md:h-96 lg:h-100 xl:102 mt-5 lg:mt-10">
				<iframe
					class="w-full h-full rounded"
					src="https://www.youtube.com/embed/SebzB8W3bVU"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-12">
				<div class="text-center">
					<h4 class="text-2xl font-bold text-red-700">Respuesta háptica</h4>
					<p class="text-base mt-4">
						Siente la respuesta física a tus acciones en el juego con los accionadores dobles que reemplazan a los
						tradicionales motores de vibración. En tus manos, estas vibraciones dinámicas pueden simular la
						sensación de todo, desde los entornos hasta el retroceso de diferentes armas.
					</p>
				</div>

				<div class="text-center mt-10 md:mt-0">
					<h4 class="text-2xl font-bold text-red-700">Gatillos adaptativos</h4>
					<p class="text-base mt-4">
						Experimenta la tensión y la fuerza variadas cuando interactúes con los entornos y los equipos del juego.
						Desde tensar la cuerda de un arco cada vez más hasta pisar los frenos de un automóvil a gran velocidad,
						siéntete físicamente conectado a tus acciones en la pantalla.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="container my-12">
		<div class="flex flex-col items-center">
			<h3 class="font-semibold text-3xl mb-5 lg:text-5xl">Elige tu color favorito</h3>
			<div class="mt-4">
				<button class="rounded-full bg-white w-8 h-8 shadow-lg" id="white" @click="showNextGames"></button>

				<button
					class="rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 focus:bg-opacity-100 w-8 h-8 mx-4 shadow-lg"
					id="black"
					@click="showNextGames"
				></button>

				<button
					class="rounded-full bg-cosmic bg-opacity-50 hover:bg-opacity-75 focus:bg-opacity-100 w-8 h-8 shadow-lg "
					id="red"
					@click="showNextGames"
				></button>
			</div>

			<div v-for="dualsense in dualsenses.data" :key="dualsense.id">
				<img :src="dualsense.image_url" loading="lazy" :alt="`image ${dualsense.name}`" class="lg:h-104" />

				<div class="text-center">
					<p class="text-2xl">{{ dualsense.name }}</p>
					<p class="text-lg text-red-700 font-bold my-2">{{ dualsense.price }} $</p>

					<button class="rounded-full hover:ring-2 ring-red-700 p-1">
						<p class="rounded-full font-bold text-white py-2 px-5 bg-red-700 text-sm md:text-lg">
							Agregar al carrito
						</p>
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- JOY CONS -->

	<div class="bg-joycons bg-cover w-full h-110 flex items-center justify-center p-4">
		<div class="bg-black bg-opacity-25 p-4 text-center">
			<h2 class="text-4xl lg:text-5xl font-bold text-white">Joy‑Con™ controllers</h2>
			<p class="mt-10 text-lg lg:text-xl text-white">
				Elija un juego adicional (o dos) de Joy-Con, los controladores que hacen posible nuevos tipos de juegos.
			</p>
		</div>
	</div>

	<div class="container p-5">
		<div class="flex flex-col items-center p-2 mt-10">
			<h3 class="font-semibold text-3xl lg:text-5xl">Crea tu combinación de colores favorita</h3>
			<p class="mt-4 lg:mt-10 lg:text-lg xl:w-2/4 text-center">
				Agrega un toque de estilo a tu consola Nintendo Switch ™ con los controladores Joy-Con ™ y las correas
				Joy-Con. Puede probar diferentes combinaciones de colores.
			</p>
		</div>

		<div class="w-full xl:w-3/4 mx-auto h-64 sm:h-72 md:h-96 lg:h-100 xl:102 mt-5 lg:mt-10">
			<iframe
				class="w-full h-full rounded"
				src="https://www.youtube.com/embed/cD7cLwIzG_8"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
			<div
				v-for="joycon in joycons.data"
				:key="joycon.id"
				class="flex flex-col justify-center bg-white p-5 rounded shadow-md"
			>
				<img :src="joycon.image_url" :alt="`image ${joycon.name}`" />

				<div>
					<p class="text-2xl mb-5">{{ joycon.name }}</p>

					<p class="text-red-700 font-bold text-lg">{{ joycon.price }} $</p>

					<Button />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import useDualsense from '@/composables/accessories/useDualsense.js';
import useJoycons from '@/composables/accessories/useJoycons.js';

import Button from '@/components/Button.vue';

export default {
	components: {
		Button,
	},

	setup() {
		let { fetchDualsense, dualsenses } = useDualsense();
		let { fetchJoycons, joycons } = useJoycons();

		fetchDualsense();
		fetchJoycons();

		function showNextGames(event) {
			if (event.target.id == 'white') {
				fetchDualsense({
					showNext: true,
					page: (dualsenses.value.meta.current_page = 1),
				});
			} else if (event.target.id == 'black') {
				fetchDualsense({
					showNext: true,
					page: (dualsenses.value.meta.current_page = 2),
				});
			} else if (event.target.id == 'red') {
				fetchDualsense({
					showNext: true,
					page: (dualsenses.value.meta.current_page = 3),
				});
			}
		}

		return {
			dualsenses,
			joycons,
			showNextGames,
		};
	},
};
</script>
