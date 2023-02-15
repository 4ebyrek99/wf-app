<template>
    <v-card
        class="mt-5 pa-5 main-card d-flex flex-row justify-center"
        elevation="5"
        width="100%"
    >
        <div 
            class="d-flex flex-column justify-center"
        >            
            <v-img
                contain
                :src="randomImage"
                max-height="250"
                max-width="380"
            />
        </div>
    </v-card>
</template>

<script>
export default {
    data () {
        return {
            randomImage: ''
        }
    },
    created () {
        this.randomImage = `/404/valkyr${Math.floor(Math.random() * 3)}.png`
    }
}
</script>

<style>

</style>