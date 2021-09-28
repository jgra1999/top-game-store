import { ref } from '@vue/reactivity';
import api from '../../apis/api';

export default function useSignUp() {
	function fetchUser(params = {}) {
		api.post('customer', params);
		console.log(params);
	}

	return { fetchUser };
}
