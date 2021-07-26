<template>
	<div class="flex flex-col items-center bg-white w-64 h-96 p-4 shadow-md rounded">
		<div class="relative">
			<img :src="juego" alt="" class="w-44 h-56 rounded mb-2" />
			<div
				class="bg-red-700 uppercase text-white text-md font-bold absolute bottom-2 w-full rounded-b"
				v-if="precioAnterior"
			>
				oferta
			</div>
		</div>
		<div class="text-left w-full">
			<p class="font-bold text-lg capitalize">{{ nombre }}</p>
			<p class=" text-xs text-gray-400 font-semibold">{{ precioAnterior }}</p>
			<p class="text-red-700 font-semibold">{{ precio }}$</p>
		</div>
		<button class="py-2 px-10 bg-red-700 text-white rounded mt-5 font-bold">Agregar al Carrito</button>
	</div>
</template>

<script>
export default {
	name: 'CardProductos',
	props: ['juego', 'nombre', 'precio', 'precioAnterior'],
};
</script>
