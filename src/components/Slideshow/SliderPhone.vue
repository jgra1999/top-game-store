<template>
	<div class="w-full h-14"></div>
	<div class="relative flex items-center md:hidden h-108 mb-2">
		<ImageSlidePhone
			v-for="slide in slides"
			:key="slide.id"
			:index="slide.id"
			:visibleSlide="visibleSlide"
			:direction="direction"
		>
			<img :src="slide.img" class="h-full w-full" loading="lazy" />

			<div
				class="absolute flex flex-col items-center bottom-10 sm:bottom-5 text-center w-full"
				v-if="slide.id == 0"
			>
				<img :src="slide.logo" alt="" class="w-64 h-16 mx-auto sm:w-72 sm:h-20" />
				<p class="w-80 text-xs sm:text-base sm:w-100 my-10">
					{{ slide.description }}
				</p>
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
			this.direction = 'left';

			if (this.visibleSlide === 4) {
				this.visibleSlide = 0;
			}
		}, 6000);
	},
};
</script>
