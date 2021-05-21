<template>
   <div>
       <div id="screen">{{}}</div>
       <div>
            <div>평균시간: {{}}</div>
            <button @click="onReset">리셋</button>
       </div>
   </div>
</template>

<script>
    export default {
        data() {
            return {
                result: [],
                state: 'waiting',
                message: 'Click To Start'
            }
        },
        methods: {
            onReset() {

            }
        },
    }
</script>

<style>

</style>