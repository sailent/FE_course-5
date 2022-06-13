/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import useInputRequired from './ReqHook';

export default function ReqInput2(props) {
  const {
    value, error, handleBlur, handleChange,
  } = useInputRequired(
    props.value || '',
  );
  return (
    <div>
      <input
        value={value}
        onBlur={(e) => handleBlur(e, true)}
        onChange={(e) => handleChange(e)}
      />
      {error.length > 0 && <div>{error}</div>}
    </div>
  );
}
