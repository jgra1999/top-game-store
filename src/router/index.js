import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/monster-hunter-stories-analisis',
		name: 'MH',
		component: () => import(/* webpackChunkName: "about" */ '../views/analisis/MH.vue'),
	},
	{
		path: '/top-juegos-rpg',
		name: 'TopRpg',
		component: () => import(/* webpackChunkName: "about" */ '../views/blog/TopRpg.vue'),
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
