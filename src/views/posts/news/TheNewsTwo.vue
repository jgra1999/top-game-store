<template>
	<div class="w-full h-14"></div>
	<div class="container xl:mt-10 w-full md:w-11/12 bg-white p-5 md:p-10">
		<div>
			<div class="flex justify-between items-start md:items-center">
				<div class="flex flex-col md:flex-row gap-y-2 md:gap-x-4 md:items-center text-white font-bold text-xs">
					<span class="p-2 bg-red-700 rounded">Top Games Store</span>
					<span class="p-2 bg-red-700 rounded">Noticias</span>
					<span class="p-2 bg-red-700 rounded">PC</span>
					<span class="p-2 bg-red-700 rounded">Estrenos</span>
				</div>
				<div class="flex items-center gap-1 text-gray-500">
					<ClockIcon class="w-4 h-4" />
					<span class="text-xs md:text-sm"> Jueves 30 de septiembre del 2021</span>
				</div>
			</div>
			<h2 class="font-bold my-5 text-4xl md:text-5xl">
				El primer videojuego producido por Amazon, se ha estrenado con un gran éxito
			</h2>
			<p class="text-gray-600 text-sm">
				Tras cinco años en desarrollo, este título de rol online para PC ambientado en un mundo de fantasía va
				camino de alcanzar el millón de jugadores simultáneos en su día de estreno.
			</p>
		</div>

		<div class="w-full h-64 lg:h-110 my-10">
			<img src="/img/news/new world.jpeg" class="w-full h-full" loading="lazy" alt="imagen new world" />
		</div>

		<div>
			<p class="md:text-lg">
				Estrenado el pasado 28 de septiembre <strong>New World</strong> el esperado MMO de Amazon Games ya es uno
				de los juegos más exitosos de la historia de Steam, y basta con pasar un tiempo sumergido en Aetérnum para
				descubrir que la clave del éxito es tan sencilla como garantizar una jugabilidad libre y divertida.
				<br />
				<br />
				<strong>New World</strong> parece haber sido diseñado algorítmicamente para atrapar a cualquiera que desee
				un gran MMO. Cumple todos los requisitos y, como beneficio adicional, aprovecha inteligentemente el deseo
				aparentemente inagotable de nuevos juegos de creación y supervivencia. Encanta con sus numerosos sistemas
				de progresión y tiene la impresionante capacidad de hacer que cortar 100 árboles a las 2 am parezca una
				perspectiva razonable, incluso entretenida.
				<br />
				<br />
				Estéticamente, el juego tiene una clara inspiración en la colonización de América, aunque con la magia y
				los elementos sobrenaturales tan presentes en la mayoría de grandes éxitos de este género, como World of
				Warcraft o Final Fantasy XIV
			</p>
		</div>

		<div class="w-full xl:w-3/4 mx-auto h-64 sm:h-72 md:h-96 lg:h-100 xl:h-102 mt-5 lg:my-10">
			<iframe
				class="w-full h-full rounded"
				src="https://www.youtube.com/embed/m1C5dLnvlzg"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
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
