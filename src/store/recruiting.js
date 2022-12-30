export default {
    state: {
        relics: [
            { name: "Лит", img: "lith" },
			{ name: "Мезо", img: "meso" },
			{ name: "Нео", img: "neo" },
			{ name: "Акси", img: "axi" },
        ],
        quality: [
            "Нетронутая", 
            "Необычная", 
            "Бесподобная", 
            "Сияющая"
        ],
        links: localStorage.getItem('recruitingLinks') || []
    },
    actions: {
        addLink({ commit }, data) {
            // text:`[Реликвия ${this.relic.name} ${this.relicNum.toUpperCase()}] ${this.qualityNum.text} +${this.playerCount}`,
			// 				image: `relics/${this.relic.img}${String(this.qualityNum.id)}.png`
            commit('setLink', data)
        }
    },
    mutations: {
        setLink(state, link) {
            state.links = link
        }
    },
    getters: {
        getRelics(state) {
            return state.relics
        },
        getQuality(state) {
            return state.quality
        }
    }
}