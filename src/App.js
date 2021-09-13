import {Switch ,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
         Home
        </Route>
        <Route exact path="/about">
         About
        </Route>
        <Route exact path="/portafolio">
         Portafolio
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
     {/* <div className="box-dad">
       <h1>Name</h1>
     </div> */}
    </div>
  );
}

export default App;
