import './App.css';

import {useState, useEffect} from 'react';

// 4- custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";
function App() {

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const {data: items, httpConfig, loading, error} = useFetch(url);
    //1 - resgatando dados
  //  useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   fetchData();


  //  }, []);

   //2-Aadicionar produtos
   const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    }
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // });

    // const addedProduct = await res.json();
    // //3 - carregamento dinâmico
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);
    //5 - refatorando post
    httpConfig(product, "POST");
    setName("");
    setPrice("");
   };

   //8 - desafio
   const handleRemove = (id) => {
    httpConfig(id, "DELETE");

   }
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/*6-loading*/}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && <ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}
          <button onClick={() => handleRemove(product.id)}>Deletar</button></li>
        ))}
      </ul>}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço:
            <input type="text" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {/*7- state de loading no post */}
          {loading && <input type="submit" disabled value="Aguarde"/>}
          {!loading && <input type="submit" value="Criar"/>}
        </form>
      </div>
    </div>
  );
}

export default App;
