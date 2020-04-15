

export default {
    serve(chartData, dayCount) {
        const result = []
        for (let i = 0, len = chartData.length; i < len; i++) {
            if (i < dayCount) {
                result.push('-')
                continue
            }
            let sum = 0
            for (let j = 0; j < dayCount; j++) {
                sum += chartData[i - j][1]
            }
            result.push(sum / dayCount)
        }
        return result
    }
}