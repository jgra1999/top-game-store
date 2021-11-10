<template>
	<div class="bg-white shadow-lg p-5 lg:hidden">
		<div class="flex flex-col items-center">
			<h2 class="text-lg font-bold sm:text-2xl">Monster Hunter Stories 2: Wings of Ruin</h2>
			<div class="my-4 flex items-center">
				<img src="@/assets/clasificacion-E.png" alt="" loading="lazy" class="w-10 h-12" />
				<p class="ml-4 text-xs font-semibold">
					Contenido para todo tipo de edad, violencia de fantasia o ligera, dialogos neutros.
				</p>
			</div>
			<p class="text-sm">
				Monster Hunter Stories 2: Wings of Ruin es un videojuego de rol desarrollado por Capcom y Marvelous y
				publicado por Capcom para Nintendo Switch y Microsoft Windows . Es un título derivado de la Monster Hunter
				serie y una secuela de Monster Hunter Stories (2016). El juego fue lanzado en todo el mundo el 9 de julio
				de 2021.
			</p>
		</div>

		<div class="mt-5 flex items-center justify-center">
			<p class="font-bold text-sm mr-5">Precio: 35$</p>
			<button class="rounded-full hover:ring-2 ring-red-700 pt-2 pb-2.5 px-1 duration-300 ">
				<a href="#" class="rounded-full font-bold text-white text-xs py-2 px-5 bg-red-700">
					Agregar al carrito
				</a>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FichaPhone',
};
</script>
