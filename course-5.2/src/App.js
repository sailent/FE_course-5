import './App.css'
import StudCard from './StudCard'
import StudCardClass from './StudCardClass'
import MinMax from './FirstTask'
import Shelf from './HW-3'
import ReacTimer from './HW-4'
import Order from './components/Order'
import BookCart from './components/BookCart'

function App() {
  return (
    <div className="App">
      <StudCard text="Студент" name="Олег" />
      <StudCard text="Препод" name="Евгений" />
      <StudCard text="Студент" name="Кирилл" />
      <StudCardClass />
      <MinMax MinMax={{ min: 0, max: 10 }} />
      <Shelf />
      <ReacTimer />
      <Order />
      <BookCart />
    </div>
  )
}

// <StudCard name={}/> --> React.createElement(StudCard, {})

// function StudCard({ text }) {
//   return (
//     <>
//       <hr />
//       <div className="card">{text}</div>
//       <hr />
//     </>
//   )
// }

export default App
