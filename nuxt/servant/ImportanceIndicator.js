import ChartDataGenerator from './ChartDataGenerator'
import MACalculator from './MACalculator'

export default {
    serve(chartDataSrc) {
        const { chartData } = ChartDataGenerator.serve(chartDataSrc)
        const ma5 = MACalculator.serve(chartData, 5)
        const ma10 = MACalculator.serve(chartData, 10)

        const ma5Latest = ma5[ma5.length - 1]
        const ma10Latest = ma10[ma10.length - 1]
        const chartDataLatest = chartData[chartData.length - 1][1]


        if (chartDataLatest > ma5Latest && chartDataLatest > ma10Latest){
            return { alert: 'error', message: '現在、感染は拡大に向かっています。' }
        } else if (chartDataLatest < ma5Latest && chartDataLatest < ma10Latest) {
            return { alert: 'success', message: '現在、感染は終息に向かっています。' }
        } else {
            return { alert: 'warning', message: '現在、感染拡大は比較的緩やかな状態です。' }
        }
    }
}
