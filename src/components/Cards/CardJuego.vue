<template>
	<div
		class="container p-6 lg:p-12 capitalize"
		:class="{ 'grid grid-cols-1 justify-items-center md:grid-cols-2 md:gap-x-10 md:items-center': row == true }"
	>
		<div class="h-64 md:h-96">
			<img
				:src="image"
				:alt="`image ${name}`"
				loading="lazy"
				class="h-full"
				:class="{ 'h-auto': row == true }"
			/>
		</div>

		<div>
			<h3 class="mt-3 md:mt-5 text-4xl md:text-3xl lg:text-4xl font-semibold">{{ name }}</h3>

			<slot name="description"></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		image: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		row: {
			type: Boolean,
		},
	},
};
</script>
