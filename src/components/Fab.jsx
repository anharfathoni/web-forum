import React from 'react';

function Fab() {
  return (
    <button type="button" className="absolute bottom-6 right-6 border rounded-full p-3 bg-blue-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>

  );
}

export default Fab;
