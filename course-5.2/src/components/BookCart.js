import { useState } from 'react'
import MinMax from './MinMax'
import Total from './Total'

function booksStub() {
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
  ]
}

export default function BookCart() {
  const [books, setBooks] = useState(booksStub())

  const setQuantity = (id, quantity, total) => {
    setBooks(
      books.map((book) =>
        book.id !== id
          ? book
          : {
              ...book,
              quantity,
              total,
            }
      )
    )
  }

  const removeItem = (id) => {
    setBooks(books.filter((obj) => obj.id !== id))
  }
  return (
    <div className="some">
      <hr />
      <h1>books list</h1>
      <table>
        <tfoot>
          <tr>
            <th>total</th>
            <th>
              <Total books={books} />
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
            <th>Total</th>
          </tr>
          {books.map((book, i) => (
            <tr key={book.id}>
              <td>{i + 1}</td>
              <td>{book.title}</td>
              <td>{book.price}</td>
              <td>
                <MinMax
                  max={book.rest}
                  current={book.quantity}
                  onChange={(quantity, total) =>
                    setQuantity(book.id, quantity, total)
                  }
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
              <td>{book.quantity * book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
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
