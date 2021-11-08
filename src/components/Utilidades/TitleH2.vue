<template>
	<div class="px-2">
		<h2 class="text-2xl md:text-4xl font-bold ml-2 border-b-4 border-red-700 pb-3">
			{{ title }}
		</h2>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
		},
	},
};
</script>
