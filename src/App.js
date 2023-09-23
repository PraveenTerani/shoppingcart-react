import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/Navbar";
import { Shop } from "./components/shop/Shop";
import { Addcart } from "./components/cart/Addcart";
import { ShopcontextProvider } from "./context/Shopcontext";
import WishList from "./components/wishList/WishList";
import ProductDetails from "./components/shop/ProductDetails";



function App() {
  return (
    <div className="App">
     
      <ShopcontextProvider>
        <Router>
        <Navbar /> 
          <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/cart" element={<Addcart/>}/>
            <Route path="/wishList" element={<WishList/>}/>
            <Route path="/productDetails/:id" element={<ProductDetails/>}/>
          </Routes>
        </Router>
        </ShopcontextProvider>
      
    </div>
  );
}

export default App;
