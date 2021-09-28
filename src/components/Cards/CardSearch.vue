<template>
	<div class="bg-white p-5 w-108 flex justify-between rounded shadow-md">
		<img :src="imageUrl" :alt="`image ${name}`" class="w-36 h-44 rounded" />

		<div class="text-right">
			<h3 class="text-xl font-bold">{{ name }}</h3>
			<p class="my-4">
				Precio: <span class="text-red-600">$ {{ price }}</span>
			</p>
			<button class="rounded-full hover:ring-2 ring-red-700 p-1 mt-4">
				<p class="rounded-full font-bold text-white py-2 px-5 bg-red-700 text-xs">
					Agregar al carrito
				</p>
			</button>
			<button class="rounded-full hover:ring-2 ring-red-700 p-1 mt-4">
				<p class="rounded-full font-bold text-white py-2 px-5 bg-red-700 text-xs">
					Ver Analisis
				</p>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['imageUrl', 'name', 'price'],
};
</script>
