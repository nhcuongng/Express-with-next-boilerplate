import { withApollo } from 'next-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
    uri: '/graphql', // Server URL (must be absolute)
  }),
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
