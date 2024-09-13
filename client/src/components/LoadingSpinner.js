import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <ClipLoader color="#ffffff" size={50} />
    </div>
  );
}

export default LoadingSpinner;
