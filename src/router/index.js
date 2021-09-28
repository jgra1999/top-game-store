import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},

	/* SERACH */
	{
		path: '/buscar',
		name: 'Buscar',
		component: Home,
		component: () => import('../views/Searchs.vue'),
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

	/* ANALISIS */
	{
		path: '/monster-hunter-stories-analisis',
		name: 'MH',
		component: () => import('../views/analisis/MH.vue'),
	},
	/* BLOG */
	{
		path: '/top-juegos-rpg',
		name: 'TopRpg',
		component: () => import('../views/blog/TopRpg.vue'),
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
