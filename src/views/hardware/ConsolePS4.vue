<template>
	<div class="lg:block w-full h-14"></div>
	<Portada
		imageUrl="/img/hardware/ps4/ps4 wallpaper 2.jpg"
		description="Horizon Forbbiden West"
		logoUrl="/img/games/ps4/ps4 logo completo.png"
		console="PS4"
		message="Play Has No Limits"
	/>

	<div class="text-center bg-black p-5">
		<!-- PS4 SLIM -->
		<h2 class="text-5xl text-white my-10 font-bold">PS4 SLIM</h2>
		<p class="text-white">
			Los juegos increíbles están en PS4, con almacenamiento de 500 GB o 1 TB.
		</p>
		<div class="flex flex-col lg:flex-row justify-around items-center">
			<div>
				<img src="/img/hardware/ps4/ps4 slim.png" lazy="loading" alt="" class="h-80 lg:h-112" />
			</div>

			<div class="lg:ml-5 lg:w-2/4">
				<h2 class="text-3xl text-white">Solo en PlayStation</h2>
				<p class="text-lg md:text-xl my-5 text-white">
					Únete a guerreros samurái, a sobrevivientes fortalecidos y a dioses poderosos en algunos de los juegos
					más aclamados de la historia, creados por PlayStation Studios.
				</p>
				<BtnConsoles console="Hola tienes disponible la PS4?" border="ring-white" button="bg-white" />
			</div>
		</div>

		<!-- PS4 PRO -->
		<h2 class="text-5xl text-white mt-10 lg:mt-0 mb-10 font-bold">PS4 PRO</h2>
		<p class="text-white">
			Despierta tus sentidos con PS4 Pro: los juegos evolucionaron con la consola PS4 más potente.
		</p>
		<div class="flex flex-col lg:flex-row justify-around items-center">
			<div class="lg:ml-5 lg:w-2/4 order-2 lg:order-1">
				<h2 class="text-3xl text-white">Juegos y entretenimiento en un televisor 4K</h2>
				<p class="text-lg md:text-xl my-5 text-white">
					Disfruta de los juegos taquilleros más recientes de PS4 y exclusivas de PlayStation en sorprendente 4K
					desde la consola PS4 Pro en tu televisor 4K, y transmite tu entretenimiento favorito con increíble
					detalle visual desde los servicios compatibles con 4K.
				</p>
				<BtnConsoles console="Hola tienes disponible la PS4 PRO?" border="ring-white" button="bg-white" />
			</div>
			<div class="order-1 lg:order-2">
				<img
					src="/img/hardware/ps4/ps4 pro.png"
					lazy="loading"
					alt="imagen ps4 pro"
					class="h-80 lg:h-102 lg:ml-4"
				/>
			</div>
		</div>
	</div>

	<!-- DUALSHOCKS 4 -->
	<div class="flex flex-col items-center my-10">
		<div class="text-center w-3/4">
			<h2 class="text-5xl font-bold">Control Increible</h2>
			<p class="text-lg md:text-xll my-10">
				Diseño emblemático que se ajusta perfectamente a tus manos, controles intuitivos que te mantienen en la
				cima del juego y una dinámica variedad de colores disponibles para adaptarse a tu estilo. Sin importar tu
				forma de jugar, el control inalámbrico DUALSHOCK®4 tiene lo que necesitas.
			</p>
		</div>

		<img src="/img/hardware/ps4/controles.png" alt="imagen controles ps4" class="w-grande" />

		<button class="rounded-full hover:ring-2 ring-red-700 p-1 mt-20">
			<p class="rounded-full font-bold text-white py-2 px-5 bg-red-700 text-sm md:text-lg">
				Mas información
			</p>
		</button>
	</div>

	<div class="bg-red-600 flex flex-col items-center text-center p-4">
		<img src="/img/hardware/ps4/ps hits.png" alt="logo Playstation hits" />
		<p class="text-lg md:text-xl my-10 text-white w-3/4">
			Desde títulos épicos y premiados hasta favoritos de la familia, PlayStation Hits ofrece una colección
			genial de más de 20 de los títulos más adorados de PS4; y pronto vienen más.
		</p>

		<div class="grid grid-cols-2 md:grid-cols-5 items-center gap-3 md:gap-x-3">
			<Producto imageUrl="/img/hardware/ps4/batman hits.jpg" />
			<Producto imageUrl="/img/hardware/ps4/bloodborne hits.jpg" />
			<Producto imageUrl="/img/hardware/ps4/doom hits.jpg" />
			<Producto imageUrl="/img/hardware/ps4/horizon hits.jpg" />
			<Producto imageUrl="/img/hardware/ps4/uncharted hits.jpg" class="hidden md:block" />
		</div>

		<router-link to="/juegos-playstation-4">
			<button class="rounded-full hover:ring-2 ring-white p-1 mt-20">
				<p class="rounded-full font-bold py-2 px-5 bg-white text-sm md:text-lg">
					Ver más Juegos
				</p>
			</button>
		</router-link>
	</div>
</template>

<script>
import Portada from '@/components/Utilidades/Portada.vue';
import Producto from '@/components/Producto.vue';
import BtnConsoles from '@/components/buttons/BtnConsoles.vue';

export default {
	components: {
		Portada,
		Producto,
		BtnConsoles,
	},
};
</script>
