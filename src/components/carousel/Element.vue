<template>
	<div class="px-2">
		<router-link :to="url">
			<div class="pb-2 border-b-2 border-red-700 hover:border-yellow-300 duration-300">
				<!-- class="rounded-lg h-36 md:h-32 xl:h-40" -->
				<img :src="img" :alt="`imagen ${title}`" loading="lazy" class="w-full h-40" />
				<div>
					<p class="font-bold text-base md:text-lg my-4">{{ title }}</p>
					<p class="text-xs font-normal">{{ console }}</p>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	props: {
		url: String,
		title: String,
		console: String,
		img: String,
	},
};
</script>
