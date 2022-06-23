import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-eu-west-2.graphcms.com/v2/cl4r54wjc0lp901wg142d8iva/master',
    cache: new InMemoryCache()
})