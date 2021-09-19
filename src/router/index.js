import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
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
