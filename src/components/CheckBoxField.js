import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel } from '@mui/material';

function CheckBoxField(props) {
  const { field, label, color } = props;
  return (
    <div>
      <FormControlLabel
        control={<Checkbox value='remember' color={color} {...field} />}
        label={label}
      />
    </div>
  );
}

CheckBoxField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  color: PropTypes.string,
};

CheckBoxField.defaultProps = {
  label: '',
  color: 'primary',
};

export default CheckBoxField;
