import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},

	/* SEARCH */
	{
		path: '/buscar',
		name: 'Buscar',
		component: Home,
		component: () => import('../views/Searchs.vue'),
	},

	/* CARRITO */
	{
		path: '/carrito-de-compras',
		name: 'Cart',
		component: Home,
		component: () => import('../views/Cart.vue'),
	},

	/* Finalizar Compra  */
	{
		path: '/finalizar-compra',
		name: 'ToPay',
		component: Home,
		component: () => import('../views/ToPay.vue'),
	},

	/* JUEGOS */
	{
		path: '/juegos-playstation-5',
		name: 'PS5',
		component: () => import('../views/juegos/PS5.vue'),
	},
	{
		path: '/juegos-playstation-4',
		name: 'PS4',
		component: () => import('../views/juegos/PS4.vue'),
	},
	{
		path: '/juegos-nintendo-switch',
		name: 'Switch',
		component: () => import('../views/juegos/Switch.vue'),
	},

	/* HARDWARE */
	{
		path: '/consola-playstation-5',
		name: 'ConsolePS5',
		component: () => import('../views/hardware/ConsolePS5.vue'),
	},
	{
		path: '/consola-playstation-4',
		name: 'ConsolePS4',
		component: () => import('../views/hardware/ConsolePS4.vue'),
	},
	{
		path: '/consola-nintendo-switch',
		name: 'ConsoleSwitch',
		component: () => import('../views/hardware/ConsoleSwitch.vue'),
	},

	/* ACCESORIOS */

	{
		path: '/accesorios',
		name: 'Accesorios',
		component: () => import('../views/Accesorios.vue'),
	},

	/* ANALISIS Y NOTICIAS SECCION */
	{
		path: '/noticias-y-analisis',
		name: 'Posts',
		component: () => import('../views/posts/Posts.vue'),
	},

	/* NOTICIAS */
	{
		path: '/noticia-gta-trilogy-switch',
		name: 'TheNewsOne',
		component: () => import('../views/posts/news/TheNewsOne.vue'),
	},
	{
		path: '/noticia-new-world-estreno',
		name: 'TheNewsTwo',
		component: () => import('../views/posts/news/TheNewsTwo.vue'),
	},
	{
		path: '/noticia-wolverine',
		name: 'TheNewsThree',
		component: () => import('../views/posts/news/TheNewsThree.vue'),
	},
	{
		path: '/noticia-god-of-war-ragnarok',
		name: 'TheNewsFour',
		component: () => import('../views/posts/news/TheNewsFour.vue'),
	},
	/* BLOG */
	{
		path: '/top-juegos-rpg-nintendo-switch',
		name: 'PostOne',
		component: () => import('../views/blog/PostOne.vue'),
	},
	{
		path: '/mejores-juegos-en-oferta-de-playstation',
		name: 'PostThree',
		component: () => import('../views/blog/PostThree.vue'),
	},

	/* LOGIN Y REGISTRO */
	{
		path: '/iniciar-sesion',
		name: 'Login',
		component: () => import('../views/users/Login.vue'),
	},
	{
		path: '/crear-cuenta',
		name: 'Registrar',
		component: () => import('../views/users/Registrar.vue'),
	},
];

const router = createRouter({
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 };
	},
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
