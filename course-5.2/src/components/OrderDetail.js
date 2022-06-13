/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { Link } from 'react-router-dom';

export default function OrderDetail(props) {
  return (
    <div className="order-detail" key={props.id}>
      <p>
        <b>{props.productName}</b>
      </p>
      <p>
        price:
        {' '}
        {props.price}
        $
      </p>
      <Link to={`/BookDesc?book_id=${props.id}`}>Read more</Link>
      <hr />
      <div className="quantity__div">
        <Link to="/UserOrder ">
          <button type="button" className="addButton" onClick={props.ChangeState}>
            add to cart
          </button>
        </Link>
      </div>
    </div>
  );
}
