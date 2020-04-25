import ChartDataGenerator from '~/servant/ChartDataGenerator'
import MACalculator from '~/servant/MACalculator'

export default {
    get(chartDataSrc) {
        const { categories, chartData } = ChartDataGenerator.serve(chartDataSrc)
        return {
            tooltip: {
                show: true,
                formatter(params, ticket) {
                    const [
                        {
                            dataIndex,
                            name: date,
                            data: { '1': positive_yesterday, '2': positive },
                        },
                        { data: ma5 },
                        { data: ma10 },
                    ] = params

                    const {
                        positive_up_daily,
                        death_daily,
                        discharge_daily,
                    } = chartDataSrc[dataIndex]

                    const compare_yesterday =
                        positive > positive_yesterday
                            ? `+${positive - positive_yesterday}`
                            : positive < positive_yesterday
                            ? `${positive - positive_yesterday}`
                            : `±${positive - positive_yesterday}`

                    return `
                日時: ${date}<br>
                県内患者数: ${positive}<br>
                患者数前日比: ${compare_yesterday}<br>
                &nbsp;&nbsp;新規陽性: ${positive_up_daily}<br>
                &nbsp;&nbsp;新規非陽性: ${death_daily + discharge_daily} (うち退院: ${discharge_daily}、死者: ${death_daily})<br>
                5日間平均線: ${ma5}<br>
                10日間平均線: ${ma10}
            `
                },
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                },
            },
            legend: {
                data: ['県内患者数', '5日間平均線', '10日間平均線'],
                top: 0,
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%',
            },
            xAxis: {
                type: 'category',
                data: categories,
                scale: true,
                boundaryGap: false,
                axisLine: { onZero: false },
                splitLine: { show: false },
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax',
            },
            yAxis: {
                scale: true,
                splitArea: {
                    show: true,
                },
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 50,
                    end: 100,
                },
                {
                    show: true,
                    type: 'slider',
                    top: '90%',
                    start: 50,
                    end: 100,
                },
            ],
            series: [
                {
                    name: '県内患者数',
                    type: 'candlestick',
                    data: chartData,
                    itemStyle: {
                        borderColor: '#E01F54',
                        borderColor0: '#001852',
                    },
                },
                {
                    name: '5日間平均線',
                    type: 'line',
                    data: MACalculator.serve(chartData, 5),
                    smooth: true,
                    lineStyle: {
                        opacity: 0.5,
                    },
                },
                {
                    name: '10日間平均線',
                    type: 'line',
                    data: MACalculator.serve(chartData, 10),
                    smooth: true,
                    lineStyle: {
                        opacity: 0.5,
                    },
                },
            ],
        }
    },
}
