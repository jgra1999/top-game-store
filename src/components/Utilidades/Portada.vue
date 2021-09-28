<template>
	<div class="relative">
		<img :src="imageUrl" loading="lazy" :alt="`wallpaper ${description}`" class="h-96 xl:h-header w-full" />

		<div class="absolute w-full bottom-6 xl:bottom-44 flex flex-col items-center text-center">
			<img
				:src="logoUrl"
				:alt="`logo ${console}`"
				class="h-20 xl:w-96 xl:h-28"
				:class="{ 'w-64': (console = 'Nintedo'), 'xl:w-104': console == 'PS' }"
			/>
			<p class="text-white text-2xl xl:text-4xl mt-2">{{ message }}</p>
		</div>
	</div>
</template>

<script>
export default {
	// props: ['imageUrl', 'description', 'logoUrl', 'console', 'message'],
	props: {
		imageUrl: String,
		description: String,
		logoUrl: String,
		console: String,
		message: String,
	},
};
</script>
