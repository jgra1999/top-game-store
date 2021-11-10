<template>
	<div class=" w-full h-14"></div>
	<div class="container xl:mt-10 w-full md:w-11/12 bg-white p-5 md:p-10">
		<div>
			<div class="flex justify-between items-start md:items-center">
				<div class="flex flex-col md:flex-row gap-y-2 md:gap-x-4 md:items-center text-white font-bold text-xs">
					<span class="p-2 bg-red-700 rounded">Noticias</span>
					<span class="p-2 bg-red-700 rounded">Playstation</span>
				</div>
				<div class="flex items-center gap-1 text-gray-500">
					<ClockIcon class="w-3 md:w-4 h-3 md:h-4" />
					<span class="text-xs md:text-sm"> Sabado 11 de septiembre del 2021</span>
				</div>
			</div>
			<h2 class="font-bold my-5 text-4xl md:text-5xl">
				God of War Ragnarok, kratos reaparece a lo grande
			</h2>
			<p class="text-gray-600 text-sm">
				PlayStation ha confirmado que la historia transcurre años después de los hechos narrados en el juego
				anterior.
			</p>
		</div>

		<div class="w-full h-64 lg:h-110 my-10">
			<img
				src="/img/news/gow ragnarok.jpeg"
				class="w-full h-full"
				loading="lazy"
				alt="imagen god of war ragnarok"
			/>
		</div>

		<div>
			<p class="md:text-lg">
				<strong>God of War: Ragnarok</strong> finalmente es oficial, durante mucho tiempo, se asumió el nombre del
				juego, y la rumorología estaba trabajando arduamente para tratar de disuadir a los fanáticos de que
				Ragnarok sería el sufijo final del título. El juego ya está haciendo grandes promesas: el desarrollador
				Sony's Santa Monica Studio ha prometido que el juego entrante completará la historia nórdica del juego de
				2018, <strong>God of War</strong> ... así que sabes que hay mucho en juego.
				<br />
				<br />
				El apetito de los fanáticos por el juego también es bastante alto,
				<strong> God Of War: Ragnarok</strong> actualmente tiene la mayor cantidad de vistas de todos los avances
				lanzados en el Sony PlayStation Showcase que tuvo lugar el 9 de septiembre. Dado que la mayoría de esos
				avances están en el muiti -Millones de visitas, eso es impresionante.
				<strong>God of War: Ragnarok</strong> actualmente tiene más de 10 millones de visitas, seguido de cerca
				por Spider-Man 2 con 9 millones. ¿Quién dijo que el deseo de los fanáticos por las exclusivas de Sony
				estaba disminuyendo?
			</p>
		</div>

		<div class="w-full xl:w-3/4 mx-auto h-64 sm:h-72 md:h-96 lg:h-100 xl:h-102 my-5 lg:my-10">
			<iframe
				class="w-full h-full rounded"
				src="https://www.youtube.com/embed/EE-4GvjKcfs"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>

		<div>
			<p class="text-lg">
				El juego continuará más o menos directamente desde el título anterior, con Kratos y Atreus aventurándose
				una vez más en el antiguo mundo nórdico, intentando poner fin a ese fin del mundo del mismo nombre
				Ragnarok del . Para todo lo que necesitas saber sobre el juego, incluida la de God of War Ragnarok fecha
				de lanzamiento , sigue leyendo a continuación.
				<br /><br />
				En el Sony PlayStation Showcase el 9 de septiembre, el desarrollador Sony Santa Monica y el editor
				PlayStation Studios anunciaron que God of War Ragnarok se retrasó hasta 2022.
				<br /><br />
				Este será el juego final en el arco nórdico de la serie. El director , Cory Balrog, explicó por qué la
				historia nórdica está llegando a su fin durante una entrevista con el canal de YouTube Kaptain Kuba.
				<br /><br />
				“Creo que una de las razones más importantes es que el primer juego tomó cinco años, el segundo juego, no
				sé cuánto tiempo va a tomar, pero voy a decir que va a tomar cerca de un tiempo similar para hacer esto,
				correcto, y luego, si piensas, wow, una tercera en ese mismo (período de tiempo), estamos hablando como un
				lapso de cerca de 15 años de una sola historia y siento que eso es demasiado extendido" comento Cory
				Balrog.
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
