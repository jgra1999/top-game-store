import { ref } from '@vue/reactivity';
import api from '../../apis/api';

export default function useJoycons() {
	let joycons = ref({
		data: [], //este array data hace referencia a lo que envia la peticion de la api
		links: {},
		meta: {},
	});

	let loading = ref(false);

	function fetchJoycons(params = {}) {
		let { page = 1, showMore = false } = params;

		api
			.get('accesory/joycons', { params: { page } }) //aqui indicamos el resto de la url donde se encuentra nuestra API
			.then((response) => {
				if (showMore) {
					joycons.value = {
						...response.data,
						data: [...response.data.data],
					};
				} else {
					joycons.value = response.data;
				}
			})
			.finally(() => (loading.value = false));
	}

	return {
		joycons,
		fetchJoycons,
		loading,
	};
}
