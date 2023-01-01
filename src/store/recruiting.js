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
        deleteLink({ commit, getters }, index) {
            let links = getters.getRecruitingLinks
            links.splice(index, 1)
            localStorage.setItem("recruitingLinks", JSON.stringify(links))
            commit('deleteLink', links)
        },
        deleteAllLinks({ commit, getters }) {
            let links = getters.getRecruitingLinks
            links.splice(0, links.length)
            localStorage.setItem("recruitingLinks", JSON.stringify(links))
            commit('deleteAllLinks', links)
        }
    },
    mutations: {
        setLink(state, link) {
            state.links = link
        },
        deleteLink(state, links) {
            state.links = links
        },
        deleteAllLinks(state, links) {
            state.links = links
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