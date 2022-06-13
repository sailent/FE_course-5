/* eslint-disable import/no-cycle */
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './componentsOld/About';
import NotFound from './componentsOld/NotFound';
import GeneralCart from './componentsOld/GeneralCart';
import reportWebVitals from './reportWebVitals';
import Order from './components/OrderFunc';
import BookDesc from './components/BookDesc';
import OrderReady from './components/OrderReady';
import SetEmail from './context/UserInfo';
import UserOrder from './components/UserOrder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SetEmail>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/GeneralCart" element={<GeneralCart />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/BookDesc" element={<BookDesc />} />
        <Route path="/OrderReady" element={<OrderReady />} />
        <Route path="/UserOrder" element={<UserOrder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </SetEmail>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
