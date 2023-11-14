// components/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SurveyForm from './Components/SurveyForm/SurveyForm';
import ResponseList from './Components/SurveyResponse/ResponseList';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" component={SurveyForm} />
          <Route path="/responses" component={ResponseList} />
        </Routes>
    </Router>
  );
};

export default App;
