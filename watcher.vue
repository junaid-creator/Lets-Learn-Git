<template>
    <div id="app">
        <input type="text" v-model="message">

    </div>
</template>

<script>
    export default {
        data(){
            return{
                message: ''
            }
        },
        watch: {
            message(newValue, oldValue){
                console.log("new Value: " + newValue)
                console.log("old Value: " + oldValue )
            }
        }
    }
</script>

<style scoped>

</style>