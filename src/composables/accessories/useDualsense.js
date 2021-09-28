import { ref } from '@vue/reactivity';
import api from '../../apis/api';

export default function useDualsense() {
	let dualsenses = ref({
		data: [], //este array data hace referencia a lo que envia la peticion de la api
		links: {},
		meta: {},
	});

	let loading = ref(false);

	function fetchDualsense(params = {}) {
		let { page = 1, showNext = false } = params;

		api
			.get('accesory/dualsense-controller', { params: { page } }) //aqui indicamos el resto de la url donde se encuentra nuestra API
			.then((response) => {
				if (showNext) {
					dualsenses.value = {
						...response.data,
						data: [...response.data.data],
					};
				} else {
					dualsenses.value = response.data;
				}
			})
			.finally(() => (loading.value = false));
	}

	return {
		dualsenses,
		fetchDualsense,
		loading,
	};
}
