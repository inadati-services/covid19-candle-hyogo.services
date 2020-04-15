
export default {
    async req(demand, variables) {
        const res = await fetch(process.env.GQL_SERVER_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                query: demand.loc.source.body,
                variables
            })
        })
        const { data } = await res.json()
        return data
    }
}
