import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_URL = `https://rickandmortyapi.com/graphql`;

export const APOLLO_CLIENT = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});
