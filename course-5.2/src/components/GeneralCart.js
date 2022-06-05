import { Link } from 'react-router-dom';
import BookCart from './BookCart';

export default function GeneralCart() {
  return (
    <div>
      <div className="total">{BookCart().props.children[4]}</div>
      <Link to="/about">About Shop</Link>
      <Link to="/">App</Link>
    </div>
  );
}
