<template>
	<a :href="`https://wa.me/+584145831111?text=${console}?`" target="_blank">
		<button :class="`rounded-full hover:ring-2 ${border} p-1 mt-4`">
			<p :class="`rounded-full font-bold py-2 ${button} px-5 text-sm md:text-lg`">
				Consultar disponibilidad
			</p>
		</button>
	</a>
</template>

<script>
export default {
	props: {
		console: {
			type: String,
			required: true,
		},
		border: {
			type: String,
			required: true,
		},
		button: {
			type: String,
			required: true,
		},
	},
};
</script>
