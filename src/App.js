import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Hello from inside Wrapper</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Text</h2>
        <p>Information</p>
        <input type="text" placeholder="Enetr value" />
      </Wrapper>
    </div>
  );
}

export default App;
