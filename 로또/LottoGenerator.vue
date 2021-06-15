<template>
    <div>
        <div>당첨 숫자</div>
        <div id="결과창">
            <lotto-ball v-for="ball in winBalls" :number="ball" :key="ball"></lotto-ball>
        </div>
        <div>보너스 번호</div>
        <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
        <button v-if="redo" @click="onClickRedo">한번 더!</button>
    </div>
</template>

<script>
    import LottoBall from './LottoBall.vue';

    function getWinNumbers() {
        const candidate = Array(45).fill().map((v, i) => i + 1);
        const shuffle = [];
        while (candidate.length > 0){
            shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
        }
        const bonusNumber = shuffle[shuffle.length - 1];
        const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
        return [...winNumbers, bonusNumber];
    }

    export default {
        components: {
            LottoBall,
        },
        data() {
            return {
                winNumbers: getWinNumbers(),
                winBalls: [],
                bonus: null,
                redo: false,
            }
        },
        watch() {

        },
        methods: {
            onClickRedo() {
                this.winNumbers = getWinNumbers();
                this.winBalls = [];
                this.bonus = null;
                this.redo = false;
                this.showBalls();
            },
            showBalls() {
                for (let i = 0; i< this.winNumbers.length - 1; i++){
                    setTimeout(() => {
                        this.winBalls.push(this.winNumbers[i]);
                    }, (i + 1) * 1000)
                }
                setTimeout(() => {
                    this.bonus = this.winNumbers[6];
                    this.redo = true;
                }, 7000);
            },
        },
        computed: {//일반 데이터를 가공해서 쓸 때 -> Caching이 된다. ex)message가 바뀌어도 result는 다시실행 되지 않는다 result가 바껴야 다시실행된다

        },
        created() {//template에 DATA들이 다 준비되면(JS준비) created
        },
        mounted() {//화면에까지 보여주면 mounted
            this.showBalls();
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

<style scoped>
    #computer {
        width: 142px;
        height: 200px;
        background-position: 0 0;
    }
</style>