<template>
	<!-- class="w-64 h-56 border-b-2 border-red-700 hover:border-yellow-400 duration-300 -right-56 opacity-50 sm:w-72 sm:h-56 
				md:w-64 md:h-56 md:static md:opacity-100 lg:w-64 xl:w-72 xl:h-60" -->
	<div class="min-w-full md:min-w-1/2 lg:min-w-2/6 xl:min-w-1/4 px-3 ">
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
