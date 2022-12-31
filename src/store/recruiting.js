export default {
    state: {
        relics: [
            { name: "Лит", img: "lith" },
			{ name: "Мезо", img: "meso" },
			{ name: "Нео", img: "neo" },
			{ name: "Акси", img: "axi" },
        ],
        quality: [
            { text: "Нетронутая", id: 0 },
            { text: "Необычная", id: 1 },
            { text: "Бесподобная", id: 2},
            { text: "Сияющая", id: 3}
        ],
        links: JSON.parse(localStorage.getItem('recruitingLinks')) || []
    },
    actions: {
        addLink({ commit, getters }, data) {
            let links = getters.getRecruitingLinks

            links.push(data)
            localStorage.setItem("recruitingLinks", JSON.stringify(links))

            commit('setLink', links)
        },
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
        },
        getRecruitingLinks(state) {
            return state.links
        }
    }
}