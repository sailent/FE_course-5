import { useContext } from 'react';
import { EmailContext } from '../context/UserInfo';

export default function OrderReady() {
  const { email } = useContext(EmailContext);
  return (
    <div>
      <p>
        Name:
        {email[0].name}
      </p>
      <p>
        Email:
        {email[0].email}
      </p>
      <p>
        Count:
        {email.reduce(
          (prev, curr) => (curr.price ? prev + curr.price : prev + 0),
          0,
        )}
      </p>
      <p>Goods: </p>
      {email.map((e) => (
        <p>{e.title}</p>
      ))}
    </div>
  );
}
