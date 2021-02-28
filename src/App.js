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
        Backyard={Backyard}
        Booking={Booking}
        Medium={Medium}
        Glow={Glow}
        Water={Water}
        Large={Large}
        Obstacle={Obstacle}
        Table={Table}
        Fencing={Fencing}
        Chair={Chair}
        Weddings={Weddings}
        School={School}
        Community={Community}
      />
    </div>
  );
}

export default App;
