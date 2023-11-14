import React from 'react';

const SubmitButton = ({ onSubmit }) => {
  return (
    <div className="mt-4">
      <button type="button" className="btn btn-success" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
