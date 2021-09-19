import { ref } from '@vue/reactivity';
import api from '@/apis/api';

export default function useGamesPS5() {
	let gamesSwitch = ref({
		data: [], //este array data hace referencia a lo que envia la peticion de la api
		links: {},
		meta: {},
	});

	function fetchGamesSwitch(params = {}) {
		let { page = 1, showNext = false, showPrev = false } = params;

		api
			.get('games/nintendo-switch', { params: { page } }) //aqui indicamos el resto de la url donde se encuentra nuestra API
			.then((response) => {
				if (showNext) {
					gamesSwitch.value = {
						...response.data,
						data: [...response.data.data],
					};
				} else if (showPrev) {
					gamesSwitch.value = {
						...response.data,
						data: [...response.data.data],
					};
				} else {
					gamesSwitch.value = response.data;
				}
			});
	}

	return {
		gamesSwitch,
		fetchGamesSwitch,
	};
}
