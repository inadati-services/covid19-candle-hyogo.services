import client from '../client'
import cache from '../cache'
import gql from 'graphql-tag'

export const demand = gql`
    query {
        readPatientInfos {
            date
            positive
            positive_yesterday
        }
    }
`

// resolver
export default async variables => {
    if(!cache.Find("patientInfos")){
        const {readPatientInfos: patientInfos} = await client.req(demand)
        cache.Regist('patientInfos', patientInfos)
    }
    
    return cache.Find("patientInfos")
}
