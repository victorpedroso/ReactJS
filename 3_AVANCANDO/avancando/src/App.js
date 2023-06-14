import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  //const name = "Joaquim";
  const [userName] = useState("Maria");
  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: "Chevrolet", color: "Laranja", newCar: false, km: 1000},
    {id: 3, brand: "Renault", color: "Prata", newCar: false, km: 54600},
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  };

  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };
  const users = [
    {id:1, name: "Victor", job: "Programmer", age: 24},
    {id:2, name: "João", job: "Nutricinista", age: 41},
    {id:3, name: "Pedro", job: "Estudante", age: 10},
  ]
  return (
    <div className="App">
      <h1>Avançando em react</h1>
      {/*Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/*Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender />
      <ConditionalRender />
      {/*Props*/}
      <ShowUserName name={userName}/>
      {/*Desestruturando*/}
      <CarDetails brand="VW" km={10000} color="Azul" newCar={false}/>
      {/*Reaproveitando*/}
      <CarDetails brand="Ford" km={200000} color="Cinza" newCar={false}/>
      <CarDetails brand="Fiat" km={0} color="Preto" newCar={true}/>
      {/*Loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>
      ))}
      {/*Fragmentos*/}
      <Fragments propFragment="Teste"/>
      {/*Children*/}
      <Container valor="Meu valor">
        <p>E este é o conteúdo</p>
      </Container>
      <Container valor="Outro valor">
        <h5>Testando</h5>
      </Container>
      {/*Executar função*/}
      <ExecuteFunction myFunction={showMessage}/>
      {/*State lift*/}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/*Desafio*/}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} job={user.job} age={user.age}/>
      ))}
      
    </div>
  );
}

export default App;
