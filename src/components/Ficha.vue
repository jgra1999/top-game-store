<template>
	<div class="bg-white shadow-lg w-4/5 h-72 absolute -bottom-24 p-5 ">
		<div class="flex">
			<img src="@/assets/caratula-MH.jpg" alt="" class="w-44 h-60" />
			<div class="ml-4">
				<h2 class="text-4xl font-bold">Monster Hunter Stories 2: Wings of Ruin</h2>
				<div class="my-4 flex items-center">
					<img src="@/assets/clasificacion-E.png" alt="" class="w-18 h-20" />
					<p class="ml-4 text-sm font-semibold">
						Contenido para todo tipo de edad, violencia de fantasia o ligera, dialogos neutros.
					</p>
				</div>
				<p>
					Monster Hunter Stories 2: Wings of Ruin es un videojuego de rol desarrollado por Capcom y Marvelous
					y publicado por Capcom para Nintendo Switch y Microsoft Windows . Es un título derivado de la
					Monster Hunter serie y una secuela de Monster Hunter Stories (2016). El juego fue lanzado en todo el
					mundo el 9 de julio de 2021.
				</p>

				<div class="absolute top-4 right-4 ">
					<p class="font-bold ml-2 mb-2">Precio: 35$</p>
					<button class="rounded-full hover:ring-2 ring-red-700 pt-2 pb-2.5 px-1 duration-300 ">
						<a href="#" class="rounded-full  font-bold text-white text-sm py-2 px-5 bg-red-700">
							Agregar al carrito
						</a>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Ficha',
};
</script>
