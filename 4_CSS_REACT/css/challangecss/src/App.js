import './App.css';
import Car from './components/Car';

function App() {
  const mycars = [
    {name: "Fusca", km: 10000, color: "Branco"},
    {name: "Polo", km: 12000, color: "Azul"},
    {name: "Onix", km: 0, color: "Preto"},
  ];
  return (
    <div className="App">
      <h1>ShowRoom de carros</h1>
      <div className="car-container">
        {mycars.map((car) => (
          <Car car={car}/>
        ))}
      </div>
    </div>
  );
}

export default App;
