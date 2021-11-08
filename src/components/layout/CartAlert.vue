<template>
	<div class="fixed flex items-center -right-56 top-24 bg-yellow-400 rounded-lg p-4 text-white" id="alert">
		Producto agregado
		<ShoppingCartIcon class="w-5 h-5 ml-2" />
	</div>
</template>

<script>
import { ShoppingCartIcon } from '@heroicons/vue/solid';
export default {
	components: { ShoppingCartIcon },
};
</script>

<style>
#alert {
	transition: 0.5s ease all;
}
</style>
