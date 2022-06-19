import './App.css'
import Likes from './component/Like'
import Title from './component/Title'

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Title></Title>
            <Likes />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
