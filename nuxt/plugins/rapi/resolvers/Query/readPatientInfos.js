import client from '../client'
import cache from '../cache'
import gql from 'graphql-tag'

export const demand = gql`
    query {
        readPatientInfos {
            id
            date
            positive_up_daily
            positive
            positive_yesterday
            death_daily
            discharge_daily
        }
    }
`

// resolver
export default async (variables) => {
    const { readPatientInfos: patientInfos } = await client.req(demand)
    cache.Regist('patientInfos', patientInfos)

    return cache.Find('patientInfos')
}
