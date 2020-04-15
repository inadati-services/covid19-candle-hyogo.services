import echarts from 'echarts/lib/echarts'
import 'echarts/dist/echarts.common'
import 'echarts-gl/dist/echarts-gl'
import 'echarts-stat/dist/ecStat'
import 'echarts/dist/extension/dataTool'
import 'echarts/dist/extension/bmap'
import 'echarts/theme/roma'


export default (ctx, inject) => {
    inject("echarts", echarts)
}