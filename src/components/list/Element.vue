<template>
	<div class="flex items-center mt-8 md:mt-20 ">
		<div v-if="img">
			<img :src="img" :alt="`imagen ${title}`" loading="lazy" class="w-48 h-56 rounded-md hidden lg:block" />
		</div>
		<div class="ml-5 w-full ">
			<h3 class="text-2xl md:text-3xl lg:text-4xl font-bold border-b-4 border-red-700 pb-4 capitalize">
				{{ title }}
			</h3>
			<slot name="description"></slot>
		</div>
	</div>

	<div class="w-full xl:w-3/4 mx-auto h-64 sm:h-72 md:h-96 lg:h-100 xl:h-102 mt-5 lg:mt-10" v-if="youtubeUrl">
		<iframe
			class="w-full h-full rounded"
			:src="youtubeUrl"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		img: String,
		youtubeUrl: String,
	},
};
</script>

<style></style>
