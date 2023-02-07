import './App.css';
import Shoes from './components/Shoes/Shoes';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Cosmetics2 from './components/Cosmetics2/Cosmetics2';

function App() {
  return (
    <div className="App">
      <Cosmetics2></Cosmetics2>
      <hr />
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
    </div>
  );
}

export default App;
