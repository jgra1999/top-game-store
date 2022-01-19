<template>
	<div class=" w-full h-14"></div>
	<div class="container xl:mt-10 w-full md:w-11/12 bg-white p-5 md:p-10">
		<div>
			<div class="flex justify-between items-start md:items-center">
				<div class="flex flex-col md:flex-row gap-y-2 md:gap-x-4 md:items-center text-white font-bold text-xs">
					<span class="p-2 bg-red-700 rounded">Top Games Store</span>
					<span class="p-2 bg-red-700 rounded">Noticias</span>
					<span class="p-2 bg-red-700 rounded">Nintendo Switch</span>
				</div>
				<div class="flex items-center gap-1 text-gray-500">
					<ClockIcon class="w-3 md:w-4 h-3 md:h-4" />
					<span class="text-xs md:text-sm"> Martes 12 de octubre del 2021</span>
				</div>
			</div>
			<h2 class="font-bold my-5 text-4xl md:text-5xl">GTA Trilogy llegará a Nintendo Switch</h2>
			<p class="text-gray-600 text-sm">
				Se confirma que la trilogía remasterizada de Grand Thef Auto llegará a Nintendo Switch
			</p>
		</div>

		<div class="w-full h-64 lg:h-110 my-10">
			<img src="/img/news/gta-trilogy.jpg" class="w-full h-full" loading="lazy" alt="imagen gta trilogy" />
		</div>

		<div>
			<p class="md:text-lg">
				Una loca fantasía finalmente se hace realidad: tenemos <strong>Grand Theft Auto</strong> en Nintendo
				Switch. Han pasado más de diez años desde la última vez que tuvimos un GTA en las consolas de Nintendo,
				que fue Grand Theft Auto: Chinatown Wars en la DS, y desde entonces el simulador de robo de autos y golpes
				de peatones se ha limitado en gran medida a PlayStations y Xboxes.
				<br />
				<br />
				Pero a partir de hoy, Nintendo está de vuelta en el juego, ya que Rockstar anunció que traerán
				<strong>Grand Theft Auto: The Trilogy - The Definitive Edition</strong> a Nintendo Switch, así como otras
				"plataformas de generación actual", incluidas PS4, PS5, Xbox One y Xbox Series S y X, así como un
				lanzamiento de iOS y Android en 2022.
			</p>
		</div>

		<div class="w-full xl:w-3/4 mx-auto h-64 sm:h-72 md:h-96 lg:h-100 xl:h-102 my-5 lg:my-10">
			<iframe
				class="w-full h-full rounded"
				src="https://www.youtube.com/embed/896J3Txjjz0"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>

		<div>
			<p class="text-lg">
				La trilogía incluirá <strong>GTA 3 , GTA: Vice City y GTA: San Andreas</strong> , y contará con gráficos
				mejorados y mejoras de juego modernas, manteniendo el "aspecto clásico" de los juegos originales.
				<br /><br />
				Según la misma Rockstar en su presentación, estas ediciones remasterizadas incluyen "una brillante y nueva
				iluminación y mejoras ambientales, con texturas de alta resolución y distancias de dibujo incrementadas,
				controles y miras al estilo de Grand Theft Auto V y mucho más, trayendo estos amados mundos a la vida con
				un montón de nuevos niveles de detalle."
				<br /><br />
				El juego estará disponible en formato digital a partir del próximo 11 de noviembre y en formato físico el
				7 de diciembre.
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
