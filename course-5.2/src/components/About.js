import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      Самый лучший в мире магазин!
      <Link to="/">App</Link>
      <Link to="/GeneralCart">General Cart</Link>
    </div>
  )
}
