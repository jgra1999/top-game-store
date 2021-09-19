import axios from 'axios';

export default axios.create({
	baseURL: 'http://topgamestore.test/api/', //Esta es la URL Base de nuestra API
	timeout: 3000,
});
