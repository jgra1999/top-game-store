<template>
	<div class="w-full h-14"></div>
	<div>
		<img src="/img/blog/post1/top switch.jpg" alt="" class="w-full sm:h-full 2xl:h-108 hidden sm:block" />
		<img src="/img/blog/post1/top switch mobil.jpg" alt="" class="w-full h-104 sm:hidden" />
	</div>

	<article class="mt-4 md:mt-10 container mx-auto my-20 w-4/5 text-lg">
		<p>
			En top games disfrutamos al máximo los juegos de rol, actualmente los RPG han evolucionado en gran
			cantidad, tanto en características gráficas como en jugabilidad con el pasar del tiempo. En esta lista te
			mencionamos juegos de aventuras con un <strong> toque clásico como Octopath Traveler </strong> y otros que
			cautivaron al público moderno como lo hizo <strong>The Witcher 3: Wild Hunt</strong>. A continuación, te
			dejamos una lista con los mejores 6 juegos rpg disponibles en Nintendo Switch.
		</p>

		<br />

		<p>
			A continuación, te dejamos una lista con los <strong>mejores 7 juegos rpg</strong> disponibles en Nintendo
			Switch.
		</p>

		<ListElement
			title="1) Octopath Traveler"
			img="./img/blog/post1/octopath.jpg"
			youtubeUrl="https://www.youtube.com/embed/wardmBnjHnU"
		>
			<template v-slot:description>
				<p class="mt-2">
					Ocho viajeros. Ocho aventuras. Ocho roles. Embárcate en un viaje épico a través del vasto y asombroso
					mundo de Orsterra y descubre las fascinantes historias de cada uno de los viajeros. Octopath Traveler es
					un videojuego basado en turnos de rol estilo japonés desarrollado por Square Enix, en colaboración con
					Acquire, y publicado por Nintendo para la consola de videojuegos Nintendo Switch.
				</p>
			</template>
		</ListElement>

		<ListElement
			title="2) The Elder Scrolls V: Skyrim - Special Edition"
			img="./img/blog/post1/skyrim-special-edition.jpg"
			youtubeUrl="https://www.youtube.com/embed/iKkWcfawKFE"
		>
			<template v-slot:description>
				<p class="mt-2">
					<strong>El renacimineto de una fantasía épica</strong> de la saga Elder Scrolls llega de la mano Bethesda
					Game Studios. Skyrim reinventa y el revoluciona el épico universo de fantasía, dando vida a un completo
					mundo virtual
				</p>
			</template>
		</ListElement>

		<ListElement
			title="3) Pokémon Espada y Escudo"
			img="./img/blog/post1/pokemon-ec.jpg"
			youtubeUrl="https://www.youtube.com/embed/B9_h7xNhPBE"
		>
			<template v-slot:description>
				<p class="mt-2">
					Pokemon Espada y Escudo están situados en la región de Galar, la mecánica de los títulos es similar a
					entregas anteriores de este género. Así, una vez más, toca ponerse en la piel de un entrenador Pokémon
					para llegar a ser Campeón, a lo largo de todo un viaje con mil y una aventuras por vivir y por supuesto,
					muchos nuevos Pokémon que atrapar.
				</p>
			</template>
		</ListElement>

		<ListElement
			title="4) Persona 5: Strikers Switch"
			img="./img/blog/post1/persona-5-strikers-switch.jpg"
			youtubeUrl="https://www.youtube.com/embed/E3cvskLI-oM"
		>
			<template v-slot:description>
				<p class="mt-2">
					Únete a los Ladrones Fantasma y contraataca la corrupción que está devorando a las ciudades de todo
					Japón. Unas vacaciones de verano con amigos cercanos toma un giro súbito en el momento en que una
					realidad distorsionada emerge. ¡Revela la verdad y redime los corazones de aquellos atrapados en medio de
					la crisis!
				</p>
			</template>
		</ListElement>

		<ListElement
			title="5) The Legend Of Zelda Breath Of The Wild"
			img="./img/blog/post1/zelda.jpg"
			youtubeUrl="https://www.youtube.com/embed/zw47_q9wbBE"
		>
			<template v-slot:description>
				<p class="mt-2">
					Explora y descubre un mundo lleno de aventuras en The Legend of Zelda: Breath of the Wild, una nueva saga
					que rompe los esquemas de la aclamada serie. Viaja a través de praderas y bosques, y alcanza cimas de
					montañas mientras descubres cómo cayó en la ruina el reino de Hyrule en esta emocionante aventura al aire
					libre. Ahora con Nintendo Switch, tu aventura será más libre y extensa que nunca. Lleva tu consola y vive
					una gran aventura como Link de la manera que más te guste.
				</p>
			</template>
		</ListElement>

		<ListElement
			title="6) The Witcher 3: Wild Hunt"
			img="./img/blog/post1/the-witcher-3.jpg"
			youtubeUrl="https://www.youtube.com/embed/XHrskkHf958"
		>
			<template v-slot:description>
				<p class="mt-2">
					Galardonado con más de 250 premios a Juego del Año, The Witcher 3: Wild Hunt es una aventura de mundo
					abierto ambientada en un oscuro universo de fantasía. Eres Geralt de Rivia, cazador de monstruos a
					sueldo. Tienes a tu disposición todas las herramientas de tu oficio: espadas afiladas, brebajes letales,
					ballestas sigilosas y una poderosa magia de combate.
				</p>
			</template>
		</ListElement>
	</article>
</template>

<script>
import ListElement from '@/components/list/Element.vue';

export default {
	components: {
		ListElement,
	},
};
</script>
