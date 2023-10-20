import Logins from "./components/account/Logins";
import Home from "./components/home/Home";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer />
      <Logins />
      <Home />
    </>
  )
}

export default App
