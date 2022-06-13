/* eslint-disable import/no-cycle */
import React, {
  useEffect, useRef, useState, useContext,
} from 'react';
import { Link } from 'react-router-dom';
import { EmailContext } from '../context/UserInfo';

export default function LoginPass() {
  const { email, setEmail } = useContext(EmailContext);
  console.log(email, 'email');

  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');

  const emailRegex = /\S+@\S+\.\S+/;

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const signInAndFocus = (e) => {
    if (!ref1.current.value) {
      ref1.current.focus();
      setMessage('Please enter a email!');
      ref1.current.style.border = '2px solid red';
      e.preventDefault();
    } else if (!emailRegex.test(ref1.current.value)) {
      ref1.current.focus();
      setMessage('Please enter a valid email!');
      ref1.current.style.border = '2px solid red';
      e.preventDefault();
    } else {
      setMessage('');
      ref1.current.style.border = '';
    }

    if (!ref2.current.value) {
      ref2.current.focus();
      setMessage2('Please enter a pass!');
      ref2.current.style.border = '2px solid red';
      e.preventDefault();
    } else if (ref2.current.value.length < 6) {
      ref2.current.focus();
      setMessage2('Please enter a pass longer than 6 symbols');
      ref2.current.style.border = '2px solid red';
      e.preventDefault();
    } else {
      setMessage2('');
      ref2.current.style.border = '';
    }
    const userInfo = { email: ref1.current.value, name: '', phone: '' };
    setEmail([userInfo]);
  };
  useEffect(() => {
    ref1.current.value = 'test@test.com';
    ref2.current.value = '123456';
  });

  return (
    <div>
      <input type="email" placeholder="Enter your email" ref={ref1} />
      <div>{message}</div>
      <input type="password" placeholder="Enter your password" ref={ref2} />
      <div>{message2}</div>
      <Link to="/Order">
        <input type="button" value="Вход" onClick={signInAndFocus} />
      </Link>
    </div>
  );
}
