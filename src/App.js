import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Componenets/Home/Home';
import NotMatch from './Componenets/NotMatch/NotMatch';
import CountryDetails from './Componenets/CountryDetails/CountryDetails';
import Header from './Componenets/Header/Header';
import User from './Componenets/User/User';
import About from './Componenets/About/About';

function App() {
  return (
   <Router>
     <Header/>
     <Switch>
       <Route path="/Home">
          <Home/>
       </Route>
       <Route path="/country/:countryCode">
          <CountryDetails/>
       </Route>
       <Route path="/Users">
          <User/>
       </Route>
       <Route path="/About">
         <About/>
       </Route>
        <Route exact path="/">
            <Home />
        </Route>
        <Route>
          <NotMatch/>
        </Route>
     </Switch>
   </Router>
  );
}

export default App;
