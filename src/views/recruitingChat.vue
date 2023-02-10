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
				elevation="5"
			>
				<v-col
					class="d-flex flex-column justify-space-between h-100"
				>
					<div>
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
					</div>
					<div>
						<v-btn 
							width="100%"
							@click="addLink" 
						>
							Добавить
						</v-btn>
						<v-btn
							class="mt-4"
							width="100%"
							@click="deleteAllLinks" 
						>
							Очистить список
						</v-btn>
					</div>
				</v-col>
			</v-card>
			<v-card
				class="overflow-y-auto py-2"
				elevation="5"
			>
				<recruitingItemCard
					:links="links"
					@copyLink="copyLink"
					@deleteLink="deleteLink"
					@showDialog="showDialog"
				/>
			</v-card>
			<v-dialog
				v-model="showRelicInfo"
				width="400"
			>
				<v-card
					height="432"
				>
					<v-card-title
						class="d-flex justify-space-between"
					>
						<span v-if="loader">Загрузка</span>
						<span v-else-if="!loader && relicInfo">{{ relicInfo.name }}</span>
						<span v-else>Реликвия не существует!</span>
						<v-btn
							icon
							@click="showRelicInfo = false"
						>
							<v-icon>
								mdi-close-circle-outline
							</v-icon>
						</v-btn>
					</v-card-title>
					<div
						v-if="loader"
					>
						<div 
							class="d-flex flex-row justify-center pt-8 pb-6 px-6"
						>
							<v-progress-circular
								:size="150"
								:width="12"
								color="teal lighten-4"
								indeterminate
							>
							</v-progress-circular>
						</div>
					</div>
					<div 
						v-else
					>
						<div
							class="pa-4"
						>
							<v-simple-table
								v-if="relicInfo"
							>
								<thead>
									<tr>
										<th>
											Предмет
										</th>
										<th>
											Стоимость в дукатах
										</th>
									</tr>
								</thead>
								<tbody>
									<tr
										v-for="(item, index) in relicInfo.info"
										:key="index"
									>
									<td>
										{{ item.name }}
									</td>
									<td>
										{{ item.ducats }}
									</td>
									</tr>
								</tbody>
							</v-simple-table>
							<div
								v-else
								class="d-flex flex-row justify-center pa-6"
							>
								<img src="../../public/error.svg">
							</div>
						</div>
					</div>
				</v-card>
			</v-dialog>
		</v-row>
    </v-card>
</template>

<script>
import recruitingItemCard from '@/components/itemCards/recruitingItemCard.vue'

export default {
	name: 'recruitingChat',
	components:{
		recruitingItemCard
	},
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
			maxLinks: process.env.VUE_APP_MAX_LINKS,
			showRelicInfo: false,
			relicInfo: {},
			loader: true
		}
	},
	computed: {
		relics() {
			return this.$store.getters['getRelics']
		},
		quality() {
			return this.$store.getters['getQuality']
		},
		links() {
			return this.$store.getters["getRecruitingLinks"]
		},
	},
	methods: {
		addLink() {
			if(this.numberRelic !== "") {
				if(this.links.length >= this.maxLinks) {
					this.$emit("showSnackbar", {
						active: true,
						timeout: 2000,
						msg: "Максимальное количество элементов 20!",
						color: "error",
						icon: "mdi-alert-circle-outline"
					})
				} else {
					this.$store.dispatch('addLink', {
						selectRelic: this.selectRelic,
						numberRelic: this.numberRelic,
						playerCount: this.playerCount,
						qualityRelic: this.qualityRelic,
						linkToCopy: `[Реликвия ${this.selectRelic.name} ${this.numberRelic.toUpperCase()}] ${this.qualityRelic.text} +${this.playerCount}`,
					})
				}
			} else {
				this.$emit("showSnackbar", {
					active: true,
					timeout: 2000,
					msg: "Номер реликвии не введён!",
					color: "error",
					icon: "mdi-alert-circle-outline"
				})
			}
		},
		copyLink(){
			this.$emit("showSnackbar", {
					active: true,
					timeout: 2000,
					msg: "Скопированно!",
					color: "success",
					icon: "mdi-check"
				})
		},
		deleteLink(){
			this.$emit("showSnackbar", {
					active: true,
					timeout: 2000,
					msg: "Удалено!",
					color: "success",
					icon: "mdi-check"
				})
		},
		deleteAllLinks() {
			if(this.links.length <= 0) {
				this.$emit("showSnackbar", {
						active: true,
						timeout: 2000,
						msg: "Список уже пуст!",
						color: "error",
						icon: "mdi-alert-circle-outline"
					})
			} else {
				this.$store.dispatch('deleteAllLinks')
				this.$emit("showSnackbar", {
					active: true,
					timeout: 2000,
					msg: "Список был очищен!",
					color: "success",
					icon: "mdi-check"
				})
			}
		},
		async showDialog(link) {
			let find = this.$store.getters["getRelicsMap"](`${link.selectRelic.name} ${(link.numberRelic).toUpperCase()}`)
			if(find) {
				this.loader = false
				this.relicInfo = this.$store.getters["getRelicsMap"](`${link.selectRelic.name} ${(link.numberRelic).toUpperCase()}`)
				this.showRelicInfo = true
			} else {
				this.loader = true
				this.showRelicInfo = true
				await this.$store.dispatch('getRelicInfo', {
					name: link.selectRelic.name,
					number: link.numberRelic
				})
				this.relicInfo = this.$store.getters["getRelicsMap"](`${link.selectRelic.name} ${(link.numberRelic).toUpperCase()}`)
				this.loader = false
			}

		}
	}
}
</script>

<style lang="scss" scoped>

</style>