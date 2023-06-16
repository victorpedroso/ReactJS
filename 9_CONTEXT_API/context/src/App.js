import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//pages
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';

//components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
