import { createStore } from 'vuex';

export default createStore({
	state: {
		slides: [],
		slidesResponsive: [],
	},
	mutations: {
		setSlides(state, payload) {
			state.slides = payload;
		},

		setSlidesResponsive(state, payload) {
			state.slidesResponsive = payload;
		},
	},
	actions: {
		async fetchDataSlide({ commit }) {
			try {
				const res = await fetch('slides.json');
				const data = await res.json();

				commit('setSlides', data);
			} catch (error) {
				console.log(error);
			}
		},

		async fetchDataSlideResponsive({ commit }) {
			try {
				const res = await fetch('slidesResponsive.json');
				const data = await res.json();

				commit('setSlidesResponsive', data);
			} catch (error) {
				console.log(error);
			}
		},
	},
	modules: {},
});
