<template>
	<div>
		<Navbar />

		<Footer />
	</div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';

export default {
	components: {
		Navbar,
		Footer,
	},
};
</script>

<style>
#app {
	font-family: 'Noto Sans SC', sans-serif;
	background: #f7f7f7;
}
</style>
