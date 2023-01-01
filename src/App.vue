<template>
		<v-app>
			<v-main>
				<v-container>
					<navBar/>
					<router-view @showSnackbar="showSnackbar"/>
					<v-snackbar 
						:color="snackbar.color" 
						v-model="snackbar.active" 
						:timeout="snackbar.timeout"
					>
						<v-icon>
							{{snackbar.icon}}
						</v-icon>
						{{snackbar.msg}}
					</v-snackbar>
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
			snackbar:{
				active: false,
				timeout: 2000,
				msg: "",
				color: "",
				icon: ""
			},
		}
	},
	components: {
		navBar
	},
	methods: {
		showSnackbar(data) {
			this.snackbar = {
				active: data.active,
				timeout: data.timeout,
				msg: data.msg,
				color: data.color,
				icon: data.icon
			}
		},
	}
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

html, body { 	
    overflow-x: hidden;
	height: 100vh;
}
::-webkit-scrollbar {
    width: 0; 
    background: transparent; 
}

</style>
