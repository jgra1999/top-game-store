import axios from 'axios';

export default axios.create({
	baseURL: 'https://database.topgames.com.ve/api/', //Esta es la URL Base de nuestra API
	timeout: 10000,
});
