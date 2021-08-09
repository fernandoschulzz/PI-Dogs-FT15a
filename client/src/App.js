import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/home";
import Landingpage from "./components/landingpage";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= "/">
          <Landingpage/>
        </Route>
        <Route exact path= "/home">
          <Home/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
