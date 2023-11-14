import React from 'react';

const Stepper = ({ currentStep, totalSteps, onNext, onPrev }) => {
  return (
    <div className="mt-4">
      <button
        type="button"
        className="btn btn-secondary me-2"
        onClick={onPrev}
        disabled={currentStep === 1}
      >
        Previous
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onNext}
        disabled={currentStep === totalSteps}
      >
        {currentStep === totalSteps ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

export default Stepper;
