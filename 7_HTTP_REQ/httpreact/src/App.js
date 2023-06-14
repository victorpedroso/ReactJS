import './App.css';

import {useState, useEffect} from 'react';

const url = "http://localhost:3000/products";
function App() {

  const [products, setProducts] = useState([]);
  const [name, setName] = useState
    //1 - resgatando dados
   useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();
      setProducts(data);
    }
    fetchData();


   }, []);

   //2-Aadicionar produtos
   const handleSubmit = async (e) => {

   }
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
