import { useState } from 'react';

const useInputRequired = (val) => {
  const [error, setError] = useState('');
  const [value, setValue] = useState(val || '');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleBlur = (event, required) => {
    if (event.target.value.length === 0 && required) {
      setError('Это поле обязательно');
    } else setError('');
  };

  return {
    value,
    error,
    handleChange,
    handleBlur,
  };
};

export default useInputRequired;
