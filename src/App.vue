<template>
	<div class="w-full">
		<Navbar />

		<CartAlert />

		<Whatsapp />

		<Footer />
	</div>
</template>

<script>
import Navbar from '@/components/layout/TheNavbar.vue';
import Footer from '@/components/layout/TheFooter.vue';
import CartAlert from '@/components/layout/CartAlert.vue';
import Whatsapp from '@/components/layout/Whatsapp.vue';

export default {
	components: {
		Navbar,
		Footer,
		CartAlert,
		Whatsapp,
	},
};
</script>

<style>
#app {
	font-family: 'Noto Sans SC', sans-serif;
	background: #f7f7f7;
}
</style>
