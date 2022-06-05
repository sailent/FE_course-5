import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import StudCard from './StudCard';
import StudCardClass from './StudCardClass';
import MinMax from './FirstTask';
import Shelf from './HW-3';
import ReacTimer from './HW-4';
import Order from './components/Order';
import BookCart from './components/BookCart';
import Select from './components/Select';
import LoginPass from './components/LoginPass';
import NumberGenerator from './components/NumberGenerator';
import HideAndSeekComponents from './components/SwitchComponent';
import Console from './components/Console';
import Title from './components/Title';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: consolas;
    box-sizing: border-box;
  }
`;
const AppWrapper = styled.div`
  background: black;
  width: 100%;
  paddind: 2rem;
  min-height: 100vh;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'column'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
`;

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <StudCard text="Студент" name="Олег" />
      <StudCard text="Препод" name="Евгений" />
      <StudCard text="Студент" name="Кирилл" />
      <StudCardClass />
      <MinMax MinMax={{ min: 0, max: 10 }} />
      <Shelf />
      <ReacTimer />
      <Order />
      <BookCart />
      <Select />
      <LoginPass />
      <NumberGenerator />
      <HideAndSeekComponents />
      <AppWrapper>
        <hr />
        <Flex>
          <Title>Console CMD. SKYPRO_REACT</Title>
          <Console />
        </Flex>
      </AppWrapper>
    </div>
  );
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
