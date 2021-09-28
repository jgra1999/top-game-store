import { ref } from '@vue/reactivity';
import api from '../apis/api';

export default function useConsoles() {
	let consoles = ref({
		data: [], //este array data hace referencia a lo que envia la peticion de la api
	});

	let loading = ref(false);

	function fetchConsoles(params = {}) {
		let { search = false, name = '' } = params;
		loading.value = true;

		api
			.get('consoles', { params: { name } }) //aqui indicamos el resto de la url donde se encuentra nuestra API
			.then((response) => {
				if (search) {
					consoles.value = {
						...response.data,
						data: [...response.data.data],
					};
				} else {
					consoles.value = response.data;
				}
			})
			.finally(() => (loading.value = false));
	}

	return {
		consoles,
		loading,
		fetchConsoles,
	};
}
