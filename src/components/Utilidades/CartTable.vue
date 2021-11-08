<template>
	<div class="my-20 hidden md:flex flex-col w-3/4">
		<h3 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
			Carrito de Compras
		</h3>
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
					<table class="min-w-full divide-y divide-gray-200">
						<thead class="bg-gray-200">
							<tr>
								<th
									scope="col"
									class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
								>
									Producto
								</th>
								<th
									scope="col"
									class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
								>
									Precio
								</th>
								<th
									scope="col"
									class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
								>
									Unidades
								</th>
								<th scope="col" class="relative px-6 py-3">
									<span class="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-gray-200">
							<tr v-for="item in items" :key="item.id">
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="flex items-center">
										<div class="ml-4">
											<div class="text-base font-medium text-gray-900">
												{{ item.name }}
											</div>
											<div class="text-xs text-gray-500">
												{{ item.consoles.name }}
											</div>
										</div>
									</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="text-sm text-gray-900">{{ item.price * item.cantidad }} $</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-600 text-white">
										{{ item.cantidad }}
									</span>
								</td>
								<td class="px-2 py-4 whitespace-nowrap text-center">
									<button @click="increment(item.id)">
										<PlusIcon class="w-5 h-5 mr-5 hover:text-green-500" />
									</button>
									<button @click="decrement(item.id)">
										<MinusIcon class="w-5 h-5 hover:text-red-600" />
									</button>
								</td>
							</tr>
						</tbody>
					</table>
					<div v-if="Object.keys(items).length === 0" class="bg-white text-center py-2">
						No has agregado ningun producto
					</div>
					<div
						class="flex justify-between items-center bg-gray-200 py-2 px-10"
						v-if="Object.keys(items).length > 0"
					>
						<div class="text-sm text-gray-700">Total productos: {{ totalAmount }}</div>

						<div class="text-sm text-gray-700">Total a pagar: {{ totalToPay }}$</div>

						<button class="flex items-center text-red-400 hover:text-red-600 duration-300 text-sm" @click="clear">
							Vaciar carrito
							<TrashIcon class="w-5 h-5" />
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="flex justify-between mt-10">
			<router-link to="/buscar" class="flex items-center hover:text-red-600 duration-300">
				<ChevronLeftIcon class="w-5 h-5" />
				Seguir comprando
			</router-link>

			<router-link
				to="/finalizar-compra"
				class="flex items-center bg-green-500 hover:bg-green-600 text-white py-2 px-2.5 rounded-full"
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
