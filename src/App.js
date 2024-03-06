import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Categories from './components/Categories';
import CategoryDetails from './components/CategoryDetails';
import BooksDetails from './components/BooksDetails';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Navbar/><Home /><Footer/></>} />
        <Route path="/categories" element={<><Navbar/><Categories /><Footer/></>} />
        <Route path="/categories/:category" element={<><Navbar/><CategoryDetails /></>} />
        <Route path="/categories/:category/:title" element={<><Navbar/><BooksDetails/></>} />
        <Route path="/checkout" element={<><Navbar/><Checkout /></>} />
      </Routes>
    </div>
  );
}

export default App;
