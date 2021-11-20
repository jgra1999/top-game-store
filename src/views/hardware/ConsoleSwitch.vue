<template>
	<div class="lg:block w-full h-14"></div>
	<div class="w-full lg:h-110">
		<!-- <img
			src="/img/hardware/switch/fondo.jpg"
			loading="lazy"
			alt="wallpaper nintendo switch"
			class="h-64 xl:h-header w-full"
		/> -->

		<!-- <div class="absolute w-full bottom-6 xl:bottom-80 flex flex-col items-center text-center">
			<img src="/img/hardware/switch/switch logo.png" alt="logo Nintendo Switch" class="h-20 xl:w-96 xl:h-28" />
			<p class="text-white text-2xl xl:text-4xl mt-2">{{ message }}</p>
		</div> -->

		<iframe
			class="w-full h-100 lg:h-full"
			src="https://www.youtube.com/embed/f5uik5fgIaI"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
	<div class="py-8 px-5 bg-white">
		<div>
			<h2 class="text-4xl lg:text-5xl font-bold">Nintedo Switch</h2>
			<div class="bg-red-600 mt-10 flex flex-col lg:flex-row items-center justify-around">
				<img src="/img/hardware/switch/nintendo switch console.png" loading="lazy" alt="Switch console" />
				<div class="text-center p-3">
					<h3 class="text-3xl md:text-4xl text-white">Tres modos en uno</h3>
					<p class="text-white my-8 md:text-xl">
						Nintendo Switch está diseñado para adaptarse a tu vida, transformándose de una consola doméstica a un
						sistema portátil en un instante.
					</p>
					<BtnConsoles
						console="Hola buengas tardes, estoy interesado en la Nintendo switch"
						border="ring-white"
						button="bg-white"
					/>
				</div>
			</div>
		</div>
		<!-- MODOS DE LA SWITCH -->
		<div class="grid grid-cols-1 md:grid-cols-3 mt-5 md:mt-10">
			<div class="flex flex-col items-center text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-20 h-20 fill-current text-red-600">
					<path
						d="M22 4v12h-20v-12h20zm2-2h-24v16h24v-16zm-17.836 5h5.673v1.418h-2.01v4.582h-1.653v-4.582h-2.01v-1.418zm9.961 0l-1.158 3.653-1.151-3.653h-1.701l1.942 6h1.792l1.986-6h-1.71zm-9.125 13c1 1.194 2.862 2 5 2s4-.806 5-2h-10z"
					/>
				</svg>

				<p class="text-lg">Acople su Nintendo Switch para disfrutar de juegos HD en su televisor.</p>
			</div>

			<div class="flex flex-col items-center text-center my-5 md:my-0">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-20 h-20 fill-current text-red-600">
					<path
						d="M24 5c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-14zm-3 14h-18v-14h18v14zm1.5-6.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5z"
					/>
				</svg>

				<p class="text-lg">
					Da la vuelta al soporte para compartir la pantalla y luego comparte la diversión con un juego
					multijugador.
				</p>
			</div>

			<div class="flex flex-col items-center text-center">
				<svg
					height="512pt"
					viewBox="0 -96 512 512"
					width="512pt"
					xmlns="http://www.w3.org/2000/svg"
					class="fill-current text-red-600 w-20 h-20"
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

				<p class="text-lg">Recógelo y juega con los controladores Joy-Con ™ adjuntos.</p>
			</div>
		</div>

		<!-- JOY-CONS -->
		<div class="mt-10 lg:mt-14">
			<h2 class="text-4xl lg:text-5xl font-bold">Joy-Cons</h2>
			<div class="bg-blue-700 mt-10 flex flex-col lg:flex-row items-center justify-around">
				<div class="text-center p-3">
					<p class="text-white my-8 md:text-lg">
						Presentamos Joy-Con, controladores que hacen posible nuevos tipos de juegos, para usar con Nintendo
						Switch. Se pueden usar dos Joy-Con de forma independiente en cada mano, o juntos como un controlador de
						juego cuando se conectan a la empuñadura Joy-Con.
					</p>
					<router-link to="/accesorios">
						<button class="rounded-full hover:ring-2 ring-white p-1 mt-4">
							<p class="rounded-full font-bold py-2 px-5 bg-white text-sm md:text-lg">
								Más informacion
							</p>
						</button>
					</router-link>
				</div>
				<img
					src="/img/hardware/switch/joy-cons banner.png"
					loading="lazy"
					alt="Switch console"
					class="w-header"
				/>
			</div>
		</div>

		<!-- SWITCH LITE -->
		<div class="mt-10 lg:mt-14 mb-24">
			<h2 class="text-4xl lg:text-5xl font-bold">Nintendo Switch Lite</h2>
			<div
				class="bg-lite lg:bg-gradient-to-t from-gray-50  mt-10 flex flex-col lg:flex-row items-center justify-around"
			>
				<div class="text-center p-3">
					<h3 class="text-3xl md:text-4xl">Dedicado al juego portátil</h3>
					<p class="my-8 md:text-lg">
						El sistema para jugadores en movimiento. El Nintendo Switch Lite está diseñado específicamente para
						jugar en la computadora de mano, por lo que puede saltar a sus juegos favoritos donde quiera que esté.
					</p>
					<BtnConsoles
						console="Hola buengas tardes, estoy interesado en la Nintendo switch lite"
						border="ring-red-700"
						button="text-white bg-red-700"
					/>
				</div>
				<img
					src="/img/hardware/switch/nintendo switch lite consoles.jpeg"
					loading="lazy"
					alt="Switch lite console"
					class="w-header"
				/>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 md:gap-x-3 mt-10">
				<div class="flex flex-col items-center text-center">
					<h4 class="font-bold text-red-600 text-2xl mb-3">Compacto y ligero</h4>
					<p>
						Con su diseño liviano y elegante, este sistema está listo para salir a la carretera cuando usted lo
						esté.
					</p>
				</div>
				<div class="flex flex-col items-center text-center my-10 lg:my-0">
					<h4 class="font-bold text-red-600 text-2xl mb-3">Controladores integrados</h4>
					<p>
						Los controladores están integrados en el sistema para jugar con la computadora de mano, y el lado
						izquierdo tiene un panel de control +.
					</p>
				</div>
				<div class="flex flex-col items-center text-center">
					<h4 class="font-bold text-red-600 text-2xl mb-3">Juegos compatibles</h4>
					<p>
						El sistema Nintendo Switch Lite reproduce la biblioteca de juegos de Nintendo Switch que funcionan en
						modo portátil.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BtnConsoles from '@/components/buttons/BtnConsoles.vue';

export default {
	components: {
		BtnConsoles,
	},
};
</script>
