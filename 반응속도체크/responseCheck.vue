<template>
    <div>
        <div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
        <div v-if="result.length">
            <div>AVG: {{ average }}ms</div>
            <button @click="onReset">Reset</button>
        </div>
    </div>
</template>

<script>
    let startTime = 0;
    let endTime = 0;
    let timeOut = null;
    export default {
        data() {
            return {
                result: [],
                state: 'waiting',
                message: 'Click To Start',
            }
        },
        methods: {
            onReset() {
                this.result = [];
            },
            onClickScreen() {
                if (this.state === 'waiting') {
                    this.state = 'ready';
                    this.message = '초록색이 되면 클릭하세요.'
                    timeOut = setTimeout( () => {
                        this.state = 'now';
                        this.message = '지금 클릭'
                        startTime = new Date();
                    }, Math.floor(Math.random() * 1000) + 2000)
                } else if (this.state === 'ready') {
                    clearTimeout(timeOut)
                    this.state = 'waiting';
                    this.message = '너무 성급하시군요! 초록색이 된 후에 클릭하세요.'
                } else if (this.state === 'now') {
                    endTime = new Date();
                    this.state = 'waiting';
                    this.message = '클릭해서 시작하세요.'
                    this.result.push(endTime - startTime);
                }
            },
        },
        computed: {//일반 데이터를 가공해서 쓸 때 -> Caching이 된다. ex)message가 바뀌어도 result는 다시실행 되지 않는다 result가 바껴야 다시실행된다
            average () {
                return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
            }
        },
    }
</script>

<style scoped>
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.ready {
        background-color: red;
    }
    #screen.now {
        background-color: greenyellow;
    }
</style>