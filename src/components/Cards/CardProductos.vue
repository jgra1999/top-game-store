<template>
	<div class="flex flex-col items-center bg-white rounded-xl shadow-lg p-3 w-72 h-96">
		<img :src="imageUrl" :alt="`image ${name}`" loading="lazy" class="w-4/5 h-64 rounded-xl" />

		<div class="text-left w-4/5 mt-3">
			<p class="text-red-700 text-xl font-bold">{{ price }} $</p>
		</div>

		<Button />
	</div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
	name: 'Productos',
	props: ['imageUrl', 'name', 'price'],

	components: {
		Button,
	},
};
</script>
