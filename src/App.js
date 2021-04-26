
import './App.css';
import {NavBar} from './components/Nav';
import {PhotoGrid} from './components/Grid';
import {Footer} from './components/Footer';
import{Proyectos} from './components/Proyectos';
import {Home} from './components/Home';
import {About} from './components/About';
import {HomeScroll} from './components/HomeScroll';
import {HomeScroll2} from './components/HomeScroll2';



//routes
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

 

  return (
   <Router>
      <Switch>
        <div className="App">
          {/* <Route path="/" exact component={Home} /> */}
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/proyectos" exact component={Proyectos} />
          <Route path="/about" exact component={About} />

          <Footer />
        </div >
      </Switch>
    </Router> 
  );
}


export default App;
