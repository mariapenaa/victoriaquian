import logo from './logo.svg';
import './App.css';
import img24 from "./img/rollo/rollo24.jpg"
import img25 from "./img/rollo/rollo25.jpg"
import img26 from "./img/rollo/rollo26.jpg"
import img27 from "./img/rollo/rollo27.jpg"
import img28 from "./img/rollo/rollo28.jpg"
import img29 from "./img/rollo/rollo29.jpg"
import img30 from "./img/rollo/rollo30.jpg"
import img31 from "./img/rollo/rollo31.jpg"
import img32 from "./img/rollo/rollo32.jpg"
import img33 from "./img/rollo/rollo33.jpg"

import { SRLWrapper } from "simple-react-lightbox";

const options = {
  settings: {
    overlayColor: "black",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  buttons: {
    backgroundColor: "transparent",
    iconColor: "white",
  },
  caption: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  }
};


function App() {
  return (
    <div className="App">
      <SRLWrapper options={options}>
      <div class="row">
        <div class="column">
          <img src={img24} />
          <img src={img25} />
          <img src={img26} />
        </div>
        <div class="column">
          <img src={img27} />
          <img src={img28} />
          <img src={img29} />
        </div>
        <div class="column">
          <img src={img30} />
          <img src={img31} />
          <img src={img32} />
          <img src={img33} />
        </div>
      </div>
      </SRLWrapper>
    </div>
  );
}

export default App;
