import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/Nav';
import {PhotoGrid} from './components/Grid';
import {Footer} from './components/Footer';
import{Coleccion} from './components/Coleccion';
import {Home} from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

//routes
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  const hello = () =>{
    alert("hey")
  }

  return (
    /* <div className="App">
    <div className="main-app">
      <div className="main-app-wrap">
        <h1>VICTORIA QUIAN</h1>
        <div class="box" onClick={hello}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
<div className="main-container">
  <NavBar />
  <PhotoGrid />
</div>
<Footer /> 
</div> */
   <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Home} />
          <div className="main-container">
            <NavBar />
            <Route path="/" exact component={PhotoGrid}   />
            <Route path="/coleccion/:id" exact render={(props) => <Coleccion {...props} name={`Hola`} />} />
            <Route path="/about" exact render={(props) => <Coleccion {...props} name={`Hola`} />} />
          </div>
          <Footer /> 
        </div>
    </Switch>
    </Router> 
  );
}

export default App;
