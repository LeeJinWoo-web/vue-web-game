<template>
     <div>
        <table-component v-bind:table-data="tableData" :turn="turn"></table-component>
        <div>{{turn}}님의 턴입니다.</div>
     </div>
</template>

<script>
    import TableComponent from './TableComponent.vue'

    export default {
        components: {
            TableComponent,
        },
        data() {
            return {
                tableData: [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                ],
                turn: 'O',
            }
        },
        watch: {//DATA가 변경되면 실행된다
            
        },
        methods: {
            
        },
        computed: {//일반 데이터를 가공해서 쓸 때 -> Caching이 된다. ex)message가 바뀌어도 result는 다시실행 되지 않는다 result가 바껴야 다시실행된다

        },
        created() {//template에 DATA들이 다 준비되면(JS준비) created
        },
        mounted() {//화면에까지 보여주면 mounted
        },
        beforeUpdate() {
        },
        updated() {
        },
        beforeDestroy() {
        },
        destroyed() {
        },
    }
</script>

<style>
    table {
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        text-align: center;
    }
</style>