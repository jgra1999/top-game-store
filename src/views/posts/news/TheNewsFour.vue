<template>
	<div class=" w-full h-14"></div>
	<div class="container xl:mt-10 w-full md:w-11/12 bg-white p-5 md:p-10">
		<div>
			<div class="flex justify-between items-start md:items-center">
				<div class="flex flex-col md:flex-row gap-y-2 md:gap-x-4 md:items-center text-white font-bold text-xs">
					<span class="p-2 bg-red-700 rounded">Top Games Store</span>
					<span class="p-2 bg-red-700 rounded">Noticias</span>
					<span class="p-2 bg-red-700 rounded">Playstation</span>
					<span class="p-2 bg-red-700 rounded">Xbox</span>
					<span class="p-2 bg-red-700 rounded">PC</span>
				</div>
				<div class="flex items-center gap-1 text-gray-500">
					<ClockIcon class="w-3 md:w-4 h-3 md:h-4" />
					<span class="text-xs md:text-sm"> Viernes 19 de noviembre del 2021</span>
				</div>
			</div>
			<h2 class="font-bold my-5 text-4xl md:text-5xl">
				Warner Bros. revela su juego Multiversus
			</h2>
			<p class="text-gray-600 text-sm">
				MultiVersus, el Smash Bros. de Warner, ya es oficial y lo tendremos en el 2022
			</p>
		</div>

		<div class="w-full h-64 lg:h-108 my-10">
			<img src="/img/news/MultiVersus.jpg" class="w-full h-full" loading="lazy" alt="imagen multiversus juego" />
		</div>

		<div>
			<p class="md:text-lg">
				<strong>MultiVersus</strong>, es un videojuego de lucha que está desarrollando y que se podría denominar
				el "Super Smash Bros". de la compañía debido a que las mecánicas comparten un gran parecido <br /><br />
				En el video revelacion, que se puede ver a continuación, ofrece un primer vistazo a la experiencia, que se
				centrará principalmente en dos contra dos partidos. El tráiler también revela los personajes del
				lanzamiento, que incluirán a Batman, Superman, Bugs Bunny, Finn y Jake de Adventure Time, Tom y Jerry y
				Arya Stark de Game of Thrones.
			</p>
		</div>

		<div class="w-full xl:w-3/4 mx-auto h-64 sm:h-72 md:h-96 lg:h-100 xl:h-102 my-5 lg:my-10">
			<iframe
				class="w-full h-full rounded"
				src="https://www.youtube.com/embed/iAlpLUGVwBY"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>

		<div>
			<p class="text-lg">
				<strong>MultiVersus</strong> está programado para su lanzamiento mundial en 2022 en las consolas
				PlayStation®5 (PS5 ™) y PlayStation®4, Xbox Series X | S, consolas Xbox One y PC con soporte completo de
				cross-play, código de red de reversión dedicado basado en servidor y contenido lleno estaciones. <br />
				<br />
				Lamentablemente no lo tendremos disponible en nintendo Switch, Te mantendremos informado sobre el juego
				tan pronto como lleguen más, así que estad atentos a las últimas novedades. Noticias.
			</p>
		</div>
	</div>
</template>

<script>
import { ClockIcon } from '@heroicons/vue/outline';

export default {
	components: {
		ClockIcon,
	},
};
</script>
