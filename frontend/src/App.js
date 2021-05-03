
import './App.css';
import {NavBar} from './components/Nav';
import {Footer} from './components/Footer';
import{Proyectos} from './components/Proyectos';
import {Home} from './components/Home';
import {About} from './components/About';
import {Coleccion} from './components/Coleccion';
import {ContactForm} from './components/ContactForm';




//routes
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

 

  return (
   <Router>
      <Switch>
        <div className="App inverse">
          {/* <Route path="/" exact component={Home} /> */}
          <NavBar />
            <Route path="/" exact component={Home} />
            <Route path="/proyectos" exact component={Proyectos} />
            <Route path="/about" exact component={About} />
            <Route path="/proyectos/:nombreProyecto" exact component={Coleccion} />
            <Route path="/contacto" exact component={ContactForm} />
          <Footer />
        </div >
      </Switch>
    </Router> 
  );
}


export default App;
