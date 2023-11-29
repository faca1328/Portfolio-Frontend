import { MainBody } from "./components/body/MainBody";
import { Footer } from "./components/footer/Footer";
import { NavBar } from "./components/header/NavBar";

export function App() {


  return (
    <>
    <header>
      <NavBar/>
    </header>
    <body>
      <MainBody/>
    </body>
    <footer id="contact">
      <Footer/>
    </footer>
    </>
  )
}


