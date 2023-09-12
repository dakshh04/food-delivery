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
      <Routes>
        <Route exact path = "/" element ={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
