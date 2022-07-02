import './App.css'
import Likes from './component/Likes'
import Title from './component/Title'
import Comments from './component/Comments'
import BookCart from './component/BookCart'

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
      <BookCart></BookCart>
    </div>
  )
}

export default App
