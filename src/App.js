import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import NavBar from "./component/NavBar/NavBar";
import logo from "./assets/img/Logo.svg";
import Book from "./assets/img/Book-01.svg";
import Business from "./assets/img/Business-01.svg";
import Check from "./assets/img/Check live-01.svg";
import See from "./assets/img/see-01.svg";
import Sport from "./assets/img/Sport-01.svg";
import Backyard from "./assets/img/Backyard party-01.svg";
import Booking from "./assets/img/Bookings.jpg";
import Glow from "./assets/img/GLOW.jpg";
import Water from "./assets/img/INFLATABLE WATER.jpg";
import Large from "./assets/img/LARGE COMBO.jpg";
import Obstacle from "./assets/img/OBSTACLE cousre.jpg";
import Table from "./assets/img/TABLES AND DRY.jpg";
import Medium from "./assets/img/MEDIUM BOUNCY.jpg";
import Fencing from "./assets/img/FENCING AND.jpg";
import Chair from "./assets/img/CHAIRS AND.jpg";
import Weddings from "./assets/img/Weddings-01.svg";
import School from "./assets/img/School-01.svg";
import Community from "./assets/img/Community-01.svg";
import Nav from "./component/Nav/Nav";
import { Route, Switch } from "react-router-dom";
import Wedding from "./component/Wedding/Wedding";
import Marquees from "./component/Marquees/Marquees";
import JumpingCastle from "./component/JumpingCastle/JumpingCastle";
import FunFood from "./component/FunFood/FunFood";
import Faq from "./component/Faq/Faq";
import Contact from "./component/Contact/Contact";
import Chairs from "./component/Chairs/Chairs";
import Lighting from "./component/Lighting/Lighting";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/wedding">
          <Wedding />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/funfood">
          <FunFood />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/marquees">
          <Marquees />
        </Route>
        <Route path="/lighting">
          <Lighting />
        </Route>
        <Route path="/chairs">
          <Chairs />
        </Route>
        <Route path="/jumpingcastle">
          <JumpingCastle />
        </Route>
        <Route path="/" component={NavBar}>
          <NavBar />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
