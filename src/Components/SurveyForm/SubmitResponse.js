import React, { useState, useEffect } from 'react';
import ApiService from '../../services/apiService';

const SurveyResponses = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    ApiService.getSurveyResponses().then((data) => setResponses(data));
  }, []);

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Survey Responses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Description</th>
            <th>Gender</th>
            <th>Programming Stack</th>
            <th>Certificates</th>
            <th>Date Responded</th>
          </tr>
        </thead>
        <tbody>
          {responses.map((response) => (
            <tr key={response.response_id}>
              <td>{response.response_id}</td>
              <td>{response.full_name}</td>
              <td>{response.email_address}</td>
              <td>{response.description}</td>
              <td>{response.gender}</td>
              <td>{response.programming_stack}</td>
              <td>
                <ul>
                  {response.certificates.map((certificate, index) => (
                    <li key={index}>{certificate}</li>
                  ))}
                </ul>
              </td>
              <td>{response.date_responded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SurveyResponses;
