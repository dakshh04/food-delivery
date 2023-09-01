import './App.css';
import Home from './screen/Home';
import {
  BrowserRouter,
  Link,
  Route,
  Router,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div><Home/></div>
      </div>
    </Router>
  );
}

export default App;
