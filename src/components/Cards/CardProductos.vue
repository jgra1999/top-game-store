<template>
	<div v-if="game.stock >= 1" class="flex flex-col items-center bg-white rounded-xl shadow-lg p-3 w-72 h-96">
		<img :src="game.image_url" :alt="`image ${game.name}`" loading="lazy" class="w-4/5 h-64 rounded-xl" />

		<div class="text-left w-4/5 mt-3">
			<p class="text-red-700 text-xl font-bold">{{ game.price }} $</p>
		</div>

		<button class="rounded-full hover:ring-2 ring-red-700 p-1 mt-4 w-full" @click="addCart(game)">
			<p class="rounded-full font-bold text-white py-2 px-5 bg-red-700 text-xs md:text-sm">
				Agregar al carrito
			</p>
		</button>
	</div>

	<div v-else class="flex flex-col items-center bg-white rounded-xl shadow-lg p-3 w-72 h-96">
		<img
			:src="game.image_url"
			:alt="`image ${game.name}`"
			loading="lazy"
			class="w-4/5 h-64 rounded-xl opacity-50"
		/>

		<div class="text-left w-4/5 mt-3">
			<p class="text-red-700 text-xl font-bold">{{ game.price }} $</p>
		</div>

		<div class="mt-4">
			<p class="text-red-600 font-bold text-lg">No disponible</p>
		</div>
	</div>
</template>

<script>
import { useStore } from 'vuex';

export default {
	props: ['game'],

	setup() {
		const store = useStore();

		function addCart(game) {
			store.dispatch('addToCart', game);

			const activeAlert = document.getElementById('alert');
			const shoppingCart = document.getElementById('carrito');

			shoppingCart.classList.add('animate-bounce');

			activeAlert.classList.remove('-right-56');
			activeAlert.classList.add('right-4');

			setTimeout(() => {
				activeAlert.classList.add('-right-56');
				activeAlert.classList.remove('right-4');
				shoppingCart.classList.remove('animate-bounce');
			}, 4000);
		}

		return { addCart };
	},
};
</script>
