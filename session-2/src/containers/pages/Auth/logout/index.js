import React from 'react';

const Index = () => {
  localStorage.removeItem('customer-data');
  return <h1>berhasil logout</h1>;
};

export default Index;
