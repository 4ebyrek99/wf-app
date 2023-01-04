<template>
    <div>
        <v-card 
            class="d-flex flex-row justify-center py-2"
            elevation="5"
        >
            <v-btn
                class="nav-btn"
                width="300px"
                to="/"
            >
                Рекрутинг
            </v-btn>
            <v-btn
                class="nav-btn"
                width="300px"
                to="/tradeChat"
            >
                Торговый чат
            </v-btn>
            <v-btn
                class="nav-btn"
                rounded
                @click="changeTheme"
            >
                <v-icon>
                    mdi-theme-light-dark
                </v-icon>
            </v-btn>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            darkTheme: JSON.parse(localStorage.getItem("darkTheme")) || true
        }
    },
    created() {
        if (localStorage.getItem("darkTheme")) {
            this.$vuetify.theme.dark = JSON.parse(localStorage.getItem("darkTheme"))
        } else {
            localStorage.setItem("darkTheme", true)
            this.$vuetify.theme.dark = true
        }
    },
    methods: {
        changeTheme() {
            this.darkTheme ? this.darkTheme = false : this.darkTheme = true
            localStorage.setItem("darkTheme", this.darkTheme)
            this.$vuetify.theme.dark = this.darkTheme
            
        }
    }

}
</script>