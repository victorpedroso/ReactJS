import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name:"João", email:"joao@teste.com", bio:"Sou um advogado", role:"admin"}}/>
    </div>
  );
}

export default App;
