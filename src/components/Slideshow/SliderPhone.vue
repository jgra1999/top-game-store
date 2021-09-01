<template>
	<div class="relative flex items-center md:hidden h-108 mb-2">
		<ImageSlidePhone
			v-for="slide in slides"
			:key="slide.id"
			:index="slide.id"
			:visibleSlide="visibleSlide"
			:direction="direction"
		>
			<img :src="slide.img" class="h-full w-full" />

			<div class="absolute flex flex-col items-center bottom-10 sm:bottom-5 text-center w-full">
				<img :src="slide.logo" alt="" class="w-64 h-16 mx-auto sm:w-72 sm:h-20" />
				<p class="w-80 text-xs sm:text-base sm:w-100 my-10">
					{{ slide.description }}
				</p>

				<button class="rounded-full hover:ring-2 ring-red-700 pt-1 pb-2 px-1 sm:py-2.5 duration-300 ">
					<a href="#" class="rounded-full font-bold text-white py-2 px-5 bg-red-700 text-xs sm:text-base ">
						Reservar ahora
					</a>
				</button>
			</div>
		</ImageSlidePhone>

		<button @click="prev" class="absolute left-1 text-red-700 duration-300">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-10 w-10"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
		</button>

		<button @click="next" class="absolute right-1 text-red-700 duration-300">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-10 w-10"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</button>
	</div>
</template>

<script>
import ImageSlidePhone from './ImageSlidePhone.vue';

import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

export default {
	name: 'SliderPhone',

	data() {
		return {
			visibleSlide: 0,

			direction: 'left',
		};
	},

	components: {
		ImageSlidePhone,
	},

	computed: {
		slidesLength() {
			return this.slides.length;
		},
	},

	methods: {
		next() {
			if (this.visibleSlide >= this.slidesLength - 1) {
				this.visibleSlide = 0;
			} else {
				this.visibleSlide++;
			}
			this.direction = 'left';
		},

		prev() {
			if (this.visibleSlide <= 0) {
				this.visibleSlide = this.slidesLength - 1;
			} else {
				this.visibleSlide--;
			}
			this.direction = 'right';
		},
	},

	setup() {
		const store = useStore();
		onMounted(() => {
			store.dispatch('fetchDataSlideResponsive'); //dispatch hace la funcion de commit pero en composition api
		});

		const slides = computed(() => store.state.slidesResponsive);

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
