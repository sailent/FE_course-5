import { useRef, useState } from 'react';

export default function LoginPass() {
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');

  const emailRegex = /\S+@\S+\.\S+/;

  // const validateEmail = (event) => {
  //   const email = event.target.value;
  //   if (!emailRegex.test(email)) {
  //     if (!message) setMessage('Please enter a valid email!');
  //   } else setMessage('');
  // };
  // const validatePass = (event) => {
  //   const pass = event.target.value.length;
  //   if (pass < 6) {
  //     setMessage2('Please enter a pass longer than 6 symbols');
  //   } else setMessage2('');
  // };

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const focus = () => {
    if (!ref1.current.value) {
      ref1.current.focus();
      setMessage('Please enter a email!');
      ref1.current.style.border = '2px solid red';
    } else if (!emailRegex.test(ref1.current.value)) {
      ref1.current.focus();
      setMessage('Please enter a valid email!');
      ref1.current.style.border = '2px solid red';
    } else {
      setMessage('');
      ref1.current.style.border = '';
    }

    if (!ref2.current.value) {
      ref2.current.focus();
      setMessage2('Please enter a pass!');
      ref2.current.style.border = '2px solid red';
    } else if (ref2.current.value.length < 6) {
      ref2.current.focus();
      setMessage2('Please enter a pass longer than 6 symbols');
      ref2.current.style.border = '2px solid red';
    } else {
      setMessage2('');
      ref2.current.style.border = '';
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email"
        // onBlur={validateEmail}
        ref={ref1}
      />
      <div>{message}</div>
      <input
        type="password"
        placeholder="Enter your password"
        // onBlur={validatePass}
        ref={ref2}
      />
      <div>{message2}</div>
      <input type="button" value="Вход" onClick={focus} />
    </div>
  );
}
