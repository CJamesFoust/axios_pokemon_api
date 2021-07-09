import Button from './Components/Button';
import Pokemon from './Components/Pokemon';
import Wrapper from './Components/Wrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Button />
        <Pokemon />
      </Wrapper>
    </div>
  );
}

export default App;
