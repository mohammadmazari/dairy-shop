import React, { createContext, useEffect } from "react";
import Auth from "./pages/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage, { Context } from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import Myorders from "./pages/profile/Myorders";
import Myfavorits from "./pages/profile/Myfavorits";
import Mycomments from "./pages/profile/Mycomments";
import Myaddresses from "./pages/profile/Myaddresses";
import Page404 from "./pages/404";
import Notifications from "./pages/profile/Notifications";
import RecentlyVisited from "./pages/profile/RecentlyVisited";
import uselocalstoreage from "./hooks/uselocalstorage";
import Cartpage from "./pages/Cartpage";
export const Cart = createContext();

function App() {
  useEffect(() => {
    document.title = " دیری شاپ";
  });
  const [cart, setcart] = uselocalstoreage("cart", []);
  return (
    <>
      <BrowserRouter>
        <Cart.Provider value={{ cart, setcart }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-orders" element={<Myorders />} />
            <Route path="/myfavorits" element={<Myfavorits />} />
            <Route path="/my-comments" element={<Mycomments />} />
            <Route path="/my-addresses" element={<Myaddresses />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/recently-visited" element={<RecentlyVisited />} />
            <Route path="/cart" element={<Cartpage/>}/>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Cart.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
