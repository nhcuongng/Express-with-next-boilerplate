import React from 'react';
import Head from 'next/head';
import { Hello } from '~@Components/hello';

const IndexPage: React.FC = () => (
  <>
    <Head>
      <title>Typescript boilerplate for future project</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Hello />
  </>
);

export default IndexPage;
