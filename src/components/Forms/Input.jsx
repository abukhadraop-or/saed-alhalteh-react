import React from 'react';
import PropTypes from 'prop-types';
import { InputBar } from './sign-in-form-styles';

function Input({ value, onChange, name, type, placeholder }) {
  return (
    <div>
      <InputBar
        value={value}
        onChange={(changeEvent) => onChange(changeEvent)}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default Input;
