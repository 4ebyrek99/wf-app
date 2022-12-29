<template>
	<v-app>
		<v-main>
			<v-container>
				<navBar/>
				<router-view/>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import navBar from './components/navBar.vue'

export default {
	name: 'App',
	data () {
		return {

		}
	},
	components: {
		navBar
	}
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

</style>
