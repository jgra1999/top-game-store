import { ref } from '@vue/reactivity';
import api from '../apis/api';

export default function useAccesories() {
	let accesories = ref({
		data: [], //este array data hace referencia a lo que envia la peticion de la api
	});

	let loading = ref(false);

	function fetchAccesories(params = {}) {
		let { search = false, name = '' } = params;
		loading.value = true;

		api
			.get('accesory', { params: { name } }) //aqui indicamos el resto de la url donde se encuentra nuestra API
			.then((response) => {
				if (search) {
					accesories.value = {
						...response.data,
						data: [...response.data.data],
					};
				} else {
					accesories.value = response.data;
				}
			})
			.finally(() => (loading.value = false));
	}

	return {
		accesories,
		loading,
		fetchAccesories,
	};
}
