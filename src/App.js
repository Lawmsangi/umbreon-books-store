import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Categories from './components/Categories';
import CategoryDetails from './components/CategoryDetails';
import BooksDetails from './components/BooksDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<CategoryDetails />} />
        <Route path="/categories/:category/:title" element={<BooksDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
