import React from 'react';
import Head from 'next/head';
import { Hello } from '~@Components/hello';
import withApollo from '../lib/apollo';

const IndexPage: React.FC = () => (
  <>
    <Head>
      <title>Typescript boilerplate for future project</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Hello />
  </>
);

export default withApollo({ ssr: true })(IndexPage);
