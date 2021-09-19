import { ref } from '@vue/reactivity';
import api from '../apis/api';

export default function useGamesPS5() {
	let gamesPS4 = ref({
		data: [], //este array data hace referencia a lo que envia la peticion de la api
		links: {},
		meta: {},
	});

	let loading = ref(false);

	function fetchGamesPS4(params = {}) {
		let { page = 1, showNext = false, showPrev = false } = params;

		api
			.get('games/playstation-4', { params: { page } }) //aqui indicamos el resto de la url donde se encuentra nuestra API
			.then((response) => {
				if (showNext) {
					gamesPS4.value = {
						...response.data,
						data: [...response.data.data],
					};
				} else if (showPrev) {
					gamesPS4.value = {
						...response.data,
						data: [...response.data.data],
					};
				} else {
					gamesPS4.value = response.data;
				}
			})
			.finally(() => (loading.value = false));
	}

	return {
		gamesPS4,
		fetchGamesPS4,
		loading,
	};
}
