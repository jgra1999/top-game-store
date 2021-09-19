import { ref } from '@vue/reactivity';
import api from '../apis/api';

export default function useGame() {
	let games = ref({
		data: [], //este array data hace referencia a lo que envia la peticion de la api
		links: {},
		meta: {},
	});

	let loading = ref(false);

	function fetchGames(params = {}) {
		let { page = 1, showNext = false, showPrev = false } = params;

		loading.value = true;

		api
			.get('games', { params: { page } }) //aqui indicamos el resto de la url donde se encuentra nuestra API
			.then((response) => {
				if (showNext) {
					games.value = {
						...response.data,
						data: [...response.data.data],
					};
				} else if (showPrev) {
					games.value = {
						...response.data,
						data: [...response.data.data],
					};
				} else {
					games.value = response.data;
				}
			})
			.finally(() => (loading.value = false));
	}

	return {
		games,
		loading,
		fetchGames,
	};
}
