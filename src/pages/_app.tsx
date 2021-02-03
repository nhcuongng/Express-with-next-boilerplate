import React from 'react';

type TProp = {
  Component:any;
  pageProps: any
};

const App: React.FC<TProp> = ({ Component, pageProps }) => (
  <div style={{ margin: '20px' }}>
    <Component {...pageProps} />
  </div>
);

export default App;
