/* eslint-disable import/no-cycle */
import { Link } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { Context } from '../context/useContext';

export default function UserOrder() {
  const userName = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const { email, setEmail } = useContext(Context);
  const Send = () => {
    const name = userName.current.value;
    setEmail(
      email.map((e) => (e.name !== ''
        ? e
        : {
          ...e,
          name,
        })),
    );
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
          <input id="name" type="text" ref={userName} defaultValue={email[0].name} />
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
