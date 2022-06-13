/* eslint-disable import/no-cycle */
import { Link } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { EmailContext } from '../context/UserInfo';

export default function UserOrder() {
  const userName = useRef(null);
  const { email, setEmail } = useContext(EmailContext);
  const Send = () => {
    const name = userName.current.value;
    setEmail((e) => (e[0].name !== ''
      ? e
      : {
        ...e[0],
        name,
      }));
  };
  return (
    <div>
      <h1>Input data</h1>
      <hr />
      <div>
        <label htmlFor="email">
          Email
          <input id="email" type="email" value={email[0].email} />
        </label>
        <label htmlFor="phone">
          Phone
          <input id="phone" type="text" />
        </label>
        <label htmlFor="name">
          Name
          <input id="name" type="text" ref={userName} />
        </label>
      </div>
      <hr />
      <Link to="/Order">
        <input type="button" value="Back to cart" />
      </Link>
      <Link to="/OrderReady">
        <input type="button" value="Send" onClick={() => Send()} />
      </Link>
    </div>
  );
}
