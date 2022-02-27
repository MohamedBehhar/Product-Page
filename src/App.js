import Cart from "./components/Cart";
import Lightbox from "./components/Lightbox";
import Navbar from "./components/Navbar";
import ProductDescription from "./components/ProductDescription";
import ProductImages from "./components/ProductImages";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Lightbox />
      <div className="hero">
        <ProductImages />
        <ProductDescription/>
      </div>
      <Cart />
      <Sidebar />
    </div>
  );
}

export default App;
