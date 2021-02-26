import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./component/NavBar/NavBar";
import logo from "./assets/img/Logo.svg";
import Book from "./assets/img/Book-01.svg";
import Business from "./assets/img/Business-01.svg";
import Check from "./assets/img/Check live-01.svg";
import See from "./assets/img/see-01.svg";
import Sport from "./assets/img/Sport-01.svg";
import Backyard 

function App() {
  return (
    <div className="App">
      <NavBar
        logo={logo}
        Book={Book}
        Business={Business}
        Check={Check}
        See={See}
        Sport={Sport}
      />
    </div>
  );
}

export default App;
