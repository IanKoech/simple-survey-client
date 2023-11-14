import React from 'react';

const Question = ({ question, answer, onChange }) => {
  const { name, type, required, text, description, options, file_properties } = question;

  const handleInputChange = (e) => {
    onChange(name, e.target.value);
  };

  const renderInput = () => {
    switch (type) {
      case 'short_text':
      case 'email':
      case 'long_text':
        return (
          <textarea
            className="form-control"
            rows={type === 'long_text' ? 4 : 1}
            value={answer}
            onChange={handleInputChange}
            required={required === 'yes'}
          />
        );
      case 'choice':
        return (
          <select
            className="form-select"
            value={answer}
            onChange={handleInputChange}
            required={required === 'yes'}
          >
            <option value="">Select an option</option>
            {options.multiple === 'yes' ? (
              options.option.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.children}
                </option>
              ))
            ) : (
              <optgroup label={text}>
                {options.option.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.children}
                  </option>
                ))}
              </optgroup>
            )}
          </select>
        );
      case 'file':
        return (
          <input
            type="file"
            className="form-control"
            accept={file_properties.format}
            onChange={handleInputChange}
            required={required === 'yes'}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="mb-4">
      <label className="form-label">{text}</label>
      {renderInput()}
      {description && <small className="form-text text-muted">{description}</small>}
    </div>
  );
};

export default Question;
