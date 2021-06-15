<template>
    <div>
        <div id="computer" :style="computedStyleObject" @click="stopInterval"></div>
        <div>
            <button @click="onClickButton('바위')">바위</button>
            <button @click="onClickButton('가위')">가위</button>
            <button @click="onClickButton('보')">보</button>
        </div>
        <div>{{ result }}</div>
        <div>현재 {{ score }}점</div>
    </div>
</template>

<script>
    const rspCoords = {
        바위: '0',
        가위: '-142px',
        보: '-284px'
    };

    const scores = {
        가위: 1,
        바위: 0,
        보: -1,
    };

    const computerChoice = (imageCoord) => {
        return Object.entries(rspCoords).find(function (v) {
            return v[1] === imageCoord;
        })[0];
    };

    let interval = null;

    export default {
        data() {
            return {
                imageCoord: rspCoords.바위,
                result: '',
                score: 0,
            }
        },
        methods: {
            stopInterval () {
                clearInterval(interval)
            },
            changeHand () {
                clearInterval(interval)
                interval = setInterval(() => {
                    if (this.imageCoord === rspCoords.바위) {
                        this.imageCoord = rspCoords.가위;
                    } else if (this.imageCoord === rspCoords.가위) {
                        this.imageCoord = rspCoords.보;
                    } else if (this.imageCoord === rspCoords.보) {
                        this.imageCoord = rspCoords.바위;
                    }
                },70)
            },
            onClickButton (choice) {
                clearInterval(interval);
                const myScore = scores[choice];
                const cpuScore = scores[computerChoice(this.imageCoord)];
                const diff = myScore - cpuScore;
                if (diff === 0) {
                    this.result = '비겻습니다.';
                } else if ([-1, 2].includes(diff)) {
                    this.result = '이겻습니다.';
                    this.score += 1;
                } else {
                    this.result = '졌습니다.';
                    this.score -= 1;
                }
                setTimeout ( () => {
                    this.changeHand();
                },1000) 
            },
        },
        computed: {//일반 데이터를 가공해서 쓸 때 -> Caching이 된다. ex)message가 바뀌어도 result는 다시실행 되지 않는다 result가 바껴야 다시실행된다
            computedStyleObject () {
                return {
                    background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imageCoord} 0`
                };
            }
        },
        created() {//template에 DATA들이 다 준비되면(JS준비) created
            console.log("created");
        },
        mounted() {//화면에까지 보여주면 mounted
            console.log("mounted");
            this.changeHand();
        },
        beforeUpdate() {
            console.log('beforeUpdate')
        },
        updated() {
            console.log("updated");
        },
        beforeDestroy() {
            console.log('beforeDestroy')
            clearInterval(interval);
        },
        destroyed() {
            console.log("destroyed");
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