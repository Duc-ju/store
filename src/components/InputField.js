import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

function InputField(props) {
  const { field, form, label, type, autoComplete, autoFocus } = props;
  const { name } = field;
  return (
    <TextField
      {...field}
      margin='normal'
      fullWidth
      id={name}
      label={label}
      type={type}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
    />
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
};
InputField.defaultProps = {
  type: 'text',
  label: '',
  autoComplete: '',
  autoFocus: false,
};

export default InputField;
