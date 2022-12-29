import Vue from 'vue'
import Vuex from 'vuex'
import trade from './trade.js'
import recruiting from './recruiting.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		trade,
		recruiting,
	}
})
