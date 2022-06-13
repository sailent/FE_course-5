import { useContext } from 'react';
import { EmailContext } from '../context/UserInfo';

export default function OrderReady() {
  const { email } = useContext(EmailContext);
  console.log(email);
  console.log(useContext(EmailContext));
  return (
    <div>
      123
      {/* <p>
        Name:
        {email[0].name}
      </p>
      <p>
        Email
        {email[0].email}
      </p>
      <p>Count</p>
      <p>Goods</p> */}
    </div>
  );
}
