import { ref } from '@vue/reactivity';
import api from '../apis/api';

export default function useConsoles() {
	let consoles = ref({
		data: [], //este array data hace referencia a lo que envia la peticion de la api
	});

	let loading = ref(false);

	function fetchConsoles() {
		loading.value = true;

		api
			.get('consoles') //aqui indicamos el resto de la url donde se encuentra nuestra API
			.then((response) => {
				consoles.value = response.data;
			})
			.finally(() => (loading.value = false));
	}

	return {
		consoles,
		loading,
		fetchConsoles,
	};
}
