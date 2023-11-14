import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../../services/apiService';

const ResponseDetails = () => {
  const { id } = useParams();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    ApiService.getResponseDetails(id).then((data) => setResponse(data));
  }, [id]);

  if (!response) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Response Details</h2>
      <div>
        <strong>Full Name:</strong> {response.full_name}
      </div>
      <div>
        <strong>Email Address:</strong> {response.email_address}
      </div>
      {/* Add other response details here */}
    </div>
  );
};

export default ResponseDetails;
