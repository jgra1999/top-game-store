<template>
	<h3 class="text-2xl md:text-3xl lg:text-4xl font-bold my-10  border-b-4 border-red-700 pb-4">
		{{ title }}
	</h3>
</template>

<script>
export default {
	props: {
		title: String,
	},
};
</script>
