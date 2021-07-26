<template>
  <div class="about bg-gray-100">
    <img src="../assets/ratched-clank-fondo.jpg" alt="">
    <div class="container text-center w-full pt-28 relative z-10" id="switch">
				<h2 class="text-3xl font-bold uppercase">Juegos de PS5</h2>
				<div class="grid grid-cols-4 mt-10 justify-items-center">
					<CardProductos juego="/img/switch/luigis mansion.jpg" nombre="luigi's mansion 3" precio="35" />
					<CardProductos juego="/img/switch/mario kart 8.jpg" nombre="mario kart 8" precio="25" />
					<CardProductos juego="/img/switch/ssb ultimate.png" nombre="Super smash bros" precio="25" />
					<CardProductos juego="/img/switch/zelda.jpg" nombre="the legend of zelda" precio="45" />
					<CardProductos juego="/img/switch/zelda.jpg" nombre="the legend of zelda" precio="45" />
					<CardProductos juego="/img/switch/zelda.jpg" nombre="the legend of zelda" precio="45" />
					<CardProductos juego="/img/switch/zelda.jpg" nombre="the legend of zelda" precio="45" />
					<CardProductos juego="/img/switch/zelda.jpg" nombre="the legend of zelda" precio="45" />
				</div>
				
			</div>
      <Footer />
    
  </div>
</template>

<script>
import CardProductos from '@/components/CardProductos.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'JuegosPs5',
	components: {
		CardProductos,
		Footer,
	},
};
</script>
