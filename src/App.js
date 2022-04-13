import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Wallet from "./components/Wallet";
import Market from "./components/Market";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  return (
    <>
      <Router  Redirect to="/" >
        <div className="app">

          <Routes>
            <Route path="/checkout" element={<>{" "}<Header /> <Market /> <Home/> <Footer/> {" "}</> }  />
            <Route path="/walletPage" element={<Wallet />} />
            <Route path="/"    element={  <>  {" "} <Header /> <Home/>  <Sidebar />  <Footer/>{" "}  </> } />
            <Route path="/wallet" element={   <>{" "} <Header /> <Home/>  <Sidebar />  <Footer/>{" "} </> } />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
