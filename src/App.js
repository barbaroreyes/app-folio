import {Switch ,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Compo/Header'
import './App.css';
import Portafolio from './Pages/Portafolio';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
     <Header/>
      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route exact path="/about">
         <About/>
        </Route>
        <Route exact path="/portafolio">
         <Portafolio/>
        </Route>
        <Route exact path="/projects">
         Projects
        </Route>
        <Route exact path="/project:id">
         Project
        </Route>
        <Route exact path="/contact">
         Contact
        </Route>
      </Switch>
    
    </div>
  );
}

export default App;
