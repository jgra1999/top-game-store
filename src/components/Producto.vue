<template>
	<div class="flex flex-col items-center lg:text-center">
		<img :src="juego" alt="" class="w-24 h-32 md:w-32 md:h-40 lg:w-48 lg:h-60 rounded-xl shadow-xl" />

		<button class="rounded-full hover:ring-2 ring-red-700 py-1 px-1 duration-300  mt-4">
			<p class="rounded-full font-bold text-white py-2 px-5 bg-red-700 text-xs md:text-sm">
				Agregar al carrito
			</p>
		</button>
	</div>
</template>

<script>
export default {
	name: 'Productos',
	props: ['juego'],
};
</script>
