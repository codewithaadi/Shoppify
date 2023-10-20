import { BrowserRouter,Routes,Route } from "react-router-dom";

import Logins from "./components/account/Logins";
import Home from "./components/home/Home";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Logins />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
      </BrowserRouter>
    


    </>
  )
}

export default App
