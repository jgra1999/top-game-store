<template>
	<div class="w-full h-14"></div>
	<div class="flex justify-center">
		<CartTable :items="items" />
		<CartList :items="items" />
	</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import CartTable from '@/components/Utilidades/CartTable.vue';
import CartList from '@/components/Utilidades/CartList.vue';

export default {
	components: { CartTable, CartList },

	setup() {
		const store = useStore();

		const items = computed(() => store.state.cart);

		return { items };
	},
};
</script>
