
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbars from './Component/Navbars';
import Products from './Component/Products';
import CartPage from './Component/CartPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbars />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path='/yourOrder' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
