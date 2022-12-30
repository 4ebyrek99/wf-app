<template>
	<v-card
        class="mt-5 pa-5"
        elevation="5"
        width="100%"
		height="80vh"
    >
		<v-row
			class="grid"
		>
			<v-card
				class="mr-3"
			>
				<v-col>
					<v-select
						v-model="selectRelic"
						solo
						:items="relics"
						item-text="name"
						label="Эра реликвии"
						return-object
					>
					</v-select>
					<v-text-field
						v-model="numberRelic"
						solo
						maxlength="3"
						clearable
						label="Номер реликвии"
						clear-icon="mdi-delete"
					>
					</v-text-field>
					<v-select
						solo
						v-model="playerCount" 
						label="Количество людей" 
						:items="[1, 2, 3]"
					>
					</v-select>
					<v-select
						solo
						v-model="qualityRelic" 
						label="Улучшение" 
						:items="quality"
					>
					</v-select>
					<v-btn 
						class="" 
						width="100%"
						@click="addLink" 
					>
						Добавить
					</v-btn>
				</v-col>
			</v-card>
			<v-card>
				<v-col>
					<v-card>

					</v-card>
				</v-col>
			</v-card>
		</v-row>
		<v-snackbar :color="snackbar.color" v-model="snackbar.active" :timeout="snackbar.timeout">
			<v-icon>{{snackbar.icon}}</v-icon>
			{{snackbar.msg}}
		</v-snackbar>
    </v-card>
</template>

<script>

export default {
	name: 'recruitingChat',
	data () {
		return {
			selectRelic: {
				img: 'lith',
				name: 'Лит'
			},
			numberRelic: 'A1',
			playerCount: 3,
			qualityRelic: "Нетронутая",
			maxLinks: 20,
		}
	},
	computed: {
		relics() {
			return this.$store.getters['getRelics']
		},
		quality() {
			return this.$store.getters['getQuality']
		}
	},
	methods: {
		addLink() {
			if(this.relicNum === "" || this.playerCount === ""  || this.qualityRelic.text === "") {
			}
			// this.$store.dispatch('addLink', {
			// 	selectRelic: this.selectRelic,
			// 	numberRelic: this.numberRelic,
			// 	playerCount: this.playerCount,
			// 	qualityRelic: this.qualityRelic
			// })
		}
	}
}
</script>

<style lang="scss" scoped>
	.grid {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
</style>