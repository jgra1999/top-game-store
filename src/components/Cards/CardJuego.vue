<template>
	<div
		class="container p-6 lg:p-12"
		:class="{ 'grid grid-cols-1 md:grid-cols-2 md:gap-x-10 md:items-center': row == true }"
	>
		<div>
			<img :src="image" :alt="`image ${name}`" :class="{ 'h-52 lg:h-auto': row == true }" />
		</div>

		<div :class="{ 'text-white': name == 'Horizon Forbidden West' || name == 'Demons Souls' }">
			<h3 class="mt-3 md:mt-5 text-4xl md:text-3xl lg:text-4xl font-semibold">{{ name }}</h3>

			<slot name="description"></slot>

			<button class="rounded-full hover:ring-2 ring-red-700 p-1 mt-4">
				<p class="rounded-full font-bold text-white py-2 px-5 bg-red-700 text-base md:text-md">
					Ver Analisis
				</p>
			</button>
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
