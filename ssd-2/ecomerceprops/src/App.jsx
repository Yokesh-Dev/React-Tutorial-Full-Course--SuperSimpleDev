import './App.css'
import Ecom from './Ecom'
import socksImg from "./assets/socks.png";
import Tshirt from "./assets/tshirt.png";
import Ball from "./assets/ball.png";
import Note from "./assets/note.jpg";

function App() {
  return (
    <>
      <Ecom product="Cotton Socks" price="$22" discount="$1.2" img={socksImg} />
      <Ecom product="Tennis Ball" price="$6" discount="$0.7" img={Ball} />
      <Ecom product="T-shirt" price="$7.99" discount="$0.5" img={Tshirt} />
      <Ecom product="Notebook" price="$5" img={Note} />
    </>
  )
}

export default App
