<template>
	<div>
		<Navbar />
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
	components: {
		Navbar,
	},
};
</script>

<style>
html {
	scroll-behavior: smooth;
}
#app {
	font-family: 'Noto Sans SC', sans-serif;
}
</style>
