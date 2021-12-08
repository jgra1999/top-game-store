import { createStore } from 'vuex';
import api from '../apis/api';
import { ref } from '@vue/reactivity';

export default createStore({
	state: {
		/* slides */
		slides: [],
		slidesResponsive: [],

		/* Games */
		games: ref({
			data: [],
			meta: {},
		}),
		gamesPS5: ref({
			data: [],
			meta: {},
		}),
		gamesPS4: ref({
			data: [],
			meta: {},
		}),
		gamesSwitch: ref({
			data: [],
			meta: {},
		}),

		/* Accesories */
		dualsenses: ref({
			data: [],
			meta: {},
		}),
		joycons: ref({
			data: [],
			meta: {},
		}),

		/* Shopping Cart */
		cart: {},
	},
	mutations: {
		/* Slides */
		setSlides(state, payload) {
			state.slides = payload;
		},

		setSlidesResponsive(state, payload) {
			state.slidesResponsive = payload;
		},

		/* Games */

		setGames(state, payload) {
			state.games = payload;
		},

		setGamesPS5(state, payload) {
			state.gamesPS5 = payload;
		},

		setGamesPS4(state, payload) {
			state.gamesPS4 = payload;
		},

		setGamesSwitch(state, payload) {
			state.gamesSwitch = payload;
		},

		/* Accesories */

		setDualsenses(state, payload) {
			state.dualsenses = payload;
		},

		setJoycons(state, payload) {
			state.joycons = payload;
		},

		/* Shopping Cart */
		setCart(state, payload) {
			state.cart[payload.id] = payload;
		},

		clearCart(state) {
			state.cart = {};
		},

		incrementItem(state, payload) {
			state.cart[payload].cantidad = state.cart[payload].cantidad + 1;
		},

		decrementItem(state, payload) {
			state.cart[payload].cantidad = state.cart[payload].cantidad - 1;

			if (state.cart[payload].cantidad === 0) {
				delete state.cart[payload];
			}
		},
	},
	actions: {
		/* Slides */
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

		/* Games */

		fetchDataGames({ commit }, params = {}) {
			let { page = 1, name = '' } = params;

			try {
				api.get('games', { params: { page, name } }).then((response) => {
					const data = response.data;
					commit('setGames', data);
				});
			} catch (error) {
				console.log(error);
			}
		},

		fetchDataGamesPS5({ commit }, params = {}) {
			let { page = 1 } = params;

			try {
				api.get('games/playstation-5', { params: { page } }).then((response) => {
					const data = response.data;
					commit('setGamesPS5', data);
				});
			} catch (error) {
				console.log(error);
			}
		},

		fetchDataGamesPS4({ commit }, params = {}) {
			let { page = 1 } = params;

			try {
				api.get('games/playstation-4', { params: { page } }).then((response) => {
					const data = response.data;
					commit('setGamesPS4', data);
				});
			} catch (error) {
				console.log(error);
			}
		},

		fetchDataGamesSwitch({ commit }, params = {}) {
			let { page = 1 } = params;

			try {
				api.get('games/nintendo-switch', { params: { page } }).then((response) => {
					const data = response.data;
					commit('setGamesSwitch', data);
				});
			} catch (error) {
				console.log(error);
			}
		},

		/* Accesories */

		fetchDataDualsenses({ commit }, params = {}) {
			let { page = 1 } = params;

			try {
				api.get('accesory/dualsense-controller', { params: { page } }).then((response) => {
					const data = response.data;
					commit('setDualsenses', data);
				});
			} catch (error) {
				console.log(error);
			}
		},

		fetchDataJoycons({ commit }, params = {}) {
			let { page = 1 } = params;

			try {
				api.get('accesory/joycons', { params: { page } }).then((response) => {
					const data = response.data;
					commit('setJoycons', data);
				});
			} catch (error) {
				console.log(error);
			}
		},

		/* Shopping Cart */

		addToCart({ commit, state }, product) {
			state.cart.hasOwnProperty(product.id)
				? (product.cantidad = state.cart[product.id].cantidad + 1)
				: (product.cantidad = 1);

			commit('setCart', product);
		},

		/* Sales details */

		saveDetails({ commit }, details) {
			api.post('sale-details', details);
		},

		updateStock({ commit }, params = {}) {
			let { idItem = 0, stockItem = 0 } = params;
			let url = 'games/' + idItem;
			api.put(url, {
				stock: stockItem,
			});
		},

		updateStockAccesories({ commit }, params = {}) {
			let { idItem = 0, stockItem = 0 } = params;
			let url = 'accesory/' + idItem;
			api.put(url, {
				stock: stockItem,
			});
		},
	},

	getters: {
		totalAmount(state) {
			return Object.values(state.cart).reduce((acc, { cantidad }) => acc + cantidad, 0);
			/* Esto nos devuelve la suma de todos los items que estamos interando */
		},

		totalToPay(state) {
			return Object.values(state.cart).reduce((acc, { cantidad, price }) => acc + cantidad * price, 0);
			/* Esto nos devuelve la suma de todos los items que estamos interando */
		},
	},

	modules: {},
});
