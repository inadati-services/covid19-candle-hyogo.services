// import { SubscriptionClient } from 'subscriptions-transport-ws'
// import { WebSocketLink } from 'apollo-link-ws'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import ApolloClient from 'apollo-client'

// export default new ApolloClient({
//     cache: new InMemoryCache(),
//     link: new WebSocketLink(
//         new SubscriptionClient('ws://localhost:8080/query', {
//             reconnect: true
//         })
//     )
// })