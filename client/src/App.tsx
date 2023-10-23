import { useState,FC } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Header from "./components/header/Header";
import Logins from "./components/account/Logins";
import Home from "./components/home/Home";
import DetailView from "./components/detailView/DetailView";
import Cart from "./components/cart/Cart";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type PrivateRouteProps = {
  isAuthenticated : boolean;
}


function App() {
  const [isAuthenticated, isUserAuthenticated] = useState<boolean>(false);

  const PrivateRoute : FC<PrivateRouteProps> = ({ isAuthenticated}) => {
    return isAuthenticated ? 
      <>
        <Outlet />
        <Header isUserAuthenticated={isUserAuthenticated}/>
      </>
     : (
      <Navigate replace to="/login" />
    );
  };

  
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
        <Route path={'*'} element={<Navigate to={`/login`} />} />

          <Route path="/login" element={<Logins isUserAuthenticated={isUserAuthenticated} isAuthenticated={isAuthenticated}/>} />

          <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/product/:id" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/product/:id" element={<DetailView />} />
          </Route>

          <Route path="/cart" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/cart" element={<Cart/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
