import "./App.css";
import Navbaar from "./components/header/Navbaar";
import Newnav from "./components/newnavbaar/Newnav";
import Maincomp from "./components/home/Maincom";
import Footer from "./components/footer/Footer";
import Sign_in from "./components/signup_sign/Sign_in";
import Sign_up from "./components/signup_sign/Sign_up";
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Navbaar />
      <Newnav />
      <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route path="/login" element={<Sign_in />} />
        <Route path="/register" element={<Sign_up />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
