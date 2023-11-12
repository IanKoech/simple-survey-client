const BASE_URL = 'http://localhost:3001/api';

const ApiService = {
  getQuestions: () => fetch(`${BASE_URL}/questions`).then((res) => res.json()),
  submitResponses: (data) =>
    fetch(`${BASE_URL}/questions/responses`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()),
  getResponses: () => fetch(`${BASE_URL}/questions/responses`).then((res) => res.json()),
  downloadCertificate: (id) =>
    fetch(`${BASE_URL}/questions/responses/certificates/${id}`).then((res) => res.blob()),
};

export default ApiService;
