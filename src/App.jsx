import React from "react";
import Auth from "./pages/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import Myorders from "./pages/profile/Myorders";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/product/:id" element={<ProductPage/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/my-orders" element={<Myorders/>}/>
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
