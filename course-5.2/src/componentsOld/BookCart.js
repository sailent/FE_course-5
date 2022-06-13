import { useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import MinMax from './MinMax';
import MinMaxLazy from './MinMaxLazy';
import ReqInput2 from './InputReq';

export function booksStub() {
  return [
    {
      id: 1,
      title: 'Война и мир - Л.Н.Толстой',
      price: 800,
      rest: 10,
      quantity: 0,
      total: 0,
    },
    {
      id: 2,
      title: 'Две жизни - К.Е.Антарова',
      price: 700,
      rest: 5,
      quantity: 1,
      total: 700,
    },
    {
      id: 3,
      title: 'Разговор с богом - Н.Д.Уолша',
      price: 1000,
      rest: 2,
      quantity: 1,
      total: 1000,
    },
    {
      id: 5,
      title: 'Хохот Шамана - В.П.Серкин',
      price: 600,
      rest: 8,
      quantity: 1,
      total: 600,
    },
    {
      id: 4,
      title: 'Хроники Ехо - Макс Фрай',
      price: 400,
      rest: 8,
      quantity: 1,
      total: 400,
    },
  ];
}

export default function BookCart() {
  const [books, setBooks] = useState(booksStub());
  const [reqInput, setReq] = useState();

  const setQuantity = (id, quantity, total) => {
    setBooks(
      books.map((book) => (book.id !== id
        ? book
        : {
          ...book,
          quantity,
          total,
        })),
    );
  };
  const removeItem = (id) => {
    setBooks(books.filter((obj) => obj.id !== id));
  };

  const useInputRequired = (required, e) => {
    const val = e.target.value;
    if (required && !val) {
      setReq('это поле обязательно');
      e.target.style.borderColor = 'red';
    }
  };
  return (
    <div className="some">
      <hr />
      <h1>books list</h1>
      <table>
        <tfoot>
          <tr>
            <th>Total:</th>
            <th>
              {books.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)}
              $
            </th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
          {books.map((book, i) => (
            <tr key={book.id}>
              <td>{i + 1}</td>
              <td>{book.title}</td>
              <td>
                {book.price}
                $
              </td>
              <td>
                <MinMaxLazy
                  max={book.rest}
                  current={book.quantity}
                  onChange={(quantity, total) => setQuantity(book.id, quantity, total)}
                  total={book.price * book.quantity}
                />
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeItem(book.id)}
                  className="removeButton"
                >
                  x
                </button>
              </td>
              <td>
                {book.quantity * book.price}
                $
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <input placeholder={reqInput} onBlur={(e) => useInputRequired(true, e)} />
      <ReqInput2 />
      <div className="total">
        <h3>
          Total amount:
          {' '}
          {books.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)}
        </h3>
        <h3>
          Total quantity:
          {books.reduce((prev, curr) => prev + Number(curr.quantity), 0)}
        </h3>
      </div>
      <Link to="/about">About Shop</Link>
      <Link to="/GeneralCart">General Cart</Link>
    </div>
  );
}

/*
const setquantity = (id, quantity) => {
  const newbooks = [ ...books ];
  const productInd = books.findIndex(book => book.id == id);
  const newProduct = { ...books[productInd] };
  newProduct.quantity = quantity;
  newbooks[productInd] = newProduct;
  setbooks(newbooks);
} */
