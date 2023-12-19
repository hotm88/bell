import Login from './Component/Login';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import { Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Login/>
      </Router>
    </div>
  );
}

export default App;
