import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/Nav';
import {PhotoGrid} from './components/Grid';
import {Footer} from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const hello = () =>{
    alert("hey")
  }

  return (
    <div className="App">
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
  </div>
  );
}

export default App;
