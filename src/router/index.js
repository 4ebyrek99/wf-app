import Vue from 'vue'
import VueRouter from 'vue-router'
import recruitingChat from '../views/recruitingChat.vue';
import tradeChat from '../views/tradeChat.vue';

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
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
