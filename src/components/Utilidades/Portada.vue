<template>
	<div class="relative">
		<img :src="imageUrl" loading="lazy" :alt="`wallpaper ${description}`" class="h-100 xl:h-header w-full" />

		<div class="absolute w-full bottom-6 xl:bottom-40 flex flex-col items-center text-center">
			<img
				:src="logoUrl"
				:alt="`logo ${console}`"
				class="h-24 xl:w-96 xl:h-28"
				:class="{ 'w-72': (console = 'Nintedo') }"
			/>
			<p class="text-white text-2xl xl:text-4xl mt-2">{{ message }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ['imageUrl', 'description', 'logoUrl', 'console', 'message'],
};
</script>
