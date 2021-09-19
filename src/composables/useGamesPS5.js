import { ref } from '@vue/reactivity';
import api from '../apis/api';

export default function useGamesPS5() {
	let gamesPS5 = ref({
		data: [], //este array data hace referencia a lo que envia la peticion de la api
		links: {},
		meta: {},
	});

	let loading = ref(false);

	function fetchGamesPS5(params = {}) {
		let { page = 1, showNext = false, showPrev = false } = params;

		api
			.get('games/playstation-5', { params: { page } }) //aqui indicamos el resto de la url donde se encuentra nuestra API
			.then((response) => {
				if (showNext) {
					gamesPS5.value = {
						...response.data,
						data: [...response.data.data],
					};
				} else if (showPrev) {
					gamesPS5.value = {
						...response.data,
						data: [...response.data.data],
					};
				} else {
					gamesPS5.value = response.data;
				}
			})
			.finally(() => (loading.value = false));
	}

	return {
		gamesPS5,
		fetchGamesPS5,
		loading,
	};
}
