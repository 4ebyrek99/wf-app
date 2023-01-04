<template>
    <div 
        class="d-flex flex-grow-1 flex-wrap pl-5 pr-4 py-3"
    >
        <div
            v-for="(link, index) in links"
            :key="index"
        >
            <v-card
                class="item-card ma-2"
                elevation="5"
                :width="cardWidth"
            >
                <v-card-title class="py-1">
                    Реликвия {{ link.selectRelic.name }}
                </v-card-title>
                <div
                    class="d-flex px-4 pb-4"
                >
                    <div
                        class="d-flex flex-column justify-center"
                    >
                        <span>Номер реликии - {{ link.numberRelic.toUpperCase() }}</span>
                        <span>Улучшение реликвии - {{ link.qualityRelic.text }}</span>
                        <span>Количество людей - {{ link.playerCount }}</span>
                    </div>
                    <v-avatar
                        height="96"
                        width="96"
                    >
                        <img 
                            :src="'/relics/' + link.selectRelic.img + link.qualityRelic.id + '.png'" alt=""
                        >
                    </v-avatar>
                </div>
                <div
                    class="pb-2 pl-3"
                >
                    <v-btn
                        @click="copyLink(index)" 
                    >
                        Копировать
                    </v-btn>
                    <v-btn 
                        @click="deleteLink(index)"
                        class="ml-5"
                    >
                        Удалить
                    </v-btn>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        links: []
    },
    methods: {
		copyLink(index){
			navigator.clipboard.writeText(this.links[index].linkToCopy)
			this.$emit("copyLink", index)
		},
		deleteLink(index){
			this.$store.dispatch('deleteLink', index)
            this.$emit("deleteLink")
		}
    },
    computed: {
        cardWidth() {
            let breakpoint = this.$vuetify.breakpoint.name
            const width = {
                sm: 450,
                md: 280,
                lg: 390,
                xl: 402

            }
            return width[breakpoint];

        }
    }
}
</script>

<style>

</style>