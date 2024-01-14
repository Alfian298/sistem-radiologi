// Selesai.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Selesai = () => {
  const location = useLocation();
  const { data } = location.state || {};

  if (!data) {
    // Redirect to home if data is not available
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h2>Data Telah Disimpan</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Selesai;