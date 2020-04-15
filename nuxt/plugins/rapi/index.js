import readPatientInfos from './resolvers/Query/readPatientInfos'

export const rapi = {
    Query: {
        readPatientInfos
    }
}

// Insert it in the context of the framework you use
// example nuxt.js

export default (ctx, inject) => {
    inject('rapi', rapi)
}
