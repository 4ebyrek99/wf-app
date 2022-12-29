<template>
    <div>
        <v-app-bar 
            class="d-flex flex-row justify-center"
            dense
            elevation="2"
        >
            <v-btn
                class="nav-btn"
            >
                <router-link 
                    class="nav-link"
                    to="/"
                >
                    Рекрутинг
                </router-link>
            </v-btn>
            <v-btn
                class="nav-btn"
            >
                <router-link
                    class="nav-link"
                    to="/tradeChat"
                >
                    Торговый чат
                </router-link>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {

}
</script>