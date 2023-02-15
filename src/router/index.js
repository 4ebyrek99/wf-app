import Vue from 'vue'
import VueRouter from 'vue-router'
import recruitingChat from '../views/recruitingChat.vue';
import tradeChat from '../views/tradeChat.vue';
import notFound from '../views/notFound.vue';

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'recruitingChat',
		component: recruitingChat,
	},
	{
		path: '/tradeChat',
		name: 'tradeChat',
		component: tradeChat,
	},
	{
		path: '/404', 
		name: 'notFound', 
		component: notFound, 
	},
	{
		path: '*',
		redirect: '/404'
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
