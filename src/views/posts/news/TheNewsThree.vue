<template>
	<div class="w-full h-14"></div>
	<div class="container xl:mt-10 w-full md:w-11/12 bg-white p-5 md:p-10">
		<div>
			<div class="flex justify-between items-start md:items-center">
				<div class="flex flex-col md:flex-row gap-y-2 md:gap-x-4 md:items-center text-white font-bold text-xs">
					<span class="p-2 bg-red-700 rounded">Noticias</span>
					<span class="p-2 bg-red-700 rounded">Playstation</span>
				</div>
				<div class="flex items-center gap-1 text-gray-500">
					<ClockIcon class="w-4 h-4" />
					<span class="text-xs md:text-sm"> Miercoles 15 de septiembre del 2021</span>
				</div>
			</div>
			<h2 class="font-bold my-5 text-4xl md:text-5xl">
				La publicación de empleo de ingeniero de juego de Marvel's Wolverine enfatiza la violencia
			</h2>
			<p class="text-gray-600 text-sm">
				Una nueva lista de trabajos en Insomniac Games sugiere que Marvel's Wolverine tendrá mucha violencia y
				posiblemente una calificación M, y extremidades cortadas.
			</p>
		</div>

		<div class="w-full h-64 lg:h-110  my-10">
			<img src="/img/news/wolverine.jpg" class="w-full h-full" loading="lazy" alt="imagen marvels wolverine" />
		</div>

		<div>
			<p class="md:text-lg">
				La convocatoria de Insomniac Games para un puesto de ingeniero de juego para
				<strong>Marvel's Wolverine</strong> sugiere que el juego tendrá mucha violencia. Lobezno está asociado con
				la violencia gracias a sus diversas apariciones en X-Men los medios relacionados con , pero este lado de
				su personaje a menudo se minimiza en sus apariciones en videojuegos. Sin con Logan y X-Men Origins:
				Wolverine embargo, , los fanáticos pudieron disfrutar de una versión adecuada de Wolverine.
				<br />
				<br />
				Insomniac publicó recientemente una lista de trabajo para un ingeniero de juego, y el diseñador principal
				Drew Murray (a través de Game Rant ) señaló que los candidatos serán responsables de " crear cortes,
				cortes, cortes, cortes, cortes, puñaladas, * snikts * y todo lo demás que vaya con moviéndose y jugando
				como Logan . " Insomniac ya se burló de que Marvel's Wolverine será maduro , por lo que parece que el
				desarrollador podría estar haciendo un hack and slash bastante violento.
			</p>
		</div>

		<div class="w-full xl:w-2/4 mx-auto mt-5 lg:my-10">
			<blockquote class="twitter-tweet w-full h-full" data-lang="es" data-theme="dark">
				<p lang="en" dir="ltr">
					We&#39;re looking for a gameplay engineer
					<a href="https://twitter.com/insomniacgames?ref_src=twsrc%5Etfw">@insomniacgames</a> to focus on our
					hero, <a href="https://twitter.com/hashtag/Wolverine?src=hash&amp;ref_src=twsrc%5Etfw">#Wolverine</a>. If
					you&#39;re into creating cuts, slashes, gouges, severs, gashes, stabs, *snikts* and everything else that
					goes with moving and playing as Logan (there&#39;s a lot more!), link to apply below!
					<a href="https://t.co/6B6whF5ceE">https://t.co/6B6whF5ceE</a>
				</p>
				&mdash; Drew Murray (@DrewMaru29)
				<a href="https://twitter.com/DrewMaru29/status/1456734836110999557?ref_src=twsrc%5Etfw"
					>5 de noviembre de 2021</a
				>
			</blockquote>
		</div>

		<!-- <div class="w-full xl:w-3/4 mx-auto h-64 sm:h-72 md:h-96 lg:h-100 xl:h-102 mt-5 lg:my-10">
			<iframe
				class="w-full h-full rounded"
				src="https://www.youtube.com/embed/m1C5dLnvlzg"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div> -->
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
