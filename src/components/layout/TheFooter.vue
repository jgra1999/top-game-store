<template>
	<footer class="bg-white p-5 pt-10 h-54 relative">
		<div class="flex flex-col sm:flex-row sm:justify-between ">
			<div class="text-left md:ml-10">
				<h1 class=" text-lg md:text-2xl font-semibold mb-5">Top Games Store</h1>
				<p class="font-semibold text-xs md:text-base  duration-300 cursor-pointer opcion">
					Inicio
				</p>
				<p class="font-semibold text-xs md:text-base  duration-300 cursor-pointer opcion my-1">
					¿Quienes Somos?
				</p>
				<div class="flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="10"
						viewBox="0 0 24 24"
						class="w-4 h-4 fill-current text-red-700"
					>
						<path
							d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"
						/>
					</svg>
					<p class="text-xs md:text-base font-semibold ">0414-5831111</p>
				</div>
			</div>

			<div class="my-5 sm:my-0 md:text-center">
				<p class=" text-lg md:text-2xl font-semibold mb-5">Ubicación</p>
				<div class="flex items">
					<LocationMarkerIcon class="text-red-700 w-4 h-4 md:-mr-4" />
					<p class="font-bold text-xs md:text-base ">
						C.C. Free Market, Local V-09. <br />
						Naguanagua, Valencia, Carabobo
					</p>
				</div>
			</div>

			<div class="md:mr-10">
				<p class=" text-lg md:text-2xl font-semibold mb-5">Redes Sociales</p>
				<div class="text-left sm:text-center">
					<a href="https://www.instagram.com/_topgamesstore/" target="_blank">
						<svg
							class="inline-block fill-current  hover:text-red-700 w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
						>
							<path
								d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
							/>
						</svg>
					</a>

					<a href="https://wa.me/+584145831111" target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="inline-block mx-5 fill-current  hover:text-red-700 w-5 h-5"
						>
							<path
								d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
							/>
						</svg>
					</a>

					<a
						href="mailto:topgames.ve@gmail.com?subject=Hola%20quisiera%20consultar%20el%20catalogo%20de%20productos"
					>
						<svg
							class="inline-block fill-current  hover:text-red-700 w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
						>
							<path
								d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
		<div class="text-center mt-12 md:mt-20 text-xs font-semibold ">
			©Top Game Store c.a - ©Todos los derechos reservados - 2021
		</div>
	</footer>
</template>

<script>
import { LocationMarkerIcon } from '@heroicons/vue/solid';

export default {
	components: { LocationMarkerIcon },
};
</script>
