import React from "react"
import Product from "./Components/Product";
import About from "./Components/About";
import News from "./Components/News";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Shop from "./Components/Shop";

function App() {
  return (
    <div>
      <h1>This is my App component</h1>
      <Home />
      <About />
      <Product />
      <Services />
      <News />
      <Contact />
      <Shop />
    </div>
  )
}
export default App
