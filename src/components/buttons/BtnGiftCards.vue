<template>
	<a :href="`https://wa.me/+584145831111?text=${card}`" target="_blank" class="w-full">
		<button class="rounded-full hover:ring-2 ring-red-700 p-1 mt-4 w-full">
			<p class="rounded-full font-bold text-white py-2 px-5 bg-red-700 text-xs md:text-sm">
				Consigue la tuya
			</p>
		</button>
	</a>
</template>

<script>
export default {
	props: {
		card: {
			type: String,
			required: true,
		},
	},
};
</script>
