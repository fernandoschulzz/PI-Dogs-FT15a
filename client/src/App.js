import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/home";
import Landingpage from "./components/landingpage";
import Addnewdog from "./components/addnewdog"
import Detail from './components/dogdetails';

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
        <Route exact path= "/addnewdog">
          <Addnewdog/>
        </Route>
        <Route path="/dog/:id" component={Detail} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
