
export default {
    serve(chartDataSrc) {
        const categories = []
        const chartData = []

        chartDataSrc.forEach(({ date, positive, positive_yesterday }, i) => {
            const d = new Date(date)
            categories.push(
                `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`
            )
            chartData.push([positive_yesterday, positive, positive, positive])
        })

        return {
            categories,
            chartData
        }
    }
}