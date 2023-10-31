import React, { useState } from 'react';

const TestPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    projectName: '',
    projectLink: '',
    categoryWon: '',
    resumeLink: '',
    gradYear: 0,
    category: '',
    featured: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/handler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data sent successfully!');
      } else {
        console.error('Failed to send data.');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div>
      <h1>Dummy Data Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Project Name:
          <input type="text" name="projectName" value={formData.projectName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Project Link:
          <input type="text" name="projectLink" value={formData.projectLink} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Category Won:
          <input type="text" name="categoryWon" value={formData.categoryWon} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Resume Link:
          <input type="text" name="resumeLink" value={formData.resumeLink} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Grad Year:
          <input type="number" name="gradYear" value={formData.gradYear} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" name="category" value={formData.category} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestPage;
