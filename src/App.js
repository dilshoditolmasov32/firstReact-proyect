import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Category from "./components/main/category/Category.js";
import Hero from "./components/main/hero/Hero.js";
import Product from "./components/main/products/Product.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Category />
        <Hero />
        <Product />
      </div>
    </div>
  );
}

export default App;
