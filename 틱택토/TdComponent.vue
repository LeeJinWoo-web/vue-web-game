<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
    export default {
        props: {
            cellData: String,
            rowIndex: Number,
            cellIndex: Number,
        },
        methods: {
            onClickTd() {
                console.log(this.$root.$data)//최상위 컴포넌트 접근
                console.log(this.$parent.$data)//부모 컴포넌트 접근
                this.$root.$data.turn = this.$root.$data.turn === 'O' ? 'X' : 'O'
            }
        }
    }
</script>
