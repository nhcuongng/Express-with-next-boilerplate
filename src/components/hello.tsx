import React from 'react';
import { useMeQuery } from '~@GraphqlHelper';

type TProp = {

};

export const Hello: React.FC<TProp> = () => {
  const { loading, data, error } = useMeQuery();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && !data) {
    return (
      <p>
        Some error
        {error.message}
      </p>
    );
  }

  return (
    <p>{data.me}</p>
  );
};
