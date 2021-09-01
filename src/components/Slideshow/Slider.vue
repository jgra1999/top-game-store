<template>
	<div class="relative hidden sm:flex items-center w-full h-96 lg:h-100 xl:h-110 overflow-hidden">
		<ImageSlide
			v-for="slide in slides"
			:key="slide.id"
			:index="slide.id"
			:visibleSlide="visibleSlide"
			:direction="direction"
		>
			<img :src="slide.img" class="h-full w-full" />

			<div class="absolute md:bottom-8 lg:bottom-20 xl:bottom-24 2xl:bottom-36 md:left-8 w-2/5 ">
				<img :src="slide.logo" alt="" class="md:w-64 md:h-16 xl:w-96 xl:h-24" />
				<p class="md:w-72 lg:w-96 md:text-xs lg:text-sm  xl:w-104 my-10">
					{{ slide.description }}
				</p>
			</div>
		</ImageSlide>

		<div class="absolute bottom-1 left-1/2">
			<button
				class="w-4 h-4 rounded-full bg-gray-300 mr-2"
				:class="{ 'bg-red-700': visibleSlide == 0 }"
				id="cero"
				@click="controller"
			></button>
			<button
				class="w-4 h-4 rounded-full bg-gray-300 mr-2"
				:class="{ 'bg-red-700': visibleSlide == 1 }"
				id="uno"
				@click="controller"
			></button>
			<button
				class="w-4 h-4 rounded-full bg-gray-300 mr-2"
				:class="{ 'bg-red-700': visibleSlide == 2 }"
				id="dos"
				@click="controller"
			></button>
		</div>
	</div>
</template>

<script>
import ImageSlide from './ImageSlide.vue';

import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

export default {
	data() {
		return {
			visibleSlide: 0,

			direction: 'left',
		};
	},

	components: {
		ImageSlide,
	},

	computed: {
		slidesLength() {
			return this.slides.length;
		},
	},

	methods: {
		controller(event) {
			if (event.target.id == 'cero') {
				this.visibleSlide = 0;
			} else if (event.target.id == 'uno') {
				this.visibleSlide = 1;
			} else if (event.target.id == 'dos') {
				this.visibleSlide = 2;
			}
		},
	},

	setup() {
		const store = useStore();
		onMounted(() => {
			store.dispatch('fetchDataSlide'); //dispatch hace la funcion de commit pero en composition api
		});

		const slides = computed(() => store.state.slides);

		return { slides };
	},

	mounted() {
		setInterval(() => {
			this.visibleSlide = this.visibleSlide + 1;
			if (this.visibleSlide === 3) {
				this.visibleSlide = 0;
			}
		}, 6000);
	},
};
</script>
