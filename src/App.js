import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/Navbar";
import { Shop } from "./components/shop/Shop";
import { Addcart } from "./components/cart/Addcart";
import { ShopcontextProvider } from "./context/Shopcontext";


function App() {
  return (
    <div className="App">
     
      <ShopcontextProvider>
        <Router>
        <Navbar /> 
          <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/cart" element={<Addcart/>}/>
          </Routes>
        </Router>
        </ShopcontextProvider>
      
    </div>
  );
}

export default App;
