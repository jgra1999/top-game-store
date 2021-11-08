<template>
	<div class="my-10 md:hidden">
		<h3 class="text-2xl font-bold mb-10 ml-4">
			Carrito de Compras
		</h3>
		<p v-if="Object.keys(items).length === 0">No has agregado ningun producto</p>
		<div class="bg-white divide-y divide-gray-200 shadow-md">
			<div class="flex justify-between items-center w-screen py-2 px-4" v-for="item in items" :key="item.id">
				<img :src="item.image_url" :alt="`image ${item.name}`" loading="lazy" class="max-h-20 w-16" />
				<div>
					<div>
						{{ item.name }}
					</div>
					<div class="text-xs text-gray-500 flex justify-between">
						<div>
							<p>Cantidad: {{ item.cantidad }}</p>
						</div>
						<div class="ml-5">
							<p>{{ item.price * item.cantidad }} $</p>
						</div>
					</div>
				</div>

				<div>
					<button @click="increment(item.id)">
						<PlusIcon class="w-5 h-5 mr-5 active:text-green-500" />
					</button>
					<button @click="decrement(item.id)">
						<MinusIcon class="w-5 h-5 active:text-red-600" />
					</button>
				</div>
			</div>
			<div class="flex justify-between items-center bg-gray-200 py-2 px-2" v-if="Object.keys(items).length > 0">
				<div class="text-xs text-gray-700">Total productos: {{ totalAmount }}</div>

				<div class="text-xs text-gray-700">Total a pagar: {{ totalToPay }}$</div>

				<button class="flex items-center text-red-400 active:text-red-600  text-xs" @click="clear">
					Vaciar carrito
					<TrashIcon class="w-5 h-5" />
				</button>
			</div>
		</div>
		<div class="flex justify-between mt-10 px-2">
			<router-link to="/buscar" class="flex items-center text-xs active:text-red-600 ">
				<ChevronLeftIcon class="w-5 h-5" />
				Seguir comprando
			</router-link>

			<router-link
				to="/finalizar-compra"
				class="flex items-center text-xs bg-green-500 active:bg-green-600 text-white py-2 px-2.5 rounded-full"
				v-if="Object.keys(items).length > 0"
			>
				Realizar compra
				<CreditCardIcon class="w-5 h-5 ml-2" />
			</router-link>
		</div>
	</div>
</template>

<script>
import { PlusIcon, MinusIcon, ChevronLeftIcon, TrashIcon } from '@heroicons/vue/solid';
import { CreditCardIcon } from '@heroicons/vue/outline';

import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
	props: ['items'],

	components: { PlusIcon, MinusIcon, ChevronLeftIcon, CreditCardIcon, TrashIcon },

	setup() {
		const store = useStore();

		const totalAmount = computed(() => store.getters.totalAmount);
		const totalToPay = computed(() => store.getters.totalToPay);

		function clear() {
			store.commit('clearCart');
		}

		function increment(id) {
			store.commit('incrementItem', id);
		}

		function decrement(id) {
			store.commit('decrementItem', id);
		}

		return { totalAmount, totalToPay, clear, increment, decrement };
	},
};
</script>
