<template>
	<div class=" w-40 text-center p-4 cursor-pointer hover:shadow-xl duration-300">
		<img :src="imageUrl" :alt="`image ${name}`" class="h-40" />
		<p class="mt-5">{{ name }}</p>
	</div>
</template>

<script>
export default {
	props: {
		imageUrl: String,
		name: String,
	},
};
</script>
