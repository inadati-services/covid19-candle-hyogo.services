<template>
    <div style="width: 100%;">
        <div class="echart" ref="echart"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import option from './option'
export default {
    props: {
        chartDataSrc: {
            type: Array,
            default: null
        }
    },
    data() {
        return {
            chart: null
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initEchart()
        })
    },
    methods: {
        initEchart() {
            this.chart = this.$echarts.init(this.$refs.echart, 'roma')
            this.chart.setOption(option.get(this.chartDataSrc), true)
        }
    },
    computed: {
        ...mapState(['windowSize'])
    },
    watch: {
        windowSize() {
            if(this.chart){
                this.chart.resize({ width: document.getElementById("alert").offsetWidth })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.echart {
    width: 100%;
    height: 70vh;
    margin-left: auto;
    margin-right: auto;
}
</style>
