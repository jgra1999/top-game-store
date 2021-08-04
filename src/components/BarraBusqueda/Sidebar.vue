<template>
	<nav class="bg-red-700 w-0 h-screen fixed z-10 mt-14 overflow-hidden lg:hidden" id="sidebar">
		<!-- CATEGORIAS -->
		<ul class="text-white divide-y divide-white">
			<!-- JUEGOS -->
			<li class="p-4 flex items-center justify-between text-lg ">
				<div class="flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="25"
						viewBox="0 0 24 24"
						class="fill-current text-white mr-1"
					>
						<path
							d="M17.622 3c-1.913 0-2.558 1.382-5.623 1.382-3.009 0-3.746-1.382-5.623-1.382-5.209 0-6.376 10.375-6.376 14.348 0 2.145.817 3.652 2.469 3.652 3.458 0 2.926-5 6.915-5h5.23c3.989 0 3.457 5 6.915 5 1.652 0 2.471-1.506 2.471-3.651 0-3.973-1.169-14.349-6.378-14.349zm-10.622 10c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm10-6c.552 0 1 .447 1 1 0 .553-.448 1-1 1s-1-.447-1-1c0-.553.448-1 1-1zm-2 4c-.552 0-1-.447-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .553-.448 1-1 1zm2 2c-.552 0-1-.447-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .553-.448 1-1 1zm2-2c-.552 0-1-.447-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .553-.448 1-1 1zm-10.25-1c0 .965-.785 1.75-1.75 1.75s-1.75-.785-1.75-1.75.785-1.75 1.75-1.75 1.75.785 1.75 1.75z"
						/>
					</svg>
					<a href="#" @click="subMenu" id="categoriaJuegoSidebar">Juegos</a>
				</div>
				<svg
					class="fill-current text-white"
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="12"
					viewBox="0 0 24 24"
				>
					<path id="flechaJuegos" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
				</svg>
			</li>
			<!-- SUBMENU JUEGOS -->
			<ul class="text-white divide-y divide-white h-0 overflow-hidden" id="submenuJuegos">
				<li class="p-3"><a href="" class="text-sm ml-8">Juegos de PS5</a></li>
				<li class="p-3"><a href="" class="text-sm ml-8">Juegos de PS4</a></li>
				<li class="p-3"><a href="" class="text-sm ml-8">Juegos de switch</a></li>
			</ul>
			<!-- HARDWARE -->
			<li class="p-4 flex items-center justify-between text-lg cursor-pointer">
				<div class="flex">
					<svg
						version="1.1"
						id="Capa_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						width="25"
						height="25"
						viewBox="0 0 104.535 104.535"
						xml:space="preserve"
						class="fill-current text-white mr-1"
					>
						<g>
							<path
								d="M24.988,33.651h6.845v70.884l-13.921-0.021l7.076-6.288V33.651z M24.988,31.196l6.845,0.009V0h-6.845V31.196z
		 M86.624,104.512l-52.701,0.023V33.651l6.162,0.5l41.269,8.49v56.237L86.624,104.512z M37.268,88.285
		c0,0.041,0.018,0.057,0.062,0.067c0.235,0.064,0.47,0.132,0.705,0.196c0.07,0.02,0.141,0.039,0.211,0.064
		c0.197,0.072,0.381,0.235,0.378,0.457c-0.007,0.644-0.003,1.289-0.002,1.935c0,0.069,0,0.14,0.009,0.21
		c0.028,0.222,0.133,0.426,0.365,0.597c0.162,0.12,0.337,0.185,0.518,0.222c0.381,0.084,0.667-0.097,0.667-0.418
		c0-0.977,0-1.953,0-2.93c0-0.02,0-0.039,0-0.066c-0.082-0.021-0.154-0.038-0.226-0.062c-0.059-0.02-0.072-0.005-0.072,0.042
		c0.002,0.523,0.001,1.046,0.001,1.569c0,0.365,0,0.732,0,1.098c0,0.182-0.104,0.27-0.31,0.248
		c-0.088-0.009-0.184-0.033-0.273-0.066c-0.252-0.1-0.366-0.248-0.366-0.461c0-0.696-0.005-1.396,0.002-2.092
		c0.004-0.348-0.308-0.678-0.682-0.801c-0.31-0.102-0.622-0.18-0.933-0.27c-0.04-0.012-0.056-0.004-0.055,0.031
		C37.271,88,37.271,88.144,37.268,88.285z M37.27,92.238c0.001,0.146,0.035,0.297,0.132,0.446c0.15,0.231,0.372,0.371,0.632,0.445
		c0.447,0.128,0.893,0.249,1.339,0.374c0.056,0.018,0.113,0.036,0.169,0.058c0.168,0.066,0.292,0.188,0.327,0.325
		c0.012,0.045,0.015,0.089,0.015,0.132c0.001,0.447,0.001,0.896,0.001,1.343c0,0.011-0.005,0.022,0.001,0.033
		c0.01,0.016,0.025,0.041,0.04,0.045c0.082,0.026,0.164,0.049,0.255,0.073c0-0.019,0-0.028,0-0.041c0-0.563,0.005-1.123-0.003-1.688
		c-0.002-0.188-0.101-0.375-0.286-0.541c-0.139-0.123-0.299-0.202-0.469-0.25c-0.46-0.129-0.92-0.254-1.38-0.385
		c-0.27-0.076-0.467-0.242-0.461-0.514c0.01-0.464,0.003-0.934,0.003-1.398c0-0.014-0.001-0.023,0-0.035
		c0.002-0.03-0.012-0.049-0.051-0.06c-0.068-0.017-0.137-0.034-0.206-0.056c-0.047-0.016-0.059-0.003-0.059,0.033
		C37.27,91.135,37.268,91.687,37.27,92.238z M40.182,97.701c0.009-0.098-0.037-0.192-0.097-0.289
		c-0.179-0.295-0.358-0.588-0.537-0.881c-0.532-0.875-1.065-1.75-1.598-2.623c-0.028-0.045-0.061-0.092-0.099-0.131
		c-0.107-0.11-0.222-0.11-0.253,0c-0.012,0.043-0.014,0.09-0.014,0.138c-0.001,0.891-0.001,1.78,0,2.672
		c0,0.04-0.014,0.051-0.063,0.035c-0.08-0.025-0.16-0.046-0.246-0.069c0,0.178,0,0.35,0,0.527c0.082,0.021,0.16,0.047,0.238,0.064
		c0.054,0.014,0.071,0.032,0.07,0.079c-0.003,0.138-0.002,0.278,0,0.42c0,0.017,0.016,0.048,0.025,0.052
		c0.093,0.028,0.187,0.054,0.284,0.08c0.001-0.023,0.003-0.041,0.003-0.06c0-0.133,0.003-0.267-0.001-0.399
		c0-0.051,0.013-0.063,0.075-0.045c0.63,0.178,1.261,0.354,1.891,0.526c0.062,0.017,0.126,0.026,0.185,0.028
		C40.14,97.83,40.175,97.783,40.182,97.701z M37.958,94.436c-0.011-0.018-0.025-0.033-0.038-0.051c-0.007,0-0.013,0-0.019,0.001
		c0,0.78,0,1.56,0,2.341c0.017,0.006,0.029,0.012,0.04,0.014c0.542,0.151,1.085,0.303,1.627,0.453
		c0.067,0.02,0.076,0.008,0.039-0.055C39.059,96.238,38.509,95.336,37.958,94.436z M81.353,40.654V13.448L41.01,0h-7.087v31.206
		l6.394,0.557L81.353,40.654z"
							/>
						</g>
					</svg>

					<a href="#" @click="subMenu" id="categoriaHardwareSidebar">Hardware</a>
				</div>
				<svg
					class="fill-current text-white"
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="12"
					viewBox="0 0 24 24"
				>
					<path id="flechaJuegos" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
				</svg>
			</li>
			<!-- SUBMENU HARDWARE -->
			<ul class="text-white divide-y divide-white h-0 overflow-hidden" id="submenuHardware">
				<li class="p-3"><a href="" class="text-sm ml-8">PS5</a></li>
				<li class="p-3"><a href="" class="text-sm ml-8">PS4</a></li>
				<li class="p-3"><a href="" class="text-sm ml-8">Nintendo switch</a></li>
			</ul>
			<!-- ACCESORIOS -->
			<li class="p-4  flex items-center justify-between text-lg cursor-pointer">
				<div class="flex">
					<svg
						version="1.1"
						id="Capa_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						width="25"
						height="25"
						viewBox="0 0 328.911 328.911"
						xml:space="preserve"
						class="fill-current text-white mr-1"
					>
						<path
							d="M310.199,18.71C297.735,6.242,282.65,0.007,264.951,0.007H63.954c-17.703,0-32.79,6.235-45.253,18.704
					6.235,31.177,0,46.261,0,63.96v200.991c0,17.515,6.232,32.552,18.701,45.11c12.467,12.566,27.553,18.843,45.253,18.843h201.004
					17.699,0,32.777-6.276,45.248-18.843c12.47-12.559,18.705-27.596,18.705-45.11V63.96
					328.911,46.261,322.666,31.177,310.199,18.71z M292.362,264.96c0,7.614-2.673,14.089-8.001,19.414
					-5.324,5.332-11.799,7.994-19.41,7.994H63.954c-7.614,0-14.082-2.662-19.414-7.994c-5.33-5.325-7.992-11.8-7.992-19.414V63.965
					0-7.613,2.662-14.086,7.992-19.414c5.327-5.327,11.8-7.994,19.414-7.994h201.004c7.61,0,14.086,2.663,19.41,7.994
					5.325,5.328,7.994,11.801,7.994,19.414V264.96z"
						/>
						<path
							d="M246.683,146.189H182.73V82.236c0-2.667-0.855-4.854-2.573-6.567c-1.704-1.714-3.895-2.568-6.564-2.568h-18.271
					-2.667,0-4.854,0.854-6.567,2.568c-1.714,1.713-2.568,3.903-2.568,6.567v63.954H82.233c-2.664,0-4.857,0.855-6.567,2.568
					-1.711,1.713-2.568,3.903-2.568,6.567v18.271c0,2.666,0.854,4.855,2.568,6.563c1.712,1.708,3.903,2.57,6.567,2.57h63.954v63.953
					0,2.666,0.854,4.855,2.568,6.563c1.713,1.711,3.903,2.566,6.567,2.566h18.271c2.67,0,4.86-0.855,6.564-2.566
					1.718-1.708,2.573-3.897,2.573-6.563V182.73h63.953c2.662,0,4.853-0.862,6.563-2.57c1.712-1.708,2.563-3.897,2.563-6.563v-18.271
					0-2.664-0.852-4.857-2.563-6.567C251.536,147.048,249.345,146.189,246.683,146.189z"
						/>
					</svg>
					<a href="#" @click="subMenu" id="categoriaAccesoriosSidebar">Accesorios</a>
				</div>
				<svg
					class="fill-current text-white"
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="12"
					viewBox="0 0 24 24"
				>
					<path id="flechaJuegos" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
				</svg>
			</li>
			<!-- SUBMENU ACCESORIOS -->
			<ul class="text-white divide-y divide-white h-0 overflow-hidden" id="submenuAccesorios">
				<li class="p-3"><a href="" class="text-sm ml-8">DualSense</a></li>
				<li class="p-3"><a href="" class="text-sm ml-8">DualShock</a></li>
				<li class="p-3"><a href="" class="text-sm ml-8">Joycons</a></li>
				<li class="p-3"><a href="" class="text-sm ml-8">Otros Accesorios</a></li>
			</ul>
			<li class="p-4  flex items-center justify-between text-lg cursor-pointer">
				<div class="flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="25"
						viewBox="0 0 24 24"
						class="fill-current text-white mr-3"
					>
						<path
							d="M7 16h13v1h-13v-1zm13-3h-13v1h13v-1zm0-6h-5v1h5v-1zm0 3h-5v1h5v-1zm-17-8v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 17h-17v-15h17v15zm-9-12h-6v4h6v-4z"
						/>
					</svg>
					Noticias
				</div>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'Sidebar',

	methods: {
		subMenu(event) {
			if (event.target.id === 'categoriaJuegoSidebar') {
				const submenuJuegos = document.querySelector('#submenuJuegos');
				submenuJuegos.classList.toggle('h-36');
			} else {
				submenuJuegos.classList.remove('h-36');
			}

			if (event.target.id === 'categoriaHardwareSidebar') {
				const submenuHardaware = document.querySelector('#submenuHardware');
				submenuHardware.classList.toggle('h-36');
			} else {
				submenuHardware.classList.remove('h-36');
			}

			if (event.target.id === 'categoriaAccesoriosSidebar') {
				const submenuAccesorios = document.querySelector('#submenuAccesorios');
				submenuAccesorios.classList.toggle('h-48');
				console.log('click');
			} else {
				submenuAccesorios.classList.remove('h-48');
			}
		},
	},
};
</script>

<style>
#sidebar,
#submenuJuegos,
#submenuHardware,
#submenuAccesorios {
	transition: 0.3s ease all;
}
</style>
