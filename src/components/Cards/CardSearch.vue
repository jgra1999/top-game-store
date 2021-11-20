<template>
	<div
		v-if="game.stock >= 1"
		class="bg-white p-5 w-72 md:w-108 flex flex-col items-center md:items-start md:flex-row md:justify-between rounded shadow-md"
	>
		<img
			:src="game.image_url"
			:alt="`image ${game.name}`"
			loading="lazy"
			class="w-4/5 h-64 md:w-52 md:h-48 rounded-xl"
		/>

		<div class="mt-5 md:mt-0 md:text-right w-full">
			<h3 class="text-xl font-bold">{{ game.name }}</h3>
			<p class="my-4">
				Precio: <span class="text-red-600 font-bold">$ {{ game.price }}</span>
			</p>

			<div>
				<button
					class="rounded-full active:ring-2 lg:hover:ring-2 ring-red-700 p-1 mt-4 w-full md:w-auto"
					@click="addCart(game)"
				>
					<p class="rounded-full font-bold text-white py-2 px-5 bg-red-700 text-xs">
						Agregar al carrito
					</p>
				</button>
			</div>
		</div>
	</div>
	<div
		v-else
		class="bg-white p-5 w-72 md:w-108 flex flex-col items-center md:items-start md:flex-row md:justify-between rounded shadow-md"
	>
		<img
			:src="game.image_url"
			:alt="`image ${game.name}`"
			loading="lazy"
			class="w-4/5 h-64 md:w-40 md:h-48 rounded-xl opacity-50"
		/>

		<div class="mt-5 md:mt-0 md:text-right">
			<h3 class="text-xl font-bold">{{ game.name }}</h3>

			<p class="my-4">
				Precio: <span class="text-red-600">$ {{ game.price }}</span>
			</p>

			<div class="mt-4">
				<p class="text-red-600 font-bold text-lg">No disponible</p>
			</div>
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
