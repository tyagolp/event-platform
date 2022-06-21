import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o9oyza1ij701z26ifmfs42/master',
    cache: new InMemoryCache()
})