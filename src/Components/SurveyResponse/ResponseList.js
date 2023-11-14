import React, { useState, useEffect } from 'react';
import ApiService from '../../services/apiService';

const ResponseList = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    ApiService.getAllResponses().then((data) => setResponses(data));
  }, []);

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Response List</h2>
      <ul className="list-group">
        {responses.map((response) => (
          <li key={response.response_id} className="list-group-item">
            {response.full_name} - {response.email_address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponseList;
