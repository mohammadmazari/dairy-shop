import React, { useEffect } from "react";
import Auth from "./pages/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import Myorders from "./pages/profile/Myorders";
import Myfavorits from "./pages/profile/Myfavorits";
import Mycomments from "./pages/profile/Mycomments";
import Myaddresses from "./pages/profile/Myaddresses";
import Page404 from "./pages/404";
import Notifications from "./pages/profile/Notifications";
import RecentlyVisited from "./pages/profile/RecentlyVisited";
function App() {
  useEffect(() => {
    document.title = " دیری شاپ";
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-orders" element={<Myorders />} />
          <Route path="/myfavorits" element={<Myfavorits />} />
          <Route path="/my-comments" element={<Mycomments />} />
          <Route path="/my-addresses" element={<Myaddresses />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/recently-visited" element={<RecentlyVisited />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
