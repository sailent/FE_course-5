import './App.css'
import StudCard from './StudCard'
import StudCardClass from './StudCardClass'

function App() {
  return (
    <div className="App">
      <StudCard text="Студент" name="Олег" />
      <StudCard text="Препод" name="Евгений" />
      <StudCard text="Студент" name="Кирилл" />
      <StudCardClass />
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
