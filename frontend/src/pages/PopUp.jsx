import React from 'react';

const PopUp = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 min-w-[350px] max-w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default PopUp;