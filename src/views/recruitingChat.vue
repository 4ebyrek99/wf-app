<template>
	<v-card
        class="mt-5 pa-5 main-card"
        elevation="5"
        width="100%"
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
						item-text="text"
						return-object
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
			qualityRelic: { 
				id: 0,
				text: "Нетронутая"
			},
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
			if(this.numberRelic !== "") {
				this.$store.dispatch('addLink', {
					selectRelic: this.selectRelic,
					numberRelic: this.numberRelic,
					playerCount: this.playerCount,
					qualityRelic: this.qualityRelic
				})
			} else {
				this.$emit("showSnackbar", {
					active: true,
					timeout: 2000,
					msg: "Номер реликвии не введён!",
					color: "error",
					icon: "mdi-alert-circle-outline"
				})
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	.grid {
		display: grid;
		grid-template-columns: 0.7fr 2fr;
		height: 100%;
	}
</style>