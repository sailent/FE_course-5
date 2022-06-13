/* eslint-disable import/no-cycle */
import { useContext, useState } from 'react';
import OrderDetail from './OrderDetail';
import { EmailContext } from '../context/UserInfo';

export function booksStub() {
  return [
    {
      id: 1,
      title: 'Война и мир - Л.Н.Толстой',
      price: 800,
    },
    {
      id: 2,
      title: 'Две жизни - К.Е.Антарова',
      price: 700,
    },
    {
      id: 3,
      title: 'Разговор с богом - Н.Д.Уолша',
      price: 1000,
    },
    {
      id: 5,
      title: 'Хохот Шамана - В.П.Серкин',
      price: 600,
    },
    {
      id: 4,
      title: 'Хроники Ехо - Макс Фрай',
      price: 400,
    },
  ];
}

export default function Order() {
  const { email, setEmail } = useContext(EmailContext);
  console.log(email);

  const [books] = useState(booksStub());

  // const IncrementQuantity = (quantityInc, id) => {
  //   const quantity = quantityInc + 1;
  //   setBooks(
  //     books.map((book) => (book.id !== id
  //       ? book
  //       : {
  //         ...book,
  //         quantity,
  //       })),
  //   );
  // };

  // const DecrementQuantity = (quantityDec, id) => {
  //   if (quantityDec <= 0) return false;
  //   const quantity = quantityDec - 1;
  //   setBooks(
  //     books.map((book) => (book.id !== id
  //       ? book
  //       : {
  //         ...book,
  //         quantity,
  //       })),
  //   );
  //   return true;
  // };
  const ChangeState = (book) => {
    setEmail((obj) => [...obj, book]);
  };

  return (
    <div className="order">
      {Object.keys(books).map((e) => (
        <OrderDetail
          key={books[e].id}
          id={books[e].id}
          productName={books[e].title}
          price={books[e].price}
          quantity={books[e].quantity}
          ChangeState={() => ChangeState(books[e])}
          // Inc={() => IncrementQuantity(books[e].quantity, books[e].id)}
          // Dec={() => DecrementQuantity(books[e].quantity, books[e].id)}
        />
      ))}
    </div>
  );
}
