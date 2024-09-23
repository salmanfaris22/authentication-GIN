
import './App.css';
import Logine from './components/Auth/Logine';
import Register from './components/Auth/Register';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
     <Register/>
     <Logine/>
     <Home/>
    </div>
  );
}

export default App;
