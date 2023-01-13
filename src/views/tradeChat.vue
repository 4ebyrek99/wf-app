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
					<v-autocomplete
						v-model="searchText"
						solo
						label="Предмет"
						:items="searchItems"
						item-text="item_name"
					>

					</v-autocomplete>
				</v-col>
			</v-card>
			<v-card
				class="overflow-y-auto py-2"
				elevation="5"
			>
				2
			</v-card>
		</v-row>
	</v-card>
</template>

<script>

// import debounce from 'lodash.debounce'

export default {
	name: 'tradeChat',
	data () {
		return {
			searchItems: null,
			searchText: null
		}
	},
	methods() {

	},
	watch: {
		searchText(text) {

		}
	}
}
</script>

<style>

</style>
