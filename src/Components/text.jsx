import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Text() {
  const [textboxes, setTextboxes] = useState(['']);
  const [error, setError] = useState('');

  const handleAddTextbox = () => {
    setTextboxes([...textboxes, '']);
  };

  const handleDeleteTextbox = (index) => {
    setTextboxes(textboxes.filter((_, i) => i !== index));
  };

  const handleTextboxChange = (value, index) => {
    if (1) {
      if (!isNaN(parseFloat(value)) && isFinite(value)) setError('');
      else {
        if (isNaN(value)) {
          setError('Please enter a valid number.');
        }
      }
      const newValues = [...textboxes];
      newValues[index] = value;
      setTextboxes(newValues);
    }
  };

  const calculateSum = () => {
    let sum = 0;
    textboxes.forEach((value) => {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        sum += num;
      }
    });
    return sum;
  };

  return (
    <div className="container">
      <h1 className="text-center">Add and Delete Textboxes</h1>
      <Button variant="primary" onClick={handleAddTextbox}>
        Add Textbox
      </Button>
      {textboxes.map((value, index) => (
        <div className="d-flex align-items-center mt-3" key={index}>
          <input
            className="form-control"
            type="text"
            value={value}
            onChange={(e) => handleTextboxChange(e.target.value, index)}
          />
          <Button variant="danger" className="ml-3" onClick={() => handleDeleteTextbox(index)}>
            Delete
          </Button>
        </div>
      ))}
      {error && <p className="error">{error}</p>}
      <p className="text-center mt-3">Total Sum: {calculateSum()}</p>
    </div>
  );
}

export default Text;
