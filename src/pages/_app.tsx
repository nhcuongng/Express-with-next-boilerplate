import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';

type TProp = {
  Component:any;
  pageProps: any
};

const App: React.FC<TProp> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <div style={{ margin: '20px' }}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
};

export default App;
