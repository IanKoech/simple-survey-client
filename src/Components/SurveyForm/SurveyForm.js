// components/SurveyForm/SurveyForm.js
import React, { useState, useEffect } from 'react';
import Question from './Question';
import Stepper from './Stepper';
import SubmitButton from './SubmitButton';
import ApiService from '../../services/apiService';

const SurveyForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    ApiService.getQuestions().then((data) => setQuestions(data));
  }, []);

  const onNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const onPrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (questionName, value) => {
    setAnswers({ ...answers, [questionName]: value });
  };

  const onSubmit = () => {
    ApiService.submitResponses(answers).then(() => {
      
      console.log('Responses submitted successfully');
    });
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Survey Form</h2>
      <form>
        {questions.map((question, index) => (
          <div key={index} style={{ display: currentStep === index + 1 ? 'block' : 'none' }}>
            <Question
              question={question}
              answer={answers[question.name] || ''}
              onChange={handleChange}
            />
          </div>
        ))}
        <Stepper
          currentStep={currentStep}
          totalSteps={questions.length}
          onNext={onNext}
          onPrev={onPrev}
        />
        {currentStep === questions.length && <SubmitButton onSubmit={onSubmit} />}
      </form>
    </div>
  );
};

export default SurveyForm;
