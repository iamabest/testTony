import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import FastFood from "./components/Category/FastFood/FastFood";
import Category from "./components/Category/Category";
import Shop from "./components/Shop/Shop";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ProductHotDog from "./components/Category/FastFood/ProductHotDog";
import ProductHamburger from "./components/Category/FastFood/ProductHamburger";
import ProductSoftDrink from "./components/Category/FastFood/ProductSoftDrink";

function App() {
  return (
   <Routes>
    <Route path="/header" element={<Header/>} />
    <Route path="/footer" element={<Footer/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>} />
    <Route path="shop" element={<Shop/>} />
    <Route path="/category" element={<Category/>} />
          <Route path="/fastFood" element={<FastFood/>} />
                <Route path="/productHamburger" element={<ProductHamburger/>} />
                <Route path="/productHotDog" element={<ProductHotDog/>} />
                <Route path="/productSoftDrink" element={<ProductSoftDrink/>} />
   </Routes>
  );
}

export default App;
